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

const numberList=document.createElement("ul");
displayCon.append(numberList);

const clearConsole = ()=>{
    while(numberList.firstChild){
        numberList.removeChild(numberList.firstChild);
    }
}

for(let i=0;i<anyButton.length;i++){
    anyButton[i].addEventListener("click", (e)=>{
        
        e.target.classList.remove("idleButton");
        e.target.classList.add("clickedButton");
        
        if(e.target.id==="zeroButton"){
            let newNumber=document.createElement("li");
            numberList.append(newNumber);
            newNumber.textContent=0;

        }else if(e.target.id==="one"){
            let newNumber=document.createElement("li");
            numberList.append(newNumber);
            newNumber.textContent=1;
            
        }else if(e.target.id==="two"){
            let newNumber=document.createElement("li");
            numberList.append(newNumber);
            newNumber.textContent=2;
        
        } else if(e.target.id==="three"){
            let newNumber=document.createElement("li");
            numberList.append(newNumber);
            newNumber.textContent=3;
       
        }else if(e.target.id==="four"){
            let newNumber=document.createElement("li");
            numberList.append(newNumber);
            newNumber.textContent=4;
        
        }else if(e.target.id==="five"){
            let newNumber=document.createElement("li");
            numberList.append(newNumber);
            newNumber.textContent=5;
        
        }else if(e.target.id==="six"){
            let newNumber=document.createElement("li");
            numberList.append(newNumber);
            newNumber.textContent=6;
        
        }else if(e.target.id==="seven"){
            let newNumber=document.createElement("li");
            numberList.append(newNumber);
            newNumber.textContent=7;
        
        }else if(e.target.id==="eight"){
            let newNumber=document.createElement("li");
            numberList.append(newNumber);
            newNumber.textContent=8;
        
        }else if(e.target.id==="nine"){
            let newNumber=document.createElement("li");
            numberList.append(newNumber);
            newNumber.textContent=9;

        }else if(e.target.id==="mult"){
            let newNumber=document.createElement("li");
            numberList.append(newNumber);
            newNumber.textContent="*";

        }else if(e.target.id==="divide"){
            let newNumber=document.createElement("li");
            numberList.append(newNumber);
            newNumber.textContent="/";

        }else if(e.target.id==="minus"){
            let newNumber=document.createElement("li");
            numberList.append(newNumber);
            newNumber.textContent="-";
        }else if(e.target.id==="sum"){
            let newNumber=document.createElement("li");
            numberList.append(newNumber);
            newNumber.textContent="+";

        }else if(e.target.id==="dot"){
            let newNumber=document.createElement("li");
            numberList.append(newNumber);
            newNumber.textContent=".";

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
            
        }

        



        
        
            
        
    });
    anyButton[i].addEventListener("mouseout", (e)=>{
        
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