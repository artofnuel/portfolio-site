import React from 'react'

import WorkCards from './WorkCards'

const Work = () => {
    return (
        <div name='work' className='w-full py-20 flex justify-center items-center text-primary'>
            {/* container */}
            <div className='max-w-6xl w-full mx-auto p-4 flex flex-col justify-center'>
                <div className='pb-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-primary'>Work!</p>
                    <p className='text-xl py-3'>Some of my recent work</p>
                </div>
                {/* Container */}
                <div className='w-full'>
                    <WorkCards />
                </div>
            </div>
        </div>
    )
}

export default Work