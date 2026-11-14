import EventCaption from "@/components/EventCaption";
import EventMedia from "@/components/EventMedia";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { events } from "@/data/events";

/**
 * Editorial placements for the venue grid (desktop: 12 columns).
 * Order matches `events` in data/events.ts; the last event gets the featured treatment.
 */
const placements = [
  { wrap: "lg:col-span-7", aspect: "aspect-[4/3] lg:aspect-[7/6]", sizes: "(min-width: 1024px) 58vw, 100vw" },
  { wrap: "lg:col-span-5 lg:mt-48", aspect: "aspect-[4/3] lg:aspect-[4/5]", sizes: "(min-width: 1024px) 42vw, 100vw" },
  { wrap: "lg:col-span-8 lg:col-start-3 lg:mt-16", aspect: "aspect-[4/3] lg:aspect-[16/9]", sizes: "(min-width: 1024px) 66vw, 100vw" },
];

export default function Home() {
  const venues = events.slice(0, -1);
  const featured = events[events.length - 1];

  return (
    <div id="top">
      <SiteHeader />

      <main>
        {/* Introduction */}
        <section className="mx-auto max-w-[1400px] px-5 pb-20 pt-16 sm:px-10 sm:pb-28 sm:pt-24 lg:pt-32">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">Selected Events &amp; Venues</p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-tight">
            Creating Experiences.
            <br />
            <span className="italic text-muted">Connecting People.</span>
          </h1>
          <p className="mt-10 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:ml-[calc(50%+1rem)] lg:mt-14">
            From distinguished hotels to leading academic institutions, explore some of the venues where we have
            brought people together through impactful conferences, workshops, and events.
          </p>
        </section>

        {/* Venue grid */}
        <section id="events" aria-label="Our events" className="mx-auto max-w-[1400px] scroll-mt-8 px-5 sm:px-10">
          <ul className="grid grid-cols-1 gap-x-10 gap-y-20 sm:gap-y-28 lg:grid-cols-12 lg:gap-x-16">
            {venues.map((event, i) => {
              const p = placements[i % placements.length];
              return (
                <li key={event.id} className={p.wrap}>
                  <article>
                    <EventMedia event={event} aspect={p.aspect} sizes={p.sizes} priority={i === 0} />
                    <div className="mt-8">
                      <EventCaption event={event} />
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Featured: Cedi Conference */}
        {featured && (
          <section aria-label={featured.title} className="mt-28 bg-ink text-paper sm:mt-40">
            <article className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-5 py-20 sm:px-10 sm:py-28 lg:grid-cols-12 lg:gap-16 lg:py-36">
              <div className="lg:col-span-5 lg:col-start-1">
                <EventMedia
                  event={featured}
                  aspect="aspect-[4/5]"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="focus-visible:ring-offset-ink"
                />
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="mb-10 text-xs font-medium uppercase tracking-[0.25em] text-accent-soft">
                  Academic Conference
                </p>
                <EventCaption event={featured} tone="dark" large />
              </div>
            </article>
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
