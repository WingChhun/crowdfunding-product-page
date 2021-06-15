// Add cardItem disabled class

/**
 * filterOutOfStock
 */
function filterOutOfStock() {
  const cardItems = document.querySelectorAll('.item');

  cardItems.forEach((cardNode) => {
    const quantity = cardNode.querySelector('.item--quantity');

    if (quantity && quantity.innerText === '0') {
      cardNode.classList.add('item--disabled');

      // Disable button
      const button = cardNode.querySelector('.btn--primary');

      if (button) {
        button.classList.add('btn--disabled');
      }
    }
  });
}

function init() {
  filterOutOfStock();
}

init();
