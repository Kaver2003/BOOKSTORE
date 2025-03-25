const books = [
    {
        id: 1,
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        year: 1967,
        category: "Классика",
        price: 712,
        description: "Роман о любви, дьяволе и вечных ценностях.",
        image: "/images/mam.jpg",
        rentalEndDate: null,
        status: "rented",
        rentalInfo: {
            userId: 123,
            period: "1 месяц",
            endDate: "2023-12-31",
            price: 10
        }
    },
    {
        id: 2,
        title: "Гарри Поттер и философский камень",
        author: "Джоан Роулинг",
        year: 1997,
        category: "Фэнтези",
        price: 516,
        description: "История о юном волшебнике Гарри Поттере.",
        image: "/images/GP.jpg",
        rentalEndDate: null,
        status: "rented",
        rentalInfo: {
            userId: 123,
            period: "1 месяц",
            endDate: "2023-12-31",
            price: 10
        }
    },
    {
        id: 3,
        title: "Шерлок Холмс",
        author: "Артур Конан Дойл",
        year: 1887,
        category: "Детектив",
        price: 443,
        description: "Приключения великого сыщика Шерлока Холмса.",
        image: "/images/SH.jpg",
        rentalEndDate: null,
        status: "rented",
        rentalInfo: {
            userId: 123,
            period: "1 месяц",
            endDate: "2023-12-31",
            price: 10
        }
    },
    {
        id: 4,
        title: "Путешествие к центру Земли",
        author: "Жюль Верн",
        year: 1864,
        category: "Научная фантастика",
        price: 312,
        description: "Захватывающее путешествие вглубь Земли.",
        image: "/images/PKCZ.jpg",
        rentalEndDate: null,
        status: "rented",
        rentalInfo: {
            userId: 123,
            period: "1 месяц",
            endDate: "2023-12-31",
            price: 10
        }
    },
    {
        id: 5,
        title: "Плутония",
        author: "Владимир Обручев",
        year: 1924,
        category: "Научная фантастика",
        price: 145,
        description: "Фантастический мир под землей.",
        image: "/images/pluto.jpg",
        rentalEndDate: null,
        status: "rented",
        rentalInfo: {
            userId: 123,
            period: "1 месяц",
            endDate: "2023-12-31",
            price: 10
        }
    },
    {
        id: 6,
        title: "Белый клык",
        author: "Джек Лондон",
        year: 1906,
        category: "Приключения",
        price: 524,
        description: "История волка-собаки, выживающего в суровых условиях.",
        image: "/images/BK.jpg",
        rentalEndDate: null,
        status: "rented",
        rentalInfo: {
            userId: 123,
            period: "1 месяц",
            endDate: "2023-12-31",
            price: 10
        }
    },
    {
        id: 7,
        title: "Ведьмак",
        author: "Анджей Сапковский",
        year: 1986,
        category: "Фэнтези",
        price: 532,
        description: "Приключения Геральта из Ривии, ведьмака.",
        image: "/images/witcher.jpg",
        rentalEndDate: null,
        status: "rented",
        rentalInfo: {
            userId: 123,
            period: "1 месяц",
            endDate: "2023-12-31",
            price: 50
        }
    },
    {
        id: 8,
        title: "Грозовой перевал",
        author: "Эмили Бронте",
        year: 1847,
        category: "Классика",
        price: 400,
        description: "История страстной и трагической любви.",
        image: "/images/Grozo.jpg",
        rentalEndDate: null,
        status: "available",
        rentalInfo: {
            userId: 123,
            period: "1 месяц",
            endDate: "2023-12-31",
            price: 50
        }
    },
    {
        id: 9,
        title: "Шлем ужаса: Креатифф о Тесее и Минотавре",
        author: "Виктор Пелевин",
        year: 2005,
        category: "Роман",
        price: 325,
        description: "Новый роман культового автора, исследующий природу сознания и реальности через призму современной цифровой эпохи.",
        image: "/images/victor.jpg",
        rentalEndDate: null,
        status: "available",
        rentalInfo: {
            userId: 123,
            period: "1 месяц",
            endDate: "2023-12-31",
            price: 50
        }
    },
    {
        id: 10,
        title: "Игра Престолов",
        author: "Джордж Р.Р. Мартин",
        year: 1847,
        category: "Фэнтези",
        price: 400,
        description: "Первый роман эпической саги о борьбе за Железный Трон Семи Королевств, полной интриг, предательств и магии",
        image: "/images/igra.jpg",
        rentalEndDate: null,
        status: "available",
        rentalInfo: {
            userId: 123,
            period: "1 месяц",
            endDate: "2023-12-31",
            price: 100
        }
    },

];

export default books;