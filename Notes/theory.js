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
- indexOf(letter) method returns the index of the element given. lastIndexOf(letter) searches for the last index and returns it. We can also search for entire strings/words, but it is case sensitive.
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


Functions Accepting Callback Functions
- every function has a .name property.
- the method call-back's are very very common.
- Call-backs allow use to create abstraction. 
- These are very very important. 

Functions Returning Functions
- We can return a function inside a function. From there, we can declare a variable and assing it to a function call. Then it returns a function and we can call that returned method like normal
        const greet = function (greeting) {
            return function (name) {
             console.log(`${greeting} ${name}`); // greeting comes from greet function
                };
            };

        const greeterHey = greet('Hey');
        greeterHey('jonas'); // t


- We can combine this if we do not want to declare a variable:
    greet('Hello')('Jonas'); // calls the function inside of the function.
- we can rewrite this as an arrow function: 
ex:  const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

- this works since we are returning the name. 

        greet1('Hey')('Jonas'); // this calls it



The Call and Apply Methods
- this keyword makes a return.
- In a regular function call, the this keyword points to undefined. (in-strict mode)
- Call, apply, and bind help us to explicity point the this keyword to an object
- Call
    - We can use the call method to manually set the this keyword. For example, book is a function, eurowings is an object, and the remaining arguments are parameters:

 ex:    functionName.call(objectThis, arguments, ...);
        book.call(eurowings, 23, 'Sarah'); 
- These call methods set the this keyword for whatever we pass as the first arguement. 
- The objects the extend the function must be structured the same with the same value names inside due to the this calling. (if needed)
- Apply
- The apply method does the exact same thing as the call method. However, instead of receiving a list of arugments, it takes an array of the arguments. 
 ex: const fligthData = [583, 'George Cooper'];
     book.apply(swiss, fligthData);
- we can use the spread operator in the call method which will unpack the elements from the object. (in ways, this is easier to do than using the apply method):
 ex:        book.call(swiss, ...fligthData);




 The Bind Method
 - Using the .bind method will not call the function attached to it. Instead, it will return a new function with the this keyword inside the parameter always attached to it. 
    ex: const bookEW = book.bind(eurowings); 
        bookEW(23, 'Steven');
    returns a new function with bookEW function always attached to the eurowings this keyword. From there, we can go back to the original parameters since the function is the same this keyword
 - Formatting: const newFunction = objectFunction.bind(object);
 - We can also use the bind method to create a function for one,...,n specifc things. For example if the objectFunction has two parameters, we can define one of the aruguements in the bind method, and when it is called, only one more arguement will be need since the first one is set. 
            ex: const bookEW23 = book.bind(eurowings, 23);
                bookEW23('Jonas Schem');
 - Allows use to set in stone certain arguments (like a flight number, for example).
 - This is a pattern of partial application: which means some of the value are already set / pre-defined. 
 - In an event listener function, the this keyword always points to the element of which the event handler is attached to. 
- Do this instead: 
    document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

- Partial Application: presetting parameters.
- The first argument in the bind, apply, and call methods is the this keyword, so if we do not care about it and want to preset values, fill the space with 'null'.
- We can return a function that returns a value, inside of a function:
ex: const addTaxFunction = function (rate) {
    return function (value) {
    return value + value * rate;
  };
};
- But, using the bind method makes this easier. 



Imediatley Invoked Function Expressions (IIFE)
- We want to be able to execute a function for one time use, and never use it again.
- Wrap the function is parantheses are call it before the semi colon. It turns the function into an expression.

ex: (function () {
  console.log('This will never run again.');
})();

ex: arrow: (() => console.log('This 2 will never run again'))();

- data is encapsulated in these functions. They are not accessible outside of the function. It is important to hide variables, and scopes are helpful for this. 
- let & const variables declared in a scope are also not accessible outside of the block (var does not matter tho).


Closures: Hard concept!
- Not explicity used like array's and functions, they happen normally. 
- Closure makes function remember all the variables that existed at the functons birthplace, by the time it was created.

ex: const secureBooking = function () {
    let passengerCount = 0;

    return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
    };
    };

    const booker = secureBooking(); // this returns the new function and saves it in the booker variable.

    booker(); // it is still able to access the passengerCount variable in the secureBooking function
- A function has access to the variable enviroment (VE) of the execution contect in which it was created even after it is gone. 
- Closure: VE attached to the function, exactly as it was at the time and place the function was created. 
- Thanks to closure, a function does not lose access to the variables that were defined during its birthplace. 
- JS will look at the closure before looking at the scope-chain.
- A closure gives a function access to all the variables of its parent function, even after the parent function has returned. The function keep a reference to its outer scope,, which preserves the scope chain throughout time. 
- A closure makes sure that a function doesn't lose connection to the variables that existed at the function's birthplace. 
- Best anology: closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created. Then, whenever a varibale cannot be found in a function scope, JS will check the backpack and get the variable from there. 
- Again, we do not create these manually. Also, there is no way to explicity access these variables. 
- We can access the variable environment by using (console.dir(variableName)). If it has double brackets, it is something that we cannot access in our code. 


More Closure Examples
- we can set timers, in which they call the program calls the function later-literally.
- setTimeout(functionExecuted, certainTime)
ex: setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

- Anything under a timer will not wait until the timer is done to run. It will compile, then once the timer is ready, the data inside of it will also run. 
- Closure also includes the arguments. 




// SECTION 11: Working with Arrays

Simple Array Methods & The New At Method
- Arrays are also objects. 
- .slice(to, from) or just to. This returns a new array, which is a copy, not the original array. We can use a negative argument to start from the end of the array. We can also create a shallow copy with this: slice() with no arguments. 
- .splice() mutates the original array. It will return the elements in the range argument in a seperate array; however, it will also remove the elements in that range from the original array. Functions similary to .slice, but this method actually edits the array. If there is a certain range, it is formatted as follows: (index, deleteCount) where index is the starting element and deleteCount is the number of indices to eliminate after the index. 
- .reverse() reverse the array, but it does mutate the array. This means that it actually changes the array, it does not return a copy. (Important)
- .concat() simply concatinates the array with another array. e.g. arr = [1,2,3] and arr2 = [4,5,6]. arr.concat(arr2) returns [1,2,3,4,5,6]. This method does not mutate the array, it creates a copy. We can use either the concat method, or the spread operator, both function the exact same.
- .join() joins all the array elements and seperates them by the seperator specififed (returns a string) e.g. (join('-')). 
- .at(index) returns the element at the index. We can also start backwards to find the last element, for example, arr.at(-1). This and the brack notation function the same way, it is just prefernce. The at method is much better than bracket notation when wanting to use chaining. This method also works on strings!

Looping Arrays: forEach
- .forEach(function ()) in each iteration, it should do what is in the function. We can provide the loop with parameters as well. 
- for each method requires a call back function in order to tell it what to do (it is a higher order).
- loops over the array and calls the call back function for each iteraton
- we can also put parameters in the forEach function: arrayName.fiorEach(function(param)) {}
- the forEach function passes in the current element, index, and the array/
- first param: element, second: index, third: array looped over. 
- break and continue statements do not work using forEach loops. 


forEach with Maps & Sets
- Maps: same logic as before (value, key, map) inside of the forEach function.
- sets do not have a key/index. Therefore, we still use the 3 params., but we just use an _. 


