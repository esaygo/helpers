
// 1. Given the array below, show the position of all Ford cars in the array and count how many are in the array.
//  var cars = ["BMW", "Volvo", "Saab", "Ford", "X3", "X5", "Fiat", "Ford", "Lamborghini", "Dacia", "Renault", "Megane", "Rolls", "Royce", "Ford", "Ford", "Daihatsu", "Lastun", "Ford", "Ford", "Ford", "X7", "VW", "Ford", "BMW", "Volvo", "Saab", "Ford", "Ford", "MJ10", "Ford", "Jetta"];


//logic: if 'ford' found in the cars array, push value in new array

function fords() {
    var cars = ["BMW", "Volvo", "Saab", "Ford", "X3", "X5", "Fiat", "Ford", "Lamborghini", "Dacia", "Renault", "Megane", "Rolls", "Royce", "Ford", "Ford", "Daihatsu", "Lastun", "Ford", "Ford", "Ford", "X7", "VW", "Ford", "BMW", "Volvo", "Saab", "Ford", "Ford", "MJ10", "Ford", "Jetta"];
    var Ford = [];
    var position = [];

    for(var i = 0; i < cars.length; i++) {
        if(cars[i] == 'Ford') {
          Ford.push(cars[i]);
          position.push(i);
        }
      }

    console.log(Ford.length);
    console.log(position);
}


// 2. What is the largest factor of a user given number ?
//  user number = 24 , largest factor = 12

function factor() {
    var number = prompt('please input an integer');
    var divider;
    var dividersArray = [];
    var max = dividersArray[0];

    for (divider = 1; divider < number; divider++) {
      if(number % divider == 0) {
        dividersArray.push(divider);
      }
    }

    console.log(dividersArray);

    for(var i = 0; i < dividersArray.length; i++) {
      if(dividersArray[i] > max) {
        max = dividersArray[i];
      } else {
        max = dividersArray[0];
      }
    }

    console.log(max);
}

//main program
//---------------------------------------------------------------
fords();
factor();
stringLength;
stringSmart;


// 3. Create an empty diamond of stars (user supplies the height)
//     *
//    * *
//   *   *
//    * *
//     *
//
// 4. Create a function to calculate the sum of the digits of a number (user supplies the number). The number is received as a parameter.
//   user number = 245  sum of digits = 11 (2+4+5)

function stringLength() {
    var number = prompt('please input an integer');
    var string = number.toString();
    var sum = 0;

    for (var i = 0; i < string.length; i++) {
      sum = sum + parseInt(string[i]);
    }
     console.log(sum);
}

function stringSmart() {

    var number = prompt('give a whole number');
    var modulo = 0;

    while(number > 0) {
      modulo = modulo +  number % 10;
      number = Math.floor(number / 10);
}

console.log(modulo);

}

// 6. Create a function that receives as a parameter a user supplied string.
// The function will replace ALL the blank (space) characters with "%20" and return the new string.
//    user string = "Ariel is a very nice cat."
//    new string = "Ariel%20is%20a%20very%20nice%20cat."

var input = prompt('say smth');
var copy = '';

if(/\s/.test(input)) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] == ' ') {
      copy = copy + '%20';
    }else {
      copy = copy + input[i];
    }
  }
}
console.log(copy);

//instead of for loop
var result = input.replace(/\s/g, '%20');
console.log(result);
