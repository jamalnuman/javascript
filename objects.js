 OBJECTS SECTION - 1
//BASE = PARENT CLASS.....DERIVED = CHILD CLASS
// The simplest way to create an object is using an object literal 
const circle = { 
   radius: 1, 
   draw: function() {}
}; 
   
// To create multiple objects with the same structure and behaviuor (methods), use a factory or a constructor. 




//Lesson 3: Factories *****************************

// Factory function to create an object. the keyword 'return' is needed with factory functions
function createCircle(radius) { 
   return {
      radius, //you can use this syntax, when the key and value are the same
      draw: function() {}
   } 
}

const circle = createCircle(1)




//Lesson 4 - Constructors ********************************

// Constructor function to create an object. keyword 'return' not needed because the keyword 'this' and 'new' automatically return the object.  
function Circle(radius) { //The first letter is uppercased
    this.radius = radius; 
    this.draw = function() {
      console.log('draw')
    }
}

const anotherCircle = new Circle(1) 
//with the 'new' keyword, an empty object is created {} and the keyword 'this' in the function is pointing to the empty object. 

    
//Lesson 5 Constructor Property **************************

// Every object has a "constructor" property which returns the class that was used to create that object. 
const x = {};
x.constructor; // returns Object()

//when you do the following
let x = {};

//js, under the hood, is doing the following 
let x = new Object();

//Lesson 6 Functions are Objects *********************** 
   
// In JavaScript, functions are objects. They have properties and methods. 
Circle.name; 
Circle.length;
Circle.constructor; // returns Function()
Circle.call({}, 1); // to call the Circle function 
//the above expression is like: let x = new Circle(1)

//the empty object on line 61, is like the empty object created by the 'new' keyword, and the "this" would refer to the empty object on line 61.

Circle.apply({}, [1]); //this is the same as .call method, but the second argument is passed in as an array


//Lesson 7 Values vs Reference Types **************** 

// Value types are copied by their value, reference types are copied by their reference. 

// Value types in JavaScript are: String, Number, Boolean, Symbol, undefined and null

let x = 10; 
let y = x;
x = 20;
console.log(x) => 20;
console.log(y) => 10; 
//this is because the values are independent of one another. these are primitive values

// Reference types are: Object, Function and Array
let x = {value: 10};
let y = x;
x.value = 20;
console.log(y) => value: 20; 
//this is cause both, x and y, are pointing to {value: 20}..the address of {value: 20} is stored in variables x and y, so when the value is changed, both x and y will have the updated value. these are reference types. 


//Lesson 8: Adding or Removing Properties
   
// JavaScript objects are dynamic. You can add/remove properties: 

circle.location = {};
circle['location'] = {};
//remember the bracket notation is used to dynamically access a property when the name of the property does not conform to standards, such as circle['center-text']..this would not work with dot notation. 
                      
delete circle.location; 
delete circle['location'];



//Lesson 9: Enumerating Properties
                      
// To enumerate the members in an object: 
for (let key in circle) console.log(key, circle[key]);

let keys = Object.keys(circle); //the return value is an array, so a variable is needed. 
console.log(keys);
                      
// To see if an object has a given property
if ('location' in circle)


//Lesson 10: Abstraction & Lesson 11: Private Properties and Methods

// Abstraction means hiding the complexity/details and showing only the essentials. 
// We can hide the details by using private members. Replace "this" with "let".
//So hide the details / implementation and show only the essentials 

function Circle(radius) { 
   // Public member 
   this.radius = radius; 

   // Private member... because when an instance of this class is created, only those properties and methods that are preceeded with the keyword 'this' will be available in the new instance. with the keyword 'let' those variables are hidden from the instance cause of scope                        
   let defaultLocation = {};                      
}  



//Lesson 12: Getters and Setters                     

//To define a getter/setter, use Object.defineProperty()

Object.defineProperty(this, 'defaultLocation', {
    get: function() { 
      return defaultLocation; 
    },
    set: function(value) { 
      if (!value.x || !value.y) {
        throw new Error("This value is invalid!")
      }
      defaultLocation = value; 
    }
});

