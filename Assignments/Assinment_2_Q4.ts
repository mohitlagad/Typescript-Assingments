
function ChkArmostrong (No : number ) : number
{
    let Cnt : number = 0
    let R : number = 0
    let Sum : number = 0

    while (No > 0)
    {
        R = No % 10
        Sum = Sum + (R*R*R)
        No = Math.floor(No/10)
    }
    return Sum
}

var No : number = 153
var Ret : number = 0
Ret = ChkArmostrong(153)

console.log("After function call")
console.log(Ret)
if(Ret == No)
{
    console.log("It is Armostrong Number")
}