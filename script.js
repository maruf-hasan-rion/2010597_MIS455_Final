document.getElementById("searchButton").addEventListener("click", function () {
    var mealName = document.getElementById("searchInput").value;
    fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then((response) => response.json())
        .then((data) => {
            displayMealData(data);
        })
        .catch((error) => console.log("Error fetching country data:", error));
});

function displayMealData(data) {
    var mealDataContainer = document.getElementById("mealData");
    mealDataContainer.innerHTML = "";

    data.forEach((meal) => {
        var mealCard = document.createElement("div");
        mealCard.classList.add("meal-card");



    }

