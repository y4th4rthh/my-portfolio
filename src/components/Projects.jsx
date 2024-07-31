
import React from "react";
import gee from '../assets/GEE.png'
import resume from '../assets/Resume.png'
import timeguardian from '../assets/TimeGuardian.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
            {title === 'Gujarat Entrance Exam' && (
                <a href="#">
                    <img className="w-full rounded-t-lg h-auto object-cover" style={{borderBottom:'1px solid gray'}} src={gee} alt=""  />
                </a>
            )}
            {title === 'Time Guardian' && (
                <a href="#">
                    <img className="w-full rounded-t-lg h-auto object-cover" style={{borderBottom:'1px solid gray'}} src={timeguardian} alt=""  />
                </a>
            )}
            {title === 'Quick Resume' && (
                <a href="#">
                    <img className="w-full rounded-t-lg h-auto object-cover" style={{borderBottom:'1px solid gray'}} src={resume} alt=""  />
                </a>
            )}
            {title === 'Online Payment Hub' && (
                <a href="#">
                    <img className="w-full rounded-t-lg h-auto object-cover" style={{borderBottom:'1px solid gray'}} src={resume} alt=""  />
                </a>
            )}
            <div className="p-4 sm:p-6">
                <a href="#">
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
                            #{tag}
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
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12 mt-20 pt-20 ">
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

            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12 mt-0 pt-0">
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
        git: 'https://github.com/nithingooud/CoPeople',
        technologies: ['MongoDb', 'React.js', 'Node.js']
    },
    {
        title: 'Gujarat Entrance Exam',
        description: '•	Gujarat Entrance Exam is an exam portal that I designed using Vite.js and Java Sprint Boot along with Tailwind CSS. It employs modern technologies to provide a user-friendly experience, automating the allocation of exam seats and issuance of hall tickets post-registration.',
        image: { gee },
        git: "https://github.com/nithingooud/vpn_studios",
        technologies: ['Vite.js', 'JavaSprintBoot']
    },
    {
        title: 'Quick Resume',
        description: '•	ResumeGenR is a web-based application designed to automate the creation of resumes using Vite.js and Node.js technologies. It leverages modern technologies to provide users with a streamlined experience for generating professional resumes tailored to their specific needs.',
        image: { resume },
        git: "https://github.com/nithingooud/vpn_studios",
        technologies: ['MongoDb', 'React.js', 'Node.js']
    },
    {
        title: 'Online Payment Hub',
        description: '• This Java-based project facilitates online transactions for booking train and movie tickets, paying electricity bills, and recharging mobiles. Itoffers secure seat reservations, efficient payment processing, intuitive interfaces, and a robust backend, ensuring a seamless user experience.',
        image: { resume },
        git: "https://github.com/nithingooud/vpn_studios",
        technologies: ['MySQL', 'Java']
    },

   
]

export default Projects