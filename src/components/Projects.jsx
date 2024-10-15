
import React from "react";
import gee from '../assets/GEE.png'
import resume from '../assets/Resume.png'
import timeguardian from '../assets/TimeGuardian.png'
import icc from '../assets/ICC.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
            {title === 'Gujarat Entrance Exam' && (
                <a href="https://github.com/y4th4rthh/seat-allocation-system">
                    <img className="w-full rounded-t-lg h-auto object-cover" style={{borderBottom:'1px solid gray'}} src={gee} alt=""  />
                </a>
            )}
            {title === 'Time Guardian' && (
                <a href="https://github.com/y4th4rthh/time-guardian">
                    <img className="w-full rounded-t-lg h-auto object-cover" style={{borderBottom:'1px solid gray'}} src={timeguardian} alt=""  />
                </a>
            )}
            {title === 'Quick Resume' && (
                <a href="https://github.com/y4th4rthh/quick-resume-generator">
                    <img className="w-full rounded-t-lg h-auto object-cover" style={{borderBottom:'1px solid gray'}} src={resume} alt=""  />
                </a>
            )}
            {title === 'Code Wizard' && (
                <a href="https://github.com/y4th4rthh/text-editor-app">
                    <img className="w-full rounded-t-lg h-auto object-cover" style={{borderBottom:'1px solid gray'}} src={icc} alt=""  />
                </a>
            )}
            <div className="p-4 sm:p-6">
                <a href="https://example.com">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                        {title}
                    </h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-400">
                    {description}
                </p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-600'
                        >
                            {tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-blue-500 border border-gray-300 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:bg-blue-50 duration-300">
                    GitHub
                </a>
            </div>
        </div>

    );
};

const Projects = () => {
    const firstRowProjects = project.slice(0, 2);
    const secondRowProjects = project.slice(2);
    return (
        <div className="bg-white">
            <div className="flex flex-wrap gap-7 justify-center items-center sm:m-12 sm:p-12 mb-6 " style={{marginTop:'5rem',paddingTop:'5rem'}}>
                {firstRowProjects.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>

            <div className="flex flex-wrap gap-7 justify-center items-center  sm:m-12 sm:p-12 mb-6 mt-0 pt-0" style={{marginBottom:'5rem',paddingBottom:'5rem'}}>
                {secondRowProjects.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}


export const project = [
    {
        title: 'Time Guardian',
        description: '•		Time Guardian is a comprehensive employee management system designed to streamline administrative tasks and enhance workplace efficiency using modern technologies. It offers secure work hour monitoring and fostering transparent communication between managers and employees.',
        image: { timeguardian },
        git: 'https://github.com/y4th4rthh/time-guardian',
        technologies: ['MongoDb', 'React.js', 'Node.js']
    },
    {
        title: 'Gujarat Entrance Exam',
        description: '•	Gujarat Entrance Exam is an exam portal that I designed using Vite.js and Java Sprint Boot along with Tailwind CSS. It employs modern technologies to provide a user-friendly experience, automating the allocation of exam seats and issuance of hall tickets post-registration.',
        image: { gee },
        git: "https://github.com/y4th4rthh/seat-allocation-system",
        technologies: ['Vite.js', 'JavaSprintBoot']
    },
    {
        title: 'Quick Resume',
        description: '•	Quick Resume is a web-based application designed to automate the creation of resumes using Vite.js and Node.js technologies. It leverages modern technologies to provide users with a streamlined experience for generating professional resumes tailored to their specific needs.',
        image: { resume },
        git: "https://github.com/y4th4rthh/quick-resume-generator",
        technologies: ['MongoDb', 'React.js', 'Node.js']
    },
    {
        title: 'Code Wizard',
        description: '• Code Wizard is an innovative online platform offering comprehensive tutorials for HTML, CSS, Python, React, Node.js, and Tailwind CSS. It features a user-friendly built-in text editor, allowing users to write and test their code efficiently in one convenient space.',
        image: { icc },
        git: "https://github.com/y4th4rthh/text-editor-app",
        technologies: ['Vite.js', 'Node.js', 'MongoDb']
    },

   
]

export default Projects
