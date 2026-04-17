function login(event){
    event.preventDefault();
   let name = event.target.Uname.value;
   let pass = event.target.Upass.value;

   let display = document.getElementById("display");
   if(name === "" && pass === "")
        display.innerText = "enter userName and password";
    else if(name === '')
        display.innerText = 'enter userName'
    else if(pass === '')
        display.innerText = 'enter password' 

    else 
        document.body.innerHTML = '<h2> welcome </h2>'
}