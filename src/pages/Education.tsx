import InnerNavigation from '../components/InnerNavigation'
import educationImage from '../assets/images/education-index.jpg'

function Education() {
  return (
    <main className="min-h-screen bg-[#08080A] text-white">
      <InnerNavigation activePath="/education" />

      <section className="mx-auto max-w-[1600px] px-5 py-16 md:px-12 md:py-24">
        <p className="font-technical mb-5 text-[11px] uppercase tracking-[0.18em] text-amber-400">
          PWAKE / EDUCATION & SKILLS
        </p>
        <h1 className="font-display text-[clamp(2.25rem,9.5vw,2.5rem)] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[clamp(2.6rem,5.7vw,4rem)]">
          <span className="block sm:inline">Education</span>{' '}
          <span className="block text-amber-400 sm:inline">&amp; Skills.</span>
        </h1>

        <div className="relative mt-10 min-h-[190px] overflow-hidden border border-white/10 bg-[#111114] sm:min-h-[210px] md:min-h-[230px]">
          <img
            src={educationImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover grayscale-[65%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
            <h2 className="font-display text-[26px] font-medium leading-tight tracking-[-0.025em] md:text-[30px]">
              Learning by building.
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-6 text-gray-300 md:text-base">
              What I’m studying and learning outside the classroom.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-12">
          <section className="min-w-0 border border-white/10 bg-[#111114] p-6 md:p-8 lg:col-span-7">
            <p className="font-technical mb-4 text-[11px] uppercase tracking-[0.14em] text-amber-400">
              Education
            </p>
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <h2 className="font-display text-2xl font-medium leading-tight tracking-[-0.02em] md:text-[28px]">
                  Class 12 · CBSE
                </h2>
                <p className="mt-4 max-w-[65ch] text-[15px] leading-7 text-gray-300 md:text-[16px]">
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

          <section className="min-w-0 border border-white/10 bg-[#111114] p-6 md:p-8 lg:col-span-5">
            <p className="font-technical mb-4 text-[11px] uppercase tracking-[0.14em] text-amber-400">
              Programming & Web Development
            </p>
            <h2 className="font-display text-2xl font-medium leading-tight tracking-[-0.02em] md:text-[28px]">
              What I’m learning right now.
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-medium text-gray-200">
                  Currently learning
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {[
                    'Python & programming fundamentals',
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'React',
                    'TypeScript',
                    'Tailwind CSS',
                  ].map((skill) => (
                    <li
                      key={skill}
                      className="border border-white/10 px-3 py-2 text-sm text-gray-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-200">
                  Tools I work with
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {['VS Code', 'Git', 'GitHub'].map((tool) => (
                    <li
                      key={tool}
                      className="border border-white/10 px-3 py-2 text-sm text-gray-300"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-6 max-w-[65ch] border-t border-white/10 pt-5 text-[15px] leading-7 text-gray-300 md:text-[16px]">
              I practise by building websites and personal projects.
            </p>
          </section>

          <section className="min-w-0 border border-white/10 bg-[#111114] p-6 md:p-8 lg:col-span-5">
            <p className="font-technical mb-4 text-[11px] uppercase tracking-[0.14em] text-amber-400">
              How I use AI while learning
            </p>
            <h2 className="font-display text-2xl font-medium leading-tight tracking-[-0.02em] md:text-[28px]">
              Learn by making and reviewing.
            </h2>
            <ul className="mt-5 max-w-[65ch] space-y-3 text-[15px] leading-7 text-gray-300 md:text-[16px]">
              <li>I write prompts to explain what I’m trying to build.</li>
              <li>I use AI tools to plan, draft, debug, and revise code.</li>
              <li>I use them while building and improving websites.</li>
              <li>
                Before using generated code, I review, understand, and test it,
                then fix any issues I find.
              </li>
            </ul>
          </section>

          <section className="min-w-0 border border-white/10 bg-[#111114] p-6 md:p-8 lg:col-span-7">
            <p className="font-technical mb-4 text-[11px] uppercase tracking-[0.14em] text-amber-400">
              Cybersecurity & Exploration
            </p>
            <h2 className="font-display text-2xl font-medium leading-tight tracking-[-0.02em] md:text-[28px]">
              Something I’m learning about.
            </h2>
            <p className="mt-4 max-w-[65ch] text-[15px] leading-7 text-gray-300 md:text-[16px]">
              I’m learning about web security and common vulnerabilities, and
              exploring bug bounty hunting in authorised practice environments.
              I’m still exploring this field; this is not professional experience.
            </p>
          </section>

          <section className="min-w-0 border border-white/10 bg-[#111114] p-6 md:p-8 lg:col-span-7">
            <p className="font-technical mb-4 text-[11px] uppercase tracking-[0.14em] text-amber-400">
              Languages
            </p>
            <h2 className="font-display text-2xl font-medium leading-tight tracking-[-0.02em] md:text-[28px]">
              Languages I’m learning and use.
            </h2>
            <dl className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {[
                ['Python', 'Learning programming fundamentals.'],
                ['JavaScript', 'Learning the basics.'],
                ['English', 'Actively improving communication and fluency.'],
                ['French', 'Beginner; currently learning the basics.'],
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

          <section className="min-w-0 border border-amber-400/30 bg-[#111114] p-6 md:p-8 lg:col-span-5">
            <p className="font-technical mb-4 text-[11px] uppercase tracking-[0.14em] text-amber-400">
              Current Direction
            </p>
            <h2 className="font-display text-2xl font-medium leading-tight tracking-[-0.02em] md:text-[28px]">
              What I’m focusing on now.
            </h2>
            <p className="mt-4 max-w-[65ch] text-[15px] leading-7 text-gray-300 md:text-[16px]">
              Right now, I’m working on practical projects, strengthening my
              programming fundamentals, and learning about cybersecurity. I
              want to keep improving through practice and experimentation.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}

export default Education
