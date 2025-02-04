import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import TypeWriterComp from './TypeWriterComp';

export default function HomePage() {
    return (
        <div className='min-h-screen grid justify-center items-center p-4'>
            <div className='flex flex-col items-center text-center'>
                <h1 className='text-7xl font-extrabold text-gray-800 mb-4'>
                    Hi, I'm Afsar 🦖
                </h1>
                <div className='text-2xl text-gray-600 mb-8 max-w-4xl'>
                    <span className='text-3xl text-green-600 font-bold'>
                    <TypeWriterComp/>
                    </span>who loves <span className='line-through p-2 border text-black font-medium bg-gray-100 rounded-xl'>You 🤭</span> creating impactful digital experiences.
                </div>
                <a href="/about" className='flex items-center text-white bg-green-600 hover:bg-green-700 font-bold py-2 px-4 rounded-xl transition duration-300'>
                    About Me!
                    <FiArrowRight className='ml-2 w-6 h-6'/>
                </a>
            </div>
        </div>
    );
}
