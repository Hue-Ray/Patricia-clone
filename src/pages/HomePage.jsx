import React from 'react'
import HeroSection from '../components/HeroSection'
import Rocket from '../assets/rocket.png'
import Logo from '../assets/visaextra-logo.svg';
import TeamImg from '../assets/patricia-team.webp'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='home'>
      <HeroSection />
      <section className='p-4 md:p-[6rem]'>
        <h1 className='text-3xl font-extrabold text-green-800 mb-4
        md:text-5xl md:w-[15ch] md:mb-10'>
          Patricia Universe<span className='text-black'>, Crypto is Oxygen To Us</span>
        </h1>
        <h6 className='text-[10px] text text-slate-400 w-[32ch] line-h pb-2 md:text-sm md:w-[40ch] md:pb-10'>
           We like to think of ourselves as superheroes here at Patricia. We aren’t in the business of doing things just because they are routine. We are in the business of creating solutions that are simply mind-blowing.
        </h6>
        <img className='absolute top-[90%] md:top-[720px] left-[60%] md:left-[60%] rotate-[60deg] w-[50px] md:w-[150px] z -z-30' src={Rocket} alt=''></img>
        <div className='bg-slate-100  rounded-xl pb-5 md:w-[80%]'>
          <img className='rounded-xl' src={TeamImg} alt=''></img>
          <div className='flex'>
                <Link to="./about">
                  <a className='text-xs text-green-800 p-4 '>
                     Meet the Humans of Patricia
                  </a>
                </Link>
              <div>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24   24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </div>
          </div>
          
        </div>
        <div className='relative bg-slate-400 w-[90%] m-auto  h-[50px] -mt-10 -z-10 rounded-lg'></div>
              <div className='relative bg-slate-800 w-[80%] m-auto  h-[50px] -mt-10 -z-20 rounded-lg'></div>
      </section>

      <section className='bg-[#e7e7c1] mt-[4rem] flex-col  justify-center items-center w-screen h-fit p-4'>
      <div className='earth'></div>
        <div>
          <h1 className='heading text-green-800 mt-20'>Crypto Without The Clutter</h1>
          <p className='text-[10px] line-h text-black opacity-60 mt-4'>
          Ever imagined crypto being fun as well as functional? Well, we too have, and we have created Patricia to do just that. Come on board and experience crypto the redefined way.
          </p>
          <button className='btn bg-yellow-300 p-2 px-4 text-[10px] mt-2'>Get started for free</button>
          <div className='mt-4'>
            <img src={Logo}></img>
          </div>
        </div>
      </section>

      <section className='bg-emerald-900 text-white p-4'>
        <p className='heading'>Your Gateway To Crypto</p>
        <h6 className='description text-[10px] mt-4'>
        More than creating a seamless platform for you to perform
        crypto transactions, we are with you every step of the way,
        providing you with tips and tricks to becoming a crypto guru
        </h6>
        <img className='transition-all rotate-45 w-[50px] -mt-3 ml-8' src={Rocket} alt='rocket'></img>
      </section>

      <section className='p-4'>
       <div className='heading mt-4'>
         <p className='text-green-800'>Crypto</p>
        <p>Trading,</p>
        <p>Simplified</p>
       </div>
       <div className='mt-4'>
        <p className='text-[10px]'>Think lifting a feather is e!ortless? Try trading with
            Patricia
        </p>
      </div>
      <div className='box-shadow mt-4'>
        <p className='text-[10px]'>Real time wallet value</p>
      </div>
      <div className='box-shadow'> 
        <p className='text-[10px]'>Seamless Crypto transactions</p>
      </div>
      <div className='box-shadow'>
        <p className='text-[10px]'>Real time Crypto values</p>
      </div>
      <div className='box-shadow'>
        <p className='text-[10px]'>Crypto answers at your fingertips</p>
      </div>
      </section>
    </div>
  )
}

export default HomePage;