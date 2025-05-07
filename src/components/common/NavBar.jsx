// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const links = [
//   { title: "Our Services", link: "/" },
//   { title: "Our Process", link: "/" },
//   { title: "Contact Us", link: "/" },
// ];

// export const NavBar = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <motion.div
//       className="bg-transparent w-full flex items-center justify-between py-[20px]"
//       initial={{ y: -40, opacity: 0 }}
//       animate={{ y: isVisible ? 0 : -40, opacity: isVisible ? 1 : 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       <div className="flex items-center gap-2">
//         <img src={`/svgs/logo.svg`} alt="Logo" className="h-[35px] w-[35px]" />
//         <h1 className="text-xl Plus-Jakarta-Sans font-[700] text-[28.77px]">
//           JuTech
//         </h1>
//       </div>

//       <div className="hidden md:flex items-center gap-[32px]">
//         {links.map((item, idx) => (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 * idx, duration: 0.4 }}
//           >
//             <Link
//               to={item.link}
//               className="group relative font-[400] whitespace-nowrap text-black"
//             >
//               <span>{item.title}</span>
//               <motion.span
//                 className="absolute left-0 -bottom-1 h-[2px] bg-[#6D39F3] w-full origin-left scale-x-0 group-hover:scale-x-100"
//                 transition={{ duration: 0.3 }}
//               />
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { title: "Our Services", link: "/" },
  { title: "Our Process", link: "/" },
  { title: "Contact Us", link: "/" },
];

export const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      className="bg-transparent w-full flex items-center justify-between py-[20px]"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -40, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img src="/svgs/logo.svg" alt="Logo" className="h-[35px] w-[35px]" />
        <h1 className="text-xl Plus-Jakarta-Sans font-[700] text-[28.77px]">
          JuTech
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-[32px]">
        {links.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.4 }}
          >
            <motion.div whileHover="hover" className="relative">
              <Link
                to={item.link}
                className="font-[400] whitespace-nowrap text-black relative px-0 pb-1 underline-animation"
              >
                {item.title}
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
