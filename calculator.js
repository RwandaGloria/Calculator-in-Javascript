let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#thr');
let four = document.querySelector('#fou');
let five = document.querySelector('#fiv');
let six = document.querySelector('#six');
let seven = document.querySelector('#sev');

let eight = document.querySelector('#eig');
let nine = document.querySelector('#nin');
let zero = document.querySelector('#zer');

let clear = document.querySelector('#clr');
let equals = document.querySelector('#equal');
let mul = document.querySelector('#mul');
let add = document.querySelector('#add');
let sub = document.querySelector('#min');
let div = document.querySelector('#div');

let openBracket = document.querySelector('#openBracket');
let closeBracket = document.querySelector('#closeBracket');

let decimal = document.querySelector('#dot');
let exp = document.querySelector('#exp');




function checkArray(arrayName, stringEx)

{
   for(let i =0; i<= arrayName.length; i++){

   if(stringEx.endsWith(arrayName[i])){
      
    stringEx.slice(0, -1);

   }
   }
    
}

const array = ["\\", "*", "-", "+", "="];


let viewBox = document.querySelector("#first");






one.addEventListener("click", () => {

    viewBox.append("1");
    value.concat("v");
    alert(value);

    //click each button but before that check if the previous string is also a symbol.
    

});
two.addEventListener("click", () => {

    viewBox.append("2");
 

});

three.addEventListener("click", () => {

    viewBox.append("3");
   
});
four.addEventListener("click", () => {

    viewBox.append("4");
 

});
five.addEventListener("click", () => {

    viewBox.append("5");
  

});

//this is for the button 6 event
six.addEventListener("click", () => {

    viewBox.append("6");
    

});

//This is for the button 7 event
seven.addEventListener("click", () => {

    
    viewBox.append("7");

});

//This is the button 8 event
eight.addEventListener("click", () => {

    
    viewBox.append("8");

});

// This is for the button 9 event
nine.addEventListener("click", () => {

    
    viewBox.append("9");

});

// This is for the zero button
zero.addEventListener("click", () => {

    
    viewBox.append("0");
    alert('hello');

});

// This is the multiply button
mul.addEventListener("click", () => {

    
    viewBox.append("*");

 checkArray(array, viewBox.textContent);

});

// This is the div button
div.addEventListener("click", () => {

    
    viewBox.append("/");

});

// This is the Add button
add.addEventListener("click", () => {

    
    viewBox.append("+");

});

// This is the subtraction button
sub.addEventListener("click", () => {

    
    viewBox.append("-");

});


// This is for the equal to button event
equals.addEventListener("click", () => {

  const result = eval(viewBox.textContent);

viewBox.textContent = "";
  viewBox.append(` ${result}`);
});


clear.addEventListener("click", () => {

    viewBox.textContent  = viewBox.textContent.slice(0, -1);
  });
  
openBracket.addEventListener("click", () =>{


viewBox.append("(");

});

closeBracket.addEventListener("click", () => {

viewBox.append(")");

});

decimal.addEventListener("click", () => {

    viewBox.append(".");
    
});

exp.addEventListener("click", () => {

    viewBox.append("**");
    
});

