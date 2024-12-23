export default function Contact() {
  return (
    <div className="mb-8 lg:relative">
      <h2 className="text-2xl max-lg:mb-8 lg:absolute lg:right-full lg:mr-6">
        Contact
      </h2>
      <p className="mt-2 mb-4 text-neutral-600 dark:text-neutral-400">
        Feel free to reach out to me via email. I'm always open to interesting
        conversations and opportunities.
      </p>
      <div className="mt-4">
        <div className="inline-block font-mono bg-stone-50 dark:bg-stone-800 px-3 py-2 rounded">
          <span>hey</span>
          <span className="select-none text-neutral-400 px-1">[at]</span>
          <span>ertas.dev</span>
        </div>
      </div>
    </div>
  );
}
