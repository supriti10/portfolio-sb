export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const testimonials = [
    {
      id: 1,
      name: 'Satyaki Maiti',
      position: 'Trainee at Capegemini',
      img: 'assets/review2.png',
      review:
        'Working with Supriti was a fantastic experience. Her attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Amisha Joshi',
      position: 'Former TDP Intern at Optum',
      img: 'assets/review1.png',
      review:
        'Supriti’s expertise in web development is truly impressive. She’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'Subhranil Ghoshal',
      position: 'Ex R&D Intern at TCS',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Supriti. Her problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Animikha Basak',
      position: 'Intern at Infosys',
      img: 'assets/review4.png',
      review:
        'Supriti was a pleasure to work with. Her skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'AI-Based Complaint Routing System',
      desc: 'An intelligent grievance management system that automates complaint classification and routing using NLP, ensuring faster and more accurate resolution.',
      subdesc:
        'Leverages natural language processing to categorize complaints, detect priority levels, and identify duplicates, combined with role-based dashboards to streamline handling and improve response efficiency.',
      href: 'https://github.com/supriti10/ai-complaint-routing-system.git',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/p1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Python',
          path: 'assets/python.png',
        },
      ],
    },
    {
      title: 'AI Code Generator',
      desc: 'A generative AI-powered tool that assists developers by generating, explaining, and debugging code from natural language prompts.',
      subdesc:
        'Offers three intelligent modes: generate clean code instantly, understand existing code with clear explanations, and debug errors with actionable fixes—all in one streamlined interface.',
      href: 'https://ai-code-generator-s10.streamlit.app/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/p2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Python',
          path: '/assets/python.png',
        },
        {
          id: 2,
          name: 'Streamlit',
          path: 'assets/streamlit.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Optum',
      pos: 'Technology Development Intern',
      duration: 'June 2025 - August 2025',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
  ];