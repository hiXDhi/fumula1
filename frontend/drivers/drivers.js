document.getElementById("drivers-nav").addEventListener("click", function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết

    const driverCardsContainer = document.getElementById("driver-cards");
    driverCardsContainer.style.display = "flex"; // Hiện thẻ chứa card

    // Dữ liệu driver
    const drivers = [
        {
          position: 1,
          points: 331,
          name: "Max Verstappen",
          flag: "/image/nations/Netherlands.avif",
          team: "Red Bull Racing",
          image: "/image/drivers/maxver01.avif",
          number: 1
        },
        {
          position: 2,
          points: 279,
          name: "Lando Norris",
          flag: "/image/nations/United Kingdom.avif",
          team: "McLaren",
          image: "/image/drivers/lannor01.avif",
          number: 4
        },
        {
          position: 3,
          points: 245,
          name: "Charles Leclerc",
          flag: "/image/nations/Monaco.avif",
          team: "Ferrari",
          image: "/image/drivers/chalec01.avif",
          number: 16
        },
        {
          position: 4,
          points: 237,
          name: "Oscar Piastri",
          flag: "/image/nations/Australia.avif",
          team: "McLaren",
          image: "/image/drivers/oscpia01.avif",
          number: 81
        },
        {
          position: 5,
          points: 190,
          name: "Carlos Sainz",
          flag: "/image/nations/Spain.avif",
          team: "Ferrari",
          image: "/image/drivers/carsai01.avif",
          number: 55
        },
        {
          position: 6,
          points: 174,
          name: "Lewis Hamilton",
          flag: "/image/nations/United Kingdom.avif",
          team: "Mercedes",
          image: "/image/drivers/lewham01.avif",
          number: 44
        },
        {
          position: 7,
          points: 155,
          name: "George Russell",
          flag: "/image/nations/United Kingdom.avif",
          team: "Mercedes",
          image: "/image/drivers/georus01.avif",
          number: 63
        },
        {
          position: 8,
          points: 144,
          name: "Sergio Perez",
          flag: "/image/nations/Mexico.avif",
          team: "Red Bull Racing",
          image: "/image/drivers/serper01.avif",
          number: 11
        },
        {
          position: 9,
          points: 62,
          name: "Fernando Alonso",
          flag: "/image/nations/Spain.avif",
          team: "Aston Martin",
          image: "/image/drivers/feralo01.avif",
          number: 14
        },
        {
          position: 10,
          points: 24,
          name: "Nico Hulkenberg",
          flag: "/image/nations/Germany.avif",
          team: "Haas",
          image: "/image/drivers/nichul01.avif",
          number: 27
        },
        {
          position: 11,
          points: 24,
          name: "Lance Stroll",
          flag: "/image/nations/Canada.avif",
          team: "Aston Martin",
          image: "/image/drivers/lanstr01.avif",
          number: 18
        },
        {
          position: 12,
          points: 22,
          name: "Yuki Tsunoda",
          flag: "/image/nations/Japan.avif",
          team: "RB",
          image: "/image/drivers/yuktsu01.avif",
          number: 22
        },
        {
          position: 13,
          points: 12,
          name: "Alexander Albon",
          flag: "/image/nations/Thailand.avif",
          team: "Williams",
          image: "/image/drivers/alealb01.avif",
          number: 23
        },
        {
          position: 14,
          points: 12,
          name: "Daniel Ricciardo",
          flag: "/image/nations/Australia.avif",
          team: "RB",
          image: "/image/drivers/danric01.avif",
          number: 3
        },
        {
          position: 15,
          points: 8,
          name: "Pierre Gasly",
          flag: "/image/nations/France.avif",
          team: "Alpine",
          image: "/image/drivers/piegas01.avif",
          number: 10
        },
        {
          position: 16,
          points: 7,
          name: "Oliver Bearman",
          flag: "/image/nations/United Kingdom.avif",
          team: "Haas",
          image: "/image/drivers/olibea01.avif",
          number: 50
        },
        {
          position: 17,
          points: 6,
          name: "Kevin Magnussen",
          flag: "/image/nations/Denmark.avif",
          team: "Haas",
          image: "/image/drivers/kevmag01.avif",
          number: 20
        },
        {
          position: 18,
          points: 5,
          name: "Esteban Ocon",
          flag: "/image/nations/France.avif",
          team: "Alpine",
          image: "/image/drivers/estoco01.avif",
          number: 31
        },
        {
          position: 19,
          points: 4,
          name: "Franco Colapinto",
          flag: "/image/nations/Argentina.avif",
          team: "Williams",
          image: "/image/drivers/fracol01.avif",
          number: 43
        },
        {
          position: 20,
          points: 0,
          name: "Zhou Guanyu",
          flag: "/image/nations/China.avif",
          team: "Kick Sauber",
          image: "/image/drivers/guazho01.avif",
          number: 24
        },
        {
          position: 21,
          points: 0,
          name: "Logan Sargeant",
          flag: "/image/nations/United States.avif",
          team: "Williams",
          image: "/image/drivers/logsar01.avif",
          number: 2
        },
        {
          position: 22,
          points: 0,
          name: "Valtteri Bottas",
          flag: "/image/nations/Finland.avif",
          team: "Kick Sauber",
          image: "/image/drivers/valbot01.avif",
          number: 77
        },
        {
          position: null,
          points: 0,
          name: "Liam Lawson",
          flag: "/image/nations/New Zealand.avif",
          team: "RB",
          image: "/image/drivers/lialaw01.avif",
          number: 30
        }
      ];      
 
    // Xóa các thẻ card trước đó nếu có
    driverCardsContainer.innerHTML = '';

    // Thêm thẻ card cho mỗi driver
    drivers.forEach(driver => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="header">
                <div class="position">${driver.position}</div>
                <div class="points">${driver.points} <span>PTS</span></div>
            </div>
            <div class="info">
                <div class="name">${driver.name}</div>
                <img alt="Flag of ${driver.name}" class="flag" src="${driver.flag}"/>
            </div>
            <div class="team">${driver.team}</div>
            <img alt="Image of ${driver.name}" class="driver-image" src="${driver.image}"/>
            <div class="driver-number">${driver.number}</div>
        `;

        driverCardsContainer.appendChild(card);
    });
});
