const input = document.getElementById('input');

function addingEventListener() {
    input.addEventListener('onclick', event =>{
        return "CLICKED"
    });
}
addingEventListener();