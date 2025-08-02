import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { archivedProjectTableHeader, archivedProjectTableData } from '../constants/data';
import { isTablet, isBrowser } from 'react-device-detect';
import { Helmet } from 'react-helmet-async';

export default function Archive() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Archive | Jeremy Erik Leong</title>
                <link rel="canonical" href="https://jeremyerikleong.com/archive" />
                <meta name="description" content="Hello! My name is Jeremy Erik Leong. I’m a developer & designer that based in Kuala Lumpur. I enjoy building digital experiences for the web." />
            </Helmet>

            <main className="archive-wrapper">
                <div className="navigation-container">
                    <a className="btn-navigation" onClick={() => navigate('/')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="arrow-left" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                        Jeremy Erik Leong
                    </a>
                    <h1 className="hero-title">All Projects</h1>
                </div>

                <div className="table-responsive-container">
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                {archivedProjectTableHeader.map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {archivedProjectTableData.map(data => (
                                <tr key={data.project_id}>
                                    <td className="project-year">{data.project_year}</td>

                                    {isTablet || isBrowser ? <td className="project-name">{data.project_title}</td> :

                                        <td className="project-name">
                                            {data.project_link !== "" ? <span>
                                                <a href={`https://${data.project_link}`} target="_blank">
                                                    {data.project_title}
                                                </a>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="arrow-up-right" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                                            </span> :
                                                <span>{data.project_title}</span>
                                            }
                                        </td>}

                                    <td>
                                        <ul className="archive-list-container">
                                            {data.project_techstack.map((techstack, index) => (
                                                <li key={index} className="archive-list-techstack">
                                                    {techstack}
                                                </li>
                                            ))}
                                        </ul>
                                    </td>

                                    {
                                        data.project_link !== "" &&
                                        <td>
                                            <span>
                                                <a href={`https://${data.project_link}`} target="_blank">
                                                    {data.project_link}
                                                </a>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="arrow-up-right" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                                            </span>
                                        </td>
                                    }
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}