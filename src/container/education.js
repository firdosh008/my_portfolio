import Detailbox from "../components/detailbox"
import SKILL from "../components/skill"
import Tech_skill from "./Tech_Skill"

export default function EDUCATION() {
    return (
        <div className="p-24 ml-24 mt-10 education">
            <h1 className="text-5xl"> <span className="deco">EDUC</span>TAION  & SKILL</h1><div className="span "></div>
            <div id="education" className="grid lg:grid-cols-2 pt-10 ">
                <div className="grid lg:col-start-1 lg:col-span-1 ">
                    <Detailbox year="2021-2025" name="B-tech CSE" detail="Graphic Era Hill University , Dehradun" cgp="8.81/10"/>
                    <Detailbox year="2008-2021" name="10+2 with PCM" detail="The Himalayan Public School. " cgp="90.8%"/>
                </div>
                <div className="grid lg:col-start-2 lg:col-span-1 skill ">
                 <h2 className="text-5xl pb-5 w-fit h-fit ">My skills</h2>
                 <SKILL name="Problem Solving" percentage="90%"/>
                 <SKILL name="MERN STACK Developer" percentage="80%"/>
                 <SKILL name="UI/UX Designer" percentage="60%"/>
                 <SKILL name="Computer Vision" percentage="50%"/>
            </div>
            </div>
            <Tech_skill/>
        </div>
      
    )
}