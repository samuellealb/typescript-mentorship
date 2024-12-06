# Interfaces
  - Interfaces are typescript only feature, existing only in development and compilation time. There are no transpiled interfaces in the final JavaScript code.
  - Interfaces are used to define the structure of an object.
  - This makes them less flexible the custom types, which can define any type of data, but makes them more specific.
  - You can implement an interface in a class to enforce the structure of the class.
  - Interfaces can be extended to create new interfaces. This is useful when you want to add new properties to an existing interface.
  - Differently from Classes, you can extend multiple Interfaces at once.

# Summary of TypeScript Features

- **Interfaces**: Used to define the structure of an object. They can be extended and implemented by classes.
- **Optional Properties**: Properties that may or may not be present in an interface.
- **Readonly Properties**: Properties that cannot be modified after they are set.
- **Intersection Types**: Combine multiple types into one, resulting in a type that has all the properties of the intersected types.
- **Union Types**: Define a type that can be one of several types.
- **Function Types**: Interfaces can also be used to define the structure of functions.