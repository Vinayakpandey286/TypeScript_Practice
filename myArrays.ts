// hero return string
const hero = ["thor", "spiderman", "ironman", "captain america"];

const hero1: Array<string> = hero.map((hero: string) => {
  return `hero is ${hero}`;
});

console.log(hero1);

//////////////////////////////////////////////////////////

type User = {
  name: string;
  isPaid: boolean;
};

const myuser: User[] =[]

myuser.push({name:"vinayak",isPaid:true})


// 2d array define
const MLmodels : number[][] =[
    [222,22,22]
]



