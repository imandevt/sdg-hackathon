window.meals = JSON.parse(localStorage.getItem('meals')) || [];

window.renderDashboard = function() {
  const userMeals = window.meals.filter(m => m.userEmail === window.currentUser.email);
  const suggestion = window.getSuggestion(userMeals);
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="sidebar">
      <h2>Diet Tracker</h2>
      <a href="#dashboard">Dashboard</a>
      <a href="#progress">Progress</a>
      <a href="#tips">Tips</a>
      <button onclick="window.logout()">Log Out</button>
    </div>
    <div class="content">
      <div class="container">
        <h2>Welcome, ${window.currentUser.email}</h2>
        <h3>Log a Meal</h3>
        <div id="meal-error" class="error"></div>
        <form id="meal-form">
          <input id="food" type="text" placeholder="Food Name" required>
          <input id="portion" type="number" placeholder="Portion (grams)" required>
          <select id="meal-type">
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Snack</option>
          </select>
          <button type="submit">Log Meal</button>
        </form>
        <h3>Your Meals</h3>
        <table>
          <thead>
            <tr>
              <th>Food</th>
              <th>Portion (g)</th>
              <th>Meal Type</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            ${userMeals.map(meal => `
              <tr>
                <td>${meal.food}</td>
                <td>${meal.portion}</td>
                <td>${meal.mealType}</td>
                <td>${new Date(meal.timestamp).toLocaleDateString()}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <h3>Suggestions</h3>
        <p>${suggestion}</p>
      </div>
    </div>
  `;
  document.getElementById('meal-form').addEventListener('submit', window.logMeal);
};

window.logMeal = function(e) {
  e.preventDefault();
  const food = document.getElementById('food').value;
  const portion = parseInt(document.getElementById('portion').value);
  const mealType = document.getElementById('meal-type').value;
  const errorDiv = document.getElementById('meal-error');
  if (portion <= 0) {
    errorDiv.textContent = 'Portion must be positive';
    return;
  }
  window.meals.push({
    userEmail: window.currentUser.email,
    food,
    portion,
    mealType,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('meals', JSON.stringify(window.meals));
  document.getElementById('food').value = '';
  document.getElementById('portion').value = '';
  document.getElementById('meal-type').value = 'Breakfast';
  render();
};