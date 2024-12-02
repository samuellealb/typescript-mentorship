// // Built-in Generics

// // Array
// const numbers: Array = [1, 2, 3, 4, 5]; // Error: Generic type 'Array<T>' requires 1 type argument(s)
// const names: Array<string> = ['Samuel', 'Lola', 'Felipe']; // string[]

// // Promise
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       resolve(200);
//   }, 2000);
// });

// promise.then(data => {
//   data.split(' '); // Error: Property 'split' does not exist on type 'number'
// });

// Custom Generics

// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }
// const mergedObj = merge({ name: "Samuel" }, { age: 40 }); // could be solved with type casting: as { name: string, age: number }
// console.log(mergedObj.name); // Error: Property 'name' does not exist on type 'object'

// function merge1<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }
// const mergedObj1 = merge1({ name: "Samuel" }, { age: 40 });
// console.log(mergedObj1.name); // No error

// Constraints

// function merge2<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }
// const mergedObj2 = merge2({ name: "Samuel", hobbies: ['chess'] }, {age: 40});
// console.log(mergedObj2); // { name: 'Samuel', hobbies: ['chess'], age: 40 }

// // Interface Constraint

// interface Lenthy {
//   length: number;
// }

// function countAndDescribe<T extends Lenthy>(element: T): [T, string] {
//   let documentDescription = "Got no value.";
//   if (element.length === 1) {
//     documentDescription = "Got 1 element.";
//   } else if (element.length > 1) {
//     documentDescription = "Got " + element.length + " elements.";
//   }
//   return [element, documentDescription];
// }
// // console.log(countAndDescribe(1));// Error: Argument of type '1' is not assignable to parameter of type 'Lenthy'
// console.log(countAndDescribe("Hi there!")); // ['Hi there!', 'Got 10 elements.']
// console.log(countAndDescribe(["Sports", "Cooking"])); // [['Sports', 'Cooking'], 'Got 2 elements.']
// console.log(countAndDescribe([])); // [[], 'Got no value.']

// // Keyof Constraint

// function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
//   return obj[key];
// }
// // console.log(extractAndConvert({}, 'name')); // Error: Argument of type '{}' is not assignable to parameter of type 'object'
// // console.log(extractAndConvert({ name: 'Samuel' }, 'age')); // Error: Argument of type '"age"' is not assignable to parameter of type '"name"'
// console.log(extractAndConvert({ name: 'Samuel' }, 'name')); // Samuel


// // Generic Classes

// class DataStorage<T extends string | number | boolean> { // primitive types only
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }

//   removeItem(item: T) {
//     if (this.data.indexOf(item) === -1) return;
//     this.data.splice(this.data.indexOf(item), 1);
//   }

//   getItems() {
//     return [...this.data];
//   }
// }

// const textStorage = new DataStorage<string>();
// // textStorage.addItem(1); // Error: Argument of type '1' is not assignable to parameter of type 'string'
// textStorage.addItem("Samuel");
// textStorage.addItem("Lola");
// console.log(textStorage.getItems()); // ['Samuel', 'Lola']

// const numberStorage = new DataStorage<number>();
// // numberStorage.addItem('1'); // Error: Argument of type '"1"' is not assignable to parameter of type 'number'
// numberStorage.addItem(1);
// console.log(numberStorage.getItems()); // [1]
// numberStorage.removeItem(1);
// console.log(numberStorage.getItems()); // []

// // const objectStorage = new DataStorage<object>(); // Error: Type 'object' is not assignable to type 'string | number | boolean'


// // Generic Utility Types

// // Partial: Makes all properties of an object optional
// interface CourseGoal {
//   title: string;
//   description: string;
//   completeUntil: Date;
// }
// function createCourseGoal(title: string, description: string, completeUntil: Date): CourseGoal {
//   let courseGoal: Partial<CourseGoal> = {};
//   courseGoal.title = title;
//   courseGoal.description = description;
//   courseGoal.completeUntil = completeUntil;
//   return courseGoal as CourseGoal;
// }

// // Readonly: Makes all properties of an object readonly
// const names: Readonly<string[]> = ['Samuel', 'Lola'];
// // names.push('Felipe'); // Error: Property 'push' does not exist on type 'readonly string[]'
// // names.pop(); // Error: Property 'pop' does not exist on type 'readonly string[]'


