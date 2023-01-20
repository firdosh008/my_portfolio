import List from "./list"
import {SiLeetcode} from 'react-icons/si';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsInstagram ,BsGithub} from 'react-icons/bs';


export default function Social() {
    return (
        
        <ul className='w-fit social m-2'>
        <List className="social_media" href="https://leetcode.com/firdoshahmad/" name={<SiLeetcode/>}/>
        <List className="social_media" href="https://www.linkedin.com/in/firdosh-ahmad-1b086b229/" name={<AiFillLinkedin/>}/>
        <List className="social_media" href="https://www.instagram.com/f_ahma_.d/" name={<BsInstagram/>}/>
        <List className="social_media" href="https://github.com/firdosh008" name={<BsGithub/>}/>
        </ul>
        
    )
  }