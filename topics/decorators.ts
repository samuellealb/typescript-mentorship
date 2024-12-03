// // # Decorators

// // ## Class Decorators

// function Logger(logString: string) { // decorators are usually named with a capital letter
//   console.log("LOGGER FACTORY");
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log("TEMPLATE FACTORY");
//   return function (constructor: any) {
//     console.log("Rendering template");
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector("h1")!.textContent = p.name;
//     }
//   };
// }

// @Logger('LOGGING - PERSON')
// @WithTemplate("<h1>My Person Object</h1>", "output")
// class Person {
//   name = "Max";

//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const pers = new Person();

// console.log(pers);

// // ---

// // Property Decorators
// function Log(target: any, propertyName: string | Symbol) {
//   console.log("Property decorator!");
//   console.log(target, propertyName);
// }

// // Accessor Decorators
// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("Accessor decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// // Method Decorators
// function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
//   console.log("Method decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// // Parameter Decorators
// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log("Parameter decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(position);
// }

// class Product {
//   @Log
//   title: string;
//   _price: number;

//   @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this.price = val;
//     } else {
//       throw new Error("Invalid price - should be positive!");
//     }
//   }

//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }

//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }

// // ## Example: Component as decorator (Angular)

// // heading decorator

// function Heading({
//   selector,
//   template,
// }: {
//   selector: string;
//   template: string;
// }) {
//   return function <
//     T extends {
//       new (...args: any[]): { title: string; headingLevel: string };
//     }
//   >(componentConstructor: T) {
//     return class extends componentConstructor {
//       constructor(...args: any[]) {
//         super(...args);
//         const mountedElement = document.getElementById(selector);
//         if (mountedElement) {
//           const processedTemplate = template
//             .replace(/{{headingLevel}}/g, this.headingLevel)
//             .replace(/{{ title }}/g, this.title);
//           const tempDiv = document.createElement("div");
//           tempDiv.innerHTML = processedTemplate;
//           mountedElement.appendChild(tempDiv.firstElementChild!);
//         }
//       }
//     };
//   };
// }
// @Heading({
//   selector: "output",
//   template: `
//         <{{headingLevel}}>
//           {{ title }}
//         </{{headingLevel}}>
//     `,
// })
// class HeadingComponent {
//   title: string;
//   headingLevel: string;

//   constructor(title: string, headingLevel: string = "h1") {
//     this.title = title;
//     this.headingLevel = headingLevel;
//   }
// }

// // paragraph decorator

// function Paragraph({ selector }: { selector: string }) {
//   return function <T extends { new (...args: any[]): { text: string } }>( // runs when the target class is defined
//     componentConstructor: T
//   ) {
//     return class extends componentConstructor { // it extends the original class and runs when the original class is instantiated
//       constructor(...args: any[]) {
//         super(...args);
//         const mountedElement = document.getElementById(selector);
//         if (mountedElement) {
//           const paragraphElement = document.createElement("p");
//           paragraphElement.textContent = this.text;
//           mountedElement.appendChild(paragraphElement);
//         }
//       }
//     };
//   };
// }

// @Paragraph({
//   selector: "output",
// })
// class ParagraphComponent {
//   text: string;

//   constructor(text: string) {
//     this.text = text;
//   }
// }

// // instantiate components
// new HeadingComponent('My Heading', 'h1');
// new ParagraphComponent('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
// new HeadingComponent('Subtopic', 'h2');
// new ParagraphComponent('Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
// new ParagraphComponent('Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');


// // Validation with decorators

// interface ValidatorConfig {
//   [property: string]: {
//     [validatableProp: string]: string[]; // ['required', 'positive']
//   };
// }

// const registeredValidators: ValidatorConfig = {};

// function Required(target: any, propName: string) {
//   registeredValidators[target.constructor.name] = {
//       ...registeredValidators[target.constructor.name],
//       [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
//   };
// }

// function PositiveNumber(target: any, propName: string) {
//   registeredValidators[target.constructor.name] = {
//       ...registeredValidators[target.constructor.name],
//       [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
//   };
// }

// function Validate(obj: any) {
//   const objValidatorConfig = registeredValidators[obj.constructor.name];
//   if (!objValidatorConfig) {
//     return true;
//   }
//   let isValid = true;
//   for (const prop in objValidatorConfig) {
//     for (const validator of objValidatorConfig[prop]) {
//       switch (validator) {
//         case 'required':
//           isValid = isValid && !!obj[prop];
//           break;
//         case 'positive':
//           isValid = isValid && obj[prop] > 0;
//           break;
//       }
//     }
//   }
//   return isValid;
// }

// class Course {
//   @Required
//   title: string;
//   @PositiveNumber
//   price: number;

//   constructor(t: string, p: number) {
//     this.title = t;
//     this.price = p;
//   }
// }

// const courseForm = document.querySelector('form')!;
// courseForm.addEventListener('submit', event => {
//   event.preventDefault();
//   const titleEl = document.getElementById('title') as HTMLInputElement;
//   const priceEl = document.getElementById('price') as HTMLInputElement;

//   const title = titleEl.value;
//   const price = +priceEl.value;

//   const createdCourse = new Course(title, price);

//   if (!Validate(createdCourse)) {
//     alert('Invalid input, please try again!');
//     return;
//   }

//   console.log(createdCourse);
// });
