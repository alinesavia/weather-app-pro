const cityName = document.querySelector("#city-name");
const updateTime = document.querySelector("#update-time");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const wind = document.querySelector("#wind");
const humidity = document.querySelector("#humidity");
const fellsLike = document.querySelector("#feels-like");
const uvIndex = document.querySelector("#uv-index");
  
 

  function updateWeather(data) {
    cityName.textContent = data.city;
    updateTime.textContent = `Atualizado às ${data.updatedAt}`;
    temperature.textContent = `${data.temperature}°C`;
    description.textContent = data.description;
    wind.textContent = `${data.wind} km/h`;
    humidity.textContent = `${data.humidity}%`;
    fellsLike.textContent = `${data.feelsLike}°C`;
    uvIndex.textContent = data.uvIndex;
  }

function getFakeWeatherData (city) {
  return {
    city: city,
    temperature: 32,
    description: "Ensolarado",
    wind: 12,
    humidity: 55,
    uvIndex: 9,
    updatedAt: "14:30"
  };
}

function loadWeather(city) {
  const weatherData = getFakeWeatherData(city);
  updateWeather(weatherData);
}

document.addEventListener("DOMContentLoaded", () => {
  loadWeather("Teresina");
  const card = document.querySelector(".weathercard");
  if (card) {
    setTimeout(() => {
      card.classList.add("show");
    }, 300);
    }

});

  


