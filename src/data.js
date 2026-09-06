export const companyInfo = {
  name: "Silversource",
  valueStatement: "Empowering your business with custom software services.",
  introduction: "We are a software services organisation founded by Tumelo Lutaka and Darryll Siame, dedicated to delivering robust and scalable solutions.",
  serviceArea: "Global",
  email: "hello@silversource.example.com",
};

export const founders = [
  {
    name: "Tumelo Lutaka",
    role: "Technical Lead",
    biography: "An experienced IT technician with a passion for building scalable web applications and optimizing workflows.",
    skills: ["React", "Node.js", "Cloud Architecture"],
    links: [
      { label: "LinkedIn", url: "#", icon: "linkedin" },
      { label: "GitHub", url: "#", icon: "github" },
    ],
  },
  {
    name: "Darryll Siame",
    role: "Content and Client Lead",
    biography: "A strategic thinker focused on delivering client value through clear communication and effective project management.",
    skills: ["Project Management", "Client Relations", "Technical Writing"],
    links: [
      { label: "LinkedIn", url: "#", icon: "linkedin" },
    ],
  },
];

export const services = [
  {
    title: "Website and Web-App Development",
    clientNeed: "Need a modern, responsive online presence.",
    output: "Custom-built, performant web applications.",
  },
  {
    title: "Custom Business Software",
    clientNeed: "Off-the-shelf software doesn't fit your processes.",
    output: "Tailored software solutions designed for your specific needs.",
  },
  {
    title: "Workflow Automation and Integrations",
    clientNeed: "Spending too much time on repetitive manual tasks.",
    output: "Automated workflows connecting your essential tools.",
  },
  {
    title: "Software Maintenance",
    clientNeed: "Need reliable support for existing systems.",
    output: "Ongoing updates, bug fixes, and performance monitoring.",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-commerce Platform Refactoring",
    category: "Web-App Development",
    year: "2025",
    status: "Completed",
    type: "Client Work",
    story: {
      problem: "The client's existing platform was slow and difficult to maintain.",
      intendedUsers: "Online shoppers and store administrators.",
      solution: "Refactored the frontend using React and optimized backend API calls.",
      contribution: "Led the frontend architecture and implementation.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      outcome: "Increased page load speed by 40% and improved conversion rates.",
    },
    evidence: {
      screenshots: [{ url: "https://via.placeholder.com/600x400?text=Project+1", alt: "E-commerce Dashboard" }],
      demoUrl: "#",
      repoUrl: "#",
    },
  },
  {
    id: 2,
    title: "Internal CRM Dashboard",
    category: "Custom Business Software",
    year: "2026",
    status: "In Progress",
    type: "Internal Work",
    story: {
      problem: "Tracking client interactions was scattered across spreadsheets.",
      intendedUsers: "Internal sales and support teams.",
      solution: "Built a centralized dashboard for managing client data.",
      contribution: "Full-stack development and database design.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      outcome: "Streamlined data entry and provided real-time reporting.",
    },
    evidence: {
      screenshots: [{ url: "https://via.placeholder.com/600x400?text=Project+2", alt: "CRM Dashboard" }],
      demoUrl: "",
      repoUrl: "#",
    },
  },
];

export const companySocials = [
  { label: "LinkedIn", url: "#", icon: "linkedin" },
  { label: "GitHub", url: "#", icon: "github" },
];
