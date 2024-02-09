
function UI() {





}



UI.prototype.addFilmToUI = function(newFilm) {

const filmList =document.getElementById("films");

filmList.innerHTML += 



`

<tr>

<td><img src="${newFilm.url}"class="img-thumbnail"></img></td>
<td>${newFilm.title}</td>
<td>${newFilm.director}</td>


<td><a href="#" id="delete-film" class="btn btn-danger">Delete </a></td>
</tr>




`





};


UI.prototype.clearInputs = function (element1,element2,element3) {


    element1.value= "";
    element2.value = "";
    element3.value = "";

    
}


UI.prototype.displayMessages = function (type,message) {
   
const cardBody = document.querySelector(".card-body");

// Alert 


const div = document.createElement("div");

    
div.className = `alert alert-${type}`;
div.textContent = message;
div.style="margin-top:20px";
cardBody.appendChild(div);

setTimeout(function(){

div.remove();

},1000)


}


UI.prototype.loadAllFilms =function(films) {
    
  
    films.forEach(film => {
        this.addFilmToUI(film);
    });

     
}



UI.prototype.deleteFilmFromUI = function (element) {
    
    element.parentElement.parentElement.remove();



}



UI.prototype.clearAllFilmsFromUI = function () {
    
const filmList = document.getElementById("films");

while (filmList.firstElementChild!=null) {
    
filmList.firstElementChild.remove();


}

}