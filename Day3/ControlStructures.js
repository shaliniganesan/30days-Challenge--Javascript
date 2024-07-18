//Act1 : If Else

let n1 = 3;
if (n1 > 0) {
    console.log("positive", n1);
}
else if (n < 0) {
    console.log("Negative", n1);
}
else {
    console.log("zero", n1);
}

//Act2 : Nested if else

let n2 = 8;
let n3 = 9;
let n4 = 3;

if (n2 > n3 && n2 > n4) {
    console.log("greater:", n2);
}
else if (n3 > n4) {
    console.log("greater:", n3);
}
else {
    console.log("greater:", n4);
}

// Act 3 switch case
let x = 2;
switch (2) {
    case 0:
        console.log("Sunday", x);
        break;
    case 1:
        console.log('Monday', x);
        break;
    case 2:
        console.log('Tuesday', x);
        break;
       
    case 3:
        console.log('Wednesday', x);
        break;
    case 4:
        console.log('Thursday', x);
        break;
    case 5:
        console.log('Friday', x);
        break; 
    case 6:
        console.log('Saturday', x);
        break;
    default:
        console.log("not valid day");
}

let score = 89;
let grade;
if(score>90){
    grade = "A";
}
else if(score>80){
    grade = "B";
}
else if(score>70){
    grade = "C";
}
else if(score>60){
    grade = "D";
}
else{
    grade = "F";
}


switch(grade){
    case 'A':
        console.log("A");
        break;
    case 'B':
        console.log("B");
        break;
    case 'C':
        console.log("C");
        break;
    case 'D':
        console.log("D");
        break;
    case 'F':
        console.log("F");
        break;
    default:
        console.log("default");
    
}

//Act 4: conditional ternary

let oddOrEven = 6;

console.log( oddOrEven % 2 === 0 ? "even": "odd");


// Act5 : combining conditions
let year = 2000;

if( (year%4 === 0 &&  year%100 !== 0) || year%400 === 0){
   console.log("Leap year",year); 
}
else {
    console.log('Not a leap year',year);
}







