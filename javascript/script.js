class Calculator{
    constructor(currentOperandText, previousOperandText){
        this.currentOperandText=currentOperandText;
        this.previousOperandText=previousOperandText;
        this.clearConsole()
    }
    clearConsole(){
        this.currentOperand=""
        this.previousOperand=""
        this.operation=undefined
    }
    delete(){
        this.currentOperand=this.currentOperand.toString().slice(0, -1)
    }
    getMemeSound = ()=>{
        const sounds=[lautiSound, theRock, memeFour, memeThree, memeFive, memeSix,
        memeSeven,tacoBell, memeEight, memeNine, memeTen, memeEleven, memeTwelve]
        let sound = sounds[Math.floor(Math.random()*sounds.length)];
        return sound;
        }
    getNumber(number){
        if(number==="." && this.currentOperand.includes(".")) return
        this.currentOperand=this.currentOperand.toString()+number.toString()
    }

    getOperation(operation){
        if(this.currentOperand==="") return
        if(this.currentOperand!==""){
            this.compute()
        }
        this.operation=operation
        this.previousOperand=this.currentOperand+" "+operation
        this.currentOperand =""
    }

    compute(){
        let computation;
        const prev =parseFloat(this.previousOperand)
        const current =parseFloat(this.currentOperand)
        if(this.currentOperand==="") return
        switch(this.operation){
            case "+":
                computation=prev+current
                break
            case "-":
                computation=prev-current
                break
            case "/":
                if(prev===0 || current===0)alert("Error, cannot divide by 0.")
                else computation=prev/current
                
                break
            case "*":
                computation=prev*current
                break
            default:
                return
        }
        if (computation%1!==0)this.currentOperand=computation.toFixed(2)
        else this.currentOperand=computation
        this.operation=undefined
        this.previousOperand=""
    }

    updateDisplay(){
        this.currentOperandText.innerText = this.currentOperand
        this.previousOperandText.innerText = this.previousOperand
    }
}

const numberButtons=document.querySelectorAll("[data-number]");
const operators=document.querySelectorAll("[data-operator]");
const undoButton=document.querySelector("[data-undoButton]");
const clearButton=document.querySelector("[data-clearButton]");
const memeButton=document.querySelector("[data-memeButton]");
const equalButton=document.querySelector("[data-equal]");
const previousOperandText=document.querySelector("[data-previous-operand");
const currentOperandText=document.querySelector("[data-current-operand]");
const anyButton=document.getElementsByTagName("button");

const McPop=document.getElementById("McPop");
const tacoBell=document.getElementById("tacoBell");


const calculator=new Calculator(currentOperandText, previousOperandText)

numberButtons.forEach(button=>{
    button.addEventListener("touchstart",(e)=>{
    calculator.getNumber(button.innerText)
    calculator.updateDisplay()

    })
})

operators.forEach(button=>{
    button.addEventListener("touchstart",(e)=>{
    calculator.getOperation(button.innerText)
    calculator.updateDisplay()
    
    })
})

clearButton.addEventListener("touchstart", ()=>{
    calculator.clearConsole()
    calculator.updateDisplay()
})

equalButton.addEventListener("touchstart",()=>{
    calculator.compute()
    calculator.updateDisplay()
})

undoButton.addEventListener("touchstart", ()=>{
    calculator.delete()
    calculator.updateDisplay()
})

//following code is for buttons animation or sounds when pressed
for(let i=0;i<anyButton.length;i++){
    anyButton[i].addEventListener("touchstart", (e)=>{
        
        e.target.classList.remove("idleButton");
        e.target.classList.add("clickedButton");
        currentTime=0;
        McPop.play()

        if(e.target.id==="clearButton"){
            clearButton.style.borderBottom="none";
            clearButton.style.borderRight="none";

        }else if(e.target.id==="undoButton"){
            undoButton.style.borderBottom="none";
            undoButton.style.borderRight="none";


        }else if(e.target.id==="memeButton"){
            memeButton.style.borderBottom="none";
            memeButton.style.borderRight="none";
            calculator.getMemeSound().currentTime=0;
            calculator.getMemeSound().play()
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