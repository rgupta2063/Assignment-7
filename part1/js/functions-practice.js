//STEP 1
function halfNumber(num){
    var halfnum = num/2;
    console.log("Half of " + num + " is "+ halfnum);
    return halfnum;
}

halfNumber(5);


//STEP 2
function squareNumber(num){
    var squared = num * num;
    console.log("The result of squaring the number "+ num + " is "+squared);
    return squared;
}

squareNumber(3);



//STEP 3
function percentOf(num1, num2){
    var perc = (num1 / num2) * 100 ;
    console.log(num1 + " is " + perc + "% of "+ num2);
    return perc;
}

percentOf(2,4);



//STEP 4
function findModulus(num1, num2){
    var mod = (num1 % num2);
    console.log(mod + " is modulus of " + num2 +" and " + num1);
    return mod;
}

findModulus(10,4);



//STEP 5
function sumNumbers(count){
    var inputArray = [];
    var total = 0;
    for (var i = 0; i < count ; i ++){
        inputArray[i] = window.prompt("Enter number " + (i + 1));
        total += Number(inputArray[i]);
    }
    console.log(total);    
}

sumNumbers(3);
