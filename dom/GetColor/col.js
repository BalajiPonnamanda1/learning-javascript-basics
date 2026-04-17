function color() {
    let display = document.getElementById("id");
    let code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let color = '#';
    for (let i = 1; i <= 6; i++) {
        let c = Math.floor(Math.random() * 16);
        color += code[c];
    }
    console.log(color);
    display.style.background = color;
    let hex = color.substring(1);

    fetch(`https://www.thecolorapi.com/id?hex=${hex}`)
.then(res => res.json())
.then(data => {
    console.log(data.name.value);

    let col = document.getElementById("name"); // get element

    col.innerText = data.name.value; // set text
    col.style.fontSize = '20px';
    col.style.fontWeight = '700';
});
}
color();