

function Maximum (No1 : number ,No2 : number ,No3 : number) : void
{
    if(No1 >= No2 && No1 >= No3){
        console.log("Maximum Number is : "+No1)
    }
    if(No2 >= No1 && No2 >= No3){
        console.log("Maximum Number is : "+No2)
    }
    if(No3 >= No1 && No3 >= No2){
        console.log("Maximum Number is : "+No3)
    }
}

var A : number = 23
var B : number = 89
var C : number = 6

Maximum(A , B , C)