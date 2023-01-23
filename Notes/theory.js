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













*/