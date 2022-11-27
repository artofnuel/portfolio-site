import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { VscCloseAll } from 'react-icons/vsc'
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div className=''>
            {/* menu */}
            <div className='fixed z-30 top-0 w-full h-[50px]'>
                <div className="backdrop-blur-[2px] bg-secondary/75 flex justify-between items-center w-11/12 md:max-w-7xl mx-auto py-2">
                    <h1 className='text-3xl'>Emmanuel Inua</h1>
                    <ul className='hidden lg:flex space-x-6 text-xl'>
                        <li className='cursor-pointer hover:text-primary' href="/">
                            <Link to="home" smooth={true} duration={500}>
                                Home
                            </Link>
                        </li>
                        <li className='cursor-pointer hover:text-primary' href="/">
                            <Link to="about" smooth={true} duration={500}>
                                About
                            </Link>
                        </li>
                        <li className='cursor-pointer hover:text-primary' href="/">
                            <Link to="skills" smooth={true} duration={500}>
                                Skills
                            </Link>
                        </li>
                        <li className='cursor-pointer hover:text-primary' href="/">
                            <Link to="work" smooth={true} duration={500}>
                                Work
                            </Link>
                        </li>
                        <li className='cursor-pointer hover:text-primary' href="/">
                            <Link to="contact" smooth={true} duration={500}>
                                Contact
                            </Link>
                        </li>
                        <li className='cursor-pointer hover:text-primary' href="/">
                            <a target="_blank" href="https://artofnuel.mypixieset.com/">ArtofNuel?</a>
                        </li>
                    </ul>
                    {/* Hamburger */}
                    <div onClick={handleNav} className='lg:hidden z-10'>
                        {!nav ? <HiMenuAlt3 size={30} /> : <VscCloseAll size={30} />}
                    </div>
                </div>

                {/* mobile menu */}
                <ul className={!nav ? 'hidden' : 'lg:hidden absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center mx-auto space-y-10 text-3xl bg-background'}>
                    <li className='cursor-pointer hover:text-primary' href="/">
                        <Link onClick={handleNav} to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className='cursor-pointer hover:text-primary' href="/">
                        <Link onClick={handleNav} to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className='cursor-pointer hover:text-primary' href="/">
                        <Link onClick={handleNav} to="skills" smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li className='cursor-pointer hover:text-primary' href="/">
                        <Link onClick={handleNav} to="work" smooth={true} duration={500}>
                            Work
                        </Link>
                    </li>
                    <li className='cursor-pointer hover:text-primary' href="/">
                        <Link onClick={handleNav} to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                    <li className='cursor-pointer hover:text-primary' href="/">
                        <a target="_blank" href="https://artofnuel.mypixieset.com/">ArtofNuel?</a>
                    </li>
                </ul>
                {/* social icons */}
                <div className='hidden fixed lg:flex flex-col top-[35%] left-0'>
                    <ul className='flex flex-col space-y-2'>
                        <li className='w-[165px] p-1 px-5 flex justify-center items-center ml-[-100px] hover:ml-[-5px] duration-500 border-2 border-primary  rounded-r-full'>
                            <a className='w-full flex justify-between items-center text-primary' target="_blank" href="https://www.twitter.com/artofnuel">
                                Twitter
                                <FiTwitter size={30} />
                            </a>
                        </li>
                        <li className='w-[165px] p-1 px-5 flex justify-center items-center ml-[-100px] hover:ml-[-5px] duration-500 border-2 border-primary  rounded-r-full'>
                            <a className='w-full flex justify-between items-center text-primary' target="_blank" href="https://www.linkedin.com/in/emmanuelinua">
                                Linkedin
                                <FiLinkedin size={30} />
                            </a>
                        </li>
                        <li className='w-[165px] p-1 px-5 flex justify-center items-center ml-[-100px] hover:ml-[-5px] duration-500 border-2 border-primary  rounded-r-full'>
                            <a className='w-full flex justify-between items-center text-primary' target="_blank" href="https://www.github.com/artofnuel">
                                Github
                                <FiGithub size={30} />
                            </a>
                        </li>
                        <li className='w-[165px] p-1 px-5 flex justify-center items-center ml-[-100px] hover:ml-[-5px] duration-500 border-2 border-primary  rounded-r-full'>
                            <a className='w-full flex justify-between items-center text-primary' target="_blank" href="mailto:artofnuel@gmail.com">
                                Email
                                <MdOutlineMarkEmailUnread size={30} />
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Navbar