"use client";

import Image from "next/image";
import { useState } from "react";
import { youtubeId, type EventItem } from "@/data/events";

const ch = (n: number) => String(n).padStart(2, "0");

/**
 * Broadcast-style multiview: a large program monitor playing the selected
 * stream, plus a channel list to switch between events.
 */
export default function StreamDeck({ events }: { events: EventItem[] }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const current = events[active];
  const videoId = youtubeId(current.youtubeUrl);
  const src = videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&playsinline=1&autoplay=1`
    : null;

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
      {/* Program monitor */}
      <section aria-label="Now playing" className="lg:col-span-8">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-panel">
          <div className="flex items-center gap-4 border-b border-white/10 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">
            <span className="flex shrink-0 items-center gap-2 text-white">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-live" />
              CH {ch(current.id)}
            </span>
            <span className="min-w-0 flex-1 truncate" aria-live="polite">
              {current.title} <span className="text-white/35">·</span> {current.location}
            </span>
            <a
              href={current.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
            >
              YouTube ↗<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <div className="relative aspect-video bg-black">
            {playing && src ? (
              <iframe
                key={src}
                src={src}
                title={`${current.title} event stream`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 size-full"
              />
            ) : (
              // Poster: the player only loads when the visitor presses play.
              <button
                type="button"
                onClick={() => (src ? setPlaying(true) : window.open(current.youtubeUrl, "_blank", "noopener"))}
                aria-label={`Play the ${current.title} event stream`}
                className="group absolute inset-0 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
              >
                <Image
                  key={current.image}
                  src={current.image}
                  alt={current.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  style={current.imagePosition ? { objectPosition: current.imagePosition } : undefined}
                  className="object-cover opacity-70 saturate-[.8] transition duration-700 group-hover:scale-[1.02] group-hover:opacity-85"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
                <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-16 items-center justify-center rounded-full bg-white text-night shadow-2xl transition-transform duration-300 group-hover:scale-110 sm:size-20">
                    <svg viewBox="0 0 24 24" className="ml-1 size-6 fill-current sm:size-7">
                      <path d="M8 5.5v13a.5.5 0 0 0 .76.43l10.4-6.5a.5.5 0 0 0 0-.86L8.76 5.07A.5.5 0 0 0 8 5.5Z" />
                    </svg>
                  </span>
                </span>
                <span aria-hidden="true" className="absolute bottom-0 left-0 p-5 text-left sm:p-7">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">Streamed live</span>
                  <span className="mt-2 block text-2xl font-semibold tracking-tight sm:text-4xl">{current.title}</span>
                </span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Channel list */}
      <nav aria-label="Event channels" className="lg:col-span-4">
        <div className="flex h-full flex-col rounded-xl border border-white/10 bg-panel">
          <p className="flex items-center justify-between border-b border-white/10 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">
            <span>Channels</span>
            <span>{ch(events.length)}</span>
          </p>
          <ul className="grid flex-1 grid-cols-1 gap-1 p-2 sm:grid-cols-2 lg:grid-cols-1">
            {events.map((event, i) => {
              const isActive = i === active;
              return (
                <li key={event.id} className="flex">
                  <button
                    type="button"
                    aria-pressed={isActive}
                    aria-label={`Channel ${ch(event.id)}: ${event.title}, ${event.location}`}
                    onClick={() => {
                      setActive(i);
                      setPlaying(true);
                    }}
                    className={`group flex w-full items-center gap-4 rounded-lg p-2 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                      isActive ? "bg-white/[0.08]" : "hover:bg-white/[0.04]"
                    }`}
                  >
                    <span
                      className={`relative aspect-video w-32 shrink-0 overflow-hidden rounded-md ring-1 transition-shadow xl:w-36 ${
                        isActive ? "ring-2 ring-live" : "ring-white/10"
                      }`}
                    >
                      <Image
                        src={event.image}
                        alt=""
                        fill
                        sizes="144px"
                        style={event.imagePosition ? { objectPosition: event.imagePosition } : undefined}
                        className={`object-cover transition duration-500 ${
                          isActive ? "opacity-100" : "opacity-55 grayscale-[.6] group-hover:opacity-90 group-hover:grayscale-0"
                        }`}
                      />
                      <span className="absolute left-1.5 top-1.5 rounded-sm bg-black/70 px-1.5 py-0.5 font-mono text-[9px] tracking-wider text-white">
                        CH {ch(event.id)}
                      </span>
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[15px] font-medium leading-tight text-white">{event.title}</span>
                      <span className="mt-1.5 block truncate font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
                        {event.location}
                      </span>
                      {isActive && (
                        <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-live">
                          <span aria-hidden="true" className="size-1 rounded-full bg-live" />
                          On screen
                        </span>
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}
