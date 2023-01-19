

export default function Techskill() {
    return (
          <div className="techskill">
            <h1 className="text-5xl"> <span className="deco">Tec</span>h Skills</h1><div className="span w-fit"></div>
            <div className="frontend rounded-lg w-fit">
                <h2  className="text-4xl font-extrabold">Frontend</h2>
                 <ul className="mt-7">
                    <ls>HTML5</ls>
                    <ls>CSS3</ls>
                    <ls>JavaScript</ls>
                    <ls>Bootstrap</ls>
                    <ls>React</ls>
                    <ls>Tailswind</ls>
                    <ls>React Bootstrap</ls>
                 </ul>
            </div>
            <div className="Backend rounded-lg w-fit">
                <h2 className="text-4xl font-extrabold">Backend</h2>
                 <ul>
                    <ls>Node.js</ls>
                    <ls>Express</ls>
                    <ls>Ejs</ls>
                 </ul>
            </div>

            <div className="Hosting rounded-lg w-fit">
                <h2 className="text-4xl p-5 font-extrabold">Hosting Platform</h2>
                 <ul>
                    <ls>Heroku</ls>
                    <ls>GitHub Pages</ls>
                 </ul>
            </div>

            <div className="Database rounded-lg w-fit">
                <h2 className="text-4xl font-extrabold">Database</h2>
                 <ul>
                    <ls>MongoDb</ls>
                 </ul>
            </div>

            <div className="Version rounded-lg w-fit">
                <h2 className="text-4xl font-extrabold">Version Control</h2>
                 <ul>
                    <ls>Git</ls>
                 </ul>
            </div>

            <div className="Programming p-5 rounded-lg w-fit ">
                <h2 className="text-4xl  font-extrabold">Programming Languages</h2>
                 <ul>
                    <ls>JavaScript</ls>
                    <ls>Python</ls>
                    <ls>C++</ls>
                    <ls>C</ls>
                 </ul>
            </div>

            

          </div>
    )
}