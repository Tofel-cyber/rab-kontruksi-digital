import { projectDefaults } from './data/projectDefaults.js';

export const state = {
  activeTab: 'proyek',
  activeDrawing: 'pondasi',
  searchHarga: '',
  project: { ...projectDefaults },
  rab: null
};