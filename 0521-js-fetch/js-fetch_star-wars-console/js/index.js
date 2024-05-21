console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const starWars = await response.json();

  console.log(starWars);
  console.log(starWars.results[2].eye_color);
  console.log(starWars.results[5].name);
}

fetchData();
