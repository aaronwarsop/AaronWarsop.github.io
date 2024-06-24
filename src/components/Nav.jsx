import React, {useEffect, useState} from 'react';
import {Link} from 'react-scroll';
import {logo, github, linkedin} from '../assets';


const Nav = () => {
    const [active, setActive] = useState("");

    return (
        <nav className={"w-full flex items-center py-5 fixed top-0 z-10"}>
            <div className={"w-full flex justify-between items-center max-w-7xl mx-auto"}>
                <Link to="/" className="flex items-center gap-2"
                onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                }}>
                <img src={logo} alt="logo" className="w-12 h-12 object-contain"/>
                <p className="text-white text-[16px] font-bold cursor-pointer hidden sm:block">Aaron Joseph Warsop <span className="sm:block hidden text-[14px]">| Entry Level Developer</span></p>
                </Link>

                <ul className="hidden sm:flex flex-row gap-10 text-white">
                    <li className="cursor-pointer"><Link to="Portfolio" activeClass="active" spy={true} smooth={true} duration={500}>Portfolio</Link></li>
                    <li className="cursor-pointer"><Link to="Experience" activeClass="active" spy={true} smooth={true} duration={500}>Experience</Link></li>
                    <li className="cursor-pointer"><Link to="Hobbies" activeClass="active" spy={true} smooth={true} duration={500}>Hobbies</Link></li>
                    <li className="cursor-pointer"><Link to="Contact" activeClass="active" spy={true} smooth={true} duration={500}>Contact</Link></li>
                </ul>

                <ul className="flex gap-5">
                    <li>
                        <a href="https://github.com/aaronwarsop" target="_blank" rel="noopener noreferrer"><img className="h-5 w-5" src={github} alt="github-logo"></img></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/aaron-warsop-9ba251240/" target="_blank" rel="noopener noreferrer"><img className="h-5 w-5" src={linkedin} alt="linkedin-logo"></img></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;