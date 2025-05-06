import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Gathering() {
  const steps = [
    {
      number: "01",
      title: "Conduct workshops and interviews",
      position: "top-[50px] left-16 rotate-[6.82deg]",
    },
    {
      number: "02",
      title: "Create a product backlog or requirements document",
      position: "top-[230px] right-16 rotate-[-9.9deg]",
    },
    {
      number: "03",
      title: "Define user stories with acceptance criteria",
      position: "top-[480px] left-16 rotate-[6.82deg]",
    },
    {
      number: "04",
      title: "Prioritize features",
      position: "top-[730px] right-16 rotate-[-9.9deg]",
    },
  ];

  // Animation controls
  const controls = useAnimation();
  const lineControls = useAnimation();

  // Reference for the container element
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Start animations when component comes into view
  useEffect(() => {
    if (inView) {
      // Animate cards sequentially
      controls.start(i => ({
        opacity: 1,
        x: 0,
        transition: {
          delay: i * 0.4,
          duration: 0.5,
          ease: "easeOut"
        }
      }));

      // Animate lines sequentially with delay
      lineControls.start(i => ({
        scaleY: 1,
        opacity: 1,
        transition: {
          delay: i * 0.4 + 0.2,
          duration: 0.6,
          ease: "easeOut"
        }
      }));
    }
  }, [controls, lineControls, inView]);

  return (
    <div ref={ref} className="relative md:w-3/4 bg-[#F6F6F9] rounded-[30px] overflow-hidden">
      {/* Process cards */}
      {steps.map((step, index) => (
        <div key={index}>
          <motion.div
            className={`absolute ${step.position} z-10 w-[336px] bg-white shadow-xl rounded-[30px] px-[40px] py-[30px]`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            custom={index}
            animate={controls}
          >
            <div className="font-normal text-[32px] text-center mb-5">{step.number}</div>
            <div className="bg-gradient-to-r from-[#C0AEFE] via-[#6D39F3] to-[#3956EB] text-white py-[25px] px-[34px] rounded-[26px] font-normal text-[24px]">{step.title}</div>
          </motion.div>

          {/* Connecting lines - with original positioning */}
          {index === 0 && (
            <motion.div
              className="absolute top-44 h-[100px] overflow-hidden left-44"
              initial={{ opacity: 0, scaleY: 0, originY: 0 }}
              custom={index}
              animate={lineControls}
            >
              <img src="/svgs/progress/3.svg" alt="" />
            </motion.div>
          )}

          {index === 1 && (
            <motion.div
              className="absolute top-44 h-[320px] overflow-hidden left-44"
              initial={{ opacity: 0, scaleY: 0, originY: 0 }}
              custom={index}
              animate={lineControls}
            >
              <img src="/svgs/progress/3.svg" alt="" />
            </motion.div>
          )}

          {index === 2 && (
            <motion.div
              className="absolute top-44  overflow-hidden left-44"
              initial={{ opacity: 0, scaleY: 0, originY: 0 }}
              custom={index}
              animate={lineControls}
            >
              <img src="/svgs/progress/3.svg" alt="" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}