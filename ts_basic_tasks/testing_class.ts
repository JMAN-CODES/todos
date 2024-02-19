//implements

interface human{
    name():string,
    age():number,
    job?():string
}

class jeff implements human{
    name(){
        return "jeffrin"
    }

    age(){
        return 21
    }
}

const new_human = new jeff()
console.log(new_human.name())
console.log(new_human.age())

//extends

class Animal{
    move():void{
        console.log("moving")
    }
}

class dog extends Animal{
    bark():void{
        console.log("woof")
    }
}

const arjun = new dog()
arjun.move()
arjun.bark()

function IamJeff<Type>(args:Type): Type {
    return args;
}


const newjeff = IamJeff("hehe")
console.log(newjeff)


//override
interface shape {
    getPerimeter(): number,
    getArea?() : number
}

class rectange implements shape{

    length: number
    width: number

    public constructor(length:number,width:number){
        this.length = length,
        this.width = width
    }

    getPerimeter(): number {
        return (2*(this.length)+this.width)
    }

    getArea(): number {
        return (this.length*this.width)
    }

}



