// bill input, tip input, number of people div, and per person total div
const totalInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeople = document.getElementById("numberOfPeople");
const perPersonTotal = document.getElementById("perPersonTotal");

// Get number of people from number of people div
let people = Number(numberOfPeople.innerText);


// ** Calculate the total bill per person **
const calculateBill = () => {
 
  let amount = Number(totalInput.value);
  
  let tipPercent = Number(tipInput.value)/100;
  console.log(`tip percent : ${tipPercent}`);

  let tip = amount * tipPercent;
  console.log(`tip  : ${tip}`);
  
  let total = tip + amount;

  let split = (total / people).toFixed(2);
  console.log(`split : ${split}`);

  perPersonTotal.innerText = split;

}

// ** Increase the people count **
const increasePeople = () => {

  people += 1;
  numberOfPeople.innerText = people;

  calculateBill();

}

// ** Decrease the people count **
const decreasePeople = () => {

  //to ensure the number of people is always greater than zero
  if(people >= 2)
  {
     people -= 1;
  }
  numberOfPeople.innerText = people;
  
  calculateBill();

}