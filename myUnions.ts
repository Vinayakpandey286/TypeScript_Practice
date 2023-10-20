// both types
let score: string | number = 33;

type user = {
  name: string;
  id: number;
};

type admin = {
  username: string;
  id: number;
};

let vinayak: user | admin = { name: "vinayak", id: 1 };

vinayak = { username: "pandey", id: 3 };


// arrays
//(string | number)[] means array elements can be of both the types
//string[] | number[] it means array can be of string or number not both
const data: (string | number)[]=[1,2,"3"]


// in this case you cant change the number also
let pi:3.14 =3.14