
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { createPortal } from 'react-dom'

type Project = {
  id: number
  name: string
  category: string
  image: string
  status: string
  description: string
  role: string
  liveUrl?: string
}

const imageFiles = import.meta.glob(
  '../assets/images/Projects/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  },
) as Record<string, string>

function findImage(filename: string) {
  const match = Object.entries(imageFiles).find(([path]) =>
    path.toLowerCase().includes(filename.toLowerCase()),
  )

  return match?.[1] ?? ''
}

const projects: Project[] = [
  {
    id: 1,
    name: 'MONIJEL',
    category: 'BRAND / WEB EXPERIENCE',
    image: findImage('monijel'),
    status: 'COMPLETED',
    description:
      'An e-commerce website for Monijel with Cashfree payments, authentication, Delhivery API integration, Formspree contact forms, Resend email, and DNS management.',
    role: 'Website design, development, and integrations',
    liveUrl: 'https://www.monijel.com/',
  },
  {
    id: 2,
    name: 'PWAKE LABS GAZETTE',
    category: 'CREATIVE / BUSINESS',
    image: findImage('pwake-labs-gazette'),
    status: 'COMPLETED',
    description:
      'A newspaper-inspired website pitching web development services from Pwake Labs, with contact forms and email redirects.',
    role: 'Concept, design and development',
    liveUrl: 'https://pwake.netlify.app/',
  },
  {
    id: 3,
    name: 'EMBER & RYE',
    category: 'RESTAURANT / WEB DESIGN',
    image: findImage('ember-and-rye'),
    status: 'COMPLETED',
    description:
      'A steakhouse website featuring its menu and a reservation form.',
    role: 'Design and development',
    liveUrl: 'https://ember-and-rye.lovable.app/',
  },
  {
    id: 4,
    name: 'IRONEDGE FITNESS',
    category: 'FITNESS / WEB DESIGN',
    image: findImage('ironedge-fitness'),
    status: 'COMPLETED',
    description:
      'A gym website featuring membership pricing tiers and a class schedule.',
    role: 'Design and development',
    liveUrl: 'https://ironedge-fitness.netlify.app/',
  },
  {
    id: 5,
    name: 'MAISON BLANCHE',
    category: 'SALON / WEB DESIGN',
    image: findImage('maison-blanche'),
    status: 'COMPLETED',
    description:
      'A salon booking website where visitors can select a service, stylist, and preferred appointment time.',
    role: 'Design and development',
    liveUrl: 'https://maisonblanche-vn.netlify.app/',
  },
  {
    id: 6,
    name: 'PWAKE VAULT',
    category: 'PERSONAL PROJECT / COLLECTION',
    image: findImage('pwake-vault-wip'),
    status: 'WORK IN PROGRESS',
    description:
      'A collection website currently in development, exploring digital binders for trading cards and display cases for die-cast models and figures, with collection value estimates.',
    role: 'Concept and development',
  },
]

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isClosing, setIsClosing] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!selectedProject) return

    const rootOverflow = document.documentElement.style.overflow
    const bodyOverflow = document.body.style.overflow
    const previousFocus =
      document.activeElement instanceof HTMLElement ? document.activeElement : null
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsClosing(true)
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.documentElement.style.overflow = rootOverflow
      document.body.style.overflow = bodyOverflow
      document.removeEventListener('keydown', handleKeyDown)
      previousFocus?.focus()
    }
  }, [selectedProject])

  useEffect(() => {
    if (!isClosing) return

    const closeDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 0
      : 260
    const timer = window.setTimeout(() => {
      setSelectedProject(null)
      setIsClosing(false)
    }, closeDuration)

    return () => window.clearTimeout(timer)
  }, [isClosing])

  function closeDossier() {
    setIsClosing(true)
  }

  return (
    <main
      inert={selectedProject !== null}
      className="relative min-h-screen overflow-hidden bg-[#080808] text-white"
    >
      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'radial-gradient(#777 0.65px, transparent 0.65px)',
          backgroundSize: '5px 5px',
        }}
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between border-b border-white/10 px-6 py-6 md:px-14">
        <Link
          to="/index"
          className="font-display inline-flex min-h-11 items-center px-2 text-sm font-semibold tracking-[0.24em] transition hover:text-amber-400"
        >
          PWAKE<span className="text-amber-400">.</span>
          <span className="font-technical ml-3 hidden text-[11px] font-normal tracking-[0.12em] text-gray-500 sm:inline">
            ARCHIVE DIVISION
          </span>
        </Link>

        <Link
          to="/index"
          className="font-technical inline-flex min-h-11 items-center px-2 text-[11px] tracking-[0.1em] text-gray-400 transition hover:text-amber-400"
        >
          ← BACK TO INDEX
        </Link>
      </header>

      {/* Page heading */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-16 md:px-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-technical mb-4 text-[11px] tracking-[0.16em] text-amber-400">
              PWAKE / INVESTIGATION FILE 001
            </p>

            <h1 className="font-display text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
              The Case <span className="text-amber-400">Files.</span>
            </h1>
          </div>

          <div className="max-w-xs text-[15px] leading-6 text-gray-400">
            Six projects. Different ideas. One evolving body of work.
            <p className="font-technical mt-2 text-[11px] tracking-[0.1em] text-gray-500">
              SELECT A FILE TO INVESTIGATE ↗
            </p>
          </div>
        </div>
      </section>

      {/* Investigation board */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 md:px-12">
        <div className="relative border border-white/10 bg-[#0b0b0d]/80 p-5 md:p-10">
          {/* Board controls */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_10px_#fbbf24]" />
              <span className="font-technical text-[11px] tracking-[0.12em] text-gray-300">
                PROJECT INVESTIGATION BOARD
              </span>
            </div>

            <span className="font-technical text-[11px] tracking-[0.08em] text-gray-500">
              06 RECORDS / 01 ARCHIVE
            </span>
          </div>

          {/* Project photographs */}
          <div className="relative">
            {/* Connecting threads */}
            <svg
              className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
              viewBox="0 0 1000 700"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M160 140 C280 70 330 240 500 150 S730 100 850 200"
                stroke="#b68a3b"
                strokeWidth="1.5"
                strokeDasharray="5 7"
                opacity="0.65"
              />
              <path
                d="M160 140 C130 330 350 350 500 430 S730 520 850 560"
                stroke="#b68a3b"
                strokeWidth="1.5"
                strokeDasharray="5 7"
                opacity="0.45"
              />
              <path
                d="M500 150 C420 280 570 330 500 430"
                stroke="#b68a3b"
                strokeWidth="1.5"
                strokeDasharray="5 7"
                opacity="0.45"
              />
            </svg>

            <div className="relative grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => {
                    setIsClosing(false)
                    setSelectedProject(project)
                  }}
                  aria-haspopup="dialog"
                  aria-expanded={selectedProject?.id === project.id}
                  aria-pressed={selectedProject?.id === project.id}
                  aria-controls={selectedProject?.id === project.id ? 'project-dossier' : undefined}
                  className={`project-photo group relative w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 ${
                    selectedProject?.id === project.id ? 'project-photo--selected' : ''
                  } ${
                    index % 2 === 0 ? 'md:rotate-[-1deg]' : 'md:rotate-[1deg]'
                  }`}
                >
                  {/* Pin */}
                  <span className="project-photo-pin absolute left-1/2 top-[-9px] z-20 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[#111] bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.5)]" />

                  {/* Photo card */}
                  <div className="project-photo-frame border border-white/20 bg-[#e5e2da] p-2 pb-5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-colors duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#151515]">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={`${project.name} project preview`}
                          className={`project-photo-image h-full w-full object-cover transition duration-300 ${
                            project.id === 6
                              ? 'grayscale'
                              : 'grayscale-[75%] group-hover:grayscale-[25%]'
                          }`}
                        />
                      ) : (
                        <div className="font-technical flex h-full items-center justify-center text-xs tracking-[0.08em] text-gray-500">
                          IMAGE UNAVAILABLE
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                      <span className="font-technical absolute left-3 top-3 text-[11px] text-white">
                        FILE / 0{project.id}
                      </span>

                      {project.status === 'WORK IN PROGRESS' && (
                        <span className="font-technical absolute bottom-3 right-3 bg-amber-400 px-2 py-1 text-[10px] font-semibold tracking-[0.08em] text-black">
                          WORK IN PROGRESS
                        </span>
                      )}
                    </div>

                    <div className="px-2 pt-4 text-[#171717]">
                      <p className="font-technical text-[10px] leading-4 tracking-[0.1em] text-[#8a713e]">
                        {project.category}
                      </p>

                      <h2 className="font-display mt-2 text-xl font-semibold leading-tight tracking-[-0.02em]">
                        {project.name}
                      </h2>

                      <p className="font-technical mt-1 text-[10px] tracking-[0.08em] text-gray-500">
                        {project.status}
                      </p>
                    </div>
                  </div>

                  {/* Connection point */}
                  <span className="absolute -bottom-3 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border border-amber-400 bg-[#080808]" />
                </button>
              ))}
            </div>
          </div>

          {/* Board footer */}
          <div className="font-technical mt-14 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-5 text-[11px] tracking-[0.08em] text-gray-500">
            <span>END OF CURRENT RECORDS</span>
            <span>PWAKE ARCHIVE © 2026</span>
          </div>
        </div>
      </section>

      {/* Project dossier */}
      {selectedProject &&
        createPortal(
        <div
          className={`project-dossier-backdrop fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-sm sm:p-5 ${
            isClosing ? 'project-dossier-backdrop--closing' : ''
          }`}
          onClick={closeDossier}
          onAnimationEnd={(event) => {
            if (isClosing && event.target === event.currentTarget) {
              setSelectedProject(null)
              setIsClosing(false)
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="dossier-title"
            id="project-dossier"
            className={`project-dossier-panel relative max-h-[calc(100dvh-2rem)] w-full max-w-3xl shrink-0 overflow-y-auto overscroll-contain border border-amber-400/30 bg-[#101012] p-5 shadow-2xl sm:p-6 md:p-10 ${
              isClosing ? 'project-dossier-panel--closing' : ''
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 -mx-5 -mt-5 flex items-center justify-between border-b border-white/10 bg-[#101012] px-5 pb-5 pt-5 sm:-mx-6 sm:-mt-6 sm:px-6 sm:pt-6 md:-mx-10 md:-mt-10 md:px-10 md:pt-10">
              <p className="font-technical text-[11px] tracking-[0.12em] text-amber-400">
                CONFIDENTIAL / PROJECT DOSSIER
              </p>

              <button
                ref={closeButtonRef}
                onClick={closeDossier}
                className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center whitespace-nowrap px-2 text-sm font-medium text-gray-400 transition hover:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-amber-400"
                aria-label="Close project dossier"
              >
                CLOSE ✕
              </button>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <div className="flex w-full items-center justify-center self-start overflow-hidden border border-white/10 bg-black">
                {selectedProject.image ? (
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.name} preview`}
                    className="block max-h-80 max-w-full object-contain object-center grayscale-[55%]"
                  />
                ) : (
                  <div className="font-technical flex min-h-60 items-center justify-center text-xs text-gray-500">
                    PREVIEW UNAVAILABLE
                  </div>
                )}
              </div>

              <div>
                <p className="font-technical text-[11px] tracking-[0.1em] text-gray-500">
                  RECORD 0{selectedProject.id} / 06
                </p>

                <h2
                  id="dossier-title"
                  className="font-display mt-4 text-[28px] font-semibold leading-[1.05] tracking-[-0.035em] md:text-[36px]"
                >
                  {selectedProject.name}
                </h2>

                <p className="font-technical mt-3 text-[11px] tracking-[0.1em] text-amber-400">
                  {selectedProject.category}
                </p>

                <div className="my-7 h-px bg-white/10" />

                <p className="text-[15px] leading-7 text-gray-300">
                  {selectedProject.description}
                </p>

                <div className="mt-7">
                  <p className="font-technical text-[11px] tracking-[0.1em] text-gray-500">
                    MY ROLE
                  </p>
                  <p className="mt-2 text-[15px] leading-6 text-gray-200">
                    {selectedProject.role}
                  </p>
                </div>

                <div className="mt-7">
                  <p className="font-technical text-[11px] tracking-[0.1em] text-gray-500">
                    CURRENT STATUS
                  </p>
                  <p className="mt-2 text-sm font-medium text-amber-400">
                    {selectedProject.status}
                  </p>
                </div>

                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-block bg-amber-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-amber-300"
                  >
                    Visit Live Website ↗
                  </a>
                )}
              </div>
            </div>

            <div className="font-technical mt-10 border-t border-white/10 pt-5 text-[11px] tracking-[0.08em] text-gray-500">
              PWAKE / PERSONAL ARCHIVE
            </div>
          </section>
        </div>,
        document.body,
      )}
    </main>
  )
}

export default Projects
