import
{
    ArrowUpRight
} from "lucide-react";

import Logo from "../../assets/logo/green.png";

const Footer = () =>
{
    return (
        <footer className="relative px-6 pt-24 pb-10 bg-[#09090b] overflow-hidden border-t border-white/5">

            {/* BACKGROUND GLOW */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/10 blur-[140px] rounded-full" />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* ===================== TOP SECTION ===================== */}
                <div className="grid lg:grid-cols-12 gap-16 pb-16 border-b border-white/10">

                    {/* LEFT */}
                    <div className="lg:col-span-5">

                        {/* LOGO */}
                        <div className="flex items-center gap-4 mb-6">

                            <div className="w-14 h-14 rounded-2xl overflow-hidden border border-primary/20 bg-black/40 backdrop-blur-xl">
                                <img
                                    src={Logo}
                                    alt="SuyanMan Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div>
                                <h2 className="header text-2xl font-bold text-primary">
                                    SuyanMan
                                </h2>

                                <p className="text-zinc-500 text-sm tracking-wide">
                                    System Engineer • Web Architect
                                </p>
                            </div>

                        </div>

                        {/* DESCRIPTION */}
                        <p className="text-zinc-400 leading-relaxed max-w-md">
                            Building modern digital systems focused on performance,
                            scalability, business impact, and premium user experiences.
                        </p>

                    </div>

                    {/* CENTER */}
                    <div className="lg:col-span-3">

                        <p className="text-primary uppercase tracking-[3px] text-xs font-semibold mb-6">
                            Navigation
                        </p>

                        <div className="space-y-4">

                            {[
                                "Home",
                                "Value",
                                "Skills",
                                "Contact",
                            ].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="group flex items-center gap-2 text-zinc-400 hover:text-white transition"
                                >
                                    <span>{item}</span>

                                    <ArrowUpRight
                                        size={16}
                                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                                    />
                                </a>
                            ))}

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-4">

                        <p className="text-primary uppercase tracking-[3px] text-xs font-semibold mb-6">
                            Connect
                        </p>

                        <div className="flex flex-wrap gap-4">

                            {/* GITHUB */}
                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="group w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center hover:border-primary/30 transition-all duration-300"
                            >
                                {/* <Github className="text-zinc-400 group-hover:text-primary transition" /> */}
                            </a>

                            {/* LINKEDIN */}
                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="group w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center hover:border-primary/30 transition-all duration-300"
                            >
                                {/* <Linkedin className="text-zinc-400 group-hover:text-primary transition" /> */}
                            </a>

                            {/* FACEBOOK */}
                            <a
                                href="https://facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="group w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center hover:border-primary/30 transition-all duration-300"
                            >
                                {/* <Facebook className="text-zinc-400 group-hover:text-primary transition" /> */}
                            </a>

                            {/* TWITTER */}
                            <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="group w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center hover:border-primary/30 transition-all duration-300"
                            >
                                {/* <Twitter className="text-zinc-400 group-hover:text-primary transition" /> */}
                            </a>

                        </div>

                        {/* EMAIL */}
                        <div className="mt-8">

                            <p className="text-zinc-500 text-sm mb-2">
                                Email Address
                            </p>

                            <a
                                href="mailto:suyanmanamatya8@gmail.com"
                                className="text-white text-lg hover:text-primary transition"
                            >
                                suyanmanamatya8@gmail.com
                            </a>

                        </div>

                    </div>

                </div>

                {/* ===================== BOTTOM ===================== */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">

                    <p className="text-zinc-500 text-sm text-center md:text-left">
                        © 2026 SuyanMan. Designed & engineered with precision.
                    </p>


                </div>

            </div>
        </footer>
    );
};

export default Footer;