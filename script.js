function getData() {
    const API_KEY = "4a7c48f8733cfd7969ab17124bbd1c9b";
    const CITY = search.value;

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

    fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            temp.innerHTML=Math.ceil(data.main.temp)
            ws.innerHTML=Math.ceil(data.wind.speed)
            humidity.innerHTML=Math.ceil(data.main.humidity)
        })
        .catch(error => console.error("Error fetching weather data:", error));

}