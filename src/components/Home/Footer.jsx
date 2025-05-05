import { Linkedin } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Footer() {
    return (
        <motion.footer 
            className="w-full py-12 relative overflow-hidden md:mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {/* Background decorative elements */}
            <motion.h1 
                className="absolute -right-12 md:-top-10 -bottom-20 font-[700] text-[200px] md:text-[450px] text-[#E3E0E0]/30 -z-10"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
            >
                JuTech
            </motion.h1>

            <div className="md:px-[90px] px-4 relative md:mt-10">
                <div className="flex flex-col md:flex-row items-start justify-between">
                    {/* Left side - Logo, tagline and social */}
                    <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div 
                            className="flex items-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <h2 className="text-[30px] flex items-center">
                                <motion.h1 
                                    className="text-[30px] font-[600]"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                >
                                    Ju
                                </motion.h1>
                                <motion.h1 
                                    className="font-[400] text-[#6D39F3]"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                >
                                    Tech
                                </motion.h1>
                            </h2>
                        </motion.div>
                        <motion.p 
                            className="text-[18px] font-[400] text-[#0A0A0A] w-[310px]"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            We build beyond limits, empowering businesses with innovative technology solutions for a smarter future.
                        </motion.p>
                    </motion.div>

                    {/* Right side - Contact info */}
                    <motion.div 
                        className="flex mt-10 items-start md:gap-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.div 
                            className="text-[16px] font-normal w-[239px] space-y-2"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            {["Singapore,", "MacPherson,", "72 Jin Gembira"].map((line, index) => (
                                <motion.p 
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                                >
                                    {line}
                                </motion.p>
                            ))}
                        </motion.div>
                        <motion.div 
                            className="text-[16px] font-normal space-y-2"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <motion.p 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                            >
                                +65 89009804
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                            >
                                <Link to="mailto:Hello@JuTech.co" className="hover:text-[#6D39F3] transition-colors duration-300">
                                    Hello@JuTech.co
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="flex space-x-4 mt-10 justify-between items-end w-full">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 , duration: 0.5, delay: 0.6 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="https://linkedin.com"
                            className="h-[60px] aspect-square bg-white border-[0.82px] border-[#E5E5E5] rounded-[14px] flex items-center justify-center group"
                            aria-label="LinkedIn"
                        >
                            <motion.div
                                whileHover={{ 
                                    scale: 1.2,
                                    color: "#6D39F3",
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <Linkedin size={21} className="group-hover:fill-[#6D39F3] fill-black transition-colors duration-300" />
                            </motion.div>
                        </Link>
                    </motion.div>

                    <motion.div 
                        className="flex items-start justify-between"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <div />
                        <motion.p 
                            className="text-black font-normal text-[16px]"
                            animate={{ 
                                opacity: [0.8, 1, 0.8],
                                transition: { 
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }
                            }}
                        >
                            All right reserved © JuTech 2025
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </motion.footer>
    )
}