import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import TypeWriterComp from './TypeWriterComp';
import { GiFrog, GiFrogFoot } from "react-icons/gi"
import { motion } from "framer-motion"

const frogs = [
    { xStart: 0, yStart: 50, xMove: [0, 300, -300, 0], yMove: [0, -40, 40, 0], duration: 6 },
    { xStart: 50, yStart: 200, xMove: [0, -200, 200, -200, 0], yMove: [0, 30, -30, 30, 0], duration: 5 },
    { xStart: "80%", yStart: 100, xMove: [0, 100, -100, 50, 0], yMove: [0, -50, 50, -50, 0], duration: 7 },
    { xStart: "20%", yStart: "80%", xMove: [0, 150, -150, 0], yMove: [0, 20, -20, 0], duration: 6 },
    { xStart: "60%", yStart: "90%", xMove: [0, -120, 120, 0], yMove: [0, -25, 25, 0], duration: 8 },
    { xStart: "10%", yStart: "30%", xMove: [0, 200, -200, 0], yMove: [0, -20, 20, -20, 0], duration: 7 },
    { xStart: "90%", yStart: "10%", xMove: [0, -150, 150, -150, 0], yMove: [0, 25, -25, 25, 0], duration: 6 },
    { xStart: "30%", yStart: "70%", xMove: [0, 250, -250, 250, 0], yMove: [0, -30, 30, -30, 0], duration: 9 },
  ];

export default function HomePage() {
    return (
        <div className='flex flex-col p-4 relative'>
            {/* Dekorasi Kodok */}
            {frogs.map((frog, index) => (
                <motion.div
                    key={index}
                    className="absolute text-green-700 text-5xl"
                    initial={{ left: frog.xStart, top: frog.yStart }}
                    animate={{ x: frog.xMove, y: frog.yMove }}
                    transition={{ repeat: Infinity, duration: frog.duration, ease: "easeInOut" }}
                >
                    🐸
                </motion.div>
            ))}

            <div className='flex flex-col items-center text-center'>
                <h1 className='text-7xl font-extrabold text-green-800 mb-4 flex items-center'>
                    <GiFrog className='mr-3 text-green-600' /> Hi, I'm Afsar <GiFrogFoot className='ml-3 text-green-600' />
                </h1>
                <div className='text-2xl text-green-700 mb-8 max-w-4xl bg-green-100 p-4 rounded-xl shadow-md border border-green-300'>
                    <span className='text-3xl text-green-600 font-bold'>
                        <TypeWriterComp />
                    </span> who loves <span className='line-through p-2 border text-black font-medium bg-gray-100 rounded-xl'>You 🤭</span> creating impactful digital experiences.
                </div>

                <a href="/about" className='flex items-center text-white bg-green-600 hover:bg-green-700 font-bold py-2 px-4 rounded-xl transition duration-300 shadow-lg transform hover:scale-110'>
                    About Me
                    <FiArrowRight className='ml-2 w-6 h-6' />
                </a>
            </div>
        </div>
    );
}
