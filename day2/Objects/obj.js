const users=[
    {
        id:1,
        name:'Raju',
        loc:'eluru'
    },{
        id:2,
        name:'balaji',
        loc:'palakollu'
    }
]
console.log(users[0].name);

for (const element of users) {
    if(element.name==='Raju')
    {
        console.log("found");
        break;
    }
}

// Functions

const arr=(a,b)=>
{
    return a+b;
}
// console.log(myFun(4,9));
const arr1=function myFun(a,b)
{
    return a-b;
}
console.log(arr(4,9));
let a=10,b=20;
let sym='%';
doMath(a,b,sym);
function doMath(a,b,sym)
{
    switch(sym){
        case '+':
            console.log(`addition of ${a} & ${b} is ${a+b}`);
            break;
        case '-':
            console.log(`subtraction of ${a} & ${b} is ${a-b}`);
            break;
        case '*':
            console.log(`multiplication of ${a} & ${b} is ${a*b}`);
            break;
        case '/':
            console.log(`division of ${a} & ${b} is ${a/b}`);
            break;
        case '**':
            console.log(`power of ${a} & ${b} is ${a**b}`);
            break;
        case '%':
            console.log(`remainder of ${a} & ${b} is ${a % b}`);
            break;
            
    }
}

