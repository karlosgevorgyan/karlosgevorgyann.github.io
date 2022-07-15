import Register from "./register";

function Inp(props){
    return(
        <div className="Inp">
          <input alt="Input" className={props.cl_name} type={props.type} name={props.name} placeholder={props.name}/>
        </div>
    )
}

export default Inp