Data Transformations: map, filter, reduce
- Map method: creates a brand new array based on the original array. Loops over like the forEach method, but also creates a copy after an operation.
- Filter method: returns a new array containing the array elements that passed a specifed test conditon.
- Reduce method: boils/reduces all elements down to one single value (e.g. adding all the elements together) which is then returned. 

Map Method
- Very similar to the forEach method.
- It will return a brand new array.
- We have to return for each iteration in the callback method. 
For example: const eurToUsd = 1.1;
            const movementsUsd = movements.map(function (mov) {
            return mov * eurToUsd;
        });
        - this will return a new array of the elements modifed. 
- More in line with functional programming. 
- Important to ackowledge that the arrow does return the value after. 
- Two return statements is fine because only one will run.
- Arrows activley return. 
For example: 
const userName = user.toLowerCase().split(' ')
  .map(name => name[0]) // same as function(name) { return name[0];}
  .join(''); // split returns an array and we can call the map method on t

- When looping over something and just wanting the element/val, just use forEach, no reason to return a copy with the Map method. 



Filter Method
- We structure it the same as a forEach and Map method; however, all we do is return a condtion. From there, a new array is filled with the elements that passed the test. 
- We can use arrows the same way. 
For example: const withdrawals = movements.filter(function (mov) {
            return mov < 0;
            });

        // Arrow version
        const withdrawalsArrow = movements.filter(mov => mov < 0);




Reduce Method
- will return 1 value.
- Similar logic to a function inside of the reduce method; however, it has an extra param for the first one. This extra param. is an accumulator. 
- In each loop iteration, we return the updated accum. 
- Also, the reduce method has a second paramter. First is the function, second is the counter starting value (e.g. 0)
- .reduce(function () {}, countStart)
For example: 
    const balance = movements.reduce(function (accum, curr, i, arr) {
    return accum + curr;         
      }, 0);
- When wanting to use a for loop, we need to use external variables for sum. Using these new methods, though, eliminate these extra variables. 
- We can use the arrow method with these again.
- Don't forget that the first argument in the reduce method is the counter.


The Magic of Chaining Methods
- We can chain methods, like others, using the dot operator.
For example: const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((accum, mov) => accum + mov, 0);
- We can check current arr.
- Do not overuse chaining. It can cause performace issues if the array is huge.
- Also, it is a bad practice to chain a method that mutates an array.
- Need to use the arr.length last param. effectivly. 


The find Method
- .find() accepts a conditon, call-back function as the method loops over the array. 
- Just like he filter method, the find method needs a call-back function that returns a boolean. 
- Using the filter method returns the first element found satisfying the confition. 
- only returns the element itself. On the other hand, the filter method returns the array.
- using find we can find an object in thearray,
*- it can return an entire object!!
- goal is to find exactly one element. 
ex: const account = accounts.find(acc => acc.owner === 'Jessica Davis');


The findIndex method
- Works very similar to find, but instead it returns the index of the found element, and not the element itself.
- To delete something from an array, we use the splice method. But to find the index, we use the findIndex method.
- It functions the same: .findIndex(higher function) but instead it returns the index that satifies the statement inside, while the .find() method returns the element. 
- It will return the first index in the array that satisfies the conditonal.
- this is similar to the indexOf method. The difference is that it returns a simple thing. On the other hand, for the .findIndex() method, we can pass in a function of what to check more specifically. 


Some and Every
- .includes(value) returns true or false. This tests for equality
- .some(higher order function) we can specify a condtion to check instead of strcit equality. For example, 
      const anydeposits = movements.some(mov => mov > 0); // checks if any of the deposited values are positve
- .every() only returns true if every element passes the test in the call-back function.    
      console.log(account4.movements.every(mov => mov > 0));
- only returns true if all the elements in the array satisfay the conditon.


Flat and FlatMap
- arrayName.flat() flattens the array, but it only goes one level deep. 
- So, if the array has a nested array, it will flatten the entire array to one single array.
- We can edit how deep the flat method goes (1 nested, 2, etc.) by adding it in the argument. For example, arrayName.flat(2) goes two array's deep.
- .flatMap combines a flat and a map method into one method, which is better for performence.
- Note: flatMap() only goes one level deep, so if we need to go deeper, we still need to use the .flat() method.


