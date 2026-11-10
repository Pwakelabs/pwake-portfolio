import { Link } from 'react-router-dom'

function About() {
  return (
    <main className="min-h-screen bg-[#08080a] text-white">
      <nav className="relative z-20 flex items-center justify-between border-b border-white/10 px-6 py-6 md:px-12">
        <Link to="/" className="font-display inline-flex min-h-11 items-center px-2 text-xl font-semibold tracking-[0.16em]">
          PWAKE<span className="text-amber-400">.</span>
        </Link>

        <Link
          to="/index"
          className="inline-flex min-h-11 items-center px-2 text-sm uppercase tracking-[0.14em] text-gray-400 transition hover:text-amber-400"
        >
          ← Back to index
        </Link>
      </nav>

      <section id="about" className="px-8 py-28 md:px-20 lg:px-28">
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="font-technical mb-5 text-[11px] uppercase tracking-[0.18em] text-amber-400">
                01 / About me
              </p>
              <h1 className="font-display max-w-4xl text-[clamp(2.75rem,6vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
                Beyond the <span className="text-amber-400">screen.</span>
              </h1>
            </div>
            <p className="max-w-[18rem] text-[15px] leading-6 text-gray-500 md:text-right">
              A person behind the pixels.
              <br />
              A mind always exploring.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            <div className="max-w-2xl">
              <h2 className="font-display mb-8 text-[30px] font-medium leading-[1.14] tracking-[-0.03em] md:mb-10 md:text-[38px]">
                Curious by nature.
                <br />
                <span className="text-amber-400">Driven to create.</span>
              </h2>

              <div className="space-y-6 text-[15px] leading-[1.75] text-gray-400 md:text-[17px]">
                <p>
                  I'm Pwake, a student and aspiring software developer
                  with a curiosity for technology and how things work.
                </p>
                <p>
                  My journey started with creating content and building
                  online communities through YouTube and streaming. Making
                  videos, talking with viewers, and seeing people connect
                  around shared interests taught me a lot about communication
                  and the work behind creating content.
                </p>
                <p>
                  As I spent more time around technology, I became curious
                  about how websites and software are made. That curiosity
                  led me from creating things for an audience to learning
                  programming and building projects of my own.
                </p>
                <p>
                  I still enjoy making things and exploring new ideas. I'm
                  interested in cars, technology, space, and science, and I
                  like finding out how things work. When an idea catches my
                  attention, I enjoy experimenting with it and trying to turn
                  it into something real.
                </p>
              </div>

              <div className="mt-12 border-l-2 border-amber-400/60 py-2 pl-6">
                <p className="font-display text-xl font-medium italic leading-snug tracking-[-0.02em] text-white md:text-2xl">
                  “What if it all works out?”
                </p>
                <p className="mt-2 text-[15px] leading-6 text-gray-500">
                  A thought I found on Google.
                </p>
              </div>
            </div>

            <div>
              <div className="mb-7 flex items-center justify-between">
                <p className="font-technical text-[11px] uppercase tracking-[0.12em] text-gray-500">
                  Things that interest me
                </p>
                <span className="font-technical text-[11px] text-amber-400">04 AREAS</span>
              </div>

              <div className="border-t border-white/10">
                {[
                  ['01', 'Technology', 'Computers, software and understanding how technology works.'],
                  ['02', 'Development', 'Programming, building applications and solving problems.'],
                  ['03', 'Creativity', 'Making videos, sharing ideas and bringing concepts to life.'],
                  ['04', 'Exploration', 'Cars, space, science and questions about the world around us.'],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="group flex items-center gap-6 border-b border-white/10 py-7 transition-all duration-300 hover:px-3"
                  >
                    <span className="font-technical text-sm text-amber-400">{number}</span>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-medium leading-tight tracking-[-0.02em] transition group-hover:text-amber-400 md:text-2xl">
                        {title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-6 text-gray-400">{description}</p>
                    </div>
                    <span className="text-xl text-gray-600 transition group-hover:text-amber-400">↗</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-28 flex items-center justify-between border-t border-white/10 pt-7">
            <span className="font-technical text-[11px] uppercase tracking-[0.12em] text-gray-600">
              PWAKE / PERSONAL ARCHIVE
            </span>
            <span className="font-technical text-xs text-gray-600">01 — 04</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
