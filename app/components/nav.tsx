import Image from "next/image";
import Link from "./link";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] pl-2 mb-16 tracking-tight">
      <div className="flex items-center justify-between">
        <Link href="/" className="group flex items-center">
          <div className="bg-stone-50 dark:bg-stone-900 -ml-4 px-4">
            <div className="rounded-full w-[40px] h-[40px] group-hover:bg-brand-100 transition-colors duration-500 flex items-center justify-center">
              <Image
                src="/logo.svg"
                alt="two half circles separated by a gap forming o and z"
                width="40"
                height="40"
              />
            </div>
          </div>
          <span className="-z-10 text-xl font-semibold ml-2 whitespace-nowrap -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            ertas.dev
          </span>
        </Link>
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
