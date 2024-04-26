function searchMeal() {
    const searchBox = document.getElementById('searchInput').value.trim();
    const Url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBox}`;

    fetch(Url)
        .then(response => response.json())
        .then(data => {
            const meals = data.meals;
            const mealListDiv = document.getElementById('mealList');
            mealListDiv.innerHTML = '';

            if (meals) {
                const limitedMeals = meals.slice(0, 5);
                limitedMeals.forEach(meal => {
                    const mealDiv = document.createElement('div');
                    mealDiv.classList.add('meal');
                    mealDiv.innerHTML = `
                        <p><strong>Meal ID:</strong> ${meal.idMeal}</p>
                        <p><strong>Meal Name: </strong>${meal.strMeal}</p>
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                        <p><strong>Meal Area:</strong> ${meal.strArea}</p>
                        <p><strong>Cooking Instructions:</strong> ${meal.strInstructions}</p>
                    `;
                    mealListDiv.appendChild(mealDiv);
                });

                if (meals.length > 5) {
                    document.getElementById('showAllBtn').style.display = 'block';
                } else {
                    document.getElementById('showAllBtn').style.display = 'none';
                }
            } else {
                mealListDiv.innerHTML = '<p>No meals found</p>';
                document.getElementById('showAllBtn').style.display = 'none';
            }
        })
        .catch(error => console.log(error));
}

function showAllMeals() {
    const searchBox = document.getElementById('searchInput').value.trim();
    const Url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBox}`;

    fetch(Url)
        .then(response => response.json())
        .then(data => {
            const meals = data.meals;
            const mealListDiv = document.getElementById('mealList');
            mealListDiv.innerHTML = '';

            if (meals) {
                meals.forEach(meal => {
                    const mealDiv = document.createElement('div');
                    mealDiv.classList.add('meal');
                    mealDiv.innerHTML = `
                        <h2>${meal.strMeal}</h2>
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                        <p><strong>Meal ID:</strong> ${meal.idMeal}</p>
                        <p><strong>Cooking Instructions:</strong> ${meal.strInstructions}</p>
                    `;
                    mealListDiv.appendChild(mealDiv);
                });

                document.getElementById('showAllBtn').style.display = 'none';
            } else {
                mealListDiv.innerHTML = '<p>No meals found</p>';
                document.getElementById('showAllBtn').style.display = 'none';
            }
        })
        .catch(error => console.log(error));
}