import Home from './container/home'
import About from './container/about'
import EDUCTAION from './container/education'
import Recentwork from './container/Recentworks'
import Contact from './container/contact'
import Tech_skill from "./container/Tech_Skill"

export default function App() {
  return (
    <div className='body'>
       <Home/>
      <About/>
      <div className='hr1'></div>
      <EDUCTAION/>
      <Tech_skill/>
      <div className='hr2'></div>
      <Recentwork/>
      <div className='hr3'></div>
      <Contact/>
    </div>
  
  )
} 