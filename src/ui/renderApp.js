import { renderHeader } from './components/header.js';
import { renderTabs } from './components/tabs.js';
import { renderProjectForm } from './components/projectForm.js';
import { renderRABPanel } from './components/rabPanel.js';
import { renderDrawingPanel } from './components/drawingPanel.js';
import { renderHargaPanel } from './components/hargaPanel.js';
import { renderProfitPanel } from './components/profitPanel.js';

export function renderApp(state) {
  document.getElementById('app').innerHTML = `
    <div class="layout">
      ${renderHeader()}
      ${renderTabs(state)}
      ${renderProjectForm(state)}
      ${renderRABPanel(state)}
      ${renderDrawingPanel(state)}
      ${renderHargaPanel(state)}
      ${renderProfitPanel(state)}
    </div>
  `;
}