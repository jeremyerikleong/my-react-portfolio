import SectionTitle from './SectionTitle.jsx';
import TechStack from './TechStack.jsx';
import { v4 as uuid } from 'uuid';
import { listOfProjects } from '../data.js';

function Projects(){
    return(
        <section id="#projects">
            <SectionTitle title="Projects" />

            {listOfProjects && listOfProjects.map(list =>{
                    return <a href={list.project_link} target="_blank" key={list.id} className="project-card">
                        <div className="project-content">
                            <span className="project-title">
                                {list.project_title}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="arrow-up-right" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                            </span>

                            <p className="project-description">
                                {list.project_description}
                            </p>

                            <ul className="experience-techstack-container">
                                {list.project_techstack.map(techstack =>{
                                    return <TechStack key={uuid()} label={techstack} />
                                })}
                            </ul>
                        </div>

                        <div className="project-image">
                            <img src={list.project_screenshot} alt=""/>
                        </div>
                    </a>
                })
            }

        </section>
    )
}

export default Projects;