const Contact = () => {
    //const [email, setEmail] = useState('');
    //const [message, setMessage] = useState('');

    return (
        <section className="w-screen h-screen flex justify-center items-center">
            <div className="text-center">
                <h1>Feel free to reach out</h1>
                <br></br>
                <br></br>
                <form className="flex flex-col gap-5">
                    <input type="email" placeholder="Your Email" alt="your-email"/>
                    <textarea placeholder="Message" alt="email-message"/>
                    <button type="submit">Send message</button>
                </form>

            </div>
        </section>
    );
};

export default Contact;