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

                    <p className="text-zinc-400 text-lg leading-relaxed mt-6 max-w-2xl mx-auto">
                        A carefully selected technology stack focused on scalability,
                        maintainability, high performance, and modern user experiences.
                    </p>

                </div>

                {/* ===================== SKILLS GRID ===================== */}
                <div className="grid lg:grid-cols-12 gap-6">

                    {Object.entries(skills).map(([category, items], index) => (

                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`
                                group relative overflow-hidden rounded-[30px]
                                border border-white/10 bg-white/[0.03]
                                backdrop-blur-2xl p-8 transition-all duration-500
                                hover:border-primary/30
                                
                                ${index === 0 ? "lg:col-span-6" : ""}
                                ${index === 1 ? "lg:col-span-6" : ""}
                                ${index >= 2 ? "lg:col-span-4" : ""}
                            `}
                        >

                            {/* HOVER GLOW */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

                            {/* TOP GLOW */}
                            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />

                            <div className="relative z-10">

                                {/* CATEGORY HEADER */}
                                <div className="flex items-center justify-between mb-8">

                                    <div>
                                        <p className="text-primary uppercase tracking-[3px] text-xs font-semibold mb-2">
                                            Expertise Area
                                        </p>

                                        <h3 className="text-3xl font-bold capitalize text-white">
                                            {category}
                                        </h3>
                                    </div>

                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <span className="text-primary font-bold text-lg">
                                            0{index + 1}
                                        </span>
                                    </div>

                                </div>

                                {/* SKILLS */}
                                <div className="flex flex-wrap gap-3">

                                    {items.map((item) => (
                                        <div
                                            key={item}
                                            className="
                                                px-4 py-2 rounded-full
                                                bg-black/40 border border-white/10
                                                text-zinc-300 text-sm
                                                hover:border-primary/30
                                                hover:text-white
                                                transition-all duration-300
                                            "
                                        >
                                            {item}
                                        </div>
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