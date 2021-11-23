const search_btn = document.getElementById("search_btn");
const search_input = document.getElementById("search_input");
const weather_list = document.getElementById("weather_list");
const add_btn = document.getElementById('add_btn');
const select_location_list = document.getElementById('select_location_list');

// Array mit Temperaturen für die Orte um select-element
// lokale daten quelle 
const temperature = [
  {name:"Hamburg", temp:2},
  {name:"Paris", temp:3},
  {name:"New York", temp:-1},
  {name:"Sydney", temp:18},
];

const json_url = "https://my-json-server.typicode.com/MelissaZhao/wetterapp/locations/"

function create_new_weather_location(name, temp) {
  const new_location = document.createElement('div');
  new_location.classList.add('weather_location');

  new_location.innerHTML = `
    <div class="location">${name}</div>
      <div class="weather_info">
        <span>
          <span class="temperature">${temp}</span>
          <span class="condition">bewölkt</span>
        </span>
        <img
          class="weather_img"
          src="https://cdn.glitch.com/c569e324-22c3-491c-ab27-94a3498d6207%2Fcloudy-line.png?v=1633008253459"
          alt="Wolken"
        />
    </div>
  `;

  weather_list.appendChild(new_location);
}
function doSearch(){
    const location_name = search_input.value;
    // neues div-element für Ort erzeugen 
    create_new_weather_location(location_name,23 );
  }

 
function doAddLocation(){
  const location_name = select_location_list.value;
  // Finde ort in array mit Orten und lese Temperatur aus 
  const temp = temperature.find(
    (item) => item.name === location_name
    ).temp;
  alert("Ort hinzufügen:" + location_name + " " + temp);
  create_new_weather_location(location_name,temp);
 }
search_btn.addEventListener("click",doSearch);
add_btn.addEventListener("click",doAddLocation);
