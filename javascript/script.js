let anyButton= document.getElementsByTagName("button");
let undoButton=document.getElementById("undoButton");
let clearButton=document.getElementById("clearButton");
let memeButton=document.getElementById("memeButton");
let firstRowButtons=document.getElementById("firstRowButtons");
let zeroButton=document.getElementById("zeroButton");
let displayCon=document.getElementById("displayCon");

const getMemeSound = ()=>{
    const sounds=[lautiSound, theRock, memeFour, memeThree, memeFive, memeSix,
    memeSeven, memeEight, memeNine, memeTen, memeEleven, memeTwelve]
    let sound = sounds[Math.floor(Math.random()*sounds.length)];
    return sound;
}

/**/
let numbers=[];
let operator;
const operation=(operator)=>{
    if(operator==="sum")
        console.log(operator);
        
}
getA=(array)=>{
    //creates number A
    console.log("a no existe, creando a...");
            a = [];
            a.push(numbers);
            a=parseInt(array.join(""))
            console.log(a);
            numbers.length=0;
            cont+=1
            console.log(cont);
}
getB=(array)=>{
    //creates B but only if I press "+" again.
    //need to make "=" create B and then
    //make "=" trigger an operation and show results
    console.log("a ya existe pero b no existe, creando b...");
            b = [];
            b.push(numbers);
            b=parseInt(array.join(""))
            console.log(b);
            numbers.length=0;
            cont+=1
            console.log("contador: "+cont);
}
let cont=0;
const getNumbers=(array)=>{
    
    
        if (cont===0) {
            getA(array)
            
        }else if(cont===1){
            
            getB(array)
        }
}





const numberList=document.createElement("ul");
displayCon.append(numberList);

const clearConsole = ()=>{
    while(numberList.firstChild){
        numberList.removeChild(numberList.firstChild);
    }

}

const getUserInput=()=>{
    
    let number;
    
    let symbol;
    for(let i=0;i<anyButton.length;i++){
        anyButton[i].addEventListener("touchstart", (e)=>{
            
            e.target.classList.remove("idleButton");
            e.target.classList.add("clickedButton");
            
            if(e.target.id==="zeroButton"){
                let newNumber=document.createElement("li");
                numberList.append(newNumber);
                newNumber.textContent=0;
                number=0;
                
                numbers.push(number);
                
                console.log(numbers);
                return number;

            }else if(e.target.id==="one"){
                let newNumber=document.createElement("li");
                numberList.append(newNumber);
                newNumber.textContent=1;
                number=1;
                
                numbers.push(number);
                  
                return number;
                
            }else if(e.target.id==="two"){
                let newNumber=document.createElement("li");
                numberList.append(newNumber);
                newNumber.textContent=2;
                number=2;
                numbers.push(number);
                return number;
            
            } else if(e.target.id==="three"){
                let newNumber=document.createElement("li");
                numberList.append(newNumber);
                newNumber.textContent=3;
                number=3;
                numbers.push(number);
                return number;
        
            }else if(e.target.id==="four"){
                let newNumber=document.createElement("li");
                numberList.append(newNumber);
                newNumber.textContent=4;
                number=4;
                numbers.push(number);
                return number;
            
            }else if(e.target.id==="five"){
                let newNumber=document.createElement("li");
                numberList.append(newNumber);
                newNumber.textContent=5;
                number=5;
                numbers.push(number);
                return number;
            
            }else if(e.target.id==="six"){
                let newNumber=document.createElement("li");
                numberList.append(newNumber);
                newNumber.textContent=6;
                number=6;
                numbers.push(number);
                return number;
            
            }else if(e.target.id==="seven"){
                let newNumber=document.createElement("li");
                numberList.append(newNumber);
                newNumber.textContent=7;
                number=7;
                numbers.push(number);
                return number;
            
            }else if(e.target.id==="eight"){
                let newNumber=document.createElement("li");
                numberList.append(newNumber);
                newNumber.textContent=8;
                number=8;
                numbers.push(number);
                return number;
            
            }else if(e.target.id==="nine"){
                let newNumber=document.createElement("li");
                numberList.append(newNumber);
                newNumber.textContent=9;
                number=9;
                numbers.push(number);
                return number;

            }else if(e.target.id==="mult"){
                let newNumber=document.createElement("li");
                numberList.append(newNumber);
                newNumber.textContent="*";
                operator="multiplication";
                return operator;

            }else if(e.target.id==="divide"){
                let newNumber=document.createElement("li");
                numberList.append(newNumber);
                newNumber.textContent="/";
                operator="division";
                return operator;

            }else if(e.target.id==="minus"){
                let newNumber=document.createElement("li");
                numberList.append(newNumber);
                newNumber.textContent="-";
                operator="reduction";
                return operator;

            }else if(e.target.id==="sum"){
                let newNumber=document.createElement("li");
                numberList.append(newNumber);
                newNumber.textContent="+";
                operator="sum";
                getNumbers(numbers)
                return operator;

            }else if(e.target.id==="dot"){
                let newNumber=document.createElement("li");
                numberList.append(newNumber);
                newNumber.textContent=".";
                symbol=".";
                return symbol;

            }else if(e.target.id==="clearButton"){
                clearButton.style.borderBottom="none";
                clearButton.style.borderRight="none";
                clearConsole()

            }else if(e.target.id==="undoButton"){
                undoButton.style.borderBottom="none";
                undoButton.style.borderRight="none";
                numberList.removeChild(numberList.lastChild)

            }else if(e.target.id==="memeButton"){
                memeButton.style.borderBottom="none";
                memeButton.style.borderRight="none";
                getMemeSound().currentTime=0;
                getMemeSound().play()
            }else if(e.target.id==="equal"){
                cont=0;
                
                
            }     
            
        });
        anyButton[i].addEventListener("touchend", (e)=>{
            
            e.target.classList.remove("clickedButton");
            e.target.classList.add("idleButton");

            if(e.target.id === "undoButton"){
                undoButton.style.borderRight="6px solid black";
                undoButton.style.borderBottom="6px solid black";

            }else if(e.target.id === "clearButton"){
                
                clearButton.style.borderRight="6px solid rgb(120, 119, 119)";
                clearButton.style.borderBottom="6px solid rgb(120, 119, 119)";

            }else if(e.target.id === "memeButton"){
                
                memeButton.style.borderRight="6px solid rgb(60, 50, 69, .6)";
                memeButton.style.borderBottom="6px solid rgb(60, 50, 69, .6)";
            }
            
        });
         
    }
    
    
}


operation()
getUserInput()

