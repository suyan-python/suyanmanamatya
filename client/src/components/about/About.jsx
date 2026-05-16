const About = () =>
{
    return (
        <section id="about" className="py-28 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="h-[500px] rounded-3xl bg-zinc-900 border border-primary/20 shadow-greenGlow" />
                </div>

                <div>
                    <p className="text-primary uppercase tracking-[4px] mb-4">
                        About Me
                    </p>

                    <h2 className="text-4xl font-bold mb-6">
                        Creating systems that combine design, performance, and functionality.
                    </h2>

                    <p className="text-zinc-400 leading-relaxed mb-6">
                        I’m a Computer Engineering student with practical experience building
                        responsive business websites, eCommerce platforms, backend systems,
                        payment integrations, and SEO-focused digital experiences.
                    </p>

                    <div className="grid grid-cols-2 gap-6 mt-10">
                        <div className="bg-softDark p-6 rounded-2xl border border-white/5">
                            <h3 className="text-3xl font-bold text-primary mb-2">10+</h3>
                            <p className="text-zinc-400">Projects Built</p>
                        </div>

                        <div className="bg-softDark p-6 rounded-2xl border border-white/5">
                            <h3 className="text-3xl font-bold text-primary mb-2">Full</h3>
                            <p className="text-zinc-400">Stack Development</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;