"use strict";
// type is a way to define type of object in paramter or as a return
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return user;
}
var createdUser = createUser({
    name: "vinayak",
    isPaid: false,
    price: 399,
});
console.log(createdUser);
var randomUser = {
    _id: "1234",
    name: "vinayak",
    isPaid: true,
    price: 434,
};
