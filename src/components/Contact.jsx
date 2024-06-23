const Contact = () => {
    //const [email, setEmail] = useState('');
    //const [message, setMessage] = useState('');

    return (
        <div id="contact" className="section">
            <h1>Please feel free to reach out!</h1>

            <form>
                <input type="email" placeholder="Your Email" alt="your-email"/>
                <textarea placeholder="Message" alt="email-message"/>
                <button type="submit">Send message</button>
            </form>
        </div>
    );
};

export default Contact;