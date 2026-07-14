import * as XLSX from 'xlsx';

export function exportExcel(state) {
  if (!state.rab) return;

  const rows = [['No', 'Uraian', 'Qty', 'Sat', 'Harga', 'Jumlah']];

  state.rab.sections.forEach(sec => {
    rows.push([sec.section, '', '', '', '', '']);
    sec.items.forEach(item => {
      rows.push([item.no, item.name, item.qty, item.unit, item.price, item.total]);
    });
    rows.push(['', 'Subtotal', '', '', '', sec.subtotal]);
  });

  rows.push(['', 'Subtotal', '', '', '', state.rab.subtotal]);
  rows.push(['', 'PPN', '', '', '', state.rab.ppn]);
  rows.push(['', 'Eskalasi', '', '', '', state.rab.eskalasi]);
  rows.push(['', 'Grand Total', '', '', '', state.rab.grandTotal]);

  const ws = XLSX.utils.aoa_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'RAB');
  XLSX.writeFile(wb, `RAB_${state.project.namaProyek.replaceAll(' ', '_')}.xlsx`);
}