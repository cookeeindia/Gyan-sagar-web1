function searchTopics() {
  const keyword = document.getElementById('searchInput').value.toLowerCase();
  const dbRef = firebase.database().ref("topics");
  dbRef.once('value', snapshot => {
    const results = [];
    snapshot.forEach(child => {
      const data = child.val();
      if (data.topic.toLowerCase().includes(keyword) || data.keywords.toLowerCase().includes(keyword)) {
        results.push(data);
      }
    });
    localStorage.setItem('results', JSON.stringify(results));
    window.location.href = 'results.html';
  });
}

window.onload = function () {
  if (location.pathname.includes('results.html')) {
    const results = JSON.parse(localStorage.getItem('results') || "[]");
    const list = document.getElementById('results');
    results.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.topic + " - " + item.book + " (" + item.page + ")";
      list.appendChild(li);
    });
  }

  const form = document.getElementById("topicForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const topic = document.getElementById("topic").value;
      const book = document.getElementById("book").value;
      const page = document.getElementById("page").value;
      const paragraph = document.getElementById("paragraph").value;
      const keywords = document.getElementById("keywords").value;
      const category = document.getElementById("category").value;

      const extra = {};
      if (book === "તત્વજ્ઞાન") {
        extra.year = document.getElementById("year").value;
        extra.pushp = document.getElementById("pushp").value;
      }

      const data = { topic, book, page, paragraph, keywords, category, ...extra };
      firebase.database().ref("topics").push(data).then(() => {
        alert("વિષય સેવ થયો");
        form.reset();
        document.getElementById("extraFields").innerHTML = "";
      });
    });

    document.getElementById("book").addEventListener("change", e => {
      const book = e.target.value;
      const extra = document.getElementById("extraFields");
      extra.innerHTML = "";
      if (book === "તત્વજ્ઞાન") {
        extra.innerHTML = '<input type="number" id="year" placeholder="વર્ષ (જેમ કે 67)" max="999" />' +
                          '<select id="pushp"><option value="">પુષ્પ પસંદ કરો</option>' +
                          Array.from({length: 12}, (_, i) => `<option value="${i+1}">${i+1}</option>`).join('') +
                          '</select>';
      }
    });
  }
}