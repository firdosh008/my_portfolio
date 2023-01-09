import LOGO from "./components/log"
import Nav from "./container/nav_bar_side"
import background from "./assets/bci.jpg"

export default function App() {
  return (
    <div className="bg-cover bg-center w-full h-screen " style={{ backgroundImage: `url(${background})` }}>
    <div className="p-10">
      <LOGO/>
      <Nav/>
      </div>
      
    </div>
    
  )
} 