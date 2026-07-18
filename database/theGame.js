eventsBottun()

function eventsBottun() {
    document.getElementById('addEvent').addEventListener('click', addEvent)
    document.getElementById('updateEvent').addEventListener('click', updateEvent)
    document.getElementById('deleteEvent').addEventListener('click', deleteEvent)
}

function addEvent() {
    console.log("add event funcion");
}

function deleteEvent() {
    console.log("delete event funcion");
}

function updateEvent() {
    console.log("update event funcion");
}