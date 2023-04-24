import React from 'react'
import HeroSection from '../components/HeroSection'
import Rocket from '../assets/rocket.png'
import TeamImg from '../assets/patricia-team.webp'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <HeroSection />
      <section className='p-4 md:p-[6rem]'>
        <h1 className='text-3xl font-extrabold text-green-800 mb-4
        md:text-5xl md:w-[15ch] md:mb-10'>
          Patricia Universe<span className='text-black'>, Crypto is Oxygen To Us</span>
        </h1>
        <h6 className='text-[10px] text text-slate-400 w-[35ch] line-h pb-2 md:text-sm md:w-[40ch] md:pb-10'>
           We like to think of ourselves as superheroes here at Patricia. We aren’t in the business of doing things just because they are routine. We are in the business of creating solutions that are simply mind-blowing.
        </h6>
        <img className='absolute top-[95%] md:top-[720px] left-[60%] md:left-[60%] rotate-45 w-[70px] md:w-[150px] z -z-30' src={Rocket} alt=''></img>
        <div className='bg-slate-100  rounded-xl pb-5 md:w-[80%]'>
          <img className='rounded-xl' src={TeamImg} alt=''></img>
          <div className='flex'>
          <Link to="./team">
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
      </section>
    </div>
  )
}

export default HomePage