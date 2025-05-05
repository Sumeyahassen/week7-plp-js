// element.addEventListener(eventType, handlerFunction);

// With a name function

function clickHandler() {
    alert("Button clicked!");
  }
button.addEventListener("click", clickHandler);

const button = document.getElementById("myID");

// With an anonymous function

button.addEventListener("click", function() {
    alert("Button clicked!");
  });

// With an arrow function

button.addEventListener("click", () => {
    alert("Button clicked!");
  });


// Common Event in JS
// 1. Mouse Events:
// - click, double-click, mousedown, mouseup, mouseover, mouseout, mousemove

// 2. Keyboard Events:
// - keydown, keyup, keypress

// 3. Form Event
// - submit, change, focus, blur

// 4. Document/Window event:
// - load, resize, scroll, unload
  
  
  