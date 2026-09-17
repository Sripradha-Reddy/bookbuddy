// ================= BOOK DATA =================

const books = {

    "engineering-mathematics": {
        title: "Engineering Mathematics",
        author: "John Bird",
        category: "Engineering",
        rating: "4.5",
        description:
            "A practical introduction to mathematics for engineering students, covering important concepts and problem-solving techniques used in engineering."
    },

    "python-crash-course": {
        title: "Python Crash Course",
        author: "Eric Matthes",
        category: "Programming",
        rating: "5.0",
        description:
            "A beginner-friendly introduction to Python programming that teaches the fundamentals through practical examples, projects, and hands-on exercises."
    },

    "clean-code": {
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Programming",
        rating: "4.8",
        description:
            "A guide to writing readable, maintainable, and well-organized software code, with practical ideas for improving programming practices."
    },

    "atomic-habits": {
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self Development",
        rating: "4.9",
        description:
            "Explores how small, consistent changes can develop into useful habits and offers practical ideas for building better routines."
    },

    "wings-of-fire": {
        title: "Wings of Fire",
        author: "A. P. J. Abdul Kalam",
        category: "Biography",
        rating: "4.9",
        description:
            "An autobiographical account of A. P. J. Abdul Kalam's early life, education, career, and journey toward becoming an important figure in Indian science and public life."
    },

    "the-alchemist": {
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Fiction",
        rating: "4.7",
        description:
            "A fictional story about a young shepherd who travels in search of a treasure while learning about dreams, determination, and the journey of life."
    },

    "introduction-to-algorithms": {
        title: "Introduction to Algorithms",
        author: "Cormen, Leiserson, Rivest & Stein",
        category: "Programming",
        rating: "4.8",
        description:
            "A comprehensive textbook covering algorithms, data structures, sorting, searching, graph algorithms, and many fundamental concepts in computer science."
    },

    "7-habits": {
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen R. Covey",
        category: "Self Development",
        rating: "4.8",
        description:
            "Presents a framework of seven habits focused on personal responsibility, effective relationships, goal setting, and continuous improvement."
    },

    "lean-startup": {
        title: "The Lean Startup",
        author: "Eric Ries",
        category: "Business",
        rating: "4.5",
        description:
            "Introduces ideas for developing businesses through experimentation, customer feedback, rapid learning, and continuous improvement."
    },

    "higher-engineering-mathematics": {
        title: "Higher Engineering Mathematics",
        author: "B. S. Grewal",
        category: "Mathematics",
        rating: "4.5",
        description:
            "A widely used mathematics reference covering topics such as calculus, differential equations, matrices, complex numbers, and other engineering mathematics concepts."
    },

    "brief-history-of-time": {
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        category: "Science",
        rating: "4.8",
        description:
            "Explores major ideas about the universe, including space, time, black holes, the Big Bang, and the nature of the cosmos."
    },

    "rich-dad-poor-dad": {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        category: "Business",
        rating: "4.5",
        description:
            "Discusses different approaches to money, financial education, saving, investing, and the way people think about earning and managing wealth."
    },

    "pragmatic-programmer": {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt & David Thomas",
        category: "Programming",
        rating: "4.8",
        description:
            "Shares practical programming principles for writing flexible software, improving problem-solving skills, and becoming a more effective developer."
    },

    "java-complete-reference": {
        title: "Java: The Complete Reference",
        author: "Herbert Schildt",
        category: "Programming",
        rating: "4.6",
        description:
            "A detailed introduction and reference to Java programming, covering the language fundamentals, object-oriented programming, libraries, and core features."
    },

    "computer-networking": {
        title: "Computer Networking",
        author: "James Kurose & Keith Ross",
        category: "Engineering",
        rating: "4.7",
        description:
            "Introduces computer networking concepts including network architecture, protocols, applications, routing, wireless networks, and network security."
    },

    "operating-system-concepts": {
        title: "Operating System Concepts",
        author: "Abraham Silberschatz",
        category: "Engineering",
        rating: "4.6",
        description:
            "Explains the fundamental concepts behind operating systems, including processes, memory management, storage, file systems, and security."
    },

    "physics-scientists-engineers": {
        title: "Physics for Scientists and Engineers",
        author: "Raymond A. Serway",
        category: "Science",
        rating: "4.7",
        description:
            "Covers fundamental physics concepts such as mechanics, electricity, magnetism, waves, thermodynamics, and modern physics with engineering applications."
    },

    "concepts-modern-physics": {
        title: "Concepts of Modern Physics",
        author: "Arthur Beiser",
        category: "Science",
        rating: "4.5",
        description:
            "Introduces important ideas in modern physics, including relativity, quantum theory, atomic physics, nuclear physics, and particle physics."
    },

    "calculus": {
        title: "Calculus",
        author: "James Stewart",
        category: "Mathematics",
        rating: "4.8",
        description:
            "Provides a detailed introduction to calculus, including limits, derivatives, integrals, applications, sequences, and infinite series."
    },

    "think-and-grow-rich": {
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        category: "Self Development",
        rating: "4.5",
        description:
            "Discusses ideas about goals, persistence, planning, and personal motivation, focusing on developing a purposeful approach to achieving ambitions."
    },

    "deep-work": {
        title: "Deep Work",
        author: "Cal Newport",
        category: "Self Development",
        rating: "4.7",
        description:
            "Explores focused work and concentration, offering ideas for reducing distractions and developing the ability to work deeply on demanding tasks."
    },

    "psychology-of-money": {
        title: "The Psychology of Money",
        author: "Morgan Housel",
        category: "Business",
        rating: "4.8",
        description:
            "Examines how emotions, habits, experiences, and personal beliefs influence the way people think about and manage money."
    },

    "to-kill-a-mockingbird": {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        category: "Fiction",
        rating: "4.7",
        description:
            "A classic novel that follows Scout Finch as she grows up in a small Southern town and observes questions of justice, empathy, and social inequality."
    },

    "steve-jobs": {
        title: "Steve Jobs",
        author: "Walter Isaacson",
        category: "Biography",
        rating: "4.6",
        description:
            "A biography based on interviews with Steve Jobs, family members, colleagues, and others, covering his life, career, ideas, and role in the technology industry."
    }

};


