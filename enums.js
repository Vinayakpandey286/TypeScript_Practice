"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// restrict choices, defaukt value of aisle will be 0 and others succesive no.
var seatChoice;
(function (seatChoice) {
    seatChoice[seatChoice["AISLE"] = 0] = "AISLE";
    seatChoice[seatChoice["WINDOW"] = 1] = "WINDOW";
    seatChoice[seatChoice["MIDDLE"] = 2] = "MIDDLE";
})(seatChoice || (seatChoice = {}));
var seat = seatChoice.AISLE;
console.log(seat);
