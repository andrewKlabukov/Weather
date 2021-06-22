// e90aa52d292a0b9431b77074ddb8d207 Api key

let city = document.querySelector('.select-city');
forecast();
document.querySelector('.btn').onclick = forecast;

function forecast() {    
fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=e90aa52d292a0b9431b77074ddb8d207`)
    .then(function(resp){return resp.json()})
    .then(function(data){
        document.querySelector('.city-name').textContent = data.name;
        document.querySelector('.degs').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.clouds').textContent = data.weather[0]['description'];
        //https://openweathermap.org/img/wn/02d@2x.png
        document.querySelector('.features').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

    })

} 