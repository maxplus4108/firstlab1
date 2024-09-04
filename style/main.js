const books = [
    {id: 1, title: "Гарри Поттер и философский камень", author: "Джоан Роулинг", genre: "Фэнтези", year: 1997, excerpt: true},
    {id: 2, title: "Война и мир", author: "Лев Толстой", genre: "Роман", year: 1869, excerpt: true},
    {id: 3, title: "1984", author: "Джордж Оруэлл", genre: "Научная фантастика", year: 1949, excerpt: true},
    {id: 4, title: "Преступление и наказание", author: "Фёдор Достоевский", genre: "Роман", year: 1866, excerpt: true},
    {id: 5, title: "Властелин колец", author: "Дж. Р. Р. Толкин", genre: "Фэнтези", year: 1954, excerpt: true},
    {id: 6, title: "Мастер и Маргарита", author: "Михаил Булгаков", genre: "Фантастика", year: 1966, excerpt: true},
    {id: 7, title: "Анна Каренина", author: "Лев Толстой", genre: "Роман", year: 1877, excerpt: true},
    {id: 8, title: "Унесённые ветром", author: "Маргарет Митчелл", genre: "Роман", year: 1936, excerpt: true},
    {id: 9, title: "Три товарища", author: "Эрих Мария Ремарк", genre: "Роман", year: 1936, excerpt: true},
    {id: 10, title: "Повелитель мух", author: "Уильям Голдинг", genre: "Роман", year: 1954, excerpt: true}
];

const bookDescriptions = {
    1: {
        description: "Книга о молодом волшебнике Гарри Поттере, который учится в школе магии и вступает в борьбу со злом.",
        content: [
            "Глава 1: Прибытие в Хогвартс",
            "Глава 2: Знакомство с новыми друзьями",
            "Глава 3: Первое заклинание",
            "Глава 4: Тайна запретного леса",
            "Глава 5: Испытание трёх главных героев"
        ]
    },
    2: {
        description: "Эпический роман о жизни и приключениях русского генерала Александра Богдановича Ростова.",
        content: [
            "Книга 1: Начало",
            "Книга 2: Наполеон",
            "Книга 3: Бородинская битва",
            "Книга 4: Тарутин",
            "Книга 5: Смоленск"
        ]
    },
    3: {
        description: "Роман о жизни в обществе, контролируемом тоталитарным государством, и борьбе за свободу.",
        content: [
            "Часть 1: Встреча с О'Брайеном",
            "Часть 2: Встреча с Парсонсом",
            "Часть 3: Встреча с Симионом",
            "Часть 4: Встреча с Джулией",
            "Часть 5: Встреча с О'Брайеном"
        ]
    },
    4: {
        description: "Роман о жизни и преступлениях Родиона Раскольникова, который совершает убийство старухи-ростовщицы.",
        content: [
            "Часть 1: Встреча с Родионом Раскольниковым",
            "Часть 2: Встреча с Сониной Мармеладовой",
            "Часть 3: Встреча с Дарьей",
            "Часть 4: Встреча с Порфирием Петровичем",
            "Часть 5: Встреча с Сониной Мармеладовой"
        ]
    },
    5: {
        description: "Эпическая фэнтези-серия о приключениях Фродо Беггинса и его друзей в поисках Одинцального Кольца.",
        content: [
            "Книга 1: Нежданное путешествие",
            "Книга 2: Следующие гости",
            "Книга 3: Возвращение короля",
            "Книга 4: Братство Кольца",
            "Книга 5: Возвращение короля"
        ]
    },
    6: {
        description: "Роман о жизни и приключениях Мастера и его слуги Маргариты в Москве в 1930-х годах.",
        content: [
            "Часть 1: Встреча с Мастером",
            "Часть 2: Встреча с Маргаритой",
            "Часть 3: Встреча с Бездомным",
            "Часть 4: Встреча с Бездомным",
            "Часть 5: Встреча с Бездомным"
        ]
    },
    7: {
        description: "Роман о любви Анны Одинцовой к Алексею Вронскому и о том, как их жизнь разрушается из-за социальных и личных ограничений.",
        content: [
            "Часть 1: Встреча с Анной Одинцовой",
            "Часть 2: Встреча с Алексеем Вронским",
            "Часть 3: Встреча с Ольгой",
            "Часть 4: Встреча с Алексеем Вронским",
            "Часть 5: Встреча с Анной Одинцовой"
        ]
    },
    8: {
        description: "Роман о жизни и любви Скараlett О'Хара и Ашантана в Южной Каролине во время Гражданской войны в США.",
        content: [
            "Часть 1: Встреча с Скараlett О'Хара",
            "Часть 2: Встреча с Ашантаном",
            "Часть 3: Встреча с Родериком Бьюкененом",
            "Часть 4: Встреча с Ашантаном",
            "Часть 5: Встреча с Скараlett О'Хара"
        ]
    },
    9: {
        description: "Роман о жизни и приключениях трех друзей во время Первой мировой войны.",
        content: [
            "Часть 1: Встреча с Эрихом",
            "Часть 2: Встреча с Альбертом",
            "Часть 3: Встреча с Францем",
            "Часть 4: Встреча с Эрихом",
            "Часть 5: Встреча с Эрихом"
        ]
    },
    10: {
        description: "Роман о жизни и приключениях Питера Пэна в Лондоне и его борьбе за справедливость.",
        content: [
            "Часть 1: Встреча с Питером Пэном",
            "Часть 2: Встреча с мистером Дарлингом",
            "Часть 3: Встреча с мистером Дарлингом",
            "Часть 4: Встреча с мистером Дарлингом",
            "Часть 5: Встреча с Питером Пэном"
        ]
    }
};

