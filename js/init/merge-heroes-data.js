import { staticHeroes, userHeroes } from '../app.js';

mergeHeroesData();

function mergeHeroesData() {
  staticHeroes.map((staticHero) => {
    //объеденяем базовые хар-ки героев с пользовательским
    Object.assign(
      staticHero,
      userHeroes.find((userHero) => userHero.id === staticHero.id)
    );
  });
}
