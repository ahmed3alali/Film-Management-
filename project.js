

const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const ui = new UI();
const clear = document.getElementById("clear-films"); // choosing my button 

const storage = new Storage();

// adding the events for submiting the 
eventListeners();

function eventListeners(){

form.addEventListener("submit",addFilm);
document.addEventListener("DOMContentLoaded", function () {
    let films = storage.getFilmsFromStorage();

    // Log to check if films are loaded from storage
    if (films.length > 0) {
        console.log("Films loaded from storage:", films);
        ui.loadAllFilms(films);
    } else {
        console.log("No films found in storage."); 
    }
});


cardbody.addEventListener("click",deleteFilm);
clear.addEventListener("click",clearAllFilms);



}


function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        ui.displayMessages("danger", "Please fill all blanks!");
    } else {
        console.log("Adding film to storage...");
        const newFilm = new Film(title, director, url);
        storage.addFilmToStorage(newFilm); // Add film to storage
        ui.addFilmToUI(newFilm); // Add film to UI
    }

    ui.clearInputs(titleElement, urlElement, directorElement);
    ui.displayMessages("success", "Film added successfully");

    e.preventDefault();
}

function deleteFilm(e){

if (e.target.id==="delete-film") {
    ui.deleteFilmFromUI(e.target);
}


}


function clearAllFilms(e){

    ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
    


}

