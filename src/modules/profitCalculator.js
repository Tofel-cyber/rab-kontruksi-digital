export function calculateProfit(rab, ohpPercent) {
  const nilaiKontrak = rab.grandTotal * (1 + Number(ohpPercent) / 100);
  const biayaLangsung = rab.grandTotal;
  const biayaTidakLangsung = rab.grandTotal * 0.08;
  const overhead = rab.grandTotal * 0.05;
  const totalBiaya = biayaLangsung + biayaTidakLangsung + overhead;
  const profit = nilaiKontrak - totalBiaya;
  const margin = nilaiKontrak > 0 ? (profit / nilaiKontrak) * 100 : 0;
  const roi = totalBiaya > 0 ? (profit / totalBiaya) * 100 : 0;

  return { nilaiKontrak, biayaLangsung, biayaTidakLangsung, overhead, totalBiaya, profit, margin, roi };
}