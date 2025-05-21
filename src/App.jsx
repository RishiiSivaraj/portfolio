import content from "./data/content.json";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Certificates from "./components/Certificates.jsx";
import Footer from "./components/Footer.jsx"


// #240B36 Russian Voilet
// #C31432 Red NCS
// #EEEEEE Anti Flash White
// #1E1C1C Errie Black


function App() {
  return (
    <div className="bg-[var(--color-background)] text-black ">
      <Navbar />
      <main className="pt-20">
        <About content={content.about} />
        <Skills content={content.skills} />
        <Certificates content={content.certificates} /> {/* new */}
        <Contact content={content.contact} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
