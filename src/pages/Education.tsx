import { Link } from 'react-router-dom'
import educationImage from '../assets/images/education-index.jpg'

function Education() {
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

      <section className="mx-auto max-w-[1600px] px-5 py-16 md:px-12 md:py-24">
        <p className="font-technical mb-5 text-[11px] uppercase tracking-[0.18em] text-amber-400">
          PWAKE / EDUCATION & SKILLS
        </p>
        <h1 className="font-display text-[clamp(2.25rem,9.5vw,2.5rem)] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[clamp(2.6rem,5.7vw,4rem)]">
          <span className="block sm:inline">Education</span>{' '}
          <span className="block text-amber-400 sm:inline">&amp; Skills.</span>
        </h1>

        <div className="relative mt-12 min-h-[260px] overflow-hidden border border-white/10 bg-[#111114] md:min-h-[340px]">
          <img
            src={educationImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover grayscale-[65%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <h2 className="font-display text-[26px] font-medium leading-tight tracking-[-0.025em] md:text-[30px]">
              Learning by building.
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-6 text-gray-300 md:text-base">
              My education, technical learning, and current direction.
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-6">
          <section className="border border-white/10 bg-[#111114] p-6 md:p-9">
            <p className="font-technical mb-4 text-[11px] uppercase tracking-[0.14em] text-amber-400">
              Education
            </p>
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <h2 className="font-display text-2xl font-medium leading-tight tracking-[-0.02em] md:text-[28px]">
                  Class 12 · CBSE
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-gray-300 md:text-[16px]">
                  Currently completing Class 12 under the CBSE curriculum in
                  India. I am interested in pursuing a Bachelor's degree in
                  Computer Science / Software Development in Canada.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-200">
                  Subjects
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {[
                    'Physics',
                    'Chemistry',
                    'Mathematics',
                    'English',
                    'Computer Science',
                    'Hindustani Music',
                  ].map((subject) => (
                    <li
                      key={subject}
                      className="border border-white/10 px-3 py-2 text-[15px] text-gray-300"
                    >
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="border border-white/10 bg-[#111114] p-6 md:p-9">
            <p className="font-technical mb-4 text-[11px] uppercase tracking-[0.14em] text-amber-400">
              Programming & Web Development
            </p>
            <h2 className="font-display text-2xl font-medium leading-tight tracking-[-0.02em] md:text-[28px]">
              Technologies and concepts I am learning.
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-medium text-gray-200">
                  Currently learning
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-gray-300 md:text-[16px]">
                  Python and programming fundamentals; HTML, CSS, JavaScript,
                  React, TypeScript, and Tailwind CSS.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-200">
                  Tools I work with
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-gray-300 md:text-[16px]">
                  VS Code, Git, and GitHub as I learn and build.
                </p>
              </div>
            </div>
            <p className="mt-6 border-t border-white/10 pt-5 text-[15px] leading-7 text-gray-300 md:text-[16px]">
              I am developing practical skills by building websites and
              personal projects.
            </p>
          </section>

          <section className="border border-white/10 bg-[#111114] p-6 md:p-9">
            <p className="font-technical mb-4 text-[11px] uppercase tracking-[0.14em] text-amber-400">
              AI-Assisted Development
            </p>
            <h2 className="font-display text-2xl font-medium leading-tight tracking-[-0.02em] md:text-[28px]">
              Build, understand, and refine.
            </h2>
            <ul className="mt-5 space-y-3 text-[15px] leading-7 text-gray-300 md:text-[16px]">
              <li>Writing effective prompts for AI development tools.</li>
              <li>Using AI to plan, generate, debug, and refine code.</li>
              <li>Building and improving websites through AI-assisted workflows.</li>
              <li>
                Reviewing, understanding, and testing AI-generated code, then
                correcting it rather than blindly accepting it.
              </li>
            </ul>
          </section>

          <section className="border border-white/10 bg-[#111114] p-6 md:p-9">
            <p className="font-technical mb-4 text-[11px] uppercase tracking-[0.14em] text-amber-400">
              Cybersecurity & Exploration
            </p>
            <h2 className="font-display text-2xl font-medium leading-tight tracking-[-0.02em] md:text-[28px]">
              An area I am exploring.
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-gray-300 md:text-[16px]">
              I am developing an interest in cybersecurity and ethical hacking,
              learning about web security and common vulnerabilities, and
              exploring bug bounty hunting and authorised practice environments.
              This is an area of exploration, not professional experience.
            </p>
          </section>

          <section className="border border-white/10 bg-[#111114] p-6 md:p-9">
            <p className="font-technical mb-4 text-[11px] uppercase tracking-[0.14em] text-amber-400">
              Languages
            </p>
            <h2 className="font-display text-2xl font-medium leading-tight tracking-[-0.02em] md:text-[28px]">
              Learning and communicating.
            </h2>
            <dl className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {[
                ['Python', 'Learning programming fundamentals.'],
                ['English', 'Actively improving communication and fluency.'],
                ['French', 'Beginner; currently learning the basics.'],
                ['Hindi and Haryanvi', 'Languages I know and use.'],
              ].map(([language, description]) => (
                <div key={language} className="border-t border-white/10 pt-4">
                  <dt className="font-semibold text-white">{language}</dt>
                  <dd className="mt-1 text-[15px] leading-6 text-gray-400 md:text-base">
                    {description}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="border border-amber-400/30 bg-[#111114] p-6 md:p-9">
            <p className="font-technical mb-4 text-[11px] uppercase tracking-[0.14em] text-amber-400">
              Current Direction
            </p>
            <h2 className="font-display text-2xl font-medium leading-tight tracking-[-0.02em] md:text-[28px]">
              Keep building. Keep learning.
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-gray-300 md:text-[16px]">
              I am focused on building more practical projects, strengthening
              my programming fundamentals, and exploring cybersecurity. I want
              to keep improving through experimentation, mistakes, and
              consistent learning.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}

export default Education
