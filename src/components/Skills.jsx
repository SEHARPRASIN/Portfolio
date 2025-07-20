import React from 'react'
import reactLogo from '../assets/react.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import mongo from '../assets/mongoo.png' // Consider renaming file to mongodb.png
import python from '../assets/python.png'
import sql from '../assets/sql.png'

const skillsData = [
    { img: reactLogo, name: 'React', desc: 'Frontend Library' },
    { img: node, name: 'Node.js', desc: 'JavaScript Runtime' },
    { img: express, name: 'Express', desc: 'Web Framework for Node.js' },
    { img: mongo, name: 'MongoDB', desc: 'NoSQL Database' },
    { img: python, name: 'Python', desc: 'General-purpose Programming' },
    { img: sql, name: 'SQL', desc: 'Relational Databases' }
]

const Skills = () => {
    return (
        <section id='skills' data-aos='fade-up' data-aos-delay='250'
            className='w-full py-16 bg-gradient-to-b from-gray-200/10 to-white relative'>
            <div className='absolute inset-0 bg-white/30 backdrop-blur-sm z-0'></div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='text-center mb-16 group'>
                    <h2 className='text-4xl font-bold text-red-600 relative pb-2'>
                        MY Skills
                        <span className='absolute bottom-0 left-0 h-1 bg-red-400 rounded-full
                            w-0 group-hover:w-full transition-all duration-500 ease-in-out'></span>
                    </h2>
                    <p className='mt-4 text-lg text-gray-700 max-w-2xl mx-auto'>
                        Technologies I've mastered through experience
                    </p>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {skillsData.map((skill, index) => (
                        <div key={index} className='flex flex-col items-center p-5 rounded-2xl bg-white/70
                            backdrop-blur-md shadow-lg hover:shadow-xl border border-white/20 transition-all
                            duration-300 group relative overflow-hidden hover:border-red-200 hover:scale-[1.03]'>
                            <div className='absolute inset-0 bg-gradient-to-br from-red-400/30 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>

                            <div className='mb-4 p-3 bg-white/80 rounded-xl shadow-sm group-hover:rotate-6
                                group-hover:bg-red-50 transition-all duration-300'>
                                <img src={skill.img} alt={`${skill.name} Icon`}
                                    className='w-14 h-14 object-contain grayscale group-hover:grayscale-0
                                        group-hover:scale-110 transition-all duration-300' />
                            </div>
                            <h3 className='text-lg font-semibold text-gray-800 mb-2 group-hover:text-red-600
                                transition-colors duration-200'>
                                {skill.name}
                            </h3>
                            <p className='text-sm text-gray-600 text-center group-hover:text-gray-800
                                group-hover:scale-[1.03] transition-all duration-200 px-2'>
                                {skill.desc}
                            </p>
                            <div className='absolute inset-0 rounded-2xl border-2 border-transparent
                                group-hover:border-red-300/30 transition-all duration-500 pointer-events-none'></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills

