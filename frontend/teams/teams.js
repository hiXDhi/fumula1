// Dữ liệu cho các đội đua
const teams = [
    {
        name: "McLaren",
        position: 1,
        points: 516,
        drivers: [
            {
                name: "Lando",
                lastName: "NORRIS",
                img: "/image/drivers/lannor01.avif"
            },
            {
                name: "Oscar",
                lastName: "PIASTRI",
                img: "/image/drivers/oscpia01.avif"
            }
        ],
        carImg: "/image/cars/mclaren.avif",
        color: "#ff8000"
    },
    {
        name: "Red Bull Racing",
        position: 2,
        points: 475,
        drivers: [
            {
                name: "Max",
                lastName: "VERSTAPPEN",
                img: "/image/drivers/maxver01.avif"
            },
            {
                name: "Sergio",
                lastName: "PEREZ",
                img: "/image/drivers/oscpia01.avif"
            }
        ],
        carImg: "/image/cars/red-bull-racing.avif",
        color: "#007bff"
    },
    {
        name: "Ferrari",
        position: 3,
        points: 441,
        drivers: [
            {
                name: "Charles",
                lastName: "LECLERC",
                img: "/image/drivers/chalec01.avif" // URL hình ảnh thực tế
            },
            {
                name: "Carlos",
                lastName: "SAINZ",
                img: "/image/drivers/chalec01.avif" // URL hình ảnh thực tế
            }
        ],
        carImg: "/image/cars/ferrari.avif", // URL hình ảnh thực tế
        color: "#d50000"
    },
    {
        name: "Mercedes",
        position: 4,
        points: 329,
        drivers: [
            {
                name: "Lewis",
                lastName: "HAMILTON",
                img: "/image/drivers/lewham01.avif" // URL hình ảnh thực tế
            },
            {
                name: "George",
                lastName: "RUSSELL",
                img: "/image/drivers/georus01.avif" // URL hình ảnh thực tế
            }
        ],
        carImg: "/image/cars/mercedes.avif", // URL hình ảnh thực tế
        color: "#00d2be"
    },
    {
        name: "Aston Martin",
        position: 5,
        points: 86,
        drivers: [
            {
                name: "Fernando",
                lastName: "ALONSO",
                img: "/image/drivers/feralo01.avif" // URL hình ảnh thực tế
            },
            {
                name: "Lance",
                lastName: "STROLL",
                img: "/image/drivers/lanstr01.avif" // URL hình ảnh thực tế
            }
        ],
        carImg: "/image/cars/aston-martin.avif", // URL hình ảnh thực tế
        color: "#007A33"
    },
    {
        name: "AlphaTauri",
        position: 6,
        points: 34,
        drivers: [
            {
                name: "Yuki",
                lastName: "TSUNODA",
                img: "/image/drivers/yuktsu01.avif" // URL hình ảnh thực tế
            },
            {
                name: "Liam",
                lastName: "LAWSON",
                img: "/image/drivers/lialaw01.avif" // URL hình ảnh thực tế
            }
        ],
        carImg: "/image/cars/rb.avif", // URL hình ảnh thực tế
        color: "#FFFFFF"
    },
    {
        name: "Haas",
        position: 7,
        points: 31,
        drivers: [
            {
                name: "Nico",
                lastName: "HULKENBERG",
                img: "/image/drivers/nichul01.avif" // URL hình ảnh thực tế
            },
            {
                name: "Kevin",
                lastName: "MAGNUSSEN",
                img: "/image/drivers/kevmag01.avif" // URL hình ảnh thực tế
            }
        ],
        carImg: "/image/cars/haas.avif", // URL hình ảnh thực tế
        color: "#C0C0C0"
    },
    {
        name: "Williams",
        position: 8,
        points: 16,
        drivers: [
            {
                name: "Alexander",
                lastName: "ALBON",
                img: "/image/drivers/alealb01.avif" // URL hình ảnh thực tế
            },
            {
                name: "Franco",
                lastName: "COLAPINTO",
                img: "/image/drivers/fracol01.avif" // URL hình ảnh thực tế
            }
        ],
        carImg: "/image/cars/williams.avif", // URL hình ảnh thực tế
        color: "#00BFFF"
    },
    {
        name: "Alpine",
        position: 9,
        points: 13,
        drivers: [
            {
                name: "Pierre",
                lastName: "GASLY",
                img: "/image/drivers/piegas01.avif" // URL hình ảnh thực tế
            },
            {
                name: "Esteban",
                lastName: "OCON",
                img: "/image/drivers/estoco01.avif" // URL hình ảnh thực tế
            }
        ],
        carImg: "/image/cars/alpine.avif", // URL hình ảnh thực tế
        color: "#A2C2E6"
    },
    {
        name: "Sauber (Alfa Romeo)",
        position: 10,
        points: 0,
        drivers: [
            {
                name: "Valtteri",
                lastName: "BOTTAS",
                img: "/image/drivers/valbot01.avif" // URL hình ảnh thực tế
            },
            {
                name: "Zhou",
                lastName: "GUANYU",
                img: "/image/drivers/guazho01.avif" // URL hình ảnh thực tế
            }
        ],
        carImg: "/image/cars/kick-sauber.avif", // URL hình ảnh thực tế
        color: "#9B1B30"
    }
];

// Hàm để tạo và thêm đội đua vào DOM
function renderTeams(teams) {
    const teamsContainer = document.getElementById("teams-container");
    
    teams.forEach(team => {
        const teamCard = document.createElement("div");
        teamCard.className = "team-card";

        teamCard.innerHTML = `
            <h2>
                <span>${team.position}</span>
                <div class="team-name">
                    <span style="color: ${team.color};">|</span> ${team.name}
                </div>
            </h2>
            <div class="points">${team.points} <span>PTS</span></div>
            <div class="drivers">
                ${team.drivers.map(driver => `
                    <div class="driver">
                        <img alt="Driver" src="${driver.img}" />
                        <p>${driver.name} <strong>${driver.lastName}</strong></p>
                    </div>
                `).join('')}
            </div>
            <div class="car">
                <img alt="${team.name} Car" src="${team.carImg}" />
            </div>
        `;

        teamsContainer.appendChild(teamCard);
    });
}

// Gọi hàm render để thêm các đội đua vào trang
renderTeams(teams);
