import Navbar from '../components/constant/Navbar';
import Hero from '../components/landing/Hero';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Experience from '../components/experience/Experience';
import Projects from '../components/projects/Projects';
import Services from '../components/services/Services';
import Contact from '../components/contact/Contact';
import Footer from '../components/constant/Footer';
import Values from '../components/experience/Values';

const Home = () =>
{
    return (
        <div className="bg-dark text-white">
            <Navbar />
            <Hero />
            <Values />
            <Skills />
            <Contact />
            {/* <About />
            <Experience />
            <Projects />
            <Services /> */}
            <Footer />
        </div>
    );
};

export default Home;