Sorting Arrays
- .sort() method mutates the array. It also does the sort method based on strings. So, it makes everything a string then sorts it. This is confusing when attempting to sort numbers. 
- We can sort numbers by using a call-back function (similar to map and those).
      arrayName.sort((firstNum, secondNum) => {
        // return < 0, A, B (keep order)
        // return > B, A (switches order) });

    // Ascending Order
    movements.sort((a,b)_ => {
    if (a > b) return 1; // switches order
    if (a < b) return -1; // keep order

    });

    // Descending Order
    movements.sort((a,b)_ => {
    if (a > b) return -1; // switches order
    if (a < b) return 1; // keep order

    });


More Ways of Creating and Filling Arrays
- We can create an empty array with a certain length. This is similar to java. 
    const x = new Array(size);
- .fill() fills the array with the value given. Like other methods, it has a range if needed: .fill(value, from, to);
- Using the .fill() method will mutate the array.
- we can use the Array.from method, which calls the Array constructor
- if we do not want to initliaze an array size and then use the fill method, we can use:
    Array.from( {length: lengthWanted}, () => value); we can use indices similar to the map method, etc. 
    const z = Array.from({ length: 7 }, (_, index) => index + 1);
- Use an underscorer if the variable is not used.
- document.querySelectorAll returns an array like structure. 
- Again, the Array.from starts with the length or array like strcture, then we can add call-back function if we want as the next parameter. For example,
    const movementsUI = Array.from(
        document.querySelectorAll('.movements__value'),
        ele => Number(ele.textContent.replace('€', ''))
    );


Summary: Which Array Method to Use?
- Ask the question, what do I want: mutate the original, new array, index, element, included, new string, new value, loop over, etc.
- Mutating: .push(), .unshift(), .pop(), .shift(), .splice(), .reverse(), .sort(), .fill()
- New Array: .map(), .fliter(), .slice(), .concat(), .flat(), .flatMap()
- Index: .indexOf() [value], .findIndex() [condition]
- Element: .find() [conditon]
- Includes: .includes() [value], .some(), .every() [condition]
- String: .join()
- Transform: .reduce() [accumulator]
- Loop: .forEach (no new array, just loops over it).

Array Methods Practice 
- ++ suffix returns the previous value and then increments (count++)
- ++ prefix increments the value then returns it (++count).
- This is similar to java and similar with other operaotrs (--)
- We can go in-depth and create an object as the inital accum; from there, we can enter the object using the accumlatorName.property. We can destructure to get the values seperatley aswell. 
For example: 

    const { deposits, withdraws } = accounts
    .flatMap(acc => acc.movements)
    .reduce(
        (sums, val) => {
        val > 0 ? (sums.deposits += val) : (sums.withdraws += val);
        // bracket notation: sums[val > 0 ? 'deposits : 'withdrawals'] += val
        return sums; // we need to return the accumulator in the end.
        },
        { deposits: 0, withdraws: 0 } // creates an object as initial and enters inside of it using the accum (this works since the right param is the initial for the accm)
    );


Project-Bankist (Section 11)
- .insertAdjacentHTML(position, text). It has before/after-begin and before/after-end (check mdn api).
- .innerHTML returns everything including the html tags (similar to textcontent) w/ extra stuff. 
- beforeend, each new element would be inverted / after the prev.
- We can use .preventDefault from submitting.
- We can use an equal to an equal to assign two values the same thing(    inputLoginUsername = inputLoginPin.value = '';)
- We can use optional chaining (Nullish.. Operator) (?) to check if the value even exits 
- use the .value method to get the value inputed (like normal). 
- Convert things to numbers by casting. 
- use eventListeners for btns.

// SECTION 12

Converting and Checking Numbers
- All numbers in js are displayed as floating point numbers. 
- Some errors in js for some fractions; for example, 0.1 + 0.2 = 0.30004...
- Casting with Number or a + sign does type conversion (changes a string to a number)
- We can use parsing similar to java: Number.parseInt or Number.parseFloat
- We pass in 2 arguments (e.g. 10 for base or 2 for binary)
- We could also just do parseInt for example because it is a globAL FUNCTINN
- Also, we can put other letters in the parse & js will try to depict the nmber. 
- Number.isNan checks if a value is a number or not
- Number.isFinite is great for checking if a value is a number
- Number.isInteger() checks for a number.

Math & Rounding
- Math.sqrt() calculates the sqaure root of a function (or, we could use the ** operator).
- Math.max() & Math.min * Math.PI do their respective jobs. 
- Math.random() outputs a value between 0 & 0.999, but we can change this with constants. For example, adding one, mulipling by 6, etc.
ex:    Math.trunc(Math.random() * 6) + 1)
- Math.trunc truncates a value down similar to java.
- Math.round() rounds to the nearest integers.
- Math.ceil() rounds up, Math.floor() rounds down.
- Floor works better than trunc with negative numbers. E.g. -23.3 in trunc rounds to -23 while in floor it is -24.
- .toFixed(decimalMoves) returns a string of the decimal. The argument specifies what to round to.
- check out the mdm documentation.

Remainder Operator
- Same operator as java: % symbol/
- Even number: number % num = 0
- Odd Num: number % 2 != 0
- good for every n-th time.

Numeric Seperators
- We can place underscores within our number to make it easier to understand.
For example: const diameter = 287_460_000_000;
- We can not place an underscorer at the beginning, end, and after or before a decimal. Also, we cannot place two in a row.
- We cannot convert Strings to numbers if they have an underscorer / numeric seperator. 


Working with BigInt
- Anything past (Number.MAX_SAFE_INTEGER) may be wrong. This is why we use bigint.
- adding an 'n' to the end of a larger than max int number makes it work.
- Constrcutor BigInt() should mainly be used with small functions.
- We cannot mix and match int with bigInts
- Exceptions of this are relation operators (> ==, ===, etc.)
- Divisons: 10n /3n rounds to the nearest bigint e.g. 3n.
- Not used that much in practice, but it is good to know about. Also, we cannot use Math operations on them.

Creating Dates 
- We can use the new Date() constrcutor, and we can pass in an argument to Date('...') & JS use it.
- Javascript autocorrects to the next day if our input is wrong. For example Feburary 31st will change to a day in march...
ex: const future = new Date(2037, 10, 19, 15, 23);
- We can pass in the year, month, daY, time sep in hours, mins, secs, etc.
- We can pass in the amount of millisecs after unix time wzs created (1970)
- Months are zero index; e.g. November is displayed as 10 instead of 11. 
- Also, getDay() returns the day of the week number (mon: 0 sun: 7).
- getters & setter methods inside the notes: this means the data is mutatable. 

Adding Dates to Banksit
- when padding, we implement the final amount of characters followed by the value if the character are not fullifed. If the current string is equal to the pad specifier, nothing happens. 

Operations With Dates
- We can cast a number or + to a date to get it in milli seconds. 
- We can subtract dates and with proper hour coversion, we can get the difference in days: (1000 * 60 * 60 * 24)

Internationalizing Dates
- We can use the Intl object to edit the date. new Intl.DateTimeFormant('lang-region').format(dateWeProvide). Using this will format the dates to match the region (e.g. U.S. vs. G.B)
- Use the ISO Language codes.
- For the second argument we can put the options object in the specificces the time, day, year, etc.
- for the month we can change it from numeric, longName, 2-digit.

ex:
    const now = new Date();
    const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
    };
    labelDate.textContent = new Intl.DateTimeFormat('ar-SY', options).format(now);

- We can use navigator.language to get the language from the users' browser.
- we can define a users language as a locale.
- Use the Intl class in the mdn.


Internationalizing Numbers
- Basic formatting: new Intl.NumberFormat(locale / lang chosen).format(numberToFormat).
- We can also, like dates, define an options object and specifiy things inside. For example: {
    style: 'currency' / units / percent
    unit: type of unit
    currency: type of money (not defined by the locale).
}
- The options object we defined previously is the second arugment to the Intl.NumberFormat(arg, arg2) call and using the.format we can format the data. 
- We can check out the MDN doucmentation for things we can change & set in the options obejct. 
example: 
    const formattedMov = new Intl.NumberFormat(account.locale, {
      style: 'currency',
      currency: account.currency,
    }).format(mov);
- Lots of potential in the api. Check MDN.


Timers: setTimeout & setInterval
- setTimeout() takes in 2 argumnets. First, a callback function telling set what to do when called, and second the time in milliseconds it should wait to be called. 
- For example, setTimeout(() => console.log("Hello"), 3000 (3 secs in real time)).
- For things run after this line, they will like normal, and after the timespan, the setTimeout() call will also run. The things after do not wait for the set... to run before they run. 
- Any argument after the delay can be used in the inner function.
ex: setTimeout((ing1, ing2) =>
    console.log(`${ing1} are my fav topping, but ${ing2} is really good too!`), 3000, 'Olives','Spinach');

- We can use the spread operator the exact same way to unpack the array.
- We can use the clearTimeout(timer) to stop and clear the data that should be displayed. 
- setInterval takesa callback function with a dely, but it runs it nonstop
ex:  setInterval(function () {
    const now = new Date();
    console.log(now);
    }, 3000);


// SECTION 13 ADVANCED DOM & EVENTS

How the DOM Really Works
- DOM is an interface of the browser & JS.
- It allows us to make JS interactive with the browser. This stems from the DOM tree.
- DOM is a very complex API full of nodes.
- Every node is represented as an object in js. 
- A node gets element, text, comment, doucment type. Each element will be represtned as an object, and from there that class has subclasses (check the tree). 
- Inherticance: all the child types have access to the parent types and its current type. This is similar to OPI java. 
- Any HTML element has acesses to .addEventListener(), .cloneNode() or .closest() methods. 

Selecting, Creating, and Deleting Elements
- We can do document.documentElement (head, body, etc.) to get the html things.
- To select more than one html element, use document.querlySelectorAll. This returns a node list of the the elements matching the selector. 
-
- document.getElementsByTagName(...); returns a live HTML collection, which is different from a node list. It updates automatically, which does not happen in a node list.
- document.getElementsByClassName(...) functions simialry to the others and returns a live collection. These are nice, but the query selctor does the job similary. 
- .insertAdjacentHTML is a quick and easy way to create elements. Check notes & MDN
- document.createElement('tagName') creates and returns a dom element that we can save somewhere. It is not yet in the DOM itself, but can use it. IF we want it on the page, we must manually insert it. 
- We can use .classList.add(cssElement), etc. to add, remove, etc. something to the DOM element. 
- header.prepend(..) inserts the element as the first child of the outer element. 
- .append(..) inserts the element as the last child of the outer element.
- The element can not be at two places at once, the most recent one is used. DOM element can be use at one place at one time.
- we can use header.append(message.cloneNode(true)) to display the DOM element more than onde (use .cloneNode(true), this creates a copy).
- .before() & .after() display as noted.
- .remove() removes the element & the old way is .parentElement.removeChild(...);

