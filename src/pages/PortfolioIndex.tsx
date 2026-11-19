
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

import projectsImage from '../assets/images/projects-index.jpg'
import educationImage from '../assets/images/education-index.jpg'
import aboutImage from '../assets/images/about-index.jpg'
import socialsImage from '../assets/images/socials-index.jpg'

const sections = [
  {
    number: '01',
    title: 'Projects & Applications',
    description: 'Websites and personal projects I have built.',
    image: projectsImage,
    path: '/projects',
    label: 'EXPLORE PROJECTS',
  },
  {
    number: '02',
    title: 'Education & Skills',
    description: 'What I am studying and learning as I build.',
    image: educationImage,
    path: '/education',
    label: 'VIEW BACKGROUND',
  },
  {
    number: '03',
    title: 'About Me',
    description: 'My interests and how I got into making things online.',
    image: aboutImage,
    path: '/about',
    label: 'GET TO KNOW ME',
  },
  {
    number: '04',
    title: 'Links & Socials',
    description: 'My videos, streams, and ways to get in touch.',
    image: socialsImage,
    path: '/socials',
    label: 'FIND ME ONLINE',
  },
]

function PortfolioIndex() {
  return (
    <main className="min-h-screen bg-[#08080A] text-white">
      <nav className="relative z-20 flex items-center justify-between border-b border-white/10 px-6 py-6 md:px-12">
        <Link to="/" className="font-display inline-flex min-h-11 items-center px-2 text-xl font-semibold tracking-[0.16em]">
          PWAKE<span className="text-amber-400">.</span>
        </Link>

        <Link
          to="/"
          className="inline-flex min-h-11 items-center px-2 text-sm uppercase tracking-[0.14em] text-gray-400 transition hover:text-amber-400"
        >
          ← Back home
        </Link>
      </nav>

      <section className="mx-auto max-w-[1600px] px-5 py-16 md:px-12 md:py-24">
        <ScrollReveal>
          <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <div>
              <p className="font-technical mb-5 text-[11px] uppercase tracking-[0.18em] text-amber-400">
                PWAKE / PERSONAL ARCHIVE
              </p>

              <h1 className="font-display text-[clamp(2.6rem,5.5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
                The <span className="text-amber-400">Index.</span>
              </h1>
            </div>

            <p className="max-w-sm text-[15px] leading-7 text-gray-400">
              Browse my projects, what I’m learning, a little about me, and
              where to find me.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {sections.map((section, index) => (
            <ScrollReveal key={section.number} delay={index * 90}>
              <Link
                to={section.path}
                className="group relative isolate flex h-full min-h-[340px] overflow-hidden border border-white/10 bg-[#111114] transition duration-500 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-[0_24px_70px_rgba(0,0,0,0.45)] md:min-h-[420px]"
              >
                <img
                  src={section.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 -z-20 h-full w-full object-cover grayscale-[65%] transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-[15%]"
                />

                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/65 to-black/10 transition duration-500 group-hover:from-black/90 group-hover:via-black/50" />

                <div className="absolute inset-0 -z-10 bg-black/15" />

                <div className="flex w-full flex-col justify-between p-6 md:p-9">
                  <div className="flex items-center justify-between">
                    <span className="font-technical text-sm tracking-[0.1em] text-amber-400">
                      {section.number}
                    </span>

                    <span className="text-xl text-white/60 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-amber-400">
                      ↗
                    </span>
                  </div>

                  <div>
                    <p className="font-technical mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-amber-400">
                      {section.label}
                    </p>

                    <h2 className="font-display max-w-lg text-[25px] font-semibold leading-tight tracking-[-0.025em] text-white md:text-[32px]">
                      {section.title}
                    </h2>

                    <p className="mt-3 max-w-md text-[15px] leading-6 text-gray-300">
                      {section.description}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <footer className="mt-16 flex items-center justify-between border-t border-white/10 pt-6">
            <span className="font-technical text-[11px] uppercase tracking-[0.12em] text-gray-600">
              PWAKE / PERSONAL ARCHIVE
            </span>

            <span className="font-technical text-xs text-gray-600">
              01 — 04
            </span>
          </footer>
        </ScrollReveal>
      </section>
    </main>
  )
}

export default PortfolioIndex
