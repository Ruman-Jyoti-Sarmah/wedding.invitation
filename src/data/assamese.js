const ASSAMESE_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

/** Convert any number (or numeric string) to Assamese numerals. */
export function toAssameseDigits(value) {
  return String(value).replace(/\d/g, (digit) => ASSAMESE_DIGITS[Number(digit)]);
}

/** Pad a countdown value to two characters, in Assamese numerals. */
export function padAssamese(value) {
  return toAssameseDigits(String(value).padStart(2, "0"));
}

/** Weekday label in Assamese for a given YYYY-MM-DD date string. */
const WEEKDAYS = [
  "দেওবাৰ",
  "সোমবাৰ",
  "মঙ্গলবাৰ",
  "বুধবাৰ",
  "বৃহস্পতিবাৰ",
  "শুক্ৰবাৰ",
  "শনিবাৰ",
];

export function assameseWeekday(date) {
  return WEEKDAYS[new Date(date).getDay()] ?? "";
}
