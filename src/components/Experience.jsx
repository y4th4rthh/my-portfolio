import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
import Footer from './Footer';

const Experience = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className='min-h-screen pt-16 pb-20 overflow-x-hidden' id='experience'>
        <div className='px-6 py-12 mx-auto max-w-7xl sm:px-16'>
          <p className='text-blue-500 font-medium tracking-wider uppercase'>MY JOURNEY SO FAR</p>
          <h2 className='mt-2 text-4xl font-extrabold text-gray-800 sm:text-5xl'>Work Experience.</h2>
        </div>
        
        <VerticalTimeline className='mt-12'>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: "linear-gradient(135deg, #3B82F6, #2563EB)",
                boxShadow: "0 8px 32px rgba(59, 130, 246, 0.15)",
                borderRadius: "12px",
                padding: "2rem"
              }}
              contentArrowStyle={{ borderRight: "10px solid #3B82F6" }}
              date={experience.duration}
              dateClassName="font-medium text-gray-700 md:text-gray-600 mt-0 sm:mt-4 md:mt-4"
              iconStyle={{ 
                background: '#111111',
                boxShadow: "0 0 0 4px #3B82F6, 0 8px 20px rgba(0, 0, 0, 0.1)"
              }}
              icon={
                <a className='flex justify-center items-center w-full h-full' 
                   href={experience.url} 
                   target='_blank'
                   rel="noopener noreferrer">
                  <img
                    src={experience.logo}
                    alt={experience.company}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </a>
              }
            >
              <div>
                <h3 className='text-white text-2xl font-bold'>{experience.role}</h3>
                <p className='text-blue-100 text-lg font-semibold mt-1'>
                  {experience.company}
                </p>
              </div>

              <ul className='mt-6 ml-5 space-y-3'>
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className='text-white text-base pl-1 tracking-wide'
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        
        <style jsx>{`
          .vertical-timeline::before {
            background: #3B82F6;
            width: 3px;
          }
          
          .vertical-timeline-element-date {
            font-weight: 500;
            padding: 0.5rem 1rem !important;
            background: transparent;
            border-radius: 8px;
          }
          
          @media (max-width: 1170px) {
            .vertical-timeline-element-date {
              margin-top: 1.5rem !important;
               background: rgba(255, 255, 255, 0.8);
            }
          }
          
          .vertical-timeline-element-content {
            transform: perspective(1000px) rotateY(0deg);
            transition: transform 0.4s;
          }
          
          .vertical-timeline-element-content:hover {
            transform: perspective(1000px) rotateY(2deg);
          }
          
          .vertical-timeline-element-icon {
            transition: transform 0.3s, box-shadow 0.3s;
          }
          
          .vertical-timeline-element-icon:hover {
            transform: scale(1.1);
            box-shadow: 0 0 0 4px #2563EB, 0 12px 24px rgba(0, 0, 0, 0.2) !important;
          }
        `}</style>
      </div>
      <Footer />
    </div>
  );
};

export default Experience;