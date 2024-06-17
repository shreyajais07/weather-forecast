document.getElementById('get-weather-btn').addEventListener('click', function() {
  const city = document.getElementById('city-input').value;
  if (city) {
      fetchWeather(city);
  } else {
      alert('Please enter a city name');
  }
});

function fetchWeather(city) {
  const apiKey = 'ba31fb24010692fbd6a3322fb416ae55';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
      .then(response => response.json())
      .then(data => displayWeather(data))
      .catch(error => {
          console.error('Error fetching the weather data:', error);
          alert('Could not fetch weather data');
      });
}

function displayWeather(data) {
  const weatherInfo = document.getElementById('weather-info');
  weatherInfo.innerHTML = `
      <div class="weather-data">City: ${data.name}</div>
      <div class="weather-data">Temperature: ${data.main.temp} °C</div>
      <div class="weather-data">Weather: ${data.weather[0].description}</div>
      <div class="weather-data">Humidity: ${data.main.humidity}%</div>
      <div class="weather-data">Wind Speed: ${data.wind.speed} m/s</div>
  `;
  document.getElementById('weather-part').style.display = 'block';
}
