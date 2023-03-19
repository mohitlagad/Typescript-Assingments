// Write a typescript program contains one function named as Maximum. That function accepts
// arry of numbers and return the largest number from array.
//Input : 23  89  6 29  56  45  77  32
// Output : Maximum number is 89


function Maximum(No : number[]) : void
{
  var i = 0

  for(i=0 ; i<No.length ; i++)
  {
    if(No[0] < No[i])
    {
      No[0] = No[i]
    }
  }
  console.log("Maximun Number is : "+No[0])
}

var A : number[] = [23 , 89 , 6 , 23 , 56 , 45 , 77 , 32]

Maximum(A)