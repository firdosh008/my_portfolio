

export default function Project(props) {
    return (
      <div className=" rounded-2xl p-5 individual m-5">
         <img className="zoom" src={props.src} alt="portfolioimage"/>
         <h1 className="text-3xl font-bold m-3 ">{props.name}</h1>
        <a href={props.p}> <p className="text-lg font-bold">Preview</p></a>
        <a href={props.s}> <p className="text-lg font-bold">Source Code</p></a>
      </div>
    )
  }