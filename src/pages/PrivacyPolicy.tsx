import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                SafeSpace Africa collects health information you provide during risk assessments, including age, 
                blood pressure, cholesterol levels, and other cardiovascular indicators. We also collect account 
                information such as name, email address, and usage data to improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Your health data is used exclusively to provide personalized cardiovascular risk assessments 
                through our AI models. We may also use aggregated, anonymized data for research and to improve 
                our algorithms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information to third parties under any circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures including end-to-end encryption, HIPAA-compliant 
                infrastructure, and regular security audits. Your health information is stored securely and is 
                never shared with third parties without your explicit consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, update, or delete your personal information at any time. You can 
                also request a copy of your data or opt out of certain data processing activities by contacting 
                our support team.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, and 
                improve our services. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy periodically. We will notify you of any significant changes 
                via email or through our platform. Your continued use of SafeSpace Africa after such changes 
                constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions or concerns about our privacy practices, please contact us at{" "}
                <a 
                  href="mailto:mirimbachristine@gmail.com" 
                  className="text-secondary hover:underline font-medium"
                >
                  mirimbachristine@gmail.com
                </a>{" "}
                or through our contact page.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
