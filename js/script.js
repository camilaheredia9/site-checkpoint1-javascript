// obtener data del archivo data.json usando fetch
const getDataEvents = async () => {
  try {
    const promise = await fetch("../js/data.json");
    const response = await promise.json();
    functionScript(response);
  } catch (error) {
    console.log("Ha ocurrido un error!");
  }
}
getDataEvents();

const pastEvents = [];
const upcomingEvents = [];

function functionScript(data) {
  const events = data.events;

  const searchBtn = document.getElementById("search-btn"); // button Search
  let inputSearch = document.getElementById("user-search"); // input Search

  // capturo sections del html
  const sectionHome = document.getElementById("sectionCards-home");
  const sectionPast = document.getElementById("sectionCards-past");
  const sectionUpcoming = document.getElementById("sectionCards-upcoming");

  // párrafo con mensaje de error
  const msgError = document.getElementById("msg-error");

  // ****************************************************************************************************************
  // COMPARACIÓN DE FECHAS
//   const pastEvents = [];
//   const upcomingEvents = [];

  const currentDate = data.currentDate; // 2022-01-01
  const currentDateSplit = currentDate.split("-"); // ['2022', '01', '01']
  const currentDateTimestamp = new Date(
    currentDateSplit[0],
    currentDateSplit[1] - 1,
    currentDateSplit[2]
  ).getTime();

  events.map((event) => {
    const dateToCompare = event.date;
    const dateToCompareSplit = dateToCompare.split("-");
    const dateToCompareTimestamp = new Date(
      dateToCompareSplit[0],
      dateToCompareSplit[1] - 1,
      dateToCompareSplit[2]
    ).getTime();

    if (dateToCompareTimestamp <= currentDateTimestamp) {
      pastEvents.push(event);
    } else {
      upcomingEvents.push(event);
    }
  });

  // ****************************************************************************************************************
  // CREACIÓN Y RENDERIZACIÓN DE CARDS
  let cards;

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
                   <a id="btn-${event.name
                     .toLowerCase()
                     .replaceAll(
                       " ",
                       "-"
                     )}" href="../html/details.html?name=${event.name.replaceAll(
        " ",
        ""
      )}">See more...</a>
                </div>
                `;
      fragment.appendChild(article);
    });
    section.appendChild(fragment);

    // nodelist de cards renderizadas
    cards = document.querySelectorAll(".section-cards_evento");
  };

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

  for (let i = 0; i < eventsCategories.length; i++) {
    if (eventsCategories.indexOf(eventsCategories[i], 0) == i) {
      sevenEventsCategories.push(eventsCategories[i]);
    }
  }

  // renderizo categorías
  function renderCategories() {
    const containerCategories = document.getElementById("box-categorias");
    const fragment = document.createDocumentFragment();

    sevenEventsCategories.map((eventCategory) => {
      const div = document.createElement("div");
      div.innerHTML = `
            <input id="${eventCategory
              .toLowerCase()
              .replaceAll(" ", "-")}" name="categoria" value="${eventCategory
        .toLowerCase()
        .replace(" ", "-")}" type="checkbox">
            <label for="${eventCategory
              .toLowerCase()
              .replaceAll(" ", "-")}">${eventCategory}</label>
            `;
      fragment.appendChild(div);
    });

    containerCategories.appendChild(fragment);
  }

  renderCategories();

  // capturo en una nodelist todos los input checkbox
  const checkboxs = document.querySelectorAll('input[type="checkbox"]');

  // ******************************************************************************************************
  // MOSTRAR CARDS SEGÚN LO INGRESADO POR TECLADO EN EL BUSCADOR
  let userSearch;

  // dinámicamente a medida que se escribe
  inputSearch.addEventListener("keyup", () => {
    userSearch = inputSearch.value.toLowerCase();
    findCoincidences(userSearch);
  });

  // al hacer click en el botón de search
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    userSearch = inputSearch.value.toLowerCase();
    findCoincidences(userSearch);
  });

  // función que evalúa coincidencias y muestra mje de error
  const findCoincidences = (search) => {
    let cardsShown = 0;

    cards.forEach((card) => {
      let idCard = card.id;

      if (idCard.includes(search)) {
        card.classList.remove("hidden");
        cardsShown++;
      } else {
        card.classList.add("hidden");
      }
    });

    if (cardsShown == 0) {
      msgError.classList.remove("hidden");
    } else {
      msgError.classList.add("hidden");
    }
  };

  // ************************************************************************************************************
  // MOSTRAR CARDS QUE COINCIDAN CON LAS CHECKBOX QUE ESTÉN "CHECKED"

  let checkboxsChecked = 0;
  let evts;
  let section;
  let eventsToShow = [];

  checkboxs.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        // al marcar un checkbox
        checkboxsChecked++;

        if (currentURL == "home.html") {
          evts = events;
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
        });

        if (eventsToShow.length == 0 && checkboxsChecked > 0) {
          section.innerHTML = ``;
          msgError.classList.remove("hidden");
        } else {
          section.innerHTML = ``;
          renderCards(eventsToShow, section);
        }
      } else {
        // al desmarcar un checkbox
        checkboxsChecked--;
        eventsToShow = eventsToShow.filter(
          (eventToShow) =>
            eventToShow.category.toLowerCase().replaceAll(" ", "-") !==
            checkbox.id
        );

        section.innerHTML = ``;
        renderCards(eventsToShow, section);
      }

      // al desmarcar todos los checkboxs
      if (eventsToShow.length == 0 && checkboxsChecked == 0) {
        msgError.classList.add("hidden");
        renderCards(evts, section);
      }

      // combinado con el buscador
      let search = inputSearch.value.toLowerCase().replaceAll(" ", "-");
      if (search !== "") {
        findCoincidences(search);
      }
    });
  });
}
