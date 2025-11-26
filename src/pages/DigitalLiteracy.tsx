import { BookOpen, Video, FileText, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { CourseViewer } from "@/components/CourseViewer";
import { courseData } from "@/data/courseData";

const courses = [
  {
    title: "Online Privacy Fundamentals",
    level: "Beginner",
    duration: "2 hours",
    icon: BookOpen,
    topics: ["Password security", "Privacy settings", "Data protection", "Secure browsing"],
  },
  {
    title: "Social Media Safety",
    level: "Beginner",
    duration: "1.5 hours",
    icon: Video,
    topics: ["Profile privacy", "Content sharing", "Recognizing threats", "Reporting abuse"],
  },
  {
    title: "Digital Communication Security",
    level: "Intermediate",
    duration: "3 hours",
    icon: FileText,
    topics: ["Encrypted messaging", "Email security", "Video call safety", "File sharing"],
  },
  {
    title: "Identifying Online Threats",
    level: "Intermediate",
    duration: "2.5 hours",
    icon: BookOpen,
    topics: ["Phishing attacks", "Scams", "Cyberbullying", "Fake profiles"],
  },
];

const DigitalLiteracy = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  if (selectedCourse && courseData[selectedCourse as keyof typeof courseData]) {
    return (
      <CourseViewer
        courseName={selectedCourse}
        modules={courseData[selectedCourse as keyof typeof courseData].modules}
        onClose={() => setSelectedCourse(null)}
      />
    );
  }

  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Digital Literacy Hub</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Learn essential digital skills to navigate online spaces safely and confidently. 
            Our courses are designed specifically for women and girls across Africa.
          </p>
        </motion.div>

        {/* Quick Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="border-l-4 border-l-secondary bg-secondary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-secondary" />
                Quick Safety Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-3 md:grid-cols-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-secondary" />
                  <span>Use strong, unique passwords for every account</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-secondary" />
                  <span>Enable two-factor authentication wherever possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-secondary" />
                  <span>Be cautious about sharing personal information online</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-secondary" />
                  <span>Verify sources before clicking links or downloading files</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Courses Grid */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Available Courses</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full shadow-card transition-all duration-300 hover:shadow-card-hover">
                  <CardHeader>
                    <div className="mb-4 flex items-start justify-between">
                      <course.icon className="h-10 w-10 text-primary" />
                      <Badge variant={course.level === "Beginner" ? "secondary" : "default"}>
                        {course.level}
                      </Badge>
                    </div>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription className="text-base">{course.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3 text-sm font-semibold">What you'll learn:</p>
                    <ul className="mb-4 space-y-2">
                      {course.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full transition-smooth"
                      onClick={() => setSelectedCourse(course.title)}
                    >
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardHeader>
              <CardTitle>Need Help Getting Started?</CardTitle>
              <CardDescription className="text-base">
                Our team is here to support you on your digital literacy journey.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button variant="default" className="transition-smooth">
                  Book a Free Session
                </Button>
                <Button variant="outline" className="transition-smooth">
                  Download Study Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalLiteracy;
