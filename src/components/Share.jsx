import { useEffect, useState } from "react";
import { CalendarPlus, Check, Link2, MessageCircle, Share2 } from "lucide-react";
import { WEDDING_DATA, WEDDING_DATE } from "../data/weddingData";
import { SectionDecor, SectionHeading } from "./Ornaments";

const toGoogleDate = (date) =>
  date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");

export default function Share() {
  const [copied, setCopied] = useState(false);
  const canNativeShare =
    typeof navigator !== "undefined" && Boolean(navigator.share);

  const url =
    typeof window !== "undefined" ? window.location.href : WEDDING_DATA.venue.mapsUrl;

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2400);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const nativeShare = async () => {
    try {
      await navigator.share({
        title: WEDDING_DATA.coupleShort,
        text: WEDDING_DATA.shareText,
        url,
      });
    } catch {
      /* guest dismissed the share sheet */
    }
  };

  const whatsapp = () => {
    const text = `${WEDDING_DATA.shareText}\n${url}`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const addToCalendar = () => {
    const start = new Date(WEDDING_DATE);
    const end = new Date(start.getTime() + 5 * 60 * 60 * 1000);

    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: `${WEDDING_DATA.groom.name} ও ${WEDDING_DATA.bride.name} — শুভ বিবাহ`,
      dates: `${toGoogleDate(start)}/${toGoogleDate(end)}`,
      details: WEDDING_DATA.shareText,
      location: WEDDING_DATA.venue.address,
      output: "xml",
    });

    window.open(
      `https://calendar.google.com/calendar/render?${params.toString()}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="section section--cream share" id="share">
      <SectionDecor />

      <div className="container">
        <SectionHeading
          kicker="শেয়াৰ"
          title={WEDDING_DATA.shareHeading}
          subtitle={WEDDING_DATA.shareIntro}
        />

        <div className="share__grid">
          <button type="button" className="share__card reveal" onClick={whatsapp}>
            <span className="share__icon">
              <MessageCircle size={20} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <h3>WhatsApp ত পঠিয়াওক</h3>
            <p>প্ৰিয়জনলৈ আমন্ত্ৰণৰ লিংক পঠিয়াই দিয়ক।</p>
          </button>

          <button
            type="button"
            className="share__card reveal reveal-delay-1"
            onClick={copy}
          >
            <span className="share__icon">
              {copied ? (
                <Check size={20} strokeWidth={1.8} aria-hidden="true" />
              ) : (
                <Link2 size={20} strokeWidth={1.7} aria-hidden="true" />
              )}
            </span>
            <h3>{copied ? "লিংক কপি হ'ল" : "লিংক কপি কৰক"}</h3>
            <p>{copied ? "এতিয়া য'ত বিচাৰে পেষ্ট কৰক।" : "এই আমন্ত্ৰণৰ লিংক কপি কৰি লওক।"}</p>
          </button>

          <button
            type="button"
            className="share__card reveal reveal-delay-2"
            onClick={addToCalendar}
          >
            <span className="share__icon">
              <CalendarPlus size={20} strokeWidth={1.7} aria-hidden="true" />
            </span>
            <h3>কেলেণ্ডাৰত যোগ কৰক</h3>
            <p>২২ নৱেম্বৰ ২০২৬ — যাতে পাহৰি নাযায়।</p>
          </button>
        </div>

        {canNativeShare && (
          <div className="share__more">
            <button type="button" className="btn btn--outline" onClick={nativeShare}>
              <Share2 size={15} strokeWidth={1.7} aria-hidden="true" />
              আন এপ്പত শেয়াৰ কৰক
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
