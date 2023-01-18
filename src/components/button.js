export default function Button(props) {
    return (
        <div className={props.className}>
            <button className="btn">{props.name}</button> 
        </div>
        
    )
  }