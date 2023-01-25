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
- define a variable const varaible = {} use the curly braces and inside define each function with its value seperated by a :, then a comma.
e.g. const aG {
    name: Amlop,
    last: pop,
    ...
};
- in objects, order does not matter (un-structed).
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
-
-
-
-
-
-










*/