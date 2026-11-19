import { Link, NavLink } from 'react-router-dom'

const sections = [
  { label: 'Projects', to: '/projects' },
  { label: 'Education', to: '/education' },
  { label: 'About', to: '/about' },
  { label: 'Socials', to: '/socials' },
]

type InnerNavigationProps = {
  activePath: string
}

function InnerNavigation({ activePath }: InnerNavigationProps) {
  return (
    <header className="relative z-20 border-b border-white/10 px-5 py-4 sm:px-8 md:px-12">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <Link
          to="/"
          className="font-display inline-flex min-h-11 items-center px-2 text-xl font-semibold tracking-[0.16em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
        >
          PWAKE<span className="text-amber-400">.</span>
        </Link>

        <Link
          to="/index"
          className="inline-flex min-h-11 items-center px-2 text-xs uppercase tracking-[0.12em] text-gray-400 transition hover:text-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 sm:text-sm"
        >
          ← Index
        </Link>

        <nav
          aria-label="Portfolio sections"
          className="order-3 w-full md:order-none md:w-auto"
        >
          <ul className="flex min-w-max items-center gap-1 max-[380px]:grid max-[380px]:min-w-0 max-[380px]:grid-cols-2">
            {sections.map((section) => (
              <li key={section.to}>
                <NavLink
                  to={section.to}
                  aria-current={activePath === section.to ? 'page' : undefined}
                  className={({ isActive }) =>
                    `inline-flex min-h-11 items-center border-b-2 px-3 text-xs font-medium tracking-[0.08em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 max-[380px]:w-full max-[380px]:justify-center sm:px-4 sm:text-sm ${
                      isActive
                        ? 'border-amber-400 text-amber-400'
                        : 'border-transparent text-gray-400 hover:border-white/30 hover:text-white'
                    }`
                  }
                >
                  {section.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default InnerNavigation
