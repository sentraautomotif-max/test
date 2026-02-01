export function buildWhatsAppUrl(phone: string, text: string) {
  const base = `https://wa.me/${phone}`;
  const qs = new URLSearchParams({ text });
  return `${base}?${qs.toString()}`;
}

export function getUtmFromUrl(url: URL) {
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
  const out: Record<string, string> = {};
  for (const k of keys) {
    const v = url.searchParams.get(k);
    if (v) out[k] = v;
  }
  return out;
}
