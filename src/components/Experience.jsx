import SectionTitle from "./SectionTitle";
import TechStack from "./TechStack.jsx";
import { v4 as uuid } from 'uuid'
import { workExperiences } from "../data.js";
import Pdf from "../pdf/jeremyerikleong_resume.pdf";

function Experience() {
    return (
        <section id="#experience">
            <SectionTitle title="Experience" />

            <div>
                {workExperiences && workExperiences.map(workExperience => {
                    return (
                        <a href={workExperience.company_website} target="_blank" key={workExperience.id} className="experience-card">
                            <div className="experience-duration-text">
                                {workExperience.position_duration}
                            </div>

                            <div className="experience-card-content">
                                <div className="experience-title-text">
                                    {workExperience.position_title}
                                </div>

                                <span className="experience-location-text">
                                    {workExperience.company_name}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="arrow-up-right" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                                </span>

                                <p className="experience-content">
                                    {workExperience.experience_content}
                                </p>

                                <ul className="experience-techstack-container">
                                    {workExperience['experience_techstack'].map(techstack => {
                                        return <TechStack key={uuid()} label={techstack} />
                                    })}
                                </ul>
                            </div>
                        </a>
                    )
                })
                }

                <a href={Pdf} target="_blank" className="btn-resume">
                    View Full Resume
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="arrow-up-right" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                </a>
            </div>
        </section>
    )
}

export default Experience;
