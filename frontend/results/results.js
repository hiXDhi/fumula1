// Tạo bảng từ dữ liệu và tiêu đề
function createTable(data, headers) {
    const table = document.createElement('table');

    // Tạo hàng tiêu đề
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.innerText = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Tạo các hàng dữ liệu
    data.forEach(item => {
        const row = document.createElement('tr');
        Object.values(item).forEach(value => {
            const td = document.createElement('td');
            td.innerText = value;
            row.appendChild(td);
        });
        table.appendChild(row);
    });

    return table;
}

// Hàm fetch dữ liệu từ API
async function fetchData(endpoint) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// Xử lý sự kiện cho nút Races
document.getElementById('races-button').addEventListener('click', async () => {
    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = ''; // Xóa nội dung trước đó

    const results = await fetchData('/api/races'); // Endpoint trả về dữ liệu cuộc đua
    if (results && !document.querySelector('table')) {
        const table = createTable(results, ['Grand Prix', 'Date', 'Winner', 'Car', 'Laps', 'Time']);
        tableContainer.appendChild(table);
    }
});

// Xử lý sự kiện cho nút Drivers
document.getElementById('drivers-button').addEventListener('click', async () => {
    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = ''; // Xóa nội dung trước đó

    const driverStandings = await fetchData('/api/drivers'); // Endpoint trả về dữ liệu tay đua
    if (driverStandings && !document.querySelector('table')) {
        const table = createTable(driverStandings, ['Pos', 'Driver', 'Nationality', 'Car', 'Pts']);
        tableContainer.appendChild(table);
    }
});

// Xử lý sự kiện cho nút Constructors
document.getElementById('constructors-button').addEventListener('click', async () => {
    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = ''; // Xóa nội dung trước đó

    const constructorStandings = await fetchData('/api/constructors'); // Endpoint trả về dữ liệu đội đua
    if (constructorStandings && !document.querySelector('table')) {
        const table = createTable(constructorStandings, ['Pos', 'Team', 'Pts']);
        tableContainer.appendChild(table);
    }
});

// Xử lý sự kiện cho nút Teams (thêm sự kiện mới)
document.getElementById('teams-button').addEventListener('click', async () => {
    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = ''; // Xóa nội dung trước đó

    const teamsData = await fetchData('/api/teams'); // Sử dụng dữ liệu từ endpoint teams
    if (teamsData && !document.querySelector('table')) {
        const table = createTable(teamsData, ['Pos', 'Team', 'Pts']);
        tableContainer.appendChild(table);
    }
});

// Xử lý sự kiện cho nút Drivers Nav (Hiển thị thông tin tay đua)
document.getElementById('drivers-nav').addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

    const driverCardsContainer = document.getElementById('driver-cards');
    if (driverCardsContainer.style.display === 'none' || driverCardsContainer.style.display === '') {
        driverCardsContainer.style.display = 'block'; // Hiển thị danh sách tay đua
    } else {
        driverCardsContainer.style.display = 'none'; // Ẩn đi nếu đang hiện
    }
});
