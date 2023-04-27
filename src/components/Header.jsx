import React from 'react';
import { Link } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';

function Header() {
const openNavMenu = () => {  
  const mobileNav = document.querySelector(".nav-menu")
  if (mobileNav.style.display = "none"){
    mobileNav.style.display = "block";
  } else {
    mobileNav.style.display = "none";
  }
};

const closeNavMenu = () => {
  const mobileNav = document.querySelector(".nav-menu")
  if (mobileNav.style.display = "block"){
    mobileNav.style.display = "none";
  }
}
  return (
    <div>
        <header className=''>
           <div className='flex justify-between p-4 text-white'>
          <div>
            <Link to='/'>
              <p className='logo font-extrabold text-lg'>
                PATRICIA
              </p>
            </Link>
           </div>
            <div className='cursor-pointer' onClick={openNavMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            </div>
          </div>
            <nav className='nav-menu absolute  top-0 bg-white w-[100%] h-auto p-4 close-nav-menu'>
                <div className='flex justify-between'>
                <Link to='/'>
                 <p className='logo font-extrabold text-lg'>
                   PATRICIA
                 </p>
                </Link>
                <div className='' onClick={closeNavMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
                </div>
                </div>
                <ul className='nav-menu text-[8px] mt-2'>
                  <li className='nav-menu-link'>
                  <Link to= './about'>About </Link>
                  </li>
                   <a href="#"><li className='nav-menu-link'>product</li></a>
                   <a href="#"><li className='nav-menu-link'>Learn</li></a>
                   <a href="#"><li className='nav-menu-link'>Resources</li></a>
                   <a href="#"><li className='nav-menu-link'>Careers</li></a>
                </ul>
               <div className='mt-[5%] text-[8px]'>
               <div className='btn border mb-2 w-fit p-2 text-green-600'><a href="#"> <button>Sign In</button></a></div>
               <div className='btn bg-yellow-500 w-fit p-2'><a href="#"> <button>Create Account</button></a></div>
               </div>
            </nav>
        </header>
    </div>
  )
}

export default Header