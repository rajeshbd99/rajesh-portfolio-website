import realState from "../assets/realEstate.png";
import dineFusion from "../assets/dinefusion.png";
import sports from "../assets/sports.png";
import carrer from "../assets/carrer.png";

const projects = [
  {
    title: "Real Estate Platform",
    description:
      "PropertyPulse (Frontend) is a modern and responsive real estate platform built with React, Tailwind CSS, DaisyUI, and Vite. It features dedicated dashboards for users, agents, and admins, allowing users to save properties to their wishlist, leave reviews for purchased properties, and enjoy seamless authentication powered by Firebase. Agents can manage properties with ease, while admins have centralized control over users, properties, and reviews. The platform offers a fully responsive design optimized for all devices, interactive notifications using Sweet Alerts and Toastify, session persistence for a smooth user experience, and a custom 404 page for nonexistent routes. It leverages Context API for state management and React Router DOM for efficient navigation, providing a cutting-edge and user-friendly experience.A full-stack MERN real estate platform with authentication and property management.",
    githubClient: "https://github.com/rajeshbd99/PropertyPulse-client",
    githubServer: "https://github.com/rajeshbd99/PropertyPulse-server",
    live: "https://real-estate-platform-653cf.web.app/",
    image: realState,
  },
  {
    title: "Restaurant Management System",
    description:
      "DineFusion (Frontend) is a responsive web-based platform built with React.js for adding, viewing, and managing food items. It features secure authentication, seamless CRUD operations, and real-time toast notifications for user actions. The platform ensures usability across all devices and utilizes modern tools like Tailwind CSS for styling and Heroicons for icons. Key functionalities include user-friendly navigation with React Router DOM, API communication via Axios, and user context management for a personalized experience.",
    githubClient: "https://github.com/rajeshbd99/Restaurant_Management_Client",
    githubServer: "https://github.com/rajeshbd99/Restaurant_Management_Server",
    live: "https://restaurant-management-66f13.web.app/",
    image: dineFusion,
  },
  {
    title: "Sports Equipment Store",
    description:
      "ProSports Hub is a responsive web application designed for managing sports equipment efficiently. Built with React.js and Tailwind CSS, it features secure Firebase authentication for login and registration, along with seamless CRUD operations to add, update, and delete sports equipment. The intuitive interface is optimized for all devices, ensuring a smooth user experience. Key technologies include React Router for navigation, React Toastify for user feedback, and REST API integration for backend communication.",
    githubClient: "https://github.com/rajeshbd99/Sports_Equipment_Store_client",
    githubServer: "https://github.com/rajeshbd99/Sports_Equipment_Store_server",
    live: "https://sports-equipment-store-880cf.web.app/",
    image: sports,
  },
  {
    title: "Carrer Counseling Platform",
    description:
      "Career Hub is a professional platform designed to help users advance their careers by providing essential insights, tools, and services. The platform features secure user registration and social login options, along with protected routes to ensure access to key sections is restricted to authenticated users. A dynamic user dashboard allows for personalized profiles with avatar support and update options. Career resources include tips for resume building, job applications, and professional growth. Built with React and Tailwind CSS, the platform offers a fully responsive and interactive user experience, leveraging Firebase Authentication for secure access and React Toastify for real-time notifications.",
    githubClient:
      "https://github.com/rajeshbd99/Carrer_Counseling?tab=readme-ov-file",
    githubServer:
      "https://github.com/rajeshbd99/Carrer_Counseling?tab=readme-ov-file",
    live: "https://carrer-counseling-23074.web.app/",
    image: carrer,
  },
];

export default projects;
