
function Fibonacci(No : number) : void
{
    var a = 0
    var b = 1
    var c = 0
    var i = 0

    for (i=3 ; i<=No/2 ; i++){
        a = b
        b = c
        c = a + b

        console.log("   "+c)
    }
}

var No = 21

Fibonacci(No)

