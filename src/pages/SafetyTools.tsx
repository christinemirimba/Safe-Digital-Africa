import { Shield, Eye, AlertCircle, Lock, Smartphone, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const tools = [
  {
    icon: Shield,
    title: "Privacy Checker",
    description: "Scan your social media accounts for privacy vulnerabilities and get personalized recommendations.",
    status: "Available",
    action: "Run Check",
  },
  {
    icon: Lock,
    title: "Password Manager Guide",
    description: "Learn how to use password managers to keep your accounts secure with strong, unique passwords.",
    status: "Available",
    action: "Learn More",
  },
  {
    icon: Eye,
    title: "Digital Footprint Analyzer",
    description: "Discover what information about you is publicly available online and how to minimize exposure.",
    status: "Available",
    action: "Start Scan",
  },
  {
    icon: Smartphone,
    title: "Device Security Setup",
    description: "Step-by-step guide to securing your phone, tablet, and computer with essential security features.",
    status: "Available",
    action: "Get Started",
  },
  {
    icon: Globe,
    title: "Safe Browsing Extension",
    description: "Browser extension that warns you about unsafe websites and blocks malicious content.",
    status: "Coming Soon",
    action: "Notify Me",
  },
  {
    icon: AlertCircle,
    title: "Threat Reporting Tool",
    description: "Safely report online harassment, threats, or abuse to our support team for immediate assistance.",
    status: "Available",
    action: "Report Issue",
  },
];

const SafetyTools = () => {
  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Safety Tools</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Practical tools and resources designed to protect your privacy and security in digital spaces.
          </p>
        </motion.div>

        {/* Emergency Alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="border-l-4 border-l-accent bg-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <AlertCircle className="h-6 w-6" />
                Emergency Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                If you're experiencing immediate danger or harassment, please contact emergency services or our 24/7 support hotline.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant="default" className="bg-accent hover:bg-accent/90">
                  Call Emergency Hotline
                </Button>
                <Button variant="outline">
                  Chat with Support Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tools Grid */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Available Tools</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full shadow-card transition-all duration-300 hover:shadow-card-hover">
                  <CardHeader>
                    <div className="mb-4 flex items-start justify-between">
                      <tool.icon className="h-10 w-10 text-secondary" />
                      <Badge variant={tool.status === "Available" ? "secondary" : "outline"}>
                        {tool.status}
                      </Badge>
                    </div>
                    <CardTitle>{tool.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-base">
                      {tool.description}
                    </CardDescription>
                    <Button 
                      className="w-full transition-smooth" 
                      disabled={tool.status === "Coming Soon"}
                      onClick={() => {
                        if (tool.status === "Available") {
                          alert(`${tool.title} feature coming soon! This will provide: ${tool.description}`);
                        }
                      }}
                    >
                      {tool.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Best Practices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Digital Safety Best Practices</CardTitle>
              <CardDescription className="text-base">
                Follow these guidelines to maintain your online safety
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="font-semibold text-primary">Do's</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Shield className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span>Regularly update your privacy settings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span>Use secure, encrypted communication tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span>Trust your instincts about suspicious activity</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-accent">Don'ts</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      <span>Share personal information with strangers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      <span>Click suspicious links or download unknown files</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      <span>Ignore signs of online harassment or threats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default SafetyTools;
