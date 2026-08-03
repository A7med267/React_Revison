
import './App.css'

function Artical({name,email,style , children }){
    return(
    <div className="articl" style={style}>
      {name}
      {email}
      {children}
    </div>
    )
    
}

export default Artical ;