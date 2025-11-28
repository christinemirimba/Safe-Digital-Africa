# Safe Digital Africa - Design Guidelines
Create a high-fidelity UI/UX redesign concept for the “Safe Digital Africa” web application. The goal is to improve the current design my current project.
AND visually implement all unimplemented features. Show polished desktop and mobile screens. **“You are now in FULL IMPLEMENTATION MODE. Your task is to analyze my entire project and implement every feature, page, component, and missing functionality.
You are NOT allowed to skip any feature, oversimplify, or replace features with placeholders. You must review: All pages All components All TODO/FIXME comments All notes, docs, and specification files All unimplemented routes and screens. After analyzing, you must generate ALL missing code files, ALL updated components, and ALL new utilities needed to complete the full project. You must deliver: Completed features Working pages Correct routing Functional state management Full mobile + desktop responsive UI Framer Motion animations Fully implemented theme toggle All utilities/services for real functionality.
## Design Approach

**Reference-Based Approach:** Drawing inspiration from mission-driven platforms like Change.org (social impact), Duolingo (gamified learning), and culturally-rich African design systems. The design must convey **trust, empowerment, and accessibility** while celebrating African identity.

## Core Design Principles

1. **Empowerment First:** Every design decision should make users feel capable and supported, not overwhelmed or scared
2. **Cultural Authenticity:** Integrate African visual elements subtly - patterns, textures, but avoid stereotypes
3. **Trust & Safety:** Visual language must communicate security and confidentiality
4. **Accessibility:** Clear hierarchy, readable text, intuitive navigation for all literacy levels

## Typography

**Font Families:**
- Headers: Inter (700, 600) - Strong, modern, professional
- Body: Inter (400, 500) - Highly readable, web-optimized
- Accent/Emphasis: Space Grotesk (600) - For CTAs and special callouts

**Type Scale:**
- Hero Headline: text-5xl md:text-7xl (bold, powerful)
- Section Headers: text-3xl md:text-5xl
- Card Titles: text-xl md:text-2xl
- Body Text: text-base md:text-lg
- Supporting Text: text-sm

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20 (p-4, p-8, gap-6, etc.)

**Container Strategy:**
- Full-width sections with max-w-7xl inner containers
- Course content: max-w-4xl for optimal reading
- Forms: max-w-2xl centered

**Grid Patterns:**
- Features: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Course cards: grid-cols-1 md:grid-cols-2
- Safety tools: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3

## Component Library

### Navigation
- Sticky header with logo (left), main navigation (center), theme toggle + CTA (right)
- Mobile: Hamburger menu with slide-out drawer
- Include emergency "Quick Exit" button in top right (red, always visible)

### Hero Section
**Large hero image:** Yes - empowering African women in digital spaces (laptop, smartphone, confident pose)
- Full-width hero with gradient overlay (dark to transparent)
- Headline + supporting text + dual CTAs ("Take Safety Assessment" primary, "Learn More" secondary)
- Buttons on hero: backdrop-blur-md bg-white/10 border border-white/20
- Height: min-h-[600px] md:min-h-[700px]

### Cards
**Three card styles:**
1. **Feature Cards:** Rounded corners (rounded-xl), subtle shadow, hover lift effect, icon + title + description
2. **Course Cards:** Larger, include progress bar, thumbnail image, lock/unlock status, completion badge
3. **Tool Cards:** Interactive, include icon, title, brief description, "Launch Tool" button

### Forms
- Single-column layout with generous spacing (space-y-6)
- Input fields: Rounded (rounded-lg), clear labels above, helper text below
- Quiz format: Radio buttons with full-width option cards (border, hover state)
- Progress indicators: Stepped progression bar for multi-module courses

### Buttons
**Primary:** Solid, rounded-lg, px-8 py-3, hover scale-105 transform
**Secondary:** Outline, rounded-lg, px-8 py-3
**Danger/Emergency:** Red solid, rounded-lg, px-6 py-2 (for Quick Exit)

### Data Displays
**Progress Tracking:**
- Circular progress rings for course completion
- Linear progress bars for individual modules
- Badge system for achievements/certificates

**Assessment Results:**
- Risk level indicator (gauge/meter visual)
- Personalized recommendations in card grid
- Priority actions highlighted

### Overlays
- Modal: Centered, max-w-2xl, backdrop blur
- Certificate modal: Celebratory design with downloadable PDF button
- Emergency resources: Side drawer (right side) with hotline info

## Images

