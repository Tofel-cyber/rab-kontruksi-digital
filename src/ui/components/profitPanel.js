import { calculateProfit } from '../../modules/profitCalculator.js';
import { formatRupiah, formatPercent } from '../../modules/formatters.js';

export function renderProfitPanel(state) {
  if (!state.rab) {
    return `
      <section class="panel ${state.activeTab === 'profit' ? 'active' : ''}">
        <h2>Analisa Keuntungan</h2>
        <p>Hitung RAB terlebih dahulu.</p>
      </section>
    `;
  }

  const profit = calculateProfit(state.rab, state.project.ohp);

  return `
    <section class="panel ${state.activeTab === 'profit' ? 'active' : ''}">
      <h2>Analisa Keuntungan</h2>
      <div class="metrics">
        <div>Nilai Kontrak: ${formatRupiah(profit.nilaiKontrak)}</div>
        <div>Total Biaya: ${formatRupiah(profit.totalBiaya)}</div>
        <div>Profit: ${formatRupiah(profit.profit)}</div>
        <div>Margin: ${formatPercent(profit.margin)}</div>
      </div>
    </section>
  `;
}