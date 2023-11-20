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
        At 39, I embarked on a transformative journey, steering away from the logistics and immediacies of supply chain management to immerse myself into the captivating realm of
        coding.
        <br />
        This shift wasn't just a professional transition; it was a personal evolution.
        <br />
        <br />
        While coding presents its own set of challenges, for me, it evokes the same thrill I find in gaming, a space where every problem is a level waiting to be conquered.
        <br />
        The decision wasn't easy, especially considering my extensive experience in supply chain, where I:
        <br />
        <br />
        - Seamlessly managed multiple system interfaces.
        <br />
        - Nurtured and evolved supplier relationships over years.
        <br />
        - Tackled countless line stop scenarios, always ensuring continuity.
        <br />
        <br />
        Outside the professional sphere, I am a voracious reader—sci-fi and fantasy being my genres of choice. They whisk me away to different worlds, much like coding does in its
        own unique way.
        <br />
        Socializing, gaming, and long, reflective walks are my go-to activities for rejuvenation.
        <br />
        <br />
        One of the pivotal challenges I've faced recently has been balancing work, rigorous learning at Greenfox Academy, and precious moments with family and friends. But the
        crowning achievement of this period? Definitely 'nexTicket', our group project. It stands as a testament to our collective passion, determination, and camaraderie.
      </>
    ),
  },
  {
    icon: <Code size={20} />,
    label: "Skills",
    content: <>JavaScript, Typescript, React, Next.js, Node.js, Express.js, Vercel, Railway, Puppeteer, mySQL, Jest Tailwind, Styled Components, CSS, HTML.</>,
  },
  {
    icon: <Briefcase size={20} />,
    label: "Experiences",
    content: (
      <>
        Currently, I am actively seeking my inaugural role in software development. Prior to embarking on this journey, I held pivotal roles in esteemed corporations such as BP
        Inc., KUKA AG, and Harman International.
        <br />
        Within the realm of Supply Chain management, my positions as Material Group Manager, Sourcing Lead, and Critical Parts Manager allowed me to drive strategic procurement
        initiatives:
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
        My responsibilities also encompassed improving end-to-end supply chain visibility, working in cross-functional teams to streamline sourcing processes, and deploying risk
        mitigation strategies to ensure supply continuity in volatile markets.
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
    <div className='bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0'>
      <Navigation />
      <div className='container flex items-center justify-center min-h-screen px-4 mx-auto'>
        <div className='flex flex-col w-full mx-auto mt-32 sm:mt-20'>
          {sections.map((s) => (
            <div className='mb-8'>
              {" "}
              {/* This div gives margin between cards */}
              <Card>
                <div className='p-4 relative flex flex-col items-center md:text-justify gap-4 duration-700 group md:gap-8 md:py-12 lg:pb-24 md:p-8'>
                  <span
                    className='absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent'
                    aria-hidden='true'
                  />
                  <span className='relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange'>
                    {s.icon}
                  </span>{" "}
                  <div className='z-10 flex flex-col items-center md:text-center lg:text-center'>
                    <span className='lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display'>{s.label}</span>
                    <span className='mt-4 text-sm sm:text-justify md:text-center duration-1000 text-zinc-400 group-hover:text-zinc-200'>{s.content}</span>
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
