import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
    BookOpen,
    CheckCircle,
    ChevronLeft,
    ChevronRight,
    Menu,
    PlayCircle,
    FileText,
    Shield,
    Lock,
    AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import Certificate from "@/components/Certificate";
import { courses, Course, Module, Lesson } from "@/data/courses";

const CourseViewer = () => {
    const { courseId } = useParams();
    const { toast } = useToast();
    const [currentLessonId, setCurrentLessonId] = useState<string>("");
    const [completedLessons, setCompletedLessons] = useState<string[]>([]);
    const [quizResults, setQuizResults] = useState<Record<string, boolean>>({}); // lessonId -> passed
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Quiz State
    const [currentQuizAnswers, setCurrentQuizAnswers] = useState<Record<string, number>>({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);

    const course = courses[courseId as string] || courses["privacy-basics"];

    // Initialize state from localStorage or defaults
    useEffect(() => {
        const savedProgress = localStorage.getItem(`course_progress_${course.id}`);
        if (savedProgress) {
            const { completed, quizzes } = JSON.parse(savedProgress);
            setCompletedLessons(completed || []);
            setQuizResults(quizzes || []);
        }

        // Set initial lesson
        if (!currentLessonId && course.modules.length > 0) {
            setCurrentLessonId(course.modules[0].lessons[0].id);
        }
    }, [course.id]);

    // Save progress
    useEffect(() => {
        localStorage.setItem(`course_progress_${course.id}`, JSON.stringify({
            completed: completedLessons,
            quizzes: quizResults
        }));
    }, [completedLessons, quizResults, course.id]);

    const currentModuleIndex = course.modules.findIndex(m => m.lessons.some(l => l.id === currentLessonId));
    const currentModule = course.modules[currentModuleIndex];
    const currentLesson = currentModule?.lessons.find(l => l.id === currentLessonId);

    const isModuleLocked = (moduleIndex: number) => {
        if (moduleIndex === 0) return false;
        const prevModule = course.modules[moduleIndex - 1];
        // Find the quiz in the previous module
        const quizLesson = prevModule.lessons.find(l => l.type === 'quiz');
        if (!quizLesson) return false; // If no quiz, assume unlocked (or check if all lessons completed)

        return !quizResults[quizLesson.id]; // Locked if quiz not passed
    };

    const handleLessonComplete = () => {
        if (currentLesson && !completedLessons.includes(currentLesson.id)) {
            setCompletedLessons([...completedLessons, currentLesson.id]);
            toast({
                title: "Lesson Completed",
                description: "Great job! Moving to the next item.",
                className: "bg-green-600 text-white border-none"
            });
        }
        navigateToNext();
    };

    const handleQuizSubmit = () => {
        if (!currentLesson || !currentLesson.questions) return;

        let correctCount = 0;
        currentLesson.questions.forEach(q => {
            if (currentQuizAnswers[q.id] === q.correctAnswer) {
                correctCount++;
            }
        });

        const passed = correctCount === currentLesson.questions.length; // Require 100% to pass? Or 80%? Let's say 100% for now or > 70%
        // Let's make it strict: 100% to pass as per "Modules unlock only after passing" usually implies mastery.
        // Or let's say > 50%.
        const isPass = (correctCount / currentLesson.questions.length) >= 0.7;

        setQuizSubmitted(true);

        if (isPass) {
            setQuizResults({ ...quizResults, [currentLesson.id]: true });
            if (!completedLessons.includes(currentLesson.id)) {
                setCompletedLessons([...completedLessons, currentLesson.id]);
            }
            toast({
                title: "Quiz Passed!",
                description: `You got ${correctCount}/${currentLesson.questions.length} correct.`,
                className: "bg-green-600 text-white border-none"
            });
        } else {
            toast({
                title: "Quiz Failed",
                description: "Please review the material and try again.",
                variant: "destructive"
            });
        }
    };

    const navigateToNext = () => {
        // Find next lesson
        const allLessons = course.modules.flatMap(m => m.lessons);
        const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
        if (currentIndex < allLessons.length - 1) {
            const nextLesson = allLessons[currentIndex + 1];
            // Check if next lesson belongs to a locked module
            const nextModuleIndex = course.modules.findIndex(m => m.lessons.some(l => l.id === nextLesson.id));
            if (!isModuleLocked(nextModuleIndex)) {
                setCurrentLessonId(nextLesson.id);
                // Reset quiz state if moving to a quiz
                setQuizSubmitted(false);
                setCurrentQuizAnswers({});
            } else {
                toast({
                    title: "Module Locked",
                    description: "You must pass the previous module's quiz to unlock this.",
                    variant: "destructive"
                });
            }
        }
    };

    const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);
    const progressPercentage = (completedLessons.length / totalLessons) * 100;
    const isCourseCompleted = progressPercentage === 100;

    const SidebarContent = () => (
        <div className="h-full flex flex-col bg-muted/30 border-r">
            <div className="p-4 border-b bg-background">
                <Link to="/digital-literacy" className="flex items-center text-sm text-muted-foreground hover:text-primary mb-4 transition-colors">
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Back to Courses
                </Link>
                <h2 className="font-bold text-lg leading-tight mb-2">{course.title}</h2>
                <div className="space-y-2">
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{Math.round(progressPercentage)}% Complete</span>
                        <span>{completedLessons.length}/{totalLessons} Steps</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                </div>
                {isCourseCompleted && (
                    <div className="mt-4">
                        <Certificate
                            studentName="Learner" // Ideally from user profile
                            courseName={course.title}
                            date={new Date().toLocaleDateString()}
                        />
                    </div>
                )}
            </div>
            <ScrollArea className="flex-1">
                <div className="p-4 space-y-6">
                    {course.modules.map((module, index) => {
                        const locked = isModuleLocked(index);
                        return (
                            <div key={module.id} className={locked ? "opacity-50 pointer-events-none" : ""}>
                                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 pl-2 border-l-2 border-primary/20 flex justify-between items-center">
                                    <span>Module {index + 1}: {module.title}</span>
                                    {locked && <Lock className="h-3 w-3" />}
                                </h3>
                                <div className="space-y-1">
                                    {module.lessons.map((lesson) => (
                                        <button
                                            key={lesson.id}
                                            onClick={() => {
                                                if (!locked) {
                                                    setCurrentLessonId(lesson.id);
                                                    setIsSidebarOpen(false);
                                                    setQuizSubmitted(false);
                                                    setCurrentQuizAnswers({});
                                                }
                                            }}
                                            className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${currentLessonId === lesson.id
                                                ? "bg-primary/10 text-primary font-medium"
                                                : "hover:bg-muted text-muted-foreground hover:text-foreground"
                                                }`}
                                        >
                                            <div className="flex-shrink-0">
                                                {completedLessons.includes(lesson.id) ? (
                                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                                ) : lesson.type === "quiz" ? (
                                                    <Shield className="h-5 w-5" />
                                                ) : lesson.type === "video" ? (
                                                    <PlayCircle className="h-5 w-5" />
                                                ) : (
                                                    <FileText className="h-5 w-5" />
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="truncate text-sm">{lesson.title}</p>
                                                <p className="text-xs opacity-70">{lesson.duration}</p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </ScrollArea>
        </div>
    );

    return (
        <div className="h-[calc(100vh-5rem)] flex flex-col md:flex-row overflow-hidden bg-background">
            {/* Mobile Sidebar Trigger */}
            <div className="md:hidden p-4 border-b flex items-center justify-between bg-background">
                <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="font-semibold truncate">{course.title}</span>
                </div>
                <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-0 w-80">
                        <SidebarContent />
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop Layout */}
            <ResizablePanelGroup direction="horizontal" className="flex-1">
                <ResizablePanel defaultSize={25} minSize={20} maxSize={35} className="hidden md:block">
                    <SidebarContent />
                </ResizablePanel>

                <ResizableHandle className="hidden md:flex" />

                <ResizablePanel defaultSize={75}>
                    <ScrollArea className="h-full">
                        <div className="max-w-4xl mx-auto p-6 md:p-12">
                            <AnimatePresence mode="wait">
                                {currentLesson && (
                                    <motion.div
                                        key={currentLesson.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="mb-8">
                                            <span className="text-sm font-medium text-primary mb-2 block">
                                                {currentLesson.type === 'quiz' ? 'Assessment' : 'Lesson'}
                                            </span>
                                            <h1 className="text-3xl font-bold font-display mb-4">
                                                {currentLesson.title}
                                            </h1>
                                        </div>

                                        {currentLesson.type === 'text' && (
                                            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                    {currentLesson.content || ""}
                                                </ReactMarkdown>
                                            </div>
                                        )}

                                        {currentLesson.type === 'quiz' && currentLesson.questions && (
                                            <div className="space-y-8 mb-12">
                                                {currentLesson.questions.map((q, idx) => (
                                                    <Card key={q.id}>
                                                        <CardHeader>
                                                            <CardTitle className="text-lg">
                                                                {idx + 1}. {q.text}
                                                            </CardTitle>
                                                        </CardHeader>
                                                        <CardContent>
                                                            <RadioGroup
                                                                value={currentQuizAnswers[q.id]?.toString()}
                                                                onValueChange={(val) => {
                                                                    if (!quizSubmitted) {
                                                                        setCurrentQuizAnswers({
                                                                            ...currentQuizAnswers,
                                                                            [q.id]: parseInt(val)
                                                                        });
                                                                    }
                                                                }}
                                                                disabled={quizSubmitted && quizResults[currentLesson.id]}
                                                            >
                                                                {q.options.map((opt, optIdx) => (
                                                                    <div key={optIdx} className="flex items-center space-x-2">
                                                                        <RadioGroupItem value={optIdx.toString()} id={`${q.id}-${optIdx}`} />
                                                                        <Label htmlFor={`${q.id}-${optIdx}`} className={
                                                                            quizSubmitted
                                                                                ? optIdx === q.correctAnswer
                                                                                    ? "text-green-600 font-bold"
                                                                                    : currentQuizAnswers[q.id] === optIdx
                                                                                        ? "text-red-600"
                                                                                        : ""
                                                                                : ""
                                                                        }>
                                                                            {opt}
                                                                        </Label>
                                                                    </div>
                                                                ))}
                                                            </RadioGroup>
                                                        </CardContent>
                                                    </Card>
                                                ))}

                                                {!quizResults[currentLesson.id] && (
                                                    <Button onClick={handleQuizSubmit} className="w-full">
                                                        Submit Quiz
                                                    </Button>
                                                )}

                                                {quizResults[currentLesson.id] && (
                                                    <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded-lg flex items-center gap-2">
                                                        <CheckCircle className="h-5 w-5" />
                                                        <span>Quiz Passed! You can proceed to the next module.</span>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* Navigation Footer */}
                                        <div className="flex items-center justify-between pt-8 border-t">
                                            <Button
                                                variant="outline"
                                                disabled={currentLessonId === course.modules[0].lessons[0].id}
                                                onClick={() => {
                                                    // Logic to go back
                                                }}
                                            >
                                                <ChevronLeft className="mr-2 h-4 w-4" />
                                                Previous
                                            </Button>

                                            {currentLesson.type !== 'quiz' ? (
                                                <Button
                                                    onClick={handleLessonComplete}
                                                    className={completedLessons.includes(currentLesson.id) ? "bg-green-600 hover:bg-green-700" : ""}
                                                >
                                                    {completedLessons.includes(currentLesson.id) ? (
                                                        <>
                                                            Completed <CheckCircle className="ml-2 h-4 w-4" />
                                                        </>
                                                    ) : (
                                                        <>
                                                            Mark as Complete <ChevronRight className="ml-2 h-4 w-4" />
                                                        </>
                                                    )}
                                                </Button>
                                            ) : (
                                                <Button
                                                    onClick={navigateToNext}
                                                    disabled={!quizResults[currentLesson.id]}
                                                >
                                                    Next Module <ChevronRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </ScrollArea>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
};

export default CourseViewer;
