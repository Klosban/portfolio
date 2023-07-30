import '../styles/components/contact.sass'

import { BsFillTelephoneFill } from 'react-icons/bs'
import { BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi'
import { GrMail } from 'react-icons/gr'
import { FaLocationDot } from 'react-icons/fa6'

import LightSpeed from 'react-reveal/LightSpeed';

import XLogo from '../img/x-logo.png'

const Contact = () => {
    const contacts = [
        {id: 1, icon: GrMail, description: 'habboedu355@gmail.com'},
        {id: 2, icon: BsFillTelephoneFill, description: '+55 2299274-3409'},
        {id: 3, icon: FaLocationDot, description: 'BRASIL - Nova Friburgo/RJ'},
    ]

  return (
    <div className='contact' id='contact'>
        <h1>Meios de <span>Contato</span></h1>
        <LightSpeed left>
        <div className="contact-cards">
            {contacts.map((contact) => (
                <div className="card" key={contact.id} id={contact.id}>
                    <contact.icon />
                    <p>{contact.description}</p>
                </div>
            ))}
        </div>
        <div className="cards-link">
          <a id='linkedin' href="https://www.linkedin.com/in/eduardobycordeiro/" target='_blank'><BiLogoLinkedin /></a>
          <a id='github' href="https://github.com/Klosban" target='_blank'><BiLogoGithub /></a>
          <a id='x' href="https://x.com/Klosban" target='_blank'><img src={XLogo} alt="X" /></a>
        </div>
        </LightSpeed>
    </div>
  )
}

export default Contact