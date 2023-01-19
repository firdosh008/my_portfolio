import Project from "../components/project"
import P1 from "../assets/project1.png"
import P2 from "../assets/project2.png"
import P3 from "../assets/project3.png"
import P4 from "../assets/project4.png"
import P5 from "../assets/project 5.png"
import P6 from "../assets/project 6.png"

export default function Projectrow() {
    return (
        <div className='p-24 full_Projects'>
        <h1 className='text-5xl h-fit ml-12 pl-12'><span className='deco'>Rece</span>nt   Projects</h1><div className="span w-fit"></div>
        <div className="grid grid-col-3 p-10 pb-0">
            <div className="col-start-1 col-span-1">
            <Project src={P1} name="SRA Company Hotle"/>
            </div>
             <div className="col-start-2 col-end-3">
             <Project src={P2} name="Personal Travel Blog"/>
             </div>
             <div className="col-start-3 col-end-4">
             <Project src={P3} name="Dice Toss Game"/>
             </div> 
         </div>
         <div className="grid grid-col-3 p-10 pb-0">
            <div className="col-start-1 col-span-1">
            <Project src={P4} name="Simon Game"/>
            </div>
             <div className="col-start-2 col-end-3">
             <Project src={P5} name="Restraunt Website"/>
             </div>
             <div className="col-start-3 col-end-4">
             <Project src={P6} name="To-do List"/>
             </div> 
         </div>
        </div>  
        
    )
}