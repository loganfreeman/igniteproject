export const toUnderscore = s =>
  s.replace(/([A-Z])/g, $1 => `_${$1.toLowerCase()}`).toUpperCase()
