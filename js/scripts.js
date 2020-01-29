function Theater(){
  this.tickets = []

}
Theater.prototype.addTicket = function(ticket){
  this.tickets.push(ticket)
}

Theater.prototype.showTicket = function(ticket){
$(".movie").html(ticket.movie);
$(".time").html(ticket.time);
$(".price").html(ticket.price);
}
function Ticket(movie, age, time, price){
  this.age = age,
  this.movie = movie,
  this.time = time,
  this.price = price
}





$(document).ready(function(){


  var theater = new Theater();
$("#end-btn").click(function(){
  event.preventDefault();

  var userMovie = $("input:radio[name=movie]:checked").val();
  var userAge = $("input#age").val()
  var userTime = $("input:radio[name=time]:checked").val();
  userMoviePrice = 0
  if (userMovie === "Aliens"){
    userMoviePrice = 10
  }
  if (userMovie === "Predator"){
    userMoviePrice = 13 
  }
  if (userMovie === "Die Hard"){
    userMoviePrice = 15
  }
  var price = userMoviePrice
  
  if (userTime >= 12 ){
    price = price - 2
  }
  
  if(userAge <= 14 || userAge >= 60){
    price = price /2
    
  }
  
  var ticket = new Ticket(userMovie,userAge, userTime, price) //takes in users input from lines 28 29 30 and price from lines 33-42 and uses the constructor to make a new ticket and store it under the variable of ticket
console.log(ticket);

  theater.addTicket(ticket) // take the variable of ticket and run it through the prototype of 'addTicket' that pushed our constructed ticket into the array(stored on line 2)inside of the var theater(created on line 24)

  theater.showTicket(ticket); // this takes in our ticket into the prototype 'showTicket' that using dot notation targets aspects of the constructed ticket in order to display it on page usint '.html'
  
})
});
