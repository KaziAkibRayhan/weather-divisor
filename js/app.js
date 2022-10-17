const API_KEY = `10887ac433e12817d581cc230be337cd`;
const loadTemparature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparature(data))
}

const displayTemparature = data => {
    const temparature = document.getElementById('temparature');
    temparature.innerHTML = data.main.temp;
}

loadTemparature("dhaka");
