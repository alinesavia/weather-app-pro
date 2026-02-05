const cityName = document.querySelector("#city-name");
const updateTime = document.querySelector("#update-time");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const wind = document.querySelector("#wind");
const humidity = document.querySelector("#humidity");
const fellsLike = document.querySelector("#feels-like");
const uvIndex = document.querySelector("#uv-index");
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
  
 

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


/*function getFakeWeatherData (city) {
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
}*/

async function handleSearch() {
  const city = cityInput.value.trim();

  if (city === "") {
    alert("Digite o nome de uma cidade");
    return;
  }

  const data = await fetchWeather(city);
  if (data) {
    updateWeather(data);
  }

  cityInput.value = "";
}

const API_KEY = "af5fd9833d2c9fe91c037034e4d5dcde";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";


async function fetchWeather(city) {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
    );

    if (!response.ok) {
      throw new Error("Cidade não encontrada");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error(error);
    alert("Erro ao buscar clima. Verifique o nome da cidade.");
  }
}


document.addEventListener("DOMContentLoaded", () => {
  loadWeather("Teresina");
  const card = document.querySelector(".weathercard");
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

  


