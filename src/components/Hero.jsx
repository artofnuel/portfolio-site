import React from 'react'
import nuel from '../assets/nuel.jpg'
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Hero = () => {
    return (
        <div name='home' className='relative max-w-6xl h-screen flex flex-col w-full justify-center items-center mx-auto'>
            <div className='grid sm:grid-cols-2 justify-center items-center w-full mx-auto'>
                {/* Container */}
                <div className="w-full p-4 lg:p-0 text-primary mx-auto flex flex-col justify-center items-start h-full">
                    <p className='text-xl flex items-center'><span className='w-12 h-1 bg-primary inline-block mr-2'></span>Hello there! My name is</p>
                    <h1 className='text-5xl md:text-7xl text-primary ml-[-4px]'>Emmanuel Inua</h1>
                    <h2 className='text-xl'>I'm a Frontend Developer.<br /> I create responsive websites with amazing technologies.</h2>
                    <Link className='flex justify-center items-center mt-4 w-52 h-[45px] border-2 border-primary text-primary hover:bg-primary hover:text-white duration-500' to="work" smooth={true} duration={500}>
                        View my work
                        <BsArrowRight className='ml-3' size={30} />
                    </Link>
                </div>
                <div className='w-full flex justify-center items-center p-4 '>
                    <img className='w-[400px] rounded border-[10px] border-primary' src={nuel} alt="" />
                </div>
            </div>
            <div className='lg:hidden p-4 absolute bottom-12 flex justify-start items-center space-x-5 w-full pt-5'>
                <span className='w-12 h-1 bg-primary mr-2 hidden lg:inline-block'></span>
                <div className='flex justify-center items-center space-x-5 w-full'>
                    <a className='hover:text-primary md:text-gray' target="_blank" href="https://www.twitter.com/artofnuel">
                        Twitter
                        <FiTwitter size={30} />
                    </a>
                    <a className='hover:text-primary md:text-gray' target="_blank" href="https://www.linkedin.com/in/emmanuelinua">
                        Linkedin
                        <FiLinkedin size={30} />
                    </a>
                    <a className='hover:text-primary md:text-gray' target="_blank" href="https://www.github.com/artofnuel">
                        Github
                        <FiGithub size={30} />
                    </a>
                    <a className='hover:text-primary md:text-gray' target="_blank" href="mailto:artofnuel@gmail.com">
                        Email
                        <MdOutlineMarkEmailUnread size={30} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero