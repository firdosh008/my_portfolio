import Nav from "./nav_bar_side";
import background from "../assets/bci.jpg";
import Intro from "./intro";


export default function home() {
  return (
    <div id="home" className="bg-cover bg-center w-full h-screen  background" style={{ backgroundImage:`url(${background})` }}>
      <div className="p-10 home">
      <Nav/>
      <Intro/>
      </div>
    </div>
  )
} 