import React from "react";

import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function SocialMedia() {
    return (
        <div className="app__social">
            <a href="https://github.com/daniportela" target="_blank" rel="noopener noreferrer">
                <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/daniel-portela/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
            </a>
        </div>
    );
};