
function DisplayFactors(No : number ) : void
{
    var Factor = 1

    for(Factor=1 ; Factor<20 ; Factor++){
    if(No%Factor == 0){
        console.log("   "+Factor)
    }
}
}

var A = 20

DisplayFactors(A)