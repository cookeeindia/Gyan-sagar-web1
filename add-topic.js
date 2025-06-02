
document.getElementById("topic-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const book = document.getElementById("book").value;
    const page = document.getElementById("page").value;
    const year = document.getElementById("year").value;

    await db.collection("topics").add({ title, book, page, year });
    alert("વિષય સાચવાયો!");
    window.location.href = "index.html";
});
