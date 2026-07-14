import { rabTemplate } from '../data/rabTemplate.js';

function evalFormula(formula, ctx) {
  return Function(...Object.keys(ctx), `return ${formula}`)(...Object.values(ctx));
}

export function calculateRAB(project) {
  const p = Number(project.panjang);
  const l = Number(project.lebar);
  const lantai = Number(project.lantai);
  const tinggi = Number(project.tinggiPerLantai);

  const luas = p * l;
  const luasTotal = luas * lantai;
  const keliling = 2 * (p + l);
  const luasDinding = keliling * tinggi * lantai;

  const ctx = { p, l, lantai, tinggi, luas, luasTotal, keliling, luasDinding, Math };

  const sections = rabTemplate.map(section => {
    const items = section.items.map(item => {
      const qty = evalFormula(item.qtyFormula, ctx);
      const total = qty * item.price;
      return { ...item, qty, total };
    });
    return {
      section: section.section,
      items,
      subtotal: items.reduce((sum, item) => sum + item.total, 0)
    };
  });

  const subtotal = sections.reduce((sum, sec) => sum + sec.subtotal, 0);
  const ppn = subtotal * 0.11;
  const eskalasi = subtotal * (Number(project.eskalasi) / 100);
  const grandTotal = subtotal + ppn + eskalasi;
  const hargaPerM2 = grandTotal / luasTotal;

  return {
    luas,
    luasTotal,
    keliling,
    luasDinding,
    sections,
    subtotal,
    ppn,
    eskalasi,
    grandTotal,
    hargaPerM2
  };
}