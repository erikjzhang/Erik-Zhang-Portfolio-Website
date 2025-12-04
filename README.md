<div align="center">

<div style="text-align: center;">
    <img src="https://i.ibb.co/nMz0n5CR/Banner.png" alt="Portfolio Banner" style="max-width: 100%; height: auto;">
</div>
<br>
<h1>Erik Zhang | Software Developer Portfolio</h1>

<p>
  <a href="https://github.com/erikjzhang">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://linkedin.com/in/erikjzhang">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="mailto:erikjzhang@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

</div>

---

# 🚀 Introduction

Welcome to my personal portfolio website!

This project is a full showcase of my technical skills, software engineering work, and professional experience. Built with a focus on modern design, it features a **Murrey Red & Oxford Blue dark mode theme**, **interactive particle backgrounds**, and **smooth animations** throughout.

Whether you're a recruiter, developer, or curious visitor, this site highlights my work as a **Computer Science & Engineering student at The Ohio State University**.

---

# ✨ Features

### 🎨 Modern Dark Mode UI  
Custom aesthetic using Murrey Red `#8D0240` and deep Oxford Blue/Black backgrounds.

### 🌠 Interactive Floating Particle Background  
Animated symbols (`</>`, `{}`, `&&`) float throughout the site with scroll-reactive behavior.

### 📱 Fully Responsive  
Optimized for desktop, tablet, and mobile screens with a custom mobile nav menu.

### ⚡ Smooth Animations  
Powered by **Framer Motion** for page transitions and scroll-triggered effects.

### 📧 Working Contact Form  
Integrated using **EmailJS**, enabling serverless real-time messaging.

### 💼 Dynamic Content System  
Projects, experience, and skills are modular and easily updated.

---

# 🛠️ Technologies Used

- **Framework:** Next.js 15 (App Router)  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS  
- **Animations:** Framer Motion  
- **Icons:** Lucide React  
- **Email Service:** EmailJS  
- **Deployment:** Vercel  

---

# 📂 Project Structure
```bash
├── app/ # Next.js App Router pages and layout
│ ├── globals.css # Global styles and Tailwind imports
│ ├── layout.tsx # Root layout with metadata and fonts
│ └── page.tsx # Main entry point combining all sections
├── components/ # Reusable UI components
│ ├── ui/ # Background UI 
│ ├── Hero.tsx # Landing section
│ ├── About.tsx # Bio and experience timeline
│ ├── Skills.tsx # Tech-stack / skills grid
│ ├── Projects.tsx # Project showcase cards
│ ├── Contact.tsx # Functional contact form
│ ├── NavBar.tsx # Responsive navigation menu
│ └── Footer.tsx # Footer section with links
├── constants/ # Static data (resume info, projects list, skill sets, etc.)
└── lib/ # Utility functions, helpers, and other reusable libraries/code
```

---

# 🚀 Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/erikjzhang/Erik-Zhang-Portfolio-Website
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd portfolio-next
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **(Optional) Configure EmailJS for Contact Form**
    ```bash
    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
    ```

5. **Start the Development Server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   This command starts the development server. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Contributing

This is a personal portfolio site, but improvements and bug fixes are always welcome.  
Feel free to open an issue or submit a pull request for technical fixes!