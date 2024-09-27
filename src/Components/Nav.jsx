import React, { useState } from 'react';
import { LinkedIn, GitHub, Instagram, Twitter, Menu, Close } from '@mui/icons-material';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className='py-2 mb-10'>
                <div className='h-10vh flex justify-between z-50 text-c6 lg:py-5 px-4 sm:px-10 md:px-20 py-4 flex-1'>
                    <div className="flex flex-shrink-0 items-center">
                        <p className='text-xl'>Bogdan Blagojević</p>
                    </div>
                    <div className='hidden lg:flex flex-wrap lg:flex-1 items-center justify-end font-normal'>
                        <ul className='flex gap-8 mr-16 text-[20px] lg:text-[25px] py-1'>
                            <li>
                                <a
                                    className="inline-flex items-center justify-center w-10 h-10 bg-transparent border-2 border-c4 rounded-full text-2xl text-c6 no-underline hover:bg-c4 hover:text-c5"
                                    href="https://www.linkedin.com/in/bogdan-blagojevi%C4%87-379062243/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <LinkedIn />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="inline-flex items-center justify-center w-10 h-10 bg-transparent border-2 border-c4 rounded-full text-2xl text-c6 no-underline hover:bg-c4 hover:text-c5"
                                    href="https://github.com/BogdanBlagojevic"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <GitHub />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="inline-flex items-center justify-center w-10 h-10 bg-transparent border-2 border-c4 rounded-full text-2xl text-c6 no-underline hover:bg-c4 hover:text-c5"
                                    href="https://www.instagram.com/bogdan_blagojevic/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Instagram />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="inline-flex items-center justify-center w-10 h-10 bg-transparent border-2 border-c4 rounded-full text-2xl text-c6 no-underline hover:bg-c4 hover:text-c5"
                                    href="https://x.com/Bogdansrb1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Twitter />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:hidden flex items-center'>
                        <button onClick={toggleMenu} className='text-c6 text-3xl'>
                            {isOpen ? <Close /> : <Menu />}
                        </button>
                    </div>
                </div>

              
                {isOpen && (
                    <div className='lg:hidden flex flex-col items-center'>
                        <ul className='flex flex-col gap-4 text-[20px] py-4'>
                            <li>
                                <a
                                    className="inline-flex items-center justify-center w-10 h-10 bg-transparent border-2 border-c4 rounded-full text-2xl text-c6 no-underline hover:bg-c4 hover:text-c5"
                                    href="https://www.linkedin.com/in/bogdan-blagojevi%C4%87-379062243/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <LinkedIn />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="inline-flex items-center justify-center w-10 h-10 bg-transparent border-2 border-c4 rounded-full text-2xl text-c6 no-underline hover:bg-c4 hover:text-c5"
                                    href="https://github.com/BogdanBlagojevic"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <GitHub />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="inline-flex items-center justify-center w-10 h-10 bg-transparent border-2 border-c4 rounded-full text-2xl text-c6 no-underline hover:bg-c4 hover:text-c5"
                                    href="https://www.instagram.com/bogdan_blagojevic/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Instagram />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="inline-flex items-center justify-center w-10 h-10 bg-transparent border-2 border-c4 rounded-full text-2xl text-c6 no-underline hover:bg-c4 hover:text-c5"
                                    href="https://x.com/Bogdansrb1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Twitter />
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Nav;
