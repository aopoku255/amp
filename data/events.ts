/**
 * ─────────────────────────────────────────────────────────────
 *  AMP ACE MULTIMEDIA EVENTS — CENTRAL CONFIGURATION
 * ─────────────────────────────────────────────────────────────
 *  Everything on the page comes from this file. To update the
 *  site, edit the values below. No component changes needed.
 *
 *  1. YOUTUBE LINKS: paste each event video URL into
 *     YOUTUBE_URLS.
 *
 *  2. PHOTOS: replace the files in /public/images with your own
 *     event photographs, keeping the same filenames (or change
 *     the `image` path below). Then update or remove the
 *     matching `credit` entry.
 */

export const YOUTUBE_URLS = {
  kempinski: "https://www.youtube.com/live/euCyos02ZIA",
  fiestaRoyale: "https://www.youtube.com/live/qKs-IiW8EzE",
  marriottLagos: "https://www.youtube.com/live/f1odPUMAqco",
  cediConference: "https://www.youtube.com/live/vPXhgvD8w-Y",
} as const;

export type PhotoCredit = {
  author: string;
  license: string;
  source: string;
};

export type EventItem = {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
  /** Optional focal point for cropping, as CSS object-position (e.g. "70% 50%"). */
  imagePosition?: string;
  youtubeUrl: string;
  /** Attribution for the temporary photograph. Remove once you use your own. */
  credit?: PhotoCredit;
};

export const events: EventItem[] = [
  {
    id: 1,
    title: "Kempinski Gold Coast Hotel",
    location: "Accra, Ghana",
    description:
      "AMP ACE Multimedia has hosted professional conferences and events at this prestigious venue in the heart of Accra.",
    image: "/images/kempinski.jpg",
    imageAlt: "Palm-lined entrance to the Kempinski Hotel Gold Coast City, Accra",
    imagePosition: "78% 50%",
    youtubeUrl: YOUTUBE_URLS.kempinski,
    credit: {
      author: "daSupremo",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Kempinsky_Hotel_in_Accra_4.jpg",
    },
  },
  {
    id: 2,
    title: "Fiesta Royale Hotel",
    location: "Accra, Ghana",
    description:
      "Conferences and workshops hosted in a refined setting, organized and delivered by the AMP ACE Multimedia team.",
    image: "/images/fiesta-royale.jpg",
    imageAlt: "Covered terrace at Fiesta Royale Hotel, Accra, set with dressed tables for an event",
    youtubeUrl: YOUTUBE_URLS.fiestaRoyale,
    credit: {
      author: "Mammysou17",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Fiesta_Royale_Hotel_in_Accra.jpg",
    },
  },
  {
    id: 3,
    title: "Marriott Hotel",
    location: "Lagos, Nigeria",
    description:
      "Taking our event experience beyond Ghana, bringing people together across the region.",
    image: "/images/marriott-lagos.jpg",
    imageAlt: "Lagos city skyline, Nigeria",
    youtubeUrl: YOUTUBE_URLS.marriottLagos,
    credit: {
      author: "Clara Sanchiz",
      license: "CC BY-SA 2.0",
      source: "https://commons.wikimedia.org/wiki/File:Lagos_skyline.jpg",
    },
  },
  {
    id: 4,
    title: "Cedi Conference",
    location: "University of Ghana, Accra",
    description:
      "An academic conference at one of Africa's leading universities, connecting researchers, practitioners and industry.",
    image: "/images/cedi-conference.jpg",
    imageAlt: "The Great Hall clock tower at the University of Ghana, Legon, at sunset",
    youtubeUrl: YOUTUBE_URLS.cediConference,
    credit: {
      author: "Khobbyyyy",
      license: "CC0",
      source: "https://commons.wikimedia.org/wiki/File:Great_Hall_Tower.jpg",
    },
  },
];

/** Extracts the video ID from youtube.com/live/ID, /watch?v=ID, youtu.be/ID or /embed/ID links. */
export function youtubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") return u.pathname.slice(1) || null;
    const v = u.searchParams.get("v");
    if (v) return v;
    const m = u.pathname.match(/^\/(?:live|embed|shorts)\/([\w-]{6,})/);
    return m ? m[1] : null;
  } catch {
    return null;
  }
}
