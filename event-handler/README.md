<h1>Event Handler Registration</h1>
Now it’s time to dive into using event handler functions to create interactivity.<br>
<br>
Using the <strong>.addEventListener()</strong> method, we can have a DOM element listen for a specific event and execute a block of code when the event is detected. The DOM element that listens for an event is called the event target and the block of code that runs when the event happens is called the event handler.<br>
<br>
Let’s take a look at the code below:<br>
<br>
let eventTarget = document.getElementById('targetElement');<br>
<br>
eventTarget.addEventListener('click', function() { <br>
  // this block of code will run when click event happens on eventTarget element <br>
});<br>
<br>
Let’s break this down!<br>
<br>
<ul>
<li>We selected our event target from the DOM using <strong>document.getElementById('targetElement')</strong>.</li>
<li>We used the <strong>.addEventListener()</strong> method on the <strong>eventTarget</strong> DOM element.</li>
<li>The <strong>.addEventListener()</strong> method takes two arguments: an event name in string format and an event handler function. We will learn about different values we can use as event names in a later lesson.</li>
<li>In this example, we used the <strong>'click'</strong> event, which fires when the user clicks on <strong>eventTarget</strong>.</li>
<li>The code block in the event handler function will execute when the <strong>'click'</strong> event is detected.</li>
</ul>
<br>
Instead of using an anonymous function as the event handler, it’s best practice to create a named event handler function. Your code will remain organized and reusable this way, even if your code gets complex. Check out the syntax:<br>
<br>
function eventHandlerFunction() { <br>
  // this block of code will run when click event happens<br>
}<br>
 <br>
eventTarget.addEventListener('click', eventHandlerFunction);<br>
<br>
The named function <strong>eventHandlerFunction</strong> is passed as the second argument of the <strong>.addEventListener()</strong> method instead of defining an anonymous function within the method!




Registering event handlers can use the .addEventListener() method, but there is also another way! <br>
<br>
Event Handlers can also be registered by setting an .onevent property on a DOM element (event target). The pattern for registering a specific event is to append an element with <strong>.on</strong> followed by the lowercased event type name. For instance, if we want to register a click event with this pattern, we would write:<br>
<br>
<strong>eventTarget.onclick = eventHandlerFunction;</strong><br>
<br>
Here, we give the DOM element eventTarget the .onclick property and set its value as the event handler function eventHandlerFunction.<br>
<br>
It’s important to know that this .onevent property and .addEventListener() will both register event listeners. With .onevent, it allows for one event handler function to be attached to the event target. However, with the .addEventListener() method , we can add multiple event handler functions.