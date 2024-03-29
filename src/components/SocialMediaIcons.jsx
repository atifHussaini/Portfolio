import React from 'react';

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center items-center md:justify-start my-10 gap-7">
            <a className="hover:opacity-50 transition duration-500" href="https://linkedin.com/in/atif-hussaini/" target="_blank" rel="noreferrer">
                <img alt="linkedin-link" src="../assets/linkedin.png" className="h-9"/>
            </a>
            <a className="hover:opacity-50 transition duration-500" href="https://twitter.com/2weekatif" target="_blank" rel="noreferrer">
                <img alt="twitter-link" src="../assets/twitter.png" className="h-9"/>
            </a>
            <a className="hover:opacity-50 transition duration-500" href="https://github.com/atifhussaini" target="_blank" rel="noreferrer">
                <img alt="github-link" src="../assets/github.png" className="h-10"/>
            </a>
            <a className="hover:opacity-50 transition duration-500" href="https://facebook.com/ahussaini314" target="_blank" rel="noreferrer">
                <img alt="facebook-link" src="../assets/facebook.png" className="h-10"/>
            </a>
            <a className="hover:opacity-50 transition duration-500" href="https://instagram.com/atifhussaini_" target="_blank" rel="noreferrer">
                <img alt="instagram-link" src="../assets/instagram.png" className="h-10"/>
            </a>
        </div>
    );
}

export default SocialMediaIcons;