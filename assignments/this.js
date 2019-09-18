/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window Binding: 'this' is pointing to the window, basically, all of what JavaScript is
* 2. Implicit Binding: to the left of the dot when you're invoking the function, is what 'this' is. 
* 3. New Binding: This uses a constructor function, that creates an object. 'This' points to that new object that you have created.
* 4. Explicit Binding: In your code, you will explicitly tell the 'this' what it will be.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
//inside your console, there will be something called 'window' and inside of that is a lot of stuff, and currently 'this' is all of it. Pretty neat.

// Principle 2

// code example for Implicit Binding
const myBio = function (name, age) {
    return {
        name: name,
        age: age,
        sayName: function() {
            console.log(this.name, this.age);
        }//this closes say name
    }//this closes return
}//this closes myBio function

let colin = myBio('Colin', 23);
colin.sayName();//to the left of this, is what 'this' is. this.sayName, if you will.
// Principle 3

// code example for New Binding
function Musician(favorite) {
    this.artist = favorite;
}

let myFavoriteMusician = new Musician('Daniel Caesar');

console.log(`Right now, my favorite musician is ${myFavoriteMusician.artist} because of his variety of music.`);

// Principle 4

// code example for Explicit Binding
function dog(){
    console.log(`${this.name} says ${this.bark}!`)
}

let myDog = {
    name: 'Zeus',
    bark: 'WOOF!'
}

dog.call(myDog); //this is where we invoke the function, inside the argument is what THIS is.
