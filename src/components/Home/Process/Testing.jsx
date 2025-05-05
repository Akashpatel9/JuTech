"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

const data = [
  { id: "01", title: "Conduct workshops and interviews." },
  { id: "02", title: "Design system architecture and tech stack." },
  { id: "03", title: "Define user stories with acceptance criteria." },
  { id: "04", title: "Prioritize features." },
];

export default function Testing() {
  const scrollRef = useRef(null);

  return (
    <div className="relative md:w-3/4 bg-[#F6F6F9] rounded-[30px] overflow-hidden">
      {data.map((item, index) => (
        <section
          key={item.id}
          className="h-screen flex items-center justify-center snap-start snap-always"
        >
          <motion.div
            className="relative w-[320px] h-[220px] bg-gradient-to-br from-[#7B5FFF] to-[#3956EB] text-white rounded-[24px] px-6 py-8 shadow-2xl flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[20px] font-medium">{item.id}</h1>
            <p className="text-[20px] font-medium">{item.title}</p>


          </motion.div>
        </section>
      ))}
    </div>
  );
}
