import '../styles/components/navbar.sass'
import Logo from '../img/logo-eduardo.png'

const Navbar = () => {
  return (
    <nav>
        <a href="">
            <div className='logo-info'>
                <img src={Logo} alt="logo" />
                <span>|</span>
                <div className="logo-name">
                    <p>Eduardo</p>
                    <p>Cordeiro</p>
                </div>
            </div>
        </a>
        <ul>
            <li><a href="#about">Sobre mim</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contato</a></li>
        </ul>
    </nav>
  )
}

export default Navbar