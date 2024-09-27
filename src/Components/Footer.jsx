import React from 'react';
import { Mail as MailIcon, Phone as PhoneIcon } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer className='border-t-c4 text-c6 py-4 mt-10'>
            <div className='flex flex-col items-center justify-center text-center'>
                <p className='text-sm md:text-lg'>Contact me:</p>
                <div className='flex flex-col md:flex-row gap-4 mt-2'>
                    <a 
                        href="mailto:bogdanblagojevic23@gmail.com" 
                        className='flex items-center hover:text-c5 transition duration-300'
                    >
                        <MailIcon className='mr-2' />
                        <p className='text-lg md:text-xl'>Email: bogdanblagojevic23@gmail.com</p>
                    </a>
                    <a 
                        href="tel:+381644911628" 
                        className='flex items-center hover:text-c5 transition duration-300'
                    >
                        <PhoneIcon className='mr-2' />
                        <p className='text-lg md:text-xl'>Phone: +381 644 911 628</p>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
