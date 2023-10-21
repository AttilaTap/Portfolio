"Use client";
// Import required components and libraries
import { User, Code, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

// Sample data
const sections = [
  {
    icon: <User size={20} />,
    label: "About Me",
    content:
      "I am [Your Name], a passionate full-stack developer with experience in building dynamic and responsive web applications. In my free time, I enjoy hiking, photography, and [other hobbies].",
  },
  {
    icon: <Code size={20} />,
    label: "Skills",
    content: "JavaScript, Typescript, Next.js, Node.js, Express.js, Puppeteer, mySQL, Tailwind, Styled Components, CSS, HTML.",
  },
  {
    icon: <Briefcase size={20} />,
    label: "Experiences",
    content:
      "Currently, I am actively seeking my inaugural role in software development. Prior to embarking on this journey, I held pivotal roles in esteemed corporations such as BP Inc., KUKA AG, and Harman International. Within the realm of Supply Chain management, my positions as Material Group Manager, Sourcing Lead, and Critical Parts Manager allowed me to drive strategic procurement initiatives, oversee demand forecasting, optimize inventory levels, implement Just-In-Time (JIT) strategies, enhance vendor relationship management, and employ Total Cost of Ownership (TCO) analysis. My responsibilities also encompassed improving end-to-end supply chain visibility, working in cross-functional teams to streamline sourcing processes, and deploying risk mitigation strategies to ensure supply continuity in volatile markets.",
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
    <div className='bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0'>
      <Navigation />
      <div className='container flex items-center justify-center min-h-screen px-4 mx-auto'>
        <div className='flex flex-col w-full mx-auto mt-32 sm:mt-20'>
          {sections.map((s) => (
            <div className='mb-8'>
              {" "}
              {/* This div will give the desired margin between cards */}
              <Card>
                <div className='p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16'>
                  <span
                    className='absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent'
                    aria-hidden='true'
                  />
                  <span className='relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange'>
                    {s.icon}
                  </span>{" "}
                  <div className='z-10 flex flex-col items-center'>
                    <span className='lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display'>{s.label}</span>
                    <span className='mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200'>{s.content}</span>
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
