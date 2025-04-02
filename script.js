document.addEventListener("DOMContentLoaded", function() {
let display = document.querySelector("p");
let buttons= document.querySelectorAll("button");
let expression="";

    buttons.forEach(button =>{
        button.addEventListener("click", function(){
            let btnValue= this.innerText;
            if(btnValue === "AC"){
                expression= "";
                display.innerText= "0";
            }
            else if(btnValue === "DEL"){
                expression= expression.slice(0,-1);
                display.innerText= expression || "0";
            }
            else if(btnValue === "="){
                try{
                    expression= expression.replace("%", "/100");
                    display.innerText= eval(expression);
                    expression= display.innerText;
                    
                }
                catch{
                    display.innerText="Error";
                    expression="";
                }
            }
            else{
                if( expression === "0" || display.innerText === "Error"){
                    expression= "";
                }
                expression =expression+  btnValue;
                
                display.innerText= expression;
             
            }
        });
    });
    
});