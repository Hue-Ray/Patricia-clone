import React from 'react'
import HeroSection from '../components/HeroSection'
import Rocket from '../assets/rocket.png'

function HomePage() {
  return (
    <div>
      <HeroSection />
      <section className='p-4'>
        <h1 className='text-3xl font-extrabold text-green-800 mb-4'>
          Patricia Universe<span className='text-black'>, Crypto is Oxygen To Us</span>
        </h1>
        <h6 className='text-[10px] text text-slate-400 w-[35ch] line-h'>
           We like to think of ourselves as superheroes here at Patricia. We aren’t in the business of doing things just because they are routine. We are in the business of creating solutions that are simply mind-blowing.
        </h6>
        <img className='absolute top-[95%] left-[60%] rotate-45 w-[70px] z -z-30' src={Rocket} alt=''></img>
      </section>
    </div>
  )
}

export default HomePage