import React from 'react';

function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-4 text-center w-full mt-auto overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-t from-black to-gray-900"></div>

            <p className="text-sm relative z-10">
                © Made by Mayank Kumar Jha |  
                <a href="mailto:iib2024010@iiita.ac.in" className="text-blue-400 hover:underline ml-1">
                    IIB2024010
                </a>
            </p>
        </footer>
    );
}

export default Footer;