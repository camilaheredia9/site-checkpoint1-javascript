const objectEvents = {
    "fechaActual": "2022-01-01",
    "eventos": [
    {
    "image": "https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas7.jpg",
    "name": "Collectivities Party",
    "date": "2021-12-12",
    "description": "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
    "category": "Food Fair",
    "place": "Room A",
    "capacity": 45000,
    "assistance": 42756,
    "price": 5
    },
    {
    "image": "https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas2.jpg",
    "name": "Korean style",
    "date": "2021-08-12",
    "description": "Enjoy the best Korean dishes, with international chefs and awesome events.",
    "category": "Food Fair",
    "place": "Room A",
    "capacity": 45000,
    "assistance": 42756,
    "price": 10
    },
    {
    "image": "https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo5.jpg",
    "name": "Jurassic Park",
    "date": "2021-11-02",
    "description": "Let's go meet the biggest dinosaurs in the paleontology museum.",
    "category": "Museum",
    "place": "Field",
    "capacity": 82000,
    "assistance": 65892,
    "price": 15
    },
    {
    "image": "https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo1.jpg",
    "name": "Parisian Museum",
    "date": "2022-11-02",
    "description": "A unique tour in the city of lights, get to know one of the most iconic places.",
    "category": "Museum",
    "place": "Paris",
    "capacity": 8200,
    "estimate": 8200,
    "price": 3500
    },
    {
    "image": "https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces2.jpg",
    "name": "Comicon",
    "date": "2021-02-12",
    "description": "For comic lovers, all your favourite characters gathered in one place.",
    "category": "Costume Party",
    "place": "Room C",
    "capacity": 120000,
    "assistance": 110000,
    "price": 54
    },
    {
    "image": "https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces1.jpg",
    "name": "Halloween Night",
    "date": "2022-02-12",
    "description": "Come with your scariest costume and win incredible prizes.",
    "category": "Costume Party",
    "place": "Room C",
    "capacity": 12000,
    "estimate": 9000,
    "price": 12
    },
    {
    "image": "https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica1.jpg",
    "name": "Metallica in concert",
    "date": "2022-01-22",
    "description": "The only concert of the most emblematic band in the world.",
    "category": "Music Concert",
    "place": "Room A",
    "capacity": 138000,
    "estimate": 138000,
    "price": 150
    },
    {
    "image": "https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica2.jpg",
    "name": "Electronic Fest",
    "date": "2021-01-22",
    "description": "The best national and international DJs gathered in one place.",
    "category": "Music Concert",
    "place": "Room A",
    "capacity": 138000,
    "assistance": 110300,
    "price": 250
    },
    {
    "image": "https://amazingeventsapi.herokuapp.com/api/img/Maraton3.jpg",
    "name": "10K for life",
    "date": "2021-03-01",
    "description": "Come and exercise, improve your health and lifestyle.",
    "category": "Race",
    "place": "Campo de FutbÃ³l",
    "capacity": 30000,
    "assistance": 25698,
    "price": 3
    },
    {
    "image": "https://amazingeventsapi.herokuapp.com/api/img/Maraton1.jpg",
    "name": "15K NY",
    "date": "2021-03-01",
    "description": "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
    "category": "Race",
    "place": "New York",
    "capacity": 3000000,
    "assistance": 2569800,
    "price": 3
    },
    {
    "image": "https://amazingeventsapi.herokuapp.com/api/img/Libros7.jpg",
    "name": "School's book fair",
    "date": "2022-10-15",
    "description": "Bring your unused school book and take the one you need.",
    "category": "Book Exchange",
    "place": "Room D1",
    "capacity": 150000,
    "estimate": 123286,
    "price": 1
    },
    {
    "image": "https://amazingeventsapi.herokuapp.com/api/img/Libros3.jpg",
    "name": "Just for your kitchen",
    "date": "2021-11-09",
    "description": "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
    "category": "Book Exchange",
    "place": "Room D6",
    "capacity": 130000,
    "assistance": 90000,
    "price": 100
    },
    {
    "image": "https://amazingeventsapi.herokuapp.com/api/img/Cine3.jpg",
    "name": "Batman",
    "date": "2021-3-11",
    "description": "Come see Batman fight crime in Gotham City.",
    "category": "Cinema",
    "place": "Room D1",
    "capacity": 11000,
    "assistance": 9300,
    "price": 225
    },
    {
    "image": "https://amazingeventsapi.herokuapp.com/api/img/Cine7.jpg",
    "name": "Avengers",
    "date": "2022-10-15",
    "description": "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
    "category": "Cinema",
    "place": "Room D1",
    "capacity": 9000,
    "estimate": 9000,
    "price": 250
    }
]
}

