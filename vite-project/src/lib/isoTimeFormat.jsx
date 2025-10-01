// src/lib/isoTimeFormat.js
export default function isoTimeFormat(isoString, opts = {}) {
  // return empty string for falsy input
  if (!isoString) return ""

  // create Date and guard against invalid dates
  const d = new Date(isoString)
  if (Number.isNaN(d.getTime())) return String(isoString)

  // default formatting options, merge with any provided options
  const defaultOpts = { hour: "2-digit", minute: "2-digit", hour12: true }
  const options = { ...defaultOpts, ...opts }

  // undefined locale uses the user's browser locale
  return d.toLocaleTimeString(undefined, options)
}
