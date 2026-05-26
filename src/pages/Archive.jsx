import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { archivedProjectTableHeader, archivedProjectTableData } from '../constants/data';
import { Helmet } from 'react-helmet-async';
import HrefLink from '../components/HrefLink';

export default function Archive() {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState('');
    const searchInputRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        function handleKeyDown(evt) {
            if (evt.key === 'Escape' && document.activeElement === searchInputRef.current) {
                clearSearch();
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const filteredProjects = archivedProjectTableData.filter(project => {
        const searchValue = searchTerm.toLowerCase();

        return (
            project.project_title.toLowerCase().includes(searchValue) ||
            project.project_year.toString().includes(searchValue) ||
            project.project_techstack.some(tech =>
                tech.toLowerCase().includes(searchValue)
            )
        );
    });

    function clearSearch() {
        setSearchTerm('');
    }

    function normalizeUrl(url) {
        if (!url) return '#';
        return url.startsWith('http') ? url : `https://${url}`;
    }

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
                    <button
                        type="button"
                        className="btn-navigation"
                        onClick={() => navigate('/')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="arrow-left" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                        Jeremy Erik Leong
                    </button>
                    <h1 className="hero-title">All Projects</h1>
                </div>

                <div className="archive-search-container">
                    <label className="archive-search-label sr-only" htmlFor="archive-search-input">
                        Search projects
                    </label>

                    <input
                        id="archive-search-input"
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search projects by name, year, or tech stack"
                        value={searchTerm}
                        onChange={(evt) => setSearchTerm(evt.target.value)}
                        className="archive-search-input"
                    />

                    {searchTerm && (
                        <button
                            type="button"
                            className="btn-clear"
                            onClick={clearSearch}
                            aria-label="Clear search">
                            ×
                        </button>
                    )}

                    {searchTerm.trim() !== '' && (
                        <div className="archive-search-results-count">
                            {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
                        </div>
                    )}
                </div>

                {filteredProjects.length > 0 ?
                    (
                        <div className="table-responsive-container">
                            <table className="responsive-table">
                                <thead>
                                    <tr>
                                        {archivedProjectTableHeader.map((header, index) => (
                                            <th scope="col" key={index}>{header}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredProjects.map(data => (
                                        <tr key={data.project_id}>
                                            <td className="project-year">{data.project_year}</td>

                                            <td className="project-name">
                                                {data.project_link ? (
                                                    <HrefLink
                                                        href={normalizeUrl(data.project_link)}
                                                        className="project-link">
                                                        {data.project_title}
                                                    </HrefLink>
                                                ) : (
                                                    <span>{data.project_title}</span>
                                                )}
                                            </td>

                                            <td>
                                                <ul className="archive-list-container">
                                                    {data.project_techstack.map((techstack, index) => (
                                                        <li key={index} className="archive-list-techstack">
                                                            {techstack}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : <div className="no-results-container">
                        <p>
                            No projects found
                        </p>
                    </div>
                }
            </main>
        </>
    )
}