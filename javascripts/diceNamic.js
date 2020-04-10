// jshint esversion: 7

let rollDie = () => {
    return Math.floor (Math.random() * 6) + 1;
}




//Define a controller to handle the button click
let controller = function() {
  let target, die1, die2, rollCount = 0, die1URL, die2URL, imgElem1, imgElem2, cheeryMsg;
//bump up rollCount each time you roll

  target = document.querySelector("input").value;
  console.log(target);

  //roll the target number and count rolls

  do{
    //roll the dice
//die1 = rollDie();
die1 = rollDie();
die2 = rollDie();
    //increment the roll counter

    //log the dice and the counter
    console.log( `${die1} ${die2} ${rollCount}`)
    rollCount++;
    //console.log(`die1,die2,rollCount`)

  } while (die1 + die2 != target);

  //update images

//die 1
  die1URL = `images/die${die1}.gif`;
  //console.log(die1URL);
  imgElem1 = document.querySelector("img");
  imgElem1.setAttribute("src", die1URL);

//die 2
  die2URL = `images/die${die2}.gif`;
  //console.log(die1URL);
  imgElem2 = document.querySelectorAll("img")[1];
  imgElem2.setAttribute("src", die2URL);

//die 2
//  imgElem2 = document.querySelector("img");
//  imgElem2 = document.querySelectorAll("img")[1];




  //display number of rolls

  cheeryMsg = `You hit your number in ${rollCount} roll${(rollCount ==1)?"":"s"}!`;
  document.querySelector("div").innerHTML = cheeryMsg;
  //innerHTML
  //textContent

};



//Register the controller after the DOM is complete
window.addEventListener("load", function() {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
