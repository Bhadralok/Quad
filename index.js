function displayResult(){
    document.getElementById("disp").style.opacity = 1;

    let finalResult = quad(collectA(), collectB(), collectC());
    document.getElementById("disp").innerText = finalResult;


    function quad(a, b, c) {
        let discriminant = b**2 - (4 * a * c)
        if (discriminant === 0) {
            let rootDisc0 = (-b) / (2 * a); 
            return "The result is a single root of: " + rootDisc0;
        }
        else if (discriminant < 0){
            return "The result is a complex number";
        } else {
            let root1 = ((-b) + Math.sqrt(discriminant)) / (2 * a);
            let root2 = ((-b) - Math.sqrt(discriminant)) / (2 * a);
            return "X1 = : " + root1 + "\n X2 = " + root2;
        }
    }
}
function collectA(){
    let first = document.getElementById("inputA").value;
    return first;
}
function collectB(){
    let second = document.getElementById("inputB").value;
    return second;
}
function collectC(){
    let third = document.getElementById("inputC").value;
    return third;
}
