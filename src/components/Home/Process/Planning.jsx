import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Planning() {
  const data = [
    { id: "01", title: "Conduct workshops and interviews." },
    { id: "02", title: "Design system architecture and tech stack." },
    { id: "03", title: "Define user stories with acceptance criteria." },
    { id: "04", title: "Prioritize features." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [data.length]);

  const getCard = (offset) => {
    const index = (currentIndex + offset + data.length) % data.length;
    return data[index];
  };

  return (
    <div className="relative md:w-3/4 bg-[#F6F6F9] rounded-[30px] overflow-hidden flex items-center justify-center">
      <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden z-10">
        {[-1, 0, 1].map((offset) => {
          const card = getCard(offset);
          const isActive = offset === 0;
          const marginTopClass = isActive ? "" : "mt-10";

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.8, x: offset * 500 }}
              animate={{
                opacity: isActive ? 1 : 0.8,
                scale: isActive ? 1 : 0.9,
                x: offset * 460,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`absolute ${marginTopClass} ${
                isActive
                  ? "bg-gradient-to-b from-[#C0AEFE] via-[#6D39F3] to-[#3956EB]"
                  : "bg-white"
              } w-[413px] h-[500px] rounded-[37px] px-[43px] py-[37px] flex flex-col justify-between shadow-md`}
              style={{ zIndex: isActive ? 10 : 1 }}
            >
              <div>
                <h1
                  className={`font-normal text-[40px] ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  {card.id}
                </h1>
              </div>
              <div>
                <h1
                  className={`font-normal text-[40px] ${
                    isActive
                      ? "text-white"
                      : "bg-gradient-to-r from-[#C0AEFE] via-[#6D39F3] to-[#3956EB] bg-clip-text text-transparent"
                  }`}
                >
                  {card.title}
                </h1>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Gradient background */}
      <div className="absolute -bottom-10 right-0 left-0 z-0">
        <img src="/gradients/gradient2.svg" className="w-full" alt="" />
      </div>
    </div>
  );
}