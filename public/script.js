const endpoint = '';

const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data))

function findMatches(WordToMatch, cities) {
    return cities.filter(place => {

        const regex = new RegExp(WordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    });
}
