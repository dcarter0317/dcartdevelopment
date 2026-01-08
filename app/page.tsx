import Header from "./components/header";
import Hero from "./components/hero";
import TechSlider from "./components/techSlider";
import Projects from "./components/projects";
import Footer from "./components/footer";


export default function Home() {
  return (
     <>
      <main className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 py-4 min-h-screen max-w-7xl mx-auto w-full">
        <Header />
        <Hero/>
        <Projects/>
        <TechSlider/>
        <Footer/>
      </main>
     </>
  );
}
