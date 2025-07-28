const workExperiences = [
    {
        id: 'e1',
        position_duration: 'July 2022 - September 2024',
        position_title: 'Front-End Web Developer',
        company_name: 'TTwoWeb',
        company_website: 'https://www.ttwoweb.com/',
        experience_content: 'Develop responsive websites and implement back-end integration via RESTful APIs. Collaborate with cross-functional teams, including developers, designers, and project executives, to implement and advocate for best practices in web accessibility.',
        experience_techstack: ['HTML & CSS', 'PHP', 'jQuery', 'Bootstrap']
    },
    {
        id: 'e2',
        position_duration: 'August 2019 - March 2021',
        position_title: 'Interactive Content Developer',
        company_name: 'MindSpace',
        company_website: 'https://www.mindspace.my/',
        experience_content: 'Primarily responsible for creating company social media posts using Adobe tools, maintaining in-house website content through Grav CMS, and independently developing internal gamification education content for special needs using Unity3D.',
        experience_techstack: ['HTML & CSS', 'C#', 'Adobe Photoshop', 'Adobe Illustrator', 'Blender', 'Unity 3D']
    }
]

const listOfProjects = [
    {
        id: 'p2',
        project_title: 'Blogger',
        project_description: 'A full-stack blog application developed using PERN stack.',
        project_techstack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'AWS', 'Railway'],
        project_link: "https://react-blogger.up.railway.app/login",
        project_screenshot: '/assets/projects/project-2.webp'
    },
    {
        id: 'p4',
        project_title: 'Recipe App',
        project_description: 'A cooking web app designed for home chefs and foodies, with easy, tasty homemade recipes.',
        project_techstack: ['React.js', 'Tailwind CSS', 'Vercel'],
        project_link: "https://recipe-app-two-ebon.vercel.app/",
        project_screenshot: '/assets/projects/project-4.webp'
    },
    {
        id: 'p5',
        project_title: 'The Boring Devs',
        project_description: 'A client website developed using Next.js framework.',
        project_techstack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
        project_link: "https://www.theboringdevs.com/",
        project_screenshot: '/assets/projects/project-5.webp'
    },
    {
        id: 'p6',
        project_title: 'Cyberpunk Light Aquamarine Theme',
        project_description: 'A light-aquamarine, cyberpunk-inspired theme for Visual Studio Code.',
        project_techstack: [],
        project_link: "https://cyberpunk-aquamarine-theme.netlify.app/",
        project_screenshot: '/assets/projects/project-6.webp'
    }
]

const archivedProjectTableHeader = ['year', 'project', 'built using', 'link']

const archivedProjectTableData = [
    {
        project_id: 'td1',
        project_year: 2025,
        project_title: 'My Next.js Resume',
        project_techstack: ['Next.js', 'Tailwind CSS', 'Netlify'],
        project_link: 'cv.jeremyerikleong.com',
    },
    {
        project_id: 'td2',
        project_year: 2025,
        project_title: 'Apple Demo Website',
        project_techstack: ['React.js', 'Tailwind CSS', 'GSAP', 'Three.js', 'Netlify'],
        project_link: 'react-gsap-iphone-website-demo.netlify.app',
    },
    {
        project_id: 'td3',
        project_year: 2025,
        project_title: 'Anime List',
        project_techstack: ['React.js', 'Tailwind CSS', 'Appwrite', 'Vercel'],
        project_link: 'react-anime-list-lime.vercel.app',
    },
    {
        project_id: 'td4',
        project_year: 2025,
        project_title: 'Talent Weave',
        project_techstack: ['HTML', 'CSS', 'Bootstrap 5', 'JavaScript', 'Swiper', 'AOS', 'Netlify'],
        project_link: 'talent-weave-demo.netlify.app',
    },
    {
        project_id: 'td5',
        project_year: 2024,
        project_title: 'Pokédex Demo',
        project_techstack: ['HTML', 'SCSS', 'JavaScript', 'Netlify'],
        project_link: 'pokedex-demo-v2.netlify.app',
    },
    {
        project_id: 'td6',
        project_year: 2023,
        project_title: 'Luxberry Training',
        project_techstack: ['HTML', 'CSS', 'Bootstrap 5', 'JavaScript'],
        project_link: 'www.luxberrytraining.com',
    },
    {
        project_id: 'td7',
        project_year: 2022,
        project_title: 'Music Player',
        project_techstack: ['HTML', 'SCSS', 'JavaScript', 'Github Page'],
        project_link: 'jeremyerikleong.github.io/music-player',
    },
    {
        project_id: 'td8',
        project_year: 2022,
        project_title: 'Wordle JS',
        project_techstack: ['HTML', 'SCSS', 'JavaScript', 'Netlify'],
        project_link: 'simple-wordle-js.netlify.app',
    },
    {
        project_id: 'td9',
        project_year: 2022,
        project_title: 'Simon',
        project_techstack: ['HTML', 'SCSS', 'jQuery', 'Netlify'],
        project_link: 'simon-game-classic.netlify.app',
    },
    {
        project_id: 'td10',
        project_year: 2022,
        project_title: 'My Portfolio (v1)',
        project_techstack: ['HTML', 'SCSS', 'JavaScript', 'Parcel', 'Netlify'],
        project_link: 'v1.jeremyerikleong.com',
    }
]

export { workExperiences, listOfProjects, archivedProjectTableHeader, archivedProjectTableData };