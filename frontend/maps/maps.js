const scheduleData = [
    {
        round: "TESTING",
        date: "21-23",
        month: "FEB",
        title: "Bahrain",
        subtitle: "FORMULA 1 ARAMCO PRE-SEASON TESTING 2024",
        flag: "/image/nations/bahrain-flag.avif",
        map: "/image/maps/Bahrain carbon.png"
    },
    {
        round: "ROUND 1",
        date: "29-02",
        month: "FEB-MAR",
        title: "Bahrain",
        subtitle: "FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2024",
        flag: "/image/nations/bahrain-flag.avif",
        map: "/image/maps/Bahrain carbon.png"
    },
    {
        round: "ROUND 2",
        date: "07-09",
        month: "MAR",
        title: "Saudi Arabia",
        subtitle: "FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2024",
        flag: "/image/nations/saudi-arabia-flag.avif",
        map: "/image/maps/Saudi Arabia carbon.png"
    },
    {
        round: "ROUND 3",
        date: "22-24",
        month: "MAR",
        title: "Australia",
        subtitle: "FORMULA 1 ROLEX AUSTRALIAN GRAND PRIX 2024",
        flag: "/image/nations/Australia.avif",
        map: "/image/maps/Australia carbon.png"
    },
    {
        round: "ROUND 4",
        date: "05-07",
        month: "APR",
        title: "Japan",
        subtitle: "FORMULA 1 MSC CRUISES JAPANESE GRAND PRIX 2024",
        flag: "/image/nations/Japan.avif",
        map: "/image/maps/Japan carbon.png"
    },
    {
        round: "ROUND 5",
        date: "19-21",
        month: "APR",
        title: "China",
        subtitle: "FORMULA 1 LENOVO CHINESE GRAND PRIX 2024",
        flag: "/image/nations/China.avif",
        map: "/image/maps/China carbon.png"
    },
    {
        round: "ROUND 6",
        date: "03-05",
        month: "MAY",
        title: "Miami",
        subtitle: "FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2024",
        flag: "/image/nations/United States.avif",
        map: "/image/maps/Miami carbon.png"
    },
    {
        round: "ROUND 7",
        date: "17-19",
        month: "MAY",
        title: "Emilia-Romagna",
        subtitle: "FORMULA 1 MSC CRUISES GRAN PREMIO DEL MADE IN ITALY E DELL'EMILIA-ROMAGNA 2024",
        flag: "/image/nations/italy-flag.avif",
        map: "/image/maps/Emilia Romagna carbon.png"
    },
    {
        round: "ROUND 8",
        date: "24-26",
        month: "MAY",
        title: "Monaco",
        subtitle: "FORMULA 1 GRAND PRIX DE MONACO 2024",
        flag: "/image/nations/Monaco.avif",
        map: "/image/maps/Monte Carlo carbon.png"
    },
    {
        round: "ROUND 9",
        date: "07-09",
        month: "JUN",
        title: "Canada",
        subtitle: "FORMULA 1 AWS GRAND PRIX DU CANADA 2024",
        flag: "/image/nations/Canada.avif",
        map: "/image/maps/Canada carbon.png"
    },
    {
        round: "ROUND 10",
        date: "21-23",
        month: "JUN",
        title: "Spain",
        subtitle: "FORMULA 1 ARAMCO GRAN PREMIO DE ESPAÑA 2024",
        flag: "/image/nations/Spain.avif",
        map: "/image/maps/Spain carbon.png"
    }, 
    {
        round: "ROUND 11",
        date: "28-30",
        month: "JUN",
        title: "Austria",
        subtitle: "FORMULA 1 QATAR AIRWAYS AUSTRIAN GRAND PRIX 2024",
        flag: "/image/nations/Australia.avif",
        map: "/image/maps/Austria carbon.png"
    },
    {
        round: "ROUND 12",
        date: "05-07",
        month: "JUL",
        title: "Great Britain",
        subtitle: "FORMULA 1 QATAR AIRWAYS BRITISH GRAND PRIX 2024",
        flag: "/image/nations/United Kingdom.avif",
        map: "/image/maps/Great Britain carbon.png"
    },
    {
        round: "ROUND 13",
        date: "19-21",
        month: "JUL",
        title: "Hungary",
        subtitle: "FORMULA 1 HUNGARIAN GRAND PRIX 2024",
        flag: "/image/nations/hungary-flag.avif",
        map: "/image/maps/Hungar carbon.png"
    },
    {
        round: "ROUND 14",
        date: "26-28",
        month: "JUL",
        title: "Belgium",
        subtitle: "FORMULA 1 ROLEX BELGIAN GRAND PRIX 2024",
        flag: "/image/nations/belgium-flag.avif",
        map: "/image/maps/Belgium carbon.png"
    },
    {
        round: "ROUND 15",
        date: "23-25",
        month: "AUG",
        title: "Netherlands",
        subtitle: "FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2024",
        flag: "/image/nations/Netherlands.avif",
        map: "/image/maps/Netherlands carbon.png"
    },
    {
        round: "ROUND 16",
        date: "30-01",
        month: "AUG-SEP",
        title: "Italy",
        subtitle: "FORMULA 1 PIRELLI GRAN PREMIO D’ITALIA 2024",
        flag: "/image/nations/italy-flag.avif",
        map: "/image/maps/Italy carbon.png"
    },
    {
        round: "ROUND 17",
        date: "13-15",
        month: "SEP",
        title: "Azerbaijan",
        subtitle: "FORMULA 1 QATAR AIRWAYS AZERBAIJAN GRAND PRIX 2024",
        flag: "/image/nations/azerbaijan-flag.avif",
        map: "/image/maps/Azerbaijan carbon.png"
    },
    {
        round: "ROUND 18",
        date: "20-22",
        month: "SEP",
        title: "Singapore",
        subtitle: "FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2024",
        flag: "/image/nations/singapore-flag.avif",
        map: "/image/maps/Singapore carbon.png"
    },
    {
        round: "ROUND 19",
        date: "18-20",
        month: "OCT",
        title: "United States",
        subtitle: "FORMULA 1 PIRELLI UNITED STATES GRAND PRIX 2024",
        flag: "/image/nations/United States.avif",
        map: "/image/maps/USA carbon.png"
    },
    {
        round: "ROUND 20",
        date: "25-27",
        month: "OCT",
        title: "Mexico",
        subtitle: "FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÉXICO 2024",
        flag: "/image/nations/Mexico.avif",
        map: "/image/maps/Mexico carbon.png"
    },
    {
        round: "ROUND 21",
        date: "01-03",
        month: "NOV",
        title: "Brazil",
        subtitle: "FORMULA 1 LENOVO GRANDE PRÊMIO DE SÃO PAULO 2024",
        flag: "/image/nations/brazil-flag.avif",
        map: "/image/maps/Brazil carbon.png"
    },
    {
        round: "ROUND 22",
        date: "21-23",
        month: "NOV",
        title: "Las Vegas",
        subtitle: "FORMULA 1 LAS VEGAS GRAND PRIX 2024",
        flag: "/image/nations/United States.avif",
        map: "/image/maps/Las Vegas carbon.png"
    },
    {
        round: "ROUND 23",
        date: "29-01",
        month: "NOV-DEC",
        title: "Qatar",
        subtitle: "FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2024",
        flag: "/image/nations/qatar-flag.avif",
        map: "/image/maps/Qatar carbon.png"
    },
    {
        round: "ROUND 24",
        date: "06-08",
        month: "DEC",
        title: "Abu Dhabi",
        subtitle: "FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2024",
        flag: "/image/nations/united-arab-emirates-flag.avif",
        map: "/image/maps/Abu Dhab carbon.png"
    }
];

function renderSchedule() {
    const scheduleContainer = document.getElementById('maps'); // Thay đổi ID ở đây

    scheduleData.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');

        eventElement.innerHTML = `
            <div class="event-header">
                <div>${event.round}</div>
                <img src="${event.flag}" alt="Flag" width="30" height="20">
            </div>
            <div class="event-date">${event.date}</div>
            <div class="event-month">${event.month}</div>
            <div class="event-title">${event.title}</div>
            <div class="event-subtitle">${event.subtitle}</div>
            <div class="track-map">
                <img src="${event.map}" alt="${event.title} Track Map" style="width: 100%; height: auto;">
            </div>
        `;

        scheduleContainer.appendChild(eventElement);
    });
}


document.addEventListener('DOMContentLoaded', renderSchedule);
