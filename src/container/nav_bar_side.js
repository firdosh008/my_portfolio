import { IoHomeOutline } from 'react-icons/io5';
import { BsPerson } from 'react-icons/bs';
import { BiBriefcase } from 'react-icons/bi';
import { SlGraduation} from 'react-icons/sl';  
import { GiNotebook} from 'react-icons/gi';
import { FaRegComments} from 'react-icons/fa';
import List from '../components/list';

export default function App() {
    return ( 
        <ul className='pt-24 mt-3 w-fit'>
            <List className="nav_bar text-3xl" name= {<IoHomeOutline/>}/>
            <List className="nav_bar text-3xl" name= {<BsPerson/>}/>
            <List className="nav_bar text-3xl" name= {<BiBriefcase/>}/>
            <List className="nav_bar text-3xl" name= {<SlGraduation/>}/>
            <List className="nav_bar text-3xl" name= {<GiNotebook/>}/>
            <List className="nav_bar text-3xl" name= {<FaRegComments/>}/>
        </ul>
    )
  }