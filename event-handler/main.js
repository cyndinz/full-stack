let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

//Right now, the open() function makes the codey and close elements visible by changing their .display properties to 'block'. The hide() function hides the same elements by assigning a 'none' value to the .display properties. 

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);


//create a function named textChange() that changes the text in the view element to 'Hello, World!'.
function textChange() {
  view.innerHTML = 'Hello, World!';
};

//create a function named textReturn() that changes the text of the view element variable back to 'View'.
function textReturn() {
  view.innerHTML = 'View';
}

//Assign textChange as an event handler function to a click event fired on the view variable and run your code.
view.onclick = textChange;

//Assign textReturn as an event handler function to a click event fired on the close variable. Then run your code and fire the events!
close.onclick = textReturn;



/* uncomment the extra code to show removing event handler */

// let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
//   "A fresh start will put you on your way.",
//   "A golden egg of opportunity falls into your lap this month.",
//   "A smile is your personal welcome mat.",
//   "All your hard work will soon pay off."
// ]

// let button = document.getElementById('fortuneButton');
// let fortune = document.getElementById('fortune');

// function fortuneSelector(){
//   let randomFortune = Math.floor(Math.random() * fortunes.length);
//   return fortunes[randomFortune];
// }

// function showFortune(){
//   fortune.innerHTML = fortuneSelector();
//   button.innerHTML = "Come back tomorrow!";
//   button.style.cursor = "default";

//   //add your code here
//   button.removeEventListener('click', showFortune);

// }

// button.addEventListener('click', showFortune);
