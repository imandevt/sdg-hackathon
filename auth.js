// Auth state
window.users = JSON.parse(localStorage.getItem('users')) || [];
window.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

window.renderSignup = function() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="container">
      <h2>Sign Up</h2>
      <div id="signup-error" class="error"></div>
      <form id="signup-form">
        <input id="signup-email" type="email" placeholder="Email" required>
        <input id="signup-password" type="password" placeholder="Password" required>
        <button type="submit">Sign Up</button>
      </form>
      <p><a href="#login">Already have an account? Log in</a></p>
    </div>
  `;
  document.getElementById('signup-form').addEventListener('submit', window.signup);
};

window.renderLogin = function() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="container">
      <h2>Log In</h2>
      <div id="login-error" class="error"></div>
      <form id="login-form">
        <input id="login-email" type="email" placeholder="Email" required>
        <input id="login-password" type="password" placeholder="Password" required>
        <button type="submit">Log In</button>
      </form>
      <p><a href="#signup">No account? Sign up</a></p>
    </div>
  `;
  document.getElementById('login-form').addEventListener('submit', window.login);
};

window.signup = function(e) {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const errorDiv = document.getElementById('signup-error');
  if (window.users.find(u => u.email === email)) {
    errorDiv.textContent = 'Email already exists';
    return;
  }
  window.users.push({ email, password });
  localStorage.setItem('users', JSON.stringify(window.users));
  window.location.hash = 'login';
  render();
};

window.login = function(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const errorDiv = document.getElementById('login-error');
  const user = window.users.find(u => u.email === email && u.password === password);
  if (!user) {
    errorDiv.textContent = 'Invalid email or password';
    return;
  }
  window.currentUser = { email };
  localStorage.setItem('currentUser', JSON.stringify(window.currentUser));
  window.location.hash = 'dashboard';
  render();
};

window.logout = function() {
  window.currentUser = null;
  localStorage.removeItem('currentUser');
  window.location.hash = 'login';
  render();
};