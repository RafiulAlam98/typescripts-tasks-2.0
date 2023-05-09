1. What is TypeScript, and how is it different from JavaScript?
Ans: Typescript is an object-oriented programming language. It is a superset of JavaScript. Typescript has additional features including the ES5 JavaScript version and the ES6 JavaScript version. Typescript is an open-source programming language, whereas javascript is a server-side programing language for building dynamic web apps. 

Typescript is quite different from JavaScript. Typescript uses the variable types mandatory, whereas javascript does not.
Typescript is also known as an object-oriented programming language whereas javascript is not an oop-based, mainly a prototype-based language.
Typescript supports the interface, but javascript does not.
Typescript shows the error in compilation time, whereas JavaScript shows the error at runtime. 
Static type checking occurs at compile time in Typescript, Javascript is an interpreted language.
Typescript can not run in the browser, but it converts a .ts file into a .js file. This process is known as Trans-piled.

2.  Can you explain the difference between "interface" and "type" in TypeScript?
Type:
type is a keyword that we can use to define the shape of data. Whereas interface is also a keyword that should contract with the object type
Type is a collection of different data types, and the interface is a syntax for representing the object only.
Two types having the same name raise an exception, and two interfaces having the same name get merged.
It is possible to intersect various types in typescript, but it is not possible to create new intersections that has create by one. 
Syntax for type 
type Client = { age: number }
Syntax for interface
interface Client { age: number }


3. Can you give an example of how to use generics in TypeScript?
Ans: When writing a program one of the most important issues is to create reusable components. Generic is very much useful to create reusable components.
Generic generalizes the code, Generics provide a way to make components work with any data type and are not restricted to one data type. 
Let’s see an example:

function genericData1(data: number) {
    console.log("data: ", data);
}

genericData1(2);

If we have more than one argument and parameter to use and to set the type of that argument and parameter, we can use generic, which cleans the code more readable and make efficient. And also we can use the same generic again and again with various types or interfaces.

Using generic

function genericData2<T>(data:T) {
    console.log("data: ", data);
}

genericData2(6);

4. What is the difference between an "unknown" and "any" type in TypeScript?
Any type is a type that receives any value according to its type, whereas an unknown type is a type of unknown value. 
Any type can be useful when it’s not necessary to know the value of a type at compile time.
If a variable type assign to be any then this variable also can be used as value  another of a variable 
let system:any = "ios";
let price:number = system;
This can be valid.
Whereas, if a variable type assigns to an unknown it can’t be used as the value of another variable except the unknown type.
any can be a useful way to get past errors since it disables type checking, but TypeScript will not be able to provide type safety.
The unknown is the best use when we don’t know about the type of data.
Typescript treats unknown as a type that is more restrictive than any.

5. What is the "as" keyword used for in TypeScript?
Ans: The as keyword is a type assertion in typescript. Type assertion is a mechanism which tells the compiler about the type of a variable. Type assertion is explicitly telling the compiler that we want to treat the entity as a different type. It allows us to treat any as a number, or number as a string. Type assertion is useful when to migrating code from Typescript to JavaScript. 
Example:
let adminId: any = 111;   
let admin_id= adminId as number;   






