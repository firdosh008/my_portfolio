import List from '../components/list';
import {FiFacebook} from 'react-icons/fi';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsInstagram ,BsTwitter} from 'react-icons/bs';
import Button from '../components/button'
import Typed from 'react-typed'

export default function Intro() {
 
    return (
      <div className='intro'>
      <h1 className= "font-bold">FIRDOSH  AHMAD</h1>
      <h3 className='text-4xl m-2 px-20 font-mono font-extralight'>I'm a <span className='autotype'>
        <Typed 
        strings={["MERN Stack Developer.","Coder.","UI/UX Designer."]}
         typeSpeed={50}
         backSpeed={50}
         loop
         />
        </span></h3>
      <ul className='w-fit social m-2'>
      <List className="social_media" name={<FiFacebook/>}/>
      <List className="social_media" name={<AiFillLinkedin/>}/>
      <List className="social_media" name={<BsInstagram/>}/>
      <List className="social_media" name={<BsTwitter/>}/>
      </ul>
      <Button  name="Hire me"/>
      </div> 
    )
  }