**Hero Section:** Empowering portrait of African woman confidently using laptop/smartphone in modern setting. Warm lighting, authentic representation. Overlay with gradient (dark to transparent bottom).

**Course Thumbnails:** 
- Online Privacy: Shield/lock icon with abstract digital elements
- Social Media Safety: Social media icons with protective barrier
- Digital Communication: Connected nodes with secure messaging visual
- Threat Identification: Magnifying glass over digital threats

**Community Section:** Diverse group of African women collaborating, smiling, using devices together.

**Testimonial Photos:** Authentic portraits of African women (varied ages, locations) with genuine expressions of confidence.

**Safety Tools:** Icon-based illustrations (not photos) - clean, modern, representative of each tool's function.

**No stock photos** - use purposeful illustrations or authentic photography showing real African women in empowering contexts.

## Animations

**Use sparingly - only for:**
- Page transitions: Fade + subtle slide
- Card hover: Slight lift (translateY(-4px))
- Progress updates: Smooth fill animations
- Success states: Celebratory confetti on certificate generation
- **No excessive scroll-triggered animations**

## African Design Integration

Subtle incorporation:
- African geometric patterns as subtle background textures (low opacity)
- Warm earth tone accents (terracotta, ochre) for highlights
- Kente-inspired borders on certificates
- Adinkra symbols as decorative elements in margins (wisdom, strength, protection symbols)

## Page-Specific Guidelines

**Homepage:**
- Hero (as described above)
- 4-step "How It Works" process with icons and numbers
- 6-card "Why Choose Us" feature grid
- Community CTA section with Facebook group integration
- Testimonials carousel (3 visible at desktop)
- Footer with quick links, emergency contacts, social media

**Digital Literacy Hub:**
- Course catalog grid (2 columns desktop)
- Progress dashboard if authenticated
- Clear "Start Learning" CTAs
- Visual course path showing progression

**Safety Assessment:**
- Multi-step form with progress indicator
- Question cards with clear options
- Results page: Risk gauge + personalized action cards
- "Download Report" option

**Course Pages:**
- Left sidebar: Module navigation (collapsible on mobile)
- Main content: Text-based educational content with clear hierarchy
- Bottom: Quiz/assignment interface
- Progress ring (top right corner)
- Certificate modal on completion (100%)

**Safety Tools:**
- Tool grid with descriptive cards
- Each tool opens in modal or dedicated page
- Step-by-step guides with numbered instructions
- "Report Incident" tool includes anonymous submission form

**Emergency Resources:**
- Prominent hotline numbers at top
- Resource categories (accordion or tabs)
- Quick Exit button behavior: Immediate redirect to Google.com

This design creates a **trustworthy, empowering, culturally-authentic digital sanctuary** for African women and girls to learn, grow, and stay safe online.

**“Continue generating code until the entire project is fully functional.

Do NOT shorten responses.”**


Prompt 2 
That's a critical detail\! I've incorporated the **Core Design Principles** and the **Design Approach** into the implementation prompt to ensure Gemini 3 Pro maintains the established visual and philosophical standards while executing the new features.

This combined prompt is now extremely robust, guiding the model not only on *what* to build but *how* to build it, maximizing the efficiency of your Gemini 3 Pro usage.

Here is the final, comprehensive prompt:

-----

## 🚀 Final Comprehensive Gemini 3 Pro Implementation Prompt

