import SectionTitle from './SectionTitle.jsx';
import TechStack from './TechStack.jsx';
import { v4 as uuid } from 'uuid';
import { listOfProjects } from '../constants/data.js';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa6';

function Projects() {
    let navigate = useNavigate();
    const ICON_SIZE = 12;
    const ICON_COLOR = "#5d9ce2";
    const [downloadAmount, setDownloadAmount] = useState(0);

    useEffect(() => {
        async function fetchDownloadAmount() {
            try {
                const response = await fetch(
                    "https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery",
                    {
                        method: "POST",
                        headers: {
                            "Accept": "application/json;api-version=3.0-preview.1",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            filters: [
                                {
                                    criteria: [
                                        { filterType: 7, value: "JeremyErikLeong.cyberpunk-light-aquamarine-theme" },
                                    ],
                                },
                            ],
                            flags: 914,
                        }),
                    }
                );

                const data = await response.json();
                const results = data.results?.[0]?.extensions?.[0].statistics ?? [];

                const displayResult = results.find(result => result.statisticName === "install");
                setDownloadAmount(displayResult?.value ?? 0);
            } catch (err) {
                console.error(err);
            }
        }

        fetchDownloadAmount();
    }, []);

    return (
        <section id="#projects">
            <SectionTitle title="Pinned Projects" />

            {listOfProjects && listOfProjects.map(list => {
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
                            {list.project_techstack.map(techstack => {
                                return <TechStack key={uuid()} label={techstack} />
                            })}
                        </ul>

                        {list.id === "p6" ?
                            <div className="project-download-amount-display">
                                <FaDownload size={ICON_SIZE} color={ICON_COLOR} />
                                <p className="download-amount">
                                    {downloadAmount.toLocaleString()} installs
                                </p>
                            </div> : null}
                    </div>

                    <div className="project-image">
                        <img src={list.project_screenshot} alt="project-screenshot" />
                    </div>
                </a>
            })
            }

            <a className="btn-resume" onClick={() => navigate('/archive')}>
                Browse Archived Projects
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="arrow-up-right2" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
            </a>
        </section>
    )
}

export default Projects;