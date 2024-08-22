import { motion} from 'framer-motion';
import ArtoriasCanvas from '../components/canvas/Artorias';

const Hobbies = () => {
    return (
        <section className="w-5/6 mx-auto">
            <div className="text-center mb-8 text-heading-col">
                <h1 className="font-bold text-5xl">More about me</h1>
                <p className="mt-4 text-lg">Hobbies</p>
            </div>

            <div className="w-full">
                <article className="flex flex-row w-2/6">
                    <ArtoriasCanvas />
                    <div className="flex flex-col items-center justify-center w-full h-full">
                        <h3 className="mb-4 w-[400px] text-center text-heading-col font-semibold">Video Games</h3>
                        <p className="w-[400px] text-center text-text-col">I like to play games</p>
                    </div>
                </article>

                <article className="flex flex-row w-2/6">
                    {/*Canvas here*/}
                    <div className="flex flex-col items-center justify-center w-full h-full">
                        <h3 className="mb-4 w-[400px] text-center text-heading-col font-semibold">Video Games</h3>
                        <p className="w-[400px] text-center text-text-col">I like to play games</p>
                    </div>
                </article>

                <article className="flex flex-row w-2/6">
                    {/*Canvas here*/}
                    <div className="flex flex-col items-center justify-center w-full h-full">
                        <h3 className="mb-4 w-[400px] text-center text-heading-col font-semibold">Video Games</h3>
                        <p className="w-[400px] text-center text-text-col">I like to play games</p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Hobbies;