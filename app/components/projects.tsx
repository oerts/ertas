import Image from "next/image";
import { TiltCard } from "./tilt-card";

const projects = [
  {
    title: "Bettermark",
    url: "https://bettermark.app",
    description:
      "My most recent side project. A modern bookmark manager that helps prevent link rot by taking snapshots of the pages you save. It's cross-platform by default since bookmark saving is done by prefixing your URL with the apps url.",
  },
  {
    title: "tomatotomato",
    url: "https://tomatotomato.fly.dev",
    description:
      "One of my first ever projects. A simple recipe manager I built for my wife. She is still the only user. It was an experiment to learn how to use Remix. It has a lot of room for improvement but I don't think that's happening any time soon. (My wife's pretty sad about it.)",
  },
];

export default function Projects() {
  return (
    <div className="mb-16 lg:relative">
      <h2 className="text-2xl max-lg:mb-8 lg:absolute lg:right-full lg:mr-6">
        Projects
      </h2>
      <div className="grid gap-6 mt-4">
        {projects.map((project) => (
          <TiltCard
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.url}
          />
        ))}
      </div>
    </div>
  );
}
