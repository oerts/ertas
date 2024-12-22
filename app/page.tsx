import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section className="grow">
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter">Oz Ertas</h1>
      <p className="mb-4">
        Hi, I'm Oz, a UI Developer with a passion for building user-friendly
        interfaces. I enjoy working with TypeScript, React, and Next.js, and
        have spent the last 3 years building reusable UI components at{" "}
        <a target="_blank" href="https://atolye15.com" className="underline">
          Atolye15
        </a>
        . Outside of coding, I enjoy writing and am committed to continuous
        learning.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
