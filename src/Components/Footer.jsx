import React from 'react';


const Footer = () => {
    return (
        <footer className='border-t-c4 text-c6 py-4 mt-10'>
            <div className='flex flex-col items-center justify-center text-center'>
                <p className='text-sm md:text-lg'>Contact me:</p>
                <div className='flex flex-col md:flex-row gap-4 mt-2'>
                    <a href="mailto:bogdanblagojevic23@gmail.com" className='flex items-center hover:text-c5 transition duration-300'>
                        <p className='text-lg md:text-xl'>Email: bogdanblagojevic23@gmail.com</p>
                    </a>
                    <a href="tel:+381644911628" className='flex items-center hover:text-c5 transition duration-300'>
                        <p className='text-lg md:text-xl'>Phone: +381 644 911 628</p>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
