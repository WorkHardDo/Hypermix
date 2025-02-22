// Переключение жанров
const genreButtons = document.querySelectorAll('.genre-btn');
const tracks = document.querySelectorAll('.track');

genreButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Убрать активный класс с других жанров
        genreButtons.forEach(btn => btn.classList.remove('active'));
        // Добавить активный класс нажатой кнопке
        button.classList.add('active');

        const genre = button.dataset.genre;

        // Скрыть все треки и показать только активные
        tracks.forEach(track => {
            track.classList.remove('active');
            if (track.classList.contains(genre)) {
                track.classList.add('active');
            }
        });
    });
});

// Открытие формы заказа (пока пустая функциональность)
const orderButtons = document.querySelectorAll('.order-btn');
orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Форма заказа в разработке.');
    });
});
