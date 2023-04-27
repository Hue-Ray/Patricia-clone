import React from 'react';
import TeamImg from '../assets/patricia-team.webp'
import MediaImg from '../assets/about-note-media.png';
import Ship from '../assets/journey-ship.png';
import Header from './Header';


function Team() {
  return (
    <div className="main-about-page">
      <div className='bg-[url(./assets/about-background.jpg)] relative z-[1] h-[70vh] w-[100%]'>
        <Header className = 'text-black' />
        <p className='text-center font-black text-4xl  pb-6'>Meet the Magicians</p>
        <div className='Team h-32 flex justify-center relative -z-[1]'>
          <img src={TeamImg} alt='patricia team' className='w-72 border-8 rounded-xl border-blue-200'></img>
        </div>
        <div className='Description bg-teal-800 h-52 w-[100%] text-white p-4 relative -z-[2] top-[-45px]'>
          <h3 className='w-[50%] font-black text-3xl'>Who are Patricians?</h3>
          <p className='text-[10px] pt-3'>We're a bunch of misfits who believe that crypto can be simplified into its easiest form. Together, we have created a really interesting place to work. From our lollipop moments to our ambiance and work ethics that encourage growth, Patricia has the best company culture style in Africa.</p>
        </div>
      </div>
      <div>
        <img src={MediaImg} alt='about media' className='mt-32 p-5'></img>
      </div>
      <div className='mt-20 text-center'>
        <h2 className='font-black text-3xl mb-3'>Our History</h2>
        <p className='text-[12px]'>Take a Walk With Us Down Memory Lane.</p>
      </div>
      <div className='flex justify-center'>
        <div className='bg-cyan-100 mt-5 w-72 h-12 text-[13px] p-1 flex justify-between rounded-lg'>
          <p className='w-40 rounded-lg p-2  bg-white text-center'>What we have done</p>
          <p className='text-center p-2'>Where we are</p>
      </div>
      </div>
      <p className='text-xs p-10 mb-28'>We don't mean to brag, but we only take giant strides here. Led by our multi-award winning CEO & Founder, we've moved from: 2 to 350+ employees, 1 to 8+ locations, and 5k to 30k+ daily transactions. We launched Africa's first and only Bitcoin Debit card, bagged 5 different awards and was named Fourth Canvas' African Challenger Brands Top 20, all in four years.</p>
      <div className='p-5 bg-pink-100'>
        <ul className='flex justify-between font-black text-emerald-900'>
          <li>850K</li>
          <li>10K</li>
          <li>30K</li>
          <li>30+</li>
        </ul>
        <ul className='flex justify-between text-[6px]'>
          <li>Registered</li>
          <li>User Accounts</li>
          <li>Daily active users</li>
          <li>Daily Transactions</li>
          <li>Countries serviced</li>
        </ul>
      </div>
      <div className='mt-10 flex justify-center'>
        <img src={Ship} alt='journey-ship'></img>
      </div>
      <div className='flex justify-center'>
        <p className='font-black text-3xl w-52 text-center p-2'>Our Journey So Far</p>
      </div>
      <div className='flex justify-center'>
        <p className='text-xs w-72 text-center p-2'>Highlighting Our Milestones And Major Accomplishments</p>
      </div>
    </div>
  )
}

export default Team;