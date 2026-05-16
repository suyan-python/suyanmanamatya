import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo/green.png";
import { projects } from '../../data/projectData.js';

const Navbar = () =>
{
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");
    const [openProjects, setOpenProjects] = useState(false);

    const navLinks = [
        "home",
        "value",
        "skills",
        "contact",
    ];

    // SCROLL EFFECT (glass morph)
    useEffect(() =>
    {
        const handleScroll = () =>
        {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // IMPROVED SCROLL SPY (more stable)
    useEffect(() =>
    {
        const sections = navLinks
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) =>
            {
                let bestEntry = null;

                entries.forEach((entry) =>
                {
                    if (!entry.isIntersecting) return;

                    if (
                        !bestEntry ||
                        entry.intersectionRatio > bestEntry.intersectionRatio
                    )
                    {
                        bestEntry = entry;
                    }
                });

                if (bestEntry?.target?.id)
                {
                    setActive(bestEntry.target.id);
                }
            },
            {
                root: null,
                threshold: [0.2, 0.3, 0.5, 0.7],
                rootMargin: "-15% 0px -35% 0px",
            }
        );

        sections.forEach((sec) => observer.observe(sec));

        return () => observer.disconnect();
    }, [navLinks]);

    return (
        <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">

            {/* glow */}
            <div className="absolute w-[600px] h-[200px] bg-primary/10 blur-[120px] rounded-full -top-10" />

            {/* MAIN BAR */}
            <div
                className={`relative flex items-center justify-between gap-10 px-6 md:px-8 transition-all duration-300
                rounded-full border border-white/10 shadow-2xl backdrop-blur-xl
                ${scrolled
                        ? "py-2 bg-black/70 scale-[0.96]"
                        : "py-3 bg-white/5 scale-100"
                    }`}
            >

                {/* LOGO */}
                <a href="#home" className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="w-8 h-8" />
                    <h1 className="header text-primary font-semibold tracking-wide text-lg">
                        SuyanMan
                    </h1>
                </a>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            className={`relative text-sm uppercase tracking-wide transition
                            ${active === item
                                    ? "text-primary"
                                    : "text-zinc-300 hover:text-white"
                                }`}
                        >
                            {item}

                            {/* active dot */}
                            <span
                                className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full transition
                                ${active === item ? "bg-primary scale-100" : "scale-0"}`}
                            />
                        </a>
                    ))}
                    <button
                        onClick={() => setOpenProjects(true)}
                        className="header  px-4 py-2 bg-darkGreen text-white/80 rounded-xl font-medium transition hover:opacity-90 hover:shadow-[0_0_30px_rgba(22,163,74,0.35)] cursor-pointer"
                    >
                        Projects
                    </button>
                </div>

                {/* MOBILE BUTTON */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {/* ===================== MOBILE MENU (FIXED PREMIUM UI) ===================== */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{
                            duration: 0.25,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="md:hidden absolute top-20 left-1/2 -translate-x-1/2 w-[92vw]"
                    >

                        <div className="bg-black/70 border border-white/10 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl">

                            <div className="flex flex-col gap-3">

                                {navLinks.map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item}`}
                                        onClick={() => setOpen(false)}
                                        className={`px-4 py-3 rounded-xl uppercase tracking-wide text-sm transition
                            ${active === item
                                                ? " text-primary"
                                                : "text-zinc-300 hover:bg-white/5 hover:text-white"
                                            }`}
                                    >
                                        {item}
                                    </a>
                                ))}

                            </div>

                            {/* footer */}
                            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-zinc-500 text-center">
                                <img src={logo} alt="Logo" className="w-4 h-4 inline-block mr-1" />
                                powered by SuyanMan
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* project popup modal */}

            <AnimatePresence>
                {openProjects && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl px-4 py-10"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="relative w-full max-w-7xl h-[90vh] bg-[#0b0b0b] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                        >
                            {/* GLOW EFFECTS */}
                            <div className="absolute -top-20 -left-20 w-[350px] h-[350px] bg-primary/20 blur-[140px] rounded-full" />
                            <div className="absolute -bottom-20 -right-20 w-[350px] h-[350px] bg-emerald-400/10 blur-[140px] rounded-full" />

                            {/* CLOSE BUTTON */}
                            <button
                                onClick={() => setOpenProjects(false)}
                                className="absolute top-5 right-5 text-zinc-400 hover:text-white transition z-50"
                            >
                                <X />
                            </button>

                            {/* HEADER */}
                            <div className="relative z-10 px-10 pt-10 pb-6 border-b border-white/10">
                                <p className="text-primary uppercase tracking-[5px] text-xs mb-2">
                                    Live Development Portfolio
                                </p>

                                <h2 className="header text-3xl font-bold text-white">
                                    Systems I’ve Built & Maintained
                                </h2>

                                <p className="text-zinc-400 text-sm mt-2">
                                    Real production-grade systems including eCommerce, payments, SaaS, and business platforms.
                                </p>
                            </div>

                            {/* PROJECT GRID */}
                            <div className="relative z-10 flex-1 overflow-y-auto p-8 grid md:grid-cols-2 gap-6">

                                {projects.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                        className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 "
                                    >
                                        {/* hover glow */}
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition duration-300" />

                                        <div className="relative z-10 space-y-4">

                                            {/* TOP HEADER */}
                                            <div className="flex items-center justify-between">

                                                {/* PROJECT LOGO PLACEHOLDER */}
                                                <div className="w-10 h-10 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center text-primary text-xs">
                                                    <img src={project.logo} alt="project logo" className="rounded-xl" />
                                                </div>

                                                {/* LIVE BUTTON */}
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-xs px-3 py-1 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition"
                                                >
                                                    Visit Live
                                                </a>

                                            </div>

                                            {/* TITLE */}
                                            <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(22,163,74,0.8)]" />
                                                {project.title}
                                            </h3>

                                            {/* DESCRIPTION */}
                                            <p className="text-zinc-400 text-sm leading-relaxed">
                                                {project.description}
                                            </p>

                                            {/* TECH STACK */}
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {project.tech.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-xs px-3 py-1 rounded-full 
                                            bg-black/40 border border-white/10 
                                            text-zinc-300
                                            hover:border-primary/40 hover:text-primary transition"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                        </div>
                                    </motion.div>
                                ))}

                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </nav>
    );
};

export default Navbar;