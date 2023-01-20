export default function App(props) {
    return (
        <div className={props.className}>
        <li className='py-5  w-fit'><a href={props.href}>{props.name}</a></li> 
        </div>
    )
  }