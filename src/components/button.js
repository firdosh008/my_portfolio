export default function Button(props) {
    return (
        <div className={props.className}>
           <a href={props.h}><button type={props.type} className="btn">{props.name}</button></a> 
        </div>
        
    )
  }