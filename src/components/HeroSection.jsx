import React from 'react'
import Header from './Header'
import PlayStore from '../assets/play-store.svg'
import AppStore from '../assets/app-store.svg'
import HeroSideImg from '../assets/hero-side-img.png'

function HeroSection() {
  return (
    <div className='bg-[url(./assets/hero-img.jpg)] 
    bg-cover h-[70vh] md:h-[100vh] w-[100hw]'>
      <img className='hero-side-img absolute top-[30%] left-[70%] rotate rotate-12 w-[25%] h-[75%] md:block' src={HeroSideImg} alt=''></img>
        <Header />
        <section className='text-center p-4 flex-col mt-4'>
            <div>
              <h1 className='text-white space  text-3xl font-extrabold md:text-5xl md:w-[420px] m-auto mb-5'>
                The Only Crypto Solution You'll Ever Need
              </h1>
            </div>
           <div>
             <p className='text-white text-[10px] mb-5 md:text-sm md:w-[420px] m-auto'>
              Join millions of people globally, 
              to buy and sell cryptocurrencies the
              secure and seamless way.
              </p>
           </div>
            <div className='flex justify-center gap-2 '>
              <div>
                <img src={PlayStore} alt=''></img>
              </div>
              <div>
                <img src={AppStore} alt=''></img>
              </div>
            </div>
        </section>
    </div>
  )
}

export default HeroSection;