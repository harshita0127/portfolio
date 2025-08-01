// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's
import itmLogo from './assets/company_logo/itm.png';

// Education Section Logo's
import hbtuLogo from './assets/education_logo/hbtu.png';
import ignouLogo from './assets/education_logo/ignou.png';
import sdcLogo from './assets/education_logo/sdc.png';

// Project Section Logo's
import heartLogo from './assets/work_logo/heart.png';
import delhiLogo from './assets/work_logo/delhi.png';
import weddingLogo from './assets/work_logo/wedding.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: itmLogo,
      role: "Frontend Developer",
      company: "ITM Helpers Pvt Ltd",
      date: "Jan 2025 - Jun 2025",
      desc: "Designed and developed responsive webpages using HTML5, CSS3, JavaScript, and Bootstrap. Worked closely with UI/UX designers to convert Figma designs into functional interfaces.",
      skills: [
         "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Rest API",
        "Node JS",
        "Bootstrap",
      ],
    },
   
    
  ];
  
  export const education = [
    {
      id: 0,
      img: hbtuLogo,
      school: "Harcourt Butler Technical University",
      date: "Aug 2023 - May 2025",
      grade: "7.92 CGPA",
      desc: "I have completed my Master's degree in Computer Applications (MCA) from HBTU, Kanpur. During my time at HBTU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at HBTU has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: ignouLogo,
      school: "Indira Gandhi National Open University",
      date: "Aug 2020 - Jun 2023",
      grade: "6.54 CGPA",
      desc: "I completed my Bachelor's degree in Computer Applications (BCA) from IGNOU, Lucknow. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at IGNOU allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Applications - BCA",
    },
    {
      id: 2,
      img: sdcLogo,
      school: "Spring Dale College",
      date: "Mar 2018 - Feb 2019",
      grade: "61.40%",
      desc: "I completed my class 12 education from Spring Dale College, Lucknow, under the ISC board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "ISC(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: sdcLogo,
      school: "Spring Dale College",
      date: "Mar 2016 - Feb 2017",
      grade: "75.54%",
      desc: "I completed my class 10 education from Spring Dale College, Lucknow, under the ICSE board, where I studied Science with Computer.",
      degree: "ICSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Heart Disease Prediction System",
      description:
        "The Heart Disease Prediction System is a machine learning-based web application designed to predict whether a person is at risk of heart disease based on 13 key medical input features. The system leverages predictive algorithms and provides personalized risk analysis for patients.",
      image: heartLogo,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Python", "Django", "SQLite", "Machine learning", "sci-kit learn"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Delhi Metro Rail App",
      description:
        "The Delhi Metro Rail App is a Java-based console application that helps users find the shortest metro route and fare between any two stations in the Delhi Metro network. It simulates a real-world metro route planner using advanced data structures and graph algorithms.",
      image: delhiLogo,
      tags: ["Java", "Data Structures", "Algorithms", "Object Oriented Programming", "Command Line Interface"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Online Wedding Planning System",
      description:
        "The Online Wedding Planning System is a full-stack web application designed to simplify the wedding planning process. It allows users to browse, book, and manage various wedding-related services such as venues, decorators, photographers, catering, and more.",
      image: weddingLogo,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "MySQL"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
   
   
   
  ];  