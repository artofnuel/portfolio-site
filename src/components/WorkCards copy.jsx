import React from 'react'
import dataImg from '../assets/datafinance.png'
import theFlix from '../assets/theflix.png'
import weather from '../assets/weather.png'

const WorkCards = () => {
    return (
        <div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center w-full'>
                {/* card item */}
                {/* 1st Card */}
                <div className='hover:scale-105 duration-700'>
                    {/* div image */}
                    <div style={{ backgroundImage: `url(${dataImg})` }} className='border border-gray group container flex justify-center items-center mx-auto content-div'>
                    </div>
                    {/* tools used */}
                    <ul className='flex space-x-3 p-2 border'>
                        <li>
                            Reactjs
                        </li>
                        <li>
                            Tailwindcss
                        </li>
                        <li>
                            React-typed
                        </li>
                    </ul>
                    {/* title and description */}
                    <div className='flex flex-col p-2 border space-y-2'>
                        <h2 className='text-4xl text-white font-bold'>Data Finance</h2>
                        <p className='text-lg'>A designed landing page for showcasing
                            data analytics
                        </p>
                        {/* links */}
                        <div className='flex justify-between items-center space-x-6 font-bold py-4'>
                            <a className='p-2 px-6 lg:px-10 border border-primary hover:bg-primary text-white duration-300' target="_blank" href="http://data-finance-zeta.vercel.app/">
                                <button>Live</button>
                            </a>
                            <a className='p-2 px-6 lg:px-10 border border-primary hover:bg-primary text-white duration-300' target="_blank" href="https://github.com/artofnuel/data-finance">
                                <button>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* 2nd Card */}
                <div className='hover:scale-105 duration-700'>
                    {/* div image */}
                    <div style={{ backgroundImage: `url(${theFlix})` }} className='border border-gray group container flex justify-center items-center mx-auto content-div'>
                    </div>
                    {/* tools used */}
                    <ul className='flex space-x-3 p-2 border'>
                        <li>
                            Reactjs
                        </li>
                        <li>
                            Tailwindcss
                        </li>
                        <li>
                            API
                        </li>
                        <li>
                            Firebase
                        </li>
                        <li>
                            Firestore
                        </li>
                    </ul>
                    {/* title and description */}
                    <div className='flex flex-col p-2 border space-y-2'>
                        <h2 className='text-4xl text-white font-bold'>TheFlix</h2>
                        <p className='text-lg'>A Netflix clone showcasing the use of API requests,
                            Google authentication using Firebase and Firestore database.
                        </p>
                        {/* links */}
                        <div className='flex justify-between items-center space-x-6 font-bold py-4'>
                            <a className='p-2 px-6 lg:px-10 border border-primary hover:bg-primary text-white duration-300' target="_blank" href="https://the-flix-react.web.app/">
                                <button>Live</button>
                            </a>
                            <a className='p-2 px-6 lg:px-10 border border-primary hover:bg-primary text-white duration-300' target="_blank" href="https://github.com/artofnuel/the-flix-clone">
                                <button>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* 3rd Card */}
                <div className='hover:scale-105 duration-700'>
                    {/* div image */}
                    <div style={{ backgroundImage: `url(${weather})` }} className='border border-gray group container flex justify-center items-center mx-auto content-div'>
                    </div>
                    {/* tools used */}
                    <ul className='flex space-x-3 p-2 border'>
                        <li>
                            Nextjs
                        </li>
                        <li>
                            Tailwindcss
                        </li>
                        <li>
                            OpenWeather-API
                        </li>
                    </ul>
                    {/* title and description */}
                    <div className='flex flex-col p-2 border space-y-2'>
                        <h2 className='text-4xl text-white font-bold font-bold'>Weather App</h2>
                        <p className='text-lg'>A weather application created using Nextjs.
                            Just search a city or country.
                        </p>
                        {/* links */}
                        <div className='flex justify-between items-center space-x-6 font-bold py-4'>
                            <a className='p-2 px-6 lg:px-10 border border-primary hover:bg-primary text-white duration-300' target="_blank" href="https://nextjs-weatherapp-beta.vercel.app/">
                                <button>Live</button>
                            </a>
                            <a className='p-2 px-6 lg:px-10 border border-primary hover:bg-primary text-white duration-300' target="_blank" href="https://github.com/artofnuel/nextjs-weatherapp">
                                <button>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCards