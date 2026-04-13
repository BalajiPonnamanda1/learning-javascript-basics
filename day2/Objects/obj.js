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

function myFun(a,b)
{
    return a+b;
}
console.log(myFun(4,9));
console.log(myFun);

