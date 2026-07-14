import { calculateRAB } from '../modules/rabCalculator.js';
import { exportPDF } from '../modules/exportPdf.js';
import { exportExcel } from '../modules/exportExcel.js';

export function bindEvents(state, renderApp) {
  document.addEventListener('click', (e) => {
    const tab = e.target.closest('[data-tab]')?.dataset.tab;
    const action = e.target.closest('[data-action]')?.dataset.action;
    const drawing = e.target.closest('[data-drawing]')?.dataset.drawing;

    if (tab) {
      state.activeTab = tab;
      renderApp(state);
      return;
    }

    if (drawing) {
      state.activeDrawing = drawing;
      renderApp(state);
      return;
    }

    if (action === 'calculate') {
      state.rab = calculateRAB(state.project);
      state.activeTab = 'rab';
      renderApp(state);
      return;
    }

    if (action === 'export-pdf') exportPDF(state);
    if (action === 'export-excel') exportExcel(state);
  });

  document.addEventListener('input', (e) => {
    const field = e.target.closest('[data-field]')?.dataset.field;
    if (!field) return;
    state.project[field] = e.target.type === 'number' ? Number(e.target.value) : e.target.value;
    if (field === 'searchHarga') state.searchHarga = e.target.value;
  });
}