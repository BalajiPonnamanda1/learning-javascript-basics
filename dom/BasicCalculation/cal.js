function values()
{
    let x = parseInt(document.getElementById("num1").value)
    let y = parseInt(document.getElementById("num2").value);
    if(Number.isNaN(x))
        x = 0;
    if(Number.isNaN(y))
        y = 0;        
    return [x,y];
}
function add()
{
    let a = values();
    document.getElementById("val").innerText = `addition of ${a[0]} and ${a[1]} is ${a[0]+a[1]}`
}
function sub()
{
    let a = values();
    document.getElementById("val").innerText = `subtraction of ${a[0]} and ${a[1]} is ${a[0] - a[1]}`
}
function mul()
{
    let a = values();
    document.getElementById("val").innerText = `Multiplication of ${a[0]} and ${a[1]} is ${a[0] * a[1]}`
}
function div()
{
    let a = values();
    document.getElementById("val").innerText = `division of ${a[0]} and ${a[1]} is ${a[0] / a[1]}`
}