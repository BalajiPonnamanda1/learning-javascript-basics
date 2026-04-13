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

// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;
    
//     const element = object[key];
    
    
// }