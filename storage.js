function Storage(){





}













Storage.prototype.addFilmToStorage = function(newFilm) {
    let films = Storage.prototype.getFilmsFromStorage.call(this);
    films.push(newFilm);
    console.log(newFilm);
    localStorage.setItem("films", JSON.stringify(films));
}


Storage.prototype.getFilmsFromStorage = function () {
    let films;

    if (localStorage.getItem("films") === null) {
        films = [];
    } else {
        films = JSON.parse(localStorage.getItem("films"));
    }

    console.log("Films retrieved from storage:", films); // Log films

    return films;
};



Storage.prototype.deleteFilmFromStorage = function (filmTitle) {
 
    let films = this.getFilmsFromStorage();
    films.forEach(function(film,index){
if (film.title===filmTitle) {
    
films.splice(index,1);


}




    });

localStorage.setItem("films",JSON.stringify(films));
}



Storage.prototype.clearAllFilmsFromStorage = function(){

localStorage.removeItem("films");


}