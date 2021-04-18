import { heroesUser } from './app.js';

export function card(event) {
  const currentHero = heroesUser[event.target.id];
  console.log(currentHero.name);
}
