// Write a typescript program contains one function named as Maximum. That function accepts
// arry of numbers and return the second largest number from array.
//Input : 23  89  6 29  56  45  77  32
// Output : Second Maximum number is 77

function Maximum ( No : number []) : number
{
    let i : number = 0
    let Max : number = No[i]
    let SecondMax : number = No[i]

    for(i=0 ; i<No.length ; i++)
    {
        if(No[i] > Max)
        {
            Max = No[i]
        }
    }

    for(i=0 ; i<No.length ; i++)
    {
        if((No[i] > SecondMax) && (No[i] < Max))
        {
            SecondMax = No[i]
        }
    }
    return SecondMax
}

var A : number[] =  [23 , 89 , 6 , 23 , 56 , 45 , 77 , 32]

var Ret : number = 0

Ret = Maximum(A)

console.log("Second Maximum Number is : "+Ret)