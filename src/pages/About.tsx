import InnerNavigation from '../components/InnerNavigation'

function About() {
  return (
    <main className="min-h-screen bg-[#08080A] text-white">
      <InnerNavigation activePath="/about" />

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
              Student, software learner, and content creator.
              <br />
              Interested in how things work.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            <div className="max-w-2xl">
              <h2 className="font-display mb-8 text-[30px] font-medium leading-[1.14] tracking-[-0.03em] md:mb-10 md:text-[38px]">
                From making videos
                <br />
                <span className="text-amber-400">to building websites.</span>
              </h2>

              <div className="space-y-6 text-[15px] leading-[1.75] text-gray-400 md:text-[17px]">
                <p>
                  I’m Pwake, a student learning software development. I like
                  understanding how things work and making things people can use.
                </p>
                <p>
                  I started out making videos and streaming, and spent time
                  with the communities that grew around them. Talking with
                  viewers and seeing people connect over shared interests
                  showed me how much I enjoy creating for an audience.
                </p>
                <p>
                  Getting interested in technology led me to learn how websites
                  and software work. Now I put that interest into projects of
                  my own while continuing to make content.
                </p>
                <p>
                  Outside of that, I’m interested in cars, technology, space,
                  and science. I enjoy following a question or idea and seeing
                  where it leads.
                </p>
              </div>
            </div>

            <div>
              <div className="mb-7 flex items-center justify-between">
                <p className="font-technical text-[11px] uppercase tracking-[0.12em] text-gray-500">
                  Things I’m interested in
                </p>
                <span className="font-technical text-[11px] text-amber-400">04 AREAS</span>
              </div>

              <div className="border-t border-white/10">
                {[
                  ['01', 'Technology', 'Computers, software, and how the tools we use work.'],
                  ['02', 'Development', 'Learning to write software and solve problems by building.'],
                  ['03', 'Creativity', 'Making videos and sharing ideas with an audience.'],
                  ['04', 'Exploration', 'Cars, space, science, and questions about the world.'],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="flex items-center gap-6 border-b border-white/10 py-7"
                  >
                    <span className="font-technical text-sm text-amber-400">{number}</span>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-medium leading-tight tracking-[-0.02em] md:text-2xl">
                        {title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-6 text-gray-400">{description}</p>
                    </div>
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
