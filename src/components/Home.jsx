// import React from 'react';
// import { useState, useEffect, useRef } from 'react';
// import { name } from '../constants';
// import Footer from './Footer';

// const Home = () => {
//     const ref = useRef(0);
//     const [text, setText] = useState('');

//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (ref.current < name.length) {
//                 ref.current++;
//                 setText((prevText) => prevText + name[ref.current - 1]);
//             }
//         }, 500);
//         return () => clearInterval(interval);
//     }, [text]);

//     return (
//         <div className='area relative z-0 bg-white w-screen h-screen' style={{backgroundColor:'white'}}>
//             <ul className="circles my-auto" style={{ backgroundColor: '#ffffff' }}>
//                 <li style={{ backgroundColor: '#dbeafe' }}></li>
//                 <li style={{ backgroundColor: '#bfdbfe' }}></li>
//                 <li style={{ backgroundColor: '#dbeafe' }}></li>
//                 <li style={{ backgroundColor: '#dbeafe' }}></li>
//                 <li style={{ backgroundColor: '#bfdbfe' }}></li>
//                 <li style={{ backgroundColor: '#dbeafe' }}></li>
//                 <li style={{ backgroundColor: '#dbeafe' }}></li>
//                 <li style={{ backgroundColor: '#bfdbfe' }}></li>
//                 <li style={{ backgroundColor: '#dbeafe' }}></li>
//                 <li style={{ backgroundColor: '#dbeafe' }}></li>
//             </ul>
//             <div className='hero relative h-[calc(100vh)] flex justify-center items-center text-black' id='hero'>
//                 <div className='pt-4 h-36 backdrop-blur-sm rounded-3xl bg-opacity-70 bg-white'>
//                     <h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>
//                         Hi, I'm&nbsp;<span className='text-blue-500 font-extrabold'>{text}</span>
//                     </h1>
//                     <p className='mt-3 text-xl'>
//                         I love to learn and build scalable and optimized backend systems.
//                     </p>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default Home;

import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { name } from '../constants';
import Footer from './Footer';

const Home = () => {
    const ref = useRef(0);
    const [text, setText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [typingComplete, setTypingComplete] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            if (ref.current < name.length) {
                ref.current++;
                setText((prevText) => prevText + name[ref.current - 1]);
            } else {
                // When typing is complete, keep blinking the cursor and start animations
                clearInterval(interval);
                setTypingComplete(true);
                startCursorBlink();
            }
        }, 150); // Typing speed
        
        return () => clearInterval(interval);
    }, []);
    
    const startCursorBlink = () => {
        setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
    };

    return (
        <div className='relative min-h-screen bg-gradient-to-b from-white to-blue-50 overflow-hidden'>
            {/* Animated background circles - only shown after typing completes */}
            {typingComplete && (
                <ul className="absolute inset-0 w-full h-full overflow-hidden z-0">
                    {[...Array(10)].map((_, index) => {
                        // Generate a single size value for both width and height
                        const size = 50 + Math.random() * 100;
                        return (
                            <li
                                key={index}
                                className={`absolute block list-none animate-float rounded-full opacity-0 ${index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'}`}
                                style={{
                                    left: `${Math.random() * 90}%`,
                                    top: `${Math.random() * 90}%`,
                                    width: `${size}px`,
                                    height: `${size}px`,
                                    animationDelay: `${Math.random() * 2}s`,
                                    animationDuration: `${10 + Math.random() * 5}s`,
                                    animation: `float ${10 + Math.random() * 5}s ease-in-out infinite, 
                                               fadeIn 1s ease-out forwards ${Math.random() * 2}s`
                                }}
                            ></li>
                        );
                    })}
                </ul>
            )}
            
            {/* Main content */}
            <div className='relative z-10 flex flex-col justify-center items-center h-screen px-4'>
                <div className='max-w-3xl w-full text-center'>
                    <div className='rounded-3xl p-8 transform transition-all duration-500 hover:scale-105'>
                        <h1 className='text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-800'>
                            Hi, I'm&nbsp;
                            <span className='text-blue-600 font-extrabold'>
                                {text}
                                <span className={`inline-block w-0.5 h-12 bg-blue-600 ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                            </span>
                        </h1>
                        <p className='mt-6 text-xl sm:text-2xl text-gray-600 leading-relaxed'>
                            I love to learn and build scalable and optimized backend systems.
                        </p>
                        
                        <div className='mt-10 flex flex-wrap justify-center gap-4'>
                            <button onClick={()=>{navigate("/about");}} className='px-6 py-3 bg-blue-600 text-white rounded-full font-medium transition-all hover:bg-blue-700 hover:shadow-lg'>
                                View My Profile
                            </button>
                            <button onClick={()=>{navigate("/contact");}} className='px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-full font-medium transition-all hover:bg-blue-50 hover:shadow-lg'>
                                Contact Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
            
            {/* Add the necessary CSS for the animations */}
            <style jsx>{`
                @keyframes float {
                    0% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                    100% {
                        transform: translateY(0px);
                    }
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 0.7;
                    }
                }
            `}</style>
        </div>
    );
}

export default Home;