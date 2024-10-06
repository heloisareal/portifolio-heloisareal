// Components
import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/project-1.png',
      title: 'Turtlesea salvando oceanos',
      tags: ['HTML', 'CSS', 'JAVASCRIPT'],
      projectLink: 'https://heloreal17.github.io/frontend-gs/'
    },
    {
      imgSrc: '/images/project-2.png',
      title: 'Simulação de site de compras',
      tags: ['BOOTSTRAP', 'MOBILE FIRST'],
      projectLink: 'https://heloisareal.github.io/cp05-front/'
    },
    {
      imgSrc: '/images/project-3.png',
      title: 'TCC Medtempo',
      tags: ['JAVA SCRIPT', 'HTML'],
      projectLink: 'https://medtempo.github.io/MedTempo-SITE/'
    }
  ];

const Work = () => {
    return (
        <section 
        className="section"
        id="work"
        >
            <div className="container">

            <h2 className="headline-2 mb-8 reveal-up">
                Principais Projetos
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink  }, key) =>(
                    <ProjectCard 
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    classes="reveal-up"
                    />
                ))}
            </div>

            </div>
        </section>
    )
}

export default Work