import { card, heroesParams } from '../app.js';

export function createHero(heroStats) {
  const hero = document.createElement('div');

  //добавляем классы и id для DOM елемента
  hero.classList.add('hero');
  hero.classList.add(heroStats.faction);
  hero.classList.add(heroStats.ascention);
  hero.id = heroStats.pageId;

  //парметры для иконки героя
  hero.style.backgroundImage = 'url("img/' + heroStats.bgImage + '.jpg")';
  hero.style.backgroundSize = '64px';

  //вешаем событие по нажатию
  hero.addEventListener('click', (event) => card(event));

  addFactionIcon(hero, heroStats);

  //еслиу героя есть звезды то добавлем как потомков
  if (heroStats.stars) {
    addStars(hero, heroStats.stars);
  }

  return hero;
}

function addStars(hero, starsCount) {
  const star = document.createElement('div');
  star.className = 'stars-block';

  for (let starN = 1; starN <= starsCount; starN++) {
    const starImg = document.createElement('img');
    starImg.src = 'img/ascention_star.png';
    starImg.className = 'stars-block__star';

    star.appendChild(starImg);
  }

  hero.appendChild(star);
}

function addFactionIcon(hero, heroStats) {
  //добавляем иконку класса как потомка
  const factionIcon = document.createElement('img');
  factionIcon.src = `img/faction_${heroesParams.factions.indexOf(
    heroStats.faction
  )}.png`;
  factionIcon.classList.add('faction-icon');

  //если есть сигнатурка то добавляем кое-что:)
  if (heroStats.si) {
    const siSwitch =
      heroStats.si > 29
        ? 30
        : heroStats.si > 19
        ? 20
        : heroStats.si > 9
        ? 10
        : 0;
    factionIcon.classList.add('si' + siSwitch);
  }

  hero.appendChild(factionIcon);

  //это переделать!!!!
  if (heroStats.furniture > 2) {
    const furSwitch = heroStats.furniture > 8 ? 9 : 3;
    const furnitureGem = document.createElement('img');
    furnitureGem.src = 'img/fur.png';
    furnitureGem.classList.add('furniture' + furSwitch);

    hero.appendChild(furnitureGem);
    if (furSwitch === 9) {
      const furnitureGem = document.createElement('img');
      furnitureGem.src = 'img/fur.png';
      furnitureGem.classList.add('furniture' + furSwitch);
      hero.appendChild(furnitureGem);
    }
  }
}
