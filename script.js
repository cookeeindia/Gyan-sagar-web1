
document.getElementById("add-topic-btn").addEventListener("click", () => {
    window.location.href = "add-topic.html";
});

// Fetch and display topics
window.onload = async () => {
    const topicList = document.getElementById("topic-list");
    const snapshot = await db.collection("topics").get();
    snapshot.forEach(doc => {
        const data = doc.data();
        const div = document.createElement("div");
        div.textContent = `${data.title} (${data.book} - પૃષ્ઠ ${data.page})`;
        topicList.appendChild(div);
    });
};
