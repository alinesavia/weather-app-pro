const cityName = document.querySelector("#city-name");
const updateTime = document.querySelector("#update-time");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const wind = document.querySelector("#wind");
const humidity = document.querySelector("#humidity");
const fellsLike = document.querySelector("#feels-like");
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const weatherIcon = document.getElementById("weather-icon");
const loadingMessage = document.getElementById("loading-message");
const errorMessage= document.getElementById("error-message");
const hourlyContainer = document.getElementById("hourly-container");
const dailyContainer = document.getElementById("daily-container");
  

 function updateWeather(data) {
  cityName.textContent = data.name;

  const now = new Date();
  updateTime.textContent = `Atualizado às ${now.getHours()}:${now
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  description.textContent = data.weather[0].description;

  wind.textContent = `${data.wind.speed} km/h`;
  humidity.textContent = `${data.main.humidity}%`;
  fellsLike.textContent = `${Math.round(data.main.feels_like)}°C`;

  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

function showLoading() {
  loadingMessage.classList.remove("hidden");
  errorMessage.classList.add("hidden");
}

function hideLoading() {
  loadingMessage.classList.add("hidden");
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
}

function updateHourForecast(data) {
  hourlyContainer.innerHTML = "";

  const nextHours = data.list.slice(0, 6);

  nextHours.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("hour-card");

    const hour = new Date(item.dt_txt).getHours();
    const icon = item.weather[0].icon;
    const temp = Math.round(item.main.temp);

    card.innerHTML = `
    <p>${hour}h</p>
    <img src="https://openweathermap.org/img/wn/${icon}.png" />
    <p>${temp}°C</p>
    `

    hourlyContainer.appendChild(card);
    
  })
    
}

async function fetchForecast(city) {
  const response = await fetch(`http://localhost:3000/forecast?city=${city}`);

  if (!response.ok) {
    const errorData = await response.json();
    const msg = errorData.message || "Erro ao buscar a previsão.";
    throw new Error(msg.charAt(0).toUpperCase() + msg.slice(1));
  }

  return response.json();
}

async function fetchWeather(city) {
  const response = await fetch(`http://localhost:3000/weather?city=${city}`);

  if (!response.ok) {
    const errorData = await response.json();
    const msg = errorData.message || "Erro ao buscar o clima.";
    throw new Error(msg.charAt(0).toUpperCase() + msg.slice(1));
  }

  return response.json();
}

async function handleSearch() {
  const city = cityInput.value.trim();

  if (city === "") {
    showError("Por favor, digite o nome de uma cidade.");
    return;
  }

  showLoading();

  try {
    const [weatherData, forecastData] = await Promise.all([
      fetchWeather(city),
      fetchForecast(city),
    ]);

    errorMessage.classList.add("hidden");
    console.log("WEATHER DATA:", weatherData);
    updateWeather(weatherData);
    updateHourForecast(forecastData);
  } catch (error) {
    showError(error.message);
  } finally {
    hideLoading();
    cityInput.value = "";
  }
}



document.addEventListener("DOMContentLoaded", () => {
  
  const card = document.querySelector(".weather-card");
  if (card) {
    setTimeout(() => {
      card.classList.add("show");
    }, 300);
    }

  searchBtn.addEventListener("click", handleSearch);

  cityInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  });
});

  
