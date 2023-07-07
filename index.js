document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault()
      let nation = e.target.nationText.value
     
      e.target.reset()
      listCountry(nation)
  
  document.querySelector('#countrylist').addEventListener('click', (e) => {
    if(e.target.matches('.details')) {
      handleCountryClick(e.target);
    }

  });
   // Sends a GET request to the REST API to get the list data
   function listCountry(nation){
    fetch(`https://restcountries.com/v3.1/name/${nation}`, {
        method: 'GET',
        // Sets the headers for the request to specify the format of the response
        header:{
    'Content-Type': 'application/json',
    Accept: 'application/vnd.github.v3+json'
    },
   // Converts the data to JSON format
  body: JSON.stringify()
    })
    .then(res => res.json())
    .then(data => showCountries(data))
}
function showCountries(data){
  let showListHTML = '';

  // Clear the contents of the country list
  document.querySelector('#countrylist').innerHTML = '';

  data.forEach(country => {
      let list = document.createElement('div')
      list.className = 'details'
      list.innerHTML = `<h2>Name: ${country.name.common}</h2>
      <p>Independence status: ${country.independent}</p>
      <p>Capital: ${country.capital}</p>
      <p>Continent: ${country.continents}</p>
      <p> Flag: ${country.flag}</p>
      `
      document.querySelector('#countrylist').appendChild(list)
  })
 
}


  })

});