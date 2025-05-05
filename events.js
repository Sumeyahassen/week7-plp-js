// Common Event in JS
// 1. Mouse Events:
// - click, double-click, mousedown, mouseup, mouseover, mouseout, mousemove

// 2. Keyboard Events:
// - keydown, keyup, keypress

// 3. Form Event
// - submit, change, focus, blur

// 4. Document/Window event:
// - load, resize, scroll, unload

// element.addEventListener("eventType", handlerFunction)

element.addEventListener("click", function(event){
    console.log
})

// Example with a function reference
function clickHandler(){
    alert("Button Clcicked!");
}

element.addEventListener("click", clickHandler);

// Example with an anonymous function
element.addEventListener("click", function(){
    alert("Button Clcicked!");
})

// Example with an arrow function
element.addEventListener("click", ()=> {
    alert("Button Clcicked!");
})


// Event Propagation
// 1. Capturing Phase: From the root to the target element
// 2. Bubbling phase: From the target element back to the root

// Default is bubbling phase (false)
element.addEventListener("click", clickHandler, false);

// capturing phase (true)
element.addEventListener("click", clickHandler, true);


// Event Propagation example
document.querySelector("div").addEventListener("click", function(){
    console.log("Div was clicked");
});