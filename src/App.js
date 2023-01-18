import Home from './container/home'
import About from './container/about'
import EDUCTAION from './container/education'

export default function App() {
  return (
    <div className='body'>
       <Home/>
      <About/>
      <div className='hr1'></div>
      <EDUCTAION/>
      <div className='hr2'></div>
    </div>
  
  )
} 