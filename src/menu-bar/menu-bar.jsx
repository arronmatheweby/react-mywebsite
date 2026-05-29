import "./menu-bar.css"
import logo from "./logo.svg"

function Menu (){
    return(
      <nav className="navbar">
        <div className="logo">
            <a href="/home"><img src={logo}></img></a>
        </div>
        <ul className="main-list">
            <a target="_blank" href="whatlearn.html"><li>Introduction</li></a>
            <a target="_blank" href="sampleweb.html"><li>Sample websites</li></a>
            <a target="_blank" href="https://github.com/arronmatheweby/arronmatheweby.github.io"><li>Open source</li></a>
        </ul>
    </nav>
    )
}
export default Menu