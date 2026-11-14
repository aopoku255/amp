import Image from "next/image";
import type { EventItem } from "@/data/events";

type Props = {
  event: EventItem;
  /** Tailwind aspect-ratio classes, e.g. "aspect-[4/3] lg:aspect-[4/5]" */
  aspect: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/** Large clickable photograph that opens the event video on YouTube in a new tab. */
export default function EventMedia({ event, aspect, sizes, priority, className = "" }: Props) {
  return (
    <a
      href={event.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch the ${event.title} event video on YouTube (opens in a new tab)`}
      className={`group relative block overflow-hidden bg-stone-200 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-paper ${aspect} ${className}`}
    >
      <Image
        src={event.image}
        alt={event.imageAlt}
        fill
        sizes={sizes}
        priority={priority}
        style={event.imagePosition ? { objectPosition: event.imagePosition } : undefined}
        className="object-cover saturate-[.82] transition-[transform,filter] duration-[1200ms] ease-out group-hover:scale-[1.04] group-hover:saturate-100 group-focus-visible:scale-[1.04] group-focus-visible:saturate-100 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      {/* Soft vignette so the play button reads on any photo */}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-5 left-5 flex items-center gap-3 text-white sm:bottom-7 sm:left-7"
      >
        <span className="flex size-12 items-center justify-center rounded-full border border-white/60 bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-white group-hover:bg-white group-hover:text-ink sm:size-14">
          <svg viewBox="0 0 24 24" className="ml-0.5 size-4 fill-current sm:size-5">
            <path d="M8 5.5v13a.5.5 0 0 0 .76.43l10.4-6.5a.5.5 0 0 0 0-.86L8.76 5.07A.5.5 0 0 0 8 5.5Z" />
          </svg>
        </span>
        <span className="translate-x-[-6px] text-xs font-medium uppercase tracking-[0.2em] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
          Watch film
        </span>
      </span>
    </a>
  );
}
