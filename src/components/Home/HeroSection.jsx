import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  // Track scroll position for parallax effects
  const { scrollY } = useScroll();

  return (
    <div className="md:h-[calc(100vh - 20px)] h-fit relative md:static">
      <motion.img
        src={`/svgs/Hero.svg`}
        alt="Logo"
        className="absolute hidden md:block right-0 md:-top-50 top-0 md:left-30 left-0 -z-20"
        initial={{ top: -200, left: 120, opacity: 0 }}
        animate={{
          top: [-200, -100, -200],
          left: [120, 100, 120],
          opacity: 1,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: [0.43, 0.13, 0.23, 0.96],
          opacity: { duration: 1 },
        }}
      />

      <motion.img
        src={`/svgs/GradientLine.svg`}
        alt="Logo"
        className="w-full hidden md:block object-cover absolute md:top-40 bottom-0 right-0 -z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          y: useTransform(scrollY, [0, 200], [0, 15]), // Subtle parallax on scroll
        }}
      />

      <div className="md:w-[1013px] md:h-[585px] h-fit md:mt-20 mt-10">
        <motion.h1
          className="font-medium text-5xl md:text-[140px] text-[#18191C] md:leading-[140px] leading-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1], // Custom easing
          }}
          style={{
            y: useTransform(scrollY, [0, 300], [0, -30]), // Parallax effect on scroll
          }}
        >
          Build Beyond{" "}
          <motion.span
            className="bg-gradient-to-r from-[#C0AEFE] via-[#6D39F3] to-[#3956EB] bg-clip-text text-transparent inline-block"
            style={{
              backgroundSize: "200% 100%",
            }}
            animate={{
              backgroundPosition: ["0% center", "100% center", "0% center"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Limits
          </motion.span>
        </motion.h1>

        <div className="flex items-center justify-between">
          <div />
          <div className="md:w-[40%] mt-5 md:mt-10">
            <motion.p
              className="font-normal text-[18px] leading-[28px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              style={{
                y: useTransform(scrollY, [0, 300], [0, -15]), // Subtle parallax
              }}
            >
              We provide advanced software and integrated technology solutions
              to optimize operations, enhance efficiency, and drive sustainable
              growth.
            </motion.p>

            <motion.button
              className="py-[14px] cursor-pointer px-[23px] bg-white border border-[#0C0E121F] rounded-[11px] font-normal text-[23px] md:mt-[40px] mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{
                scale: 1.02,
                borderColor: "#6D39F3",
                boxShadow: "0 4px 12px rgba(109, 57, 243, 0.15)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
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
