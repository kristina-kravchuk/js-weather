const api = {
    endpoit :"https://api.openweathermap.org/data/2.5/",
    key: "05c121adb18c54b205023893b76a8613"
}

const input = document.querySelector("#input");
input.addEventListener("keypress", enter);

function enter(e) {
    if (e.keyCode === 13) {
    getInfo(input.value);
    }
}

async function getInfo (data) {
  const res = await fetch(`${api.endpoit}weather?q=${data}&units=metric&appID=${api.key}`);
  const resRecieved = await res.json();
displayResult(resRecieved);
}
function displayResult(resRecieved){
    console.log(resRecieved);
    let city = document.querySelector("#city");
    city.textContent = `${resRecieved.name},${resRecieved.sys.country}`
    getOurDate();




    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(resRecieved.main.temp)}<span>°</span>`
    let feelsLike = document.querySelector("#feelsLike");
    feelsLike.innerHTML = ` Feels like: ${Math.round(resRecieved.main.feels_like)}<span>°</span>`
    let conditions = document.querySelector("#conditions");
    conditions.textContent = `${resRecieved.weather[0].main}`
    let variation =  document.querySelector("#variation");
    variation.innerHTML = "Min" + `${Math.round(resRecieved.main.temp_min)}<span>°</span>` + " Max" + `${Math.round(resRecieved.main.temp_max)}<span>°</span>`

}

function getOurDate() {
const myDate = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[myDate.getDay()];

let today = myDate.getDate();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[myDate.getMonth()];
console.log(month)
let year = myDate.getFullYear();
console.log(year)

let showDate = document.querySelector("#date");
showDate.textContent = `${day}` + " " + `${today}` + " " + `${month}` + " " + `${year}`

}