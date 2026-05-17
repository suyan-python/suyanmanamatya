import
{
    ShieldCheck,
    Rocket,
    Layers3,
    LineChart,
    ArrowUpRight,
} from "lucide-react";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const stats = [
    { value: 10, suffix: "+", label: "Systems Built" },
    { value: 5, suffix: "+", label: "Live Deployments" },
    { value: 100, suffix: "%", label: "Responsive Systems" },
    { value: 24, suffix: "/7", label: "System Reliability" },

];

function CountUp({ value, suffix })
{
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const [display, setDisplay] = useState(0);

    useEffect(() =>
    {
        if (!isInView) return;

        const controls = animate(0, value, {
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
            onUpdate(latest)
            {
                setDisplay(Math.floor(latest));
            },
        });

        return () => controls.stop();
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {display}
            {suffix}
        </span>
    );
}

const Values = () =>
{




    const valueCards = [
        {
            id: "02",
            icon: Rocket,
            label: "Optimization",
            title: "Performance & SEO Engineering",
            description:
                "Fast-loading systems optimized for responsiveness, search visibility, accessibility, and real-world performance across devices.",
        },
        {
            id: "03",
            icon: ShieldCheck,
            label: "Infrastructure",
            title: "Secure Digital Workflows",
            description:
                "Structured backend systems, payment integrations, authentication flows, and production-focused architecture built for reliability.",
        },
        {
            id: "04",
            icon: Layers3,
            label: "Experience",
            title: "Business-Focused Product Design",
            description:
                "Interfaces designed not only for aesthetics, but for trust, usability, engagement, and long-term customer experience.",
        },
    ];

    return (
        <section
            id="value"
            className="relative py-32 px-6 bg-[#09090b] overflow-hidden"
        >

            {/* BACKGROUND GLOWS */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 blur-[140px] rounded-full" />

            <motion.div
                animate={{
                    opacity: [0.4, 0.7, 0.4],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full"
            />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* ================= HEADER ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-24 text-center"
                >

                    <p className="text-primary uppercase tracking-[5px] text-sm font-semibold mb-5">
                        Value I Bring
                    </p>

                    <h2 className="header text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white max-w-5xl mx-auto">
                        Building Reliable Digital Systems
                        <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">
                            {" "}That Deliver Real Business Impact.
                        </span>
                    </h2>

                    <p className="text-xs md:text-lg leading-relaxed mt-8 max-w-3xl mx-auto">

                        <span
                            className="
        bg-gradient-to-r
        from-zinc-100
        via-green-400
        to-emerald-200
        bg-[length:250%_250%]
        bg-clip-text
        text-transparent
        animate-gradient
    "
                        >
                            Beyond visuals, I focus on creating scalable, production-ready systems
                            engineered for performance, maintainability, trust, and long-term business growth.
                        </span>

                    </p>

                </motion.div>

                {/* ================= GRID ================= */}
                <div className="grid lg:grid-cols-12 gap-6">

                    {/* ================= MAIN FEATURE ================= */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        whileHover={{ y: -6 }}
                        className="
                            lg:col-span-7
                            group relative overflow-hidden
                            rounded-[34px]
                            border border-white/10
                            bg-white/[0.03]
                            backdrop-blur-2xl
                            p-10 md:p-12
                        "
                    >

                        {/* animated glow */}
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -top-20 right-0 w-[320px] h-[320px] bg-primary/10 blur-[130px] rounded-full"
                        />

                        {/* hover layer */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

                        <div className="relative z-10 flex flex-col justify-between h-full">

                            {/* TOP */}
                            <div>

                                <div className="flex items-center gap-4 mb-10">

                                    <motion.div
                                        whileHover={{ rotate: 8, scale: 1.05 }}
                                        className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 items-center justify-center hidden md:flex"
                                    >
                                        <LineChart className="text-primary " size={28} />
                                    </motion.div>

                                    <div>
                                        <p className="text-primary uppercase tracking-[4px] text-xs font-semibold mb-2">
                                            Core Expertise
                                        </p>

                                        <h3 className="text-xl md:text-4xl font-medium text-white leading-tight">
                                            Production-Ready Engineering
                                        </h3>
                                    </div>

                                </div>

                                <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl">
                                    I develop scalable frontend and backend systems focused on
                                    reliability, performance, maintainability, and real-world business operations.
                                    From UI architecture to deployment and optimization,
                                    every system is built with production quality in mind.
                                </p>

                            </div>

                            {/* BOTTOM METRICS */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-14">

                                {stats.map((item, i) => (

                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: i * 0.08,
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{
                                            y: -6,
                                            scale: 1.02,
                                        }}
                                        className="
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        border border-white/10
                        bg-black/30
                        backdrop-blur-xl
                        p-5
                        transition-all
                        duration-500
                        hover:border-primary/30
                    "
                                    >

                                        {/* Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

                                        {/* Top glow */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[120px] bg-primary/10 blur-[70px] opacity-0 group-hover:opacity-100 transition-all duration-700" />

                                        <div className="relative z-10">

                                            <p className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary via-emerald-300 to-primary bg-clip-text text-transparent">
                                                <CountUp
                                                    value={item.value}
                                                    suffix={item.suffix}
                                                />
                                            </p>

                                            <p className="text-zinc-500 text-sm mt-2">
                                                {item.label}
                                            </p>

                                        </div>

                                    </motion.div>

                                ))}

                            </div>

                        </div>
                    </motion.div>

                    {/* ================= SIDE STACK ================= */}
                    <div className="lg:col-span-5 flex flex-col gap-6">

                        {valueCards.map((card, index) =>
                        {
                            const Icon = card.icon;

                            return (
                                <motion.div
                                    key={card.id}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{ y: -5 }}
                                    className="
                                        group relative overflow-hidden
                                        rounded-[28px]
                                        border border-white/10
                                        bg-white/[0.03]
                                        backdrop-blur-2xl
                                        p-8
                                    "
                                >

                                    {/* hover overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

                                    <div className="relative z-10">

                                        {/* top */}
                                        <div className="flex items-center justify-between mb-7">

                                            <motion.div
                                                whileHover={{ scale: 1.08 }}
                                                className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center"
                                            >
                                                <Icon className="text-primary" size={24} />
                                            </motion.div>

                                            <div className="flex items-center gap-3">

                                                <span className="text-primary text-xs uppercase tracking-[3px]">
                                                    {card.label}
                                                </span>

                                                <ArrowUpRight
                                                    size={16}
                                                    className="text-zinc-500 group-hover:text-primary transition"
                                                />
                                            </div>

                                        </div>

                                        <h3 className="text-2xl font-semibold text-white mb-4 leading-snug">
                                            {card.title}
                                        </h3>

                                        <p className="text-zinc-400 leading-relaxed">
                                            {card.description}
                                        </p>

                                    </div>
                                </motion.div>
                            );
                        })}

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Values;