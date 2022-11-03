import React from 'react'
import { TfiHtml5, TfiCss3, } from 'react-icons/tfi'
import { FiGithub } from 'react-icons/fi'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript } from 'react-icons/si'

const Skills = () => {
    return (
        <div name='skills' className='pt-20 md:pt-0 w-full h-full md:h-screen flex justify-center items-center'>
            <div className="max-w-6xl w-full p-4 flex flex-col justify-between items-start mx-auto">
                <div className='text-gray'>
                    <h2 className='inline text-4xl font-bold border-b-4 border-primary'>Skills!</h2>
                    <p className='text-lg py-4'>Here are technologies I am experienced with.</p>
                </div>
                <div className='max-w-6xl w-full mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                    <div className='flex flex-col justify-center items-center py-8 text-primary shadow-md shadow-[rgb(28,28,28)] rounded-xl hover:scale-105 duration-500'>
                        <TfiHtml5 size={80} />
                        <p className='pt-6 tracking-widest text-xl'>HTML5</p>
                    </div>
                    <div className='flex flex-col justify-center items-center py-8 text-primary shadow-md shadow-[rgb(28,28,28)] rounded-xl hover:scale-105 duration-500'>
                        <TfiCss3 size={80} />
                        <p className='pt-6 tracking-widest text-xl'>CSS3</p>
                    </div>
                    <div className='flex flex-col justify-center items-center py-8 text-primary shadow-md shadow-[rgb(28,28,28)] rounded-xl hover:scale-105 duration-500'>
                        <SiTailwindcss size={80} />
                        <p className='pt-6 tracking-widest text-xl'>TAILWINDCSS</p>
                    </div>
                    <div className='flex flex-col justify-center items-center py-8 text-primary shadow-md shadow-[rgb(28,28,28)] rounded-xl hover:scale-105 duration-500'>
                        <SiJavascript size={80} />
                        <p className='pt-6 tracking-widest text-xl'>Javascript</p>
                    </div>
                    <div className='flex flex-col justify-center items-center py-8 text-primary shadow-md shadow-[rgb(28,28,28)] rounded-xl hover:scale-105 duration-500'>
                        <FaReact size={80} />
                        <p className='pt-6 tracking-widest text-xl'>REACT</p>
                    </div>
                    <div className='flex flex-col justify-center items-center py-8 text-primary shadow-md shadow-[rgb(28,28,28)] rounded-xl hover:scale-105 duration-500'>
                        <FaNodeJs size={80} />
                        <p className='pt-6 tracking-widest text-xl'>NODEJS</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills