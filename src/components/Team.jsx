import React from 'react';
import TeamImg from '../assets/patricia-team.webp'
import Header from './Header';


function Team() {
  return (
    <div>
      <Header className = 'text-black' />
      <p>Meet the Magicians</p>
      <img src={TeamImg} alt=''></img>
      </div>
  )
}

export default Team;