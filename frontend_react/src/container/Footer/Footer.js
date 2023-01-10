import "./Footer.scss";
import React, { useState } from "react";

import images from "../../constants/images";
import AppWrapper from "../../wrapper/AppWrapper";
import MotionWrapper from "../../wrapper/MotionWrapper";
import { client } from "../../client";

function Footer() {
    const [formData, setFormData] = useState({name: "", email: "", message: ""});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData;

    function handleChangeInput(e) {
        const { name, value } = e.target;

        setFormData({...formData, [name]: value});
    };

    function handleSubmit() {
        setLoading(true);

        const contact = {
            _type: "contact",
            name: name,
            email: email,
            message: message
        };

        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
    };

    return (
        <>
            <h2 className="head-text">Chatea conmigo</h2>

            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email" />
                    <a href="mailto:hello@dani.com" className="p-text">danyportela96@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="mobile" />
                    <a href="tel: +12345566" className="p-text">+12345566</a>
                </div>
            </div>

            {!isFormSubmitted ?
            <div className="app__footer-form app__flex">
                <div className="app__flex">
                    <input
                        className="p-text"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={name}
                        onChange={handleChangeInput}
                    />
                </div>
                <div className="app__flex">
                    <input
                        className="p-text"
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={email}
                        onChange={handleChangeInput}
                    />
                </div>
                <div>
                    <textarea
                        className="p-text"
                        placeholder="Your message"
                        value={message}
                        name="message"
                        onChange={handleChangeInput}
                    />
                </div>
                <button
                    type="button"
                    className="p-text"
                    onClick={handleSubmit}
                >
                    {loading ? "Sending" : "Send message"}
                </button>
            </div>
            
            :

            <div>
                <h3 className="head-text">Gracias por contactarme!</h3>
            </div>
        }
        </>
    );
};

export default AppWrapper(
    MotionWrapper(Footer, "app__footer"),
    "contacto",
    "app__primarybg"
);