Styles, Attributes, and Classes
- We can change CSS styles by using .style.certainCSS (such as width, backgroundColor, etc.)
- We cannot get a style that we did not manually set ourselves in the js file. For example, we cannot print a style that may be hidden in a css class or may not even exist.
- getComputedStyle(Selector.elementNeeded); can access the css file and return the element needed if not set in the js file.
- .setProperty we can pass in the name of the value and the property 
- We can also use .setProperty to all propertes (color, width, etc.)
- If we select a logo for example, we can access the properties if they are standards (e.g. src, alt, className. etc.) -> we can do logo.src, ...
- We can also set these values / edit them. For example, logo.alt = ...
- If we want to select non-standard properties, we have to use the getAttribute(propName) method. 
- To set / create these types of attributes, use selectedElement.setAttribute('propName', 'What it should be set to')
- Sometimes, using the getAttribute() is the safer and better method to use due to relative vs. absolute links. SOme return abs. link, while the relative is exaclty how it is written in the html.
- For data attributes, they begin with data-name-of-value. With data attributes, we can use selector.dataset.variableName to get the value. Note, we use camelCase even if the variable name uses dashes similar to what is shown above. 
- Use classList because they allow us to add and remove classes by there names with interfering with classes that are already there. 


Implementing Smooth Scrolling
- selector.getBoudingClientRect() returns the current portion of the page with a Dom object (x, y, width, top, etc/)
- pageXOffset & pageYOffset are the x & y scroll coords
-  document.documentElement.clientHeight,
    document.documentElement.clientWidth
- window.scrollTo(from, to) this is relative to the viewport, though.
- To combat this, add the xOffset to the left & the y offset from the top. Therefore, it will not depend on the viewport. 
- To make it scroll smoothly, we need to do the same thing, but pass in an object instead with a behavior: 
    
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
});

- For simpler standards - only applicable in modern browsers - use .scrollIntoView({behavior: ...})


Types of Events and Event Handlers
- mouseenter is similer to the hover in css. When a user hovers over the spot, the event listener is run.
- There are many event handlers in mdn.
- Old school method: we can use onNameOfEvent (onmouseenter) & set it equal to the function.
- Benifits of using an addEventListeners: 1. does not override other prop callings. 2. We can remove eventListeners with .removeEventListner() but we have to export the function
- the remove does not need to be in the exported function. 
- Also, the remove can be within a timer.
- we can also just edit within the html file (e.g. <h1 onclick ="alert('ccc)"></h1>), but this should not be done.

        const h1 = document.querySelector('h1');
        const alerth1 = function (e) {
        alert('addEventListener: Great! You are reading the heading ;)');

        h1.removeEventListener('mouseenter', alerth1);
        };

        h1.addEventListener('mouseenter', alerth1);



Event Propagation: Bubbling And Capturing
- First, it starts with a capturing phase from the doc, to the html, to the body, ... down the class ladder.
- Once it gets to the correct element, the targeting phase beings & an eventListener is run.
- From there, once the click is run, there is a bubbling phase which passes through all the parent elements but not the child ones. 
- As the event bubbles through the parent elements, it is as if the event happened in that parent element: this means that if we attached something to a parent of the lower parent, it would be run twice. Therefore, this is very important for patterns.
- We have capturing specific events. 
- Also, not all events have capturing and bubbling.
- We call this propogation.

Event Propagation in Practice
- We can apply the random integer in range method to many different scenarios; for example, selecting a random color.
- Bubbling logic: so we first capture down to the lowest call, then we bubble back up. When we bubble back up, it is as if the event happened in the parent element.
- In this case, the links side header is run twice becasue the link event listener already indirectly calls it once. 
- This is the same logic for the entire nav, which would be run 3 times in this case. 
- If we check the target with event.targer (from the function) we can see that they are all from the lowest in the scope due to bubbling. 
If we use e.currentTarget, we can find the actual one called, which is equal to the this keyword.
- currentTarget === this keyword in any event handler.
- we can use e.stopPropagation() to stop the bubbling and capturing; however, this is not a good idea to do, typically. 
- Capturing phase is usually irrelevant, but if do want it, we can set a third parameter in the addEventListener set to true to check for capturing events instead of bubbling events. 

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgrondColor = randomColor();
    console.log('LINK', e.target, e.currentTarget);
  },
  true
);
- listens for events as it travels down from the DOM, rather than traveling up from the DOM.


Event Delegation: Implementing Page Navigation
- anchors automatically move the page in html
- alot better and more efficent.
- We simply added one big eventlistener, then we determined where the clicks came from.
- NEED TO REVIEW.

DOM Traversing
- Query selector & queryselctorall go as deep as they need to be.
- using h1.childern gives us a live html collection of the direct children.
- .closest is very important.
- We can think of closest as the opposite of query selector. Query looks as deep as it can for the child, while closest looks at high as it needs for parents.

Building a Tabbed Component
- remove active.
- active tabs & content area.
- Guard clauses.
- Event delegation.

Passing Arguments to Event Handlers
- mouseenter does not bubble, while mouseover does. 
- Opposite of mouseover is mouseout, opp. of mouseenter is mouseleave
- .closest().
- for call back functions when we want to use another method, use .bind and pass in the "argument", which is techinally setting the this keyword.
-ex: nav.addEventListener('mouseover', handleHover.bind(0.5)); // this is set to 0.5 or 1 based on the argument

Implementing a Sticky Navigatin: The Scroll Event
- Scroll is event is not very efficent and should usually be avoidded. 
- we can use the window.scrollY to add a sticky class.
- selector.getBoudingClientRect() returns the current portion of the page with a Dom object (x, y, width, top, etc/)-

The Intersection Observer API
- IntersectionObserver requires a call back function and an options object.
- we call it using the .observe()
- Whenever the target (section1) is intersecting the viewport (root) at (threshold percent), the callback function is called with two arguements (entries, observer)
- We can have multiple thresholds. So the entries argument is an array of the thresholds
- So, when calling .observe, we used section1 as our parameter; therefore, IntersectionObserverEntry is only run during that section. Also, through the thresehold's given. 
- root: null, since we are intereseted in the entire viewport,
- rootMargin: pixels that...

Revealing Elements on Scroll
- .unobserve is the opposite of observe, which is good for pereformence. 
- .classList, like previously, can remove and add hidden sections.
- Another used case of the Intersection Observer APi
ex: 
            const allSections = document.querySelectorAll('.section');
            const revealSection = function (entries, observer) {
            const [entry] = entries;
            console.log(entry);

            if (!entry.isIntersecting) return; // if not intersecting, it fails
            entry.target.classList.remove('section--hidden');
            observer.unobserve(entry.target);
            };

            const sectionObserver = new IntersectionObserver(revealSection, {
            root: null,
            threshold: 0.15,
            });

            allSections.forEach(section => {
            sectionObserver.observe(section);
            section.classList.add('section--hidden');
            });


Lazy Loading Images
- The idea is to put a very small "lazy" image in the src under the img tab, and once scrolled to, replace this with the real image under the data-src. We hide the lazy with a CSS blur, and replace it when the time comes. 
- We can specifally query select something under a tab by, for example, 'img[data-src]' or whatever name is spec. needed.
- to access data-sets, we need to use .dataset: 
e.g.  entry.target.src = entry.target.dataset.src;
- for rootMargin, just mess with it.

