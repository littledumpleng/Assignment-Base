async function windowActions() { // asynchronous function; async gives access to await keyword
    console.log('window loaded');
    const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
    const request = await fetch(endpoint); // request fetches the api; await pauses async function execution until a Promise is addressed
    const restaurant = await request.json(); //restaurants is request formatted to json; empty array
    const search = document.querySelector("#search"); // document is html page

    function findMatches(WordToMatch, restaurant) {
        return restaurant.filter(place => {
            const regex = new RegExp(WordToMatch, 'gi'); // how to customize
            return place.city.match(regex) || place.state.match(regex)
        });
    }

    function displayMatches(event){
        const matchArray = findMatches(event.target.value, restaurant);
        const html = matchArray.map(place => {
            return `
                <li> 
                    <span class = "name">${place.city}, ${place.state}</span> 
                    <span class = "...">${place.population}</span>
                </li> 
            `; // span is an inline container
        }).join('');
        // suggestions.innerHTML = html; //returns inner HTML text content
    }

    search.addEventListener('keyup', async (event) => { // keyup is stop typing
        displayMatches(event);
        // search endpoint
    });
}
window.onload = windowActions;

// console.table(endpoint);


