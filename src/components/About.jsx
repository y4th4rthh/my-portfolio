import React from 'react';
import '../App.css';
import { services } from '../constants';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#3b82f6' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-white h-full w-full text-black sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden ' id='about'>
        <div className='flex flex-col justify-around py-12'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Patel Yatharth, a 2025 graduate🎓 with a passion for crafting robust backend systems and captivating web applications.I specialize in both Frontend and MERN stacks🚀.
              <br />
              ✍️ Beyond coding, I love sharing my insights and experiences through engaging blogs on <a className=' text-blue-600 hover:text-blue-700 duration-300' href="https://medium.com/@yatharthpatel014" target='_blank'  rel="noreferrer">Medium</a>, where I delve into the intricacies of software development and technology trends.
              On a different note, I'm also into photography📸. It's not just a hobby; I see it as a way to capture moments🌟📷, tell stories.</p>


            <a href='https://drive.google.com/file/d/1QZZ7lIp4r1uA8okn4rMESczBCrF2t110/view?usp=drive_link' >
              <button className='bg-blue-500 text-white p-3 rounded-md hover:bg-blue-300'>
                View Resume →
              </button>
            </a>

          </div>
          <div className='mt-20 flex  justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service}  />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;