/*
const getDataEvents = async () => {
    const promise = await fetch('https://amazing-events.herokuapp.com/api/events');
    const events = await promise.json();

    return events;
}
*/

//const objectEvents = getDataEvents();

const events = objectEvents.eventos; // array con todos los object events
const searchBtn = document.getElementById('search-btn'); // button Search
let inputSearch = document.getElementById('user-search'); // input Search

// capturo sections del html
const sectionHome = document.getElementById('sectionCards-home');
const sectionPast = document.getElementById('sectionCards-past');
const sectionUpcoming = document.getElementById('sectionCards-upcoming');
const mainDetails = document.getElementById('main-details');

// párrafo con mensaje de error
const msgError = document.getElementById('msg-error');



// ****************************************************************************************************************
// COMPARACIÓN DE FECHAS

const pastEvents = [];
const upcomingEvents = [];

const currentDate = objectEvents.fechaActual; // 2022-01-01
const currentDateSplit = currentDate.split("-"); // ['2022', '01', '01']
const currentDateTimestamp = new Date (currentDateSplit[0], currentDateSplit[1]-1, currentDateSplit[2]).getTime();

objectEvents.eventos.map((event) => {
    const dateToCompare = event.date;
    const dateToCompareSplit = dateToCompare.split("-");
    const dateToCompareTimestamp = new Date (dateToCompareSplit[0], dateToCompareSplit[1]-1, dateToCompareSplit[2]).getTime();

    if (dateToCompareTimestamp <= currentDateTimestamp) {
        pastEvents.push(event);
    } else {
        upcomingEvents.push(event);
    }
})


// ****************************************************************************************************************
// CREACIÓN Y RENDERIZACIÓN DE CARDS
let cards;
let links;

const renderCards = (array, section) => {
    const fragment = document.createDocumentFragment();
    
    array.map((event) => {
        const article = document.createElement("article");
        article.className = `section-cards_evento col-lg-3 col-md-5 col-sm-7`;
        const eventName = event.name.toLowerCase().replace(" ", "-");
        article.id = eventName;

        article.innerHTML = `
                <div>
                    <img src="${event.image}" alt="${event.name} event image">
                </div>
                <h2>${event.name}</h2>
                <p>${event.description}</p>
                <div>
                   <span>Price: $ ${event.price},00</span>
                   <button id="btn-${event.name.toLowerCase().replaceAll(" ", "-")}" type="button">See more...</button>
                </div>
                `
        fragment.appendChild(article);
    })
    section.appendChild(fragment);

    // nodelist de cards renderizadas
    cards = document.querySelectorAll('.section-cards_evento');
}


// renderizo las cards que corresponden en cada página
let currentURL = window.location.pathname.split("/").pop();

if (currentURL == "home.html") {
    renderCards(events, sectionHome);
} else if (currentURL == "pastEvents.html") {
    renderCards(pastEvents, sectionPast);
} else if (currentURL == "upcomingEvents.html") {
    renderCards(upcomingEvents, sectionUpcoming);
}





// ************************************************************************************************************
// RENDERIZAR CHECKBOX DE CATEGORÍAS DINAMICAMENTE

