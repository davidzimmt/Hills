
var myNodelist = document.getElementsByTagName("LI");
var index;
for (index = 0; index < myNodelist.length; index++) {
  var span = document.createElement("SPAN");
  var sign = document.createTextNode("\u00D7");//will create a x sign right next to the task
  span.className = "erase";
  span.appendChild(sign);
  myNodelist[index].appendChild(span);
}
//just created a "x" button that in the future will allow me to delete an item


var erase = document.getElementsByClassName("erase");
var i;
for (i = 0; i < erase.length; i++) {
  erase[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
// now when we click on the x to delete something, the subject will disappear

// //So now what we need to do is to create a function that will react with the
// //add button and then we will have the new task

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener("click", function(check) {
  if (check.target.tagName === "LI") {
    check.target.classList.toggle("checked");
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newTask() {
  var newTask = document.createElement("li");
  var subject = document.getElementById("firstInput").value;//the value entered will be keep inside "subject"
  var text = document.createTextNode(subject);//the node text will be whats written in sucject
  newTask.appendChild(text);//will create whats inside text
  if (subject === '') {
    alert("no subject, try again");
  } else {
    document.getElementById("ul1").appendChild(newTask);
  }
  document.getElementById("firstInput").value = "";//after the new task is in will turn the value to null

  //as we did in the beginning, we will create a x sign to every new list we get
  var span = document.createElement("SPAN");
  var sign2 = document.createTextNode("\u00D7");
  span.className = "erase";
  span.appendChild(sign2);
  newTask.appendChild(span);

  for (i = 0; i < erase.length; i++) {
    erase[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}