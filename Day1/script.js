let a=20;
var val="";
for(let i=2;i<=20;i++)
{
    let j=0;
    for(j=2;j<i;j++)
    {
        if(i % j == 0)
            break;
    }
    if(j==i)
        val=val+i+" ";
}
console.log(val);
