import { TiltCard } from "./tilt-card";

const talks = [
  {
    title: "Navigating Redesigns",
    occasion: "BBT",
    date: "2024",
    description:
      "A talk about the challenges of redesigning a component library that has been around for a long time.",
    link: "https://bursa.dev/event-detail/bbt-connect-atolye15-e0c52b3a",
  },
];

export default function Talks() {
  return (
    <div className="mb-16 lg:relative">
      <h2 className="text-2xl max-lg:mb-8 lg:absolute lg:right-full lg:mr-6">
        Talks
      </h2>
      <div className="grid gap-6 mt-4">
        {talks.map((talk) => (
          <TiltCard
            key={talk.title}
            title={talk.title}
            description={talk.description}
            link={talk.link}
            metadata={
              <p className="text-sm text-neutral-600">
                {talk.occasion} · {talk.date}
              </p>
            }
          />
        ))}
      </div>
    </div>
  );
}