Building a Slider Component, Part 1 & 2
- using the <slider></slider>, <slide></slide> is very useful for future projects.
- we can use the translateX(..)% for translating / moving the data left or right.
e.g.: slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`)
- beforeend, adds it as the last child for the insertAdjacentHTM
- insertingAdjacentHTML() can insert new HTML elements.


Lifecycle DOM Events
- we can use beforeunload to ask the user if they are sure they want to leave the site.
e.g. 
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});
- There is also the load and DOMContentLoaded features.
- Check the notes

Efficent Script Loading: Defer and Async
- Up until now, we have used regular script tag: <script src =...></script>
- There are new features now, though: async & defer
<sript async src></sript> & <script defer src></script>
- Regular tag in the end: Parsed, fetched, executed (DOMContentLoaded)
- Async head: Scripts are feteched asyncrongly and exectued immenidatly. DOMContentLoaded does not wait for an async script. Scripts not guranteed to execute in order. When order does not matter, this may be the best
- Defer head: scripts are fetched asybcibsky and exceuted after HTML is compleyely parsed. DOMContentLoaded event fires after defer script is exectued. Scripts are executed in order. This is the best overall solution.
- Async & Defer do not make sense at the end. 

Project Bankist Website 
- Node list is not an array, but it has a forEach method.
- The better solution is to use event delegation. This uses the logic of bubbling.


SECTION 14 ----------

What is Object-Oriented Programming? (OOP)
- Programming paradigm (basedon style) based on the concept of objects.
- We use objects to model real-world or abstract fts.
- Objects may contain data (prop.) and code (methods). By using objects, we pack data and the correpsonding behavior into one block.
- Objects are self-contained pieces of code.
- Building blocks of applications and they interact with one another
- Interactions happen through public interface (API): methods that the code outside of the object can access and use to communicate with the object.
- Developed to organize code and make it more flexible and easier to maintain (avoiding spag. code).
- Class is a blueprint to create new objects based on the rules designed in the class (abstract set of rules). For example, a blue print. Abstract class, similar to java.
- Instance: real object used in the code, which is created from the class. For example, a house created from the abstract blueprint.
- Abstraction, Encapsulation, Inheritance, Polymorphism are ways to create a class blue print.
- Abstraction: ignoring details that don't matter, allowing us to overview. For example, creating a class about a phone with only the important details (screen, home btn, etc.)
- Encapsulation: keeping some properties and methods private inside the class. So, they are no accessible from outside the class. (private ..., similar to java). Prevents external code from accidently manipulating data. Methods can also be private. Very similar rules to java.
- Inheritance: Parent class and child class that extends the parent class. So, the child class inherites all the properties and methods from the parent class, but can also have its own methods & data. This is also similar to java. 
- Polymorpihsm: Child classes can inherit and still override methods (using the same name, etc.)


OOP in JavaScript
- Objects are instantiated from a class.
- Prototypes: all objects are linked to a prototype object.
- Prototypal Inheritance: all objects that are linked to a prototype can access all the methods and behaviors linked to that prototype. Different from normal.
- Behavior is delegated to the linked prototypes. Delegation.
- Normally, in classical OOP, methods are copied from class to all instances, which is different from oop.
- We have seen this already through, for example, the map method for arays.
e.g. Array.prototype.map(), in which Array.prototype has access to all. So, technically, the map method is accessible to any array.
- How to implement OOP:
    - Constructor function: create objects from a function, similar to Arrays, Maps, Sets, etc.
    - ES6 Class: Modern alternative, work exactly like constructor functions, do not behave like classical oop (nicer syntax).
    - Object.create(): easiest and most straightforward way of linking an object to a prototype object. 



Constructor functions and the new operator
- Constructor is used with the new operator. Similar to java.
- Arrow functions do not work as their own constructor due to no this keyword.
- calling it we use the new operator
- A new empty object is created. The this keyword = empty object. We initalize the values given (similar to java), as the object is linked to a prototype. From there, the function automatically returns the new object. 
- The Person is basically the prototype which creates the objects. This is similar to js. Also, the argument with the new keyword input is also similar to js. Kind of like a constructor.
- the instanceof method is similar to the one in OOP java.
- We should never create a method inside a construcutor function.
- e.g.:  const Person = function (firstName, birthYear) {
         // Instance Properties: they will be avaliable for all
        this.firstName = firstName;
        this.birthYear = birthYear;
        };
     const matilda = new Person('Matil', '2018');




Prototypes
- All objects created thoguh the same constructor, they have access to all the methods defined on the prototpye propery/.
- So, for example, we can use the className.prototype.propName = ...
EX: Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
- This is much better than redefining it many times.
- Any object has access to its prototype. This is very similar to classes in a way. For example, a Person class in java where a instance can use the clas methods.
- Person.prototype.isPrototypeof(...)
- .__proto__ proto property value is set to the prototype property of the contructor function.
- We can also add a property of some sort. For example, species: Person.prototype.species = 'Dog'.
- This would go under the .__proto__ object so it wouldn't directly inside of the jonas object. It has access to it by jonas.species , but if we use the
.hasOwnProperty, we see that it returns false.

Prototypal Inheritance and The Prototype Chain
- Constructor function has a prototype property.
- There is also a .constructor which points back to the object.
For example, if we had Person.prototype.constructor, it would point towards the constructor function
- Prototype is not of Person, but of the objects created by Person.
- New operator: 1. empty object is created, 2. this keyword in the constrcutor is set to the new object, 3. the new object is linked to the constructor function's prototpye property: .__proto__ (always points to an objects prototype), 4. the new object is returned from the constructor function call.
- This is different from the object.create() method.
- If js does not find a method in the object, it will check the objects prototype and inherit it from its prototype "parent".
- Remember Person.prototype is an object itself, which means it has a prototype: Object.prototype which points to the Object() constructor.
- Prototype Chain: similar to the scope chain, when Object's prototype points to null. This, in ways, is similar to java as the object prototype/class is the highest. 
- e.g. with .hasOwnProperty() is contained within the Object.property's built in methods; therefore, we can use the methods from the object prototype aswell.
- For example, a child class, then a parent, then the object hieracy, etc. 


Prototypal Inheritance on Built-In Objects
- console.dir returns at the person function with the protoypes, etc.
- if we use the .__proto__ on arrays, we can see all the methods that are inherited.
- It works the exact same as previous.
- We can add methods to a built in object; however, this is generally not a good idea: 1. the next js. update may include a similar named function but it might work differently. 2. Bad for a team of developers. 3. can create bugs.
- Functions have prototypes as well.


ES6 Classes
- class expression: const personc1 = class {}
- class declaration: class C1 {}
- inside the decleariton, we define a constructor() like how we did prevoisly.
- From here, we can really define anything (functions, etc.). This makes it much easier to define methods as we don't have to randomly .prototype...
- 1. Classes are not hoisted. We cannot use them before they are decleared.
- 2. Classes are first-class citizens.
- 3. Classes are executed in strict mode.
- example: 
- class PersonC1 {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property.
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

Setters & Getters
- We can use getters and setters like in java. We can make them the same name differed by get, set. With that said, setters need parameters. 
- Need to use get or set keywords following by the functionName.
- Everytime we pass in, for example, a full name the setter is called but to avoid bugs, we use a _ before the variable we are trying to assign and we use a getter.
- We don't need to user getter or setters, but they are helpful.

Static Methods 
- Certain methods are attached to a constructor itself rather than to the prototype. For example, Array.from, or Number.parseInt().
- These are very similar to java.
- For the following example, we could not do jonas.hey() because it is not defined in the prototype
Person.hey = function () {
  console.log();
};
Person.hey();
- for implementing static functions in a class, use the static keyword. When calling it, use the className.theFunctionName()
- Instance methods are not static (the other methods).


Object.create 
- No constructor or new operator.
- Links to the prototype that we pass in. 
- We are basically defing the prototype and using object.create to make it an object in ways.
- We manually set the prototypes of objects to whatever we want.
- Same prototype chain (.__proto__)
- This is the least used way.
- We need Object.create() to link classes.
- Object.create() creates a new object with the prototype object we pass in.

Inheritance Between "Classes": Constructor Functions
- Next up, we will be doing real inheritance between "classes".
- For example, Person class, student class. Where the person is a parent class (generic) and the student class is a child class (specific).
- Can be done with all 3 inheritance methods.
- For subclasses we use the same parameters, but we add extra items for the specific case.
- To call the parent constructor for these types of functions, we need to use the .call method to specifiy the this keyword:  
        Person.call(this, firstName, birthYear);
- For inheritance purposes, we want to set the underscorer prototype property for the student to the Person prototype (manual connection).
- Student.prototype = Object.create(Person.prototype); this is how we set the prototype as Object.create creates such. From there, just note that the Object.prototype will sit on top of the Person.prototype.
- This works very similar to java.
- instanceof for similar prototypes returns true for many.
- make sure to check that the constructor is being the normal class, not the parent. Student.prototype.constructor = Student;
- we can override methods similar to java (polymorphism).

Inheritance Between "Classes": ES6 Classes
- Use the extends keyword like Java to link the classes. THis functions the same way as java, and it is much quicker than the constructor functions. 
- In the constructor use the super keyword with the parameter. 
- Also, we do not need to have another parameter, we could simply just add new specific methods for the class.
- If the parameters were the same, we would not need to define a constrcutor as the default would already call the parent constructor (this is similar to java when defining constructors with parameters)
- All of it was very similar to Java.

Inheritance Between "Classes": Object.create
- Starts with the PersonProto object. With the const StudentProto = Object.create(PersonProto); and const jay = Object.create(StudentProto);
- Student inherits from the Person, and Jay inherits from the student which inherits from the person.
- In this version, we link objects.
- Also, we can define methods within: ex:

        const StudentProto = Object.create(PersonProto);
        StudentProto.init = function (firstName, birthYear, course) {
        PersonProto.init.call(this, firstName, birthYear);
        this.course = course;
        };

        StudentProto.introduce = function () {
        console.log(`My name is ${this.firstName}, and I study ${this.course}.`);
        };
        const jay = Object.create(StudentProto);
        jay.init('Jay', 2010, 'CS');
        jay.introduce();
        jay.calcAge();


Another Class Example
- Internal methods are something we need, but it also means we need data privacy.
- This is similar to java and other programming languages.


Encapsulation: Protected Properties and Methods
- Means to keep some properties private in the class.
- Prevents code from being manipulated.
- Javascript classes do not yet support real data privacy / encapsulation
- Use a convention underscorer to mark a protected property
- Accessible data if we an underscorer outside; however, people with furthur know to not touch that data outside of the class. 
- Create a getter or a getMovements of some sort.
- "_.propName" deems the data "protected."


Encapsulation: Private Class Fields and Methods
- Part of a bigger proposal. It is currently at stage 3, thus we are studying it.
- Certain items will always be added to the instances; therefore, they can be deemed public fields. 
- public fields are referenceable by the this keyword.
- private fields & methods: '#' symbol before the variable. Makes it private and non-accessible.
- Private method are not yet implemented fully by js
- Static versions are the same with the syntax.
- Similar logic to java oop.
- Coming soon: 1) Public fields, 2) Private fields, 3) Public Methods, 4) Private methods, 5 - 8) Static versions

Chaining Methods
- Returning this will make the method chainable.

ES6 Class Summary
- public fields are available on created object. Common to all the objects
- private fields are no accessible outside of class.
- static public fields are avaiable only on class
- constrcutor method can be ommited if defualt with the same parameters
- Instance property in constrcutor is uniqe to the object.
- getters & setters: use "_" to set property with the same name as method and add it to the getter.
- static methods: only on class, cannot access instance properites nor methods, only static ones.




SECTION 15: Mapty App: OOP, Geolocation, External Libraries, and More.


Project Planning
- 1. User stoires: descrption of the applications functionality from a user's standpoint. All user stories toghther describe the entire application.
        - Format: As a [type of user], I want [an action] so that [a benefit].
        - e.g. As a user I want to log my running workouts with location, distance, time, pace and steps/mintes, so I can log all of my running. 
        - e.g. I want to see all my workouts on map so I can easily check where I workout most.
        - e.g. many more.


- 2. From these stories, we should know the featues needed to be added.
        - Map where user clicks to add new workout
        - Geoloction to display map at current location (more user friendly)
        - Form to input distance, time, pace, steps/min
        - display items in a list and on the map.
        - user local api.
        - check the onenote for graphic.

- 3. Flowchart: What we will build.
        - check the featues we need to implement
        - e.g. geolocation to dispaly map at current location, and a map where a user clicks to add a new workout: 
            - Page loads -> get current location (async) -> render map on current location -> bind handlder -> user clicks on map -> render workout form.
        - Keep track of events, not just features.
        - Color coordination for certain blocks is helpful: for example, async, rendering, user action, events, etc.
- 4. Arcithecure: how we build it, organize it, etc.
    - Go by the flowchart and start coding.
    - Return when things need more thinking.
- (1-4) Planning Steps
- 5. Develempoment steps: implementation of code.


Using the Geolocation API
- Browser API similar to timer, etc.
- navigator.geolocation.getCurrentPostion(function sucess, function error) uses the geolocation api with 2 callback functions.
- We can use destructuring.
- Use a template literal and an alert for a failure.

Displaying A Map Using Leaflet Library
- Open source external library that other devlopers wrote (third party)
- Use the hosted version for now.
- Watch the order in which the scripts are downloaded in the html and include a defer for the header. 
- L namespace allows us to access certain methods from leaflet such as map.
- We can use multiple scripts in the html file. Order matters!
- This is plausible because as long as they are global, in ways, they are in the same package and implemented to the same html file. Thus, they are useable.
- There are many map designs, check the links!

Displaying a Map Marker
- .on is from the leaflet library and functions very similar to the addEventListener function as we cannot use thas in this case.
- L.popup({object}). We can define the properties within the object for the marker. These are all avaliable through leaflet.
- many methods return this, futhumore, making them chainable.


Rendering Workout Input Form
- We can assign multiple equals signs if they all equal the same value. Make sure to use .value, though. 
- .focus() will somewhat blur the background.
- .closest selects parents and not children. It is a reversed query selector.
- .toggle() wlll flip one or the other. Thus, in the application, only one is visible at a time. 

Project Architecture
- Must decide where and how to store the data.
- From the user story, we see we will need to store the distance, time, pace, steps/mmins, etc.
- A good idea is to have a large parent class called workout which hold common types and two child classes (running and cycling) for the specifc types. OOP.
- Classes are represented by a UML.
- We can store the App inside a class with the events we have created thus far which will be aggregated, not inherited.
- ************* img

Refactoring for Project Arcitecture
- When using an eventListener, the this key points towards what it is attached to and not to the object.
- .bind(this) is super important for these issues.
- check the lecture for more info.

** Managing Workout Data: Creating Classes
& Creating a New Workout were script heavy, not many notes.

Rendering Workouts
- We can use the comment (// prettier-ignore) to ignore the prettier features.
- insertAdjacentHTML inserts HTML we want to add, but it has methods (... review them)
- e.g. form.insertAdjacentHTML('afterend', html);
- lots of js put togther in one project.

Move to Marker On Click
- using the .target chained with .closet means thatregardless of where something is clicked, it will move up to the parent div / element.
- to acess data sets, use .dataset.field name we need
- leflet setView method requires three parameters. It shifts the screen.

Working With Local Storage
- localStorage an API the browser provides for us that we can use.
- 2 parameters: the key and JSON.stringif(what we want saved)
-JSON.parse is the opposite of stringify.
- We need to watch where we define things due to map loading, etx.
- When we convert objects to a string and then back to an object, we lose the prototype chain.
- This is why workout.click() did not work.

Final Considerations
- Additional Features: edit, delete, or delete all workouts.
- Sorting workouts by certain fields (distance, for example)
- Rebuild Running & Cycling objects coming from Local Storage.
- More realistic error and conformation messages (with fading).
- Harder versions: position the map to show all the workouts (hard, use leaflet library). Draw lines and shapes instead of just points. 
- After the next section: geocode location from coordinates, or display the weather data for workout time and place.


---


SECTION 16: Asynchronous JavaScript: Promises, Async/Await, and AJAX


Asynchronous JavaScript, AJAX, and API's
- Synchronous Code: most of the code we have been righting. This is code that is executed line by line. Each line of code waits for the previous line to finish. This can make problems when long-running operatiors block other codes (e.g. alert)
- Asycnhrous Code: runs in the background without stalling the main code from executing. (e.g. timer). Only executed after a task that runs in the "background" finshes. Non-blocking code, does not wait for the asycn task to finish its work. Excetued after all the other code. 
- We need a callback function for async, but call-back functions alone do make the code async. AJAX calls are importnat used cases.
- AJAX: Asyncronous Java Script and XML: allows us to communitcate with remote web servers in an async way. We can request data from web servers dynamically. 
- Browser requests from web server api and the server sends back the data.
- API: Application Progamming Interface: allows applications to "talk to each other and exchange info".
- DOM API, Geolocation API, Own class API, etc. are some examples of api's (similar to java).
- "Online" API: Application running on a server, that receives requests for data, and sends data back as response. We can build our own or use thrid-parties and backend node.js.
- No one uses XML data format. These days, we use JSON data format.

Our First AJAX Call: XMLHttpRequest
- COURS should always be set to yes or unknown.
- we can use .open (get / send, etc.) to call to the server witj a call-back link.
- .send() sends the request to the server.
- JSON.parse() parses the data returns an object. (An array containing one object.)
- user insertAjacentHTML ti add in data;

How the WEB works, requests and responses
- browers sends a request and the server sends a response.
- Every URL gets a protocl (http, https), domain name, resource. 
- Step 1 DNS: Domain Name Server lookup when the access any web server. Converts the domain name to a real IP address. (protocal, IP address, port number)
- Step 2 TCP/IP socket connection: tranmission control protocol and internet protocol. 
- Step 3 HTTP Request: protocol that allows clients and web servers to communicate. 
- Get: Reqests data.
- Post: Sends data.
- Put & Patch: Modify data.
= HTTPS is encypted, otherwise, the logic is the same.
- Step 4: HTTP Response that is sent back to the clinet (start line: http version, status code, status message).
- Step 5: index.html is the first to load, then it is scanned for assets (js, css, etc.) and the process is repeated for each file. 
- TCP breaks the response into small chunks then reassembles them through different routes in the internet to return the fastest time.
- Add the graphs for notes.

Welcome to Callback Hell
- attention to detail on optional chaining (?)
- we can search by the code.
- this keyword is what we can use toi access what is returned on the load.
- this.responsetext returns text about the api return and we can json destrcuture it to return an array. It depends on if we need to destrcutre or not, some return as an object.
- nested call backs. For example a neighbor of a neighbor, etc...
- similar to factorial??
- callback hell: handles loads of call-backs. It can get very messy. Promises are a combat around such.

Promises and the Fetch API
- we can use fetch we using simple get methods: const request = fetch(`https://restcountries.com/v2/name/usa`);
- Promise: object that is used as a placeholder for a future value. For example, a response from an AJAX call. 
- Lottery ticket examples.
- By using promises, we do not need to rely on events and callbacks.
- Instead of nesting callbacks, we can chain promises for a sequence of asyncronus operatiors: escaping callback hell.
- Time sensative.
- Promise lifecycle: pending (before the future value is avaliable) -> settled (async task has finished) -> fullfied (value ready, won the lottery) or rejected (error, loss of lottery).
- A promise is only settled once, impossible to change that state.
- Consume a Promise: we we already have a promise.
- Sometimes, though, we need to build promises. 


