import Project from "../components/project"

export default function about() {
    return (
      <div className='p-24 grid grid-col-2 full_Projects'>
        <div className=' col-start-1 col-end-2'>
        <h1 className='text-5xl h-fit ml-12 pl-12'><span className='deco'>Reacent</span>Projects</h1><div className="span w-fit"></div>
         <Project/>
        </div>
      </div>
      
    )
}