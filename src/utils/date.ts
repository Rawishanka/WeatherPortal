export function formatWeatherDate(dateStr: string): string {
  // Convert "YYYY-MM-DD HH:mm" → "YYYY-MM-DDTHH:mm"
  const isoStr = dateStr.replace(" ", "T");

  const date = new Date(isoStr);

  return date.toLocaleString("en-US", {
    weekday: "long",   // "Thursday"
    year: "numeric",   // "2025"
    month: "long",     // "June"
    day: "numeric",    // "19"
    hour: "2-digit",   // "1 PM"
    minute: "2-digit", // "30"
    hour12: true,      // 12-hour format
  });
}