//Object.defineProperty takes three arguments: 'this' & name of the method and an object...which is either 'get' or 'set'...'get' or 'set' is the key and the value of them are a functions. 

//line 140 is validation and the new Error on line 141 is an Object that creates an error response. It has a constructor working under the hood. 


function Stopwatch() { 
  let startTime, endTime, running, duration = 0;

  this.start = function() {
    if (running) 
      throw new Error('Stopwatch has already started.');
    
    running = true; 

    startTime = new Date();
  };

  this.stop = function() {
    if (!running) 
      throw new Error('Stopwatch is not started.');

    running = false; 
      
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds; 
  };

  this.reset = function() { 
    startTime = null;
    endTime = null;
    running = false; 
    duration = 0; 
  };

  Object.defineProperty(this, 'duration', {
    get: function() { return duration; }
  });
}


//*********** PROTOTYPES: SECTION 2 **********************************************
//BASE = PARENT CLASS.....DERIVED = CHILD CLASS
//Lesson 1: Inheritance

//Parent class can also be called Base or Super class
//Child class can also be called Derived or Sub class
//The relationship btw the too is a "is-a" relationship..the child "is-a" parent. 


//Lesson 2: Prototypes and Prototypical Inheritance

//In JS Prototypes are the Parent Class
//Every object, except 1, has a prototype or parent class
// Every object (except the root object) has a prototype (parent). 
// To get the prototype of an object:
Object.getPrototypeOf(obj); 

// In Chrome, you can inspect "__proto__" property. But you should 
// not use that in the code. 


//Lesson 3: Multilevel Inheritance



//Lesson 4: Property Descriptors

// To GET the ATTRIBUTES of a property:
//This will present info such as that btw lines 223-226
Object.getOwnPropertyDescriptor(objBase, 'toString');

// To SET the ATTRIBUTES for a property:
//Takes three arguments...object, method, an object that defines the ATTRIBUTES to change
Object.defineProperty(objBase, 'toString', {
    configurable: false, //if you want to delete the method
    writable: false, //if you want to override the method
    enumerable: false //to have the method be iterable
});


//Lesson 5: Constructor Prototypes

// Constructors have a "prototype" property. It returns the object / parent class
// that will be used as the prototype for objects created by the constructor. 
Object.prototype === Object.getPrototypeOf(objectToPass)
//Object.getPrototypeOf(objectToPass) is the same as myObj.__proto__...remember this will return the parent class

Array.prototype === Object.getPrototypeOf([])


//Lesson 6: Prototype vs Instance Members (Meaning instance methods in the child class)

//To add a method to the prototype / parent class: 
  Circle.prototype.draw = function(){
    console.log("draw")
  }

// All objects created with the same constructor will have the same prototype / same parent class. 
// A single instance of this prototype will be stored in the memory. 
const x = {};
const y = {};
Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // returns true 

// Any changes to the prototype will be immediately visible to all objects 
// referencing this prototype. 

// When dealing with large number of instances (children), it's better to put their
// methods on their prototype. This way, a single instance of the methods
// will be in the memory. 
Circle.prototype.draw = function() {}

//to override a method in a prototype: 
  Circle.prototype.toString = function() {
    return "Circle with a radius of " + this.radius;
  }


//Lesson 7: Iterating Instance and Prototype Members


// To get the instance properties (Again, meaning instance methods in the child class):
Object.keys(obj);

// To get ALL the properties (instance (child) + prototype (parent)): 
for (let key in obj) {}

//hasOwnProperty() returns the instance (child) properties NOT prototype (parent) properties
  //c1.hasOwnProperty('draw')
    //would return true for the class (child) and false for the parent / prototype class


//Lesson 8: Avoid Extending the Built-In Objects

//Dont do this




//*********** Part 3: Prototypical Inheritance *************
//BASE = PARENT CLASS.....DERIVED = CHILD CLASS
//Lesson 1: Creating Your Own Prototypical Inheritance

//creating a circle class
function Circle() {}

//creating a shape class
function Shape() {}

//to add a method(behavior) to the shape class
Shape.prototype.duplicate = function() {
  console.log("duplicate")
}


