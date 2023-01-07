import { IoHomeOutline } from 'react-icons/io5';
import { BsPerson } from 'react-icons/bs';
import { BiBriefcase } from 'react-icons/bi';
import { SlGraduation} from 'react-icons/sl';  
import { GiNotebook} from 'react-icons/gi';
import { FaRegComments} from 'react-icons/fa';


export default function App() {
    return (
        <div className='my-24'> 
        <ul>
           <li className='my-10'><a href='#' className=' text-3xl'> <IoHomeOutline/></a></li> 
           <li className='my-10'><a href='#' className=' text-3xl'> <BsPerson/></a></li>
           <li className='my-10'><a href='#' className=' text-3xl'> <BiBriefcase/></a></li>
           <li className='my-10'><a href='#' className=' text-3xl'> <SlGraduation/></a></li>
           <li className='my-10'><a href='#' className=' text-3xl'> <GiNotebook/></a></li>
           <li className='my-10'><a href='#' className=' text-3xl'> <FaRegComments/></a></li>
        </ul>
          
        </div>
     
    )
  }