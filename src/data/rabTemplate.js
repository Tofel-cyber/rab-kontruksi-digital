export const rabTemplate = [
  {
    section: 'Persiapan',
    items: [
      { no: '1.1', name: 'Pembersihan & Pengukuran Lahan', unit: 'm2', qtyFormula: 'luas', price: 35000 },
      { no: '1.2', name: 'Bowplank & Pematokan', unit: 'm', qtyFormula: 'keliling', price: 55000 },
      { no: '1.3', name: 'Sewa Direksi Keet 3 bulan', unit: 'ls', qtyFormula: '1', price: 3500000 },
      { no: '1.4', name: 'Mobilisasi Demobilisasi', unit: 'ls', qtyFormula: '1', price: 2500000 }
    ]
  },
  {
    section: 'Pekerjaan Tanah',
    items: [
      { no: '2.1', name: 'Galian Tanah Pondasi', unit: 'm3', qtyFormula: 'keliling * 1.2', price: 85000 },
      { no: '2.2', name: 'Urugan Kembali Tanah Bekas', unit: 'm3', qtyFormula: 'keliling * 0.4', price: 65000 },
      { no: '2.3', name: 'Urugan Sirtu Dipadatkan', unit: 'm3', qtyFormula: 'luas * 0.15', price: 215000 },
      { no: '2.4', name: 'Pembuangan Tanah Sisa', unit: 'm3', qtyFormula: 'keliling * 0.8', price: 95000 }
    ]
  },
  {
    section: 'Pondasi',
    items: [
      { no: '3.1', name: 'Lantai Kerja Beton B0 t5cm', unit: 'm3', qtyFormula: 'luas', price: 95000 },
      { no: '3.2', name: 'Pekerjaan Pondasi Footplat', unit: 'm', qtyFormula: 'keliling', price: 520000 },
      { no: '3.3', name: 'Sloof Beton Bertulang 15/20 cm', unit: 'm', qtyFormula: 'keliling', price: 285000 },
      { no: '3.4', name: 'Urugan Pasir Bawah Pondasi t10cm', unit: 'm3', qtyFormula: 'keliling * 0.15', price: 175000 }
    ]
  },
  {
    section: 'Struktur Beton',
    items: [
      { no: '4.1', name: 'Kolom Praktis 15/15 cm', unit: 'm', qtyFormula: 'keliling * lantai * tinggi', price: 225000 },
      { no: '4.2', name: 'Kolom Utama 30/30 cm', unit: 'm', qtyFormula: 'luasTotal * 0.16 * tinggi', price: 485000 },
      { no: '4.3', name: 'Balok Induk 25/40 cm', unit: 'm', qtyFormula: 'luas * lantai * 2', price: 545000 },
      { no: '4.4', name: 'Balok Anak 15/25 cm', unit: 'm', qtyFormula: 'p * l / 3 * lantai', price: 375000 },
      { no: '4.5', name: 'Plat Lantai Beton t12cm', unit: 'm3', qtyFormula: 'luas * (lantai - 1)', price: 185000 },
      { no: '4.6', name: 'Ring Balok 15/20 cm', unit: 'm', qtyFormula: 'keliling', price: 265000 },
      { no: '4.7', name: 'Tangga Beton Bertulang', unit: 'unit', qtyFormula: 'lantai > 1 ? 1 : 0', price: 185000000 }
    ]
  },
  {
    section: 'Pekerjaan Dinding',
    items: [
      { no: '5.1', name: 'Pasangan Dinding Bata Merah / Batako / Hebel', unit: 'm2', qtyFormula: 'luasDinding * 0.75', price: 195000 },
      { no: '5.2', name: 'Plesteran Dinding 1/2', unit: 'm2', qtyFormula: 'luasDinding * 0.75 * 2', price: 65000 },
      { no: '5.3', name: 'Acian Dinding', unit: 'm2', qtyFormula: 'luasDinding * 0.75 * 2', price: 45000 },
      { no: '5.4', name: 'Dinding Keramik KM/WC', unit: 'm2', qtyFormula: 'lantai * 6', price: 185000 }
    ]
  },
  {
    section: 'Pekerjaan Atap',
    items: [
      { no: '6.1', name: 'Kuda-kuda Baja Ringan / Kayu', unit: 'm2', qtyFormula: 'luas * 1.3', price: 185000 },
      { no: '6.2', name: 'Penutup Atap', unit: 'm2', qtyFormula: 'luas * 1.3', price: 225000 },
      { no: '6.3', name: 'Listplank GRC/Kayu 20cm', unit: 'm', qtyFormula: 'keliling * 2', price: 95000 },
      { no: '6.4', name: 'Talang Air PVC/Zincalume', unit: 'm', qtyFormula: 'keliling * 2', price: 85000 },
      { no: '6.5', name: 'Bubungan Nok Atap', unit: 'm', qtyFormula: 'p * 2', price: 125000 }
    ]
  },
  {
    section: 'Pekerjaan Lantai',
    items: [
      { no: '7.1', name: 'Pasang Lantai Keramik/Granit/Parket', unit: 'm2', qtyFormula: 'luasTotal * 0.85', price: 225000 },
      { no: '7.2', name: 'Rabat Beton t7cm Carport/Teras', unit: 'm3', qtyFormula: 'luas * 0.2', price: 155000 },
      { no: '7.3', name: 'Plint Keramik', unit: 'm', qtyFormula: 'keliling * 0.8', price: 55000 }
    ]
  },
  {
    section: 'Kusen, Pintu Jendela',
    items: [
      { no: '8.1', name: 'Kusen Daun Pintu Utama', unit: 'unit', qtyFormula: '1', price: 3500000 },
      { no: '8.2', name: 'Kusen Pintu Kamar Kayu', unit: 'unit', qtyFormula: 'lantai * 2', price: 2800000 },
      { no: '8.3', name: 'Pintu KM/WC PVC', unit: 'unit', qtyFormula: 'lantai', price: 1850000 },
      { no: '8.4', name: 'Kusen Jendela Kaca 80x120', unit: 'unit', qtyFormula: 'Math.ceil(keliling / 6)', price: 2200000 },
      { no: '8.5', name: 'Kunci, Engsel, Grendel Set', unit: 'set', qtyFormula: 'lantai * 3 * 2', price: 285000 }
    ]
  },
  {
    section: 'Instalasi Listrik',
    items: [
      { no: '9.1', name: 'Instalasi Listrik Daya 2200 VA', unit: 'ls', qtyFormula: '1', price: 4500000 },
      { no: '9.2', name: 'Panel MCB Instalasi', unit: 'unit', qtyFormula: '1', price: 4500000 },
      { no: '9.3', name: 'Stop Kontak Saklar', unit: 'ttk', qtyFormula: 'Math.round(luasTotal / 15)', price: 185000 },
      { no: '9.4', name: 'Lampu Fitting Armatur', unit: 'ttk', qtyFormula: 'Math.round(luasTotal / 10)', price: 225000 }
    ]
  },
  {
    section: 'Instalasi Sanitasi',
    items: [
      { no: '10.1', name: 'Instalasi Air Bersih Pipa PVC', unit: 'ls', qtyFormula: '1', price: 45000 },
      { no: '10.2', name: 'Instalasi Air Kotor Septitank', unit: 'ls', qtyFormula: '1', price: 12500000 },
      { no: '10.3', name: 'Closet Duduk Aksesori', unit: 'unit', qtyFormula: 'lantai', price: 3200000 },
      { no: '10.4', name: 'Wastafel Kran Cermin', unit: 'unit', qtyFormula: 'lantai', price: 1850000 },
      { no: '10.5', name: 'Shower Set Floor Drain', unit: 'set', qtyFormula: 'lantai', price: 1250000 },
      { no: '10.6', name: 'Pompa Air Tandon 1000L', unit: 'unit', qtyFormula: '1', price: 3500000 }
    ]
  },
  {
    section: 'Finishing',
    items: [
      { no: '11.1', name: 'Cat Interior 2 Lapis', unit: 'm2', qtyFormula: 'luasDinding * 0.75 * 2', price: 55000 },
      { no: '11.2', name: 'Cat Eksterior 2 Lapis', unit: 'm2', qtyFormula: 'luasDinding * 0.25 * 2', price: 72000 },
      { no: '11.3', name: 'Waterproofing Atap/KM', unit: 'm2', qtyFormula: 'luas * 0.1 * lantai * 8', price: 165000 },
      { no: '11.4', name: 'Plafon Gypsum Board 9mm', unit: 'm2', qtyFormula: 'luasTotal * 0.85', price: 185000 },
      { no: '11.5', name: 'List Profil Plafon', unit: 'm', qtyFormula: 'keliling * 0.8', price: 35000 },
      { no: '11.6', name: 'Pagar Carport', unit: 'ls', qtyFormula: '1', price: 28000000 }
    ]
  }
];