//circleBase is going to inherite from shapeBase, so it can use the duplicate method. 

// Prototypical inheritance
//this will return an object that will inherite from shapeBase and we are assigning that object to the Circle class 
Circle.prototype = Object.create(Shape.prototype);


//Lesson 2: Resetting the Constructor


//When the prototype of an object is reset, the constructor should also be reset. This is important cause on line 307, Circle class is inheriting from the Shape class, so the Circle constructor would refer to the Shape class, but with the following line, we are reassiging the constructor of the Circle class to the Circle constructor. 
Circle.prototype.constructor = Circle; 


//Lesson 3: Calling the Super Constructor

//This is how to call the Super Constructor. The .call method is envoking the parent class for the Rectangle class, the 'this' keyword is referring to the same object, that is created when using the 'new' keyword. The 'this' keyword will then transfer the new object to the parent class with the argument of 'color


function Rectangle(color) {
    // To call the super constructor 
    Shape.call(this, color);
}



//Lesson 4: Intermediate Function Inheritance

//Intermediate Function Inheritance is when you use a function to allow the child to inherit from the parent. For example, to ENCAPSULATE line 307 and 314 in a function of inheritance: 

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child;
}



//Lesson 5: Method Overriding

// Method overriding 
//This is the function in the parent class
Shape.prototype.draw = function() {}

//This is how to the override (originally in the parent class) while using it in the child class. 
Circle.prototype.draw = function() {
    // Call the base implementation 
    Shape.prototype.draw.call(this);

    // Do additional stuff here 
}


//Lesson 6: Polymorphism (meaning: many forms)



//Lesson 7: When to use Inheritance

// Don't create large inheritance hierarchies. 
// One level of inheritance is fine. Dont let the inheritance heirarchy become multiple levels. Use Mixins to assist. 


//Lesson 8: Mixins

// Use mixins to combine multiple objects 
// and implement composition in JavaScript. 
const canEat = { 
    eat: function() {}
};

const canWalk = {
    walk: function() {}
};

function mixin(target, ...sources) {
    // Copies all the properties from all the source objects 
    // to the target object. 
    Object.assign(target, ...sources);
}

function Person() {}

mixin(Person.prototype, canEat, canWalk);


//Solutions 


function HtmlElement() { 
  this.click = function() { 
    console.log('clicked');
  }
}

//To add the focus method to the parent class
HtmlElement.prototype.focus = function(){
  console.log('focued');
}

function HtmlSelectElement(items = []) { 
  this.items = items;
  
  this.addItem = function(item) { 
    this.items.push(item);
  }

  this.removeItem = function(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  this.render = function() {
    return `
<select>${this.items.map(item => `
  <option>${item}</option>`).join('')}
</select>`;
  }  
}

//side note, this is an example of a function expression and is the same code as above(415), but above uses the 'fat arrow' syntax...so the function keyword is removed and if there is one parameter, then the parenthesis are removed...also if one line is being returned, then the return keyword is not needed nor are the curly braces.
const renderItem = function(item) {
  return `<option>${this.item}</option>`
}

//HtmlSelectElement inherits from an INSTANCE of HtmlElement, which has the click method, but HSE also inherits the focus method cause the parent of HtmlElement has the focus method.
HtmlSelectElement.prototype = new HtmlElement(); 
HtmlSelectElement.prototype.constructor = HtmlSelectElement;


//Polymorphism is used here, cause the render method in this class behaves differently than the render method in HSE.
function HtmlImageElement(src) { 
  this.src = src; 
  
  this.render = function() {
    return `<img src="${this.src}" />`
  }
}

HtmlImageElement.prototype = new HtmlElement(); 
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement('http://')
];

for (let element of elements) 
  console.log(element.render());


//********* Part 4: ES6 Classes *********************
//BASE = PARENT CLASS.....DERIVED = CHILD CLASS
//Lesson 1: ES6 Classes


//Any methods added to the constructor will be added to the INSTANCE of the class and any methods added to the body will be added to the PROTOTYPE of the class..like draw().
class Circle {
    constructor(radius) {
        this.radius = radius; 
    }

