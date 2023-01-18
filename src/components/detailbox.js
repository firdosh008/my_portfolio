
export default function detailbox(props) {
    return (
        <div className="detailbox">
            <h3 >{props.year}</h3>
            <h1 className="text-3xl pb-5">{props.name}</h1>
            <p className="text-xl">{props.detail}</p>
            <h2 className="text-2xl w-fit h-2"> {props.cgp} </h2>
        </div>
    )
}