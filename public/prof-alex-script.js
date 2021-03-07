async function windowActions() { // asynchronous function; async gives access to await keyword
    console.log('window loaded');
}

console.table(data); // prints table of data in console

// "".then((thing) => STUFF)"" becomes "const thing = await STUFF"
const request = await fetch('/api'); // request fetches the api; await pauses async function execution until a Promise is addressed
const data = await request.json(); // data is request formatted to json

form.addEventListener('change', async (event) => { // change calls javascript async event any time any change is made to form
    event.preventDefault(); // prevents page from reloading into something new; prevents default action belonging to an event from occurring, like clicking submit buttons
    console.log('submit fired', search.value); //what does search.value refer to
    const filtered = data.filter(record) => record.city.toUpperCase() === SVGPathSegCurvetoCubicSmoothAbs.value.toUpperCase(); // filters data, upper-case
    filtered.forEach(item) => { // replaces for loop. create and append each element to targetList
        const appendItem = document.createElement("li");
        appendItem.innerText = item.city; //can switch out city to sort by any category
        targetList.append(appendItem);
    } 
})


//update listings whenever sesarch bar is updated




// Sam's code 
// fetch('/api')
// const endpoint = '';

// const cities = [];

// fetch(endpoint)
//     .then(blob => blob.json())
//     .then(data => cities.push(...data))

// function findMatches(WordToMatch, cities) {
//     return cities.filter(place => {

//         const regex = new RegExp(WordToMatch, 'gi');
//         return place.city.match(regex) || place.state.match(regex)
//     });
// }
