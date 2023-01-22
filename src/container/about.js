import Button from '../components/button';
import React from 'react';
import  Image from '../assets/prof.jpeg' ;


export default function about() {
    return (
      <div id="about" className='p-24 grid lg:grid-col-2 full_about'>
        <div className=' lg:col-start-1 lg:col-end-2'>
        <h1 className='text-5xl h-fit ml-12 pl-12'><span className='deco'>Ab</span>out Me.</h1><div className="span w-fit"></div>
        <div className='image'>
          <img src={Image} alt='prof'/>
        </div>
        </div>
        <div className=' lg:col-start-2 lg:col-end-3 cv'>
          <h1 className=' text-4xl'>
            I'm a 2nd year B-tech Computer Science Student and is working as a Frelancer for last 6 month.
          </h1>
          <p>
          I'm a Freelancer Front-end Developer with over 6 Month of experience. I'm from India, Dehradun. I code and create web elements for amazing people around the world and for my portfolio.I am also a good coder and have solve many Problems on leetcode and  on other websites. I like work with new people. New people new Experiences.
          </p>
          <div className='ach'>
          <span className='font-bold'>6</span><h2>Projects Completed.</h2>
          <span className='font-bold'>300+</span><h2>Questions Solved.</h2>
          </div>
          <Button name="Download CV" h="https://drive.google.com/file/d/1M9Iym1qDMnAvf5T6v1rxo0IVmoNMCThB/view?usp=share_link"/>
        </div>
      </div>
      
    )
}