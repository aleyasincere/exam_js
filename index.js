const searchInput = document.querySelector(".search-input");
const placeholderText = document.querySelector(".placeholder-text");
const container = document.querySelector(".meather-container");
const selectodLocation = document.querySelector(
  ".date-location-info .location"
);
const currentDate = document.querySelector(".date-location-info .time");

const weatherIcon = document.querySelector(".weather-info .icon");
const weatherTemp = document.querySelector(".temp-info .temp");
const weatherDescription = document.querySelector(".temp-info .description");

const weatherFeelsLike = document.getElementById("feels-like");
const weatherNumidity = document.getElementById("humidity");
const weatherWind = document.getElementById("wind");

const API = {
  key: "7fa36938c8e04263afd83527221412",
  base: "http://api.weatherapi.com/v1/current.json",
};

searchInput.addeventListener("keypress", ssetQuery);

async function setQuery(e) {
  if (e.keyCode === 13 && e.target.value) {
    await getElementById(e.target.value);
  }
}

in1.addEventListener("keydown", f);
function f(event) {
  if (event.keyCode == 13 && event.target.value) {
    let query = in1.value;

    fetch(`${API.base}?key=${API.key}&q=${query}`)
      .then((response) => response.json())
      .then((item) => {
        let icon = item.current.condition.icon;
        let text = item.current.condition.text;
        // country.textContent=country.textContent+item.location.name
        console.log(item);
        console.log(icon);
        weather.innerHTML = ` <div class="City"> ${item.location.country},${item.location.name}</p>
                                <p class="time">Wednesday, ${item.location.localtime}</p></div>
                                <img class="png" src="https:${icon}" >
                                <div class="Temp">${item.current.temp_c}°C
                                <p class="sunny">${text}</p></div>
                                <div class="block3">
                                <p class="feels">Feels like: ${item.current.feelslike_c}°C</p>
                                <p class="Humidity">Humidity: ${item.current.humidity}%</p>
                                <p class="wind">Wind: ${item.current.wind_kph}</p>
                                </div>
                                </div>
                                </div>
                                `;
      });
  } catch {
    in2.addeventListener("keydown", e);
    function e(event) {
        
    }
  }
}
