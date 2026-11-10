import { useState } from 'react'
import { Link } from 'react-router-dom'
import discordIcon from '../assets/images/discord.png'
import emailIcon from '../assets/images/email.png'
import gunsIcon from '../assets/images/guns.png'
import twitchIcon from '../assets/images/twitch.png'
import xIcon from '../assets/images/x.png'
import youtubeIcon from '../assets/images/youtube.png'

const emailAddress = 'pwake.labs@gmail.com'

const otherPlatforms = [
  {
    name: 'Twitch',
    handle: '@pwakeyt',
    icon: twitchIcon,
    href: 'https://twitch.tv/pwakeyt',
  },
  {
    name: 'X',
    handle: '@PwakeYT',
    icon: xIcon,
    href: 'https://x.com/PwakeYT',
  },
  {
    name: 'guns.lol',
    handle: 'pwake',
    icon: gunsIcon,
    href: 'https://guns.lol/pwake',
  },
]

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
    >
      <path
        d="M4.5 10h10m-4-4 4 4-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  )
}

function Socials() {
  const [copyStatus, setCopyStatus] = useState('')

  async function copyEmail() {
    if (!navigator.clipboard) {
      setCopyStatus('Copy unavailable — select the address')
      return
    }

    try {
      await navigator.clipboard.writeText(emailAddress)
      setCopyStatus('Email copied')
    } catch {
      setCopyStatus('Copy unavailable — select the address')
    }
  }

  return (
    <main className="min-h-screen bg-[#08080A] text-[#F5F5F5]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1160px] flex-col px-5 sm:px-8 lg:px-12">
        <header className="pt-6 sm:pt-8">
          <div className="flex items-center justify-between border-b border-[#29292D] pb-4">
            <Link
              to="/"
              className="font-display inline-flex min-h-11 items-center px-2 text-lg font-semibold tracking-[0.14em] sm:text-xl"
            >
              PWAKE<span className="text-[#FFB900]">.</span>
            </Link>
            <Link
              to="/index"
              className="ml-3 inline-flex min-h-11 shrink-0 items-center px-2 text-xs text-[#9299A6] transition-colors duration-200 hover:text-[#FFB900] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#FFB900] sm:text-sm"
            >
              ← INDEX
            </Link>
          </div>

          <div className="max-w-3xl py-12 sm:py-16 md:py-20">
            <p className="mb-5 text-sm font-medium text-[#9299A6]">
              A little about what I make
            </p>
            <h1 className="font-display text-[clamp(3.25rem,8vw,6rem)] font-semibold leading-[0.94] tracking-[-0.06em]">
              The Signal <span className="text-[#FFB900]">Room.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#B8BEC8] sm:text-lg sm:leading-8">
              I make Roblox videos, stream, and spend time with the communities
              that grow around them. Find my videos, catch a stream, or just say
              hello.
            </p>
          </div>
        </header>

        <section aria-labelledby="youtube-heading" className="pb-14 sm:pb-16">
          <div className="grid border-y border-[#29292D] md:grid-cols-[1.2fr_0.8fr]">
            <a
              href="https://youtube.com/@pwakeyt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube: @pwakeyt, opens in a new tab"
              className="group flex min-h-56 items-center gap-5 py-8 pr-4 outline-none transition-colors hover:bg-white/[0.025] focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-[#FFB900] sm:gap-7 sm:py-10 md:min-h-64 md:pr-10"
            >
              <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center border border-[#29292D] bg-[#101013] sm:h-20 sm:w-20">
                <img
                  src={youtubeIcon}
                  alt=""
                  width={42}
                  height={42}
                  className="h-9 w-9 object-contain sm:h-11 sm:w-11"
                />
              </div>
              <div className="min-w-0">
                <p className="mb-2 text-sm text-[#9299A6]">My videos and Shorts</p>
                <h2
                  id="youtube-heading"
                  className="font-display text-3xl font-semibold leading-tight tracking-[-0.04em] transition-colors group-hover:text-[#FFB900] sm:text-4xl"
                >
                  YouTube
                </h2>
                <span className="mt-1 block text-base text-[#9299A6]">@pwakeyt</span>
                <span className="mt-5 inline-flex min-h-11 items-center gap-3 text-sm font-medium text-[#F5F5F5]">
                  Visit my channel <ArrowIcon />
                </span>
              </div>
            </a>

            <div className="flex items-center border-t border-[#29292D] py-6 md:border-l md:border-t-0 md:px-8">
              <p className="max-w-xs text-sm leading-6 text-[#9299A6]">
                A combined audience of{' '}
                <span className="font-display text-2xl font-semibold tracking-[-0.04em] text-[#F5F5F5] sm:text-3xl">
                  20K+
                </span>{' '}
                across platforms.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="elsewhere-heading" className="pb-14 sm:pb-16">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2
              id="elsewhere-heading"
              className="font-display text-2xl font-medium tracking-[-0.03em] sm:text-3xl"
            >
              Elsewhere
            </h2>
            <p className="text-sm leading-6 text-[#9299A6]">
              Catch a stream or find me on other platforms.
            </p>
          </div>

          <ul className="grid border-t border-[#29292D] sm:grid-cols-3">
            {otherPlatforms.map((platform) => (
              <li
                key={platform.name}
                className="border-b border-[#29292D] sm:border-r sm:last:border-r-0"
              >
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${platform.name}: ${platform.handle}, opens in a new tab`}
                  className="group flex min-h-[88px] items-center gap-4 px-2 outline-none transition-colors hover:bg-white/[0.025] focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-[#FFB900] sm:min-h-28 sm:px-5"
                >
                  <img
                    src={platform.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="h-6 w-6 shrink-0 object-contain opacity-75 transition-opacity group-hover:opacity-100"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-medium text-[#F5F5F5] transition-colors group-hover:text-[#FFB900]">
                      {platform.name}
                    </span>
                    <span className="mt-1 block truncate text-sm text-[#9299A6]">
                      {platform.handle}
                    </span>
                  </span>
                  <span className="text-[#626B78] group-hover:text-[#FFB900]">
                    <ArrowIcon />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="grid gap-10 border-t border-[#29292D] py-10 md:grid-cols-2 md:gap-14 md:py-12">
          <section aria-labelledby="community-heading">
            <p className="mb-4 text-sm text-[#9299A6]">A place to hang out</p>
            <div className="flex items-start gap-4">
              <img
                src={discordIcon}
                alt=""
                width={32}
                height={32}
                className="mt-1 h-7 w-7 shrink-0 object-contain opacity-80"
              />
              <div>
                <h2
                  id="community-heading"
                  className="font-display text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl"
                >
                  Dragon Squad
                </h2>
                <p className="mt-1 text-sm text-[#9299A6]">Discord · pwakee</p>
                <p className="mt-4 max-w-md text-[15px] leading-7 text-[#B8BEC8]">
                  A gaming community to chat, interact, and meet people who
                  enjoy being part of the squad.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="contact-heading" className="md:border-l md:border-[#29292D] md:pl-10">
            <p className="mb-4 text-sm text-[#9299A6]">For questions, ideas, or a hello</p>
            <h2
              id="contact-heading"
              className="font-display text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl"
            >
              Get in touch.
            </h2>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <img
                src={emailIcon}
                alt=""
                width={24}
                height={24}
                className="h-5 w-5 shrink-0 object-contain opacity-70"
              />
              <a
                href={`mailto:${emailAddress}`}
                className="min-h-11 break-all py-2 text-[15px] text-[#F5F5F5] underline decoration-[#626B78] underline-offset-4 transition-colors hover:text-[#FFB900] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#FFB900] sm:text-base"
              >
                {emailAddress}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
                title={copyStatus || 'Copy email address'}
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-[#9299A6] transition-colors hover:text-[#FFB900] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#FFB900]"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <rect
                    x="7"
                    y="6"
                    width="9"
                    height="11"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M13 6V4.5A1.5 1.5 0 0 0 11.5 3h-7A1.5 1.5 0 0 0 3 4.5v9A1.5 1.5 0 0 0 4.5 15H7"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                </svg>
              </button>
              <p aria-live="polite" className="sr-only">
                {copyStatus}
              </p>
            </div>
          </section>
        </div>

        <footer className="mt-auto flex flex-col gap-3 border-t border-[#29292D] py-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs text-[#626B78]">PWAKE / PERSONAL NETWORK</span>
          <span className="text-xs text-[#626B78]">Thanks for stopping by.</span>
        </footer>
      </div>
    </main>
  )
}

export default Socials