function displayBooks(booksArr) {
    const library = document.getElementById("library-cont");
    library.innerHTML = `
        <div class="filter-form">
            <h3>Фильтрация</h3>
            <div class="filter">
                <div class="filter-item">
                    <input type="text" name="title" id="title">
                    <label for="title">По названию</label>
                </div>
                <div class="filter-item">
                    <input type="text" name="author" id="author">
                    <label for="author">По автору</label>
                </div>
                <div class="filter-item">
                    <input type="text" name="genre" id="genre">
                    <label for="genre">По жанру</label>
                </div>
                <div class="filter-item">
                    <input type="text" name="year" id="year">
                    <label for="year">По году издания</label>
                </div>
                <div class="filter-item">
                    <input type="button" value="Отфильтровать" onclick="filterBooks()">
                </div>
            </div>
        </div>
        <div class="svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100px" height="100px">
                <!-- Левая часть книги -->
                <polygon points="0,10 0,60 40,70 40,20" fill="white" stroke="#000" stroke-width="2" />
                <!-- Правая часть книги -->
                <polygon points="80,10 80,60 40,70 40,20" fill="white" stroke="#000" stroke-width="2" />
                <!-- Страница -->
                <polygon id="page" points="80,5 80,55 40,70 40,20" fill="white" stroke="#000" stroke-width="2">
                    <animate id="page-animation" attributeName="points" dur="1s" 
                        values="80,5 80,55 40,70 40,20; 0,5 0,55 40,70 40,20" 
                        keyTimes="0; 1" repeatCount="1"/>
                </polygon>   
                
            </svg>
        </div>
    `;

    booksArr.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add('book-item');
        bookDiv.innerHTML = `
                    <div>
                        <h1>${book.title}</h1>
                        <p>Автор: ${book.author}</p>
                        <p>Жанр: ${book.genre}</p>
                        <p>Год издания: ${book.year}</p>
                        ${book.excerpt ? `<button onclick="readExcerpt(${book.id})">Ознакомиться с описанием</button>` : ''}
                    </div>
                `;
        library.appendChild(bookDiv);
    });
}

function readExcerpt(id) {
    const description = bookDescriptions[id].description;
    const content = bookDescriptions[id].content;
    const totalPages = content.length;
    let currentPage = 0;

    // Создаем модальное окно
    const modal = document.createElement("div");
    modal.classList.add("modal");

    // Создаем содержимое модального окна
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("excerpt-description");
    descriptionDiv.textContent = description;

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("excerpt-content");
    contentDiv.textContent = content[currentPage];

    const prevButton = document.createElement("button");
    prevButton.textContent = "Предыдущая страница";
    prevButton.addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage--;
            contentDiv.classList.remove('flip-in-hor-front');
            contentDiv.classList.add('flip-out-hor-front');
            setTimeout(() => {
                contentDiv.textContent = content[currentPage];
                contentDiv.classList.remove('flip-out-hor-front');
                contentDiv.classList.add('flip-in-hor-back');
            }, 500);
        }
    });
    const nextButton = document.createElement("button");
    nextButton.textContent = "Следующая страница";
    nextButton.addEventListener("click", () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            contentDiv.classList.remove('flip-in-hor-back');
            contentDiv.classList.add('flip-out-hor-back');
            setTimeout(() => {
                contentDiv.textContent = content[currentPage];
                contentDiv.classList.remove('flip-out-hor-back');
                contentDiv.classList.add('flip-in-hor-front');
            }, 500);
        }
    });

    const closeButton = document.createElement("button");
    closeButton.textContent = "Закрыть";
    closeButton.addEventListener("click", () => {
        modal.style.display = "none"; // Скрываем модальное окно при нажатии на кнопку "Закрыть"
    });

    // Контейнер для кнопок внизу модального окна
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("modal-buttons");
    buttonsContainer.appendChild(prevButton);
    buttonsContainer.appendChild(nextButton);
    buttonsContainer.appendChild(closeButton);

    modalContent.appendChild(descriptionDiv);
    modalContent.appendChild(contentDiv);
    modalContent.appendChild(buttonsContainer); // Добавляем контейнер с кнопками в содержимое модального окна

    modal.appendChild(modalContent);

    // Добавляем модальное окно на страницу
    document.body.appendChild(modal);

    // Показываем модальное окно
    modal.style.display = "block";
}

function filterBooks() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const year = document.getElementById('year').value;

    const filteredBooks = books.filter(book => {
        return (!title || book.title.toLowerCase().includes(title.toLowerCase())) &&
            (!author || book.author.toLowerCase().includes(author.toLowerCase())) &&
            (!genre || book.genre.toLowerCase().includes(genre.toLowerCase())) &&
            (!year || book.year.toString() === year);
    });

    displayBooks(filteredBooks);
}

displayBooks(books);

let timer;
const inactivityTime = 5000; 

function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(bookAnimate, inactivityTime);
}

const pageAnimation = document.getElementById('page-animation');

function bookAnimate() {
    pageAnimation.beginElement();

    resetTimer();
}

// Запускаем таймер при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    resetTimer();
});

// Сбрасываем и запускаем таймер каждый раз при действии пользователя
document.addEventListener("mousemove", resetTimer);
document.addEventListener("keydown", resetTimer);
