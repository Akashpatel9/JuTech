import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TechLogos from "./TechLogos";

const techLogos = [
  "/images/JS.png",
  "/images/AWS.png",
  "/images/AZORE.png",
  "/images/NODE.png",
  "/images/CSS.png",
  "/images/GO.png",
  "/images/FLUTTER.png",
  "/images/REACT.png",
  "/images/CPP.png",
  "/images/CSHARP.png",
  "/images/ANGULAR1.png",
  "/images/DART.png",
  "/images/KOTLIN.png",
  "/images/HTML.png",
  "/images/WOO.png",
];

const techLogoss = [
  "/images/JS.png",
  "/images/AWS.png",
  "/images/AZORE.png",
  "/images/NODE.png",
  "/images/CSS.png",
  "/images/GO.png",
  "/images/FLUTTER.png",
  "/images/REACT.png",
  "/images/CPP.png",
  "/images/CSHARP.png",
  "/images/ANGULAR1.png",
  "/images/DART.png",
  "/images/KOTLIN.png",
  "/images/HTML.png",
  "/images/WOO.png",
];

const CTASection = ({ isVisibleCTASection, setIsVisibleCTASection }) => {
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (isVisibleCTASection) {
      setTimeout(() => {
        setHovering(true);
      }, 1000);
    }
  }, [isVisibleCTASection]);

  const toggleForm = () => {
    console.log("clicked")
    setHovering((prev) => !prev);
    setIsVisibleCTASection(false);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#F6F6F9] rounded-[30px] md:pt-[105px] md:py-20 pt-10 pl-10 py-10 md:pl-[84px] mt-20 overflow-hidden"
    >
      {/* Text Section */}
      <div className="m:w-[839px]">
        <h2 className="md:text-[72px] text-2xl font-normal md:leading-20">
          <motion.span
            className="bg-gradient-to-r from-[#C0AEFE] via-[#6D39F3] to-[#3956EB] bg-clip-text text-transparent"
            style={{ backgroundSize: "200% 100%" }}
            animate={{
              backgroundPosition: ["0% center", "100% center", "0% center"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            Ready to start
          </motion.span>
          your <br />
          Project journey with us?
        </h2>
        <motion.button
          onClick={toggleForm}
          className="py-[10px] group px-[16px] md:mt-[32px] mt-6 bg-black rounded-[8px] text-white flex items-center gap-2"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="flex items-center gap-2">
            {" "}
            <svg
              className="mt-[2px]"
              width="16"
              height="16"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9415 12.8684L13.505 10.8804L13.4927 10.8748C13.2624 10.7763 13.0112 10.7367 12.7617 10.7598C12.5123 10.7828 12.2725 10.8676 12.0641 11.0066C12.0396 11.0228 12.016 11.0404 11.9935 11.0594L9.70131 13.0135C8.24915 12.3081 6.74991 10.8202 6.04455 9.38684L8.00148 7.05981C8.02031 7.03627 8.03821 7.01273 8.05516 6.9873C8.19117 6.77946 8.27369 6.54122 8.29538 6.29378C8.31707 6.04634 8.27725 5.79738 8.17947 5.56905V5.55774L6.18581 1.1137C6.05655 0.815416 5.83429 0.56694 5.5522 0.40536C5.27012 0.24378 4.94334 0.177764 4.62065 0.217165C3.34457 0.385083 2.17325 1.01177 1.32545 1.98018C0.477661 2.94859 0.0113732 4.1925 0.0136804 5.47958C0.0136804 12.957 6.09729 19.0406 13.5747 19.0406C14.8617 19.0429 16.1057 18.5766 17.0741 17.7288C18.0425 16.881 18.6692 15.7097 18.8371 14.4336C18.8766 14.111 18.8107 13.7843 18.6493 13.5023C18.4879 13.2202 18.2396 12.9979 17.9415 12.8684ZM13.5747 17.5338C10.3788 17.5303 7.31475 16.2592 5.05491 13.9993C2.79506 11.7395 1.52395 8.67548 1.52046 5.47958C1.51691 4.55997 1.84823 3.6705 2.45253 2.9773C3.05682 2.2841 3.89278 1.83456 4.80429 1.71264C4.80392 1.7164 4.80392 1.72018 4.80429 1.72394L6.78193 6.1501L4.83536 8.47995C4.81561 8.50268 4.79766 8.52693 4.78169 8.55246C4.63997 8.76993 4.55683 9.02031 4.54033 9.27935C4.52383 9.53839 4.57453 9.7973 4.68751 10.031C5.54072 11.776 7.29894 13.5211 9.06281 14.3733C9.29821 14.4853 9.55862 14.5342 9.8186 14.5154C10.0786 14.4966 10.3292 14.4106 10.546 14.266C10.5702 14.2497 10.5935 14.2321 10.6157 14.2132L12.9051 12.2601L17.3312 14.2424C17.3312 14.2424 17.3388 14.2424 17.3416 14.2424C17.2212 15.1552 16.7723 15.9929 16.079 16.5987C15.3857 17.2045 14.4954 17.5369 13.5747 17.5338Z"
                fill="white"
              />
            </svg>
            Let's Talk
          </span>
          <motion.span
            animate={{
              rotate: hovering ? 180 : 0,
              y: hovering ? 2 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            ↓
          </motion.span>
        </motion.button>
      </div>

      <motion.div
        className="absolute -bottom-10 right-0"
        animate={{
          opacity: hovering ? [1, 0, 1] : 1,
          scale: hovering ? [1, 0.9, 1] : 1,
        }}
        transition={{
          duration: 0.6,
          times: [0, 0.5, 1],
          ease: "easeInOut",
        }}
      >
        {!hovering ? (
          <svg
            className="md:w-[506px] md:h-[523px] w-full"
            viewBox="0 0 506 523"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_1_889)">
              <path
                d="M227 345.878C227 393.613 232.149 440.545 241.95 482.154C251.752 523.763 265.877 558.65 282.964 583.454C300.052 608.258 319.527 622.145 339.515 623.778C359.503 625.41 379.33 614.734 397.089 592.776C414.847 570.819 429.938 538.319 440.908 498.407C451.879 458.494 458.36 412.513 459.727 364.889C461.095 317.266 457.302 269.604 448.716 226.493"
                stroke="url(#paint0_linear_1_889)"
                stroke-opacity="0.4"
                stroke-width="200"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1_889"
                x="0.599998"
                y="0.073143"
                width="685.8"
                height="850.289"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="63.2"
                  result="effect1_foregroundBlur_1_889"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_889"
                x1="435.437"
                y1="210.255"
                x2="172.229"
                y2="265.12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3956EB" />
                <stop offset="0.313324" stop-color="#7B4FF7" />
                <stop offset="0.780691" stop-color="#4E8DF5" />
                <stop offset="1" stop-color="#641CFF" />
              </linearGradient>
            </defs>
          </svg>
        ) : (
          <svg
            width="506"
            height="392"
            viewBox="0 0 506 392"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_1_1124)">
              <path
                d="M227 293.368C227 319.95 232.149 346.084 241.95 369.255C251.752 392.425 265.877 411.852 282.964 425.664C300.052 439.477 319.527 447.21 339.515 448.119C359.503 449.028 379.33 443.083 397.089 430.856C414.847 418.628 429.938 400.531 440.908 378.305C451.879 356.08 458.36 330.474 459.727 303.955C461.095 277.435 457.302 250.895 448.716 226.888"
                stroke="url(#paint0_linear_1_1124)"
                stroke-opacity="0.4"
                stroke-width="200"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1_1124"
                x="0.599998"
                y="0.46035"
                width="685.8"
                height="674.15"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="63.2"
                  result="effect1_foregroundBlur_1_1124"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_1124"
                x1="435.437"
                y1="217.846"
                x2="194.546"
                y2="308.018"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#B31AEF" />
                <stop offset="0.313324" stop-color="#F6048D" />
                <stop offset="0.780691" stop-color="#F88C54" />
                <stop offset="1" stop-color="#FF7670" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </motion.div>

      {/* Tech logos */}
      {/* <motion.div
        className="absolute -top-40 bottom-0 right-10 flex flex-col gap-5 flex-wrap md:h-[596px] -rotate-45 items-center justify-center"
        animate={{
          x: hovering ? 40 : 0,
          opacity: hovering ? 0.4 : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        {techLogos.map((logo, idx) => (
          <motion.div
            key={idx}
            className="md:w-[100px] w-10 aspect-square"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                delay: idx * 0.1,
                duration: 0.3,
              },
            }}
          >
            <div className="rounded-full w-full rotate-90 aspect-square bg-[#F5F5F5] border-[4px] border-white flex items-center justify-center p-4">
              <img src={logo} className="w-full" alt="" />
            </div>
          </motion.div>
        ))}
      </motion.div> */}

      {/* ====================================== */}
      {/* Tech logos */}
      <motion.div
        className="absolute -top-20 md:-top-40 bottom-0 right-[-30px] flex flex-col gap-5 flex-wrap md:h-[596px] -rotate-45 items-center justify-center overflow-hidden"
        animate={{
          x: hovering ? 40 : 0,
          opacity: hovering ? 0.4 : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Scrolling container */}
        <motion.div
          className="flex flex-col gap-5"
          animate={{ y: ["0%", "50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {/* Duplicate logos exactly once for seamless scroll */}
          {[...techLogos, ...techLogos].map((logo, idx) => (
            <div key={idx} className="md:w-[90px] w-12 aspect-square">
              <div className="rounded-full w-full rotate-90 aspect-square bg-[#F5F5F5] border-[4px] border-white flex items-center justify-center md:p-4 p-2">
                <img src={logo} className="w-full" alt="" />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
      {/* ---------------- */}
      <motion.div
        className="absolute -top-60 md:-top-40 bottom-0 md:right-30 right-32 flex flex-col gap-5 flex-wrap md:h-[596px] -rotate-45 items-center justify-center overflow-hidden"
        animate={{
          x: hovering ? 40 : 0,
          opacity: hovering ? 0.4 : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Scrolling container */}
        <motion.div
          className="flex flex-col gap-5"
          animate={{ y: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {/* Duplicate logos exactly once for seamless scroll */}
          {[...techLogoss, ...techLogoss].map((logo, idx) => (
            <div key={idx} className="md:w-[90px] w-12 aspect-square">
              <div className="rounded-full w-full rotate-90 aspect-square bg-[#F5F5F5] border-[4px] border-white flex items-center justify-center md:p-4 p-2">
                <img src={logo} className="w-full" alt="" />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ===================================================== */}

      {/* Contact Form - Using AnimatePresence for enter/exit animations */}
      <AnimatePresence>
        {hovering && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: {
                height: {
                  duration: 0.5,
                },
                opacity: {
                  duration: 0.3,
                  delay: 0.2,
                },
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: {
                height: {
                  duration: 0.5,
                  delay: 0.2,
                },
                opacity: {
                  duration: 0.3,
                },
              },
            }}
            className="border-t-[2px] border-[#EAEAEA] flex items-start justify-between mt-20 pt-20 pb-20 overflow-hidden"
          >
            <motion.div
              className="w-1/2 pt-20"
              initial={{ x: -50, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.3,
                },
              }}
              exit={{
                x: -50,
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              <h1 className="font-normal text-[48px]">Contact Us</h1>
              <p className="text-[20px] w-2/3 font-normal text-[#0C0E12] mt-[15px]">
                The Future of Your Financial Solutions and Strategies is not
                just an exciting and transformative concept it represents a
                groundbreaking.
              </p>
            </motion.div>

            <motion.div
              className="w-1/2 p-10 space-y-6"
              initial={{ x: 50, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.3,
                },
              }}
              exit={{
                x: 50,
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              {["Enter Your Name", "Enter Your Email", "Contact number"].map(
                (placeholder, idx) => (
                  <motion.input
                    key={idx}
                    type={idx === 1 ? "email" : idx === 2 ? "tel" : "text"}
                    placeholder={placeholder}
                    className="bg-white rounded-[18px] w-full py-[23px] px-[31px] text-[22px] font-normal placeholder:text-[#939393]"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.3,
                        delay: 0.4 + idx * 0.1,
                      },
                    }}
                    exit={{
                      y: 20,
                      opacity: 0,
                      transition: {
                        duration: 0.2,
                        delay: (2 - idx) * 0.05,
                      },
                    }}
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 0 2px rgba(105, 57, 243, 0.3)",
                    }}
                    transition={{ duration: 0.2 }}
                  />
                )
              )}

              <motion.textarea
                placeholder="Message:"
                rows={4}
                className="bg-white rounded-[18px] w-full py-[23px] px-[31px] text-[22px] font-normal placeholder:text-[#939393] resize-none"
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                    delay: 0.7,
                  },
                }}
                exit={{
                  y: 20,
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                  },
                }}
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 0 2px rgba(105, 57, 243, 0.3)",
                }}
                transition={{ duration: 0.2 }}
              ></motion.textarea>

              <motion.button
                className="font-normal text-[16px] flex gap-2 items-center bg-black w-full rounded-[8px] py-[10px] px-[16px] text-white justify-center"
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
                variants={{
                  initial: { y: 20, opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: { duration: 0.3 },
                  },
                  hover: { scale: 1.03, backgroundColor: "#333" },
                  tap: { scale: 0.97 },
                }}
              >
                Submit
                <motion.div
                  variants={{
                    hover: {
                      x: [0, 5, 0],
                      transition: {
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    },
                  }}
                >
                  →
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CTASection;
