import Dropdown from "../components/dropdown"
import {BsCode} from "react-icons/bs";
import {BiCodeCurly} from "react-icons/bi";
import {AiOutlineTool} from "react-icons/ai";

export default function Techskill() {
    return (
          <div className="techSkill">
            <div className="techDrop">
            <BsCode className="techIcon"/><Dropdown heading="Programming Languages" />
            </div>
           <div className="techDrop">
           <BiCodeCurly className="techIcon"/><Dropdown heading="Libraries & Frameworks" />
           </div>
           <div className="techDrop">
           <AiOutlineTool className="techIcon"/><Dropdown heading="Tools" />
           </div>
          </div>
    )
}