import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const links = [
    {
        title: "Our Services",
        link: "/"
    },
    {
        title: "Our Process",
        link: "/"
    },
    {
        title: "Contact Us",
        link: "/"
    }
];

export const NavBar = () => {
    // State to trigger animation
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        setIsVisible(true);
    }, []);

    return (
        <motion.div
            className='bg-transparent w-full flex items-center justify-between py-[20px]'
            // initial={{ y: -100 }}
            // animate={{ y: isVisible ? 0 : -100 }} 
            // transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className='flex items-center gap-2'>
                <img src={`/svgs/logo.svg`} alt="Logo" className='h-[35px] w-[35px]' />
                <h1 className='text-xl Plus-Jakarta-Sans font-[700] text-[28.77px]'>JuTech</h1>
            </div>
            <div className='hidden md:flex items-center gap-[32px]'>
                {links.map((item, idx) => (
                    <Link key={idx} to={item.link} className='font-[400] whitespace-nowrap'>
                        {item.title}
                    </Link>
                ))}
            </div>
        </motion.div>
    );
};
