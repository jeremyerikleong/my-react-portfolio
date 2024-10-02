import { v4 as uuid } from 'uuid';

function SocialMedia(){
    const socialMediaArr = [
        {
            id: '1',
            platform: 'Behance',
            url: 'https://www.behance.net/jeremyerikd59f',
            icon: 'fa-behance'
        },
        {
            id: '2',
            platform: 'Codepen',
            url: 'https://codepen.io/JeremyL95',
            icon: 'fa-codepen'
        },
        {
            id: '3',
            platform: 'Github',
            url: 'https://github.com/JeremyL95',
            icon: 'fa-github'
        },
        {
            id: '4',
            platform: 'Linkedin',
            url: 'https://www.linkedin.com/in/jeremyerikleong95/',
            icon: 'fa-linkedin'
        },
        {
            id: '5',
            platform: 'Twitter',
            url: 'https://twitter.com/JeremyErikLeong',
            icon: 'fa-x-twitter'
        },
    ]

    return(
        <ul className="social-media-container">
            {socialMediaArr && socialMediaArr.map(socialMedia =>{
                return <li className="social-media-icon" key={uuid()}>
                            <a href={socialMedia.url} target="_blank" aria-label={socialMedia.platform}>
                                <i className={'fab fa-xl ' + socialMedia.icon}></i>
                            </a>
                        </li>
                })
            }
        </ul>
    )
}

export default SocialMedia;