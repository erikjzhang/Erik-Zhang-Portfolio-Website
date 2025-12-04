<div align="center">
<!-- REPLACE THIS LINK WITH YOUR OWN IMAGE LINK AFTER UPLOADING -->
<img src="https://www.google.com/search?q=https://via.placeholder.com/1200x600.png%3Ftext%3DErik%2BZhang%2BPortfolio%2BPreview" alt="Portfolio Banner" style="width: 100%; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
<h1 style="margin-top: 20px;">Erik Zhang | Web Developer Portfolio</h1>
<p>
<a href="https://github.com/erikjzhang">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/GitHub-100000%3Fstyle%3Dfor-the-badge%26logo%3Dgithub%26logoColor%3Dwhite" alt="GitHub">
</a>
<a href="https://linkedin.com/in/erikjzhang">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/LinkedIn-0077B5%3Fstyle%3Dfor-the-badge%26logo%3Dlinkedin%26logoColor%3Dwhite" alt="LinkedIn">
</a>
<a href="mailto:erikjzhang@gmail.com">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Email-D14836%3Fstyle%3Dfor-the-badge%26logo%3Dgmail%26logoColor%3Dwhite" alt="Email">
</a>
</p>
</div>
<br />
🚀 Introduction
Welcome to my personal portfolio website! This project serves as a comprehensive showcase of my technical skills, software engineering projects, and professional experience. Designed with a focus on modern web aesthetics and performance, it features a unique "Murrey Red & Oxford Blue" dark mode theme, interactive particle backgrounds, and fluid animations.
Whether you're a recruiter, fellow developer, or just browsing, this site offers a glimpse into my work as a Computer Science student at The Ohio State University.
✨ Features
🎨 Modern Dark Mode UI: A custom-designed aesthetic using Murrey Red (#8D0240) accents against a deep Oxford Blue/Black background.
🌠 Interactive Background: A custom particle system featuring floating code symbols (</>, {}, &&) that react to scrolling and float independently.
📱 Fully Responsive: Optimized for all devices, from large desktop monitors to mobile phones, with a custom mobile navigation menu.
⚡ Smooth Animations: Utilizing Framer Motion for fluid page transitions, scroll-triggered fade-ins, and dynamic layout shifts.
📧 Working Contact Form: Integrated with EmailJS to send real-time emails directly from the website without a backend server.
💼 Dynamic Content: Modular component architecture allowing for easy updates to Experience, Projects, and Skills data.
🛠️ Technologies Used
Framework: Next.js 15 (App Router)
Language: TypeScript
Styling: Tailwind CSS
Animations: Framer Motion
Icons: Lucide React
Email Service: EmailJS
Deployment: Vercel
📂 Project Structure
├── app/                  # Next.js App Router pages and layout
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout with metadata and fonts
│   └── page.tsx          # Main entry point combining all sections
├── components/           # Reusable UI components
│   ├── ui/               # Generic UI elements (Background, etc.)
│   ├── Hero.tsx          # Landing section
│   ├── About.tsx         # Bio and Experience timeline
│   ├── Skills.tsx        # Tech stack grid
│   ├── Projects.tsx      # Project showcase cards
│   ├── Contact.tsx       # Functional contact form
│   ├── NavBar.tsx        # Responsive navigation
│   └── Footer.tsx        # Copyright and links
├── constants/            # Static data (Resume info, Projects list)
└── public/               # Static assets (Images, Icons)


🚀 Getting Started
To run this project locally on your machine:
Clone the Repository:
git clone [https://github.com/erikjzhang/portfolio-website.git](https://github.com/erikjzhang/portfolio-website.git)


Navigate to the Directory:
cd portfolio-website


Install Dependencies:
npm install


Set Up Environment Variables:
Create a .env.local file for your EmailJS keys (optional, only if you want the contact form to work locally):
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key


Start the Development Server:
npm run dev

Open http://localhost:3000 in your browser to view the website.
🤝 Contributing
This is a personal portfolio, but suggestions are welcome! If you spot a bug or have a design idea, feel free to open an issue or fork the repository.
Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
📄 License
Distributed under the MIT License. See LICENSE for more information.
<div align="center">
