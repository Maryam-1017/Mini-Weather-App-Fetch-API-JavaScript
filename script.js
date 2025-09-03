
//your api key here

const API_KEY = "f7d8f62a3f92db1cff5e7111d4c42b0d";

function getWeather() {
  const city = document.getElementById("city").value;
  if (city === "") {
    alert("Please enter a city name!");
    return;
  }

  // API URL
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  // Fetch API call
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        document.getElementById("result").innerHTML = "❌ City not found!";
      } else {
        const temp = data.main.temp;
        const condition = data.weather[0].description;
        const cityName = data.name;
        const iconCode = data.weather[0].icon; // get icon code
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        document.getElementById("result").innerHTML = `
          📍 <b>${cityName}</b><br>
          <img src="${iconUrl}" class="icon" alt="weather icon"><br>
          🌡 Temperature: ${temp}°C <br>
          🌥 Condition: ${condition}
        `;
      }
    })
    .catch(error => {
      document.getElementById("result").innerHTML = "⚠ Error fetching data!";
      console.error(error);
    });
}
