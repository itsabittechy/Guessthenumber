'use strict';


// window.onload = function(){
    
// let userInput = document.getElementById("userInput");

  // let systemGuess = [Math.floor(Math.random()*6)];
  let output = document.getElementById("outputtext")
  
  const submitButton = document.getElementById("bttn");
  submitButton.addEventListener("click", userNumber);

  let userInput = document.getElementById("userInput").innerText;



  function userNumber(){
      return new Promise ((resolve,reject)=> {
        let userInput = document.getElementById("userInput").innerText; // Defined the value of userInput. Grabbed the textbox element from the HTML doc.
        
        let systemGuess = [Math.floor(Math.random()*6)]; // Picks between 0 and 6.
        //output.innerHTML = `congrats, how did you know it was ${systemGuess}`

        if (userNumber === systemGuess){// If the user's number is equal in value and type to the system's number, then execute:
        resolve (alert(`congrats, how did you know ${systemGuess}`));

        }else if (userNumber===systemGuess +1||userNumber===systemGuess -1){ // If the user's guess is one below the system's guess or one above the system's guess, then execute:
        resolve (alert(`close, but no cigar. It was actually ${systemGuess}`));


        }else { // If the first two if statements aren't true, then execute:
          reject (alert(`better luck next time. I was actually tinking of ${systemGuess}`));
        };   
    });

    
    // console.log(`congrats, how did you know it was ${systemGuess}`); --- doesnt work due to it being in a promise., wont do anything further. Because when you a "resolve" or "reject" is met, it exits the whole block of code.
     
    

    // .innerHTML ="Guessed too high, try again"
    
    
};
  

// let submitButton = document.getElementById("bttn").addEventListener("click", userNumber());
// let submitButton = document.getElementById("bttn")




// ,{
//     userGuess = document.getElementById("userInput").Value
// }


// };

  
