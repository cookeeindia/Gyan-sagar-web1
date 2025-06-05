document.getElementById('topicForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const book = document.getElementById('book').value;
  const page = document.getElementById('page').value.trim();
  const paragraph = document.getElementById('paragraph').value.trim();
  const keywords = document.getElementById('keywords').value.trim();
  const category = document.getElementById('category').value;

  const topicData = { title, book, page, paragraph, keywords, category, createdAt: Date.now() };
  firebase.database().ref('topics').push(topicData).then(() => {
    alert('વિષય સફળતાપૂર્વક સેવ થયો!');
    window.location.href = 'index.html';
  });
});