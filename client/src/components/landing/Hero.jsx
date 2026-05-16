import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import Suyan from "../../assets/person/suyan2.png";
import { projects } from '../../data/projectData.js';

export default function Hero()
{
    const [openProjects, setOpenProjects] = useState(false);

    return (
        <section
            className="relative min-h-screen flex items-center justify-center bg-[#09090b] text-white overflow-hidden"
            id="home"
        >

            {/* BACKGROUND */}
            {/* BACKGROUND */}
            <div className="absolute inset-0 z-0">

                <img
                    src={Suyan}
                    alt="Background"
                    className="w-full h-full object-cover object-center scale-105 lg:scale-110 animate-slowZoom pt-20 md:pt-16"
                />

                {/* DESKTOP GRADIENT */}
                <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-zinc-950 via-transparent to-darkGreen/70" />

                {/* MOBILE GRADIENT (SOFTER + IMAGE STILL VISIBLE) */}
                <div className="absolute inset-0 block lg:hidden bg-gradient-to-t from-darkGreen/50 via-darkGreen/30 to-transparent" />

                {/* LIGHT VIGNETTE (DO NOT KILL IMAGE) */}
                <div className="absolute inset-0 bg-black/30" />

            </div>

            {/* CONTENT */}
            <div className="relative z-10 w-full mx-auto px-6 lg:py-0 py-24 ">

                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* ===================== LEFT SECTION ===================== */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 space-y-6 lg:pl-12 pl-0"
                    >

                        {/* BADGE */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <p className="header text-primary uppercase text-[9px] md:text-xs font-semibold tracking-[3px] ">
                                Full Stack Developer | System Designer | SEO Specialist
                            </p>
                        </div>

                        {/* HEADLINE */}
                        <h1 className="header text-4xl md:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
                            Building Modern <br />
                            <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">
                                Digital Systems.
                            </span>
                        </h1>

                        {/* SUBTEXT */}
                        <p className="text-zinc-300 text-base md:text-lg max-w-xl leading-relaxed font-light">
                            I design and develop production ready web applications.
                            Focused on performance, scalability, secure payments,
                            and real world business outcomes.
                        </p>

                        {/* CTA BUTTONS */}
                        <div className="flex gap-4 pt-4 flex-wrap">

                            <button
                                onClick={() => setOpenProjects(true)}
                                className="px-8 py-4 bg-darkGreen text-white/80 rounded-xl font-medium transition hover:opacity-90 hover:shadow-[0_0_30px_rgba(22,163,74,0.35)] cursor-pointer"
                            >
                                View Work
                            </button>

                            <a
                                href="#contact"
                                className="px-8 py-4 border border-zinc-700 bg-zinc-950/40 text-zinc-200 rounded-xl font-medium backdrop-blur-md hover:bg-zinc-800 transition cursor-pointer"
                            >
                                Let’s Talk
                            </a>

                        </div>

                    </motion.div>

                    {/* ===================== RIGHT SECTION ===================== */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9 }}
                        className="lg:col-span-5 hidden lg:block justify-self-center w-full max-w-md"
                    >

                        <div className="relative">

                            {/* GLOW BACKGROUND */}
                            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-2xl scale-110" />

                            {/* ===================== MAIN PANEL ===================== */}
                            <div className="relative z-10 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl space-y-6">

                                {/* ===================== ABOUT ===================== */}
                                <div>
                                    <h1 className="header text-darkGreen font-bold uppercase tracking-[4px] text-sm mb-2">
                                        About Suyan Man Amatya
                                    </h1>

                                    <p className="text-zinc-300 text-sm leading-relaxed">
                                        Computer Engineering student focused on building real-world digital systems,
                                        combining frontend, backend, payment integration, SEO-driven design and Automate Systems.
                                    </p>
                                </div>

                                {/* ===================== EXPERIENCE ===================== */}
                                <div>
                                    <p className="header text-darkGreen font-medium uppercase tracking-[4px] text-sm mb-3">
                                        Experience
                                    </p>

                                    <div className="space-y-3">

                                        <div className="bg-black/40 p-3 rounded-xl border border-white/10">
                                            <p className="text-white font-semibold text-sm">
                                                eCommerce Systems
                                            </p>
                                            <p className="text-zinc-400 text-xs">
                                                Built full-stack store with checkout & backend APIs
                                            </p>
                                        </div>

                                        <div className="bg-black/40 p-3 rounded-xl border border-white/10">
                                            <p className="text-white font-semibold text-sm">
                                                Payment Integration
                                            </p>
                                            <p className="text-zinc-400 text-xs">
                                                eSewa + secure order flow implementation
                                            </p>
                                        </div>

                                        <div className="bg-black/40 p-3 rounded-xl border border-white/10">
                                            <p className="text-white font-semibold text-sm">
                                                SEO & Performance
                                            </p>
                                            <p className="text-zinc-400 text-xs">
                                                Optimized websites for speed & search ranking
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                {/* ===================== LIVE STATS ===================== */}
                                <div>
                                    <p className="header text-darkGreen font-medium uppercase tracking-[4px] text-sm mb-3">
                                        Live Projects
                                    </p>

                                    <div className="grid grid-cols-2 gap-3">

                                        <div className="bg-black/40 p-4 rounded-xl border border-white/10 text-center">
                                            <p className="text-2xl font-bold text-primary">10+</p>
                                            <p className="text-zinc-400 text-xs">Projects Built</p>
                                        </div>

                                        <div className="bg-black/40 p-4 rounded-xl border border-white/10 text-center">
                                            <p className="text-2xl font-bold text-primary">5+</p>
                                            <p className="text-zinc-400 text-xs">Live Systems</p>
                                        </div>

                                        <div className="bg-black/40 p-4 rounded-xl border border-white/10 text-center">
                                            <p className="text-2xl font-bold text-primary">Full</p>
                                            <p className="text-zinc-400 text-xs">Stack Dev</p>
                                        </div>

                                        <div className="bg-black/40 p-4 rounded-xl border border-white/10 text-center">
                                            <p className="text-2xl font-bold text-primary">SEO</p>
                                            <p className="text-zinc-400 text-xs">Optimized</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            {/* ===================== END MAIN PANEL ===================== */}

                        </div>
                    </motion.div>

                </div>
            </div>



            <AnimatePresence>
                {openProjects && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl px-4"
                    >

                        {/* MODAL BOX */}
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="relative w-full max-w-3xl bg-[#0b0b0b] border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
                        >
                            <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-primary/20 blur-[120px] rounded-full" />
                            <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-emerald-400/10 blur-[120px] rounded-full" />

                            {/* CLOSE BUTTON */}
                            <button
                                onClick={() => setOpenProjects(false)}
                                className="absolute top-5 right-5 text-zinc-400 hover:text-white cursor-pointer transition"
                            >
                                <X />
                            </button>

                            {/* HEADER */}
                            <div className="relative z-10 mb-8">

                                <p className="text-primary uppercase tracking-[5px] text-xs mb-2">
                                    Live Development Portfolio
                                </p>

                                <h2 className="text-3xl font-bold text-white">
                                    Systems I’ve Built & Maintain
                                </h2>

                                <p className="text-zinc-400 text-sm mt-2">
                                    Real production projects including eCommerce, payments, and business platforms.
                                </p>

                            </div>

                            {/* PROJECT LIST */}
                            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">

                                {projects.map((project, index) => (
                                    <div
                                        key={index}
                                        className="relative p-5 rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden group"
                                    >

                                        {/* glow background */}
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition duration-300" />

                                        <div className="relative z-10">

                                            {/* TITLE */}
                                            <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(22,163,74,0.8)]" />
                                                {project.title}
                                            </h3>

                                            {/* DESCRIPTION */}
                                            <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                                                {project.description}
                                            </p>

                                            {/* TECH STACK */}
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {project.tech.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-xs px-3 py-1 rounded-full bg-black/40 border border-white/10 text-zinc-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                ))}

                            </div>

                            {/* FOOTER ACTION */}
                            <div className="mt-8 flex justify-end">
                                <button
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-black font-semibold hover:opacity-90 transition"
                                >
                                    View Full Projects
                                    <ExternalLink size={16} />
                                </button>
                            </div>

                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}