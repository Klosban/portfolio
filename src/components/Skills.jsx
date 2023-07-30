import '../styles/components/skills.sass'

import { DiJsBadge, DiReact, DiSass, DiNodejsSmall, DiMysql, DiMongodb } from 'react-icons/di'
import { SiExpress } from 'react-icons/si'

import Fade from 'react-reveal/Fade'

const Skills = () => {
  const skills = [
    {id: 1, icon: DiJsBadge , name: 'JavaScript', description: 'Proficiente na linguagem de programação JavaScript, com foco no desenvolvimento de interatividade e funcionalidades dinâmicas para aplicações web.'},
    {id: 2, icon: DiReact , name: 'React', description: 'Experiência sólida no uso do framework React para a construção de interfaces de usuário eficientes, reativas e de fácil manutenção.'},
    {id: 3, icon: DiSass , name: 'Sass', description: 'Habilidade em utilizar o pré-processador Sass para criar folhas de estilo CSS mais organizadas, modulares e com maior facilidade de reutilização.'},
    {id: 4, icon: DiNodejsSmall , name: 'Node.js', description: 'Conhecimento em Node.js, permitindo a construção de aplicações web escaláveis e de alto desempenho no lado do servidor.'},
    {id: 5, icon: SiExpress , name: 'Express', description: 'Competência em Express.js, capacitando a criação de APIs robustas e o desenvolvimento de aplicações web eficientes.'},
    {id: 6, icon: DiMysql , name: 'MySQL', description: 'Experiência em gerenciar e manipular bancos de dados relacionais MySQL para armazenamento e recuperação de dados de forma eficiente.'},
    {id: 7, icon: DiMongodb , name: 'MongoDB', description: 'Conhecimento em MongoDB, possibilitando o uso de bancos de dados NoSQL para aplicações que demandam flexibilidade e escalabilidade no armazenamento de dados.'},
  ]

  return (
    <div className='skills' id='skills'>
        <h1 className='title'>Minhas <span>Skills</span></h1>
        <Fade left>
        <div className="skill-cards">
          {skills.map((skill) => (
            <div className="card" id={skill.id} key={skill.id}>
              <skill.icon id={skill.name.toLowerCase().replace(/\./g, '')} />
              <h1>{skill.name}</h1>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
        </Fade>
    </div>
  )
}

export default Skills