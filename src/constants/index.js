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
    yLogoBlack,
    carrent,
    jobit,
    tripguide,
    millenium,
    pggo,
    yudio,
    threejs,
} from "../assets";

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
        title: "React JS Developer",
        icon: web,
    },
    {
        title: "UI/UX Developer",
        icon: creator,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Web Developer",
        icon: mobile,
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
        title: "Front End Developer",
        company_name: "Unizen Technologies",
        icon: yLogoBlack,
        // iconBg: "#383E56",
        iconBg: "#E6DEDD",
        date: "December 2022 - Present",
        points: [
            "Built the industry level project Millennium Pharma PWA’s Dashboard UI from scratch within a less than 20 days",
            "Completed Redux implementation for Rest API calls and state management.",
            "Fixed production code for industry level project FOSS-DASH for both Frontend and Backend and led the team to successful redeployment of the project.",
            "Fixed bugs in existing project written in JSP (frontend), NodeJS (backend) and Socket IO(server + client)."
        ],
    },
    {
        title: "Freelance Web Developer",
        company_name: "Upwork",
        icon: yLogoBlack,
        iconBg: "#E6DEDD",
        date: "May 2022 - December 2022",
        points: [
            "Completed a PG Booking System Project in LAMP stack.",
            "Completed a Parlour Booking System Project in LAMP stack for the initial phase.",
            "Completed building a Music Player App that uses Youtube Data API and Rapid YT to mp3 API which converts Youtube videos to MP3 and plays it.",
            "Completed buidling a Weather App that uses OpenWeatherMap API and Unsplash API to change the background image according to the location keywords.",
            "Completed building a Realtime Chat App that uses Socket IO for realtime data exchange.",
            "Built a restaurant website for a client Divine Hospitalities as per requested design and in given time."
        ],
    },
    {
        title: "Web Developer",
        company_name: "Keensol Communication",
        icon: yLogoBlack,
        // iconBg: "#383E56",
        iconBg: "#E6DEDD",
        date: "Feb 2022 - May 2022",
        points: [
            "Developed Wordpress websites according to the client's needs.",
            "Maintained the company's official website."
        ],
    }
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
        name: "Millennium Chemi Pharma",
        description:
            "Web-based platform that allows users to monitor, set up, and manage products, productions, chemicals, sensors, equipments, etc. It reduces the amount of daily work for the workers in the organisation (client). It is an industry project.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
        ],
        image: millenium,
        source_code_link: "https://github.com/yubaraj-g",
    },
    {
        name: "PG-GO: PG Booking",
        description:
            "Web application that enables users to search for PGs, view estimated price ranges for PGs, and locate available PGs based on their current location.",
        tags: [
            {
                name: "Tailwindcss",
                color: "blue-text-gradient",
            },
            {
                name: "PHP",
                color: "green-text-gradient",
            },
            {
                name: "SQL",
                color: "pink-text-gradient",
            },
        ],
        image: pggo,
        source_code_link: "https://github.com/yubaraj-g",
    },
    {
        name: "Yudio: Music Player App",
        description:
            "A Music Player App that allows users to search songs or any video and play it. It uses Youtube Data API to fetch the videos and convert them to Audio using Rapid YT to MP3 API.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "Restful APIs",
                color: "green-text-gradient",
            },
            {
                name: "Context API",
                color: "pink-text-gradient",
            },
        ],
        image: yudio,
        source_code_link: "https://github.com/yubaraj-g",
    },
];

export { services, technologies, experiences, testimonials, projects };