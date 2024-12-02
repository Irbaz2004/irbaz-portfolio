import React from 'react';
import "./HomeBannerStyle.css";
import profile from "../images/profile1.png";

export default function HomeBanner({id}) {
  return (
    <div className="home" id={id}> 
        <div className='content'>
            <div className="wrapper">
              <div className="name">S Irbaz Ahmed</div>
              <div className="staticTitle">
                MERN STACK
                <div className='hrLine'></div>
              </div>
              <ul className="dynamicTitle">
                <li>+<span>DATA SCIENTIST</span></li>
              </ul>
              <a className='btn' href="https://www.linkedin.com/in/deepajha14/" target="_blank" rel="noopener noreferrer">Hire Me</a>
            </div>
        </div>
        <div className="mask">
            <img className='bg' src={profile} alt="girl-with-laptop" />
        </div>
    </div>
  )
}
