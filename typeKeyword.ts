// type is a way to define type of object in paramter or as a return

type User = { name: string; isPaid: boolean; price: number };

function createUser(user: User): User {
  return user;
}

const createdUser: User = createUser({
  name: "vinayak",
  isPaid: false,
  price: 399,
});

console.log(createdUser);

// Readonly you can't reassign the value if array i think it's possible haven't checked as of now
// '?' is an optional value which user might not have so it will bypass this typechecking if type is not passed
type myUser = {
  readonly _id: string;
  name: string;
  isPaid: boolean;
  price: number;
  creditCardDetails?: number;
};
// u cant change _id field by randomUser._id = "2134" because of readonly

const randomUser: myUser = {
  _id: "1234",
  name: "vinayak",
  isPaid: true,
  price: 434,
};

//
//
//
//
///
//
//
//
//
//

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: string;
};

// add above 2 types in this type along with mytype

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
export {};
