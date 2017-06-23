//DIVISION-PROBABILITY
function division() {
    var a = document.querySelector('#numerator');
    var b = document.querySelector('#denominator');
    var result = document.getElementById("probability").value = a.value / b.value; 
    document.getElementById('printPercentage').innerHTML = result * 100 + "%"; 
 }

function resetDivision() {
    document.getElementById('numerator').value = "";
    document.getElementById('denominator').value = "";
    document.getElementById('probability').value = "";    
}

// FACTORIAL !  FUNCTION

function getFactorial(num) {
  var num = document.querySelector('#userInput');
  var result = 1;
  for (var i = num; i > 0; i--) {
    result = result * i;
  }
  document.getElementById('printResult').innerHTML = result;
}

//EXERCISES
/**
var exercises = [
    { 
        question: "How many unique ways are there to arrange the letters in the word PRIOR?",
        state: false
},
    {
        question: "How many unique ways are there to arrange the letters in the word SASSY?",
        state: false
    },
    {
        question: "How many unique ways are there to arrange the letters in the word ERROR?",
        state: false
    },
    {
        question: "You have 6 reindeer, Prancer, Rudy, Balthazar, Quentin, Jebediah, and Lancer, and you want to have 4 fly your sleigh. You always have your reindeer fly in a single-file line.",
        state: false    
    },
    {
        question: "How many ways can we award a 1st, 2nd and 3rd place prize among 8 contestants?",
        state: false
    },
    {
        question: "In how many ways you can pick a President, VP and Waterboy from a group of 10",
        state: false,
    },
    item7= {
        
    }];
    

  **/  








// FACTORIAL !  FUNCTION
var userInput = document.querySelectorAll('#permutation');
//this is for the total
var permutationNoRep = function(userInput) {    
    var product = 1;
    for(i = 1; i <= userInput; i++){
        product *= i;
    }
    return product;
}

// PERMUTATION WITH REPETITION
function permutationRep(userInput){
    return Math.pow(userInput, userInput);
}



/**function getFactorial(num) {
  var result = 1;
  for (var i = num; i > 0; i--) {
    result = result * i;
  }
  return result;**/

function getPermutation(howMany, subSet) {
  var result = getFactorial(howMany);

  if (subSet) {
    result = result / getFactorial(howMany - subSet);
  }
  
  return result;
}
