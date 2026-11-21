# জয়ন্ত ♥ বন্দিতা — শুভ বিবাহ

অসমীয়া শৈলীত সজা এক ডিজিটেল বিয়াৰ নিমন্ত্ৰণী।
A cinematic Assamese wedding invitation, built with React + Vite.

**২২ নৱেম্বৰ ২০২৬ (৫ আঘোণ) · দেওবাৰ · গোপক গাঁও, ধেমাজি (অসম)**

---

## যি যি আছে / What's inside

- ৰাজকীয় গভীৰ সেউজ, সেন্দূৰ আৰু সোণৰ ৰঙৰ ডিজাইন
- "মোহৰ খোলক" intro, তাৰ পিছত লাহে লাহে প্ৰকাশ পোৱা section-সমূহ
- **তিনি ধৰণৰ scroll animation:**
  1. *Reveal* — section আৰু card-সমূহ scroll কৰিলে fade/rise হৈ ওলাই আহে
  2. *Parallax* — hero, interlude আৰু বিয়াঘৰৰ ফটোৱে গভীৰতা দি লাহে লাহে গতি কৰে
  3. *Pinned rail* — ৰীতি-নীতি section-ত তললৈ scroll কৰিলে ছটা ৰীতিৰ card পাশলৈ গতি কৰে
- Assamese numerals-ত লাইভ countdown (দিন / ঘণ্টা / মিনিট / ছেকেণ্ড)
- বিয়াৰ ছয়টা ৰীতি-নীতি (জোৰোণ, তেলনীয়া, নাহৰ, মালা লগা, সাত বিচনী, কইনা বিদায়) — প্ৰতিটোৰে উপযুক্ত ফটো
- বিয়াৰ দিনৰ কাৰ্যসূচী
- বিয়াঘৰৰ ঠাই + **Google Maps QR code** (স্কেন কৰিলেই মেপ খুলিব)
- ফটো গেলেৰী (কোনো মুখ নাই — কলপাত, গাঁধাফুল, চাকি, নদী)
- যোগাযোগ: ফোন + WhatsApp
- YouTube-ৰ জৰিয়তে বেকগ্ৰাউণ্ড সংগীত (তল-sোঁতাৰ বুটামেৰে বন্ধ/বজাব পাৰি)

## চলোৱাৰ নিয়ম / Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## তথ্য সলনি কৰাৰ নিয়ম / Edit the details

সকলো তথ্য একে ঠাইত:

```
src/data/weddingData.js
```

- `groom.name`, `bride.name` — নাম
- `dateLabel`, `weekday`, `assameseDate` — তাৰিখ
- `WEDDING_DATE` — countdown-ৰ বাবে (ISO format)
- `venue.address`, `venue.mapsUrl` — ঠাই আৰু মেপ লিংক। **QR code-টো এই `mapsUrl` ৰ পৰাই বনোৱা হয়।**
- `contact.phone`, `contact.phoneHref`, `contact.whatsappHref` — যোগাযোগ
- `MUSIC_VIDEO_ID` — YouTube ভিডিঅ' আইডি (ডিফল্ট: `K49-UyBSbOo`)
- `rituals[].image` — প্ৰতিটো ৰীতিৰ ফটো
- `galleryImages` — গেলেৰীৰ ফটো

## প্ৰযুক্তি / Tech

React 19 · Vite 8 · plain CSS (design tokens) · lucide-react · qrcode.react

## লাইচেণ্ছ / License

ব্যক্তিগত ব্যৱহাৰৰ বাবে। Personal use.
