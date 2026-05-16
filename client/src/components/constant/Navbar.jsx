import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo/green.png";

const Navbar = () =>
{
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("");

    const navLinks = [
        "about",
        "skills",
        "experience",
        "projects",
        "services",
        "contact",
    ];

    // Scroll shrink + glass intensify
    useEffect(() =>
    {
        const handleScroll = () =>
        {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll spy (active section detection)
    useEffect(() =>
    {
        const sections = navLinks.map((id) =>
            document.getElementById(id)
        );

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
                rootMargin: "-40% 0px -55% 0px",
                threshold: 0.1,
            }
        );

        sections.forEach((sec) =>
        {
            if (sec) observer.observe(sec);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">

            {/* Glow background */}
            <div className="absolute w-[600px] h-[200px] bg-primary/10 blur-[120px] rounded-full -top-10" />

            <div
                className={`relative flex items-center justify-between gap-10 px-8 transition-all duration-300
                rounded-full border border-white/10 shadow-2xl backdrop-blur-xl
                ${scrolled
                        ? "py-2 bg-black/60 scale-[0.96]"
                        : "py-3 bg-white/5 scale-100"
                    }`}
            >

                {/* LOGO */}
                <div className="flex flex-row items-center gap-2">
                    <a href="#home" className="text-primary  text-lg tracking-wide">
                        <img src={logo} alt="Logo" className="w-8 h-8 inline-block mr-2" />
                        <h1 className="header">
                            SuyanMan
                        </h1>
                    </a>
                </div>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            className={`relative text-sm transition duration-300 px-2 py-1 rounded-full uppercase
                            ${active === item
                                    ? "text-primary font-medium"
                                    : "text-zinc-300 hover:text-white"
                                }`}
                        >
                            {item}

                            {/* active glow underline */}
                            <span
                                className={`absolute left-1/2 -bottom-2 w-1 h-1 rounded-full transition-all duration-300
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

            {/* MOBILE MENU */}
            {open && (
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90vw] bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:hidden">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className="text-zinc-300 hover:text-primary transition uppercase"
                                onClick={() => setOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;