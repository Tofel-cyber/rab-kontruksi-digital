import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { formatRupiah } from './formatters.js';

export function exportPDF(state) {
  if (!state.rab) return;

  const doc = new jsPDF('p', 'pt', 'a4');
  doc.setFontSize(16);
  doc.text('RAB Konstruksi Digital', 40, 40);
  doc.setFontSize(10);
  doc.text(`Proyek: ${state.project.namaProyek}`, 40, 58);
  doc.text(`Lokasi: ${state.project.lokasi}`, 40, 72);

  const body = [];
  state.rab.sections.forEach(sec => {
    body.push([{ content: sec.section, colSpan: 6, styles: { fillColor: [29, 158, 117], textColor: 255 } }]);
    sec.items.forEach(item => {
      body.push([
        item.no,
        item.name,
        item.qty.toFixed(2),
        item.unit,
        formatRupiah(item.price),
        formatRupiah(item.total)
      ]);
    });
    body.push([
      { content: '', colSpan: 5 },
      { content: formatRupiah(sec.subtotal), styles: { fontStyle: 'bold' } }
    ]);
  });

  autoTable(doc, {
    startY: 90,
    head: [['No', 'Uraian', 'Qty', 'Sat', 'Harga', 'Jumlah']],
    body,
    styles: { fontSize: 8 }
  });

  doc.save(`RAB_${state.project.namaProyek.replaceAll(' ', '_')}.pdf`);
}