// creo array de categorías
const eventsCategories = events.map((event) => event.category);


// creo array de categorías sin repetición
const sevenEventsCategories = [];

for (let i=0; i < eventsCategories.length; i++) {
    if (eventsCategories.indexOf(eventsCategories[i], 0) == i) {
        sevenEventsCategories.push(eventsCategories[i]);
    }
}


// renderizo categorías
function renderCategories() {
    const containerCategories = document.getElementById('box-categorias');
    const fragment = document.createDocumentFragment();

    sevenEventsCategories.map((eventCategory) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <input id="${eventCategory.toLowerCase().replaceAll(" ", "-")}" name="categoria" value="${eventCategory.toLowerCase().replace(" ", "-")}" type="checkbox">
            <label for="${eventCategory.toLowerCase().replaceAll(" ", "-")}">${eventCategory}</label>
            `
        fragment.appendChild(div);
    })

    containerCategories.appendChild(fragment);
}

renderCategories();


// capturo en una nodelist todos los input checkbox
const checkboxs = document.querySelectorAll('input[type="checkbox"]');






// ******************************************************************************************************
// MOSTRAR CARDS SEGÚN LO INGRESADO POR TECLADO EN EL BUSCADOR
let userSearch;

// dinámicamente a medida que se escribe
inputSearch.addEventListener('keyup', () => {
    userSearch = inputSearch.value.toLowerCase();
    findCoincidences(userSearch);
})

// al hacer click en el botón de search
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userSearch = inputSearch.value.toLowerCase();
    findCoincidences(userSearch)
})


// función que evalúa coincidencias y muestra mje de error
const findCoincidences = (search) => {
    let cardsShown = 0;

    cards.forEach((card) => {
        let idCard = card.id;

        if (idCard.includes(search)) {
            card.classList.remove('hidden');
            cardsShown++;
        } else {
            card.classList.add('hidden');
        }
    })

    if (cardsShown == 0) {
        msgError.classList.remove('hidden')
    } else {
        msgError.classList.add('hidden');
    }
}




// ************************************************************************************************************
// MOSTRAR CARDS QUE COINCIDAN CON LAS CHECKBOX QUE ESTÉN "CHECKED"

let checkboxsChecked = 0;
let evts;
let section;
let eventsToShow = [];

checkboxs.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        
        if (checkbox.checked) { // al marcar un checkbox
            checkboxsChecked++;

            if (currentURL == "home.html") {
                evts = eventsStats;
                section = sectionHome;
            } else if (currentURL == "pastEvents.html") {
                evts = pastEvents;
                section = sectionPast;
            } else if (currentURL == "upcomingEvents.html") {
                evts = upcomingEvents;
                section = sectionUpcoming;
            }

            evts.forEach((evt) => {
                let eventCategory = evt.category.toLowerCase().replaceAll(" ", "-");
                if (checkbox.id == eventCategory) {
                    eventsToShow.push(evt);
                }
            })

            if (eventsToShow.length == 0 && checkboxsChecked > 0) {
                section.innerHTML = ``;
                msgError.classList.remove('hidden');
            } else {
                section.innerHTML = ``;
                renderCards(eventsToShow, section);
            }

        } else { // al desmarcar un checkbox
            checkboxsChecked--;
            eventsToShow = eventsToShow.filter((eventToShow) => (
                eventToShow.category.toLowerCase().replaceAll(" ", "-") !== checkbox.id
            ))

           section.innerHTML = ``;
           renderCards(eventsToShow, section);
        }

        // al desmarcar todos los checkboxs
        if (eventsToShow.length == 0 && checkboxsChecked == 0) {
          msgError.classList.add('hidden');
          renderCards(evts, section);
        }  

        // combinado con el buscador 
        let search = inputSearch.value.toLowerCase().replaceAll(" ", "-");  
        if (search !== "") {
            findCoincidences(search);
        }
    })
})