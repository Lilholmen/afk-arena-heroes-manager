export function addSortOnButtons() {
  document.querySelectorAll('.sort__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      btnClickEvent(btn);
    });
  });
}

function btnClickEvent(btn) {
  const activeSection = document.querySelector('.sort__active-sort');
  const inactiveSection = document.querySelector('.sort__inactive-sort');
  const activeSorts = [3];

  if (btn.classList[2] === 'sort__btn--inactive') {
    btn.classList.add('sort__btn--active');
    btn.classList.remove('sort__btn--inactive');
    activeSection.append(btn);
    activeSorts.push(+btn.id);
  } else {
    btn.classList.add('sort__btn--inactive');
    btn.classList.remove('sort__btn--active');
    inactiveSection.append(btn);
    activeSorts.splice(activeSorts.indexOf(btn.id), 1);
  }
}
