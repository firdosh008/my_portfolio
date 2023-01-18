import Nav from "./nav_bar_side";
import background from "../assets/bci.jpg";
import Intro from "./intro";


export default function home() {
  return (
    <div className="bg-cover bg-center w-full h-screen " style={{ backgroundImage:`url(${background})`,backgroundAttachment:"fixed" }}>
      <div className="p-10">
      <Nav/>
      <Intro/>
      </div>
    </div>
  )
} 