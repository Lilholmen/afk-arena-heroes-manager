import { mergedHeroes } from './app.js';

export function card() {
  const container = document.querySelector('.selected-hero');
  const currentHero = mergedHeroes.find((item) => item.id === this.id);

  console.table(currentHero);
  container.classList.remove('selected-hero--none');

  const selectedHero = {
    name: container.querySelector('.selected-hero__name'),
    ascention: container.querySelector('.selected-hero__ascention'),
    faction: container.querySelector('.selected-hero__faction'),
    base: container.querySelector('.selected-hero__base'),
    class: container.querySelector('.selected-hero__class'),
    portrait: container.querySelector('.selected-hero__portrait'),
    furniture: container.querySelector('.selected-hero__furniture'),
    stars: container.querySelector('.selected-hero__stars'),
  };

  selectedHero.name.textContent = currentHero.name;
  selectedHero.ascention.textContent = currentHero.ascention;
  selectedHero.faction.src = `img/params/faction_${currentHero.mask[0]}.webp`;
  selectedHero.base.src = `img/params/base_${currentHero.mask[1]}.png`;
  selectedHero.class.src = `img/params/class_${currentHero.mask[2]}.png`;
  selectedHero.portrait.src = `img/heroes/${currentHero.bgImage}.jpg`;

  selectedHero.stars.innerHTML = '';
  if (currentHero.stars) {
    for (let i = 1; i <= currentHero.stars; i++) {
      const star = document.createElement('img');

      star.classList.add('ascention__star');
      star.src = 'img/params/ascention_star.png';

      selectedHero.stars.append(star);
    }
  }

  selectedHero.furniture.innerHTML = '';
  if (currentHero.furniture) {
    for (let i = 1; i <= currentHero.furniture; i++) {
      const fur = document.createElement('img');

      fur.classList.add('furniture__mythic');
      fur.src = 'img/params/furniture_0.png';

      selectedHero.furniture.append(fur);
    }
  }
}
