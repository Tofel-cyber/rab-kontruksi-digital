export function renderTabs(state) {
  const tabs = [
    ['proyek', 'Data Proyek'],
    ['rab', 'RAB Detail'],
    ['gambar', 'Gambar Teknis'],
    ['harga', 'Harga Material'],
    ['profit', 'Analisa Keuntungan']
  ];

  return `
    <nav class="tabs">
      ${tabs.map(([key, label]) => `
        <button class="tab ${state.activeTab === key ? 'active' : ''}" data-tab="${key}">
          ${label}
        </button>
      `).join('')}
    </nav>
  `;
}