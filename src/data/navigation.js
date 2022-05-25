import navContacts from '../img/navContacts.jpg';
import navInvestments from '../img/navInvestments.jpg';
import navNews from '../img/navNews.jpg';
import navOffer from '../img/navOffer.jpg';
import navTeam from '../img/navTeam.jpg';

export const navigation = [
    {
        id: 1,
        name: "На главную",
        linkTo: "hero",
        img: undefined,
        mark: false,
    },
    {
        id: 2,
        name: "Предложения",
        linkTo: "hero",
        img: navOffer,
        mark: true,
    },
    {
        id: 3,
        name: "Инвестиции",
        linkTo: "investments",
        img: navInvestments,
        mark: false,
    },
    {
        id: 4,
        name: "Команда",
        linkTo: "#",
        img: navTeam,
        mark: false,
    },
    {
        id: 5,
        name: "Новости",
        linkTo: "news",
        img: navNews,
        mark: false,
    },
    {
        id: 6,
        name: "Контакты",
        linkTo: "contacts",
        img: navContacts,
        mark: false,
    },
];