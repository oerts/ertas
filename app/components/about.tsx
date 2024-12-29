import Image from "next/image";
import Link from "./link";

export default function About() {
  return (
    <section className="mb-16 lg:relative">
      <h1 className="text-2xl tracking-widest max-lg:mb-8 lg:absolute lg:right-full lg:mr-6">
        About
      </h1>
      <p className="mb-4">
        Hi, I'm Oz, a UI Developer with a passion for building user-friendly
        interfaces. I enjoy working with TypeScript, React, and Next.js, and
        have spent the last 3 years building reusable UI components at{" "}
        <Link
          target="_blank"
          href="https://atolye15.com"
          className="underline items-center gap-1 inline-flex align-baseline"
        >
          <Image src="/a15.svg" alt="Atolye15 logo" width={14} height={14} />
          Atolye15
        </Link>
        . Outside of coding, I enjoy writing and am committed to continuous
        learning.
      </p>
    </section>
  );
}
