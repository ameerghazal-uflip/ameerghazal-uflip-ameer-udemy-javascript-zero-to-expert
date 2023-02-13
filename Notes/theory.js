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
-
-
-
-


*/
