import React from 'react';
import TeamImg from '../assets/patricia-team.webp'
import Header from './Header';


function Team() {
  return (
    <div className="main-about-page">
      <div className='bg-[url(./assets/about-background.jpg)] h-[70vh] w-[100%]'>
        <Header className = 'text-black' />
        <p className='text-center font-black text-4xl pb-6'>Meet the Magicians</p>
        <div className='Team h-32 flex justify-center relative z-[0]'>
          <img src={TeamImg} alt='patricia team' className='w-72 border-8 rounded-xl border-blue-200'></img>
        </div>
        <div className='Description bg-teal-800 h-52 w-[100%] text-white p-4 relative z-[1] top-[-45px]'>
          <h3 className='w-[50%] font-black text-3xl'>Who are Patricians?</h3>
          <p className='text-[10px] pt-3'>We're a bunch of misfits who believe that crypto can be simplified into its easiest form. Together, we have created a really interesting place to work. From our lollipop moments to our ambiance and work ethics that encourage growth, Patricia has the best company culture style in Africa.</p>
        </div>
      </div>
    </div>
  )
}

export default Team;