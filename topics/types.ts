// // # Types

// // ###### Type inference
// let number: number;
// number = 15;
// console.log('logs from types:: ', typeof number);

// // number = "5"; // ERROR: Type '"five"' is not assignable to type 'number'
// // console.log(`${number} is a ${typeof number}`); // 5 is a number
// console.log(typeof number);

// // number = [2, 4];
// console.log(number); // [2, 4]

// const one = 'javascript'

// const test = one.includes('java');
// // number = test;
// console.log(number)

// type product = {
//   id?: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   };
// };

// const someProduct: product = {
//   id: "abc1",
//   price: 12.99,
//   tags: ["great-offer", "hot-and-new"],
//   details: {
//     title: "Red Carpet",
//     description: "A great carpet - almost brand-new",
//   },
// };

// // product = { }

// // someProduct.id = 2;

// console.log(someProduct);

// console.log(`Product.tags type => `, typeof someProduct.tags); // object
// console.log(`Product.tags[0] type => `, typeof someProduct.tags[0]); // string

// for (const tag of someProduct.tags) {
//   console.log(tag.toUpperCase()); // GREAT-OFFER, HOT-AND-NEW > valid as tag is a string
//   // console.log(tag.map); // ERROR: Property 'map' does not exist on type 'string'
// }

// // ###### Tuple
// const user: {
//   id: number;
//   name: string;
//   role: [number, string, boolean]; // Tuple type definition
//   // role: {
//   //   id: number;
//   //   name: string;
//   //   isAdmin: boolean;
//   // }
// } = {
//   id: 1,
//   name: "Samuel",
//   role: [1, "admin", true],
//   // role: { id: 1, name: "admin", isAdmin: true }
// };

// // user.role[1] = 22; // Error, because tuple accepts only the defined types in the specified order
// user.role = [2, "user", false]; // OK, because tuple accepts the defined types in the specified order
// // user.role = [3, "user", false, "extra"]; // Error, because tuple accepts only the defined length
// // user.role.push("extra value"); // OK, because tuple accepts length changes via push (EXCEPTION)
// console.log(user.role);

// const tuple: [number, string, boolean] = [1, "hello", true];
// console.log(`tuple is a ${typeof tuple}`); // object

// const rotas = Object.freeze({
//   home: "/",
//   about: "/about",
//   contact: "/contact",
// });

// console.log("rotas::home =>", rotas.about);

// // ###### Enum
// enum Color {
//   Red = 'red',
//   Green = 1,
//   Blue = 'blue',
// }
// let selectedColor: Color;
// // selectedColor = Color.Yellow; // ERROR: Type 'Color.Yellow' is not assignable to type 'Color'

// console.log(typeof Color.Green);

// // Color.Blue = 'yellow'; // ERROR: Cannot assign to 'Blue' because it is a read-only property

// // // selectedColor = Color.Yellow; // ERROR: Type 'Color.Yellow' is not assignable to type 'Color'
// // console.log(`Color.Blue is `, Color.Blue); // 1
// // console.log(`selectedColor is ${selectedColor}`); // 1
// // console.log(`type of Color.Green is ${typeof Color.Green}`); // number
// // console.log(`type of selectedColor is ${typeof selectedColor}`); // number

// enum ColorStringValues {
//   Red = "red",
//   Green = "green",
//   Blue = 10,
// }
// const selectedColorString: ColorStringValues = ColorStringValues.Green;
// console.log("######################");
// console.log(`ColorStringValues.Blue is `, ColorStringValues.Blue);
// console.log(`selectedColorString is ${selectedColorString}`);
// console.log(
//   `type of ColorStringValues.Blue is ${typeof ColorStringValues.Blue}`
// ); // string
// console.log(`type of selectedColorString is ${typeof selectedColorString}`);

// // ###### Unknown type
// let userInput: unknown;
// let userAdmin: any;
// let userName: string;

// userInput = 5;
// userAdmin = false;
// userInput = "Max";

// userAdmin = userInput; // No Error

// // userName = userInput; // Error
// if (typeof userInput === "string") {
//   userName = userInput;
// }

// // ###### Never type

// function generateError(message: string, code: number): never {
//   throw { message: message, errorCode: code };
// }
// function generateError2(message: string, code: number): void {
//   console.error({ message: message, errorCode: code });
// }

// // generateError2("Another error occurred!", 505);

// // generateError("An error occurred!", 400);

// // ###### Array type

// const names: Array<string> = ["Max", "Manu"];

// const persons: string[] = ["Max", "Manu"];

// const numbersArray: number[] = [1, 2, 3];

// const mixedTypesArray: (string | number | boolean | { test: string })[] = [{test: 'true'}];

// const anyTypeArray: any[] = ["Max", 5, true,];

// // persons.map((person) => person.toUpperCase()); // Valid: toUpperCase() is a method of string
// // anyTypeArray.map((any) => any.toUpperCase()); // Valid: any type can be anything, including string
// // mixedTypesArray.map((mix) => mix.toUpperCase());  // Error: could not be a string.
// // numbersArray.map((number) => number.toUpperCase()); // Error: Property 'toUpperCase' does not exist on type 'number'.

// // ###### Literal types

// const literalType = "as-number";

// const combine = (
//   a: number | string,
//   b: number | string,
//   resultConversion: "as-number" | "as-text"
// ) => {
//   if (resultConversion === "as-number") {
//     return +a + +b;
//   } else {
//     return a.toString() + b.toString();
//   }
// };

// const result = combine("1", "2", literalType); // Error: Argument of type '"literal-type"' is not assignable to parameter of type '"as-number" | "as-text"'
// console.log(result);

// // ###### Union type with type alias

// type Combinable = number | string;
// type ConversionDescriptor = "as-number" | "as-text";
// type User = { name: string; age: number };

// const combine2 = (
//   a: Combinable,
//   b: Combinable,
//   resultConversion: ConversionDescriptor
// ) => {
//   if (resultConversion === "as-number") {
//     return +a + +b;
//   } else {
//     return a.toString() + b.toString();
//   }
// };

// // ###### Type assertion or casting
// const userInput1: HTMLInputElement = document.getElementById("output") as HTMLInputElement;
// userInput1.value = "Hello World!";

// const userInput2 = document.getElementById("output");

// if (userInput2) {
//   (<HTMLInputElement>userInput2).value = "Hello World 2!";
// }

// //  ###### Function return type and void

// const printResult = (num: number): void => {
//   console.log("Result: " + num); // void means no return is expressed. undefined type will error
// };

// const returnNothing = (): undefined => {
//   return; // there's a return but no value. undefined is acceptable
// };

// const add = (n1: number, n2: number): number => {
//   return n1 + n2;
// };

// // ###### Function type

// // let combineValues: Function;
// let combineValues: (a: number, b: number) => number;

// // combineValues = add(8, 8); // Error: Type 'number' is not assignable to type 'Function'.
// combineValues = add;
// console.log(combineValues); // Output: [Function: add]
// console.log(combineValues(8, 8)); // Output: 16

// // combineValues = printResult; // Error: Type 'void' is not assignable to type 'number'.
// console.log(combineValues(8, 8)); // Output: undefined

// function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
//   const result = n1 + n2;
//   const returnedResult = cb(result);
//   console.log(returnedResult);
// }

// addAndHandle(10, 20, (result) => {
//   return result;
// });
