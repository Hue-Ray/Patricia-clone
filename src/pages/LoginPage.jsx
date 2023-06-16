import React from 'react';
import Logo from '../assets/logo_dark.png';
import Bg from '../assets/auth-bg.svg';
import QR from '../assets/patricia-qr-code.png';
import App from '../assets/app-store.svg';
import Play from '../assets/play-store.svg';
import { Link } from 'react-router-dom';
import './LoginPage.css';

function LoginPage () {
  return (
    <div className="login-header w-[100%] h-[100vh] flex-col">
      <div className="login-logo-main">
        <Link to="/">
          <div className="login-logo w-[100%]">
            <div className="login-logo-container w-[100%] flex justify-center mt-[7rem]">
              <img src={Logo} alt="patricia-logo" className="w-[30%]"></img>
            </div>
          </div>
        </Link>
        <div className="image">
          <div className="image-container">
            <img src={Bg} alt="background" className="w-[60%]"></img>
          </div>
          <div className="image-text tracking-tighter text-sky-400">
            <p className="text-[40px]">Built For You</p>
            <p className="font-medium text-[20px]">SIGN UP . GET CARDS . GET PAID</p>
          </div>
        </div>
      </div>
      <div className="login-body">
        <div className="login-body-header text-center">
          <h3 className="text-[#2d9cdb] text-[18px] mt-[2rem] font-medium">Welcome!</h3>
          <p className="mt-[10px] text-[15px] text-gray-500">Let's get to know you</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="relative top-[20px] w-[45%] text-[14px] tracking-tighter">
            <span className="absolute inset-y-0 left-0 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 pl-2 stroke-gray-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </span>
            <input className="pl-8 py-2 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-[100%]" type="text" placeholder="Username"/>
          </div>
          <div className="relative top-[20px] text-[14px] w-[45%]">
            <span className="absolute inset-y-0 left-0 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 pl-2 stroke-gray-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </span>
            <input className="pl-8 py-2 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-[100%]" type="text" placeholder="Password"/>
            <span className="absolute inset-y-0 right-0 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pr-2 stroke-gray-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            </span>
          </div>
        </div>
        <div className="password-container">
          <div className="mt-8 pl-[2rem] w-[60%] text-center">
            <p className="password text-[13px] text-[#2d9cdb]">Forgot password?</p>
          </div>
        </div>
        <div className="sign-in w-[100%] flex justify-center mt-[2rem]">
          <button className="bg-[#2d9cdb] font-bold w-[45%] text-white text-[13px] h-[40px] rounded-full">Sign In</button>
        </div>
        <div className="login-footer-main">
          <div className="login-footer-container">
            <div className=" login-footer bg-neutral-50">
              <div className="login-qr-container flex justify-center w-[100%] mt-[3rem]">
                <div className="login-qr w-[30%] bg-neutral-100 p-3">
                  <img src={QR} alt="patricia-QR-code"></img>
                </div>
              </div>
              <div className="login-scan-container grid place-content-center">
                <p className="login-scan text-[13px] text-center tracking-tighter text-gray-700 font-medium mt-[1rem]">Scan to Download the Patricia App.</p>
                <p className="text-gray-400 text-center text-[10px] mt-[1rem] font-bold">.Fast Transactions.Easy Access.Premium Features</p>
              </div>
              <div className="login-store w-[100%]">
                <div className="flex justify-center mt-[1rem]">
                  <img src={App} alt="app-store" className="rounded-full"></img>
                </div>
                <div className="flex justify-center mt-[1rem]">
                  <img src={Play} alt="play-store" className="rounded-full pb-4 "></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;