Consuming Promises
- on all promises we can call the .then() method and pass in a callback function.
- inside the callback function, we input a response parameter and we use the .json method on it. 
- From there we return the response.json() as it returns a promise. Thus, we call the then method on that call back and finally have access to the data we are looking for. 
e.g.
const getCountryData = function (country) {
  const request = fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderCountry(data[0]);
    });
};


Chaining Promises
- chain two seq. AJAX calls.
- .then() method always returns a promise, regardless of the situation. If we do return something, though, it was be the fullfillment. 
- continue the chains outside, not call back hell.
- check examples in notes for help.

Handling Rejected Promises
- promise in which an error happens is a rejected promise.
- if we wanted to catch an error eveytime, we would have to do it as the second parametr for the then call.
- we can chain in a .catch() method to catch an where down the chain.
- any error in javascript contains the message property. 
- .finally() with a callback function parameter is always run. This will call regardless. Similar to java.
- catch itself also returns a promise.

Throwing Erros Manually
- we can throw errors manually just like java: throw new Error(...)
- if we throw an error somewhere, everything else immenditalty rejects and it propogates down to the catch method.
- handling the errors is the only way to display for the user.
- This can get tidous tho.


Ansyncronous Behind the Scences: The Event Loop 
- One thread of ecxecution, different from java.
- Callback queue is an ordered list of all th callback functions in line to be exectued. To do list that the call-stack must complete. 
- callback queue uses dom things.
- Event Loop: Looks into the call-stack to determine if it is empty or not - except for the global context. If empty, it takes the first call-back from the queue as its first tick, and it keeps going from there.
- The event loop does the orchastation of the time.
- in the example of an image, this is done so the other code can go first (code that will not take long) and the image can wait till the cakk-stack is empty and first inline to go.
- For promises, they do not go to the call-back queue, they have their own queue: microtasks queue. It has priority over the call-back queue. They can cut in line. They are executed before any call-back queues. We can stack these, there is no limit.

