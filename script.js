function addRecipe() {
    var name = document.getElementById('recipe-name').value;
    var ingredients = document.getElementById('recipe-ingredients').value;
    var instructions = document.getElementById('recipe-instructions').value;

    if (name && ingredients && instructions) {
        var recipeContainer = document.getElementById('recipes');
        var recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe';
        recipeDiv.innerHTML = `<h3>${name}</h3><p><strong>Ingredients:</strong> ${ingredients}</p><p><strong>Instructions:</strong> ${instructions}</p>`;
        recipeContainer.appendChild(recipeDiv);

        // Clear the form fields
        document.getElementById('recipe-name').value = '';
        document.getElementById('recipe-ingredients').value = '';
        document.getElementById('recipe-instructions').value = '';
    } else {
        alert('Please fill in all fields');
    }
}

