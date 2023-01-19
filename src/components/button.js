export default function Button(props) {
    return (
        <div className={props.className}>
            <button type={props.type} className="btn">{props.name}</button> 
        </div>
        
    )
  }