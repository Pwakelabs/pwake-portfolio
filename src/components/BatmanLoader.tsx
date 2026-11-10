
import batmanGif from '../assets/animations/batman-loading.gif'

type BatmanLoaderProps = {
  isExiting: boolean
  onLoad: () => void
  onError: () => void
}

function BatmanLoader({ isExiting, onLoad, onError }: BatmanLoaderProps) {
  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-[#08080A] transition-opacity duration-500 ${
        isExiting ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <img
        src={batmanGif}
        alt="Batman loading animation"
        onLoad={onLoad}
        onError={onError}
        className="h-auto max-h-[70vh] w-64 max-w-[70vw] object-contain"
      />
    </div>
  )
}

export default BatmanLoader
