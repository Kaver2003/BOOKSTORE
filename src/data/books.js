
const books = [
    {
        id: 1,
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        year: 1967,
        category: "Классика",
        price: 15,
        description: "Роман о любви, дьяволе и вечных ценностях.",
        image: "/images/mam.jpg",
        rentalEndDate: null,
        status: "rented",
        rentalInfo: {
            userId: 123, // если есть система пользователей
            period: "1 месяц",
            endDate: "2023-12-31", // дата окончания аренды
            price: 10 // стоимость аренды
        }
    },
    {
        id: 2,
        title: "Гарри Поттер и философский камень",
        author: "Джоан Роулинг",
        year: 1997,
        category: "Фэнтези",
        price: 20,
        description: "История о юном волшебнике Гарри Поттере.",
        image: "/images/GP.jpg",
        rentalEndDate: null,
        status: "rented",
        rentalInfo: {
            userId: 123, // если есть система пользователей
            period: "1 месяц",
            endDate: "2023-12-31", // дата окончания аренды
            price: 10 // стоимость аренды
        }
    },
    {
        id: 3,
        title: "Шерлок Холмс",
        author: "Артур Конан Дойл",
        year: 1887,
        category: "Детектив",
        price: 12,
        description: "Приключения великого сыщика Шерлока Холмса.",
        image: "/images/SH.jpg",
        rentalEndDate: null,
        status: "rented",
        rentalInfo: {
            userId: 123, // если есть система пользователей
            period: "1 месяц",
            endDate: "2023-12-31", // дата окончания аренды
            price: 10 // стоимость аренды
        }
    },
    {
        id: 4,
        title: "Путешествие к центру Земли",
        author: "Жюль Верн",
        year: 1864,
        category: "Научная фантастика",
        price: 10,
        description: "Захватывающее путешествие вглубь Земли.",
        image: "/images/PKCZ.jpg",
        rentalEndDate: null,
        status: "rented",
        rentalInfo: {
            userId: 123, // если есть система пользователей
            period: "1 месяц",
            endDate: "2023-12-31", // дата окончания аренды
            price: 10 // стоимость аренды
        }
    },
    {
        id: 5,
        title: "Плутония",
        author: "Владимир Обручев",
        year: 1924,
        category: "Научная фантастика",
        price: 8,
        description: "Фантастический мир под землей.",
        image: "/images/pluto.jpg",
        rentalEndDate: null,
        status: "rented",
        rentalInfo: {
            userId: 123, // если есть система пользователей
            period: "1 месяц",
            endDate: "2023-12-31", // дата окончания аренды
            price: 10 // стоимость аренды
        }
    },
    {
        id: 6,
        title: "Белый клык",
        author: "Джек Лондон",
        year: 1906,
        category: "Приключения",
        price: 9,
        description: "История волка-собаки, выживающего в суровых условиях.",
        image: "/images/BK.jpg",
        rentalEndDate: null,
        status: "rented",
        rentalInfo: {
            userId: 123, // если есть система пользователей
            period: "1 месяц",
            endDate: "2023-12-31", // дата окончания аренды
            price: 10 // стоимость аренды
        }
    },
    {
        id: 7,
        title: "Ведьмак",
        author: "Анджей Сапковский",
        year: 1986,
        category: "Фэнтези",
        price: 18,
        description: "Приключения Геральта из Ривии, ведьмака.",
        image: "/images/witcher.jpg",
        rentalEndDate: null,
        status: "rented",
        rentalInfo: {
            userId: 123, // если есть система пользователей
            period: "1 месяц",
            endDate: "2023-12-31", // дата окончания аренды
            price: 10 // стоимость аренды
        }
    },
    {
        id: 8,
        title: "Грозовой перевал",
        author: "Эмили Бронте",
        year: 1847,
        category: "Классика",
        price: 11,
        description: "История страстной и трагической любви.",
        image: "/images/Grozo.jpg",
        rentalEndDate: null,
        status: "available",
        rentalInfo: {
            userId: 123, // если есть система пользователей
            period: "1 месяц",
            endDate: "2023-12-31", // дата окончания аренды
            price: 10 // стоимость аренды
        }
    },
];

export default books;