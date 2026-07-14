import { renderDrawing } from '../../modules/drawingSvg.js';

export function renderDrawingPanel(state) {
  return `
    <section class="panel ${state.activeTab === 'gambar' ? 'active' : ''}">
      <h2>Gambar Teknis</h2>
      <div class="drawing-tabs">
        <button class="dtab ${state.activeDrawing === 'pondasi' ? 'active' : ''}" data-drawing="pondasi">Denah Pondasi</button>
        <button class="dtab ${state.activeDrawing === 'tampak' ? 'active' : ''}" data-drawing="tampak">Tampak Depan</button>
        <button class="dtab ${state.activeDrawing === 'potongan' ? 'active' : ''}" data-drawing="potongan">Potongan A-A</button>
        <button class="dtab ${state.activeDrawing === 'denah' ? 'active' : ''}" data-drawing="denah">Denah Lantai</button>
      </div>
      <div class="drawing-box">
        ${renderDrawing(state.activeDrawing, state.rab)}
      </div>
    </section>
  `;
}