    // These methods will be added to the prototype. 
    draw() {
      console.log('draw');
    }

    // This will be available on the Circle class (Circle.parse())..meaning being called on the class, not the INSTANCE of the class
    static parse(str) {
    }
}

//The above is the new (ES6) way of writing the following: cause, the above is syntatical sugar, Circle is still a function at the end of the day.
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}


//Lesson 2: Hoisting


//two methods to declare a function: 

//function declarations
function sayHello() {}

//function expression 
const example = function() {};
//IMPORTANT to remember that function declarations are hoisted to the top of the page, so you can execute a function declaration prior to defining...whereas, function expression is moreso a variable and variables are not hoisted to the top of the page. 

//class declaration
class Circle {}

//class expression
const Class = class {};
//unlike above, the class declaration is not hoisted. 


//Lesson 4: The This Keyword

const Circle = function() {
  this.draw = function() {console.log(this)};
}

//create an instance of the Circle Class
const c = new Circle();

//executing draw on the instance of the Circle Class, in this case, the 'this' on line 505, will refer to the instance that was created(509), cause draw was executed on that instance(509). 

//Method Call
c.draw();


//function call
draw(); //executing draw like this, the 'this' keyword on line (509) will refer to the windows object and global in Node. the reason for that is cause, here, draw is not being called on an instance as in line 514. To make sure 'this' doesnt refer to the windows object or global, use 'use strict' at the top of the page. In ES6, the class syntax is automatically executed in 'use strict' mode, so no need to define 'use strict' at the top of the page. 



//Lesson 5: Private Members Using Symbols

// Using symbols to implement private properties and methods..Everytime a Symbol() is called, a new unique value is obtained, so Symbol() === Symbol() would return false.
const _size = Symbol(); //remember Symbols are a primitive value, like number, string, boolean
const _draw = Symbol();

class Square {
    constructor(size) {
        // "Kind of" private property 
        this[_size] = size; //bracket notation..Again, methods in the constructor are transfered to the INSTANCE, except when used as symbols. In this case, the user would not be able to reset the value for the _size value.
    }

    // "Kind of" private method 
    [_draw]() {
    }

    // By "kind of" I mean: these properties and methods are essentally
    // part of the object and are accessible from the outside. But accessing
    // them is hard and awkward. 
}


//Lesson 6: Private Members Using WeakMaps


// using WeakMaps to implement private properties and methods
const _width = new WeakMap(); //Weakmaps are like hashes, maps, objects, where the keys are objects and values can be anything...if the keys are not referenced, they will be garbage collected.
const _move = new WeakMap(); 

class Rectangle {
    constructor(width) {
        _width.set(this, width);//so in this example, 'this' is the object and width is the value..as seen in line 548.
        _move.set(this, function() {
          console.log('move', this) //remember 'this' will return undefined cause the ES6 class syntax operates in 'use strict' mode.
        });
        _move.set(this, () => {
          console.log('move', this); //here 'this' will not refer to undefined, but will refer to the INSTANCE that was created cause fat arrow syntax inherits the INSTANCE from the constructor.  
        });
    }

    draw() { //how to access a private method using WeakMap
        console.log('Rectangle with width' + _width.get(this)); //'this' is the object that is 
    }
    getMove() {
      _move.get(this); //this is a public method, accessing a private method, like line 559.
    }
}

// WeakMaps give us better protection than symbols. There is no way 
// to access private members implemented using WeakMaps from the 
// outside of an object. 


//Lesson 7: Getters and Setters

const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius)
  }

  //shortcut way of creating 'getters' see longer version line 135
  get radius() {
    return _radius.get(this);
  }

  //shortcut way of creating 'setters' see longer version line 139
  set radius(value) {
    if (value <= 0) throw new Error('Invalid Radius')
    _radius.set(this, value);
  }
}


//Lesson 8: Inheritance
//BASE = PARENT CLASS.....DERIVED = CHILD CLASS

