import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Planning() {
    const data = [
        {
            id: "01",
            title: "Conduct workshops and interviews.",
        },
        {
            id: "02",
            title: "Design system architecture and tech stack.",
        },
        {
            id: "03",
            title: "Define user stories with acceptance criteria.",
        },
        {
            id: "04",
            title: "Prioritize features.",
        },
    ];

    // Track which cards are visible
    const [visibleCount, setVisibleCount] = useState(0);

    useEffect(() => {
        if (visibleCount < data.length) {
            const timer = setTimeout(() => {
                setVisibleCount((prev) => prev + 1);
            }, 400); // adjust speed as needed
            return () => clearTimeout(timer);
        }
    }, [visibleCount, data.length]);

    // Animation for each card
    const cardVariants = {
        hidden: { x: 200, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 80, damping: 18 } },
    };

    return (
        <div className="relative md:w-3/4 bg-[#F6F6F9] rounded-[30px] overflow-hidden flex items-center justify-center">
            <div className="w-full overflow-hidden z-10">
                <div className="flex w-fit -translate-x-48 items-center gap-[45px]">
                    {data.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className={`py-[37px] ${(idx % 2 !== 0) ? "w-[413px] mb-32 h-[500px] bg-gradient-to-b from-[#C0AEFE] via-[#6D39F3] to-[#3956EB]" : "w-[368px] mt-32 h-[446px] bg-white"} rounded-[37px] px-[43px] flex flex-col justify-between shadow-md`}
                            variants={cardVariants}
                            initial="hidden"
                            animate={visibleCount > idx ? "visible" : "hidden"}
                            transition={{ delay: idx * 0.25 }}
                        >
                            <div>
                                <h1 className={`font-normal ${(idx % 2 === 0) ? "text-black " : "text-white"} text-[40px]`}>{item.id}</h1>
                            </div>
                            <div>
                                <h1 className={`font-normal ${(idx % 2 === 0) ? "text-[#3956EB] " : "text-white"} text-[40px]`}>{item.title}</h1>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className=" absolute -bottom-10 right-0 left-0">
                <img src="/gradients/gradient2.svg" className="w-full" alt="" />
            </div>
        </div>
    );
}
