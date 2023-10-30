import Home from './container/home'
import About from './container/about'
import EDUCATION from './container/education'
import Recentwork from './container/Recentworks'
import Contact from './container/contact'

export default function App() {
  return (
    <div className='body'>
       <Home/>
      <About/>
      <div className='hr1'></div>
      <EDUCATION/>
      <div className='hr2'></div>
      <Recentwork/>
      <div className='hr3'></div>
      <Contact/>
    </div>
  
  )
} 