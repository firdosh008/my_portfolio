import { IoHomeOutline } from 'react-icons/io5';
import { BsPerson } from 'react-icons/bs';
import { BiBriefcase, BiLock } from 'react-icons/bi';
import { SlGraduation} from 'react-icons/sl';  
import { GiNotebook} from 'react-icons/gi';
import { FaRegComments} from 'react-icons/fa';
import { AiOutlineBars} from 'react-icons/ai';
import List from '../components/list';
import LOGO from "../components/log"
import React, { useState } from "react";
import $ from 'jquery'

export default function App() {

    const [style, setStyle] = useState("bars");
    const handleClick = () => {
         console.log("clicked")
          var x=document.getElementById("nav");
          if(x.style.display==="none"){
            x.style.display="inline-block";
            x.style.width="30%";
            x.style.height="100%";
            x.style.padding="30px";
            x.style.paddingTop="7rem";
            x.style.backgroundColor="black"
          }
          
          else
          x.style.display = "none";
      };
    return ( 
        <div className=' w-fit '>
            <div className='navbar-brand-normal'><LOGO/></div>
            <div className='mob-header'>
                <div className='d-flex'>
                <div className='navbar-brand'><LOGO/></div>
                <div className='bars' onClick={handleClick} >
                <AiOutlineBars/></div>
                </div>
            </div>
            
             <ul className='nav pt-24 mt-3 w-fit' id='nav'>
                <List href="#home" className="nav_bar text-3xl" name= {<IoHomeOutline/>}/>
                <List href="#about" className="nav_bar text-3xl" name= {<BsPerson/>}/>
                <List href="#education" className="nav_bar text-3xl" name= {<SlGraduation/>}/>
                <List href="" className="nav_bar text-3xl" name= {<BiBriefcase/>}/>
                <List href="#projects" className="nav_bar text-3xl" name= {<GiNotebook/>}/>
                <List href="#letstalk" className="nav_bar text-3xl" name= {<FaRegComments/>}/>
            </ul>
        </div>
        
    )
  }