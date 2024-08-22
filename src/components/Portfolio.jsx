import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {JPX} from '../assets';

const Slideshow = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        appendDots: dots => (
            <div>
                <ul className="custom-dots -mt-32">{dots}</ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    const projects = [
        {
            title: "Vault",
            description: "Full-stack banking app built with TypeScript, Next.js, React.js, ",
            image: "https://via.placeholder.com/150",
        },
        {
            title: "Algorithm Visualiser",
            description: "Visualises various searching and sorting algorithms to help new programmers understand their mechanisms.",
            image: "https://via.placeholder.com/150",
        },
        {
            title: "Travel Buddy Finder",
            description: "Connect, plan, and organise trips with like-minded individuals.",
            image: "https://via.placeholder.com/150",
        },
    ];

    return (
        <div className="w-5/6 max-w-7xl mx-auto">
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <div key={index} className="p-4">
                        <img src={project.image} alt={project.title} className="w-full h-96 object-cover rounded-xl mx-auto"/>
                        <h3 className="text-xl font-bold mt-8 text-heading-col text-center">{project.title}</h3>
                        <p className="text-md mt-2 text-text-col text-center">{project.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

const Portfolio = () => {
    return (
        <section className="w-5/6 mx-auto">
            <div className="text-center mb-8 text-heading-col">
                <h1 className="font-bold text-7xl">Portfolio</h1>
            </div>

            <Slideshow />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">

                <a href="https://github.com/aaronwarsop/TravelBuddyFinder" target="_blank" className="block">
                    <article className="p-4 bg-[#112240] rounded-xl transform hover:scale-105 transition-transform duration-300">
                        <h2 className="font-bold text-heading-col text-lg">Travel Buddy Finder</h2>
                        <p className="mt-2 text-text-col text-sm">Web app created to make travelling a little less lonely for some. Form group trips and express interest in others to travel the world together! <span className="text-custom-blue">CRUD</span> operations to support users finding, creating, updating, and deleting trips, <span className="text-custom-blue">API</span> integration for weather and ID generation.</p>
                        
                        <ul className="flex flex-wrap mt-4 gap-2 text-[12px] text-custom-blue">
                            <li className="">JavaScript</li>
                            <li className="">Node.js</li>
                            <li className="">Express.js</li>
                            <li className="">React.js</li>
                            <li className="">MongoDB</li>
                            <li className="">API</li>
                        </ul>
                    </article>
                </a>

                <a href="https://github.com/aaronwarsop/BudFridges" target="_blank" className="block">
                    <article className="p-4 bg-[#112240] rounded-xl transform hover:scale-105 transition-transform duration-300">
                        <h2 className="font-bold text-heading-col text-lg">BudFridges</h2>
                        <p className="mt-2 text-text-col text-sm">Led a team of 5 as <span className="text-custom-blue">SCRUM Master</span> to create a RESTful, service-oriented architecture-based web app for a smart fridge in a restaurant. Involved permission access, <span className="text-custom-blue">CRUD</span> operations regarding stock quantites, temporary delivery driver access code generation, and more.</p>
                        
                        <ul className="flex flex-wrap mt-4 gap-2 text-[12px] text-custom-blue">
                            <li className="">JavaScript</li>
                            <li className="">Node.js</li>
                            <li className="">Express.js</li>
                            <li className="">React.js</li>
                            <li className="">MongoDB</li>
                            <li className="">API</li>
                        </ul>
                    </article>
                </a>

                <a href="https://www.kaggle.com/code/aaronwarsop2/jpx-stock-exchange" target="_blank" className="block">
                    <article className="p-4 bg-[#112240] rounded-xl transform hover:scale-105 transition-transform duration-300">
                        <h2 className="font-bold text-heading-col text-lg">JPX Stock Exchange Prediction</h2>
                        <p className="mt-2 text-text-col text-sm">Kaggle data science competition project using historical Japanese stock data and machine learning models to calculate portfolio's sharpe ratio. Model scored within the <span className="text-custom-blue">top 6%</span> of competitors. Created visualisations for additional data comprehension and to aid the data pre-processing phase.</p>
                        
                        <ul className="flex flex-wrap mt-4 gap-2 text-[12px] text-custom-blue">
                            <li className="">Python</li>
                            <li className="">Sci-kit learn</li>
                            <li className="">TensorFlow</li>
                            <li className="">Pandas</li>
                            <li className="">Plotly</li>
                            <li className="">NumPy</li>
                        </ul>
                    </article>
                </a>

                <a href="https://github.com/aaronwarsop/Burmese-Chatbot" target="_blank" className="block">
                    <article className="p-4 bg-[#112240] rounded-xl transform hover:scale-105 transition-transform duration-300">
                        <h2 className="font-bold text-heading-col text-lg">Chatbot</h2>
                        <p className="mt-2 text-text-col text-sm">Burmese chatbot created for stakeholders interested in learning the culuture of Myanmar (Burma). Incorporates a rich database and Wikipedia <span className="text-custom-blue">API</span> integration to satisfy any user queries about Myanmar. Options for text-to-speech and speech-to-text for extra user inclusivity and quality of life.</p>
                        
                        <ul className="flex flex-wrap mt-4 gap-2 text-[12px] text-custom-blue">
                            <li className="">Python</li>
                            <li className="">TensorFlow</li>
                            <li className="">CNN</li>
                            <li className="">NLP</li>
                        </ul>
                    </article>
                </a>
                <br></br>
                <br></br>
                {/* 
                <a href="" className="block">
                    <article className="p-4 bg-[#112240] rounded-xl transform hover:scale-105 transition-transform duration-300">
                        <h2 className="font-bold text-heading-col text-lg">Shoebox</h2>
                        <p className="mt-2 text-text-col text-sm">Burmese chatbot created for stakeholders interested in learning the culuture of Myanmar (Burma). Incorporates a rich database and Wikipedia API integration to satisfy any user queries about Myanmar. Options for text-to-speech and speech-to-text for extra user inclusivity and quality of life.</p>
                        
                        <ul className="flex mt-4 gap-2 text-[12px] text-custom-blue">
                            <li className="">C#</li>
                            <li className="">ASP.NET</li>
                            <li className="">JavaScript</li>
                            <li className="">MySQL</li>
                            <li className="">HTML</li>
                            <li className="">CSS</li>
                        </ul>
                    </article>
                </a>

                <a href="" className="block">
                    <article className="p-4 bg-[#112240] rounded-xl transform hover:scale-105 transition-transform duration-300">
                        <h2 className="font-bold text-heading-col text-lg">Sorting Algorithm Visualiser</h2>
                        <p className="mt-2 text-text-col text-sm">Created a program to visualise how various sorting algorithms work.</p>
                        
                        <ul className="flex mt-4 gap-2 text-[12px] text-custom-blue">
                            <li className="">C++</li>
                            <li className="">Algorithms</li>
                            <li className=""></li>
                            <li className=""></li>
                        </ul>
                    </article>
                </a>
            */}
            </div>
        </section>
    );
};

export default Portfolio;