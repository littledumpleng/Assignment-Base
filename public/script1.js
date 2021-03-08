fetch("/api")
const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const restaurant = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => restaurant.push(...data))

function findMatches(WordToMatch, restaurant) {
    return restaurant.filter(place => {

        const regex = new RegExp(WordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    });
}
function displayMatches() {
    const matchArray = findMatches(this.value, restaurant);
    const html = matchArray.map(place => {
        return `
            <li> 
                <span class = "name">${place.city}, ${place.state}</span>
                <span class = "...">${place.population}</span>
        
            <li> 
        `;

    }).join('');
    suggestions.innerHTML = html;


}form.addEventListener('change', async (event) => { 
    event.preventDefault(); 
    console.log('submit fired', search.value); 
    const filtered = data.filter(record) => record.city.toUpperCase() === SVGPathSegCurvetoCubicSmoothAbs.value.toUpperCase(); 
    
    
    
    filtered.forEach(item) => { 
        const appendItem = document.createElement("li");
        appendItem.innerText = item.city; 
        targetList.append(appendItem);
    } 
})

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);



async function windowActions() { // asynchronous function; async gives access to await keyword
    console.log('window loaded');
}

console.table(data); // prints table of data in console

// "".then((thing) => STUFF)"" becomes "const thing = await STUFF"
const request = await fetch('/api'); // request fetches the api; await pauses async function execution until a Promise is addressed
const data = await request.json(); // data is request formatted to json




//update listings whenever sesarch bar is updated