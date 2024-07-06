import { motion} from 'framer-motion';
import ArtoriasCanvas from '../components/canvas/Artorias';

const Hobbies = () => {
    return (
        <section className="h-screen w-screen grid-cols-3 justify-center items-center">
            <div className="text-center">
                <h1>More about me</h1>
                <p>Hobbies</p>
            </div>

            <div className="">
                <ArtoriasCanvas />
                <h3>Video Games</h3>
                <p>I like to play games</p>
            </div>
        </section>
    );
}

export default Hobbies;