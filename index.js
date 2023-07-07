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
  

    })

});