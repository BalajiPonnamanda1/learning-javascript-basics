let status = true;
function clicks() {
    //     let x = document.getElementById("id")
    //    x.innerText = x.innerText == 'hello' ? 'cvcorp' : 'hello';
    //     x.style.color = x.style.color == 'black' ? 'red' : 'black';
    //     if(x.style.color == 'black')
    //     {
    //         x.style.color = 'red'
    //         x.style.background = 'black'
    //     }
    //     else {
    //         x.style.color = 'black'
    //         x.style.background = 'red'
    //     }
    let x = document.getElementById("ids")

    if (status) {
        x.src = "savitri.jpg"
        status = false;
    }
    else {
        x.src = "Anchor1.jpg";
        status = true;
    }

}

