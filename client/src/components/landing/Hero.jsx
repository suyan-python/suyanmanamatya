import { motion } from "framer-motion";
import Suyan from "../../assets/person/suyan2.png";

export default function Hero()
{
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
                    className="w-full h-full object-cover object-center scale-105 lg:scale-110 animate-slowZoom"
                />

                {/* DESKTOP GRADIENT */}
                <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-zinc-950 via-transparent to-darkGreen/70" />

                {/* MOBILE GRADIENT (SOFTER + IMAGE STILL VISIBLE) */}
                <div className="absolute inset-0 block lg:hidden bg-gradient-to-t from-zinc-950/70 via-zinc-950/30 to-transparent" />

                {/* LIGHT VIGNETTE (DO NOT KILL IMAGE) */}
                <div className="absolute inset-0 bg-black/20" />

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
                            <p className="header text-primary uppercase text-xs font-semibold tracking-[3px]">
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

                            <a
                                href="#projects"
                                className="px-8 py-4 bg-darkGreen text-white/80 rounded-xl font-medium transition hover:opacity-90 hover:shadow-[0_0_30px_rgba(22,163,74,0.35)]"
                            >
                                View Work
                            </a>

                            <a
                                href="#contact"
                                className="px-8 py-4 border border-zinc-700 bg-zinc-950/40 text-zinc-200 rounded-xl font-medium backdrop-blur-md hover:bg-zinc-800 transition"
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
        </section>
    );
}