import { mergedHeroes } from './app.js';

export function card(event) {
  const currentHero = mergedHeroes[event.target.id];
  console.table(currentHero);
}
