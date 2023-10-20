"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// (val : number):number 2nd number means we are returning a number from function
function addTwo(val) {
    return val + 2;
}
addTwo(5);
function signUp(name, email, isPaid) {
    console.log("isnide signup");
}
// default value
var newfun = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log("default value function");
};
newfun('v', 'v@v.com');
signUp("vinayak", "vinayakpandey286@gmail.com", true);
// not sure which type have to be return
// way to return more than 1 type
function getValue(val){
    if (val > 5) {
        return true;
    }
    return "vinayak";
}
//syntax to return type in arrow function
var pandey = function (s) {
    return "vinayak";
};
// hero return string
var hero = ["thor", "spiderman", "ironman", "captain america"];
var hero1 = hero.map(function (hero) {
    return "hero is ".concat(hero);
});
console.log(hero1);
