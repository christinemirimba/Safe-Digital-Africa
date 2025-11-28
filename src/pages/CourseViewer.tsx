import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
    BookOpen,
    CheckCircle,
    ChevronLeft,
    ChevronRight,
    Menu,
    PlayCircle,
    FileText,
    Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { motion, AnimatePresence } from "framer-motion";

// Mock Data
const courseData = {
    "privacy-basics": {
        title: "Online Privacy Basics",
        description: "Learn how to protect your personal information online.",
        modules: [
            {
                id: "m1",
                title: "Introduction to Digital Privacy",
                lessons: [
                    { id: "l1", title: "Why Privacy Matters", type: "video", duration: "5 min" },
                    { id: "l2", title: "Common Privacy Risks", type: "text", duration: "10 min" },
                ]
            },
            {
                id: "m2",
                title: "Securing Your Accounts",
                lessons: [
                    { id: "l3", title: "Creating Strong Passwords", type: "video", duration: "8 min" },
                    { id: "l4", title: "Two-Factor Authentication", type: "text", duration: "12 min" },
                    { id: "l5", title: "Password Managers", type: "text", duration: "7 min" },
                ]
            },
            {
                id: "m3",
                title: "Browsing Safely",
                lessons: [
                    { id: "l6", title: "Understanding Cookies", type: "video", duration: "6 min" },
                    { id: "l7", title: "Private Browsing Modes", type: "text", duration: "5 min" },
                ]
            }
        ]
    }
};

const CourseViewer = () => {
    const { courseId } = useParams();
    const [currentLesson, setCurrentLesson] = useState("l1");
    const [completedLessons, setCompletedLessons] = useState<string[]>([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Default to privacy basics if course not found
    const course = courseData[courseId as keyof typeof courseData] || courseData["privacy-basics"];

    const handleLessonComplete = () => {
        if (!completedLessons.includes(currentLesson)) {
            setCompletedLessons([...completedLessons, currentLesson]);
        }
    };

    const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
    const progress = (completedLessons.length / totalLessons) * 100;

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
                        <span>{Math.round(progress)}% Complete</span>
                        <span>{completedLessons.length}/{totalLessons} Lessons</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                </div>
            </div>
            <ScrollArea className="flex-1">
                <div className="p-4 space-y-6">
                    {course.modules.map((module, index) => (
                        <div key={module.id}>
                            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 pl-2 border-l-2 border-primary/20">
                                Module {index + 1}: {module.title}
                            </h3>
                            <div className="space-y-1">
                                {module.lessons.map((lesson) => (
                                    <button
                                        key={lesson.id}
                                        onClick={() => {
                                            setCurrentLesson(lesson.id);
                                            setIsSidebarOpen(false);
                                        }}
                                        className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${currentLesson === lesson.id
                                                ? "bg-primary/10 text-primary font-medium"
                                                : "hover:bg-muted text-muted-foreground hover:text-foreground"
                                            }`}
                                    >
                                        <div className="flex-shrink-0">
                                            {completedLessons.includes(lesson.id) ? (
                                                <CheckCircle className="h-5 w-5 text-green-600" />
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
                    ))}
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
                                <motion.div
                                    key={currentLesson}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="mb-8">
                                        <span className="text-sm font-medium text-primary mb-2 block">
                                            Current Lesson
                                        </span>
                                        <h1 className="text-3xl font-bold font-display mb-4">
                                            {course.modules.flatMap(m => m.lessons).find(l => l.id === currentLesson)?.title}
                                        </h1>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground border-b pb-6">
                                            <span className="flex items-center gap-1">
                                                <PlayCircle className="h-4 w-4" /> Video Lesson
                                            </span>
                                            <span>•</span>
                                            <span>Updated Oct 2024</span>
                                        </div>
                                    </div>

                                    {/* Content Placeholder */}
                                    <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                                        <div className="aspect-video bg-muted rounded-xl flex items-center justify-center mb-8 border-2 border-dashed border-muted-foreground/20">
                                            <div className="text-center">
                                                <PlayCircle className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
                                                <p className="text-muted-foreground">Video Player Placeholder</p>
                                            </div>
                                        </div>
                                        <p>
                                            In this lesson, we will explore the fundamental concepts of digital privacy.
                                            Understanding how your data is collected and used is the first step towards
                                            taking control of your digital footprint.
                                        </p>
                                        <h3>Key Takeaways</h3>
                                        <ul>
                                            <li>Data collection methods used by websites</li>
                                            <li>The importance of reading privacy policies</li>
                                            <li>Simple steps to minimize data exposure</li>
                                        </ul>
                                        <p>
                                            Remember, privacy is not about having something to hide, but about having
                                            control over what you share and who you share it with.
                                        </p>
                                    </div>

                                    {/* Navigation Footer */}
                                    <div className="flex items-center justify-between pt-8 border-t">
                                        <Button variant="outline" disabled={currentLesson === "l1"}>
                                            <ChevronLeft className="mr-2 h-4 w-4" />
                                            Previous Lesson
                                        </Button>
                                        <Button
                                            onClick={handleLessonComplete}
                                            className={completedLessons.includes(currentLesson) ? "bg-green-600 hover:bg-green-700" : ""}
                                        >
                                            {completedLessons.includes(currentLesson) ? (
                                                <>
                                                    Completed <CheckCircle className="ml-2 h-4 w-4" />
                                                </>
                                            ) : (
                                                <>
                                                    Mark as Complete <ChevronRight className="ml-2 h-4 w-4" />
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </ScrollArea>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
};

export default CourseViewer;
