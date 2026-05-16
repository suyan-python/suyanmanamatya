import
{
    Mail,
    Phone,
    ArrowUpRight
} from "lucide-react";

const Contact = () =>
{
    return (
        <section
            id="contact"
            className="relative py-20 md:py-32 px-6 bg-[#09090b] overflow-hidden"
        >

            {/* BACKGROUND GLOW */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 blur-[140px] rounded-full" />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* ===================== HEADER ===================== */}
                <div className="max-w-3xl mb-20 mx-auto text-center">

                    <p className="text-primary uppercase tracking-[4px] text-sm font-semibold mb-4">
                        Let's Connect & Build Future
                    </p>

                    <h2 className="header text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white">
                        Build Something
                        <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">
                            {" "}Meaningful.
                        </span>
                    </h2>

                    <p className="text-zinc-400 text-sm md:text-lg leading-relaxed mt-6 max-w-2xl mx-auto">
                        Open to collaborations, freelance opportunities,
                        system architecture projects, and innovative digital experiences.
                    </p>

                </div>

                {/* ===================== MAIN CONTACT GRID ===================== */}
                <div className="grid lg:grid-cols-12 gap-6">

                    {/* LEFT LARGE CARD */}
                    <div className="lg:col-span-7 relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-10">

                        {/* Glow */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />

                        <div className="relative z-10 flex flex-col justify-between h-full">

                            {/* TOP */}
                            <div>

                                <div className="mb-10">
                                    <p className="text-primary uppercase tracking-[3px] text-xs font-semibold mb-3">
                                        Direct Contact
                                    </p>

                                    <h3 className="header text-xl md:text-4xl text-white leading-tight">
                                        Available for meaningful
                                        digital collaborations.
                                    </h3>
                                </div>

                                {/* CONTACT ITEMS */}
                                <div className="space-y-5">

                                    {/* PHONE */}
                                    <a
                                        href="tel:+9779843822887"
                                        className="group flex items-center justify-between bg-black/30 border border-white/10 rounded-2xl px-6 py-5 hover:border-primary/30 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-4">

                                            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                                <Phone className="text-primary" size={22} />
                                            </div>

                                            <div>
                                                <p className="text-zinc-500 text-sm">
                                                    Phone / WhatsApp
                                                </p>

                                                <p className="text-white font-medium text-lg">
                                                    +977 9843822887
                                                </p>
                                            </div>

                                        </div>

                                        <ArrowUpRight className="text-zinc-500 group-hover:text-primary transition" />
                                    </a>

                                    {/* EMAIL */}
                                    <a
                                        href="mailto:suyanmanamatya8@gmail.com"
                                        className="group flex items-center justify-between bg-black/30 border border-white/10 rounded-2xl px-6 py-5 hover:border-primary/30 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-4">

                                            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                                <Mail className="text-primary" size={22} />
                                            </div>

                                            <div>
                                                <p className="text-zinc-500 text-sm">
                                                    Email Address
                                                </p>

                                                <p className="text-white font-medium text-lg">
                                                    suyanmanamatya8@gmail.com
                                                </p>
                                            </div>

                                        </div>

                                        <ArrowUpRight className="text-zinc-500 group-hover:text-primary transition" />
                                    </a>

                                </div>

                            </div>

                            {/* BOTTOM STATUS */}
                            <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />

                                <p className="text-zinc-400 text-sm">
                                    Currently available for selected freelance projects.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT SOCIAL GRID */}
                    <div className="lg:col-span-5 grid sm:grid-cols-2 gap-6">

                        {/* GITHUB */}
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 hover:border-primary/30 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

                            <div className="relative z-10">
                                {/* <Github className="text-primary mb-10" size={34} /> */}

                                <h3 className="text-2xl font-semibold text-white mb-3">
                                    GitHub
                                </h3>

                                <p className="text-zinc-400 leading-relaxed">
                                    Explore projects, repositories, and development workflows.
                                </p>
                            </div>
                        </a>

                        {/* LINKEDIN */}
                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 hover:border-primary/30 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

                            <div className="relative z-10">
                                {/* <Linkedin className="text-primary mb-10" size={34} /> */}

                                <h3 className="text-2xl font-semibold text-white mb-3">
                                    LinkedIn
                                </h3>

                                <p className="text-zinc-400 leading-relaxed">
                                    Professional network, experience, and collaborations.
                                </p>
                            </div>
                        </a>

                        {/* FACEBOOK */}
                        <a
                            href="https://facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 hover:border-primary/30 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

                            <div className="relative z-10">
                                {/* <Facebook className="text-primary mb-10" size={34} /> */}

                                <h3 className="text-2xl font-semibold text-white mb-3">
                                    Facebook
                                </h3>

                                <p className="text-zinc-400 leading-relaxed">
                                    Connect socially and follow updates & announcements.
                                </p>
                            </div>
                        </a>

                        {/* TWITTER */}
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 hover:border-primary/30 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

                            <div className="relative z-10">
                                {/* <Twitter className="text-primary mb-10" size={34} /> */}

                                <h3 className="text-2xl font-semibold text-white mb-3">
                                    Twitter / X
                                </h3>

                                <p className="text-zinc-400 leading-relaxed">
                                    Thoughts, insights, and technology-related discussions.
                                </p>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;