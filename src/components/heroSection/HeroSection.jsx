import React from 'react'
import Header from '../header/Header'

function HeroSection() {
  return (
    <div className='bg-[url(./assets/hero-img.jpg)] 
    bg-cover h-[70vh] w-[100hw]'>
        <Header />
        <section className='text-center p-4 flex-col'>
            <div>
              <h1 className='text-white text-3xl font font-extrabold mb-5'>
                The Only Crypto Solution You'll Ever Need
              </h1>
            </div>
           <div>
             <p className='text-white text-[10px] mb-5'>
              Join millions of people globally, 
              to buy and sell cryptocurrencies the
              secure and seamless way.
              </p>
           </div>
           <div className=''> 
              <button className='btn bg-white text-stone-500 mx-2 p-2 w-[120px]'>
                <div className=''>
                  <p className='text-[8px]'>
                    GET IT ON
                  </p>
                  <p className='text-xs'>
                    Google Play
                  </p>
                </div>
              </button>
              <button className='btn bg-white text-stone-500 p-2 w-[120px]'>
                <div className=''>
                  <p className='text-[8px]'>
                    Download on the
                  </p>
                  <p className='text-xs'>
                    App Store
                  </p>
                </div>
              </button>
            </div>
        </section>
    </div>
  )
}

export default HeroSection