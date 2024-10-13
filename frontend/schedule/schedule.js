const scheduleData = [
    {
        round: "TESTING",
        date: "21-23",
        month: "FEB",
        title: "Bahrain",
        subtitle: "FORMULA 1 ARAMCO PRE-SEASON TESTING 2024",
        flag: "/image/nations/bahrain-flag.avif"
    },
    {
        round: "ROUND 1",
        date: "29-02",
        month: "FEB-MAR",
        title: "Bahrain",
        subtitle: "FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2024",
        flag: "/image/nations/bahrain-flag.avif",
        drivers: [
            { code: "VER", img: "https://storage.googleapis.com/a1aa/image/HgbWod36MQq5LZIe0gtBSCkHmnYyBcDME4LcKQyutnHGyLyJA.jpg", color: "blue" },
            { code: "PER", img: "https://storage.googleapis.com/a1aa/image/UEqXoMgRzz7WJt2Om2MWjHIrA7k4C8zlNkkynsM1HFLC5F5E.jpg", color: "blue" },
            { code: "SAI", img: "https://storage.googleapis.com/a1aa/image/7QflX2dbm40HfUxflx6ZAP5cjU1B9YeiVKoNN8uMywkVQeicC.jpg", color: "red" }
        ]
    },
    {
        round: "ROUND 2",
        date: "07-09",
        month: "MAR",
        title: "Saudi Arabia",
        subtitle: "FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2024",
        flag: "/image/nations/saudi-arabia-flag.avif",
        drivers: [
            { code: "VER", img: "https://storage.googleapis.com/a1aa/image/HgbWod36MQq5LZIe0gtBSCkHmnYyBcDME4LcKQyutnHGyLyJA.jpg", color: "blue" },
            { code: "PER", img: "https://storage.googleapis.com/a1aa/image/UEqXoMgRzz7WJt2Om2MWjHIrA7k4C8zlNkkynsM1HFLC5F5E.jpg", color: "blue" },
            { code: "LEC", img: "https://storage.googleapis.com/a1aa/image/leclerc.jpg", color: "red" }
        ]
    },
    {
        round: "ROUND 3",
        date: "22-24",
        month: "MAR",
        title: "Australia",
        subtitle: "FORMULA 1 ROLEX AUSTRALIAN GRAND PRIX 2024",
        flag: "/image/nations/Australia.avif",
        drivers: [
            { code: "SAI", img: "https://storage.googleapis.com/a1aa/image/7QflX2dbm40HfUxflx6ZAP5cjU1B9YeiVKoNN8uMywkVQeicC.jpg", color: "red" },
            { code: "LEC", img: "https://storage.googleapis.com/a1aa/image/leclerc.jpg", color: "red" },
            { code: "NOR", img: "https://storage.googleapis.com/a1aa/image/norris.jpg", color: "orange" }
        ]
    },
    {
        round: "ROUND 4",
        date: "05-07",
        month: "APR",
        title: "Japan",
        subtitle: "FORMULA 1 MSC CRUISES JAPANESE GRAND PRIX 2024",
        flag: "/image/nations/Japan.avif",
        drivers: [
            { code: "VER", img: "https://storage.googleapis.com/a1aa/image/HgbWod36MQq5LZIe0gtBSCkHmnYyBcDME4LcKQyutnHGyLyJA.jpg", color: "blue" },
            { code: "PER", img: "https://storage.googleapis.com/a1aa/image/UEqXoMgRzz7WJt2Om2MWjHIrA7k4C8zlNkkynsM1HFLC5F5E.jpg", color: "blue" },
            { code: "SAI", img: "https://storage.googleapis.com/a1aa/image/7QflX2dbm40HfUxflx6ZAP5cjU1B9YeiVKoNN8uMywkVQeicC.jpg", color: "red" }
        ]
    },
    {
        round: "ROUND 5",
        date: "19-21",
        month: "APR",
        title: "China",
        subtitle: "FORMULA 1 LENOVO CHINESE GRAND PRIX 2024",
        flag: "/image/nations/China.avif",
        drivers: [
            { code: "VER", img: "https://storage.googleapis.com/a1aa/image/HgbWod36MQq5LZIe0gtBSCkHmnYyBcDME4LcKQyutnHGyLyJA.jpg", color: "blue" },
            { code: "NOR", img: "https://storage.googleapis.com/a1aa/image/norris.jpg", color: "orange" },
            { code: "PER", img: "https://storage.googleapis.com/a1aa/image/UEqXoMgRzz7WJt2Om2MWjHIrA7k4C8zlNkkynsM1HFLC5F5E.jpg", color: "blue" }
        ]
    },
    {
        round: "ROUND 6",
        date: "03-05",
        month: "MAY",
        title: "Miami",
        subtitle: "FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2024",
        flag: "/image/nations/United States.avif",
        drivers: [
            { code: "NOR", img: "https://storage.googleapis.com/a1aa/image/norris.jpg", color: "orange" },
            { code: "VER", img: "https://storage.googleapis.com/a1aa/image/HgbWod36MQq5LZIe0gtBSCkHmnYyBcDME4LcKQyutnHGyLyJA.jpg", color: "blue" },
            { code: "LEC", img: "https://storage.googleapis.com/a1aa/image/leclerc.jpg", color: "red" }
        ]
    },
    {
        round: "ROUND 7",
        date: "17-19",
        month: "MAY",
        title: "Emilia-Romagna",
        subtitle: "FORMULA 1 MSC CRUISES GRAN PREMIO DEL MADE IN ITALY E DELL'EMILIA-ROMAGNA 2024",
        flag: "/image/nations/italy-flag.avif",
        drivers: [
            { code: "VER", img: "https://storage.googleapis.com/a1aa/image/HgbWod36MQq5LZIe0gtBSCkHmnYyBcDME4LcKQyutnHGyLyJA.jpg", color: "blue" },
            { code: "NOR", img: "https://storage.googleapis.com/a1aa/image/norris.jpg", color: "orange" },
            { code: "LEC", img: "https://storage.googleapis.com/a1aa/image/leclerc.jpg", color: "red" }
        ]
    },
    {
        round: "ROUND 8",
        date: "24-26",
        month: "MAY",
        title: "Monaco",
        subtitle: "FORMULA 1 GRAND PRIX DE MONACO 2024",
        flag: "/image/nations/Monaco.avif",
        drivers: [
            { code: "LEC", img: "https://storage.googleapis.com/a1aa/image/leclerc.jpg", color: "red" },
            { code: "PIA", img: "https://storage.googleapis.com/a1aa/image/piastri.jpg", color: "orange" },
            { code: "SAI", img: "https://storage.googleapis.com/a1aa/image/7QflX2dbm40HfUxflx6ZAP5cjU1B9YeiVKoNN8uMywkVQeicC.jpg", color: "red" }
        ]
    },
    {
        round: "ROUND 9",
        date: "07-09",
        month: "JUN",
        title: "Canada",
        subtitle: "FORMULA 1 AWS GRAND PRIX DU CANADA 2024",
        flag: "/image/nations/Canada.avif",
        drivers: [
            { code: "VER", img: "https://storage.googleapis.com/a1aa/image/HgbWod36MQq5LZIe0gtBSCkHmnYyBcDME4LcKQyutnHGyLyJA.jpg", color: "blue" },
            { code: "NOR", img: "https://storage.googleapis.com/a1aa/image/norris.jpg", color: "orange" },
            { code: "RUS", img: "https://storage.googleapis.com/a1aa/image/russell.jpg", color: "silver" }
        ]
    },
    {
        round: "ROUND 10",
        date: "21-23",
        month: "JUN",
        title: "Spain",
        subtitle: "FORMULA 1 ARAMCO GRAN PREMIO DE ESPAÑA 2024",
        flag: "/image/nations/Spain.avif",
        drivers: [
            { code: "VER", img: "https://storage.googleapis.com/a1aa/image/HgbWod36MQq5LZIe0gtBSCkHmnYyBcDME4LcKQyutnHGyLyJA.jpg", color: "blue" },
            { code: "NOR", img: "https://storage.googleapis.com/a1aa/image/norris.jpg", color: "orange" },
            { code: "HAM", img: "https://storage.googleapis.com/a1aa/image/hamilton.jpg", color: "black" }
        ]
    }, 
    {
        round: "ROUND 11",
        date: "28-30",
        month: "JUN",
        title: "Austria",
        subtitle: "FORMULA 1 QATAR AIRWAYS AUSTRIAN GRAND PRIX 2024",
        flag: "/image/nations/Australia.avif",
        drivers: [
            { code: "RUS", img: "https://storage.googleapis.com/a1aa/image/russell.jpg", color: "silver" },
            { code: "PIA", img: "https://storage.googleapis.com/a1aa/image/piastri.jpg", color: "orange" },
            { code: "SAI", img: "https://storage.googleapis.com/a1aa/image/7QflX2dbm40HfUxflx6ZAP5cjU1B9YeiVKoNN8uMywkVQeicC.jpg", color: "red" }
        ]
    },
    {
        round: "ROUND 12",
        date: "05-07",
        month: "JUL",
        title: "Great Britain",
        subtitle: "FORMULA 1 QATAR AIRWAYS BRITISH GRAND PRIX 2024",
        flag: "/image/nations/United Kingdom.avif",
        drivers: [
            { code: "HAM", img: "https://storage.googleapis.com/a1aa/image/hamilton.jpg", color: "black" },
            { code: "VER", img: "https://storage.googleapis.com/a1aa/image/HgbWod36MQq5LZIe0gtBSCkHmnYyBcDME4LcKQyutnHGyLyJA.jpg", color: "blue" },
            { code: "NOR", img: "https://storage.googleapis.com/a1aa/image/norris.jpg", color: "orange" }
        ]
    },
    {
        round: "ROUND 13",
        date: "19-21",
        month: "JUL",
        title: "Hungary",
        subtitle: "FORMULA 1 HUNGARIAN GRAND PRIX 2024",
        flag: "/image/nations/hungary-flag.avif",
        drivers: [
            { code: "PIA", img: "https://storage.googleapis.com/a1aa/image/piastri.jpg", color: "orange" },
            { code: "NOR", img: "https://storage.googleapis.com/a1aa/image/norris.jpg", color: "orange" },
            { code: "HAM", img: "https://storage.googleapis.com/a1aa/image/hamilton.jpg", color: "black" }
        ]
    },
    {
        round: "ROUND 14",
        date: "26-28",
        month: "JUL",
        title: "Belgium",
        subtitle: "FORMULA 1 ROLEX BELGIAN GRAND PRIX 2024",
        flag: "/image/nations/belgium-flag.avif",
        drivers: [
            { code: "HAM", img: "https://storage.googleapis.com/a1aa/image/hamilton.jpg", color: "black" },
            { code: "PIA", img: "https://storage.googleapis.com/a1aa/image/piastri.jpg", color: "orange" },
            { code: "LEC", img: "https://storage.googleapis.com/a1aa/image/leclerc.jpg", color: "red" }
        ]
    },
    {
        round: "ROUND 15",
        date: "23-25",
        month: "AUG",
        title: "Netherlands",
        subtitle: "FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2024",
        flag: "/image/nations/Netherlands.avif",
        drivers: [
            { code: "NOR", img: "https://storage.googleapis.com/a1aa/image/norris.jpg", color: "orange" },
            { code: "VER", img: "https://storage.googleapis.com/a1aa/image/HgbWod36MQq5LZIe0gtBSCkHmnYyBcDME4LcKQyutnHGyLyJA.jpg", color: "blue" },
            { code: "LEC", img: "https://storage.googleapis.com/a1aa/image/leclerc.jpg", color: "red" }
        ]
    },
    {
        round: "ROUND 16",
        date: "30-01",
        month: "AUG-SEP",
        title: "Italy",
        subtitle: "FORMULA 1 PIRELLI GRAN PREMIO D’ITALIA 2024",
        flag: "/image/nations/italy-flag.avif",
        drivers: [
            { code: "LEC", img: "https://storage.googleapis.com/a1aa/image/leclerc.jpg", color: "red" },
            { code: "PIA", img: "https://storage.googleapis.com/a1aa/image/piastri.jpg", color: "orange" },
            { code: "NOR", img: "https://storage.googleapis.com/a1aa/image/norris.jpg", color: "orange" }
        ]
    },
    {
        round: "ROUND 17",
        date: "13-15",
        month: "SEP",
        title: "Azerbaijan",
        subtitle: "FORMULA 1 QATAR AIRWAYS AZERBAIJAN GRAND PRIX 2024",
        flag: "/image/nations/azerbaijan-flag.avif",
        drivers: [
            { code: "PIA", img: "https://storage.googleapis.com/a1aa/image/piastri.jpg", color: "orange" },
            { code: "LEC", img: "https://storage.googleapis.com/a1aa/image/leclerc.jpg", color: "red" },
            { code: "RUS", img: "https://storage.googleapis.com/a1aa/image/russell.jpg", color: "silver" }
        ]
    },
    {
        round: "ROUND 18",
        date: "20-22",
        month: "SEP",
        title: "Singapore",
        subtitle: "FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2024",
        flag: "/image/nations/singapore-flag.avif",
        drivers: [
            { code: "NOR", img: "https://storage.googleapis.com/a1aa/image/norris.jpg", color: "orange" },
            { code: "VER", img: "https://storage.googleapis.com/a1aa/image/HgbWod36MQq5LZIe0gtBSCkHmnYyBcDME4LcKQyutnHGyLyJA.jpg", color: "blue" },
            { code: "PIA", img: "https://storage.googleapis.com/a1aa/image/piastri.jpg", color: "orange" }
        ]
    },
    {
        round: "ROUND 19",
        date: "18-20",
        month: "OCT",
        title: "United States",
        subtitle: "FORMULA 1 PIRELLI UNITED STATES GRAND PRIX 2024",
        flag: "/image/nations/United States.avif",
        drivers: [] // Thông tin về các tay đua có thể thêm sau
    },
    {
        round: "ROUND 20",
        date: "25-27",
        month: "OCT",
        title: "Mexico",
        subtitle: "FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÉXICO 2024",
        flag: "/image/nations/Mexico.avif",
        drivers: [] // Thông tin về các tay đua có thể thêm sau
    },
    {
        round: "ROUND 21",
        date: "01-03",
        month: "NOV",
        title: "Brazil",
        subtitle: "FORMULA 1 LENOVO GRANDE PRÊMIO DE SÃO PAULO 2024",
        flag: "/image/nations/brazil-flag.avif",
        drivers: [] // Thông tin về các tay đua có thể thêm sau
    },
    {
        round: "ROUND 22",
        date: "21-23",
        month: "NOV",
        title: "Las Vegas",
        subtitle: "/image/nations/United States.avif",
        flag: "/image/nations/United States.avif",
        drivers: [] // Thông tin về các tay đua có thể thêm sau
    },
    {
        round: "ROUND 23",
        date: "29-01",
        month: "NOV-DEC",
        title: "Qatar",
        subtitle: "FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2024",
        flag: "/image/nations/qatar-flag.avif",
        drivers: [] // Thông tin về các tay đua có thể thêm sau
    },
    {
        round: "ROUND 24",
        date: "06-08",
        month: "DEC",
        title: "Abu Dhabi",
        subtitle: "FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2024",
        flag: "/image/nations/united-arab-emirates-flag.avif",
        drivers: [] // Thông tin về các tay đua có thể thêm sau
    }
    // Add the remaining rounds similar to the ones above
];

function renderSchedule() {
    const scheduleContainer = document.getElementById('schedule');

    scheduleData.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');

        let driversHTML = '';
        if (event.drivers) {
            driversHTML = `
            <div class="drivers">
                ${event.drivers.map(driver => `
                <div class="driver">
                    <img src="${driver.img}" alt="Driver ${driver.code}">
                    <div class="driver-code ${driver.color}">${driver.code}</div>
                </div>`).join('')}
            </div>`;
        }

        eventElement.innerHTML = `
            <div class="event-header">
                <div>${event.round}</div>
                <img src="${event.flag}" alt="Flag" width="30" height="20">
            </div>
            <div class="event-date">${event.date}</div>
            <div class="event-month">${event.month}</div>
            <div class="event-title">${event.title}</div>
            <div class="event-subtitle">${event.subtitle}</div>
            ${driversHTML}
        `;

        scheduleContainer.appendChild(eventElement);
    });
}

document.addEventListener('DOMContentLoaded', renderSchedule);
