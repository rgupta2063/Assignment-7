/*eslint-env browser*/

//STEP 1
var array = ["Captain America" , "Joker" , "Avengers" , "Lucy" , "Incredibles"];
window.console.log(array[1]);


//STEP 2
var movies = new Array(5);
movies[0] = "Captain America";
movies[1] = "Joker";
movies[2] = "Avengers";
movies[3] = "Lucy";
movies[4] = "Incredibles";
window.console.log(movies[0]);


//STEP 3
var movies = new Array(5);
movies[0] = "Captain America";
movies[1] = "Joker";
movies[2] = "Avengers";
movies[3] = "Lucy";
movies[4] = "Incredibles";
movies.splice(2,0,"Harry Potter");
window.document.write(movies.length);


//STEP 4
var movies = [];
movies[0] = "Captain America";
movies[1] = "Joker";
movies[2] = "Avengers";
movies[3] = "Lucy";
movies[4] = "Incredibles";
delete movies[0];
window.document.write(movies);


//STEP 5
var movies = [];
movies[0] = "Captain America";
movies[1] = "Joker";
movies[2] = "Avengers";
movies[3] = "Lucy";
movies[4] = "Incredibles";
movies[5] = "Harry Potter";
movies[6] = "Mission Impossible";
var i ;
for (i=0 ; i < movies.length ; i+=1){
    window.document.write(movies[i], "</br>");
}


//STEP 6
var movies = [];
movies[0] = "Captain America";
movies[1] = "Joker";
movies[2] = "Avengers";
movies[3] = "Lucy";
movies[4] = "Incredibles";
movies[5] = "Harry Potter";
movies[6] = "Mission Impossible";
for (item in movies){
    window.document.write(movies[item], "</br>");
}


//STEP 7
var movies = [];
movies[0] = "Captain America";
movies[1] = "Joker";
movies[2] = "Avengers";
movies[3] = "Lucy";
movies[4] = "Incredibles";
movies[5] = "Harry Potter";
movies[6] = "Mission Impossible";
for (item in movies.sort()){
    window.document.write(movies[item], "<br>");
}


//STEP 8
var movies = [];
movies[0] = "Captain America";
movies[1] = "Joker";
movies[2] = "Avengers";
movies[3] = "Lucy";
movies[4] = "Incredibles";
movies[5] = "Harry Potter";
movies[6] = "Mission Impossible";
var leastFavMovies = [];
leastFavMovies[0] = "Alexander";
leastFavMovies[1] = "Driven";
leastFavMovies[2] = "Rush Hour";
var i ;
window.document.write("Movies I like:" + "<br></br>");
for (i=0 ; i < movies.length ; i+=1){
    window.document.write(movies[i], "<br>");
}
window.document.write("<br></br>")
var j;
window.document.write("Movies I regret watching:" + "<br></br>");
for (j=0 ; j < leastFavMovies.length ; j+=1){
    window.document.write(leastFavMovies[j], "</br>");
}


//STEP 9

var movies = [];
movies[0] = "Captain America";
movies[1] = "Joker";
movies[2] = "Avengers";
movies[3] = "Lucy";
movies[4] = "Incredibles";
movies[5] = "Harry Potter";
movies[6] = "Mission Impossible";
var leastFavMovies = [];
leastFavMovies[0] = "Alexander";
leastFavMovies[1] = "Driven";
leastFavMovies[2] = "Rush Hour";
movies = movies.concat(leastFavMovies);
for (item in movies.reverse().sort()){
    window.document.write(movies[item],"</br>");
}


//STEP 10
var movies = [];
movies[0] = "Captain America";
movies[1] = "Joker";
movies[2] = "Avengers";
movies[3] = "Lucy";
movies[4] = "Incredibles";
movies[5] = "Harry Potter";
movies[6] = "Mission Impossible";
var leastFavMovies = [];
leastFavMovies[0] = "Alexander";
leastFavMovies[1] = "Driven";
leastFavMovies[2] = "Rush Hour";
movies = movies.concat(leastFavMovies);
window.document.write(movies.reverse().sort().pop());
