// function collectA() {
//     let gettingValueA = document.getElementById('inputA');
//     let firstValueA = gettingValueA.value;
//     return firstValueA;
// }
// function collectB() {
//     let gettingValueB = document.getElementById('inputB');
//     let secondValueB = gettingValueB.value;
//     return secondValueB;
// }
// function collectC() {
//     let gettingValueC = document.getElementById('inputC');
//     let thirdValueC = gettingValueC.value;
//     return thirdValueC;
// }
// let a = collectA();
// let b = collectB();
// let c = collectC();


// function display(){
//     console.log(a, b, c);

//     function quad(a, b, c) {
//         b = collectB();
//         c = collectC();
//         let discriminant = b**2 - (4 * a * c)
//         if (discriminant === 0) {
//             let rootDisc0 = (-b) / (2 * a); 
//             return rootDisc0;
//         }
//         else if (discriminant < 0){
//             let errorMessage = "Cannot solve for complex numbers"
//             return errorMessage;
//         } else {
//             let root1 = ((-b) + Math.sqrt(discriminant)) / (2 * a);
//             let root2 = ((-b) - Math.sqrt(discriminant)) / (2 * a);
//             return answer =  [root1, root2];
//         }
//         let answer
//         if (typeof answer === 'string') {
//             document.getElementById("disp").innerHTML = discriminantValue;
//         } else if (typeof discriminantValue === "array") {
//             document.getElementById("disp").innerHTML = "The first root is =  " + discriminantValue[0] +"<br> The second root is = " + discriminantValue[1];
//         } else {
//             document.getElementById('disp').innerHTML =   /* "The single root is = " + */   discriminantValue;
//         }
        
//     }
// }
// function quad(a, b, c) {
//     let discriminant = b**2 - (4 * a * c)
//     if (discriminant === 0) {
//         let rootDisc0 = (-b) / (2 * a); 
//         return "This equation so... na single root of: " + rootDisc0; " nai e get"
//     }
//     else if (discriminant < 0){
//         return "baba check the parameters, na complex number";
//     } else {
//         let root1 = ((-b) + Math.sqrt(discriminant)) / (2 * a);
//         let root2 = ((-b) - Math.sqrt(discriminant)) / (2 * a);
//         return "The root 1 so na : " + root1 + " and root 2 na " + root2;
//     }
// }
// function collectA() {
//     let gettingValueA = document.getElementById('inputA');
//     let firstValueA = gettingValueA.value;
//     return firstValueA;
// }
// function collectB() {
//     let gettingValueB = document.getElementById('input  B');
//     let secondValueB = gettingValueB.value;
//     return secondValueB;
// }
// function collectC() {
//     let gettingValueC = document.getElementById('inputC');
//     let thirdValueC = gettingValueC.value;
//     return thirdValueC;
// }
 
// function display(){
//     let a = collectA();
//     let b = collectB();
//     let c = collectC();
//     let result = quad(a, b, c);
//     document.getElementById("disp").innerHTML = result;
// }
// function alerting(){
//     if (collectA === ""){
//         alert(collectA())
//     } else if (typeof collectA === "number"){
//         alert("Number")
//     }
// }
function displayResult(){
    let finalResult = quad(collectA(), collectB(), collectC());
    document.getElementById("disp").innerText = finalResult;

    function quad(a, b, c) {
        let discriminant = b**2 - (4 * a * c)
        if (discriminant === 0) {
            let rootDisc0 = (-b) / (2 * a); 
            return "This equation so... na single root of: " + rootDisc0 + " nai e get";
        }
        else if (discriminant < 0){
            return "baba check the parameters, na complex number";
        } else {
            let root1 = ((-b) + Math.sqrt(discriminant)) / (2 * a);
            let root2 = ((-b) - Math.sqrt(discriminant)) / (2 * a);
            return "The root 1 so na : " + root1 + " and root 2 na " + root2;
        }
    }
}
function collectA(){
    let first = document.getElementById("inputA").value;
    if (first === "") {
        return "Enter Value for A";
    } else {
        return first;
    }
}
function collectB(){
    let second = document.getElementById("inputB").value;
    if (second === "") {
        return "Enter Value for B"
    } else {
        return second;
    }
}
function collectC(){
    let third = document.getElementById("inputC").value;
    if (third === ""){
        return "Enter Value for C"
    } else {
        return third;
    }
}
// function quadraticEquation(a,b,c){

// }