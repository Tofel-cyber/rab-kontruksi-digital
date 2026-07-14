import { formatRupiah } from '../../modules/formatters.js';

export function renderRABPanel(state) {
  if (!state.rab) {
    return `
      <section class="panel ${state.activeTab === 'rab' ? 'active' : ''}">
        <h2>RAB Detail</h2>
        <p>Belum ada data. Klik hitung dulu.</p>
      </section>
    `;
  }

  return `
    <section class="panel ${state.activeTab === 'rab' ? 'active' : ''}">
      <h2>RAB Detail</h2>
      <div class="metrics">
        <div>Total RAB: ${formatRupiah(state.rab.grandTotal)}</div>
        <div>Luas Total: ${state.rab.luasTotal.toFixed(2)} m2</div>
        <div>Harga per m2: ${formatRupiah(state.rab.hargaPerM2)}</div>
      </div>

      ${state.rab.sections.map(sec => `
        <div class="section-card">
          <h3>${sec.section} - ${formatRupiah(sec.subtotal)}</h3>
          <table class="table">
            <thead>
              <tr>
                <th>No</th><th>Uraian</th><th>Qty</th><th>Sat</th><th>Harga</th><th>Jumlah</th>
              </tr>
            </thead>
            <tbody>
              ${sec.items.map(item => `
                <tr>
                  <td>${item.no}</td>
                  <td>${item.name}</td>
                  <td>${item.qty.toFixed(2)}</td>
                  <td>${item.unit}</td>
                  <td>${formatRupiah(item.price)}</td>
                  <td>${formatRupiah(item.total)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `).join('')}
    </section>
  `;
}