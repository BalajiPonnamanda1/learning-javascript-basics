let flag = true;
function rock()
{
    if(flag)
        play('rock');
}
function paper()
{
    if(flag)
        play('paper');
}
function scissor()
{
    if(flag)
        play('scissor');
}
function play(userValue)
{
    let name = document.querySelector("#name");
    let comp = document.querySelector('#compName');
    name.innerText = userValue;
    let a = ['rock','paper','scissor'];
    let com = Math.floor(Math.random()*3);
    comp.innerText = a[com];
    setTimeout(()=>{
         if(userValue == 'rock' && a[com] == 'scissor')
    {
            check("you",true);
    }
    else if(userValue == 'paper' && a[com] == 'rock')
    {
            check("you",true);
    }
    else if(userValue == 'sissor' && a[com] == 'paper')
    {
            check('you',true);
    }
    else if(userValue == a[com])
    {
            check('tied',false);
    }
    else{
        check("computer",true);
    }
   if(flag)
   {
        name.innerText = '';
        comp.innerText = '';
   } else
        return
    },1000)
}
function check(winner,status)
{
    if(status)
        flag = confirm(`${winner} are the winner. could play again`);
    else
        flag = confirm("match is tied. could you play again");
}