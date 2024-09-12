import React, {useEffect, useState} from 'react';
import {Link} from 'react-scroll';
import {logo, github, linkedin, menu, menuClose} from '../assets';


const Nav = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={"w-full flex items-center py-5 fixed top-0 z-10 text-heading-col font-bold"}>
            <div className={"w-full flex justify-between items-center max-w-7xl mx-auto"}>
                <Link to="Hero" activeClass="active" spy={true} smooth={true} duration={500} className="flex items-center gap-2 cursor-pointer hover:text-custom-blue">
                    <img src={logo} alt="logo" className="w-12 h-12 object-contain"/>
                    <p className="text-[14px] font-bold">Aaron Joseph Warsop <span className="block text-[12px]">| Entry Level Developer</span></p>
                </Link>
                
                <ul className="hidden sm:flex flex-row gap-10 text-[14px]">
                    <li className="cursor-pointer hover:text-custom-blue"><Link to="Portfolio" activeClass="active" spy={true} smooth={true} duration={500} offset={-100}>Portfolio</Link></li>
                    <li className="cursor-pointer hover:text-custom-blue"><Link to="Hobbies" activeClass="active" spy={true} smooth={true} duration={500} offset={-100}>About</Link></li>
                    <li className="cursor-pointer hover:text-custom-blue"><Link to="Contact" activeClass="active" spy={true} smooth={true} duration={500}>Contact</Link></li>
                </ul>

                <ul className="sm:flex hidden gap-5 mx-5">
                    <li>
                        <a href="https://github.com/aaronwarsop" target="_blank" rel="noopener noreferrer"><img className="h-5 w-8" src={github} alt="github-logo"></img></a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/aaron-warsop-9ba251240/" target="_blank" rel="noopener noreferrer"><img className="h-5 w-8" src={linkedin} alt="linkedin-logo"></img></a>
                    </li>
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img src={toggle ? menuClose: menu} alt="mobile-menu" className="w-[28px] height-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)}></img>

                    <div className={`${!toggle ? "hidden" :"flex"} p-6 bg-[#242424] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

                    <ul className="flex justify-end items-start flex-col gap-4 text-heading-col">
                        <li className="cursor-pointer"><Link to="Portfolio" activeClass="active" spy={true} smooth={true} duration={500} onClick={() => setToggle(!toggle)}>Portfolio</Link></li>
                        <li className="cursor-pointer"><Link to="Experience" activeClass="active" spy={true} smooth={true} duration={500} onClick={() => setToggle(!toggle)}>Experience</Link></li>
                        <li className="cursor-pointer"><Link to="Hobbies" activeClass="active" spy={true} smooth={true} duration={500} onClick={() => setToggle(!toggle)}>Hobbies</Link></li>
                        <li className="cursor-pointer"><Link to="Contact" activeClass="active" spy={true} smooth={true} duration={500} onClick={() => setToggle(!toggle)}>Contact</Link></li>
                        <ul className="flex">
                            <li>
                                <a href="https://github.com/aaronwarsop" target="_blank" rel="noopener noreferrer" onClick={() => setToggle(!toggle)}><img className="h-5 w-8" src={github} alt="github-logo"></img></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/aaron-warsop-9ba251240/" target="_blank" rel="noopener noreferrer" onClick={() => setToggle(!toggle)}><img className="h-5 w-8" src={linkedin} alt="linkedin-logo"></img></a>
                            </li>      
                        </ul>
                        
                    </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;