// ================= SEARCH KEYWORDS =================
// These help Book Buddy understand different ways
// a user might describe what they are looking for.

const searchKeywords = {

    "python-crash-course":
        "coding programming code learn coding beginner beginner programming python software development",

    "clean-code":
        "coding programming code software clean readable maintainable developer development",

    "introduction-to-algorithms":
        "coding programming algorithms data structures computer science sorting searching graphs",

    "pragmatic-programmer":
        "coding programming software developer development problem solving code",

    "java-complete-reference":
        "coding programming java software object oriented developer development",

    "atomic-habits":
        "habits routine routines productivity self improvement personal development consistency",

    "7-habits":
        "habits productivity personal development goals effective success improvement",

    "think-and-grow-rich":
        "motivation goals success personal development ambition planning persistence",

    "deep-work":
        "focus concentration productivity studying study distractions work learning",

    "rich-dad-poor-dad":
        "money finance financial saving investing investment wealth business earning",

    "psychology-of-money":
        "money finance financial saving investing investment wealth emotions business",

    "lean-startup":
        "business startup entrepreneurship entrepreneur company customer feedback innovation",

    "brief-history-of-time":
        "space universe astronomy black holes big bang cosmos science time",

    "concepts-modern-physics":
        "physics quantum atoms nuclear relativity science particles modern physics",

    "physics-scientists-engineers":
        "physics mechanics electricity magnetism waves thermodynamics engineering science",

    "engineering-mathematics":
        "math mathematics engineering problems calculations numbers",

    "higher-engineering-mathematics":
        "math mathematics calculus equations matrices engineering numbers",

    "calculus":
        "math mathematics calculus derivatives integrals limits equations",

    "computer-networking":
        "computer network networking internet protocols routing wireless security technology",

    "operating-system-concepts":
        "computer operating system processes memory storage files security technology",

    "wings-of-fire":
        "biography life story Abdul Kalam India scientist inspiration education",

    "steve-jobs":
        "biography life story technology Apple business entrepreneur innovation",

    "the-alchemist":
        "fiction story dreams journey treasure adventure motivation life",

    "to-kill-a-mockingbird":
        "fiction novel story justice empathy society inequality classic"
};


// ================= SEARCH BOOKS =================

function searchBooks() {

    let search =
        document.getElementById("searchBox").value.toLowerCase().trim();

    let bookCards =
        document.querySelectorAll(".book");

    // If search box is empty, show all books
    if (search === "") {

        bookCards.forEach(function(book) {
            book.style.display = "flex";
        });

        return;
    }

    // Convert the search into individual words
    let searchWords =
        search.split(/\s+/).filter(word => word.length > 1);

    bookCards.forEach(function(book) {

        // Get title
        let title =
            book.querySelector("h3").textContent.toLowerCase();

        // Get author
        let author =
            book.querySelector("p:nth-of-type(1)").textContent.toLowerCase();

        // Get category
        let category =
            book.querySelector("p:nth-of-type(2)").textContent.toLowerCase();

        // Get book ID from the View Book link
        let link =
            book.querySelector("a").getAttribute("href");

        let bookId =
            new URLSearchParams(link.split("?")[1]).get("id");

        // Get description
        let description =
            books[bookId]?.description.toLowerCase() || "";

        // Get extra search keywords
        let keywords =
            searchKeywords[bookId]?.toLowerCase() || "";

        // Combine all searchable information
        let searchableText =
            title + " " +
            author + " " +
            category + " " +
            description + " " +
            keywords;

        // Check whether any search word matches
        let found =
            searchWords.some(function(word) {

                return searchableText.includes(word);

            });

        if (found) {

            book.style.display = "flex";

        } else {

            book.style.display = "none";

        }

    });

}


// ================= FILTER BOOKS =================

function filterBooks(category) {

    let bookCards =
        document.querySelectorAll(".book");

    bookCards.forEach(function(book) {

        let categoryText =
            book.querySelector("p:nth-of-type(2)");

        if (
            category === "all" ||
            categoryText.textContent.includes(category)
        ) {

            book.style.display = "flex";

        } else {

            book.style.display = "none";

        }

    });

}


// ================= LOAD BOOK DETAILS =================

function loadBookDetails() {

    let params =
        new URLSearchParams(window.location.search);

    let bookId =
        params.get("id");

    let book =
        books[bookId];

    if (!book) {

        document.getElementById("bookTitle").textContent =
            "Book Not Found";

        document.getElementById("bookAuthor").textContent =
            "-";

        document.getElementById("bookCategory").textContent =
            "-";

        document.getElementById("bookRating").textContent =
            "-";

        document.getElementById("bookDescription").textContent =
            "Sorry, we could not find this book.";

        return;
    }


    document.getElementById("bookTitle").textContent =
        book.title;

    document.getElementById("bookAuthor").textContent =
        book.author;

    document.getElementById("bookCategory").textContent =
        book.category;

    document.getElementById("bookRating").textContent =
        book.rating;

    document.getElementById("bookDescription").textContent =
        book.description;

}


// ================= GO BACK =================

function goBack() {

    window.location.href = "index.html";

}


// ================= START =================

if (document.getElementById("bookTitle")) {

    loadBookDetails();

}