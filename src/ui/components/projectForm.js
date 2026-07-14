export function renderProjectForm(state) {
  const p = state.project;
  return `
    <section class="panel ${state.activeTab === 'proyek' ? 'active' : ''}">
      <h2>Data Proyek</h2>
      <div class="grid2">
        <label>Nama Proyek<input data-field="namaProyek" value="${p.namaProyek}" /></label>
        <label>Lokasi<input data-field="lokasi" value="${p.lokasi}" /></label>
        <label>Pemilik<input data-field="pemilik" value="${p.pemilik}" /></label>
        <label>Tahun Anggaran<input type="number" data-field="tahunAnggaran" value="${p.tahunAnggaran}" /></label>
      </div>
      <div class="grid3">
        <label>Panjang<input type="number" data-field="panjang" value="${p.panjang}" /></label>
        <label>Lebar<input type="number" data-field="lebar" value="${p.lebar}" /></label>
        <label>Jumlah Lantai<input type="number" data-field="lantai" value="${p.lantai}" /></label>
      </div>
      <div class="grid3">
        <label>Tinggi Per Lantai<input type="number" step="0.1" data-field="tinggiPerLantai" value="${p.tinggiPerLantai}" /></label>
        <label>OHP %<input type="number" data-field="ohp" value="${p.ohp}" /></label>
        <label>Eskalasi %<input type="number" data-field="eskalasi" value="${p.eskalasi}" /></label>
      </div>
      <button class="btn-primary" data-action="calculate">Hitung RAB Lengkap</button>
    </section>
  `;
}