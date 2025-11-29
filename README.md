# SafeSpace Africa

<div align="center">
  <svg width="64" height="64" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2 L28 8 L28 14 C28 22 20 30 16 30 C12 30 4 22 4 14 L4 8 Z" fill="#312e81"/>
    <path d="M18 12 C18 12 20 14 20 16 C20 18 22 20 22 22 C22 24 20 24 20 24 C20 24 18 22 18 20 C18 18 16 18 16 20 C16 22 14 24 14 24 C14 24 12 22 12 20 C12 18 14 16 14 14 C14 12 16 12 16 12 C16 12 18 12 18 12 Z" fill="white"/>
  </svg>
  
  <h1>Building Safer Digital Spaces for African Women & Girls</h1>
  
  <p>
    <strong>Empowering African women and girls with the tools, knowledge, and community to navigate the digital world safely and confidently.</strong>
  </p>

  <p>
    <a href="https://safe-digital-space-africa.vercel.app/">
      <img src="https://img.shields.io/badge/Live_Demo-Visit_Site-2ea44f?style=for-the-badge&logo=vercel" alt="Live Demo" />
    </a>
    <a href="https://github.com/christinemirimba/safe-digital-space-africa">
      <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub Repo" />
    </a>
    <a href="#"><img src="https://img.shields.io/badge/License-MIT-312e81?style=for-the-badge" alt="License"></a>
  </p>
