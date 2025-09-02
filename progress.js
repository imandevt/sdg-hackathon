window.renderProgress = function() {
  const userMeals = window.meals.filter(m => m.userEmail === window.currentUser.email);
  const calorieData = {};
  userMeals.forEach(meal => {
    const date = new Date(meal.timestamp).toLocaleDateString();
    const calories = (window.nutritionData[meal.food]?.calories || 0) * (meal.portion / 100);
    calorieData[date] = (calorieData[date] || 0) + calories;
  });
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
        <h2>Progress</h2>
        <canvas id="calorieChart" style="max-height: 300px;"></canvas>
      </div>
    </div>
  `;
  const ctx = document.getElementById('calorieChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(calorieData),
      datasets: [{
        label: 'Calories',
        data: Object.values(calorieData),
        backgroundColor: '#007bff'
      }]
    },
    options: { scales: { y: { beginAtZero: true } } }
  });
};