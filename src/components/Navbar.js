import logo from "../images/logo.png"
export default function Navbar(){

return(
    <header className="header">
        <div className="header__logo-container">
        <img src={logo} alt="troll face" className="logo"></img>
        <p className="header__txtl">Meme Generator</p>
        </div>
        <p className="header__txtr">React Course - Project</p>

    </header>
)
}