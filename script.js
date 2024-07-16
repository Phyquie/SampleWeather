const apiKey = "5701ae76a2029546be215804df943344";


const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const weatherData = document.getElementById("weather-data");

async function getWeather(city) {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    const response = await fetch(apiUrl);
    const data = await response.json();

    
    weatherData.innerHTML = `
      <h2>${data.name}</h2>
      <p>Weather - ${data.weather[0].description}</p>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Humidity :${data.main.humidity}%</p>
      <p>Wind Speed :${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    weatherData.innerHTML = `<p>City not found!</p>`;
  }
}

searchBtn.addEventListener("click", () => {
  const cityName = cityInput.value;
  if (cityName) {
    getWeather(cityName);
  } else {
    weatherData.innerHTML = `<p>Please enter a city name.</p>`;
  }
});
