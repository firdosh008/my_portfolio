import Button from '../components/button';
import React from 'react';
import  Image from '../assets/prof.jpeg' ;


export default function about() {
    return (
      <div id="about" className='grid lg:grid-col-2 full_about'>
        <div className=' lg:col-start-1 lg:col-end-2'>
        <h1 className='text-5xl h-fit ml-12 pl-12'><span className='deco'>Ab</span>out Me.</h1><div className="span w-fit"></div>
        <div className='image'>
          <img src={Image} alt='prof'/>
        </div>
        </div>
        <div className=' lg:col-start-2 lg:col-end-3 cv'>
          <p>
          Hi there👋, I'm a Freelancer Full Stack Web-Developer,and an 3rd year undergraduate student at Graphic Era Hill University, Dehradun, majoring in computer science and engineering. As a passionate problem solver with in-depth knowledge of data structures and algorithms, I'm always seeking opportunities to apply my skills to real-world challenges.I'm proficient in C++ and Java and have a good understanding of C,and Python.         </p>
          <div className='ach'>
          <span className='font-bold'>10+</span><h2>Projects Completed.</h2>
          <span className='font-bold'>800+</span><h2>Problems Solved.</h2>
          </div>
          <Button name="Download Resume" h="https://drive.google.com/file/d/1c7EFB6q576GcoV95pYviC9PuVsmBdqgG/view?usp=drive_link"/>
        </div>
      </div>
      
    )
}