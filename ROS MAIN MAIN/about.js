function fillArea(){
    document.getElementById("comment").value = "Give us some feedback.";
  };

function myClick() {
  if (document.getElementById("fname").value == "" || !isNaN(document.getElementById("fname").value)) {
    alert("Please enter a Customer Name, alphabet only.");

  } else if (document.getElementById("email1").value == "" || !isNaN(document.getElementById("email1").value)) {
    alert("Please enter a Customer Email, alphabet only.");

  } else if (document.getElementById("cellno").value == "" || isNaN(document.getElementById("cellno").value)) {
    alert("Please enter a valid Customer cell number.");
  }
};

var header = document.getElementById('navigationid');
 var buttons = document.getElementsByClassName('navbuttons');

 for (var i = 0; i<buttons.length; i++){
   button[i].addEventListener("click", function(){
     var current = document.getElementsByClassName("active");
     current[0].className = current[0].className.replace(" active", "");
     this.className += " active";
   });
 }

 const mainForm = document.getElementById('mainForm');

 mainForm.addEventListener("submit", (e) => {
   e.preventDefault();

   const request = new XMLHttpRequest();

   request.open("post", "login.php");
   request.onload = function(){
     console.log(request.responseText);
   }
   request.send(new FormData(mainForm));
 });
