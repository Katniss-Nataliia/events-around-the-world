// 1 - API Key and Endpoint

const { default: axios } = require("axios");
// api.js
const API_KEY = '6SYmqFz6xiK0U5ewaGGoNFKniviJRYgX';
const ENDPOINT = 'https://app.ticketmaster.com/discovery/v2/';


//referans.js

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const searchInput = document.querySelector(".search-input");


//event-api.js

export default class EventApi {
    constructor() {
      this.page = 1;
      this.per_page = 10;
      this.id="";
      this.keyword = "";
      this.totalElements = 16
    }




async getAllEvents(){
    try{
        const response = await axios
        .get(`${ENDPOINT}/events.json?&keyword=${this.keyword}&countryCode=US&apikey=${API_KEY}&size=${this.per_page}&page=${this.page}&totalElements=${this.totalElements}`)
        return response.data
        // console.log(response.data)
    }
    catch(error){
        return console.log(error)
    }

}

async getEventInfo(id){
    try{
        this.id = id;
        const response = await axios
        .get(
            `${ENDPOINT}/events.json?countryCode=US&apikey=${API_KEY}&id=${this.id}`
        );
        return response.data
        // console.log(response.data)
    }
    catch(error){
        console.log(error)
    }
}
}

//search.js


















// // 2 - Selecting DOM elements

// const form = document.querySelector('.search-form');
// const gallery = document.querySelector('.gallery');

// let currentSearchQuery = '';
// let currentPage = 1;
// let totalHits = 0; //The total number of search results


// // 3 - event listener for the form

// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     currentSearchQuery = document.querySelector('input[name="searchQuery"]').value;
//     apiFetchEvents(currentSearchQuery); //Fetch images based on the search query (function in step 4)
// })

// // 4 - Function to fetch images from the ticketmaster API

// function apiFetchEvents(query) {
//     const eventURL = `${ENDPOINT}events.json?&keyword=${query}&countryCode=US&apikey=${API_KEY}`
//     axios
//         .get(eventURL)
//         .then(function (response) {
//             const data = response.data;
//             console.log(data)

//             // can be if statement

//             createEventCard(data.totalHits)
//         })
//         .catch(error => console.log(error))
// }

// // 5 - create a mark up for the events to get into the gallery

// function createEventCard(events) {
//     // events.images.sort((a, b) => b.width = a.width);
//     events.map((event) => {
//         const card = document.createElement('div');
//         card.className = "event-card";

//         const img = document.createElement('img');
//         img.className = "gallery__image";
//         img.src = event.images[0].url;
//         img.alt = event.name;
//         img.loading = "lazy";
//         img.width = "450";

//         const info = document.createElement('div');
//         info.className = "info";

//         const title = document.createElement('p');
//         title.className = "info__title";
//         info.innerHTML =`${event.name}`;

//         const date = document.createElement("p");
//         date.className = "info__date";
//         info.innerHTML = `${event.dates.start.localDate}`;

//         const address = document.createElement("p");
//         address.className = "info__address";
//         info.innerHTML = `${event._embedded.venues[0].name},  ${event._embedded.venues[0].city.name}, ${event._embedded.venues[0].state.stateCode}`;

//         info.append(title,date, address);
//         card.append(img, info);
//         gallery.append(card);

//     }).join('')
    
// }