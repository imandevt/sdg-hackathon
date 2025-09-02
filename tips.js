window.renderTips = function() {
  const tip = window.healthTips[Math.floor(Math.random() * window.healthTips.length)];
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
        <h2>Health Tips</h2>
        <p>${tip}</p>
      </div>
    </div>
  `;
};