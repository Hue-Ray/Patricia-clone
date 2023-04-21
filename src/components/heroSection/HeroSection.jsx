import React from 'react'
import Header from '../header/Header'

function HeroSection() {
  return (
    <div className='bg-[url(./assets/hero-img.jpg)] 
    bg-cover h-[70vh] w-[100hw]'>
        <Header />
        <section className='text-center p-4 mt-5'>
            <h1 className='text-white text-2xl font font-extrabold'>
                The Only Crypto Solution You'll Ever Need
            </h1>
            <p className='text-white text-[8px] mt-5'>
            Join millions of people globally, 
            to buy and sell cryptocurrencies the
            secure and seamless way.
            </p>
        <div className='mt-[20%]'> 
              <button className='btn bg-white text-stone-500 mx-2 p-2 w-[120px]'>
                <div className=''>
                <p className='text-[8px]'>GET IT ON</p>
                <span className='text-xs'>Google Play</span>
                </div>
              </button>
              <button className='btn bg-white text-stone-500 p-2 w-[120px]'>
              <div className=''>
                <p className='text-[8px]'>Download on the</p>
                <span className='text-xs'>App Store</span>
                </div>
              </button>
        </div>
        </section>
    </div>
  )
}

export default HeroSection