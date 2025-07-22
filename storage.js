document.getElementById("submit_review").onclick = function () {
  let fullName = document.getElementById("name").value;
  let headline = document.getElementById("headline").value;
  let rating = document.getElementById("rating").value;
  let restaurant = document.getElementById("restaurant").value;
  let price_rating = document.getElementById("price_rating").value;
  let preferences = document.getElementById("preferences").value;
  let specialOccasion = document.getElementById("specialOccasion").value;
  let timing = document.getElementById("timing").value;
  let good_review = document.getElementById("good_review").value;
  let negative_review = document.getElementById("negative_review").value;

  localStorage.setItem('fullName', fullName);
  localStorage.setItem('headline', headline);
  localStorage.setItem('rating', rating);
  localStorage.setItem('restaurant', restaurant);
  localStorage.setItem('price_rating', price_rating);
  localStorage.setItem('preferences', preferences);
  localStorage.setItem('specialOccasion', specialOccasion);
  localStorage.setItem('timing', timing);
  localStorage.setItem('good_review', good_review);
  localStorage.setItem('negative_review', negative_review);

  window.location = "Reviews.html";
};