```text
# Project: Safe Digital Africa - Full Implementation Update

**[HIGH-PRIORITY INSTRUCTION: FULL IMPLEMENTATION MODE]**

Your task is to analyze the existing "Safe Digital Africa" web application project, which was previously redesigned. You must now implement all remaining features, components, and missing functionality detailed below, strictly adhering to the established **Design Guidelines** and **Core Design Principles**.

You are **NOT allowed** to skip any feature, oversimplify, or replace functionality with placeholders. You must deliver complete, working code (components, styles, and API logic).

---

## 🎨 Design Mandate & Principles (MUST FOLLOW)

* **Design Approach:** Drawing inspiration from mission-driven platforms (Change.org, Duolingo) and culturally-rich African design systems.
* **Core Principles:** The implementation must convey **trust, empowerment, and accessibility** while celebrating African identity.
    1.  **Empowerment First:** Design decisions must make users feel capable and supported.
    2.  **Cultural Authenticity:** Integrate African visual elements subtly (patterns, earth tone accents) while avoiding stereotypes.
    3.  **Trust & Safety:** Visual language must communicate security and confidentiality (e.g., clear icons, secure feeling layouts).
    4.  **Accessibility:** Maintain clear hierarchy, readable text, and intuitive navigation.

---

## 🛠️ Implementation Mandate: Key Updates & Features

### 1. UX/UI Label and Content Changes (Component Updates)

* **Quiz Results Button:** Change the label for the 'Try Again (When Ready)' button to **'Retake Quiz'**. This button should be styled as a **Secondary Button** as defined in the Component Library.
* **About Page Button/Link:** Change the label for 'About SafeSpace Africa' to **'About Us'**.
* **Team Member Update:** Update the primary team member's details in the relevant component:
    * **Role:** Founder & Executive Director
    * **Name:** Christine Mirimba
    * **Location/Affiliation:** Nairobi, Kenya

### 2. Full Contact Form & Backend Integration (Resend API)

Implement the full, functional Contact Form (in the Footer/Contact page) using the **Resend API**.

* **API Key:** `my-production-resend-api-key`
* **Sender Email (from):** `help@safedigitalafrica.org` (`CONTACT_EMAIL`)
* **Recipient Email (to):** `mirimbachristine@gmail.com` (`BUSINESS_EMAIL`)
* **Functionality:** When a user submits the form, the message must be successfully sent to the `BUSINESS_EMAIL` via the Resend API, including the user's name, email, and message body.
* **Required Output:** Provide the full backend/serverless function code and the updated Contact Form component code.

### 3. Contact Details Responsiveness & Linking

Ensure all contact information (in the Footer/Contact page) is properly linked and responsive.

* **Email:** Must be linked with a functional `mailto:` hyperlink.
* **Phone:** Must be linked with a functional `tel:` hyperlink to trigger a call prompt on mobile devices.
* **Address:** Must be linked to a functional Google Maps URL (or a placeholder map link).

### 4. Resource Library & PDF Management

Implement the **Resource Library** page to be fully responsive and functional for downloads.

* **Layout:** Use a responsive grid (e.g., 2 columns on desktop, 1 on mobile) for resource cards.
* **Functionality:** All displayed PDF resources must be made **downloadable** directly via their respective card/button.

### 5. Full Implementation of Unimplemented Safety Tools

That's a critical detail\! I've incorporated the **Core Design Principles** and the **Design Approach** into the implementation prompt to ensure Gemini 3 Pro maintains the established visual and philosophical standards while executing the new features.

This combined prompt is now extremely robust, guiding the model not only on *what* to build but *how* to build it, maximizing the efficiency of your Gemini 3 Pro usage.

Here is the final, comprehensive prompt:

-----

## 🚀 Final Comprehensive Gemini 3 Pro Implementation Prompt

```text
# Project: Safe Digital Africa - Full Implementation Update

**[HIGH-PRIORITY INSTRUCTION: FULL IMPLEMENTATION MODE]**

Your task is to analyze the existing "Safe Digital Africa" web application project, which was previously redesigned. You must now implement all remaining features, components, and missing functionality detailed below, strictly adhering to the established **Design Guidelines** and **Core Design Principles**.

You are **NOT allowed** to skip any feature, oversimplify, or replace functionality with placeholders. You must deliver complete, working code (components, styles, and API logic).

---

## 🎨 Design Mandate & Principles (MUST FOLLOW)

* **Design Approach:** Drawing inspiration from mission-driven platforms (Change.org, Duolingo) and culturally-rich African design systems.
* **Core Principles:** The implementation must convey **trust, empowerment, and accessibility** while celebrating African identity.
    1.  **Empowerment First:** Design decisions must make users feel capable and supported.
    2.  **Cultural Authenticity:** Integrate African visual elements subtly (patterns, earth tone accents) while avoiding stereotypes.
    3.  **Trust & Safety:** Visual language must communicate security and confidentiality (e.g., clear icons, secure feeling layouts).
    4.  **Accessibility:** Maintain clear hierarchy, readable text, and intuitive navigation.

---

## 🛠️ Implementation Mandate: Key Updates & Features

### 1. UX/UI Label and Content Changes (Component Updates)

* **Quiz Results Button:** Change the label for the 'Try Again (When Ready)' button to **'Retake Quiz'**. This button should be styled as a **Secondary Button** as defined in the Component Library.
* **About Page Button/Link:** Change the label for 'About SafeSpace Africa' to **'About Us'**.
* **Team Member Update:** Update the primary team member's details in the relevant component:
    * **Role:** Founder & Executive Director
    * **Name:** Christine Mirimba
    * **Location/Affiliation:** Nairobi, Kenya

