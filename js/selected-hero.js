import { mergedHeroes } from './app.js';

export function card() {
  const container = document.querySelector('.selected-hero');
  const currentHero = mergedHeroes.find((item) => item.id === this.id);

  const capitalFirstLetter = function (str) {
    str = str.split('');
    str[0] = str[0].toUpperCase();

    return str.join('');
  };

  console.table(currentHero);
  container.classList.remove('selected-hero--none');

  const selectedHero = {
    name: container.querySelector('.static__name'),
    ascention: container.querySelector('.ascention__level'),
    faction: container.querySelector('.attributes__image--faction'),
    base: container.querySelector('.attributes__image--base'),
    class: container.querySelector('.attributes__image--class'),
    portrait: container.querySelector('.portrait-area__image'),
    furniture: container.querySelector('.selected-hero__furniture'),
    stars: container.querySelector('.ascention__stars-area'),
    gear: {
      weapon: container.querySelector('.gear__armor--weapon'),
      head: container.querySelector('.gear__armor--head'),
      chest: container.querySelector('.gear__armor--chest'),
      legs: container.querySelector('.gear__armor--legs'),
    },
    si: container.querySelector('.gear__artifact--si'),
    engraving: container.querySelector('.gear__artifact--engraving'),
  };

  selectedHero.name.textContent = capitalFirstLetter(currentHero.name);
  selectedHero.faction.src = `img/params/faction_${currentHero.mask[0]}.webp`;
  selectedHero.base.src = `img/params/base_${currentHero.mask[1]}.png`;
  selectedHero.class.src = `img/params/class_${currentHero.mask[2]}.png`;
  selectedHero.portrait.src = `img/heroes/${currentHero.bgImage}.jpg`;
  selectedHero.gear.weapon.textContent = 'T' + currentHero.gear[0];
  selectedHero.gear.head.textContent = 'T' + currentHero.gear[1];
  selectedHero.gear.chest.textContent = 'T' + currentHero.gear[2];
  selectedHero.gear.legs.textContent = 'T' + currentHero.gear[3];
  selectedHero.si.textContent = currentHero.si;
  selectedHero.engraving.textContent = currentHero.engraving;

  selectedHero.stars.innerHTML = '';
  if (currentHero.stars) {
    selectedHero.ascention.innerHTML = '';

    for (let i = 1; i <= currentHero.stars; i++) {
      const star = document.createElement('img');

      star.classList.add('stars-area__image');
      star.src = 'img/params/ascention_star.png';

      selectedHero.stars.append(star);
    }
  } else {
    selectedHero.ascention.textContent = currentHero.ascention;
  }

  selectedHero.furniture.innerHTML = '';
  if (currentHero.furniture != null) {
    for (let i = 0; i < 9; i++) {
      const fur = document.createElement('img');

      fur.classList.add('furniture__gem');
      if (i < currentHero.furniture) {
        fur.src = 'img/params/fur.png';
      } else {
        fur.src = 'img/params/fur_leg.png';
      }

      selectedHero.furniture.append(fur);
    }
  }
}
