/**
 * handleSelectReward
 * Toggle modal display
 * @param {*} e - click event
 */
function handleSelectReward(e) {
  const contentNode = document.querySelector('.content');

  contentNode.classList.add('noscroll');
}

/**
 * filterOutOfStock
 */
function filterOutOfStock() {
  const cardItems = document.querySelectorAll('.item');

  cardItems.forEach((cardNode) => {
    const quantity = cardNode.querySelector('.item--quantity');
    const button = cardNode.querySelector('.btn--primary');

    if (quantity && quantity.innerText === '0') {
      cardNode.classList.add('item--disabled');

      // disable button
      button && button.classList.add('btn--disabled');
      return;
    }

    // Add event listener to 'Select Reward'
    button.addEventListener('click', handleSelectReward);
  });
}

/**
 * appendModalListeners
 */
function appendModalListeners() {
  const cardItems = document.querySelectorAll('.item');
}

function init() {
  filterOutOfStock();
  appendModalListeners();
}

init();