### 2. Full Contact Form & Backend Integration (Resend API)

Implement the full, functional Contact Form (in the Footer/Contact page) using the **Resend API**.

* **API Key:** `my-production-resend-api-key`
* **Sender Email (from):** `help@safedigitalafrica.org` (`CONTACT_EMAIL`)
* **Recipient Email (to):** `mirimbachristine@gmail.com` (`BUSINESS_EMAIL`)
* **Functionality:** When a user submits the form, the message must be successfully sent to the `BUSINESS_EMAIL` via the Resend API, including the user's name, email, and message body.
* **Required Output:** Provide the full backend/serverless function code and the updated Contact Form component code.

### 3. Contact Details Responsiveness & Linking

Ensure all contact information (in the Footer/Contact page) is properly linked and responsive.

* **Email:** Must be linked with a functional `mailto:` hyperlink.
* **Phone:** Must be linked with a functional `tel:` hyperlink to trigger a call prompt on mobile devices.
* **Address:** Must be linked to a functional Google Maps URL (or a placeholder map link).

### 4. Resource Library & PDF Management

Implement the **Resource Library** page to be fully responsive and functional for downloads.

* **Layout:** Use a responsive grid (e.g., 2 columns on desktop, 1 on mobile) for resource cards.
* **Functionality:** All displayed PDF resources must be made **downloadable** directly via their respective card/button.

### 5. Full Implementation of Unimplemented Safety Tools

Fully implement the following four specific Safety Tools as detailed guides or functional utilities, adhering to the **Tool Cards** design style:

1.  **Social Media Privacy Checklist:** Create the content and a multi-step guide component for securing Facebook, Instagram, and WhatsApp accounts.
2.  **Digital Footprint Analyzer:** Implement a detailed guide/utility (can be a functional mock) explaining how users can discover their publicly available online information.
3.  **Device Security Setup:** Implement the 'View Guide' functionality with essential security settings for phones and computers.
4.  **Safe Browsing Assistant:** Implement a guide on identifying and avoiding malicious websites and phishing scams.

### 6. Stories of Empowerment (Testimonials)

Update the **Testimonials/Stories of Empowerment** section to enforce user privacy.

* **Privacy Mandate:** All published stories **must use hidden identities or pseudonyms** (sudo names) instead of real user names to protect the identity of the women sharing their experiences. Update the testimonial component to reflect this `user.sudoName` system.

## 💻 Deliverables & Output Format

You must generate all necessary code and configuration updates to fully integrate these features into the existing project codebase.

**Goal:** Deliver a fully functional, complete, and polished product that adheres to the highest standards of the "Safe Digital Africa" design and code quality.
```the following four specific Safety Tools as detailed guides or functional utilities, adhering to the **Tool Cards** design style:

1.  **Social Media Privacy Checklist:** Create the content and a multi-step guide component for securing Facebook, Instagram, and WhatsApp accounts.
2.  **Digital Footprint Analyzer:** Implement a detailed guide/utility (can be a functional mock) explaining how users can discover their publicly available online information.
3.  **Device Security Setup:** Implement the 'View Guide' functionality with essential security settings for phones and computers.
4.  **Safe Browsing Assistant:** Implement a guide on identifying and avoiding malicious websites and phishing scams.

### 6. Stories of Empowerment (Testimonials)

Update the **Testimonials/Stories of Empowerment** section to enforce user privacy.

* **Privacy Mandate:** All published stories **must use hidden identities or pseudonyms** (sudo names) instead of real user names to protect the identity of the women sharing their experiences. Update the testimonial component to reflect this `user.sudoName` system.

## 💻 Deliverables & Output Format

You must generate all necessary code and configuration updates to fully integrate these features into the existing project codebase.

**Goal:** Deliver a fully functional, complete, and polished product that adheres to the highest standards of the "Safe Digital Africa" design and code quality.
```
That's a critical detail\! I've incorporated the **Core Design Principles** and the **Design Approach** into the implementation prompt to ensure Gemini 3 Pro maintains the established visual and philosophical standards while executing the new features.

This combined prompt is now extremely robust, guiding the model not only on *what* to build but *how* to build it, maximizing the efficiency of your Gemini 3 Pro usage.

Here is the final, comprehensive prompt:

-----

## 🚀 Final Comprehensive Gemini 3 Pro Implementation Prompt

