import './styles/main.css';
import { state } from './state.js';
import { renderApp } from './ui/renderApp.js';
import { bindEvents } from './ui/bindEvents.js';

renderApp(state);
bindEvents(state, renderApp);