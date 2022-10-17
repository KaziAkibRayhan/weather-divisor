const API_KEY = `10887ac433e12817d581cc230be337cd`;
const loadTemparature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparature(data))
}

const displayTemparature = data => {
    // const temparature = document.getElementById('temparature');
    // temparature.innerHTML = data.main.temp;
    setInnerText('temparature', data.main.temp);
    setInnerText('condition', data.weather[0].main);
}

const setInnerText = (id, text) => {
    const temparature = document.getElementById(id);
    temparature.innerHTML = text;
}


document.getElementById('search-btn').addEventListener('click', function () {
    const city = document.getElementById('search-field').value;
    // set city
    document.getElementById('city').innerText = city;
    loadTemparature(city);
})

loadTemparature("dhaka");
