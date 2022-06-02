import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <footer className="bg-black text-center text-white" id="footerName">
                Kristina V. Pang Portfolio | 2022
                <section id="contact-me">
                    <ul>
                        <li><a href="mailto:kvypang@gmail.com" target="_blank">E-Mail</a></li>
                        <li><a href="https://www.linkedin.com/in/kvpang/" target="_blank">LinkedIn</a></li>
                        <li><a href="https://github.com/KVPang" target="_blank">GitHub</a></li>
                    </ul>
                </section>
            </footer>
        </div>
    );
}
export default Footer;
