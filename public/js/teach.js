const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []
async function getData() {
  const res = await fetch('https://api.npoint.io/98e2236caed2052cb1e8')
  const {results} = await res.json()
  console.log(results)
  if(results.length>0) {
  result.innerHTML = ''
    results.forEach(user => {
    const li = document.createElement('li')
    listItems.push(li)
    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.sphere.speciality}, ${user.sphere.degree}</p>
      </div>`
   result.appendChild(li)
  })
  }

}
function filterData(searchTerm){
  listItems.forEach(item => {
    if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
      item.classList.remove('hide')
    } else{
      item.classList.add('hide')
    }
  }
)}
filter.addEventListener('change', (e) => filterData(e.target.value))
getData()
