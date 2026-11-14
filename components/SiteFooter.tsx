import { events } from "@/data/events";

export default function SiteFooter() {
  const credited = events.filter((e) => e.credit);
  return (
    <footer className="mx-auto max-w-[1400px] px-5 pb-10 pt-24 sm:px-10 sm:pt-32">
      <div className="flex flex-col gap-6 border-t border-line pt-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm tracking-[0.25em]">
            <span className="font-semibold">AMP ACE</span> <span className="text-muted">MULTIMEDIA</span>
          </p>
          <p className="mt-3 font-display text-2xl text-muted">Creating Experiences. Connecting People.</p>
        </div>
        <p className="text-xs text-muted">© {new Date().getFullYear()} AMP ACE Multimedia. All rights reserved.</p>
      </div>

      {credited.length > 0 && (
        <p className="mt-10 max-w-3xl text-[11px] leading-relaxed text-muted/80">
          Venue photography via Wikimedia Commons:{" "}
          {credited.map((e, i) => (
            <span key={e.id}>
              <a href={e.credit!.source} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">
                {e.title}
              </a>{" "}
              by {e.credit!.author} ({e.credit!.license})
              {i < credited.length - 1 ? "; " : "."}
            </span>
          ))}
        </p>
      )}
    </footer>
  );
}
