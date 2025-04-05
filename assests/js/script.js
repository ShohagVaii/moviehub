// Main application logic
document.addEventListener('DOMContentLoaded', async function() {
  await loadMovies();
  setupEventListeners();
});

async function loadMovies() {
  try {
    const response = await fetch('movies.json');
    const data = await response.json();
    displayMovies(data.movies);
  } catch (error) {
    console.error('Error loading movies:', error);
  }
}

function displayMovies(movies) {
  const movieGrid = document.getElementById('movieGrid');
  movieGrid.innerHTML = movies.map(movie => `
    <div class="movie-card" data-id="${movie.id}">
      <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <div class="movie-meta">
          <span>${movie.year}</span>
          <span>⭐ ${movie.rating}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function setupEventListeners() {
  // Add event listeners here
}