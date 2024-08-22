const Contact = () => {
    //const [email, setEmail] = useState('');
    //const [message, setMessage] = useState('');

    return (
        <section className="flex flex-col items-center justify-center h-screen w-5/6 mx-auto">
            <div className="text-center mb-12 text-heading-col">
                <h1 className="font-bold text-5xl">Feel free to reach out</h1>
            </div>
                
            <form className="flex flex-col gap-5">
                <input type="text" placeholder="Your Name" alt="your-name" className="text-text-col bg-transparent"/>
                <input type="email" placeholder="Your Email" alt="your-email" className="text-text-col bg-transparent"/>
                <textarea placeholder="Message" alt="email-message" className="text-text-col bg-transparent"/>
                <button type="submit" className="text-text-col bg-transparent">Send message</button>
            </form>

            
        </section>
    );
};

export default Contact;