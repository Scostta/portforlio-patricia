import Link from 'next/link'

export function ChatFab() {
  return (
    <Link
      href="/chat"
      aria-label="Chat with Patricia's assistant"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
    >
      {/* Tooltip */}
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-ink text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg pointer-events-none">
        Ask me anything
      </span>

      {/* Button */}
      <div className="w-14 h-14 rounded-full bg-accent hover:bg-accent-hover shadow-card-hover-strong hover:shadow-card-hover transition-all duration-200 hover:scale-105 flex items-center justify-center">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            stroke="white"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  )
}
