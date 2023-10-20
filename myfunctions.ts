// (val : number):number 2nd number means we are returning a number from function
function addTwo(val : number):number{
    return val +2
}

addTwo(5)

function signUp(name:string, email:string, isPaid : boolean){
    console.log("inside signup")

}
// default value
const newfun = (name:string, email:string, isPaid : boolean = false)=>{
    console.log("default value function")
}

newfun('v','v@v.com')

signUp("vinayak","vinayakpandey286@gmail.com",true)

// not sure which type have to be return
// way to return more than 1 type
// Use union

function getValue(val:number): boolean | string {
    if(val>5){
        return true
    }
    return "vinayak"
}


//syntax to return type in arrow function

const pandey =(s:string):string =>{
    return "vinayak"
}

// hero return string
const hero = ["thor", "spiderman","ironman","captain america"]

const hero1 : Array<string> = hero.map((hero:string)=>{
    return `hero is ${hero}`
})

console.log(hero1)

 
// void means it doesn't return anything
function consoleError(error:string):void{
    console.log(error)
}

// never is used in throw error scinarios, never is used in not reachageable point {never is never observed}
function hadnleError(errmsg:string):never{
    throw new Error(errmsg)
}
export {}