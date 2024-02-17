let gettingValueA = document.getElementById('inputA');
let firstValueA = gettingValueA.value;
alert(firstValueA);
let gettingValueB = document.getElementById('inputB');
let secondValueB = gettingValueB.value;
alert(secondValueB);
let gettingValueC = document.getElementById('inputC');
let thirdValueC = gettingValueC.value;
alert(thirdValueC);
return [firstValueA, secondValueB, thirdValueC];

function display() {
    function quad(a, b, c) {
        let a = firstValueA;
        let b = secondValueB;
        let c = thirdValueC;
        let discriminant = b**2 - (4 * a * c)
        if (discriminant === 0) {
            let rootDisc0 = (-b) / (2 * a); 
            return rootDisc0;
        }
        else if (discriminant < 0){
            let errorMessage = "Cannot solve for complex numbers"
            return errorMessage;
        } else {
            let root1 = ((-b) + Math.sqrt(discriminant)) / (2 * a);
            let root2 = ((-b) - Math.sqrt(discriminant)) / (2 * a);
            return [root1, root2];
        }
        
    }
    const discriminantValue = quad(a,b,c);
    
    if (typeof discriminantValue === 'string') {
        document.getElementById("disp").innerHTML = discriminantValue;
    } else if (typeof discriminantValue === "array") {
        document.getElementById("disp").innerHTML = "The first root is =  " + discriminantValue[0] +"<br> The second root is = " + discriminantValue[1];
    } else {
        document.getElementById('disp').innerHTML =   /* "The single root is = " + */   discriminantValue;
    }
}

