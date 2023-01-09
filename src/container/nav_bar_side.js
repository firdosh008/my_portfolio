import { IoHomeOutline } from 'react-icons/io5';
import { BsPerson } from 'react-icons/bs';
import { BiBriefcase } from 'react-icons/bi';
import { SlGraduation} from 'react-icons/sl';  
import { GiNotebook} from 'react-icons/gi';
import { FaRegComments} from 'react-icons/fa';
import List from '../components/list';

export default function App() {
    return (
        <div className='my-24 pt-2'> 
        <ul>
            <List name= {<IoHomeOutline/>}/>
            <List name= {<BsPerson/>}/>
            <List name= {<BiBriefcase/>}/>
            <List name= {<SlGraduation/>}/>
            <List name= {<GiNotebook/>}/>
            <List name= {<FaRegComments/>}/>
        </ul>
          
        </div>
     
    )
  }