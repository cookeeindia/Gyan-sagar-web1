function searchTopics() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  window.location.href = 'search-results.html?q=' + encodeURIComponent(query);
}