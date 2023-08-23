import React from 'react'

export const Contact = () => {
    // function required()
    // {
    // var empt = toString( document.forms["form1"]["name"].value);
    // if (empt === " ")
    // {
    // alert("Please input a Value");
    // return false;
    // }
    // else 
    // {
    // alert('Code has accepted : you can try another');
    // return true; 
    // }
    // }

    return (
        <div name='Contact' className='w-full h-full p-4 bg-gradient-to-b from-black to bg-gray-800 text-white '>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className=' text-4xl inline font-bold border-b-4 border-gray-600 text-yellow-300 font-myinfo1'>Contact ;</p>
                    <p className='py-6 text-xl font-about font-bold'>Submit your Request below 👇✉️ : :</p>
                </div>

                <div className=' flex justify-start items-start'>
                    <form name="form1" action="https://getform.io/f/5e272a85-1336-4fa3-8a2a-bb9001bb7063" 
                        method="POST"
                        className='flex flex-col w-full md:w-1/2'>

                        <input type='text' id='name'  name='name' placeholder='Enter your name' required className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-orange-400 duration-1000' />
                        <input type='email' id='email' name='email' placeholder='Enter your email' required className='p-2 my-5 bg-transparent border-2 rounded-md text-white focus:outline-none  focus:border-pink-600 duration-1000' />
                        <textarea name='message' id="msg" rows='10' required className='p-2 bg-transparent border-2 rounded-r-md text-white focus:outline-none  focus:border-green-400 duration-1000' placeholder='Enter your message'></textarea>
                        <button className=' text-white bg-gradient-to-b from-cyan-600 to-blue-500 py-4 px-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300' >Get in touch</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
