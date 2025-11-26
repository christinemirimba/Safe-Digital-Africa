export const courseData = {
  "Online Privacy Fundamentals": {
    modules: [
      {
        id: "module1",
        title: "Password Security",
        subtopics: [
          {
            id: "1-1",
            title: "Creating Strong Passwords",
            content: `Creating strong passwords is your first line of defense in protecting your digital identity.

KEY PRINCIPLES:
• Use at least 12 characters (longer is stronger)
• Combine uppercase, lowercase, numbers, and symbols
• Avoid personal information (names, birthdays, addresses)
• Never reuse passwords across different accounts

GOOD PASSWORD EXAMPLES:
• Tr0p!c@lSunr!s3#2024
• M0unt@inBr33ze$Sky
• Oce@nW@ve#Bl00m99

BAD PASSWORD EXAMPLES:
• password123 (too common)
• JohnDoe1990 (uses personal info)
• 12345678 (sequential numbers)

PASSWORD MANAGERS:
Consider using password managers like Bitwarden, 1Password, or LastPass to securely store and generate strong passwords for all your accounts.`,
            quiz: [
              {
                question: "What is the minimum recommended password length?",
                options: ["6 characters", "8 characters", "12 characters", "16 characters"],
                correctAnswer: 2
              },
              {
                question: "Which of these is a strong password?",
                options: ["password123", "JohnSmith1990", "Tr0p!c@lSunr!s3#", "12345678"],
                correctAnswer: 2
              },
              {
                question: "Why should you avoid using personal information in passwords?",
                options: ["It's easy to remember", "Hackers can guess it from social media", "It's too short", "It's illegal"],
                correctAnswer: 1
              }
            ]
          },
          {
            id: "1-2",
            title: "Two-Factor Authentication",
            content: `Two-Factor Authentication (2FA) adds an extra layer of security by requiring two forms of verification.

WHAT IS 2FA?
2FA requires something you know (password) plus something you have (phone, security key) or something you are (fingerprint, face).

TYPES OF 2FA:
1. SMS Codes - Sent to your phone
2. Authenticator Apps - Google Authenticator, Authy
3. Security Keys - Physical USB devices
4. Biometric - Fingerprint or facial recognition

HOW TO ENABLE 2FA:
1. Go to account security settings
2. Find "Two-Factor Authentication" or "2FA"
3. Choose your preferred method
4. Follow setup instructions
5. Save backup codes in a safe place

IMPORTANT: Always save your backup codes in case you lose access to your 2FA device!`,
            quiz: [
              {
                question: "What does 2FA stand for?",
                options: ["Two-Factor Analysis", "Two-Factor Authentication", "Two-Form Access", "Two-File Archive"],
                correctAnswer: 1
              },
              {
                question: "Which is the most secure form of 2FA?",
                options: ["SMS codes", "Email codes", "Authenticator apps", "Password only"],
                correctAnswer: 2
              },
              {
                question: "What should you always save when setting up 2FA?",
                options: ["Your password", "Backup codes", "Your email", "Your phone number"],
                correctAnswer: 1
              }
            ]
          }
        ]
      }
    ]
  },
  "Social Media Safety": {
    modules: [
      {
        id: "module1",
        title: "Profile Privacy",
        subtopics: [
          {
            id: "1-1",
            title: "Privacy Settings Basics",
            content: `Protecting your privacy on social media starts with understanding and configuring your privacy settings.

ESSENTIAL PRIVACY SETTINGS:
• Profile Visibility - Control who can see your profile
• Post Audience - Choose who sees your posts (Friends, Public, Custom)
• Contact Information - Hide phone number and email
• Search Visibility - Limit who can find you via search
• Tagging Controls - Approve tags before they appear

PLATFORM-SPECIFIC SETTINGS:

FACEBOOK:
Settings → Privacy → Who can see your posts?
Settings → Timeline and Tagging → Review tags

INSTAGRAM:
Settings → Privacy → Private Account
Settings → Privacy → Story → Hide story from

TWITTER/X:
Settings → Privacy and Safety → Protect your posts
Settings → Privacy and Safety → Photo tagging

BEST PRACTICES:
• Review privacy settings every 3 months
• Be selective with friend/follower requests
• Check what information is publicly visible
• Use platform privacy checkup tools`,
            quiz: [
              {
                question: "How often should you review your privacy settings?",
                options: ["Never", "Once a year", "Every 3 months", "Every day"],
                correctAnswer: 2
              },
              {
                question: "What's the safest post audience setting?",
                options: ["Public", "Friends", "Friends of Friends", "Everyone"],
                correctAnswer: 1
              },
              {
                question: "Should you accept friend requests from strangers?",
                options: ["Yes, always", "No, be selective", "Only if they look nice", "Only on weekends"],
                correctAnswer: 1
              }
            ]
          }
        ]
      }
    ]
  }
};
