let books = [];

function displayBooks() {

    const bookList = document.getElementById("bookList");

    bookList.innerHTML = "";

    books.forEach((book, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.status}</td>

            <td>
                <button class="borrow"
                    onclick="borrowBook(${index})">
                    ${book.status === "Available" ? "Borrow" : "Return"}
                </button>

                <button class="delete"
                    onclick="removeBook(${index})">
                    Remove
                </button>
            </td>
        `;

        bookList.appendChild(row);

    });

}

function addBook() {

    const title = document.getElementById("bookTitle").value.trim();

    const author = document.getElementById("bookAuthor").value.trim();

    if (title === "" || author === "") {

        alert("Please enter book title and author!");

        return;
    }

    books.push({
        title: title,
        author: author,
        status: "Available"
    });

    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";

    displayBooks();

}

function borrowBook(index) {

    if (books[index].status === "Available") {

        books[index].status = "Borrowed";

    } else {

        books[index].status = "Available";

    }

    displayBooks();

}

function removeBook(index) {

    books.splice(index, 1);

    displayBooks();

}