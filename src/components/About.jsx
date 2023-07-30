import '../styles/components/about.sass'
import { BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi'
import XLogo from '../img/x-logo.png'

import Fade from 'react-reveal/Fade'

const About = () => {
  return (
    <Fade top>
    <div className='about' id='about'>
        <h1>Olá, eu sou</h1>
        <h2>Eduardo Cordeiro</h2>
        <h3>Desenvolvedor <span>full stack</span></h3>
        <p>Eu sou uma pessoa curiosa, com um forte desejo de aprender coisas novas e aprimorar minhas habilidades. 
          Possuo conhecimento em desenvolvimento de software e estou animado para contribuir.</p>
        <div className="cards-link">
          <a id='linkedin' href="https://www.linkedin.com/in/eduardobycordeiro/" target='_blank'><BiLogoLinkedin /></a>
          <a id='github' href="https://github.com/Klosban" target='_blank'><BiLogoGithub /></a>
          <a id='x' href="https://x.com/Klosban" target='_blank'><img src={XLogo} alt="X" /></a>
        </div>
        <a href="" className='btn'>Download CV</a>
    </div>
    </Fade>
  )
}

export default About