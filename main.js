console.log('Hello World!');


document.addEventListener(
"DOMContentLoaded",
function(){
disp=document.getElementById("disp")
});


function calc(c){  
            disp.value+=c        
}

function clr(){
    disp.value=" "
}
function mat(){
try{
    disp.value=eval(disp.value)
    }catch(tokenerror){
    disp.value="error"
    setTimeout(()=>{
        disp.value=""
    },8000)
}
}
var s=0
function del(){
if(s>=3){
disp.style.fontSize="10px"
    disp.value="atomic wave product"
    setTimeout(()=>{
        disp.style.fontSize="17px"
    },10000)
    }
    s++
}

