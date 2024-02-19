console.log("code working")
function add_numbers(a:number,b:number): number {
    return a+b
}

function concat(a:string,b:string):string{
    return a+b
}

function rect_area(length:number,breadth:number):number{
    return length*breadth
}

function greater(a:number,b:number):boolean{
    
    if(a>b){
        return true
    }
    else{
        return false
    }
}

let sum:number = add_numbers(10,20)
let concat_str:string = concat("a","b")
let area = rect_area(20,30)
let greaater_num:boolean = greater(10,20)

console.log("sum",sum," ","conact_str",concat_str," ","area",area," ","greater",greaater_num)

