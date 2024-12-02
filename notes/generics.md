# Generic Types in TypeScript

Generic types in TypeScript allow you to create reusable components that can work with a variety of data types. They provide a way to define functions, classes, and interfaces that can operate on different types without specifying the exact type in advance. This makes your code more flexible and type-safe.

## Key Concepts

- **Type Variables**: Placeholders for types that are specified when the generic is used.
- **Generic Functions**: Functions that take type parameters to operate on different types.
- **Generic Classes**: Classes that use type parameters to create instances with specific types.
- **Generic Interfaces**: Interfaces that define contracts for generic types.

## Example

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Hello");
let output2 = identity<number>(42);
```

In this example, the `identity` function is a generic function that can take any type `T` and return a value of the same type.

## Summary

1. Built-in Generics:

   - Demonstrates the use of generics with built-in types like Array and Promise.
   - Highlights common errors when generics are not used correctly.

2. Custom Generics:

   - Shows how to create generic functions to merge objects.
   - Illustrates the use of type constraints to ensure type safety.

3. Constraints:

   - Explains how to use constraints with generics to enforce certain properties on types.
   - Provides examples with object merging and length constraints.

4. Interface Constraint:

   - Uses an interface to constrain a generic type to have a length property.
   - Demonstrates a function that returns a description based on the length of the input.

5. Keyof Constraint:

   - Shows how to use the `keyof` keyword to constrain a generic type to keys of an object.
   - Provides an example function that extracts a value from an object based on a key.

6. Generic Classes:

   - Demonstrates the creation of a generic class that works with specific primitive types.
   - Includes methods to add, remove, and retrieve items from a storage class.

7. Generic Utility Types:
   - Explains utility types like `Partial` and `Readonly`.
   - Shows how to use `Partial` to make properties optional and `Readonly` to make properties immutable.
