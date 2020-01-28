function Theater(){
  this.tickets = []

}
Theater.prototype.addTicket = function(ticket){
  this.tickets.push(ticket)
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
  var userTime = $("input:radio[name=movie1]:checked").val();
  
  
  var price = userMovie
  
  if (userTime >= 12 ){
    price = price - 2
  }
  
  if(userAge <= 14 || userAge >= 60){
    price = price /2
    
  }
  
  var ticket = new Ticket(userMovie,userAge, userTime, price)

  theater.addTicket(ticket)

  console.log(theater.tickets);
  
})
});
