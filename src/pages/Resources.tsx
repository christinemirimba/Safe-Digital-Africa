import { Phone, Mail, Download, ExternalLink, MapPin, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const hotlines = [
  {
    country: "Kenya",
    name: "Gender Violence Recovery Centre",
    phone: "+254 709 558 000",
    available: "24/7",
  },
  {
    country: "South Africa",
    name: "GBV Command Centre",
    phone: "0800 428 428",
    available: "24/7",
  },
  {
    country: "Nigeria",
    name: "Domestic Violence Hotline",
    phone: "0800 033 3333",
    available: "24/7",
  },
  {
    country: "Ghana",
    name: "Domestic Violence Support",
    phone: "0800 800 800",
    available: "24/7",
  },
];

const resources = [
  {
    title: "Digital Safety Guide",
    description: "Comprehensive PDF guide covering online safety fundamentals",
    type: "PDF",
    size: "2.5 MB",
  },
  {
    title: "Social Media Privacy Checklist",
    description: "Step-by-step checklist for securing your social media accounts",
    type: "PDF",
    size: "1.2 MB",
  },
  {
    title: "Password Security Template",
    description: "Template to organize and manage your passwords securely",
    type: "Document",
    size: "500 KB",
  },
  {
    title: "Incident Documentation Form",
    description: "Form to document online harassment or threats for reporting",
    type: "PDF",
    size: "800 KB",
  },
];

const Resources = () => {
  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Resources & Support</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Access emergency hotlines, downloadable resources, and support services across Africa.
          </p>
        </motion.div>

        {/* Emergency Hotlines */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="mb-2 text-2xl font-bold">Emergency Hotlines</h2>
            <p className="text-muted-foreground">24/7 support available across Africa</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {hotlines.map((hotline, index) => (
              <motion.div
                key={hotline.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="shadow-card transition-all duration-300 hover:shadow-card-hover">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-accent" />
                        <CardTitle>{hotline.country}</CardTitle>
                      </div>
                      <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                        {hotline.available}
                      </span>
                    </div>
                    <CardDescription className="text-base">{hotline.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-primary" />
                        <span className="text-lg font-semibold">{hotline.phone}</span>
                      </div>
                      <Button size="sm" className="transition-smooth">
                        Call Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Downloadable Resources */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="mb-2 text-2xl font-bold">Downloadable Materials</h2>
            <p className="text-muted-foreground">Free resources to support your digital safety journey</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="shadow-card transition-all duration-300 hover:shadow-card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between">
                      <span>{resource.title}</span>
                      <Download className="h-5 w-5 text-primary" />
                    </CardTitle>
                    <CardDescription className="text-base">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">{resource.type}</span> • {resource.size}
                      </div>
                      <Button variant="outline" size="sm" className="transition-smooth">
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Support Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-accent" />
                Additional Support Services
              </CardTitle>
              <CardDescription className="text-base">
                Connect with professional support and counseling services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <h3 className="font-semibold">Legal Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Access legal advice and representation for digital abuse cases
                  </p>
                  <Button variant="outline" size="sm" className="w-full transition-smooth">
                    Learn More
                  </Button>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Counseling Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional mental health support for trauma and recovery
                  </p>
                  <Button variant="outline" size="sm" className="w-full transition-smooth">
                    Book Session
                  </Button>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Community Groups</h3>
                  <p className="text-sm text-muted-foreground">
                    Join support groups and connect with other survivors
                  </p>
                  <Button variant="outline" size="sm" className="w-full transition-smooth">
                    Join Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription className="text-base">
                Have questions or need additional support? We're here to help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="mailto:mirimbachristine@gmail.com">
                  <Button className="flex items-center gap-2 w-full sm:w-auto">
                    <Mail className="h-4 w-4" />
                    mirimbachristine@gmail.com
                  </Button>
                </a>
                <a href="tel:+254701609261">
                  <Button variant="outline" className="flex items-center gap-2 w-full sm:w-auto">
                    <Phone className="h-4 w-4" />
                    +254 701 609 261 (24/7)
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;
