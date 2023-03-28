// Q1)  Create one typescript application which contains one class named as Arithmetic. Arithmetic class contains three characteristics
//  (Class data members) as Number1, Number2. Create one parametrised constructor which accept two values and assign it to Number1 and
//  Number2. In Arithmetic class we have to write four methods (Behaviours) as Addition, Subtraction,
//  Multiplication and Division.
//  Addition method will add Number1, Number2 & return result. Subtraction method will subtract Number1, Number2 & return result.
//  Multiplication method will multiply Number1, Number2 & return result. Division method will divide Number1, Number2 & return result.
//  After designing the class create two objects of that class by providing some hardcoded value. Call all the methods by using both the objects.

class Arithmatic
{
    No1 : number
    No2 : number 

    constructor( A : number , B : number)
    {
        this.No1 = A
        this.No2 = B
    }

    Addition() : number 
    {
        return this.No1 + this.No2
    }

    
    Subtraction() : number 
    {
        return this.No1 - this.No2
    }

    
    Multiplication() : number 
    {
        return this.No1 * this.No2
    }

    
    Division() : number 
    {
        return this.No1 / this.No2
    }
}


var Obj1 = new Arithmatic ( 15 , 10)

var Ret = Obj1.Addition()
console.log("Addition of Obj1 is : "+Ret)

var Ret = Obj1.Subtraction()
console.log("Subtraction of Obj1 is : "+Ret)

var Ret = Obj1.Multiplication()
console.log("Multiplication of Obj1 is : "+Ret)

var Ret = Obj1.Division()
console.log("Division of Obj1 is : "+Ret)