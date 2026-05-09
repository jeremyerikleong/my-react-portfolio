import HrefLink from "./HrefLink";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div id="footer" className="footer-text">
            ©{currentYear} Jeremy Erik Leong. This project was developed using{" "}
            <HrefLink href="https://react.dev/">React.js</HrefLink>,{" "}
            <HrefLink href="https://sass-lang.com/">SCSS</HrefLink>, and deployed via{" "}
            <HrefLink href="https://www.netlify.com/">Netlify</HrefLink>. Special thanks to{" "}
            <HrefLink href="https://brittanychiang.com/">Brittany Chiang</HrefLink> for her inspirational design.
        </div>
    );
}

export default Footer;