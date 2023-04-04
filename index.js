const div = document.createElement('div');
div.className = 'div-content'

function renderFilms(){
    
    fetch('http://localhost:3000/films')
    
    .then(response => response.json())
    .then(data => {

        data.forEach(film => {

            let divList = document.createElement('div');
            divList.className = 'divList-content';

            let image = document.createElement('img');
            image.className ='posters';

            let title = document.createElement('h3');
            title.className = 'title';

            let description = document.createElement('p');

            let capacity = document.createElement('p');

            let ticketSold = document.createElement('p');

            let buttonTicket = document.createElement('button');
            buttonTicket.className = 'ticket';

            let divTime = document.createElement('div');
            divTime.className = 'divTime'

            let runTime = document.createElement('p');

            let showTime = document.createElement('p')

            
            image.src =`${film.poster}`
            title.textContent = `${film.title}`
            description.textContent =`${film.description}`
            capacity.textContent =`Capacity: ${film.capacity}`
            ticketSold.textContent = `Ticket Sold: ${film.tickets_sold}`
            runTime.textContent =`Duration: ${film.runtime} Minutes`
            showTime.textContent =`${film.showtime}`

        document.body.appendChild(div);
        div.appendChild(divList);
        divList.appendChild(image);
        divList.appendChild(title);
        divList.appendChild(description);
        divList.appendChild(capacity);
        divList.appendChild(ticketSold);
        divList.appendChild(buttonTicket);
        divList.appendChild(divTime)
        divTime.appendChild(runTime);
        divTime.appendChild(showTime);
        console.log(div);

        buttonTicket.addEventListener("click", () => {
            if (film.tickets_sold < film.capacity) {
              film.tickets_sold++;
              ticketSold.textContent = film.capacity - film.tickets_sold;
            } else {
              alert("Sorry, this show is sold out.");
            }
        });

        });
         
    })
}

const fetchData = renderFilms();

