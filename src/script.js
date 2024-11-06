let apiKey = "748d5734be19te1af0e3a12aa9abaofd";

function changeCurrentWeather(response) {
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;
  let temperatureElement = document.querySelector("#current-degree");
  temperatureElement.innerHTML = `${temperature}`;

  let heading = document.querySelector("h1");
  heading.innerHTML = city;

  let currentTime = new Date();
  let currentTimeElement = document.querySelector("#day-time-changes");
  currentTimeElement.innerHTML = weatherDetails(currentTime);
}

function writeNewCity(event) {
  event.preventDefault();
  let input = document.querySelector("#search-city");
  let city = input.value;

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(changeCurrentWeather);

  let currentTime = new Date();
  let currentTimeElement = document.querySelector("#day-time-changes");
  currentTimeElement.innerHTML = weatherDetails(currentTime);
}

let form = document.querySelector("#pick-city");
form.addEventListener("submit", writeNewCity);

function weatherDetails(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[date.getDay()];
  let currentHour = String(date.getHours()).padStart(2, "0");
  let currentMinute = String(date.getMinutes()).padStart(2, "0");

  let newTimeDetails = `${currentDay}, ${currentHour}:${currentMinute}`;

  return newTimeDetails;
}

let initialTime = new Date();
let currentTimeElement = document.querySelector("#day-time-changes");
currentTimeElement.innerHTML = weatherDetails(initialTime);
