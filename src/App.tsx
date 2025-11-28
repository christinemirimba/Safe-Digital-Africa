import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Layout } from "@/components/Layout";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import DigitalLiteracy from "./pages/DigitalLiteracy";
import CourseViewer from "./pages/CourseViewer";
import SafetyAssessment from "./pages/SafetyAssessment";
import SafetyTools from "./pages/SafetyTools";
import PasswordStrength from "./pages/PasswordStrength";
import DigitalFootprintAnalyzer from "./pages/DigitalFootprintAnalyzer";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Settings from "./pages/Settings";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/digital-literacy" element={<DigitalLiteracy />} />
              <Route path="/course/:courseId" element={<CourseViewer />} />
              <Route path="/safety-assessment" element={<SafetyAssessment />} />
              <Route path="/safety-tools" element={<SafetyTools />} />
              <Route path="/password-strength" element={<PasswordStrength />} />
              <Route path="/digital-footprint-analyzer" element={<DigitalFootprintAnalyzer />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/about" element={<About />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
