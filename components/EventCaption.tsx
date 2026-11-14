import type { EventItem } from "@/data/events";

type Props = { event: EventItem; tone?: "light" | "dark"; large?: boolean };

export function eventNumber(id: number) {
  return String(id).padStart(2, "0");
}

/** Number, title, location and short description shown beside each photograph. */
export default function EventCaption({ event, tone = "light", large = false }: Props) {
  const muted = tone === "dark" ? "text-white/60" : "text-muted";
  return (
    <div className="flex gap-5 sm:gap-8">
      <span className={`pt-2 font-mono text-xs tracking-widest ${tone === "dark" ? "text-accent-soft" : "text-accent"}`}>
        {eventNumber(event.id)}
      </span>
      <div className="max-w-md">
        <h2
          className={`font-display leading-[1.05] tracking-tight ${
            large ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl"
          }`}
        >
          {event.title}
        </h2>
        <p className={`mt-3 text-xs font-medium uppercase tracking-[0.2em] ${muted}`}>{event.location}</p>
        <p className={`mt-5 text-[15px] leading-relaxed ${muted}`}>{event.description}</p>
      </div>
    </div>
  );
}
