export default function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-6 sm:px-10 sm:py-8">
      {/* Logo placeholder: swap this block for <Image src="/images/amp-ace-logo.svg" … /> */}
      <a
        href="#top"
        className="flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
        aria-label="AMP ACE Multimedia home"
      >
        <span aria-hidden="true" className="flex size-9 items-center justify-center bg-ink font-display text-lg text-paper">
          A
        </span>
        <span className="text-[13px] tracking-[0.2em] sm:text-sm sm:tracking-[0.25em]">
          <span className="font-semibold">AMP ACE</span> <span className="text-muted">MULTIMEDIA</span>
        </span>
      </a>
      <nav aria-label="Primary">
        <a
          href="#events"
          className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.2em] text-muted underline-offset-8 transition-colors hover:text-ink hover:underline focus-visible:text-ink focus-visible:underline focus-visible:outline-none"
        >
          Our Events
        </a>
      </nav>
    </header>
  );
}
