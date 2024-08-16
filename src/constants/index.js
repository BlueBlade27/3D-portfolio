import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    techGirls,
    TPS,
    GitAgent,
    movie,
    pantry,
    text,
    flash,
  } from '../assets/assets';
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: "Project Developer/Manager",
      icon: backend,
    },
    {
      title: "Technical Support Specialist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Echo",
      company_name: "Technovation Girls",
      icon: techGirls,
      iconBg: "#383E56",
      date: "Oct 2020 - Jan 2021",
      points: [
        "Developed the \"Echo\" application using MIT App Inventor to help small businesses gain customers during COVID-19.",
        "Collaborated with a team of 3 to create the app and business plan.",
        "Led troubleshooting efforts, inspecting and resolving code issues.",
        "Played a lead role in the app's development and business planning resulting in the app winning 27th place worldwide.",
      ],
    },
    {
      title: "PassionFruit",
      company_name: "Technovation Girls",
      icon: techGirls,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - Jan 2022",
      points: [
        "Created \"PassionFruit,\" a mobile application to help users discover volunteer, extracurricular, internship, and apprenticeship opportunities.",
        "Used MIT App Inventor for development and troubleshooting.",
        "Served as Computer Programmer and Marketing Director, leading the app and business plan creation in a team of 3.",
      ],
    },
    {
      title: "IT support",
      company_name: "Toronto Police Service",
      icon: TPS,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Github Agent",
      description:
        "Designed to automatically review and analyze code changes. It uses machine learning models to provide insights, suggestions, and potential improvements for code submissions. The project aims to enhance code quality, catch potential bugs, and streamline the code review process by offering automated feedback to developers.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "langChain",
          color: "green-text-gradient",
        },
        {
          name: "openAI",
          color: "pink-text-gradient",
        },
        {
          name: "astraDB",
          color: "blue-text-gradient",
        },
        {
          name: "githubAPI",
          color: "green-text-gradient",
        },
      ],
      image: GitAgent,
      source_code_link: "https://github.com/BlueBlade27/Github-agent",
    },
    {
      name: "Movie Web App",
      description:
        "A responsive Netflix-inspired web app featuring a dark theme, movie carousels, and light/dark mode toggle. Built with HTML, CSS, and JavaScript, it showcases complex front-end development and interactive design, replicating key elements of popular streaming platforms.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: movie,
      source_code_link: "https://github.com/BlueBlade27/Movie-Website",
    },
    {
      name: "Pantry Tracker",
      description:
        "Pantry Tracker is a full-stack web application made to help users manage their home pantry inventory. Built with React.js and TypeScript on the frontend, and Node.js with Express.js on the backend, it uses MongoDB for data storage. The app features user authentication via JWT, a RESTful API, and design using CSS modules and Tailwind CSS.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
        {
          name: "materialUI",
          color: "blue-text-gradient",
        },
      ],
      image: pantry,
      source_code_link: "https://github.com/BlueBlade27/Pantry-Tracker",
    },
    {
      name: "Predictive text editor",
      description:
        "Implements a predictive text feature that suggests words based on user input. As the user types, it displays matching suggestions from a dictionary API (datamuse), adjusting the case to match the input. When the user presses Enter, the suggestion is automatically filled into the input field.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "datamuseAPI",
          color: "blue-text-gradient",
        },
      ],
      image: text,
      source_code_link: "https://github.com/BlueBlade27/predictive-text",
    },
    {
      name: "FlashLearn",
      description:
        "FlashLearn is a web application designed to streamline the creation and study of flashcards, tailored for students. It allows users to create custom flashcard decks, add cards with questions and answers, and efficiently study them using intuitive navigation controls.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: flash,
      source_code_link: "https://github.com/BlueBlade27/RocketHacks",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };