const apiKey = '84726e32a3696eb54adbcff96570ecbf';
const city = 'Buenos Aires';
const units = 'metric';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

const ciudad_widget = document.getElementById('ciudad');

ciudad_widget.innerHTML = city;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const temperatura = data.main.temp.toFixed(1);
    const temp_widget = document.getElementById('temperatura')
    temp_widget.innerHTML = temperatura;
    const img = document.querySelector("#icon_clima");
    const condicion = data.weather[0].main.replace(" ","").toLowerCase();
    console.log(condicion)
    img.style.backgroundImage= `url(img/${condicion}.png)`

    
})
  .catch(error => console.error(error));

