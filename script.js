
const submitButton = document.getElementById("submitButton");
const inputText = document.getElementById('Search');
const resultDiv = document.getElementById('ResultDiv')

submitButton.addEventListener("click", () => {
    if (inputText.value != '') {
        const region = inputText.value;
        fetchdata(region);
    }
    else {
        alert("City Name not entered")
    }


});



async function fetchdata(region) {
    //const region = 'Pune'

    console.log("fetchData running")
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=17512deb40a143e79fd172702232907&q=${region}&aqi=yes`, { mode: 'cors' })
    const weatherData = await response.json();
    const humidity = weatherData.current.humidity;
    console.log(weatherData);
    console.log(humidity);
    WriteDataInHtml(weatherData);


};

const regionNameContainer = document.createElement("div");
const regionWeatherData = document.createElement("div")

function WriteDataInHtml(weatherData) {


    regionNameContainer.innerHTML = `<div id="name">Name:${weatherData.location.name}</div>
        <div id="region">Region:${weatherData.location.region}</div>
        <div id="country">Country:${weatherData.location.country}</div>`

    regionWeatherData.innerHTML = ` <div id="temprature">Temprature:${weatherData.current.temp_c}</div>
        <div id="condition">Condition:${weatherData.current.condition.text}</div>
        <div id="wind">Wind kph:${weatherData.current.wind_kph}</div>
        <div id="pressure">Pressure:${weatherData.current.pressure_mb}</div>`

    console.log(regionNameContainer);
    AppendDataInHtml();

}

function AppendDataInHtml() {
    resultDiv.appendChild(regionNameContainer);
    resultDiv.appendChild(regionWeatherData);
}
