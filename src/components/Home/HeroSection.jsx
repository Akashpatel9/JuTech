import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
    // Track scroll position for parallax effects
    const { scrollY } = useScroll();
    
    return (
        <div className='h-[calc(100vh - 20px)] w-full'>
            <motion.img
                src={`/svgs/Hero.svg`}
                alt="Logo"
                className='absolute right-0 -top-50 left-30 -z-20'
                initial={{ top: -200, left: 120, opacity: 0 }}
                animate={{
                    top: [-200, -100, -200],
                    left: [120, 100, 120],
                    opacity: 1,
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: [0.43, 0.13, 0.23, 0.96], // Improved easing for more natural movement
                    opacity: { duration: 1 }
                }}
            />
            
            <motion.img 
                src={`/svgs/GradientLine.svg`} 
                alt="Logo" 
                className='w-full object-cover absolute top-40 right-0 -z-10'
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                    y: useTransform(scrollY, [0, 200], [0, 15]) // Subtle parallax on scroll
                }}
            />
            
            <div className='w-[1013px] min-h-[585px] mt-20'>
                <motion.h1
                    className='font-medium text-[140px] text-[#18191C] leading-[140px]'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 1, 
                        ease: [0.25, 0.1, 0.25, 1] // Custom easing
                    }}
                    style={{
                        y: useTransform(scrollY, [0, 300], [0, -30]) // Parallax effect on scroll
                    }}
                >
                    Build Beyond{' '}
                    <motion.span 
                        className='bg-gradient-to-r from-[#C0AEFE] via-[#6D39F3] to-[#3956EB] bg-clip-text text-transparent inline-block'
                        style={{ 
                            backgroundSize: '200% 100%'
                        }}
                        animate={{ 
                            backgroundPosition: ['0% center', '100% center', '0% center']
                        }}
                        transition={{ 
                            duration: 6, 
                            repeat: Infinity, 
                            repeatType: "reverse"
                        }}
                    >
                        Limits
                    </motion.span>
                </motion.h1>
                
                <div className='flex items-center justify-between'>
                    <div />
                    <div className='w-[40%] mt-14'>
                        <motion.p
                            className='font-normal text-[18px] leading-[28px]'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                            style={{
                                y: useTransform(scrollY, [0, 300], [0, -15]) // Subtle parallax
                            }}
                        >
                            We provide advanced software and integrated technology solutions to optimize operations, enhance efficiency, and drive sustainable growth.
                        </motion.p>
                        
                        <motion.button
                            className='py-[14px] cursor-pointer px-[23px] bg-white border-[1.47px] border-[#0C0E121F] rounded-[11px] font-normal text-[23px] mt-[40px]'
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ 
                                scale: 1.05,
                                borderColor: "#6D39F3",
                                boxShadow: "0 4px 12px rgba(109, 57, 243, 0.15)" 
                            }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ 
                                duration: 0.3, 
                                type: "spring", 
                                stiffness: 400,
                                damping: 10
                            }}
                        >
                            Book a Meeting
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;