window.onload = function() {

console.log("Test");

addElement ()

//Load CSS Get HTML head element
       var head = document.getElementsByTagName('HEAD')[0];

       // Create new link Element
       var link = document.createElement('link');

       // set the attributes for link element
       link.rel = 'stylesheet';

       link.type = 'text/css';

       link.href = 'bit-cookie.css';

       // Append link element to HTML head
       head.appendChild(link);

}


function addElement () {
  // erstelle ein neues div Element
  // und gib ihm etwas Inhalt
  var newDiv = document.createElement("div");
  newDiv .setAttribute("class", "bit-cookiewall");
  var newContent = document.createTextNode("Hi there and greetings!");
  newDiv.appendChild(newContent); // füge den Textknoten zum neu erstellten div hinzu.

  // füge das neu erstellte Element und seinen Inhalt ins DOM ein
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
