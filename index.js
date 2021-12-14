// Code your solution in this file!
const theHq = 42;
function distanceFromHqInBlocks(theHq, number2) {
    if (theHq < number2) {
    return (number2 - theHq);
    }
    else {
        return (theHq - number2);
    }
}
distanceFromHqInBlocks(theHq, 50)