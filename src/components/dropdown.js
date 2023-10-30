import React, { useState } from 'react';
import Menu from './drop-down-menu';
import Description from '../data/description';
import {RiArrowDropDownLine} from "react-icons/ri";


function Dropd(props) {
  const [open, setOpen] = useState(false);
  
  return (
    <div className='dropDown'>
      
       <button  className='dropDown-basic'  onClick={() => setOpen(!open)}>
      {props.heading}<RiArrowDropDownLine style={{display:"inline-block"}}/>
      </button>
      {open && (
        <div>
           {
            Description.map((iteam) => {
                if(iteam.heading === props.heading){
                  return (
                    <Menu title={iteam.titles} l={iteam.l}  />
                )
                }
                })
           }
        </div>
      )}
    </div>
  );
}

export default Dropd;
