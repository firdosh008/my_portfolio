import Social from '../components/social'
import Button from '../components/button'
import Typed from 'react-typed'

export default function Intro() {
 
    return (
      <div className='intro backdrop-blur-sm p-4'>
      <h1 className= "font-bold ">FIRDOSH  AHMAD</h1>
      <h3 className='text-4xl m-2 px-20 font-mono font-extralight'>I'm a <span className='autotype'>
        <Typed 
        strings={["MERN Stack Developer.","Competitive Programmer","UI/UX Designer."]}
         typeSpeed={50}
         backSpeed={50}
         loop
         />
        </span></h3>
        <Social/>
      <Button className="button" name="Hire me" h="https://drive.google.com/file/d/1c7EFB6q576GcoV95pYviC9PuVsmBdqgG/view?usp=drive_link"/>
      </div> 
    )
  }