import React from "react";
import GradientIconText from "../components/gradient_icon_text";
import Pill from "../components/pill";
import clsx from "clsx";

import experience from '../data/experience.json';
import {format, formatDuration, intervalToDuration, max, min, parseISO} from "date-fns";

function Skill({text, icon, className}: { text: string, icon: string, className: string }) {
  return (
    <div className={clsx('inline-flex items-center gap-2 rounded bg-gradient-to-br p-2', className)}>
      <i className={icon}/>
      {text}
    </div>
  )
}

interface IPosition {
  title: string;
  from: string;
  to?: string;
  description?: string;
}

interface IExperience {
  name: string;
  slug: string;
  positions: IPosition[];
}

function Experience({experience}: { experience: IExperience }) {
  const startDates = experience.positions.map(pos => parseISO(pos.from));
  const endDates = experience.positions
    .map(pos => pos.to ? parseISO(pos.to) : new Date()) // use current date if "to" is undefined
    .filter(Boolean);

  // Find the earliest start date and the latest end date
  const earliestStartDate = min(startDates);
  const latestEndDate = max(endDates);

  const duration = intervalToDuration({start: earliestStartDate, end: latestEndDate})

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-4">
        <img src={`/img/${experience.slug}_logo.jpeg`} alt={`${experience.name} logo`} className="size-16 rounded-md"/>
        <div className="flex flex-col">
          <div>
            <p className="text-xl font-medium">{experience.name}</p>
            <p className="text-sm text-gray-300">{formatDuration(duration, {format: ['years', 'months']})}</p>
          </div>
        </div>
      </div>

      {experience.positions.map((position) => (
        <div key={position.title} className="ml-0 flex flex-col gap-2 sm:ml-20">
          <div>
            <p className="text-lg font-medium">{position.title}</p>
            <p
              className="text-sm text-gray-300">{format(parseISO(position.from), 'MMMM yyyy')} - {position.to ? format(parseISO(position.to), 'MMMM yyyy') : 'Present'}</p>
          </div>
          <p className="text-gray-50">{position.description}</p>
        </div>
      ))}
    </div>
  )
}

export default function Page() {
  return (
    <div className="text-gray-50">

      <div className="h-dvh bg-gray-950">
        <div className="container mx-auto flex h-full flex-col justify-center px-4">
          <img className="mb-6 size-36 rounded-full bg-gray-700" src="/img/avatar.png" alt="A picture of Ben Tomsett"/>
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-medium">Hi, I&#39;m Ben 👋</h1>
            <div className="text-2xl">
              A <GradientIconText icon="icon-sparkles" text="Software Engineer" color="green"/> based
              in <GradientIconText icon="icon-map-pin" text="London" color="purple"/> with experience building
              reliable and performant systems.
              I work with <GradientIconText icon="icon-gem" text="Ruby/Rails" color="red"/>, <GradientIconText
              icon="icon-atom" text="React" color="sky"/> and <GradientIconText icon="icon-worm" text="Python"
                                                                                color="yellow"/>.
            </div>
            <Pill text="Looking for new opportunities" icon="icon-rss" scrollToId="connect" />
          </div>
          <i
            className="icon-move-down absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-4xl text-gray-400"/>
        </div>
      </div>

      <div className="h-dvh bg-gray-900">
        <div className="container mx-auto flex h-full flex-col justify-center gap-12 px-4">
          <div>
            <h2 className="text-3xl font-medium">About me</h2>
            <p>
              I&#39;m currently working as a Software Engineer at team.blue, tackling challenges and crafting new
              solutions to manage the infrastructure for some of the UKs leading cloud hosting brands.
              With experience in Ruby on Rails, React and Python, I&#39;m all about building reliable, scalable systems
              that solve real-world problems.
            </p>
            <p>
              I&#39;m passionate about using my skills to make technology more accessible, scalable, and customer-focused.
              Whether working on large-scale development projects or solving individual client issues, I’m driven to
              deliver quality solutions that make a real impact.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-medium">Skills</h2>
            <div className="flex flex-wrap gap-4">
              <Skill text="Ruby/Rails" icon="icon-gem" className="from-red-500 to-red-700"/>
              <Skill text="Python" icon="icon-worm" className="from-yellow-400 to-yellow-600"/>
              <Skill text="Django" icon="icon-frame" className="from-green-600 to-green-800"/>
              <Skill text="Typescript" icon="icon-braces" className="from-blue-500 to-blue-700"/>
              <Skill text="React" icon="icon-atom" className="from-blue-400 to-blue-600"/>
              <Skill text="Next.js" icon="icon-triangle" className="from-zinc-700 to-zinc-900"/>
              <Skill text="Java" icon="icon-coffee" className="from-orange-500 to-orange-700"/>
              <Skill text="SQL" icon="icon-database" className="from-indigo-500 to-indigo-700"/>
              <Skill text="Docker" icon="icon-container" className="from-sky-400 to-sky-600"/>
              <Skill text="Networking" icon="icon-network" className="from-emerald-400 to-emerald-600"/>
              <Skill text="Server management" icon="icon-server" className="from-pink-400 to-pink-600"/>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-dvh bg-gray-950 py-24">
        <div className="container mx-auto flex h-full flex-col justify-center gap-12 px-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium">Experience</h2>
            <div className="flex flex-col gap-8">
              {
                experience.map((e: IExperience) => {
                  return <Experience experience={e} key={e.slug}/>
                })
              }
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium">Education</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center gap-4">
                <img src={`/img/uea_logo.jpeg`} alt="University of East Anglia logo" className="size-16 rounded-md"/>
                <div className="flex flex-col">
                  <div>
                    <p className="text-xl font-medium">University of East Anglia</p>
                    <p className="text-lg font-medium">BSc (Hons) Computing Science (First Class)</p>
                    <p className="text-sm text-gray-300">2020 - 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-dvh max-h-dvh flex-col" id="connect">
        <div className="flex-1 bg-gray-900">
          <div className="container mx-auto flex h-full flex-col justify-center gap-12 px-4">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-medium">Let&#39;s connect</h2>

              <p>
                I&#39;m seeking new opportunities to leverage my skills and experience. If you&#39;re looking for a
                driven, detail-orientated software engineer with a passion for problem solving, please reach out.
              </p>

              <div className="flex flex-row gap-4">
                <a href="https://linkedin.com/in/bentomsett"
                   className="flex w-min cursor-pointer items-center gap-2 text-nowrap rounded border border-blue-600 px-4 py-2 transition-colors hover:bg-blue-600">
                  <i className="icon-linkedin"/>
                  Connect on LinkedIn
                </a>

                <a href="mailto:ben@tomsett.xyz"
                   className="flex w-min cursor-pointer items-center gap-2 text-nowrap rounded border border-blue-600 px-4 py-2 transition-colors hover:bg-blue-600">
                  <i className="icon-mail"/>
                  Email
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-medium">More links</h2>

              <a href="https://github.com/BenTomsett"
                 className="flex w-min cursor-pointer items-center gap-2 text-nowrap rounded border border-white px-4 py-2 transition-colors hover:bg-white hover:text-black">
                <i className="icon-github"/>
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-950">
          <div className="container mx-auto py-6">
            <p>© Ben Tomsett, 2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}