// 1 - API Key and Endpoint

const API_KEY = '6SYmqFz6xiK0U5ewaGGoNFKniviJRYgX';
const ENDPOINT = 'https://app.ticketmaster.com/discovery/v2/';


// 2 - Selecting DOM elements

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

let currentSearchQuery = '';
let currentPage = 1;
let totalHits = 0; //The total number of search results


// 3 - event listener for the form

form.addEventListener('submit', function(event){
    event.preventDefault();
    currentSearchQuery = document.querySelector('input[name="searchQuery"]').value;
    apiFetchEvents(currentSearchQuery); //Fetch images based on the search query (function in step 4)
})

// 4 - Function to fetch images from the ticketmaster API

function apiFetchEvents (query){
    const eventURL = `${ENDPOINT}events.json?&keyword=${query}&countryCode=US&apikey=${API_KEY}`
}