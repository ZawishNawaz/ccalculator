const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars=[ "%", "*", "/","+", "-", "=" ];
let output ="";
// Define Function to calclate base on button clicked
const calculate=(btnValue)=>{
    if (btnValue === "=" && btnValue !== ""){
        output=eval(output.replace("%","/100"));
    } else if(btnValue === "Ac"){
        output =""; 
    }
    else if(btnValue === "Del"){
        output =output.toString().slice(0, -1);
    // console.log(btnValue);
    }
    else{
        if (output === "" && specialChars.includes(btnValue))return;
        output += btnValue;
    }
    display.value =output;
};


// console.log(display, buttons);
buttons.forEach((button)=>{
    // Button click listener calls calculate() with dataset value as arguments
    button.addEventListener("click" ,(e)=>calculate(e.target.dataset.value));
}
)