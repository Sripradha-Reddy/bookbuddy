const bookDatabase = [
    { title: "Brief History of Time", author: "Stephen Hawking", category: "Science" },
    { title: "Clean Code", author: "Robert C. Martin", category: "Technology" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction" },
    { title: "Sapiens", author: "Yuval Noah Harari", category: "History" },
    { title: "Deep Work", author: "Cal Newport", category: "Technology" },
    { title: "The Gene", author: "Siddhartha Mukherjee", category: "Science" },
    { title: "1984", author: "George Orwell", category: "Fiction" },
    { title: "Guns, Germs, and Steel", author: "Jared Diamond", category: "History" }
];

function getRecommendations() {
    const userInput = document.getElementById('interestInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear old results

    const filtered = bookDatabase.filter(book => 
        book.category.toLowerCase().includes(userInput) || 
        book.title.toLowerCase().includes(userInput)
    );

    if (filtered.length === 0) {
        resultsDiv.innerHTML = '<p>No matches found. Try "Science", "Technology", "History", or "Fiction".</p>';
    } else {
        filtered.forEach(book => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<h3>${book.title}</h3><p><strong>Author:</strong> ${book.author}</p><p><em>${book.category}</em></p>`;
            resultsDiv.appendChild(card);
        });
    }
}
