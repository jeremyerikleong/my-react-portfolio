import { Link } from 'react-scroll';

const navItems = [
    {
        title: 'About',
        to: "#about"
    },
    {
        title: 'Experience',
        to: "#experience"
    },
    {
        title: 'Projects',
        to: "#projects"
    }
]

function Navbar(){
    return(
        <nav className="navbar-container" role="navigation">         
            <ul className="nav-links">
                {navItems && navItems.map(navItem => {
                    return (<li key={navItem.title}>
                        <Link to={navItem.to} href={navItem.to} spy={true} smooth={true} offset={-80} duration={0} className="nav-anchor" activeClass="active">
                            <span className="nav-line"></span>
                            {navItem.title}
                        </Link>
                    </li>)
                    }) 
                }
            </ul>
        </nav>
    )
}

export default Navbar;
