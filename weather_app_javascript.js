var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descript = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "3bdd908f02e0a3d8de11ba94ba9f2d82"
function convertion(val)
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
    {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var tempature = data['main']['temp']
        var wndspeed = data['wind']['speed']


        city.innerHTML = `Weather of <span>${nameval}<span>`
        temp.innerHTML = `temperature: <span>${convertion(tempature)} C</span>`
        description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
        wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h<span>`

    })

    .catch(err => alert('You entered Wrong city name'))
}
)