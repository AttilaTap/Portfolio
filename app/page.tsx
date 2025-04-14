import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "About Me", href: "/aboutMe" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-zinc-500 duration-300 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      <div className="hidden w-screen h-px md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 animate-glow animate-fade-left" />

      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      <h1 className="z-10 text-3xl text-transparent bg-white cursor-default text-edge-outline animate-title font-display sm:text-5xl md:text-7xl bg-clip-text whitespace-nowrap duration-1000">
        Hi, I’m Attila Tápai.
      </h1>

      <div className="hidden w-screen h-px md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 animate-glow animate-fade-right" />

      <div className="my-12 px-6 text-center max-w-xl animate-fade-in">
        <p className="text-sm leading-relaxed text-zinc-400">
          I’m passionate about exploring every kind of programming language and
          technology — from front-end frameworks to back-end systems and
          everything in between.
          <br />
          Take a look at my{" "}
          <Link
            href="/projects"
            className="underline underline-offset-4 duration-300 hover:text-zinc-300"
          >
            projects
          </Link>{" "}
          to see what I’ve been building, or visit my{" "}
          <Link
            href="https://github.com/AttilaTap?tab=repositories"
            target="_blank"
            className="underline underline-offset-4 duration-300 hover:text-zinc-300"
          >
            GitHub
          </Link>{" "}
          for a deeper dive into my work. Always learning, always building.
        </p>
      </div>
    </div>
  );
}
