import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='pt-10 md:pt-0 w-full max-w-6xl mx-auto h-screen flex justify-center items-center p-4 text-gray'>
            <form method='POST' action="https://getform.io/f/e0ddc90f-1d22-4995-9f62-802395e907e9" className='flex flex-col w-full max-w-6xl'>
                <div className='flex flex-col'>
                    <div className=''>
                        <p className="text-4xl font-bold inline border-b-4 border-primary">Contact!</p>
                        <p className='my-4'>Submit the form below to reach me.</p>
                    </div>
                    <input className='p-2 border-2 border-primary bg-transparent' type="text" placeholder='Name' name='name' />
                    <input className='my-4 p-2 border-2 border-primary bg-transparent' type="email" placeholder='Email' name='email' />
                    <textarea className='bg-transparent border-2 border-primary p-2' name="message" rows="10" placeholder='Message'></textarea>
                    <button className='flex justify-center items-center mt-4 w-52 h-[45px] border-2 border-primary text-primary hover:bg-primary hover:text-white duration-500'>Let's Connect</button>
                </div>
            </form>
        </div>
    )
}

export default Contact