import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo/green.png";

const Navbar = () =>
{
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");

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
                entries.forEach((entry) =>
                {
                    if (entry.isIntersecting)
                    {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                root: null,

                // 🔥 KEY FIX: multiple thresholds instead of single one
                threshold: [0.2, 0.4, 0.6],

                // better section detection alignment
                rootMargin: "-20% 0px -40% 0px",
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
                    <h1 className="text-primary font-semibold tracking-wide text-lg">
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

                        <div className="bg-black/70 border border-white/10 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl">

                            <div className="flex flex-col gap-3">

                                {navLinks.map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item}`}
                                        onClick={() => setOpen(false)}
                                        className={`px-4 py-3 rounded-xl uppercase tracking-wide text-sm transition
                            ${active === item
                                                ? "bg-primary/10 text-primary"
                                                : "text-zinc-300 hover:bg-white/5 hover:text-white"
                                            }`}
                                    >
                                        {item}
                                    </a>
                                ))}

                            </div>

                            {/* footer */}
                            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-zinc-500 text-center">
                                Navigate through sections
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;