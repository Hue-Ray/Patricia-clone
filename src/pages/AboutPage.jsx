import React from 'react';
import TeamImg from '../assets/patricia-team.webp'
import MediaImg from '../assets/about-note-media.png';
import Ship from '../assets/journey-ship.png';
import COO from '../assets/Chris_Izu_Okafor..webp';
import CEO from '../assets/Founder.webp';
import Product from '../assets/Department_Icons_Product_-.svg';
import HR from '../assets/Department_Icons_HR.svg'; 
import Marketing from '../assets/Department_Icons_Marketing.svg'; 
import Engineering from '../assets/Department_Icons_Engineering.svg'; 
import CE from '../assets/Department_Icons_Customer_Experience.svg'; 
import Admin from '../assets/Department_Icons_Admin.svg'; 
import Sales from '../assets/Department_Icons_Sales_-.svg'; 
import Finance from '../assets/Department_Icons_Finance_-.svg'; 
import QA from '../assets/Department_Icons_Quality_Assurance-.svg'; 
import SP from '../assets/Department_Icons_Strategy_-.svg'; 
import Compliance from '../assets/Department_Icons_Compliance.svg'; 
import Payment from '../assets/Department_Icons_Payment_-.svg'; 
import { Link } from 'react-router-dom';


function AboutPage() {
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
    <div className="main-about-page">
      <div className='bg-[url(./assets/about-background.jpg)] relative z-[1] h-[70vh] w-[100%]'>
        
      <header className=''>
           <div className='flex justify-between p-4 text-black'>
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
                  <Link to= './about'>About Us</Link>
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

        <p className=' text-center font-bold text-4xl m-auto text-neutral-800 pb-6'>Meet the Magicians</p>
        <div className='flex justify-center relative -z-[2] mb-[70px]'>
          <img src={TeamImg} alt='patricia team' className='w-[90%] border-8 rounded-xl border-blue-200'></img>
        </div>
        <div className='Description bg-teal-800 h-52 w-[100%] text-white p-6 absolute -z-[2] top-[260px]'>
          <h3 className='w-[50%] font-black text-3xl'>Who are Patricians?</h3>
          <p className='text-[10px] pt-3'>We're a bunch of misfits who believe that crypto can be simplified into its easiest form. Together, we have created a really interesting place to work. From our lollipop moments to our ambiance and work ethics that encourage growth, Patricia has the best company culture style in Africa.</p>
        </div>
      </div>
      <div className='p-12'>
        <img src={MediaImg} alt='about media' className='mt-[180px]'></img>
      </div>
      <div className='mt-10 text-center'>
        <h2 className='font-extrabold text-neutral-800 text-3xl mb-3'>Our History</h2>
        <p className='font-medium text-[12px]'>Take a Walk With Us Down Memory Lane.</p>
      </div>
      <div className='flex justify-center'>
        <div className='bg-neutral-200 mt-5 w-72 h-12 text-[13px] p-1 flex justify-between rounded-lg font-medium'>
          <p className='w-40 rounded-lg p-2  bg-white text-emerald-800 text-center'>What we have done</p>
          <p className='text-center p-2 text-slate-400'>Where we are</p>
      </div>
      </div>
      <p className='font-medium text-xs p-10 mb-10'>We don't mean to brag, but we only take giant strides here. Led by our multi-award winning CEO & Founder, we've moved from: 2 to 350+ employees, 1 to 8+ locations, and 5k to 30k+ daily transactions. We launched Africa's first and only Bitcoin Debit card, bagged 5 different awards and was named Fourth Canvas' African Challenger Brands Top 20, all in four years.</p>
      <div className='bg-pink-100'>
        <ul className='flex justify-evenly'>
          <ul className='text-center '>
            <li className='font-black text-emerald-900 text-[20px] mb-[10px]'>850K</li>
            <li className='text-[9px] font-medium tracking-tighter'>Registered User Accounts</li>
          </ul>
          <ul className='text-center'>
            <li className='font-black text-emerald-900 text-[20px] mb-[10px]'>10K</li>
            <li className='text-[9px] font-medium tracking-tighter'>Daily active users</li>
          </ul>
          <ul className='text-center'>
            <li className='font-black text-emerald-900 text-[20px] mb-[10px]'>30K</li>
            <li className='text-[9px] font-medium tracking-tighter'>Daily Transactions</li>
          </ul>
          <ul className='text-center'>
            <li className='font-black text-emerald-900 text-[20px] mb-[10px]'>10+</li>
            <li className='text-[9px] font-medium tracking-tighter'>Countries serviced</li>
          </ul>
        </ul>
      </div>
      <div className='mt-10 flex justify-center'>
        <img src={Ship} alt='journey-ship'></img>
      </div>
      <div className='flex justify-center'>
        <p className='font-extrabold text-neutral-800 text-3xl w-[75%] text-center p-2'>Our Journey So Far</p>
      </div>
      <div className='flex justify-center'>
        <p className='text-xs w-96 text-center p-2 font-medium'>Highlighting Our Milestones And Major Accomplishments</p>
      </div>
      <div className='flex flex-col m-4 justify-center'>
        <div className='rounded-lg p-3 mb-12 shadow-[0_3px_0_0] shadow-neutral-300'>
          <p className='text-sm font-bold text-neutral-800'>Patricia was born</p>
          <p className='text-[11px] text-neutral-800 font-medium'>Patricia was founded on August 16th, 2017, and started its first transactions on Whatsapp</p>
        </div>
        <div className='rounded-lg p-3 mb-12 shadow-[0_3px_0_0] shadow-neutral-300'>
          <p className='text-sm font-bold text-neutral-800'>First website launch</p>
          <p className='text-[11px] text-neutral-800 font-medium'>Patricia launched her first website, November 20th, 2018.</p>
        </div>
        <div className='rounded-lg p-3 mb-12 shadow-[0_3px_0_0] shadow-neutral-300'>
          <p className='text-sm font-bold text-neutral-800'>First 1000 daily transactions</p>
          <p className='text-[11px] text-neutral-800 font-medium'>Hit her first 1,000 daily transactions on May 2nd, 2019</p>
        </div>
        <div className='rounded-lg p-3 mb-12 shadow-[0_3px_0_0] shadow-neutral-300'>
          <p className='text-sm font-bold text-neutral-800'>First App Launch</p>
          <p className='text-[11px] text-neutral-800 font-medium'>Patricia launched her first App, March 1st, 2020. Giving her users an easier and accessible platform</p>
        </div>
        <div className='rounded-lg p-3 mb-12 shadow-[0_3px_0_0] shadow-neutral-300'>
          <p className='text-sm font-bold text-neutral-800'>African Challenger Brands Top 20</p>
          <p className='text-[11px] text-neutral-800 font-medium'>One of the top 20 brands shaking up existing business categories in Africa.</p>
        </div>
      </div>
      <div className='bg-teal-800 p-6 text-xs leading-loose'>
        <p className='text-white text-[50px] opacity-25'>"</p>
        <p className='text-white'>"There is a lot of chatter around Crypto but not enough people are adopting it as fast as it should be why? The idea of Crypto is still complex, it's almost as if it is reserved for a select few. This is where Patricia finds a purpose, our purpose is to make Crypto easy for mankind. Harnessing and pushing the intrinsic power of Blockchain Technology to the moon. Creating a new and sustainable path for the present and future generations".</p>
        <div className='bg-teal-100 rounded-xl mt-12 p-5 w-[220px] h-[80px] text-[12px]'>
          <p className='text-emerald-900 ml-[20px] font-medium'>Hanu Fejiro Agbodje</p>
          <p className='font-extrabold ml-[20px]'>CEO, Patricia</p>
        </div>
      </div>
      <div className='mt-[20px]'>
        <p className='mb-[10px] text-center font-extrabold text-[40px] p-2 text-neutral-800'>Meet Our Top Cape Bearers</p>
        <div className='flex justify-center'>
          <div className='inline-flex p-3'>
            <figure className='w-[45%] m-2 text-center'>
              <img src={CEO} alt='Founder' className='rounded-[20px]'></img>
              <figcaption className='text-neutral-800 text-sm font-extrabold mt-[10px]'>Fejiro Hanu Agbodje</figcaption>
              <figcaption className='text-[11px] text-neutral-500'>Founder/CEO</figcaption>
            </figure>
            <figure className='w-[45%] m-2 text-center'>
              <img src={COO} alt='Chief Operating Officer' className='rounded-[20px]'></img>
              <figcaption className='text-sm font-extrabold mt-[10px] text-neutral-800'>Chris Izu Okafor</figcaption>
              <figcaption className='text-[11px] text-neutral-500'>Chief Operating Officer</figcaption>
            </figure>
          </div>
        </div>
      </div>
        <p className='text-center font-extrabold text-[30px] mt-[15px] mb-[10px] text-neutral-800'>Our Departments</p>
      <div className='m-5 p-4'>
        <div className='rounded-[30px] p-6 mb-12 shadow-lg shadow-neutral-300'>
          <img src={Product} alt='Product Department' className='w-[40px] mb-[20px]'></img>
          <p className='text-[20px] font-bold text-neutral-700 mb-[10px]'>Product</p>
          <p className='text-xs leading-relaxed text-neutral-600 font-medium'>The Product Managers, Designers and Data Analysis are a team of awesome minds who constantly build Patricia into the brand that is made for you.</p>
        </div>
        <div className='rounded-[30px] p-6 mb-12 shadow-lg shadow-neutral-300'>
          <img src={HR} alt='Human Resources' className='w-[40px] mb-[20px]'></img>
          <p className='text-[20px] font-bold text-neutral-700 mb-[10px]'>Human Resources</p>
          <p className='text-xs leading-relaxed font-medium text-neutral-600'>It's up to us to make people feel at home. Whether working in the office, remotely, or their very own bat cave. We work to attract smart, passionate, humble people and continually improve the employee experience at Patricia.</p>
        </div>
        <div className='rounded-[30px] p-6 mb-12 shadow-lg shadow-neutral-300'>
          <img src={Marketing} alt='Marketing' className='w-[40px] mb-[20px]'></img>
          <p className='text-[20px] font-bold text-neutral-700 mb-[10px]'>Marketing</p>
          <p className='text-xs leading-relaxed text-neutral-600 font-medium'>With a top-notch strategy of market trends, customer needs, the competitive landscape and creativity, the marketing department transforms Patricia into a lifestyle meant for everyone.</p>
        </div>
        <div className='rounded-[30px] p-6 mb-12 shadow-lg shadow-neutral-300'>
          <img src={Engineering} alt='Engineering' className='w-[40px] mb-[20px]'></img>
          <p className='text-[20px] font-bold text-neutral-700 mb-[10px]'>Engineering</p>
          <p className='text-xs leading-relaxed text-neutral-600 font-medium'>We build the technological backbone of the business and empower other teams to thrive. From data engineering to machine learning, we bring the tech skills that turn Patricia's "out of the box" ideas into reality.</p>
        </div>
        <div className='rounded-[30px] p-6 mb-12 shadow-lg shadow-neutral-300'>
          <img src={CE} alt='Customer Experience' className='w-[40px] mb-[20px]'></img>
          <p className='text-[20px] font-bold text-neutral-700 mb-[10px]'>Customer Experience</p>
          <p className='text-xs leading-relaxed text-neutral-600 font-medium'>We have just one rule, when our customers succeed, so do we, it's as simple as that. Patricia's customers never have to bat an eye when it comes to their needs as they are always met.</p>
        </div>
        <div className='rounded-[30px] p-6 mb-12 shadow-lg shadow-neutral-300'>
          <img src={Admin} alt='Administration' className='w-[40px] mb-[20px]'></img>
          <p className='text-[20px] font-bold text-neutral-700 mb-[10px]'>Administration</p>
          <p className='text-xs leading-relaxed text-neutral-600 font-medium'>A group of awesome people in charge of making the dream that is the Patricia's workspace come to life, whether it be swapping a desk for he treadmill or building a new meeting room, we make it happen.</p>
        </div>
        <div className='rounded-[30px] p-6 mb-12 shadow-lg shadow-neutral-300'>
          <img src={Sales} alt='Sales' className='w-[40px] mb-[20px]'></img>
          <p className='text-[20px] font-bold text-neutral-700 mb-[10px]'>Sales</p>
          <p className='text-xs leading-relaxed text-neutral-600 font-medium'>A team of astounding people whose expertise in customer relationship management is top notch. We manage and track daily customer sales transactions and trade performance.</p>
        </div>
        <div className='rounded-[30px] p-6 mb-12 shadow-lg shadow-neutral-300'>
          <img src={Finance} alt='Finance' className='w-[40px] mb-[20px]'></img>
          <p className='text-[20px] font-bold text-neutral-700 mb-[10px]'>Finance</p>
          <p className='text-xs leading-relaxed text-neutral-600 font-medium'>We run the numbers like a mathematically minded Benjamin Banneker, we take Patricia's numbers through financial planning, forecasting, analysis and reporting.</p>
        </div>
        <div className='rounded-[30px] p-6 mb-12 shadow-lg shadow-neutral-300'>
          <img src={QA} alt='Quality Assurance' className='w-[40px] mb-[20px]'></img>
          <p className='text-[20px] font-bold text-neutral-700 mb-[10px]'>Quality Assurance</p>
          <p className='text-xs leading-relaxed text-neutral-600 font-medium'>Anytime you get that 'wow' moment while using a Patricia product, know that there is a combination of people who love to ensure that our services meet and surpass the expectations of our customers. This is the Quality Assurance team.</p>
        </div>
        <div className='rounded-[30px] p-6 mb-12 shadow-lg shadow-neutral-300'>
          <img src={SP} alt='SCRUM and Productivity' className='w-[40px] mb-[20px]'></img>
          <p className='text-[20px] font-bold text-neutral-700 mb-[10px]'>SCRUM and Productivity</p>
          <p className='text-xs leading-relaxed text-neutral-600 font-medium'>We are your go-to persons for applying scrum to produce high-quality, timely work.</p>
        </div>
        <div className='rounded-[30px] p-6 mb-12 shadow-lg shadow-neutral-300'>
          <img src={Compliance} alt='Compliance' className='w-[40px] mb-[20px]'></img>
          <p className='text-[20px] font-bold text-neutral-700 mb-[10px]'>Compliance</p>
          <p className='text-xs leading-relaxed text-neutral-600 font-medium'>A team of great individuals whose eagle eyes are constantly focused on the operations of the company and are always ready to spring to action to either correct anomalies or defend the company where necessary.</p>
        </div>
        <div className='rounded-[30px] p-6 mb-12 shadow-lg shadow-neutral-300'>
          <img src={Payment} alt='Payment' className='w-[40px] mb-[20px]'></img>
          <p className='text-[20px] font-bold text-neutral-700 mb-[10px]'>Payment</p>
          <p className='text-xs leading-relaxed text-neutral-600 font-medium'>We are the face of financial transactions at Patricia, leveraging on the use of cutting-edge technologies to ensure swift payments, settlement and reconciliation.</p>
        </div>
      </div>
      <div className='text-center p-2 mb-[100px]'>
        <p className='text-[40px] font-extrabold text-neutral-800'>Patrician's Thoughts</p>
        <p className='text-xs text-neutral-500 mt-[10px] font-medium'>Short stories of what it is to be a part of the Patricia team.</p>
      </div>
      <div className='bg-orange-100 text-center m-3 p-6 rounded-xl'>
        <p className='text-[35px] font-extrabold text-neutral-800'>Want To Be A Magician?</p>
        <p className='text-neutral-400 text-[11px] mt-[10px] mb-[15px] leading-loose'>Is your superpower creaing amazing ideas and bringing them to reality? Patricia is the perfect home for you. Let's make magic together.</p>
        <button className='btn bg-yellow-300 p-2 px-4 text-xs mt-2'>Join our team</button>
      </div>
      <div className='relative bg-slate-200 w-[90%] m-auto  h-[35px] -mt-10 -z-10 rounded-lg'></div>
      <div className='relative bg-slate-300 w-[80%] m-auto  h-[49px] -mt-10 -z-20 rounded-lg'></div>
    </div>
  )
}

export default AboutPage;