
function performSearch() {
  const query = document.getElementById('searchInput').value.trim();
  if (query) {
    window.location.href = `search-results.html?query=${encodeURIComponent(query)}`;
  }
}
