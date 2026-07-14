import { materialPrices } from '../../data/materialPrices.js';
import { formatRupiah } from '../../modules/formatters.js';

export function renderHargaPanel(state) {
  const q = state.searchHarga.trim().toLowerCase();
  const list = materialPrices.filter(item =>
    item.nama.toLowerCase().includes(q) || item.kategori.toLowerCase().includes(q)
  );

  return `
    <section class="panel ${state.activeTab === 'harga' ? 'active' : ''}">
      <h2>Harga Material</h2>
      <input placeholder="Cari material..." data-field="searchHarga" value="${state.searchHarga}" />
      <table class="table">
        <thead>
          <tr>
            <th>Nama</th><th>Satuan</th><th>Harga</th><th>Kategori</th><th>Tren</th>
          </tr>
        </thead>
        <tbody>
          ${list.map(item => `
            <tr>
              <td>${item.nama}</td>
              <td>${item.satuan}</td>
              <td>${formatRupiah(item.harga)}</td>
              <td>${item.kategori}</td>
              <td>${item.tren}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </section>
  `;
}