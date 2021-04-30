export class Points2 //exporting
 {                          
    constructor(private _x: number, private _y: number){
        
    }
        draw(){
            console.log('X: ' + this._x + ',Y: ' + this._y); //using underscore to use 'x' in future for better clarification.
        }
    
        //Properties
    
        get x(){
            return this._x;
        }
        set x(value){
            if (value < 0){
                throw new Error("value can't be less then 0");
            }
        }
    }