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

// COMPARACIÓN DE FECHAS
const pastEvents = [];
const upcomingEvents = [];

const currentDate = objectEvents.fechaActual; // 2022-01-01
const currentDateSplit = currentDate.split("-"); // ['2022', '01', '01']
const currentDateTimestamp = new Date (currentDateSplit[0], currentDateSplit[1]-1, currentDateSplit[2]).getTime();

objectEvents.eventos.map((event) => {
    const dateToCompare = event.date;
    const dateToCompareSplit = dateToCompare.split("-");
    const dateToCompareTimestamp = new Date (dateToCompareSplit[0], dateToCompareSplit[1], dateToCompareSplit[2]).getTime();

    if (dateToCompareTimestamp <= currentDateTimestamp) {
        pastEvents.push(event);
    } else {
        upcomingEvents.push(event);
    }
})

// CREACIÓN DE CARDS
function paintCards(array, section) {
    const fragment = document.createDocumentFragment();

    array.map((event) => {
        const article = document.createElement("article");
        article.className = "section-cards_evento col-lg-3 col-md-5 col-sm-7";

        article.innerHTML = `
                <div>
                    <img src="${event.image}" alt="Imagen del evento ${event.name}">
                </div>
                <h2>${event.name}</h2>
                <p>${event.description}</p>
                <div>
                   <span>Price: $ ${event.price},00</span>
                   <a id="btn-seeMore" href"">See more...</a>
                </div>
                `
        fragment.appendChild(article);
    })
    section.appendChild(fragment);
}

// OBTENER URL ACTUAL PARA PASARLE LOS PARÁMETROS CORRECTOS A LA FUNCIÓN paintCards
const currentURL = window.location.pathname.split("/").pop();

if (currentURL == "home.html") {
    paintCards(objectEvents.eventos, document.getElementById("sectionCards-home"));
} else if (currentURL == "pastEvents.html") {
    paintCards(pastEvents, document.getElementById("sectionCards-past"));
} else if (currentURL == "upcomingEvents.html") {
    paintCards(upcomingEvents, document.getElementById("sectionCards-upcoming"));
}  

/*
                <p>
                   ${event.description.slice(0, 55)}...
                   <button id="readMore-btn">Continue reading</button>
                </p>
                <span class="textToShow none">${event.description.slice(56, event.description.length - 1)}</span>
// MOSTRAR EL RESTO DE LA DESCRIPCIÓN DEL EVENTO
const btnReadMore = document.getElementById("readMore-btn");
const textToShow = document.getElementById("textToShow");

btnReadMore.addEventListener( 'click', function toggleText(){
    if (btnReadMore.innerText == 'Continue reading'){
        textToShow.style.display = "inline-block"; // <-----
    } else {
        btnReadMore.innerText= 'Read less';
        textToShow.style.display = "none";
    }
})
*/