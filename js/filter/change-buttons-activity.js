export function changeButtonsActivity(
  targetFilterType,
  targetFilterId,
  modifier
) {
  const targetBtns = document.querySelectorAll(
    `.filter__btn--${targetFilterType}`
  );

  if (isNaN(targetFilterId)) {
    targetBtns.forEach((btn) => btn.classList.remove('filter__btn--active'));
    targetBtns[0].classList.add('filter__btn--active');
    return;
  }

  if (modifier) {
    targetBtns[targetFilterId + 1].classList.remove('filter__btn--active');
    return;
  }

  targetBtns[0].classList.remove('filter__btn--active');
  targetBtns[targetFilterId + 1].classList.add('filter__btn--active');
}
