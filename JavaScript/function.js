function add() {
    let a =10;
    let b = 23;
    console.log(a+b);
}

add();


function sqare() {
    let a = 3;
    console.log(a*a);
    
}

sqare();


function Perimeter() {
    let r = 5;
    let pi = 3.147;
    let p = 2*pi*r;
    console.log("perimeter of circle is: ", p);
}

function area() {
    let r = 7;
    let pi = 3.147;
    let area = pi*r*r;
    console.log("Area of circle is : " ,area);
}

Perimeter();
area();

function simpleIntrest () {
    p = 1000;
    r = 2;
    t = 2;
    si = (p*r*t)/100;
    console.log("Simple Intrest are: ", si);
    
}
simpleIntrest();


function cube(num) {
    return num * num * num;
}

let result = cube(3);

console.log(cube(result));


