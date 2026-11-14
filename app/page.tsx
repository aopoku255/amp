import Link from "next/link";
import StreamDeck from "@/components/StreamDeck";
import { events } from "@/data/events";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-night text-white">
      <header className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 py-5 sm:px-10">
        {/* Logo placeholder: swap for <Image src="/images/amp-ace-logo.svg" … /> */}
        <a href="/" aria-label="AMP ACE Multimedia home" className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          <span aria-hidden="true" className="flex size-9 items-center justify-center bg-white font-display text-lg text-night">
            A
          </span>
          <span className="text-[13px] tracking-[0.2em] sm:text-sm sm:tracking-[0.25em]">
            <span className="font-semibold">AMP ACE</span> <span className="text-white/50">MULTIMEDIA</span>
          </span>
        </a>
        <span className="hidden items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70 sm:flex">
          <span aria-hidden="true" className="relative flex size-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-live opacity-70 motion-reduce:hidden" />
            <span className="relative size-1.5 rounded-full bg-live" />
          </span>
          Live Event Streaming
        </span>
      </header>

      <main className="mx-auto w-full max-w-[1400px] flex-1 px-5 pb-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 pb-8 pt-8 sm:pt-12 lg:grid-cols-12 lg:items-end lg:pb-10 lg:pt-14">
          <h1 className="text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.035em] lg:col-span-8">
            Your event,{" "}
            <span className="font-display font-normal italic tracking-[-0.01em] text-white/90">live</span> to the
            world.
          </h1>
          <p className="max-w-md text-[15px] leading-relaxed text-white/55 lg:col-span-4">
            Conferences, workshops and corporate events, streamed live from distinguished venues across Ghana and
            Nigeria. Select a channel to watch.
          </p>
        </div>

        <StreamDeck events={events} />
      </main>

      <footer className="mx-auto flex w-full max-w-[1400px] flex-col gap-3 border-t border-white/10 px-5 py-6 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <span>© {new Date().getFullYear()} AMP ACE Multimedia</span>
        <span className="normal-case tracking-normal text-white/30">
          Channel photos via Wikimedia Commons:{" "}
          {events
            .filter((e) => e.credit)
            .map((e, i, arr) => (
              <span key={e.id}>
                <a href={e.credit!.source} target="_blank" rel="noopener noreferrer" className="hover:text-white/70">
                  {e.credit!.author}
                </a>{" "}
                ({e.credit!.license}){i < arr.length - 1 ? ", " : ""}
              </span>
            ))}
        </span>
        <Link href="/venues" className="transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none">
          Venue gallery →
        </Link>
      </footer>
    </div>
  );
}
