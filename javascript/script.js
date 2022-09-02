
let anyButton= document.getElementsByTagName("button");
let undoButton=document.getElementById("undoButton");


for(let i=0;i<anyButton.length;i++){
    anyButton[i].addEventListener("mousedown", (e)=>{
        
        e.target.classList.remove("idleButton");
        e.target.classList.add("clickedButton"); 
    });
    anyButton[i].addEventListener("mouseup", (e)=>{
        
        e.target.classList.remove("clickedButton");
        e.target.classList.add("idleButton"); 
    });
    
}

