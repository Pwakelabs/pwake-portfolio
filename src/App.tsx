import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import BatmanLoader from './components/BatmanLoader'
import About from './pages/About'
import Education from './pages/Education'
import PortfolioIndex from './pages/PortfolioIndex'
import Projects from './pages/Projects'
import Socials from './pages/Socials'
import gothamBg from './assets/images/gotham-bg.webp'
import batmanGif from './assets/animations/batman-loading.gif'

function Home({ introComplete }: { introComplete: boolean }) {
  const introState = introComplete ? '' : 'home-intro--pending'

  return (
    <main className="min-h-screen bg-[#08080A] text-white">
      <nav className="relative z-20 flex items-center justify-between px-5 py-5 sm:px-8 sm:py-7 md:px-16">
        <Link to="/" className="inline-flex min-h-11 items-center gap-2.5 px-2 text-2xl tracking-[0.04em] sm:gap-3 sm:text-3xl">
          <span className="font-display font-semibold">PWAKE</span>
          <img
            src={batmanGif}
            alt=""
            aria-hidden="true"
            className="h-7 w-7 object-contain sm:h-8 sm:w-8"
          />
        </Link>
      </nav>

      <section className="relative flex min-h-[85vh] items-center overflow-hidden px-5 sm:px-8 md:px-20 lg:px-32">
        <img
          aria-hidden="true"
          alt=""
          src={gothamBg}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className={`home-scene absolute inset-0 h-full w-full object-cover object-center ${
            introComplete ? 'is-visible' : ''
          }`}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-black/20" />
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_50%,rgba(180,120,20,0.12),transparent_55%)]" />

        <div className="relative z-10 max-w-3xl">
          <p className={`${introComplete ? 'home-intro home-intro--one' : introState} mb-6 text-xs uppercase tracking-[0.28em] text-amber-400 md:text-sm`}>
            Developer · Creator · Builder
          </p>

          <h1 className="font-display text-[clamp(3.25rem,8vw,6rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
            <span className={`block ${introComplete ? 'home-title-line home-title-line--one' : 'home-title-line--pending'}`}>
              Building
            </span>
            <span className={`block text-amber-400 ${introComplete ? 'home-title-line home-title-line--two' : 'home-title-line--pending'}`}>
              Beyond
            </span>
            <span className={`block ${introComplete ? 'home-title-line home-title-line--three' : 'home-title-line--pending'}`}>
              Limits.
            </span>
          </h1>

          <p className={`${introComplete ? 'home-intro home-intro--three' : introState} mt-8 max-w-xl text-[15px] leading-7 text-gray-300 md:text-[17px] md:leading-8`}>
            I'm Pwake. I build digital experiences, explore technology,
            and turn ideas into things people can actually use.
          </p>

          <div className={`${introComplete ? 'home-intro home-intro--four' : introState} mt-10`}>
            <Link
              to="/index"
              className="inline-block bg-amber-400 px-7 py-3 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-[0_12px_40px_rgba(255,185,0,0.2)]"
            >
              Open Portfolio Index
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function AnimatedRoutes({ introComplete }: { introComplete: boolean }) {
  const location = useLocation()

  return (
    <div key={location.pathname} className="page-transition">
      <Routes>
        <Route path="/" element={<Home introComplete={introComplete} />} />
        <Route path="/index" element={<PortfolioIndex />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/about" element={<About />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

function App() {
  const [introStage, setIntroStage] = useState<'playing' | 'exiting' | 'complete'>(() =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'complete'
      : 'playing',
  )
  const [gifLoaded, setGifLoaded] = useState(false)

  useEffect(() => {
    if (introStage !== 'playing') return

    const timer = window.setTimeout(() => setIntroStage('exiting'), gifLoaded ? 2200 : 5000)
    return () => window.clearTimeout(timer)
  }, [gifLoaded, introStage])

  useEffect(() => {
    if (introStage !== 'exiting') return

    const timer = window.setTimeout(() => setIntroStage('complete'), 500)
    return () => window.clearTimeout(timer)
  }, [introStage])

  function handleGifLoad() {
    setGifLoaded(true)
  }

  function handleGifError() {
    setIntroStage('exiting')
  }

  function handleSkipIntro() {
    setIntroStage('complete')
  }

  return (
    <BrowserRouter>
      <div inert={introStage !== 'complete'}>
        <AnimatedRoutes introComplete={introStage === 'complete'} />
      </div>
      {introStage !== 'complete' && (
        <BatmanLoader
          isExiting={introStage === 'exiting'}
          onLoad={handleGifLoad}
          onError={handleGifError}
          onSkip={handleSkipIntro}
        />
      )}
    </BrowserRouter>
  )
}

export default App
