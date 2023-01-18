import Button from '../components/button';
import React from 'react';
import  Image from '../assets/prof.jpeg' ;


export default function about() {
    return (
      <div className='p-24 grid grid-col-2 full_about'>
        <div className=' col-start-1 col-end-2'>
        <h1 className='text-5xl h-fit ml-12 pl-12'><span className='deco'>Ab</span>out Me.</h1><div className="span w-fit"></div>
        <div className='image'>
          <img src={Image} alt='prof'/>
        </div>
        </div>
        <div className=' col-start-2 col-end-3 cv'>
          <h1 className=' text-4xl'>
            I'm a 2nd year B-tech Computer Science Student and is working as a Frelancer for last 6 month.
          </h1>
          <p>
          I'm a Freelancer Front-end Developer with over 6 Month of experience. I'm from India, Dehradun. I code and create web elements for amazing people around the world and for my portfolio.I am also a good coder and have solve many Problems on leetcode and  on other websites. I like work with new people. New people new Experiences.
          </p>
          <span className='font-bold'>5</span><h2>Projects Completed.</h2>
          <span className='font-bold'>300+</span><h2>Questions Solved.</h2>
          <Button name="Download CV" />
        </div>
      </div>
      
    )
}