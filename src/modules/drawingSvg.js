export function renderDrawing(type, rab) {
  if (!rab) return `<div class="empty">Hitung RAB dulu untuk melihat gambar teknis.</div>`;

  if (type === 'pondasi') return renderPondasi(rab);
  if (type === 'tampak') return renderTampak(rab);
  if (type === 'potongan') return renderPotongan(rab);
  if (type === 'denah') return renderDenah(rab);

  return '';
}

function wrapSvg(title, desc, inner, viewBox = '0 0 580 420') {
  return `
    <svg viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg" role="img">
      <title>${title}</title>
      <desc>${desc}</desc>
      <rect width="100%" height="100%" fill="#ffffff" rx="16" />
      ${inner}
    </svg>
  `;
}

function renderPondasi(rab) {
  return wrapSvg(
    'Denah Pondasi',
    'Gambar skematik pondasi bangunan',
    `
      <text x="290" y="30" text-anchor="middle" font-size="16" font-family="Inter" font-weight="700">DENAH PONDASI</text>
      <rect x="120" y="80" width="340" height="220" fill="none" stroke="#888" stroke-width="2" />
      <rect x="150" y="110" width="40" height="40" fill="#FAEEDA" stroke="#BA7517"/>
      <rect x="390" y="110" width="40" height="40" fill="#FAEEDA" stroke="#BA7517"/>
      <rect x="150" y="220" width="40" height="40" fill="#FAEEDA" stroke="#BA7517"/>
      <rect x="390" y="220" width="40" height="40" fill="#FAEEDA" stroke="#BA7517"/>
    `
  );
}

function renderTampak(rab) {
  return wrapSvg(
    'Tampak Depan',
    'Gambar skematik tampak depan',
    `
      <text x="290" y="30" text-anchor="middle" font-size="16" font-family="Inter" font-weight="700">TAMPAK DEPAN</text>
      <rect x="120" y="120" width="340" height="160" fill="#F1EFE8" stroke="#888" />
      <polygon points="100,120 290,60 480,120" fill="#C04828" stroke="#8B3318" />
      <rect x="250" y="190" width="80" height="90" fill="#E8C98A" stroke="#BA7517" />
    `
  );
}

function renderPotongan(rab) {
  return wrapSvg(
    'Potongan A-A',
    'Gambar skematik potongan vertikal bangunan',
    `
      <text x="290" y="30" text-anchor="middle" font-size="16" font-family="Inter" font-weight="700">POTONGAN A - A</text>
      <rect x="120" y="100" width="340" height="40" fill="#E1F5EE" stroke="#1D9E75" />
      <rect x="120" y="140" width="340" height="120" fill="#F1EFE8" stroke="#888" />
      <rect x="120" y="260" width="340" height="20" fill="#B5D4F4" stroke="#378ADD" />
      <polygon points="110,100 290,50 470,100" fill="#C04828" stroke="#8B3318" />
    `
  );
}

function renderDenah(rab) {
  return wrapSvg(
    'Denah Lantai',
    'Denah layout ruangan',
    `
      <text x="290" y="30" text-anchor="middle" font-size="16" font-family="Inter" font-weight="700">DENAH LANTAI DASAR</text>
      <rect x="90" y="80" width="400" height="260" fill="#F8F7F4" stroke="#444" stroke-width="2" rx="8" />
      <rect x="100" y="90" width="170" height="110" fill="#E6F1FB" stroke="#888" />
      <rect x="270" y="90" width="210" height="110" fill="#E1F5EE" stroke="#888" />
      <rect x="100" y="200" width="150" height="140" fill="#FAEEDA" stroke="#888" />
      <rect x="250" y="200" width="100" height="70" fill="#EAF3DE" stroke="#888" />
      <rect x="250" y="270" width="100" height="70" fill="#FAECE7" stroke="#888" />
      <rect x="350" y="200" width="130" height="140" fill="#EEEDFE" stroke="#888" />
    `
  );
}