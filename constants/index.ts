export const SOCIALS = {
  github: "https://github.com/erikjzhang",
  linkedin: "https://linkedin.com/in/erikjzhang",
  email: "mailto:erikjzhang@gmail.com"
};

export const SKILLS = [
  { name: "Java", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "C#", category: "Languages" },
  { name: "C / C++", category: "Languages" },
  { name: "JavaScript / TypeScript", category: "Languages" },
  { name: "HTML / CSS", category: "Languages" },
  { name: "React", category: "Frameworks" },
  { name: "Next.js", category: "Frameworks" },
  { name: "Tailwind CSS", category: "Frameworks" },
  { name: "Firebase", category: "Tools" },
  { name: "Unity", category: "Tools" },
  { name: "MATLAB", category: "Tools" },
  { name: "Onshape", category: "Tools" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Waste Classification Model",
    event: "HackOHI/O 2025",
    description: "A computer vision application automating waste sorting. Aided in training a CNN in Google Colab to categorize images (plastic, metal, organic) and integrated Firebase Realtime Database for backend logic.",
    tags: ["Python", "TensorFlow/CNN", "Firebase", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop", 
    links: { demo: "#", github: SOCIALS.github }
  },
  {
    id: 2,
    title: "Pursuit Of Knowledge RPG",
    event: "Fundamentals of Engineering Design Showcase AU2024",
    description: "4th Place Winner. A custom OOP game engine built in MATLAB. Features finite state machines, collision detection, and boss battles assessing engineering knowledge.",
    tags: ["MATLAB", "Game Dev", "OOP", "Algorithms"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    links: { demo: "#", github: SOCIALS.github }
  }
];

export const EXPERIENCE = [
  {
    role: "Junior Web Developer",
    company: "MMC Digital Lab",
    period: "Aug 2024 - Present",
    desc: "Developing websites for the MMC Scholars Program using Next.js and React. Managing full development lifecycle and integrating new features."
  },
  {
    role: "Barista",
    company: "Kung Fu Tea",
    period: "Apr 2025 - July 2025",
    desc: "Managed workflow efficiency with POS systems and ensured product consistency in a fast-paced environment."
  },
  {
    role: "Retail Associate",
    company: "Macy's, Inc.",
    period: "Dec 2024 - Jan 2025",
    desc: "Facilitated high-volume transactions and maintained sales floor organization during peak holiday season."
  }
];
