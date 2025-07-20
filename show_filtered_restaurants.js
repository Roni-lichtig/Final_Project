document.getElementById('applyFiltersBtn').addEventListener('click', function () {
  const checkedLocations = Array.from(document.querySelectorAll('input[name="location"]:checked'))
    .map(input => input.value.toLowerCase());

  const checkedPrices = Array.from(document.querySelectorAll('input[name="price"]:checked'))
    .map(input => input.value);

  const checkedRatings = Array.from(document.querySelectorAll('input[name="rating"]:checked'))
    .map(input => input.value.length); 

  const cards = document.querySelectorAll('.restaurant-card');

  let anyVisible = false; 

  cards.forEach(card => {
    const addressText = card.querySelector('.restaurant-card-text').textContent.toLowerCase();
    const infoDiv = card.querySelector('.light-text');

    const cardPrice = infoDiv.dataset.price;
    const cardRating = parseInt(infoDiv.dataset.rating);

    const locationMatch = checkedLocations.length === 0 ||
                          checkedLocations.some(location => addressText.includes(location));

    const priceMatch = checkedPrices.length === 0 || checkedPrices.includes(cardPrice);
    const ratingMatch = checkedRatings.length === 0 || checkedRatings.some(rating => cardRating >= rating);

    const shouldShow = locationMatch && priceMatch && ratingMatch;

    card.parentElement.style.display = shouldShow ? '' : 'none';
       if (shouldShow) anyVisible = true;
  });
  document.getElementById('noResultsMessage').style.display = anyVisible ? 'none' : 'block';
});
