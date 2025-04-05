// Authentication system
document.addEventListener('DOMContentLoaded', function() {
  const token = localStorage.getItem('moviehub_token');
  if (token) {
    document.getElementById('adminLink').style.display = 'flex';
    document.getElementById('uploadSection').classList.remove('hidden');
    document.getElementById('loginSection').classList.add('hidden');
  }
});

function login() {
  const token = document.getElementById('githubToken').value;
  if (token) {
    localStorage.setItem('moviehub_token', token);
    location.reload();
  }
}