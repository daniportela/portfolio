import React, { useState, useEffect, useRef } from "react";
import { IoLanguage } from "react-icons/io5";
import i18next from "i18next";

export default function ChangeLanguage() {
    const [hover, setHover] = useState(false);
    const buttonRef = useRef(null);

    function handleOutsideClick(e) {
        if (!buttonRef.current.contains(e.target)) {
            setHover(false);
        } else {
            setHover(true);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick, true);
    }, [])
    

    function handleLanguageChangeToSpanish() {
        i18next.changeLanguage('es', (err, t) => {
            if (err) return console.log('something went wrong loading', err);
            t('key');
        });
    };

    function handleLanguageChangeToEnglish() {
        i18next.changeLanguage('en', (err, t) => {
            if (err) return console.log('something went wrong loading', err);
            t('key');
        });
    };

    return (
        <button
            ref={buttonRef}
            className="app__change-language"
        >
            <IoLanguage />

            {hover && (
                <div className="app__change-language-widget">
                    <p onClick={handleLanguageChangeToSpanish}>Español</p>
                    <hr/>
                    <p onClick={handleLanguageChangeToEnglish}>English</p>
                </div>
            )}
        </button>
    );
};