const Portfolio = () => {
    return (
        <section className="flex flex-col items-center w-5/6 mx-auto">
            <div className="text-center mb-8 text-heading-col">
                <h1 className="font-bold text-5xl">Portfolio</h1>
                <p className="mt-4 text-lg">Take a look at some of the projects I have worked on!</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <a href="" className="block">
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

                <a href="" className="block">
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

                <a href="" className="block">
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

                <a href="" className="block">
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