import { skills } from "../../data/skillsData";
import { motion } from "framer-motion";

const Skills = () =>
{
    return (
        <section
            id="skills"
            className="relative py-32 px-6 bg-[#09090b] overflow-hidden"
        >

            {/* BACKGROUND GLOW */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 blur-[140px] rounded-full" />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* ===================== HEADER ===================== */}
                <div className="max-w-3xl mb-20 mx-auto text-center">

                    <p className="text-primary uppercase tracking-[4px] text-sm font-semibold mb-4">
                        My Expertise, Skills & Technologies
                    </p>

                    <h2 className="header text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white">
                        Engineering Modern
                        <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">
                            {" "}Digital Infrastructure.
                        </span>
                    </h2>

                </div>

                {/* ===================== SKILLS GRID ===================== */}
                <div className="grid lg:grid-cols-12 gap-6">

                    {Object.entries(skills).map(([category, items], index) => (

                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 40, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ y: -6 }}
                            className={`
                group relative overflow-hidden rounded-[30px]
                border border-white/10 bg-white/[0.03]
                backdrop-blur-2xl p-8 transition-all duration-500
                hover:border-primary/30
                hover:shadow-[0_0_40px_rgba(22,163,74,0.08)]
                
                ${index === 0 ? "lg:col-span-6" : ""}
                ${index === 1 ? "lg:col-span-6" : ""}
                ${index >= 2 ? "lg:col-span-4" : ""}
            `}
                        >

                            {/* FLOATING GLOW */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    opacity: [0.4, 0.7, 0.4],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute top-0 right-0 w-[220px] h-[220px] bg-primary/10 blur-[120px] rounded-full"
                            />

                            {/* BACKGROUND HOVER LAYER */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

                            <div className="relative z-10">

                                {/* CATEGORY HEADER */}
                                <div className="flex items-center justify-between mb-8">

                                    <div>
                                        <motion.p
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="text-primary uppercase tracking-[3px] text-xs font-semibold mb-2"
                                        >
                                            Expertise Area
                                        </motion.p>

                                        <h3 className="text-xl md:text-3xl font-bold capitalize text-white">
                                            {category}
                                        </h3>
                                    </div>

                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center"
                                    >
                                        <span className="text-primary font-bold text-lg">
                                            0{index + 1}
                                        </span>
                                    </motion.div>

                                </div>

                                {/* SKILLS */}
                                <div className="flex flex-wrap gap-3">

                                    {items.map((item, i) => (
                                        <motion.div
                                            key={item}
                                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{
                                                delay: i * 0.03,
                                                duration: 0.3,
                                            }}
                                            whileHover={{
                                                scale: 1.08,
                                                y: -2
                                            }}
                                            className="
                                px-4 py-2 rounded-full
                                bg-black/40 border border-white/10
                                text-zinc-300 text-sm
                                hover:border-primary/40
                                hover:text-primary
                                transition-all duration-300
                                cursor-default
                            "
                                        >
                                            {item}
                                        </motion.div>
                                    ))}

                                </div>

                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Skills;