
//******************************************************************
//*************************FIRST TABLE******************************
//******************************************************************

function funcionStats () {


// obtener % de asistencia y capacidades
const getPercentagesOfAttendanceAndCapacities = (requiredData) => {
    const arrayWithCapacities = [];
    const arrayWithAssistances = [];
// console.log(events)
console.log(requiredData)
    events.forEach((event) => {
        const assistance = event.assistance || event.estimate;
        const eventPercentageOfAssistance = Math.round((assistance * 100) / event.capacity);
        
        arrayWithAssistances.push({
            name: event.name,
            percAssistance: eventPercentageOfAssistance
        })

        arrayWithCapacities.push({
            name: event.name,
            capacity: event.capacity
        })
    })

    if (requiredData == "assistance") {
        return arrayWithAssistances;
    } else if (requiredData == "capacity") {
        return arrayWithCapacities;
    }
}

// ordenar y cortar el array obtenido en la función anterior
const orderValues = (arr, property, typeOrder) => {
    const orderedArr = arr.sort((a, b) => {
        return b[property] - a[property]
    })

    if (typeOrder == "asc") {
        orderedArr.reverse();
    }

    const number = get10PercentageOfEventsToBeRender(arr);

    const arrayOfEventsToBeRender = orderedArr.slice(0, number);

    return arrayOfEventsToBeRender;
}

// obtener el 10% del total de eventos
const get10PercentageOfEventsToBeRender = (arr) => {
    return Math.round(arr.length * 0.1);
}

// capturo los th de la tabla
const firstTable = document.getElementById('first-table');
const secondTable = document.getElementById('second-table');
const thirdTable = document.getElementById('third-table');
    
// renderizo la data obtenida en la primera tabla
const renderDataInFirstTable = () => {
    const eventsWithHighestAssistances = orderValues(getPercentagesOfAttendanceAndCapacities("assistance"), "percAssistance", "desc");
    
    const eventsWithLowestAssistances = orderValues(getPercentagesOfAttendanceAndCapacities("assistance"), "percAssistance", "asc");
    
    const eventsWithLargerapacities = orderValues(getPercentagesOfAttendanceAndCapacities("capacity"), "capacity", "desc");

    const numberOfRowsInTable = eventsWithHighestAssistances.length;
    
    for (let i=0; i < numberOfRowsInTable; i++) {
        tableContent = `
            <tr>
                <td><span class="event-name">${eventsWithHighestAssistances[i].name}:</span> ${eventsWithHighestAssistances[i].percAssistance}%</td>
                <td><span class="event-name">${eventsWithLowestAssistances[i].name}:</span> ${eventsWithLowestAssistances[i].percAssistance}%</td>
                <td><span class="event-name">${eventsWithLargerapacities[i].name}:</span> ${eventsWithLargerapacities[i].capacity}</td>
            </tr>
        `

        firstTable.insertAdjacentHTML("afterend", tableContent);
    }
}


//******************************************************************
//**********************SECOND & THIRD TABLE************************
//******************************************************************

// obtengo todas las categorías
const getCategories = (events) => {
    const categories = [];

    events.map((event) => {
        if (! categories.includes(event.category)) {
            categories.push(event.category);
        }
    })
    
    return categories;
}


// creo array de objetos con la data que necesito para renderizar
const getDataByCategory = (events) => {
    const categories = getCategories(events);

    const objectsWithDataToRender = [];

    categories.map((category) => {
        objectsWithDataToRender.push({
            category: category,
            revenues: getRevenuesByCategory(events, category),
            percAssistance: getPercAssistanceByCategory(events, category)
        });
    })

    return objectsWithDataToRender;
}


// calculo el array con el total de ganancias por categoría
const getRevenuesByCategory = (events, category) => {
    let totalRevenues = 0;

    events.map((event) => {
        if (event.category == category) {
            const eventAssistance = event.assistance || event.estimate;

            const eventRevenue = event.price * eventAssistance;

            totalRevenues += eventRevenue;
        }
    })

    return totalRevenues;
}


// calculo el array con el porcentaje de asistencia por categoría
const getPercAssistanceByCategory = (events, category) => {
    let totalCapacity = 0;
    let totalAssistance = 0;

    events.map((event) => {
        if (event.category == category) {
            totalCapacity += event.capacity;
            totalAssistance += event.assistance || event.estimate;
        }
    })

    const percAssistanceByCategory = Math.round((totalAssistance * 100) / totalCapacity);

    return percAssistanceByCategory;
}


// renderizo la data obtenida en las últimas tablas
const renderDataInLastTables = (events, table) => {

    const numberOfRowsInTable = getCategories(events).length;

    const dataByCategory = getDataByCategory(events);

    for (let i=0; i < numberOfRowsInTable; i++) {
        tableContent = `
            <tr>
                <td class="event-name">${dataByCategory[i].category}</td>
                <td>$ ${dataByCategory[i].revenues}</td>
                <td>${dataByCategory[i].percAssistance}%</td>
            </tr>
        `
    }

    table.insertAdjacentHTML("afterend", tableContent);
}


// ejecuto las funciones para renderizar en tabla
renderDataInFirstTable();
renderDataInLastTables(upcomingEvents, secondTable);
renderDataInLastTables(pastEvents, thirdTable);
}