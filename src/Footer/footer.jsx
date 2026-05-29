import "./footer.css"

function Footer (){
    return(
        <footer>
            <br/><br/><br/><br/><br/><br/>
            <h1 className="sample">A-serech</h1>
            <ul>
                <li><h4>Open source</h4></li>
                <a href="https://github.com/arronmatheweby/html-intro"><li>repository</li></a>
                <a href="https://github.com/arronmatheweby"><li>Github</li></a>
            </ul>
            <ul>
                <li><h4>Navigation</h4></li>
                <li>intro</li>
                <li>Updates</li>
            </ul>
            <ul>
                <li><h4>Follow us on</h4></li>
                <a href="https://cocrea.world/@arronmatheweby"><li>Cocrea</li></a>
                <a href="https://scratch.mit.edu/users/arroneby"><li>Scratch</li></a>
            </ul>
        </footer>
    )
}
export default Footer