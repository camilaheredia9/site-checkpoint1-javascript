// obtener data del archivo data.json usando fetch
const getDataEventsDetails = async () => {
    try {
      const promise = await fetch("../js/data.json");
      const response = await promise.json();
      functionDetails(response.events);
    } catch (error) {
      console.log("Ha ocurrido un error!");
    }
}
getDataEventsDetails();

function functionDetails (events) {
    // obtengo URL actual con queryStrings
    const cardDetails = new URLSearchParams(window.location.search);
    
    // obtengo el valor del parámetro name de la URL
    const param = cardDetails.get('name');
    
    // obtengo el evento que corresponde renderizar de acuerdo al param de la URL
    const getEventToRender = () => {
        let eventToRender = {};

        events.map((event) => {
            const eventName = event.name.replaceAll(" ", "");
            
            if (eventName == param) {
                eventToRender = event;
            }
        })
        console.log(eventToRender)
        
        return eventToRender;
    }
    
    // renderizo los detalles del evento en el DOM
    const renderCardDetails = () => {
        const dataToRender = getEventToRender();
        const main = document.getElementById('main-details');
        
        main.innerHTML = `
        <section class="card-details col-xl-7 col-lg-8 col-md-9 col-sm-9">
        <article class="card-details_img">
        <img src="${dataToRender.image}" alt="${dataToRender.name} event image">
        </article>
        <article class="card-details_info">
        <div class="card-details_info-header">
        <h2>${dataToRender.name}</h2>
        <span>${dataToRender.category}</span>
                </div>
                <p class="card-details_info-description">${dataToRender.description}</p>
                <ul class="card-details_info-list">
                <li><span class="data-name">Date:</span> ${dataToRender.date}</li>
                <li><span class="data-name">Place:</span> ${dataToRender.place}</li>
                <li><span class="data-name">Capacity:</span> ${dataToRender.capacity}</li>
                <li><span class="data-name">Assistance:</span> ${dataToRender.assistance || dataToRender.estimate}</li>
                <li><span class="data-name">Price:</span> $ ${dataToRender.price}</li>
                </ul>
                </article>
                </section>
                `
    }
            
    renderCardDetails();
            
    console.log("a ver si se consologuea")
}