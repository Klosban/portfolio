import '../styles/components/portfolio.sass'

import Electrum from '../img/electrum1.png'
import Agency from '../img/agency1.png'
import RopenShop from '../img/ropenshop1.png'
import GetAPet from '../img/getapet1.png'
import MongoNode from '../img/mongonode.png'

import Rotate from 'react-reveal/Rotate'

const Portfolio = () => {
  const projects = [
    {id: 1, image: GetAPet, name: 'GetAPet', description: 'Get A Pet, website de adoção de animais de estimação', techs: ['React', 'CSS3', 'JavaScript', 'Node.js', 'Express', 'MongoDB'], link: 'https://github.com/Klosban/getapet'},
    {id: 2, image: Electrum, name: 'Electrum', description: 'Electrum, site de vendas de produtos / e-commerce', techs: ['HTML5', 'Sass'], link: 'https://github.com/Klosban/electrum' },
    {id: 3, image: Agency, name: 'Agency', description: 'Agency, agência de desenvolvimento de sites/sistemas', techs: ['HTML5', 'Sass'], link: 'https://github.com/Klosban/agency' },
    {id: 4, image: RopenShop, name: 'RopenShop', description: 'RopenShop, site de vendas de produtos / e-commerce', techs: ['React', 'Sass', 'JavaScript'], link: 'https://github.com/Klosban/ropenshop' },
    {id: 5, image: MongoNode, name: 'Node MongoDB', description: 'MongoDB Node, site de cadastro de produtos / CRUD com MongoDB', techs: ['HTML5', 'CSS3', 'Node.js', 'Express', 'MongoDB'], link: 'https://github.com/Klosban/mongodb-node' },
  ]

  return (
    <div className='portfolio' id='portfolio'>
        <h1>Últimos <span>projetos</span></h1>
        <Rotate bottom left>
        <div className="cards">
          {projects.map((project) => (
            <>
            <a href={project.link} target='_blank'>
              <div className="card" key={project.id}>
                <img src={project.image} alt={project.name} />
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <div className="techs">
                  <ul>
                  {project.techs.map((tech) => (
                      <li id={tech.toLowerCase().replace(/\./g, '')}>{tech}</li>
                  ))}
                  </ul>
                </div>
              </div>
            </a>
            </>
          ))}
        </div>
        </Rotate>
    </div>
  )
}

export default Portfolio