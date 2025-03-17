document.getElementById('eventForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('eventName').value;
    const date = document.getElementById('eventDate').value;
    const description = document.getElementById('eventDescription').value;
    const eventDate = new Date(date + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (eventDate < today) {
        alert("Cannot add past events!");
        return;
    }
    
    const eventItem = document.createElement('div');
    eventItem.classList.add('event-item');
    eventItem.innerHTML = `<h3>${name}</h3><p>${date}</p><p>${description}</p><button class="delete-btn">Delete</button>`;
    
    document.getElementById('eventList').appendChild(eventItem);
    document.getElementById('eventForm').reset();
    
    eventItem.querySelector('.delete-btn').addEventListener('click', function() {
        eventItem.remove();
    });
});


function removeExpiredEvents() {
    const events = document.querySelectorAll('.event-item');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    events.forEach(event => {
        const eventDate = new Date(event.querySelector('p').innerText + 'T00:00:00');
        if (eventDate < today) {
            event.remove();
        }
    });
}

setInterval(removeExpiredEvents, 60000); // Check every minute



