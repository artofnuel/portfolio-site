import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen text-gray'>
            {/* container */}
            <div className="flex flex-col justify-center items-center w-full h-full">
                {/* grid */}
                <div className='max-w-6xl w-full px-4 grid grid-cols-2'>
                    {/* Left Grid */}
                    <div className='sm:text-right pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-primary'>About!</p>
                    </div>
                    {/* Right Grid */}
                    <div></div>
                </div>
                {/* Next line Grid */}
                <div className='max-w-7xl w-full px-4 grid sm:grid-cols-2 gap-4'>
                    {/* Left Grid */}
                    <div className="sm:text-right text-3xl font-bold md:pl-8">
                        <p>Hilo, I'm Emmanuel, sometimes ArtofNuel and very pleased to meet you.</p>
                    </div>
                    {/* Right Grid */}
                    <div>
                        <p>
                            I am a passionate front-end developer based in Akwa Ibom, Nigeria.
                            I can develop responsive, user-friendly web experiences.I always
                            strive to learn about the newest technologies and frameworks.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About