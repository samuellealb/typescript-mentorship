// // ###### Interfaces

// interface Named {
//   readonly name: string;
// }
// let nameInt: Named = { name: "Sam" };
// // nameInt.name = "João"; // This will throw an error because name is a readonly property

// // age is an optional property
// interface Age {
//   age?: number;
// }
// // let ageInt: Age = { };

// interface Address {
//   street: string;
//   city: string;
//   postalCode: string;
// }

// interface Greetable extends Named, Age {
//   greet(phrase: string): void;
// }

// // This is a class that implements the Greetable interface. It would be possible to implement multiple interfaces by separating them with a comma
// class Person implements Greetable {
//   name: string;
//   age: number;
//   // street: string;
//   // city: string;
//   // postalCode: string;

//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//     // this.street = s;
//     // this.city = c;
//     // this.postalCode = p;
//   }

//   greet(phrase: string): void {
//     console.log(phrase + " via class");
//   }
// }

// class AnotherPerson {
//   name: string;

//   constructor(n: string) {
//     this.name = n;
//   }
// }

// let user1: Greetable;

// user1 = {
//   name: "Sam",
//   age: 30,
//   street: "Rua X",
// }

// user1 = new AnotherPerson("Sam"); // This will throw an error because AnotherPerson does not implement the Greetable interface
// user1.name = "João"; // This will throw an error because name is a readonly property

// user1.greet("Hello " + user1.name + '! Happy ' + user1.age + 'th birthday!');

// console.log(user1);

// // Interface can be used to define functions also
// interface AddFn {
//   (a: number, b: number): number;
// }
// let add: AddFn;
// add = (n1: number, n2: number) => {
//   return n1 + n2;
// };
// console.log(add(2, 3));


// // ###### Intersection Types

// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// // When you intersect object types, the resulting type will have all the properties of the intersected types
// type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
//   name: "Max",
//   privileges: ["create-server"],
//   startDate: new Date(),
// };

// type Combinable = string | number;
// type Numeric = number | boolean;

// // When you intersect union types, the resulting type will be a type that is common to all intersected types
// type Universal = Combinable & Numeric;