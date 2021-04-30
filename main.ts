export{}
import {Points2} from './point'; //importing from point.ts
// First log message

function log(message){
    console.log(message);  
}
var message = 'Hello Crownstack';
log(message);

//global and block scope

function globalScope(){
    for(var i= 0; i<5; i++){
        console.log(i);
        
    }
    console.log('Finally' + i);
    
}

function blockScope(){
    for(let i= 0; i<5; i++){
        console.log(i);
        
    }
    // I is not in the block hence can't be used.
    console.log('Finally' /* + i */);
    
}

// Variable Declaration

let count = 5;
// can't change the type of the variable if defined count = 'a';

//Variable Declaration with types

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: unknown;
let f: number[] = [1,2,3];
let g: any[] = ['string',2,true, null]

//Enums

enum Color {Red = 0, Green = 1, Blue = 2}
let bgColor =Color.Red;
console.log(bgColor);

//Type Assertions

let msg;
msg = 'text';

// let endsWithC = (<string> msg).endsWith('t');
// let alternativeWay = (msg as string).endsWith('t');

//Arrow Functions

let doLog = (message) => console.log(message);

//Custom Types

let drawPoint = (point: {x: number, y: number}) => //Inline Anotations

{
//...
}
drawPoint({
    x:1,
    y:2
})

//Interfaces
//Interfaces can't have implementations they can only have declarations.

interface Point {                          //Pascal Naming Convention
    a:number,
    b: number
}

let drawPointTwo = (point: Point) =>
{
//...
}
drawPointTwo({
    a:3,
    b:4
})

//Cohesion and Using Class
class Point1 {                          
    x:number;
    y: number;

    draw(){
        console.log('X: ' + this.x + ',Y: ' + this.y);
        
    }
    getDistance(another: Point1){
        //...
    }
}
let point: Point1 = new Point1();
point.x = 1;
point.y = 2;

 point.draw();

 //Constructors

 class Points {                          
    x:number;
    y: number;

constructor(x?: number, y?: number){
    this.x = 1;
    this.y = 2;   
}
    draw(){
        console.log('X: ' + this.x + ',Y: ' + this.y); 
    }
}
let points: Points = new Points();
points.x = 1;
points.y = 2;

// Access modifiers

// Adding module for these point to work at the top
let points2: Points2 = new Points2(5, 6);

point.x = 10;
point.draw();

