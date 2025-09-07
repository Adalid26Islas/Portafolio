import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import OperatingSystems from "./components/OperatingSystems";
import Courses from "./components/Courses";
import Timeline from "./components/Experience";
import Tools from "./components/Tools";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-white ">
      <Header />
      <main>
        <AboutMe />
        <Timeline />
        <Skills />
        <OperatingSystems />
        <Courses/>
        <Tools />
        <Footer />
      </main>
    </div>
  );
}

export default App;
