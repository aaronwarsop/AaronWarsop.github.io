import { motion} from 'framer-motion';
import ArtoriasCanvas from '../components/canvas/Artorias';

const Hobbies = () => {
    return (
        <section className="flex flex-col justify-center items-center h-screen w-5/6 mx-auto">
            <div className="text-center">
                <h1>More about me</h1>
                <p>Hobbies</p>
            </div>

            <article className="flex">
                <div className="flex-shrink-0 w-full">
                    <ArtoriasCanvas />
                    <h3>Video Games</h3>
                    <p>I like to play games</p>
                </div>
            </article>

            <article>
                <div className="">
                        
                </div>
            </article>

            <article>
                <div className="">
                        
                </div>
            </article>


            
        </section>
    );
}

export default Hobbies;