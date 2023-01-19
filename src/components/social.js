import List from "./list"
import {FiFacebook} from 'react-icons/fi';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsInstagram ,BsGithub} from 'react-icons/bs';

export default function Social() {
    return (

        <ul className='w-fit social m-2'>
        <List className="social_media" name={<FiFacebook/>}/>
        <List className="social_media" name={<AiFillLinkedin/>}/>
        <List className="social_media" name={<BsInstagram/>}/>
        <List className="social_media" name={<BsGithub/>}/>
        </ul>
        
    )
  }