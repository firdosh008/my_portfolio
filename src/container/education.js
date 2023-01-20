import Detailbox from "../components/detailbox"
import SKILL from "../components/skill"

export default function EDUCTAION() {
    return (
        <div className="p-24 ml-24 mt-10 education">
            <h1 className="text-5xl"> <span className="deco">EDUC</span>TAION  & SKILL</h1><div className="span "></div>
            <div id="education" className="grid lg:grid-cols-2 pt-10 ">
                <div className="grid lg:col-start-1 lg:col-span-1 ">
                    <Detailbox year="2008-2019" name="Secondary School Education" detail="I completed it from The Himalayan Public School. " cgp="9.1/10"/>
                    <Detailbox year="2021-2025" name="B-tech Computer Science" detail="Completed My Web-development course from Udemy " cgp="9.2/10"/>
                    <Detailbox year="2021-2022" name="Web Development" detail="I am Currently doing my bachlores from Graphic Era Hill University " cgp="8/10"/>
                </div>
                <div className="grid lg:col-start-2 lg:col-span-1 skill ">
                 <h2 className="text-5xl pt-10 w-fit h-fit ">My skills</h2>
                 <p className="lg:row-start-2 lg:row-span-1 text-xl">I'm a Freelancer MERN stack Developer with over 6 Month of experience. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>
                 <SKILL name="Frontend Development" percentage="80%"/>
                 <SKILL name="Backend Development" percentage="70%" />
                 <SKILL name="React Developer" percentage="40%"/>
                 <SKILL name="UI/UX Designer" percentage="60%"/>
                 <SKILL name="Coding" percentage="50%"/>
            </div>
            </div>
        </div>
      
    )
}