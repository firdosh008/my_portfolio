import Social from '../components/social'
import Button from '../components/button'
import Typed from 'react-typed'

export default function Intro() {
 
    return (
      <div className='intro backdrop-blur-sm p-4'>
      <h1 className= "font-bold ">FIRDOSH  AHMAD</h1>
      <h3 className='text-4xl m-2 px-20 font-mono font-extralight'>I'm a <span className='autotype'>
        <Typed 
        strings={["MERN Stack Developer.","Coder.","UI/UX Designer."]}
         typeSpeed={50}
         backSpeed={50}
         loop
         />
        </span></h3>
        <Social/>
      <Button className="button" name="Hire me" h="https://drive.google.com/file/d/1M9Iym1qDMnAvf5T6v1rxo0IVmoNMCThB/view?usp=share_link"/>
      </div> 
    )
  }