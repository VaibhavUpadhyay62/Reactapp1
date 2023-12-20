const Contact = () => {
    return(
        <div className="contact">
            <main>
                <h1>Contact Page</h1>

                <form >
                    <div>
                        <label>Name</label>
                        <input type="text" required placeholder="Abc"/>
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="email" required placeholder="Abc@gmail.com"/>
                    </div>

                    <div>
                        <label>Message</label>
                        <input type="text" required placeholder="Tell me something to improve about this website"/>
                    </div>

                    <button type="submit">Send</button>
                </form>
            </main>

        </div>
    )
}

export default Contact