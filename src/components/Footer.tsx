import React from 'react';
import { FaLinkedin, FaGithub, FaAngellist, FaGlobe, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer w-full">
            <div className="container mx-auto px-4 py-6">
                <h2 className="text-xl font-bold mb-4">Contact Info</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <FaLinkedin className="mr-2" />
                            <a href="https://linkedin.com/in/david-verde-alvarez" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                linkedin.com/in/david-verde-alvarez
                            </a>
                        </li>
                        <li className="flex items-center">
                            <FaGithub className="mr-2" />
                            <a href="https://github.com/David-Verde" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                github.com/David-Verde (Personal)
                            </a>
                        </li>
                    </ul>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <FaAngellist className="mr-2" />
                            <a href="https://angel.co/u/david-verde" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                angel.co/u/david-verde (RSS Feed)
                            </a>
                        </li>
                        <li className="flex items-center">
                            <FaGlobe className="mr-2" />
                            <a href="https://portfolio-david-verde.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                portfolio-david-verde.netlify.app (Portfolio)
                            </a>
                        </li>
                    </ul>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <FaPhone className="mr-2" />
                            +593960144140 (Mobile)
                        </li>
                    </ul>
                </div>
            </div>
            <div className="created-by w-full bg-[#051f28] text-center py-4 mt-4">
                <p>Created by: David Verde Full Stack Developer</p>
            </div>
        </div>
    );
};

export default Footer;
