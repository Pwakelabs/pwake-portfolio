
import batmanGif from '../assets/animations/batman-loading.gif'

type BatmanLoaderProps = {
  isExiting: boolean
  onLoad: () => void
  onError: () => void
  onSkip: () => void
}

function BatmanLoader({ isExiting, onLoad, onError, onSkip }: BatmanLoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-[#08080A] transition-opacity duration-500 ${
        isExiting ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <span className="sr-only">Loading portfolio</span>
      <img
        src={batmanGif}
        alt=""
        aria-hidden="true"
        onLoad={onLoad}
        onError={onError}
        className="h-auto max-h-[70vh] w-64 max-w-[70vw] object-contain"
      />
      <button
        type="button"
        autoFocus
        onClick={onSkip}
        className="absolute bottom-8 inline-flex min-h-11 items-center border border-white/20 px-5 text-sm text-gray-300 transition hover:border-amber-400 hover:text-white"
      >
        Skip intro
      </button>
    </div>
  )
}

export default BatmanLoader
