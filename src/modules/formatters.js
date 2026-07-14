export function formatRupiah(value) {
  return `Rp ${Math.round(value).toLocaleString('id-ID')}`;
}

export function formatNumber(value, fraction = 2) {
  return Number(value).toFixed(fraction);
}

export function formatPercent(value, fraction = 1) {
  return `${Number(value).toFixed(fraction)}%`;
}