// Triangle inherits from Shape class. With the 'extend' keyword, the constructor property doesnt have to be reset.  
class Triangle extends Shape { //if the parent class has a constructor and the child class has a constructor, then the child constructor must have the 'super' keyword to call upon the parent constructor first. the color argument being passed on line 602 is being passed to the parent constructor with the 'super' keyword. Note that the child constructor doesnt set the color, the parent class does.
    constructor(color, radius) {
        // To call the base/parent constructor 
        super(color);
        this.radius = radius;

    }

    draw() {
        // Call the base method 
        super.draw();

        // Do some other stuff here
    }
}

const c = new Triangle('red', 1);


//Lesson 9: Method Overriding

class Shape {
  move() {
    console.log('move')
  }
}

class Circle extends Shape {
  move() { //this move method will overwrite the parent move method, cause JS first looks in the derived class then the base class. 
    super.move(); //this is to the call the move method in the base class. 
    console.log('circle move');
  }
}

const c = new Circle();


//Stack class solution 
const _items = new WeakMap(); //making '_items' private

class Stack {
  constructor() {
    _items.set(this, []);
  }

  push(obj) {
    _items.get(this).push(obj);
  }

  pop() {
    const items = _items.get(this); //items is now the array, that was set on line 643

    if (items.length === 0)
      throw new Error('Stack is empty.');

    return items.pop();
  }

  peek() {
    const items = _items.get(this);

    if (items.length === 0)
      throw new Error('Stack is empty.');

    return items[items.length - 1];      
  }

  get count() { //Note that this method is a 'getter'
    return _items.get(this).length;
  }
}


//*************Part 5: ES6 Tooling********************

//Lesson 1: Modules

//Modularity is when you have different files for an application..like index.html and index.js and so forth. 
//This methods allows for the following: Maintainability, meaning it is easier to manage several files as opposed to one file with thousands of lines of code. Reuse, meaning it allows files to be used over and over again in the same application or different application. Abstract, meaning you can hide the complexity and show the essential features of the application. 

//No concept of Modules in ES5. The programming community developed the following module sytanx as a substitute and the some the popular formats were: 

//  - AMD / Asynchronous Module Definition.used in the Browser
//  - CommonJS..Used in Node
//  - UMD / Universal Module Definition..used in the browser and node


//  ES6 supports Modules and the two that should be understood are CommonJS and ES6 Modules.


//Lesson 2: CommonJS Modules

//Cohesion: things that are related, should go together

// CommonJS (Used in Node)

// Exporting..This is the syntax that would go in the file that you are going to export. 
module.exports.Cirlce = Circle; 


// Importing..This is the syntax, that would go at the top of the file that you are importing a file into. 
const Circle = require('./circle'); //the current folder (./) and the name of the file to import (circle)..no need for (.js) cause that is assumed by default. 


//Lesson 3: ES6 Modules

// ES6 Modules (Used in Browser)

// Exporting..Important to note that the 'export' keyword before class is the substitute for module.exports.Circle = Circle. 
export class Square {}

// Importing 
import {Square} from './square'; 


//Lesson 4 - ES6 Tooling

//The following is ONLY important if you are building browser applications: 

//Transpiler is a combination of two words: Translator and compiler..you give the transpiler modern js code and it translates the code into ES5 so the browsers can understand the code, such as Babel.

//Bundler, takes all the files for an application and bundles them into one files. So you can have 5 .js files and the bundler will bundle them into a single .js file..Webpack is a bundler. It minifies the code by removing the spaces and comments and shorten variable names, class names, function names and so forth. Reduces the size of the bundle / single file that is compromised of several files. 


//Lesson 5: Babel

//IN THE PACKAGE.JSON FILE..THE 'SCRIPTS' SECTION...THE KEYS ARE THE NAME OF THE COMMANDS AND THE VALUE TO THE KEYS ARE THE COMMANDS THAT WILL BE EXECUTED; WHEN THE KEYS ARE ENTERED INTO THE TERMINAL..EX: "babel": "babel --presets env index.js -o build/index.js"

// We use Babel to transpile our modern JavaScript code 
// into code that browsers can understand (typically ES5). 


//Lesson 6: Webpack

// We use Webpack to combine our JavaScript files into a
// bundle. 