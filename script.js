const API_KEY = "3b05e22f0a3e6bbfde69a08603d906ea";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const SEARCH_BOX = document.querySelector(".search input");
const SEARCH_BUTTON = document.querySelector(".search button");
const WEATHER_ICON = document.querySelector(".weather-icon");

async function getWeather(city) {
  const response = await fetch(API_URL + city + `&appid=${API_KEY}`);
  let data = await response.json();

  console.log(data)

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main === "Clear") {
    WEATHER_ICON.src = "images/clear.png"
  } else if (data.weather[0].main === "Clouds") {
    WEATHER_ICON.src = "images/clouds.png"
  } else if (data.weather[0].main === "Drizzle") {
    WEATHER_ICON.src = "images/drizzle.png"
  } else if (data.weather[0].main === "Mist") {
    WEATHER_ICON.src = "images/mist.png"
  } else if (data.weather[0].main === "Rain") {
    WEATHER_ICON.src = "images/rain.png"
  } else if (data.weather[0].main === "Snow") {
    WEATHER_ICON.src = "images/snow.png"
  }
}
SEARCH_BUTTON.addEventListener("click", ()=>{
  getWeather(SEARCH_BOX.value);
})


// SEARCH_BUTTON.addEventListener("click", getWeather(SEARCH_BOX.value))