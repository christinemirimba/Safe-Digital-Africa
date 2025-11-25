import { Link } from "react-router-dom";
import { Shield, Book, Lock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "AI-Powered Protection",
    description: "Advanced algorithms detect and prevent digital violence with 98%+ accuracy for comprehensive safety.",
    path: "/safety-tools",
    color: "text-primary",
  },
  {
    icon: Book,
    title: "Real-Time Learning",
    description: "Instant access to digital literacy courses and safety guides available 24/7 for continuous learning.",
    path: "/digital-literacy",
    color: "text-secondary",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "End-to-end encryption ensuring complete data privacy and security for all users.",
    path: "/safety-tools",
    color: "text-accent",
  },
  {
    icon: Users,
    title: "Community-Centered",
    description: "Personalized support and resources tailored to individual safety profiles and needs.",
    path: "/resources",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Predictive Analytics",
    description: "Forecast potential digital risks with advanced predictive modeling and threat detection.",
    path: "/safety-tools",
    color: "text-secondary",
  },
  {
    icon: Book,
    title: "24/7 Access",
    description: "Round-the-clock availability for real-time safety assessments and emergency support.",
    path: "/resources",
    color: "text-accent",
  },
];

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary min-h-[600px] flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)] opacity-50"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl"
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl leading-tight">
              Building Safer Digital Spaces for African Women & Girls
            </h1>
            
            <p className="mb-8 text-xl text-white/95 md:text-2xl max-w-3xl leading-relaxed">
              Get personalized safety assessments in seconds. Our AI analyzes your digital presence to provide accurate risk analysis and actionable insights for a safer online experience.
            </p>
            
            <div className="flex flex-col items-start justify-start gap-4 sm:flex-row">
              <Link to="/digital-literacy">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white group shadow-lg">
                  Start Your Assessment
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white shadow-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-foreground">How It Works</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our simple 4-step process is hassle-free and empowers you with knowledge, tools, and support.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {[
              { num: "01", title: "Assess Your Safety", desc: "Complete our digital safety assessment" },
              { num: "02", title: "Learn Skills", desc: "Access curated digital literacy courses" },
              { num: "03", title: "Use Safety Tools", desc: "Implement practical protection measures" },
              { num: "04", title: "Join Community", desc: "Connect with supportive network" },
            ].map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-5xl font-bold text-primary/20 mb-4">{step.num}</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/how-it-works">
              <Button variant="outline" size="lg">
                View Full Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-foreground">
              Why Choose <span className="text-primary">SafeSpace Africa?</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Advanced technology makes comprehensive care for digital safety monitoring and empowerment.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-lg bg-card hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>
                <Link to={feature.path}>
                  <Button variant="ghost" size="sm" className="group">
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-r from-primary to-accent p-12 md:p-16 text-center shadow-2xl"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Join Our Community Today
            </h2>
            <p className="mb-8 text-lg text-white/95 max-w-2xl mx-auto leading-relaxed">
              Connect with thousands of women building safer digital spaces together. Supporting 16 Days of Activism Against Gender-Based Violence.
            </p>
            <Link to="/digital-literacy">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all">
                Start Your Assessment
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
