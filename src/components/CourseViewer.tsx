import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Lock, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface Subtopic {
  id: string;
  title: string;
  content: string;
  quiz: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

interface Module {
  id: string;
  title: string;
  subtopics: Subtopic[];
}

interface CourseViewerProps {
  courseName: string;
  modules: Module[];
  onClose: () => void;
}

export const CourseViewer = ({ courseName, modules, onClose }: CourseViewerProps) => {
  const { toast } = useToast();
  const [progress, setProgress] = useState<Record<string, { completed: boolean; score: number }>>({});
  const [currentModule, setCurrentModule] = useState(0);
  const [currentSubtopic, setCurrentSubtopic] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`course_${courseName}`);
    if (saved) setProgress(JSON.parse(saved));
  }, [courseName]);

  const saveProgress = (newProgress: typeof progress) => {
    setProgress(newProgress);
    localStorage.setItem(`course_${courseName}`, JSON.stringify(newProgress));
  };

  const currentSubtopicData = modules[currentModule]?.subtopics[currentSubtopic];
  const subtopicId = `${currentModule}-${currentSubtopic}`;

  const calculateOverallProgress = () => {
    const total = modules.reduce((sum, m) => sum + m.subtopics.length, 0);
    const completed = Object.values(progress).filter(p => p.completed).length;
    return Math.round((completed / total) * 100);
  };

  const handleTakeQuiz = () => {
    setShowQuiz(true);
    setQuizAnswers(new Array(currentSubtopicData.quiz.length).fill(-1));
    setQuizSubmitted(false);
  };

  const handleSubmitQuiz = () => {
    const score = quizAnswers.reduce((acc, answer, idx) => 
      answer === currentSubtopicData.quiz[idx].correctAnswer ? acc + 1 : acc, 0);
    const percentage = (score / currentSubtopicData.quiz.length) * 100;
    
    const newProgress = { ...progress, [subtopicId]: { completed: percentage >= 70, score: percentage } };
    saveProgress(newProgress);
    setQuizSubmitted(true);

    if (percentage >= 70) {
      toast({ title: "Quiz Passed!", description: `You scored ${percentage.toFixed(0)}%` });
    } else {
      toast({ title: "Try Again", description: `You scored ${percentage.toFixed(0)}%. Need 70% to pass.`, variant: "destructive" });
    }
  };

  const isSubtopicUnlocked = (moduleIdx: number, subtopicIdx: number) => {
    if (subtopicIdx === 0) return true;
    return progress[`${moduleIdx}-${subtopicIdx - 1}`]?.completed || false;
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">{courseName}</h1>
          <Button onClick={onClose} variant="outline">Close</Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-sm">Course Progress</CardTitle>
              <Progress value={calculateOverallProgress()} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">{calculateOverallProgress()}% Complete</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {modules.map((module, mIdx) => (
                <div key={module.id}>
                  <h3 className="font-semibold text-sm mb-2">{module.title}</h3>
                  {module.subtopics.map((subtopic, sIdx) => {
                    const unlocked = isSubtopicUnlocked(mIdx, sIdx);
                    const completed = progress[`${mIdx}-${sIdx}`]?.completed;
                    return (
                      <Button
                        key={subtopic.id}
                        variant={mIdx === currentModule && sIdx === currentSubtopic ? "secondary" : "ghost"}
                        className="w-full justify-start text-xs mb-1"
                        onClick={() => unlocked && (setCurrentModule(mIdx), setCurrentSubtopic(sIdx), setShowQuiz(false))}
                        disabled={!unlocked}
                      >
                        {completed ? <CheckCircle2 className="mr-2 h-3 w-3" /> : unlocked ? null : <Lock className="mr-2 h-3 w-3" />}
                        {subtopic.title}
                      </Button>
                    );
                  })}
                </div>
              ))}
              {calculateOverallProgress() === 100 && (
                <Button className="w-full" variant="default">
                  <Download className="mr-2 h-4 w-4" />
                  Download Certificate
                </Button>
              )}
            </CardContent>
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>{currentSubtopicData?.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {!showQuiz ? (
                <div className="space-y-4">
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="whitespace-pre-wrap">{currentSubtopicData?.content}</p>
                  </div>
                  <Button onClick={handleTakeQuiz} className="mt-6">Take Assignment</Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {currentSubtopicData.quiz.map((q, qIdx) => (
                    <div key={qIdx} className="space-y-3">
                      <p className="font-semibold">Question {qIdx + 1}: {q.question}</p>
                      {q.options.map((opt, oIdx) => (
                        <Button
                          key={oIdx}
                          variant={quizAnswers[qIdx] === oIdx ? "secondary" : "outline"}
                          className="w-full justify-start"
                          onClick={() => !quizSubmitted && setQuizAnswers(prev => { const n = [...prev]; n[qIdx] = oIdx; return n; })}
                          disabled={quizSubmitted}
                        >
                          {opt}
                        </Button>
                      ))}
                    </div>
                  ))}
                  {!quizSubmitted ? (
                    <Button onClick={handleSubmitQuiz} disabled={quizAnswers.includes(-1)}>Submit Quiz</Button>
                  ) : (
                    <div className="space-x-2">
                      <Button onClick={() => setShowQuiz(false)}>Back to Content</Button>
                      <Button variant="outline" onClick={handleTakeQuiz}>Retake Quiz</Button>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
