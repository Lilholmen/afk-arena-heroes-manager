import { heroesUser } from './app.js';

export function card(event) {
  const currentHero = heroesUser[event.target.id];
  console.table(currentHero);

  //const container = document.querySelector('.heroes__container');

  //const card = document.querySelector('div');

  //container.append(card);
}