</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Pages & Navigation](#key-pages--navigation)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

---

## 🌍 About

SafeSpace Africa is a comprehensive digital safety platform designed specifically for African women and girls to combat online harassment, gender-based violence, and digital threats. Supporting the **16 Days of Activism Against Gender-Based Violence**, our platform provides:

- **Digital Safety Assessments** - Personalized analysis of your digital hygiene and risk factors
- **Interactive Digital Literacy Courses** - Self-paced learning modules with progress tracking and assignments
- **Safety Tools** - Practical resources for privacy protection and threat reporting
- **Community Support** - A supportive network of women across Africa
- **24/7 Resources** - Always-available educational content and emergency contacts

### Mission

To create safer digital spaces for African women and girls by providing accessible education, practical tools, and community support to combat online violence and harassment.

---

## ✨ Features

### 🎓 Digital Literacy Hub
- **4 Comprehensive Courses** covering online privacy, social media safety, digital communication, and threat identification
- **Module-Based Learning** with sequential subtopic unlocking
- **Interactive Assignments** with quizzes (70% pass rate required)
- **Progress Tracking** with localStorage persistence
- **Certificate System** upon 100% course completion
- **Text-Based Content** with comprehensive educational notes

### 🛡️ Safety Tools
- **Privacy Checker** - Scan social media for vulnerabilities
- **Password Manager Guide** - Learn secure password practices
- **Digital Footprint Analyzer** - Discover your online exposure
- **Device Security Setup** - Step-by-step security guides
- **Threat Reporting Tool** - Safe incident reporting
- **Emergency Support** - 24/7 hotline and chat support

### 🎨 User Experience
- **Dark/Light Mode** - Seamless theme switching with preference persistence
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Framer Motion for polished interactions
- **Accessible Navigation** - Keyboard navigation and screen reader support
- **Professional UI** - Modern design with consistent patterns

### 🔐 Privacy & Security
- **End-to-End Encryption** for sensitive communications
- **Anonymous Reporting** options
- **No Data Selling** - Your privacy is our priority
- **GDPR Compliant** - Comprehensive data protection
- **Quick Exit Button** - Emergency safety feature (coming soon)

---

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing
- **Shadcn/ui** - Beautiful, accessible components
- **Lucide React** - Icon library

### State Management & Data
- **React Context API** - Theme management
- **localStorage** - Course progress persistence
- **TanStack Query** - Data fetching (future backend integration)

### Styling System
- **CSS Variables** - Design tokens for theming
- **HSL Color System** - Flexible color management
- **Responsive Breakpoints** - Mobile-first approach
- **Custom Animations** - Tailwind CSS animations

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **bun** package manager
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/christinemirimba/safe-digital-space-africa.git
   cd safe-digital-space-africa
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:8080
   ```

### Build for Production

```bash
npm run build
# or
bun run build
```

Preview the production build:
```bash
npm run preview
# or
bun run preview
```

---

## 📁 Project Structure

```
safespace-africa/
├── public/
│   └── robots.txt
├── src/
│   ├── assets/              # Static assets
│   ├── components/          # Reusable components
│   │   ├── ui/             # Shadcn UI components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Layout.tsx
│   │   ├── NavLink.tsx
│   │   ├── ResourcesDropdown.tsx
│   │   └── ThemeToggle.tsx
│   ├── contexts/           # React contexts
│   │   └── ThemeContext.tsx
│   ├── hooks/              # Custom hooks
│   │   └── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/                # Utility libraries
│   │   └── utils.ts
│   ├── pages/              # Page components
│   │   ├── About.tsx
│   │   ├── ContactUs.tsx
│   │   ├── DigitalLiteracy.tsx
│   │   ├── FAQ.tsx
│   │   ├── Home.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── NotFound.tsx
│   │   ├── PrivacyPolicy.tsx
│   │   ├── Resources.tsx
│   │   ├── SafetyTools.tsx
│   │   └── Settings.tsx
│   ├── App.tsx             # Main app component
│   ├── index.css           # Global styles & design tokens
│   └── main.tsx            # Entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🗺️ Key Pages & Navigation

### Main Navigation (Header)
- **Safety Tools** - `/safety-tools`
- **Digital Literacy Hub** - `/digital-literacy`
- **How It Works** - `/how-it-works`
- **Resources** (Dropdown)
  - About SafeSpace Africa - `/about`
  - FAQ - `/faq`
  - Settings - `/settings`
  - Contact Us - `/contact`
  - Privacy Policy - `/privacy`

### Page Descriptions

#### Homepage (`/`)
Hero section with mission statement, How It Works preview, feature showcase, and community CTA.

#### Digital Literacy Hub (`/digital-literacy`)
Interactive course platform with:
- Course overview cards
- Module-based content structure
- Subtopic viewer with sequential unlocking
- Quiz assignments with scoring
- Progress tracking and certificates

#### Safety Tools (`/safety-tools`)
Collection of practical tools including privacy checkers, password guides, threat reporting, and emergency support.

#### How It Works (`/how-it-works`)
4-step process explanation with clear call-to-action to begin learning journey.

#### About (`/about`)
Platform mission, vision, team information, and impact metrics.

#### Contact Us (`/contact`)
Contact form with validation, phone/email information, and office hours.

#### Privacy Policy (`/privacy`)
Comprehensive data protection and privacy information specific to SafeSpace Africa.

---

## 💻 Development

### Design System

The platform uses a comprehensive design system with semantic color tokens:

```css
/* Primary Colors */
--primary: 248 58% 27%        /* Deep indigo #312e81 */
--secondary: 173 80% 29%      /* Bright teal #0d9488 */
--accent: 17 88% 48%          /* Orange #ea580c */

/* Usage */
className="bg-primary text-white"
className="text-secondary hover:bg-secondary/10"
```

### Theme System

Dark and light modes with automatic system preference detection:

```tsx
import { useTheme } from "@/contexts/ThemeContext";

const { theme, setTheme } = useTheme();
```

### Adding New Courses

1. Navigate to `src/pages/DigitalLiteracy.tsx`
2. Add course data to the `courses` array with modules and subtopics
3. Include quiz questions for each subtopic
4. The progress tracking system will automatically handle the rest

### Form Validation

Using React Hook Form with Zod validation:

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email(),
  // ... more fields
});
```

---

## 🚀 Deployment

### Recommended Platforms

- **Vercel** (Recommended for React + Vite)
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**

### Build Commands

```json
{
  "build": "vite build",
  "preview": "vite preview"
}
```

### Environment Variables

Create a `.env` file for environment-specific configuration:

```env
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_contact_email
```

### Custom Domain

Configure your custom domain (e.g., safespace.africa) through your hosting provider's dashboard.

---

## 🤝 Contributing

We welcome contributions from developers, designers, and advocates passionate about digital safety for women and girls in Africa.

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and conventions
- Write clear commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed
- Respect our Code of Conduct

---

## 📞 Contact

**SafeSpace Africa**

- **Email:** mirimbachristine@gmail.com
- **Phone:** +254701609261
- **Hours:** 24/7 Support Available

### Social Media

- [Facebook](https://www.facebook.com/christine.kwamboka.39904)
- [Instagram](https://www.instagram.com/christinemirimba/?hl=en)
- [Twitter](https://x.com/Tinnah_Mirimba?t=nZPhrf1oB28G1s6LyyrssA&s=09)
- [LinkedIn](https://www.linkedin.com/in/christine-mirimba-51202a26b/)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **16 Days of Activism Against Gender-Based Violence** - Our inspiration and commitment
- **African Women in Tech Community** - For support and feedback
- **Open Source Contributors** - For the amazing tools and libraries
- **All the brave women and girls** who shared their stories to help us build this platform

---

## 🔮 Roadmap

### Upcoming Features

- [ ] User authentication and personalized dashboards
- [ ] Live chat support integration
- [ ] Mobile app (iOS and Android)
- [ ] Multi-language support (French, Swahili, Arabic, Portuguese)
- [ ] AI-powered threat detection
- [ ] Community forums and peer support
- [ ] Integration with local support organizations
- [ ] Offline mode for areas with limited connectivity
- [ ] Emergency quick-exit button
- [ ] Incident reporting database and analytics

---

<div align="center">
  <p>Made with ❤️ for African Women and Girls</p>
  <p>© 2025 SafeSpace Africa. All rights reserved.</p>
  
  <p>
    <strong>Together, we build safer digital spaces.</strong>
  </p>
</div>
