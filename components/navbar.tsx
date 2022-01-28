import Link from "next/link";
import Image from "next/image";

export default function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <nav className="sticky top-0 bg-sky-900 flex items-center justify-between shadow-xs p-4">
      <div className="flex items-center text-white hidden md:flex">
        <a className="px-2" href="https://www.warp.dev">
          <Image
            src="/favicon.ico"
            width={15}
            height={15}
            alt="Warp landing page"
          />
        </a>
        <Link href="/">
          <a className="font-semibold text-xl tracking-tighter">Commands.dev</a>
        </Link>
      </div>
      {children}
      <a
        href="https://github.com/warpdotdev/commands.dev"
        className="text-gray-300 hover:text-white hidden md:flex"
      >
        <span className="sr-only">GitHub</span>
        <svg
          className="w-8 h-8"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </nav>
  );
}