// Whiteboard, make a code plan and build each of the flet dogs = ["Lab","Pit bull", "Bulldog", "Dalmation"]

let dogsIwant = dogs.map((element) => {
    return element + ",I want these"
  }) 
  console.log(dogsIwant)
  
  // reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.
  
  let food = [{item:"tacos", cost: 2.00}, {item: "perogies", cost: 3.00}, {item: "hambqq", cost: 4.00}, {item: "cookies",cost: 5.00} ]
  
  let cost = food.map((money) => money.cost)
  
  let total = cost.reduce((sum, current) => sum + current,0);
  
  console.log ("Total",total)
  
  let each = food.filter((money) => console.log("each cost",money.cost))
  
  if (each < 2) {
    console.log ("The cheapest option is tacos")}
