export const SET_VIEW = 'SET_VIEW';

export const VIEWS = {
  HOME: 'HOME',
  PHASE: 'PHASE'
}

export function setView(view) {
  return { type: SET_VIEW, view };
}