The Event Loop In Practice
- anything outside of the queues are first (anything on the main stack).
- from there, anything on the microtask queue is checked and run.
- then, the call-back queue is checked and run.
- Promise.resolve is a way to auto get a promise and test it.


Building a Promise
- Promises are a speciceal kinda of object. 
- Use the new Promise() constructor with one argument as a function with resolve and reject functions.
- Minor example: 
const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve('You Win'); // fullfilled
  } else {
    reject('You lost your money!'); // this will be for the catch, rejected state
  }
});
- creating a new error object is much better than just logging a string
- many more examples in the lesson 259.
- we can use the static Promise.resolve.. or Promise.reject...

Promisifying the Geolocation API
- We can turn API's into promise based API's.
- We can really promisifiy like anything.
- remember that resolve and reject are both functions, so they are usuable.
e.g.:
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   postition => resolve(postition),
    //   err => reject(err)
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject); // this is the same thing since both resolve and reject are call back functions.
  });
};



Consuming Promises with Async/Await
- start by using the async keyword before the function signature.
- we can use multiple awaits.
- await stops the code execution at the point until the promise is fulfilled.
- stopping execution in an async function does not block main thread since it is in the background regardless. 
- we can store what is returned from an await into a variable.
- doing this will first return the response, which is much better than chaining .then() to every response.
- syntax sugar over then method, but we still are using promises.
- from there, we can also await a simple .json() call.
e.g. 
const res = await fetch(`https://restcountries.com/v2/name/${country}`);
  console.log(res);

  const data = await res.json();
  renderCountry(data[0]);

