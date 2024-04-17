"use strict";

//Initialize variables
const pizza_1 = document.getElementById("pizza1");
const pizza_2 = document.getElementById("pizza2");
const pizza_3 = document.getElementById("pizza3");
const small_size = document.getElementById("small");
const medium_size = document.getElementById("medium");
const large_size = document.getElementById("large");
const toppings = document.querySelectorAll("input[name='toppings']");
const price_label = document.getElementById("price");
let total_price = 0;

const pizza1_toppings = [
  "avocado",
  "broccoli",
  "onions",
  "zucchini",
  "tuna",
  "ham",
];
const pizza2_toppings = [
  "broccoli",
  "onions",
  "zucchini",
  "lobster",
  "oyster",
  "salmon",
  "bacon",
  "ham",
];
const pizza3_toppings = [
  "broccoli",
  "onions",
  "zucchini",
  "tuna",
  "bacon",
  "duck",
  "ham",
  "sausage",
];

//function to enable and disable topping checkbox
function set_toppings(pizza_topping) {
  for (let i = 0; i < toppings.length; i++) {
    //Checks if topping is avaliable for the selected pizza
    if (pizza_topping.includes(toppings[i].id)) {
      toppings[i].disabled = false;
      console.log(toppings[i]);
    } else {
      toppings[i].disabled = true;
    }
  }
}

//function to update price
function update_price() {
  price_label.textContent = `$${total_price}`;
  console.log("HELLO");
}

//function to update pizza price
let previous_selected_pizza = null;
function add_pizza_price(event) {
  //Get current pizza's value and add to total price
  let selected_pizza_value = Number(event.target.value);
  total_price += selected_pizza_value;
  if (previous_selected_pizza) {
    total_price -= previous_selected_pizza;
  }

  //hold previous selected pizza value
  previous_selected_pizza = selected_pizza_value;
  update_price();

  //update topping selections
  switch (event.target.id) {
    case "pizza1":
      set_toppings(pizza1_toppings);
      break;
    case "pizza2":
      set_toppings(pizza2_toppings);
      break;
    case "pizza3":
      set_toppings(pizza3_toppings);
      break;
  }
}

//function to update pizza size price
let previous_selected_size = null;
function add_size_price(event) {
  //Get current size value and add to total price
  let selected_size_value = Number(event.target.value);
  total_price += selected_size_value;
  if (previous_selected_pizza) {
    total_price -= previous_selected_size;
  }

  //hold previous selected size value
  previous_selected_size = selected_size_value;

  //prevents -1 in total price when user selects small without selecting pizza
  if (price_label.textContent != "$0") {
    update_price();
  }
}

//Add event listerners to buttons
pizza_1.addEventListener("change", add_pizza_price);
pizza_2.addEventListener("change", add_pizza_price);
pizza_3.addEventListener("change", add_pizza_price);
small_size.addEventListener("change", add_size_price);
medium_size.addEventListener("change", add_size_price);
large_size.addEventListener("change", add_size_price);
