function displayTemperature(response) {
  console.log(response.data);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = "83d4ec1e65679a00b9602279433dcdb9";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Hamburg&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
