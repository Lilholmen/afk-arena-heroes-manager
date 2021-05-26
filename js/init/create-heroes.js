import { heroesParams, heroes, heroesUser, card } from '../app.js';

const { factions, based, classes } = heroesParams;

createHeroes();

export const heroesGrid = document.querySelectorAll('.hero');

function createHeroes() {
  const heroArea = document.getElementById('heroes-section');

  heroesUser.map((userHero) => {
    //объеденяем базовые хар-ки героев с пользовательским
    Object.assign(
      userHero,
      heroes.find((baseHero) => baseHero.id === userHero.id)
    );
  });

  heroesUser.map((hero, mainId) => {
    //добавляем на страницу всех героев пользователя
    createHero(hero, mainId, heroArea);
  });
}

function createHero(hero, mainId, heroArea) {
  const heroTmp = document.createElement('div');

  heroTmp.className = generateClassName(hero);
  heroTmp.id = mainId;
  hero.sessionId = heroTmp.id;
  heroTmp.style.cssText = generateBgImg(hero);
  heroTmp.addEventListener('click', (event) => card(event));

  const factionIcon = document.createElement('img');
  factionIcon.src = `../img/faction_${factions.indexOf(hero.faction)}.png`;
  factionIcon.className = 'faction-icon';
  heroTmp.appendChild(factionIcon);

  if (hero.stars) {
    addStars(heroTmp, hero.stars);
  }

  heroArea.appendChild(heroTmp);
}

function generateBgImg(hero) {
  return (
    'background: url("img/' +
    factions.indexOf(hero.faction) +
    based.indexOf(hero.base) +
    classes.indexOf(hero.class) +
    '_' +
    hero.name.slice(0, 3) +
    '.jpg");background-size: 64px 64px;'
  );
}

function generateClassName(hero) {
  return `hero ${hero.faction} ${hero.ascention}`;
}

function addStars(heroTmp, starsCount) {
  const star = document.createElement('div');
  star.className = 'star-image-span';

  for (let starN = 1; starN <= starsCount; starN++) {
    const starImg = document.createElement('img');
    starImg.src = '../img/ascention_star.png';
    starImg.className = 'star';

    star.appendChild(starImg);
  }

  heroTmp.appendChild(star);
}
