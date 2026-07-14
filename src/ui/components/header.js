export function renderHeader() {
  return `
    <header class="header">
      <div>
        <h1>RAB Konstruksi Digital</h1>
        <p>Rencana Anggaran Biaya, Harga Material, Gambar Teknis, dan Analisa Keuntungan.</p>
      </div>
      <div class="header-actions">
        <button data-action="export-pdf">Export PDF</button>
        <button data-action="export-excel">Export Excel</button>
      </div>
    </header>
  `;
}