- this is the same as previously where we would do 2 seperate then chains.
- await is o.p. and we can pracitcally apply it to anything that used to use .then()


Error handling with try-catch
- With async await we use a try-catch block, or whenever we need to
- we can wrap all our code in try block and js would try to do the code.
- from there, we use a catch block to catch the exceptions. 
- the catch block has access to whatever error happens in the try block
e.g.
try {
  let x = 20;
  const y = 30;
  y = x; // reassinging fails
} catch (error) {
  alert(error.message);
}

- this function the same as java.
- we can throw our own errors and the catch nlock will catch and format.



Returning Values from Async Functions
- async function always returns a promise.
- If we store an async function inside of a variable and then, for example, log that variable in the main stack, that function is called and waited for, but what is in it is unknown as it just returns a promise (we don't get the fullfilment yet)
- to combat this, we can use the.then() method
- even if an error occurs in the async function, it can still be returned as fullfilled.
- we can rethrow an error in the catch block we caught if we want to use it later
- we can mix with old and new async, but it may be better just to write with one. 
- await can only be used inside an async function.
- IFFE's are immeditly.. functions, one time use): (async funntion () {})();
- we can use a finally or just keep the info in under the try.
e.g.

(async function () {
  try {
    const response = await whereAmI2();
    console.log(response);
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log(`3. Finished getting location.`);
  }
})();

is equivalent to this

whereAmI2()
  .then(city => console.log(city))
  .catch(err => console.error(`${err.message}`))
  .finally(() => console.log(`finished getting location`));




Running Promises in Parallel
- for an async function, we always should wrap our code using a try catch block
- destructure the array for the capitals.
- trying to make calls that do not have to wait for any of them (order does not matter)
- we want all the problems to run in parallel rather than in sequence to save loading time.
- Promise.all([array of promise]) which returns a new promise that does all the promises in the array.
- From this, we assign the returned promise as a variable and await it.
e.g.    
- it recives an array and returns one. Then, loop over the array. (map, for each, etc.)
- Short circuts as soon as one promise rejects.
- one rejected promise forces the entire thing to reject.
- Promise.all is a combinator function.

 const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);



Other Promise Combinators: race, allSettled and any
- Promise.all(): notes listed in the section above. (fails to return the promises if at least one rejects)

- Promise.race()
    - recives an array of promises and returns an array. The first settled promise wins the race, the others don't matter.
    - whichever one takes the least time wins.
    - A promise can win the race even if it gets rejected, meaning it gets shorts circuted. Short circuts as soon as one problem is resolved.
    - does not ignore rejects.
    - Very useful for very long promises (e.g. wifi issues).
    - Promise.race() & Promise.all() are the two most popular Promise combinator functions.

- Promise.allSettled()
    - fairly new. Takes in an array of promises and returns an array of all the settled promises.
    - simply never short-circuts and returns all, fullifed or rejected.
    - does not matter if one- or many - of the promises reject, it returns all of them

- Promise.any()
    - takes in an array of multiple promises and returns the first fulfilled promise.
    - it ignores any rejected promises.
    - similar to .race() but this one ignores the rejects. 

    -------------------------

SECTION 17: Modern JavaScript Development: Modules, Tooling, and Functional

Overview of Modern JS Devlopment
- we use multiple modules and 3-rd party packages.
- NPM is the code repo and installed on computer for these.
- Js bundle is the final file used for production. 
- Development: modules, 3rd-party packages, etc. (npn &*node)
- Build Process: bundling (join all modules), transpiring and polyfilling (covert modern js back to ES5) (made by webpack or parcel)
- Production: Javascript bundle.

Overview of Modules in JavaScript
- Module: reusable piece of code that encapsulates implementation details. Usually a standalone file with imports and exports.
- Whatever we export out of a module is considered a public api.
- we can import modules form other modules. 
- with larger code bases, modules make it easier to compose complex applications.
- small building blocks put together. They can be developed in isolation.
- Isolating components is another large advantage of modules.
- Abstract code: implement low-level code in modules and import these abstractions into other modules.
- Organized code: reusable code.
- ES6 Modules: stored in files, exactly one module per file.
- ES6 v. Scrips
    - Top-level variables: scoped to module, global
    - default mode: strict mode, sloppy mode
    - Top-level this: undefined, window
    - Imports & exports: yes (can only happen at the top level, not within blocks), no.
    - HTML linking: <scrpt type="module">, <script>

- parsing means to test the code
- modules are imported syncronosuly thanks to "static" imports, which make imports known before execution.
- this makes bundling and dead code elimination possible.
- after parsing, asycn download, linking imports to exports (passing a reference similar to java when), execution.


Top-level Await (2022)
- We can use the await keyword outside of a function in modules.
- await keyword works outside of async function. This blocks the execution of the entire module, though.
- this can be very useful but it can be harmful as it stops the running. Use it with caution.
- .at() from arrays gets the element using the index (we can use negative numbers)
- for async functions, they return a promise regardless of the actual return data itself. Back then, the work around would be to simply use regular promises, but now we can simply use the await keyword. 
- if one module imports a module using top-level await, then the importing module will wait for the imported module to finish the blocking code.
- The code in script.js (imports shoppingCart.js) has to wait for all the blocking code in shoppingCart.js to run before it runs if we use the await.


The Module Pattern
- Js developers used to create an IFFE function and set the return equal to a variable, in which the returend everything from the iffe that they would've exported in a module.
- closuers are the way this works. Functions are allowed to have access to everything at the functions birthplace. 
e.g. const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${product} ${quantity} added to the cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${product} ${quantity} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
- the function can still access its birth place rights.
- This is where module - practically - originated from.


Common JS Modules
- AMD modules & Common Js Modules.
- Common Js ones have been used in Node.Js since the start.
- almost all the modules in the mpm repo still use the common js.
- now, we are basically stuck with common js.
- it uses the: export. keyword which works in node.js. but comes up as undefined in the browser.
- for importing, it uses the: require(moduleName).



A Brief Introduction to the Command Line
- Always in a folder in the terminal.
- dir: for windows will show us the contect for the current folder
- cd: we can go up and down the file.
- tab key auto completes.
- cd .. goes up 
- clear: clears the console.
- cd img, etc.
- cd ../.. goes up two .. etc.
- mkdir with file name creates a file.
- touch: followed by new html, js, etc. name can be created inside the file.
- arror key will show us past commands
- we can create multiple files at once by using touch: name one, two, etc.
- del: removes files.
- mv: file ../ moves to parent.
- rmrdir: removes directory
- ls: prints the contents.












*/
