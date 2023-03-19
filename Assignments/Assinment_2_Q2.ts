
function Summation(No : number[]) : void
{
    var i = 0
    var sum = 0

    for(i=0 ; i<No.length ; i++)
    {   
        sum = sum + No[i]
    }
    console.log("Addition is : "+sum)
}

var A : number[] = [23,6,7,4,5,7]

Summation(A)