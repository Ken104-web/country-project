document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault()
      let nation = e.target.nationText.value
     
      e.target.reset()
      listCountry(nation)
  })
});