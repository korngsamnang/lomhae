const Contact = () => {
    return (
        <section id="section-contacts">
            <div className="form">
                <div className="form-head">
                    <h2>Contact Us</h2>
                </div>
                <form action="#">
                    <div className="form-surname">
                        <label htmlFor="surname">Surname :</label>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            required
                        />
                        <br />
                    </div>
                    <div className="form-email">
                        <label htmlFor="email">&emsp;&emsp;Email :</label>
                        <input type="email" id="email" name="email" required />
                        <br />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
