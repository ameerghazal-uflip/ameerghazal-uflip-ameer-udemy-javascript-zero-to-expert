/*
Number: always floating point (not int or double)
String: simlar to java, can be used with single & double quotes (primitve, though)
Boolean: true or false, same as java
Undefined: not assigned a value yet, java
Null: same as 'empty value;
Symbol: unique val, cannot be changed
Big int: larger integers than a number can hold.
- we do not have to manually define the data type (different from java)


let: use for any variable
const: only for final values (e.g. birthYear)
var: old, don't use

- we can log more than one thing by seperating with a comma (console.log( , ))
- we can raise something to a power by ** (e.g 2 ** 3) is 2 cubed. 
- concatination works similar to java
- += & -= ... are the same as java
- ++i & i++ ... are the same
- similar >, <, >=, <= operators
- precedence rules are similar

- we can use ${variable} for concation of a string, it can be much faster than + "" ... etc. with back tickets (above tab) ``
- we can also use backticks for all string. Also somewhat similar newline \n\ feature, but instead we can use backticks. 
(e.g. console.log(`String 
with 
multiple 
lines`))

- similar if-else statments, and defining variables
- we can go from a String to a number using (Number(String)); this is similar to the parseInt(), parseDouble() commands in Java (and back to String, etc.)
- Type Conversion: can convert to a String, Number, Boolean
- NaN stands for not a number

- Type Coercion: happens when an operator is dealing with two different types
- + operator in console statments convert everything to a string if applicable to match the types.
- (-, *, /) operatiors in console statments convert everything to a number if applicable to match the types. Also, go from left to right.
    e.g. : let n = '1' + 1; // ('11', converts to a String)
    n = n - 1 // '11' = 1 = 10 (converts to a number)

Eqaulity Logic
- 5 falsy values: 0, "", undefined, null, Nan when converted to a boolean. The rest are truthy values 
- (===) is the strict equality operator, no type coericen. 
- (==) is the loose equality operator, does type coericen. (e.g. "18" == 18)
- we can prompt something to the user by using the prompt command (e.g. prompt("...")). From there, we can assign the value given by a user in a variable.
- using the user respone, we can wrap the object (changing the type to a number) (e.g. Number(prompt(".."))) (type conversion)
- if, else if, etc. is also the same as java.
- != has the type change, !== is strict, similar to the equality operators

Boolean Logic
- and (&&) (both true), or (||) (at least one true), not (!) (flips the boolean). All similar to java (e.g. if A is false, then !A is true)
 
Switch Statement
- Similar function to an if-else statment. 
- we use the case function, followed by ... (e.g. day of the week), followed by a colon.
  ex: case 'monday':
        console.log(".."); // this is the fuction if the statement is true.
        break; // we end it off with a break
- we end cases with breaks, and we can stack cases if they have the same function (similar to an && / || operator). (without break, it continues for the entire structure, similar to curly braces for if-else)
- we can - optional - end swtich statements with a defualt if all fail (similar to an else statement at the end).

Statements & Expressions 
- entire line of code (ending with a semicolon) is a statement.
- just the line of code without a semicolon (e.g 2+4) is just an expression similar to java. 

The Conditonal (Ternary) Operator (?)
- ? allows us to define an if-else statement all in one line.
- after the ? we write our "if block" if the statement prior is true.
- we need a mandatory "else" block. So, we seperate the first statment with a colon (:) and write the else part. 
- 3 parts: conditon, if, else 
- we can assign it to a value. 
- we can use these inside of template literals.

Section 3
- Strict mode (with 'use strict') helps for finding bugs. define at the start.

Functions
- we can use functions for things we would need to use more then once.
- we can access by using the title name followed by a parenthesis (e.g. logger())
    fucntion logger() console.log(...) 
- A function can reuse a piece of code, reuse data, and return data. (These are similar to methods in java).
- Can uses parameters which are defnied in or before the function is run.
- The arguements are the values chosen when the function is called.

Function Declaration vs. Expression
- we can have anyonmus functions by setting the nameless function equal to a variable. (function expressions): const calcAge2 = function (birthYear)
- (function decleration) defines it the normal member method way: function calcAge1(birthYear)

Arrow Functions
- implict return
- good for one liner functions
- add a parameter like normal (e.g. birthYear) followed by an arrow (=>), then the body.
- for longer lines of code, we need the curly braces and a return statement
- very similar to the functions. For multiple parameters we can wrap them with parenthesis like normal. 
    e.g. const calcAge3 = birthYear => 2037 - birthYear;

Functions Calling Other Functions
- So we use a function inside of another function
- we do not need to explicity call both functions in the main program. 
- very similar to methods in java.

Reviewing Functions
-  similar to java, if the return statement is used, the method ends/returns
- function declarations can be used before they are declared in the code: function name (param)
- function expressions (value stored in a variable)
- Arrow fucntions great for one-line functions. No this keyword!
- functions have local variables, similar to methods. 
- call the function with the parenthesis (). Add arguments inside if needed. 

Introduction to Arrays
- creating basic arrays can be done by setting a variable equal to closed square brackets [], seperating each item by a comma. 
- it can also be created by using new Array(...). 
- These are much different from java. In java, the array type all has to match, and we must use {} or decalre an oversize, etc..
- Indexing is very similar (0,1,2, etc.). Printing is also similar. Call the array by name, and in tn the square brackets, implement the index.
- length is also similar 
- Only primitve values are immutable. So we can mutate array's
- We can place function calls into arrays

Basic Array Operations (Methods)
- push() is a method/function that adds an element to the array. Returns new length.
- unshift() adds an element to the front of the array. Returns new length.
- pop() removes the last element of an array. Returns removed element.
- shift() removes the first element of the array. Returns removed element.
- indexOf() returns the index of the value. Similar to java.
- includes() returns a booelan if the value is in the array (true, false)

Introduction to Objects
- Mutliple ways of creating objects.
- We use objects to group toghter multiple values like array (e.g. first-last names, friends, ages, etc.)
- define a variable const varaibleName = {} use the curly braces and inside define each function with its value seperated by a :, then a comma.
e.g. const aG {
    name: Amlop,
    last: pop,
    ...
};
- in objects, order does not matter (un-structured).
- we can actually name the data with objects (different from arrays).


Dot Notation
- simply just write the object name dot (.) what we are trying to find in the object
- e.g. carti.lastName;
- we can add elements to the object by using the object name dot the variable we want to add
e.g. carti.location = "Crib";
- we can stack the dot notation (left to right precedence)
e.g. ${myCountry.neighbors.length} // inside a log

Bracket Notation
- wrtie the object name followed by square brackets. In the brackets and in quotes, write down the field trying to be located
- e.g. carti['lastName']
- we can put any expression in the sqaure brackets (e.g. const nameKey = 'Name'; console.log(carti['first' + nameKey]);)
- we can put variable values inside the brackets and javascript will find what we are looking for.
- prompt() prompts to the user.
- we can add elements to the object by using the object name, square brackets filled with the new variable name (e.g. carti['Twitter'] = "...")

Object Methods
- we can use the function expression to attach it to an object, calling it a method.
- define functions the same way (function name: function (pararmeter) {..})
- use a parameter for the function if it is not defined in the object.
- if it is defined in the object, just use the 'this' keyword, similar to java, to use that specfic year. In the main body, we would not need an argument, nor would we need a parameter for the function: (e.g. calcAge2: function () {
        return 2037 - this.birthYear;
    })
- 'this' keyword defines the entire object. When we use it with the dot operator, we can select the specific value we want in the object.
- we can do this.variablename to add a new variable inside of a function defined in an object.
- from here, all we would have to do is to call the object name ('carti') dot (.) the new variable name.
example:
            calcAge3: function () {
                this.age = 2037 - this.birthYear;
                return this.age;
                }
    console.log(jonas.calcAge3()); // we call the function once to get the value defined 
    console.log(jonas.age); // then we can use the variable like normanl

- Arrays are also objects



Iteration: The for loop
- for loops work very similar - if not exact - to java for loops.

Looping Arrays, Breaking, and Continuing
- length for loops is the same as java
- with continue, we can exit the current iteration of the loop, and the next one starts immediatley
- break terminates the entire loop if the value is found
- similar to java

Looping Backwards and Loops in Loops
- similar to loops in java
- we can enter an array inside of an array by using [][]
- first [] is the index in the larger array
- second[] is the element at the inner index

While Loops
- similar to java. Similar to for loops.
- they only need conditions, no counters. If we have counters, define outside and inside. 
- Go for no known iterations. (rolling a dice)

Bug Checker
- console.warn: displays warning
- console.error: displays error
- console.table: returns a nice formatted table of an object
- in the source tab under inspect, we can set a breakpoint at the time. (red dot on the left) from there we can dug up until the red point. 
- we can import a line of code: debugger; to tell js to stop at that point.


HTML & CSS
--------------------

- under the <head> sections, we put things that describe the webpage, (descriptions, titles, etc.), styles (css)
- under <body> is what is visible 
- <h1> describes a heading (<h1> - <h6> fts.)
- <p> describes a paragraoh.
- auto close & rename tag are useful extensions for html
- we can write a skeleton structure with ! (Tab) to get html skel.
- we can nest elements inside on another.
- href is a reference to a hyper link. Use an anchor to implement the data (e.g. <a href="https://github.com">Github link</a>)
- heading (<h1></h1>, etc.) are block elements 
- for images, we can do the same <img src="..." />. Does not have closing tag. We can link to something in the folder, or a link.
- Use classes & id's so we can name and style them in CSS. Also, we use them in javascript for dumb manipulation
- source attribuite is for images. href is for links.
- Id's have to be unique and can only be used once on a page. (e.g. img ="..")
- Classes can be used over and over again (mainly used) (e.g. class="..")
- In CSS, use the - to seperate names
- we have a div box, input bot w/ place holder, and a button element
- form element better describes what is in the box.
- div is a generic box with barley any meaning.
 <form id="Your-name"></form>
- <input type="text" placeholder="Your name" /> for info in box & type


CSS Styling
- goes under the head, before the title. Or, it can be linked, which is better.
- body { // data }
- <link href="cssfilename.css" rel="nameofsheet" />. This links an html file to a css file. 
- font-family is inherited. All things under the body tab (as stated previously) are changed fonts.
- for class selectors, we use dot notation (e.g. .first { // })
- for ID's we use a #idname  for the styles
- we can use the ref name from html to code styles in css (e.g. <p></p>, we use p { })

CSS Box Model
- content: text, images, etc.
- padding: translarent area around the content, inside of the box;
- border: goes around the padding and the content;
- margin: space between boxes;
- fill area: area that gets filled with backgorund color or background images. 
- global reset: reset all margins
- use a * { } to change all elements
-padding creates space from the borders
- we can seperate with with commas (input, bottom { })
- selectors work similar in java script
- we can go to the id we want, put a space, and implement the the selector under that id (e.g. #your-name h2) goes to the h2 heading under yourname id.
- box-sizing: border-box gurantees the content box shrinks to make space for the padding and borders. If width is set to a specific number (e.g. 200)



Notes from Project 1
- document.querySelector('') // links the js with the html
- write similary to css (id: #, class: .). We can use more dot operators from left to right.(e.g. .textContent)
- Event Listener for when button is clicked
- Output from user is usually a string. So, cast a Number becasue we will need to compare later on
- We can use similar Math operations like in java. 
- Similar statments (if, else if, etc.)
- Declare a let variable for a counter and use querySelector to display score.    
(e.g. document.querySelector('.score').textContent = score;)
- we can also do the element name just like css. (e.g. 'body)
- JavaScript adopts the camel case for property names with multiple words in CSS
-* whenever manipulating a style, we need to use a string. -Also use .style after the ('').style.background = '...';
(e.g.  document.querySelector('.number').style.width = '30rem';)
- Use the (?) ternary operator to simplify code.
- we can also use functions 




DOM & DOM Manipulation
- Document Object Model (DOM) - structured rep of html docs. Allows js to access html elements and styles to manipulate them.
- DOM tree structured like html file. Document, head, body, etc. all with sub trees.
- Start with a document.querySelector() to acesses
- DOM is part of web api's. Which are libraries written in Js, which is avaliable for us to use. 
- We can set a line by using an equal sign / change
(e.g. document.querySelector('.message').textContent = 'Correct Number';)
- Need an Event Listner(when something is clicked, hovered, etc.)
- addEventListener('click',) with an argument saying what to do (watching for a click) then a function expression defing what to so if something happen
Example: ocument.querySelector('.check').addEventListener('click', function () { ... });





Project 2 Notes
- Working with classes.
- To select item with the same class name, use querySelectorAll. Use it the same way. Returns a Node list
- We can treat the items in the node (post-queralSelectorAll) as an Array and loop through an array the same way.
- Use the .textContent to display the data.
- ex:console.log(btnsOpenModel[index].textContent);
- we can use .classList to remove, add , contatins a class, = etc. things from the output. E.g. modal.classList.remove('hidden', ...). We DO NOT use the dot operator in this case. 
- we can define a function like normal with a name. From there, we can use it in the addEventListener arguements. 
e.g. 
- const closeModel = function () {
  modal.classList.add('hidden'); // hides the modal
  overlay.classList.add('hidden'); // hides the overally
};

btnCloseModel.addEventListener('click', closeModel); 
- if code is reusable / in need of a function. 
- document.addEventListener(), not query specfic, is for anything selected (searches the entire thing)
- when an event happens we have acess to that event with the event handeler function.
- we can define a parameter inside the function of addEventListener, and from there, use operatrions to find values of the 'objects'. For example, event.key.



Project 3 Notes 
- <section></section> for each player.
- make a flow chart to help out scenarios
- select elements by id instead of specfic class name if applicable 
- use a # for a id. Use a dot for classes.
- if we use document.getElementById(), we do not need to use the hash
- do not use . when using the classList methods
- we can manipulate src from java script
ex:   diceEl.src = `dice-${dice}.png`; // we can dynamically load
- make use of the ``.
- make use of the textContent to display things.
- toggle will add a class if it is not there and it will remove a class if it is there
- if we add a class or remove it, and it is there or not there, js will not do anything.


Section 8
- High-level languages: developers do not have to manage resources compared to C. Programs, though, will never be as fast.
- Garbage-collected: unused objects are garbaged up to free up space. (Js special)
- Interpred or just-in-time complied: all in all, we convert into machine code (0's, 1's). Computer processor only understands 0's and 1's. So we write human readable javascript code. From there, we complie.
- Multi-paradigm: procedural programming, object oriented programming, functional programms. Imperative vs. Declarative. Js can do all three. 
- Prototype-based Object-Oriented: Array prototype contains all the array methods, and the arrays in our code, inherit these methods.
- First-class functions: functions are treated just as variables. Not the same as java. (e.g. const closeModal = function () {})
- Dynamic language: we do not have to specify data types. Variables are auto changed. (let, const, etc., not similar to js).
- Event loop: takes long running tasks,  excutes them in the "background", and puts them back in the main thread once they are finished. 

JS Engine and Runtime
- engine executes js. code
- all engines contain a call stack and a heap. 
- objects are stored in the heap similar to java.
- Compilation: entire code is converted into machine code at once, and written to a binary file that can be executed by a computer.
(built, then executed in the processor)
- Interpretation: runs through the source code and executes it line by line. (javascript used to be used like this; however, this is very very slow.)
- Just-in-time (JIT) compliation" entire code is converted into machine code at once, then executed immediatley.
- Parsing: the code is parsed to check syntax errors. Then complies the ASTt via compilation, and it executes (changes into 0's and 1's). Optimiazed during execution. 
- Runtime is a box that contains all the js. things we need (e.g. heap, stack, web API's, callback queue)



Execution Contexts and the Call Stack
- after compliation, creation global exectuvie context is created for the top-level code. These are not inside of a function. ONLY ONE.
- exectuion context - a piece of javascript is executed. Stores all the necessary information for some code to be executed.
- then, top level code is ecevuted. Then, exectuion of functions and waiting for callbacks. 
- what is inside an exectuion context: 
1. variuable enviroment: let, const, var, functions, arguments object.
2. Scope chain: consists of refernces to variables that are located outside of the function.
3. this keyword. 
These are all generated during the creation phase, right before execution.
note: arrow functions do not have an arguments objects or this keyword, which is extrmeley important to remember (they share with their closest parent).
- we get a globalc exectuion context for each function. e.g. 
name = 'JONAS'  
first = <function>
second = <function>
x = <unknown></unknown>


- Call-stack: execution context that is stacked. Once it is finished running it will be removed from the stack. 
- they stack each other in the call-stack. From top, howev
- once a return is called, the execution context is removed "popped off", and we go down to the previous thing in the stack.
ex: we hae our glob ex., then function ex., etc. we follow the code along (methods called, etc.). This is similar to tracing code in java. 

Scope and Scope Chain
- each exectution content has a varibale enviroment, scope chain, and this keyword
- scoping: controls how our programs variables are orgainzed and accessed ("Where do variables live").
- Lexical scoping: scoping is controlled ny placement of functions and blocks in the code. 
- Scope: space or enviorment in which  a certain variable is declared. There is a global scope, function scope, and block scope.
- Scope of a variable: region of our code where a certain variable can be accessed. (not the same as scope)
- Global scope: for top level code. For variables declared outside of any functions or blocks. These are accessible everywhere. SImilar to java.
- Function Scope: Local variables, only accesible inside the function. Similar rules to java. If a variable is defined outside, however, it would work to mutate them.
- Block scope (ES6): anything in curly braces, if defined inside of the block, have their own local variables. Loops, conditionals, etc. This only applies to let and const variables, however, we could use var (this is because of the old rules). Functions are also block scoped, so functions declared inside a block, are only asscessible in that block. Very similar to java. 
- Every scope has access to the variables from the parent scopes. For example, if a function is deffined in a function, the second function can call on all parent scopes. This does not work the other way around. Only Parent scopes can be used, but no child scopes. 
- var is function scoped, meaning they ebd up in the closest function scope. let and const are block scoped.  
- Scope Chain vs. Call Stack: the scope chain has nothing to do with the order in which the functions were called in the call-stack. Scope chain in a certain scope is equal to adding all the variable enviroments of the parent scopes.
- Code in the function is only implemented once it is called; therefore, we can use it anywhere as long as the "main" is in the correct order.

Variable Enviroment: Hoisting and The TDZ
- Hoisting: Makes some types of variables accessible/usable in the code before they are actually declared. "Variable lifted to the top of their scope".
- Code is scanned for variable decleratons before execution. For each variable found, a new property is created in the variable enviorment object.
    - function declerations are hoisted, inital values are actual functions, and are block scoped.
    - var variables: hoisted, inital val is undefined, function scoped.
    - let & const: not hoisted, inital val is <uninitalized>, TDZ (temporal deadzone), block scoped.
    - function expressions and arrows: these are simply variables, so they follow the same var & let/const rules as above. 
- If we try to access a tdz, we get a ref error. Each and every let & const variable have a TDZ. TDZ helps us avoid errors when accessing values before decleration. Also, it makes const variables work properly. 
- Good practice to just create functions first and call them later.
- let & const variables do not create properties on the window object.


This keyword
- special variable that is created for every execution context (for every function). 
- takes the value / points to the owner of the function in which the this keyword is used.
- this is NOT static. It depends on HOW the function is called, and its value is only assigned when the function is acutally called. 
    - Method: this = <Object that is calling the method>. example (this.year) is (jonas.year)
    - Simple function call this = undefined (only in strict mode)
    - Arrow functions this = <this of surrounding function (lexical this)>. They do not get their own this keyword! They look around for the nearest!
    - Event listener: this = <DOM element that the handler is attached to>
    - new, call, apply, bind are used later in the course. 
- this will never point to the function itself, and variable enviroment. 

This keyword in practice
-
-
-
-
-

Regular functions vs. Arrow functions (this keyword)
- Objects do not create a "block" / their own scope. The arrow example has the parent scope as the global scope.
- Never use an arrow function as a method.
- Simlar this calling when using a function call. It has the this keyword as undefined. 
- to preserve the this keyword, we can define a variable (ex. const self or that = this).
- Arrow functions defined in other functions are very useful for this specfic things. 
- Arguments keyword: returns an array of the parameters. We can even use more arguments than the parameters. 
- The arrow function, however, do not recicive an arugments keyword.  
- Arguments keyword is not used as much. 


Primitves Vs. Objects (Primitve vs. Reference Types) 
- Referecnes work similar to java. If an object is defined, then another object is initilazed with object1, it is given the same refernce; therefore, an change to either object affects both the objects. 
- Reference types: Objects: Object literal, arrays, functions, etc.
- Primitve types: Number, Boolean, Null, etc.., String
- Primitve types are stored in the call stack, and refernce types are stored in the heap.
- Identifed points toward the memory address. This works the same in java.  
- changning something in the heap has nothing to do with const or let. Redeclaring the object is a different story. 
- we can use Object.assign({}, object2) to copy over an object. This only creates a shallow copy, not a deep clone. 
- for an object within an object, Object.assign(...) does not help much. 


// Section 9: Data Structures, Modern Operators, and Strings

Destructuring Arrays
- unpacking values from an array or object into seperate variables. Breaking down a complex variable into smaller variables. 
- example:  "const [x, y, z] = arr;" creates variables x, y, z, and assigns them accordingly.
- to skip over an element, we simply leave a hole. For example, const [first, , third] = resturant.categories. 
- we can switch values with destructring:
     [main, secondary] = [secondary, main];
- for this, functions inside of methods work, but if they are nested in a function, they do not work!
- we can do nested destructuing, which is basically destructring inside of destructuing. For example, 
    const [one, , [three, four]] = nested;
    console.log(one, three, four);
- we can also pre-assign values for testing:
    const [p = 1, q = 1, r = 1] = [8, 9];
    console.log(p, q, r);

Destructuring Objects
- to destructure objects, we use the curly breaces. Very similar to des. arrays, but instead we use curly braces.
    const { name, openingHours, categories } = restaurant;
    console.log(name, openingHours, categories);=
- we can change the names of the variables inside of the object by doing (name: newName, ...)
- we can also use the same setting equal logic as the arrays, for example:
    const { menu = [], starterMenu: starters = [] } = restaurant;
    console.log(menu, starters);
- we can mutate data by wrapping it in parenthesis
    const obj = { a: 23, b: 7, c: 14 };
    ({ a, b } = obj);
    console.log(a, b);
- for nested objects, we can access the data by using curly braces, a colon, then more curly braces to access the excess data. For example: 
    const { fri: {open, close} } = openingHours;
    console.log(open, close);
we can change the names of the nested varibales by using the colon again.
- we can create destructing methods inside the objects. See code * for example.


The Spread Operator 
- expands the array elements all into one
- ...arrayName manually gets all the elements and prints them.
    const newArr = [1, 2, ...arr];
    console.log(newArr);

- spread operator takes all elements from the array without creating new variables. It is only useable in places where we would write values seperated by commas. 
- we can use the spread operator to copy and join arrays, for example: 
    const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

- only use the spread opeator when building an array, or passing values into a function.
- We can escape when writing a console.log or a string but using a backslash (\) when wanting to use more quotes. 
- we can use the prompt method to display to the user. 
- Iterables: arrays, string, maps, sets. Not objects.
- the spread operator extends to objects even though the are not iterable: 
    const newResturant = { foundingYear: 1998, ...restaurant, founder: 'Jess' };
    console.log(newResturant);
where resutrant is an object, and we use the curly braces {}
- we can also make shallow copies similar to arrays be doing the following: 
    const resturantCopy = { ...restaurant };
    resturantCopy.name = 'Piazzzera';
    console.log(restaurant.name);
    console.log(resturantCopy.name);
- note that when we make copies and change a property insinde of the copy object, it does NOT affect the main. 



Rest pattern & parameters
- spread operator is to unpack elements of an array, while the rest operator is to pack elements into an array.
- same syntax, but if it is on the left side of the (=) sign, it is a rest. 
- alawys must be the last element in the destructure. 
- objects & arrays have the same syntax as prev. ([]) vs. ({})
- we can do this inside a function parameter as well
    const add = function (...numbers) {
  console.log(numbers);
    };
- this makes it so any arbitrary group of numbers is possible, not limited. 
- takes eveything and packs it into an array, which is the opposite from a spread operator.
- we can write the function parameters as a certain varibale, with a rest of the remaining.
- rest serves to collect all of the unused parameters into an array.
- spread is used when we want values sep. by commas, while rest is used when we want to use variables sep. by commas. 



Short circuting (&& and ||)
- They can use any data type, they can return any data type, and they short circuit. 
- ( || ) it will always return the truthy value. If the value is fallacy, it will check the next element.
- for example: const guests2 = restaurant.numGuests || 10; This frees up space from ternary, if-else, etc.
- there is a bug, though when using 0's
- && operators: short-circuts / ends when the value is falsy and returns that falsy. 
- When the && is truthy, then it checks all the values and returns the last operant. This is similar to the current definition.
- No need in doing extra work if at least 1 is false. 
- if truthy, the second value... will be evalualted 
- Summary:
    || will return the first truthy value found or the last value if all are falsy.

    && will return the first falsy value or the last value if all are truthy.

The Nullish Coalescing Operator (??)
- denoted by ?? and operators very similar to the ||
- the difference is that it works with nullish values.
Nullish: null, undefined.
- It does NOT include the empty string '' or 0.


Logical Assignment Operators
- 3 new logical assignment operators in the new ES2020
- ||= assigns a value to a variable if the current variable is falsy. This is the OR assignment operator. 
- ??= is the nullish assignment operator to deal with falsy values.
- we can also use the && operator to change an object's contents,
- &&= assigns a value to a current variable if it is currently truthy.  

For-of-Loop
- automatically loops over the entire array
- we create a variable (e.g. const item), then we use 'of', then we use the variable wanting the be loop over 'menu'
    for (const item of menu) {
        console.log(item);
    }
- we can use the variableName.entries() to return an seperate array for each index at which each index contains a smaller array.
     for (const item of menu.entires()) {
        console.log(item);
    }
- we can also destructue inside the for-of statement
    for (const [i, element] of menu.entries()) {
    console.log(`${i + 1}: ${element}`);
    }


Enchanced Object Literals
- we can use these literals for implelmenting other objects into objects. For example, two seperate objects openingHourd & Resturant. We can implement openHours into Resturant by doing 
    objectName, (in this case openHours) followed by a comma.
- also, for methods, we can erase the colon and function and just keep the object name. For example, 
orderPasta: function (ing1, ing2, ing3) -> orderPasta(ing1, ing2, ing3)
- we can change and compute property names aswell ** review this in the notes if needed (112)


Optional Chaining
- we can use the dot operator to continoulsy access object fields. For example, the resturant object implements an openHours object, and in there is has a day, which has a open-close, which we can acess that data: restaurant.openingHours.fri.open.
- we can use the optional chaining method by use a '?' in front of the area we are unsure of checking. If the value is not-applicable, undefined is returned. Otherwise, it returns the correct value.
    ex: restaurant.openingHours.mon?.open
- follows the nullish logic as well.
- The next operation after the '?' only happens if the statement leading up to it is true.
- we can stack the chaining: restaurant.openingHours?.fri?.open
- when using it in a for-of loop, use the brack notation for checking at each element.

    e.g. for (const day of days) {
    restaurant.openingHours[day]?.open;
    }
- use the Nullish operator when compaing values that may contain a falsy value.
*- we can use the optional chain operator with methods (object functions basically) as well. For example, 
    resturant.order?.(0,1) ?? 'No method'. This will check if the order method is defined inside of the resturant object, if so, it passes in an argument to run the method, if false, it prints out 'No method'.
- it can also be used for arrays. For example, checking if an element is empty or null, etc. 
    const users = [{ name: 'Jonas', email: 'Hello@Jonas.io' }];
    console.log(users[0]?.name ?? 'User array empty');
- we use both the ?? & ? operators in many situations just incase our value is false.  


Looping Objects: Object Keys, Values, and Entries
- Property Names
    - we can loop over objects indirectly. 
    - Use the Object.keys(objectName) to do so, it returns an array of the objects, which we can then loop over.
    - we can do fancy things with template literals for these sitautions.
    
- Property Values & Entries
- Use the Object.values(objectName) for the values of each index.
- Use the Object.entries(objectName) to get all the infromation of the object
- we can destructure an object inside of the for-of loop. For example: 
    for (const [key, { open, close }] of entires) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}
- watch for the indicies. 


Sets 
- A set is a collection of unqiue values, meaning they can never be duplicated.
- Similar styles to arrays, and they are iterables. Different from an array. Element order is irrelevant.
- Creating a set: const variableName = new Set([...]);
- if there are duplicates in the set, they will be removed in the output.
- .size gives the size of the set. NOT .length
- we can also pass in a String instead of a bracket item. The set will simply just split it up.
- .has method checks if the set contains the data. This is similar to the includes method for arrays is javaScript. 
- .add and .delete methods do exactly what they should. If added twice it only adds once, etc. due to the no duplicate rules. These add methods are similar to ArrayList functions in Java.
- There are no index's in sets. There is no way of getting values out of a set. This makes sense, though because the values are all unique and we would not need to use them. (Just use an array)
- .clear() clears the entire set of the elements
- we can loop over sets like normal
- we can pass in an array since it is an iterable as an argument for a set.
    const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
    const staffUnique = new Set(staff);
- we can use the spread operator (...) which takes all the elements outside of the set. 
- to find the total number of unique posiions, we can do the array.size



Maps: Fundementals
- Much more useful than a set.
- In maps, we can have any type of keys (Objects, arrays, etc.)
- Similar construction to set: const rest = new Map();
- we can add elements into the map by using .set(...)
- we can stack / chain together .set methods
- we can use the .get(...) method to get the output at the certain object.
- .has() checks if a map has a value. 
- .delete(key) removes a key from the map.
- .size is the size of the map. .clear() clears the elements. Similar to sets.
- we can access other arrays, etc. but we need to be weary of the reference/memory in the heap. Best to create some sort of copy.
- can be used for DOM elements:
    rest.set(document.querySelector('h1'), 'heading');
- each map needs 2 arguments - from what it seems like. It needs what it will be called, and a value. Watch the order here, it can get confusing. 
-

Maps: Iteration
- Instead of using the set method and stacking them each time we want to add something, we can just pass in an array as argument for the Map constrcutor, from there we can have many arrays inisde of the array for the function.
    const question = new Map([
    ['question', 'what is the best prog. lanuage in the world'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct!'],
    [false, 'Try Again'],
    ]);
- This speeds up the process.
- Very similar to the Object.entries structure.
- Convert an object to a map: We can pass in Object.entries(objectName) in the Map(..) argument to convert an object into a map.
- we can loop over maps the same. If there is a specifc type we want to check, we can use the typeof method.
- we can check by opening the map with the mapName.get(field we want)
- we can convert a map to an array. Form array brackets around the map, and then use the spread operator
    console.log([...question]) where question is a MAP.


Which Data Structure to Use?
- Data can be written within the source code (status messages), from the user interface (tasks in an app), external sources (webA API).
- We store collections of data in Data Stuctures
- Simple lists: Arrays or Sets
- Key/Value pairs: Objects or Maps (allows us to describle values). If we want to describe data, it is better to use these.
-Creating an array of objects is extremely common in JavaScript
- There are more data structures.

- Arrays vs. Sets
    - Arrays are when we need an ordered ;ist of values and we need to manipulate the data
    - Sets are when we need unique values. It is better when high-performance is very important. Also, removing duplicates from an array compliments.

- Objects vs. Maps
    - Objects have been the traditional key/value store. They are also easier to write and access with . & []. Use objects when we need to include functions (methods) & JSON.
    - Maps have better performance, keys can have any data type, they are easy to iterate, and easy to compute the size. Using maps is better when we need map simple key/value data. Also, it is better when we have keys that are not string (for ref: [key, value]) form. So, ['task', 'Coding'!], etc.


Working With String (P1-P3) 
- we can find an element at the index of a string using the [] notation. .length is the length of the string.
- indexOf(letter) method returns the index of the element given. lastInecOf(letter) searches for the last index and returns it. We can also search for entire strings/words, but it is case sensitive.
- .slice splits a string and returns a new string starting from the given index. We can specifiy an ending as well. (e.g. console.log(airline.slice(4, 7));). The last index is exlusive, while the first index is included. We can use negative arguments, the method will just start from the end of the string. 
- when we use new String (...) it creates a String object, and once the run is done, itis changed down to a primitve. 
- .toLowerCase() and .toUpperCase() change the case of the strings. (Similar to java)
- we can get a letter at a specific index and use the toLowerCase() & upper methods. 
e.g.    const passengerCorrect =
        passengerLower[0].toUpperCase() + passengerLower.slice(1);
- .trim removes all the white space. (new lines, spaces, etc.)
- we can also stack the methods with the dot operator: const normalizedEmail = loginEmail.toLowerCase().trim();
- Also, trimStart() and trimEnd() we trim from certain points.
- We can also replace things in a string using the .replace method. Specify two arguments (replace, replacedWith).
- .replace works for one value. replaceAll(same parameters) replaces all instances of the word. Case sensative 
- We can use, for the word to be replaced, /word/g for global. 
- .includes returns a boolean if the value is in the string.
- .startsWith(val) returns a boolean, and endsWith() returns a boolean. 
- split: splits a string into multiple parts based on a divider string. 
e.g. 'Jonas Schemedtmann'.split(' ') returns an array. This is similar to java.
- we can implement destructuring when using the split method.
- .join method joins the array. This is the opposite from split
e.g. ['Mr.', firstName, lastName.toUpperCase()].join(' ');
- we can pad data for the string to be a certain length. For example .padStart(numberOfCharacters, added);
e.g. console.log(message.padStart(25, '+').length); 
- .padEnds also works the exact same, but it is at the end (total number of character will be the first argument).
- .repeat(numberOfTimes) re-writes the string as many times as expressed. 







// SECTION 10

Default Parameters
- for functions we can set default values. Also, we can use parameters that were defined before the variable:
    const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers)

- Also, we cannot skip the parameter. But if we want to leave it as default, we can pass an argumebt as undefined. This is a way to skip a default parameter and keep it at its default value.
`createBooking('LH123', undefined, 1000); In this case, numPassenger would stay = 1.


How Passing Arguments Works: Values vs. Reference
- Passing a primitve type to a function means the value is just copied.
- Passing a refernce type will make that object changeable (same space in the heap). Need to be careful.
- Passing by value only for javascript.


First-Class and Higher-Order Functions
    First-Class Functions
        - JavaScript treats functions as values. Functions are another "type" of object. 
        - We can pass functions as arguments. Done before in the addEventListener.
        - We can store functions in variables or properties.
        - We can return functions FROM functions.
        - We can call on function method; for example, using the bind method.
        - Not in practice, this is just a concept. 
    
    Higher-Order Functions
        - A function that receives another function as an argument, that returns a new function, or both. For example, 
        btnClose.addEventListener('click', greet). where greet is the call-back function.

        - There are also functions that return other functions; for example, 
        function count() }
        let counter = 0
        return function () {
            counter++
            };
        }

        - There are actually higher-order functions. 












*/
