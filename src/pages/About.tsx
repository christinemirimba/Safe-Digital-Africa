import { Link } from "react-router-dom";
import { Target, Users, Award, Heart, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const values = [
  {
    icon: Heart,
    title: "Empowerment",
    description: "We believe in empowering women and girls with knowledge and tools to navigate digital spaces confidently.",
  },
  {
    icon: Target,
    title: "Safety First",
    description: "Privacy and security are at the core of everything we build and every resource we provide.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Together we're stronger. We foster supportive networks across Africa.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We're committed to providing high-quality, accessible resources that make a real difference.",
  },
];

const team = [
  {
    name: "Dr. Amina Okoye",
    role: "Founder & Executive Director",
    location: "Lagos, Nigeria",
  },
  {
    name: "Grace Mwangi",
    role: "Director of Digital Safety",
    location: "Nairobi, Kenya",
  },
  {
    name: "Fatima Hassan",
    role: "Community Engagement Lead",
    location: "Cairo, Egypt",
  },
  {
    name: "Thandiwe Nkosi",
    role: "Education Program Manager",
    location: "Cape Town, South Africa",
  },
];

const About = () => {
  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">About SafeSpace Africa</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Building safer digital spaces for women and girls across Africa since 2020.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="border-l-4 border-l-primary bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <p className="mb-4">
                SafeSpace Africa is dedicated to creating safer digital environments for women and girls across the African continent. 
                We provide comprehensive digital literacy education, practical safety tools, and support services to empower our 
                community to navigate online spaces with confidence and security.
              </p>
              <p>
                Through education, advocacy, and technology, we're working towards a future where every woman and girl can 
                participate fully in the digital world without fear of harassment, abuse, or exploitation.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Our Values */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide our work
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full shadow-card text-center transition-all duration-300 hover:shadow-card-hover">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Meet the dedicated professionals driving our mission forward
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full shadow-card text-center transition-all duration-300 hover:shadow-card-hover">
                  <CardHeader>
                    <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary to-secondary" />
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2 text-sm font-medium text-primary">{member.role}</p>
                    <p className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {member.location}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Get Involved</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-lg text-muted-foreground">
                Want to support our mission or partner with us? We'd love to hear from you.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/contact">
                  <Button size="lg" className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Contact Us
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Become a Partner
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
