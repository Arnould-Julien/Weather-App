let cityInput1 = document.querySelector("#city1");
let cityInput2 = document.querySelector("#city2");
let compareBtn = document.querySelector("#compare");
let cityOutput1 = document.querySelector("#city1out");
let cityOutput2 = document.querySelector("#city2out");
let description1 = document.querySelector("#description1");
let description2 = document.querySelector("#description2");
let temp1 = document.querySelector("#temp1");
let temp2 = document.querySelector("#temp2");
let wind1 = document.querySelector("#wind1");
let wind2 = document.querySelector("#wind2");

const apiKey = "997c9b149b50254fc8626f4459c9dd02";


function convertToCelsius(val) {
    return (val - 273).toFixed(2);
}


function fetchWeather(cityInput, cityOutput, descriptionOutput, tempOutput, windOutput) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityInput.value + '&appid=' + apiKey)
        .then(res => res.json())
        .then(data => {
            let nameval = data['name'];
            let description = data['weather'][0]['description'];
            let temperature = data['main']['temp'];
            let windSpeed = data['wind']['speed'];

            cityOutput.textContent = `La météo de : ${nameval}`;
            descriptionOutput.textContent = `Condition météo : ${description}`;
            tempOutput.textContent = `Température : ${convertToCelsius(temperature)} °C`;
            windOutput.textContent = `Vitesse du vent : ${windSpeed} m/s`;
        })
        .catch(err => alert('Vous avez entré un mauvais nom de ville !'));
}


function compareWeather() {
    fetchWeather(cityInput1, cityOutput1, description1, temp1, wind1);
    fetchWeather(cityInput2, cityOutput2, description2, temp2, wind2);
}

compareBtn.addEventListener('click', compareWeather);
