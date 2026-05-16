import React from 'react'

const Values = () =>
{
    return (
        <section id="value" className="relative py-32 px-6 bg-[#09090b] overflow-hidden" >

            {/* BACKGROUND GLOW */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 blur-[140px] rounded-full" />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* SECTION HEADER */}
                <div className="mb-20 text-center ">

                    <p className="text-primary uppercase tracking-[4px] text-sm font-semibold mb-4">
                        What will i bring to table
                    </p>

                    <h2 className="header text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white">
                        Building Systems That
                        <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">
                            {" "}Create Real Impact.
                        </span>
                    </h2>

                    <p className="text-zinc-400 text-lg leading-relaxed mt-6 max-w-3xl mx-auto">
                        Beyond aesthetics, I focus on engineering reliable digital experiences
                        that combine performance, scalability, modern design, and business-focused functionality.
                    </p>

                </div>

                {/* VALUE GRID */}
                <div className="grid lg:grid-cols-12 gap-6">

                    {/* LARGE FEATURE CARD */}
                    <div className="lg:col-span-7 group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-10">

                        {/* Glow */}
                        <div className="absolute -top-24 right-0 w-[300px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />

                        {/* Hover Layer */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

                        <div className="relative z-10 flex flex-col h-full justify-between">

                            <div>

                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <span className="text-primary text-xs md:text-xl font-bold">
                                            01
                                        </span>
                                    </div>

                                    <div>
                                        <p className="text-primary uppercase tracking-[3px] text-[10px] md:text-xs font-semibold">
                                            Core Expertise
                                        </p>

                                        <h3 className="text-xl md:text-3xl font-bold text-white mt-1">
                                            Production-Ready Development
                                        </h3>
                                    </div>

                                </div>

                                <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl">
                                    Scalable frontend and backend architectures engineered for
                                    reliability, maintainability, performance, and long-term growth.
                                    Designed to support real-world business operations at production level.
                                </p>

                            </div>

                            {/* Bottom Metrics */}
                            <div className="flex gap-10 pt-12 flex-wrap">

                                <div>
                                    <p className="text-2xl md:text-4xl font-bold text-primary">10+</p>
                                    <p className="text-zinc-500 text-sm mt-1">
                                        Systems Built
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl md:text-4xl font-bold text-white">Full</p>
                                    <p className="text-zinc-500 text-sm mt-1">
                                        Stack Architecture
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* RIGHT STACK */}
                    <div className="lg:col-span-5 flex flex-col gap-6">

                        {/* CARD 2 */}
                        <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8">

                            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

                            <div className="relative z-10">

                                <div className="flex items-center justify-between mb-6">

                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <span className="text-primary font-bold">02</span>
                                    </div>

                                    <span className="text-primary text-xs uppercase tracking-[3px]">
                                        Optimization
                                    </span>

                                </div>

                                <h3 className="text-2xl font-semibold text-white mb-4">
                                    Performance & SEO
                                </h3>

                                <p className="text-zinc-400 leading-relaxed">
                                    High-speed interfaces optimized for responsiveness,
                                    search visibility, and premium user experience.
                                </p>

                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8">

                            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

                            <div className="relative z-10">

                                <div className="flex items-center justify-between mb-6">

                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <span className="text-primary font-bold">03</span>
                                    </div>

                                    <span className="text-primary text-xs uppercase tracking-[3px]">
                                        Security
                                    </span>

                                </div>

                                <h3 className="text-2xl font-semibold text-white mb-4">
                                    Secure Payment Systems
                                </h3>

                                <p className="text-zinc-400 leading-relaxed">
                                    Reliable backend workflows, secure payment integrations,
                                    and structured system automation.
                                </p>

                            </div>
                        </div>

                        {/* CARD 4 */}
                        <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8">

                            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

                            <div className="relative z-10">

                                <div className="flex items-center justify-between mb-6">

                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <span className="text-primary font-bold">04</span>
                                    </div>

                                    <span className="text-primary text-xs uppercase tracking-[3px]">
                                        Experience
                                    </span>

                                </div>

                                <h3 className="text-2xl font-semibold text-white mb-4">
                                    Business-Focused UI
                                </h3>

                                <p className="text-zinc-400 leading-relaxed">
                                    Modern digital experiences engineered to increase trust,
                                    engagement, and user retention.
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values