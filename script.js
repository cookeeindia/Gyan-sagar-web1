document.getElementById('addTopicForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const topic = {
    title: document.getElementById('topicTitle').value,
    book: document.getElementById('bookName').value,
    page: document.getElementById('pageNumber').value,
    paragraph: document.getElementById('paragraph').value,
    keywords: document.getElementById('keywords').value,
    category: document.getElementById('category').value
  };

  firebase.database().ref('topics').push(topic)
    .then(() => {
      alert("વિષય સફળતાપૂર્વક સેવ થયો!");
      window.location.href = "index.html";
    })
    .catch(error => {
      alert("કઈક ખોટું થયું: " + error.message);
    });
});