$(document).ready(function(){
//$("p:first").append("paragraph");
$("#fdiv").append("<p id ='myParag'>You added me right?</p>");

$("#sdiv").hover(showAbout,removeText);
 });

function showAbout() {
  $("#myParag").text("Ready to show a link");
}

function removeText(){
  $("#myParag").text("");


}
