import React from 'react'
import { data } from './WorkData'

const WorkCards = () => {
    return (
        <div>
            <div className=''>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center w-full">
                    {data.map((item) => (
                        <div className='hover:scale-105 duration-700'>
                            {/* BKG Image */}
                            <div style={{ backgroundImage: `url(${item.image})` }} className='border border-gray group container flex justify-center items-center mx-auto content-div'>
                            </div>
                            {/* tools used */}
                            <div className='flex space-x-3 p-2 border'>
                                <p>{item.tools}</p>
                            </div>
                            {/* title and description */}
                            <div className='flex flex-col p-2 border space-y-2'>
                                <h2 className='text-4xl text-white font-bold'>{item.title}</h2>
                                <p className='text-lg'>{item.description}</p>
                                {/* links */}
                                <div className='flex justify-between items-center space-x-6 font-bold py-4'>
                                    <a className='p-2 px-6 lg:px-10 border border-primary hover:bg-primary text-white duration-300' target="_blank" href={item.live}>
                                        <button>Live</button>
                                    </a>
                                    <a className='p-2 px-6 lg:px-10 border border-primary hover:bg-primary text-white duration-300' target="_blank" href={item.code}>
                                        <button>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WorkCards