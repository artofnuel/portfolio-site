import React from 'react'
import nuel from '../assets/nuel.jpg'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Hero = () => {
    return (
        <div name='home' className='mt-18'>
            <div className='max-w-6xl h-screen flex flex-col md:flex-row justify-center items-center mx-auto text-gray'>
                {/* Container */}
                <div className="w-full md:w-1/2 p-4 lg:p-0  mx-auto flex flex-col justify-center items-start h-full">
                    <p className='text-xl'>Hello there! My name is</p>
                    <h1 className='text-5xl md:text-7xl text-primary ml-[-4px]'>Emmanuel Inua</h1>
                    <h2 className='text-xl'>I'm a Frontend Developer.<br /> I create responsive websites with amazing technologies.</h2>
                    <Link className='flex justify-center items-center mt-4 w-52 border-2 border-primary text-primary hover:bg-primary hover:text-white' to="work" smooth={true} duration={500}>
                        View my work
                        <BsArrowRight className='ml-3' size={30} />
                    </Link>
                </div>
                <div className='w-1/2 flex justify-center items-center'>
                    <img className='w-[400px] rounded-3xl' src={nuel} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero