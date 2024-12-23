import Projects from "./components/projects";
import Talks from "./components/talks";
import Contact from "./components/contact";
import About from "./components/about";

export default function Page() {
  return (
    <>
      <About />
      <Projects />
      <Talks />
      <Contact />
    </>
  );
}
