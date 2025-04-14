"Use client";
// Import required components and libraries
import { User, Code, Briefcase, GraduationCap } from "lucide-react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const sections = [
  {
    icon: <User size={20} />,
    label: "About Me",
    content: (
      <>
        Currently, I am actively seeking my first full-time role in software
        development. Alongside my studies, I’ve dedicated much of my free time
        to building automation scripts, experimenting with pet projects, and
        learning through hands-on experience.
        <br />
        <br />
        I also had the opportunity to work with iMagic Labs. , a small tech
        venture, where I contributed as a junior developer to the early stages
        of a photo-sharing mobile app. This included assisting with feature
        implementation, debugging, and collaborative development tasks — a
        valuable real-world experience that helped shape my developer mindset.
        <br />
        <br />
        Prior to transitioning into tech, I held pivotal roles in leading
        corporations such as BP Inc., KUKA AG, and Harman International.
        <br />
        In the field of supply chain management, I served as a Material Group
        Manager, Sourcing Lead, and Critical Parts Manager, driving strategic
        procurement initiatives such as:
        <br />
        <br />
        - Demand forecasting and inventory optimization
        <br />
        - Implementing Just-In-Time (JIT) strategies
        <br />
        - Enhancing vendor relationship management
        <br />
        - Applying Total Cost of Ownership (TCO) analysis
        <br />
        <br />I also played a key role in improving end-to-end supply chain
        visibility, collaborating in cross-functional teams to streamline
        sourcing processes, and deploying risk mitigation strategies in
        high-pressure environments.
      </>
    ),
  },
  {
    icon: <Code size={20} />,
    label: "Skills",
    content: (
      <>
        JavaScript, Typescript, React, Next.js, Node.js, Express.js, .NET,
        Vercel, Railway, Puppeteer, mySQL, Jest Tailwind, Styled Components,
        CSS, HTML.
      </>
    ),
  },
  {
    icon: <Briefcase size={20} />,
    label: "Experiences",
    content: (
      <>
        Currently, I am actively seeking my inaugural role in software
        development. Prior to embarking on this journey, I held pivotal roles in
        esteemed corporations such as BP Inc., KUKA AG, and Harman
        International.
        <br />
        Within the realm of Supply Chain management, my positions as Material
        Group Manager, Sourcing Lead, and Critical Parts Manager allowed me to
        drive strategic procurement initiatives:
        <br />
        <br />
        - Oversee demand forecasting
        <br />
        - Optimize inventory levels
        <br />
        - Implement Just-In-Time (JIT) strategies
        <br />
        - Enhance vendor relationship management
        <br />
        - Employ Total Cost of Ownership (TCO) analysis.
        <br />
        <br />
        My responsibilities also encompassed improving end-to-end supply chain
        visibility, working in cross-functional teams to streamline sourcing
        processes, and deploying risk mitigation strategies to ensure supply
        continuity in volatile markets.
      </>
    ),
  },
  {
    icon: <GraduationCap size={20} />,
    label: "Education",
    content: (
      <>
        Completed Full-stack developer course at Greenfox Academy.
        <br />
        <br />
        Kecskemét University of Mechanical Engineering - Technical Manager
        <br />
        <br />
        Csonka János Technical High School - Logistics
      </>
    ),
  },
];

export default function BioPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="flex flex-col w-full mx-auto mt-32 sm:mt-20">
          {sections.map((s) => (
            <div className="mb-8">
              {" "}
              {/* This div gives margin between cards */}
              <Card>
                <div className="p-4 relative flex flex-col items-center md:text-justify gap-4 duration-700 group md:gap-8 md:py-12 lg:pb-24 md:p-8">
                  <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    {s.icon}
                  </span>{" "}
                  <div className="z-10 flex flex-col items-center md:text-center lg:text-center">
                    <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                      {s.label}
                    </span>
                    <span className="mt-4 text-sm sm:text-justify md:text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {s.content}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
