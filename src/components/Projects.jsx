import React from 'react';
import Portfolio from '../assets/Portfolio.png'
import FoodDel from '../assets/Food Del.png'
import EmailSpam from '../assets/Email Spam.jpg'
import ChatApp from '../assets/ChatApp.png'
import Agrocraft from '../assets/Agrocraft.png'
import FoodRecognition from '../assets/FoodRecognition.jpg'

const projects = [
  {
    id: 1,
    title: "3D-PORTFOLIO-WEBSITE-MASTER",
    desc: "A 3D portfolio built with React Three Fiber, showcasing modern design and animation.",
    technologies: ['React', 'Three.js', 'TailwindCSS'],
    github: "#",
    demo: "#",
    image: Portfolio
  },
  {
    id: 2,
    title: "FOOD DELIVERY E-COM WEB PAGE",
    desc: "A responsive food ordering platform with cart, login, and admin features.",
    technologies: ['React', 'NodeJs', 'ExpressJs', 'MongoDB'],
    github: "#",
    demo: "#",
    image: FoodDel
  },
  {
    id: 3,
    title: "E-MAIL SPAM CLASSIFIER",
    desc: "Machine learning model to classify spam emails using Python and Scikit-learn.",
    technologies: ['Python', 'Sklearn', 'Pandas'],
    github: "#",
    demo: "#",
    image: EmailSpam
  },
  {
    id: 4,
    title: "Agrocraft",
    desc: "Smart agriculture solution to monitor crop and soil data with a user dashboard.",
    technologies: ['React', 'MongoDB', 'Node.js'],
    github: "#",
    demo: "#",
    image: Agrocraft
  },
  {
  id: 5,
  title: "Real-Time Chat App",
  desc: "A real-time chat application with Socket.io enabling instant messaging across clients. Includes user rooms, typing indicators, and responsive design.",
  technologies: ['React', 'Socket.io', 'Node.js', 'Express', 'TailwindCSS'],
  github: "#",
  demo: "#",
  image: ChatApp
},
{
  id: 6,
  title: "Food Recognition System",
  desc: "A diet management system developed using ASP.NET and SQL Server that helps diabetic patients identify foods and receive instant suggestions to maintain calorie limits.",
  technologies: ['ASP.NET', 'SQL Server', 'C#', 'Machine Learning'],
  github: "#",
  demo: "#",
  image: FoodRecognition
}


];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-20 px-4 sm:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          My <span className="text-red-600">Projects</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Here are some of the best projects I’ve worked on across frontend, backend, and machine learning domains.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`
              bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-300
              ${index % 3 === 0 ? 'text-left' : index % 3 === 1 ? 'text-center' : 'text-right'}
            `}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2 justify-start mb-4">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className={`flex gap-6 ${index % 3 === 1 ? 'justify-center' : index % 3 === 2 ? 'justify-end' : 'justify-start'}`}>
                <a href={project.github} target="_blank" rel="noreferrer" className="text-red-600 hover:underline font-medium">GitHub</a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="text-red-600 hover:underline font-medium">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

