// 1st {name:string,price:number} is defining type of keys on an object and 2nd is defining type of keys of an retunr object

function example({ name: string, price: number }): {
  name: string;
  price: number;
} {
  return { name: "vinayak", price: 399 };
}

example({ name: "vinayak", price: 399 });


// By doing this we can pass additonal key argument
//if we called createUser({name:"vinayak", isPaid:true, email:"vinayak" })
//it will give us the error

function createUser({ name: string, isPaid:boolean}){

}

let newUser = {name:"vinayak", isPaid:true, email:"vinayak" }

createUser(newUser)


export {};
