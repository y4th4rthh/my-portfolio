import React from "react";
import gee from '../assets/GEE.png';
import resume from '../assets/Resume.png';
import timeguardian from '../assets/TimeGuardian.png';
import icc from '../assets/ICC.png';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    // Function to get the correct image based on title
    const getImage = (title) => {
        switch (title) {
            case 'Gujarat Entrance Exam': return gee;
            case 'Time Guardian': return timeguardian;
            case 'Quick Resume': return resume;
            case 'Code Wizard': return icc;
            default: return null;
        }
    };

    return (
        <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
            <a href={git} className="block overflow-hidden">
                <img
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    src={getImage(title)}
                    alt={title}
                />
            </a>
            <div className="p-6">
                <a href={git} className="block mb-3">
                    <h5 className="text-2xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                        {title}
                    </h5>
                </a>
                <p className="font-normal text-base text-gray-700 mb-4 h-36">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tag, index) => (
                        <span
                            key={`${index}-${tag}`}
                            className="px-3 py-1 text-sm text-blue-600 bg-blue-100 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <a
                    href={git}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                    View on GitHub
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className=" bg-gradient-to-b from-white to-blue-50">
            <div className="min-h-screen container mx-auto px-4 py-24">
                <div className="text-left mb-10 max-w-4xl mx-auto">
                    <p className='text-blue-500 font-medium tracking-wider uppercase'>MY PROJECTS SO FAR</p>
                    <h2 className='mt-2 text-4xl font-extrabold text-gray-800 sm:text-5xl'>Projects.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {project.map((item, index) => (
                        <ProjectCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            git={item.git}
                            technologies={item.technologies}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export const project = [
    {
        title: 'Time Guardian',
        description: 'A comprehensive employee management system designed to streamline administrative tasks and enhance workplace efficiency using modern technologies. It offers secure work hour monitoring and fosters transparent communication.',
        git: 'https://github.com/y4th4rthh/time-guardian',
        technologies: ['MongoDB', 'React.js', 'Node.js']
    },
    {
        title: 'Gujarat Entrance Exam',
        description: 'An exam portal designed using Vite.js and Java Spring Boot with Tailwind CSS. It automates the allocation of exam seats and issuance of hall tickets post-registration.',
        git: "https://github.com/y4th4rthh/seat-allocation-system",
        technologies: ['Vite.js', 'Java Spring Boot', 'Tailwind CSS']
    },
    {
        title: 'Quick Resume',
        description: 'A web-based application designed to automate the creation of resumes using Vite.js and Node.js technologies. It provides users with a streamlined experience for generating professional resumes.',
        git: "https://github.com/y4th4rthh/quick-resume-generator",
        technologies: ['MongoDB', 'React.js', 'Node.js']
    },
    {
        title: 'Code Wizard',
        description: 'An innovative online platform offering comprehensive tutorials for HTML, CSS, Python, React, Node.js, and Tailwind CSS. Features a user-friendly built-in text editor for writing and testing code.',
        git: "https://github.com/y4th4rthh/text-editor-app",
        technologies: ['Vite.js', 'Node.js', 'MongoDB']
    },
]

export default Projects;