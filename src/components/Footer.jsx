function Footer(){
    const currentYear = new Date().getFullYear();

    return(
        <div id="footer" className="footer-text">
            ©{currentYear} Jeremy Erik Leong. This project was developed using <a href="https://react.dev/" target="_blank"> React.js</a> and <a href="https://sass-lang.com/" target="_blank"> SCSS,</a> and deployed via <a href="https://www.netlify.com/" target="_blank"> Netlify</a>. Special thanks to <a href="https://brittanychiang.com/" target="_blank"> Brittany Chiang</a> for her inspirational design.
        </div>
    )
}

export default Footer;