import React from 'react';

function Carousel() {
  return (
    <div className="container mx-auto mt-[200px]">
      <div className="carousel relative overflow-hidden shadow-md">
        <div className="carousel-inner relative w-full">
          <input className='btn bg-neutral-600 rounded-full w-[40px]' type="radio" />
          <div className="carousel-item absolute opacity-0" style={{ height: '50vh' }}>
            <img src="https://via.placeholder.com/800x400?text=Slide+1" className="object-cover h-full w-full" alt="Slide 1" />
          </div>
          <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" />
          <div className="carousel-item absolute opacity-0" style={{ height: '50vh' }}>
            <img src="https://via.placeholder.com/800x400?text=Slide+2" className="object-cover h-full w-full" alt="Slide 2" />
          </div>
          <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="" />
          <div className="carousel-item absolute opacity-0" style={{ height: '50vh' }}>
            <img src="https://via.placeholder.com/800x400?text=Slide+3" className="object-cover h-full w-full" alt="Slide 3" />
          </div>
          <label htmlFor="carousel-3" className="carousel-control absolute top-0 left-0 w-12 h-12 rounded-full bg-white opacity-50 mt-2 ml-2">
            <svg className="carousel-arrow w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5.707,10l5.146-5.146c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-6.001,6c-0.094,0.094-0.166,0.203-0.218,0.321 c-0.104,0.234-0.146,0.49-0.119,0.745c-0.017-0.001-0.033-0.001-0.049,0c-0.031,0-0.062,0.004-0.092,0.007 C3.568,10.2,3.5,10.314,3.5,10.438c0,0.064,0.012,0.125,0.021,0.188c0.015,0.087,0.042,0.171,0.081,0.25 c0.018,0.042,0.04,0.081,0.062,0.12c0.031,0.058,0.069,0.113,0.114,0.164c0.036,0.041,0.068,0.08,0.109,0.116 C3.531,11.686,3.531,11.814,3.568,11."></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Carousel;