
function ChkPrime (No : number) : void
{
    var i = 0
    var count = 1

   // if(No == 0 || No == 1){
   //     count = 1
   // }

    for(i=2 ; i< No/2 ; i++){
    if(No % i == 0 ){
        count = 0
        break
    }
}
    if(No <= 0){
        count=0
    }
    if(count==1)
        {
            console.log("It is Prime Number")
        }
        else{
            console.log("It is Not Prime Number")
        }
}

var A = 11

ChkPrime(A)