```text
# Project: Safe Digital Africa - Full Implementation Update

**[HIGH-PRIORITY INSTRUCTION: FULL IMPLEMENTATION MODE]**

Your task is to analyze the existing "Safe Digital Africa" web application project, which was previously redesigned. You must now implement all remaining features, components, and missing functionality detailed below, strictly adhering to the established **Design Guidelines** and **Core Design Principles**.

You are **NOT allowed** to skip any feature, oversimplify, or replace functionality with placeholders. You must deliver complete, working code (components, styles, and API logic).

---

## 🎨 Design Mandate & Principles (MUST FOLLOW)

* **Design Approach:** Drawing inspiration from mission-driven platforms (Change.org, Duolingo) and culturally-rich African design systems.
* **Core Principles:** The implementation must convey **trust, empowerment, and accessibility** while celebrating African identity.
    1.  **Empowerment First:** Design decisions must make users feel capable and supported.
    2.  **Cultural Authenticity:** Integrate African visual elements subtly (patterns, earth tone accents) while avoiding stereotypes.
    3.  **Trust & Safety:** Visual language must communicate security and confidentiality (e.g., clear icons, secure feeling layouts).
    4.  **Accessibility:** Maintain clear hierarchy, readable text, and intuitive navigation.

---

## 🛠️ Implementation Mandate: Key Updates & Features

### 1. UX/UI Label and Content Changes (Component Updates)

* **Quiz Results Button:** Change the label for the 'Try Again (When Ready)' button to **'Retake Quiz'**. This button should be styled as a **Secondary Button** as defined in the Component Library.
* **About Page Button/Link:** Change the label for 'About SafeSpace Africa' to **'About Us'**.
* **Team Member Update:** Update the primary team member's details in the relevant component:
    * **Role:** Founder & Executive Director
    * **Name:** Christine Mirimba
    * **Location/Affiliation:** Nairobi, Kenya

### 2. Full Contact Form & Backend Integration (Resend API)

Implement the full, functional Contact Form (in the Footer/Contact page) using the **Resend API**.

* **API Key:** `my-production-resend-api-key`
* **Sender Email (from):** `help@safedigitalafrica.org` (`CONTACT_EMAIL`)
* **Recipient Email (to):** `mirimbachristine@gmail.com` (`BUSINESS_EMAIL`)
* **Functionality:** When a user submits the form, the message must be successfully sent to the `BUSINESS_EMAIL` via the Resend API, including the user's name, email, and message body.
* **Required Output:** Provide the full backend/serverless function code and the updated Contact Form component code.

### 3. Contact Details Responsiveness & Linking

Ensure all contact information (in the Footer/Contact page) is properly linked and responsive.

* **Email:** Must be linked with a functional `mailto:` hyperlink.
* **Phone:** Must be linked with a functional `tel:` hyperlink to trigger a call prompt on mobile devices.
* **Address:** Must be linked to a functional Google Maps URL (or a placeholder map link).

### 4. Resource Library & PDF Management

Implement the **Resource Library** page to be fully responsive and functional for downloads.

* **Layout:** Use a responsive grid (e.g., 2 columns on desktop, 1 on mobile) for resource cards.
* **Functionality:** All displayed PDF resources must be made **downloadable** directly via their respective card/button.

### 5. Full Implementation of Unimplemented Safety Tools

Fully implement the following four specific Safety Tools as detailed guides or functional utilities, adhering to the **Tool Cards** design style:

1.  **Social Media Privacy Checklist:** Create the content and a multi-step guide component for securing Facebook, Instagram, and WhatsApp accounts.
2.  **Digital Footprint Analyzer:** Implement a detailed guide/utility (can be a functional mock) explaining how users can discover their publicly available online information.
3.  **Device Security Setup:** Implement the 'View Guide' functionality with essential security settings for phones and computers.
4.  **Safe Browsing Assistant:** Implement a guide on identifying and avoiding malicious websites and phishing scams.

### 6. Stories of Empowerment (Testimonials)

Update the **Testimonials/Stories of Empowerment** section to enforce user privacy.

* **Privacy Mandate:** All published stories **must use hidden identities or pseudonyms** (sudo names) instead of real user names to protect the identity of the women sharing their experiences. Update the testimonial component to reflect this `user.sudoName` system.

## 💻 Deliverables & Output Format

You must generate all necessary code and configuration updates to fully integrate these features into the existing project codebase.

**Goal:** Deliver a fully functional, complete, and polished product that adheres to the highest standards of the "Safe Digital Africa" design and code quality.
```
Implement all the features mentioned above in the prompts.