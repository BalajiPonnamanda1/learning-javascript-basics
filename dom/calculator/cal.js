let nums = document.querySelectorAll(".num")
let msg = document.getElementById("id");
let ans = 0;
nums.forEach((ele) => {
    ele.style.fontSize = '26px'
    ele.style.fontWeight = '700'
    ele.addEventListener("click",()=>{
        if(ans == msg.innerText)
            msg.innerText = '';
        msg.innerText = msg.innerText + ele.innerText
        console.log("hello");
        
    })
})
let op = document.querySelectorAll(".operate")
let sym = "";
let c = 0;
op.forEach((ele) => {
    ele.style.fontSize = '26px'
    ele.style.fontWeight = '700'
    ele.addEventListener("click",()=>{
        if(sym !== '' && ans !== 0)
        {
            c = answer();
        } 
        else if(sym !== '' && ans === 0) {
            sym = ele.innerText;
        }
        else {
            c = parseInt(msg.innerText);
        }
        sym = ele.innerText;
        msg.innerText = '';
    })
})
function answer()
{
    switch(sym)
    {
        case '+' : msg.innerText = c + parseInt(msg.innerText);
                    break;
        case '-' : msg.innerText = c - parseInt(msg.innerText);
                    break;
        case '*' : msg.innerText = c * parseInt(msg.innerText);
                    break;
        case '/' : msg.innerText = c / parseInt(msg.innerText);
                    break; 
    }
    console.log(msg.innerText);
    sym = "";
    return  ans = parseInt(msg.innerText)
}