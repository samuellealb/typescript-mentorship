# Enum Types

In TypeScript, enum members have numeric values by default. When you define an enum, TypeScript assigns numeric values to each member starting from 0.

```typescript
enum Color {
  Red,    // 0
  Green,  // 1
  Blue    // 2
}
```
By default, Color.Red is assigned the value 0, Color.Green is assigned 1, and Color.Blue is assigned 2. This is why typeof Color.Red returns "number".


## Custom Enum Values

Enums in TypeScript can also have custom values. For example:

```typescript
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4
}
```

In this case, Color.Red would be 1, Color.Green would be 2, and Color.Blue would be 4.

Enums are useful for creating a set of named constants, and the numeric values can be used for comparisons or other operations where numbers are required.


## String Enums
Enums in TypeScript can have string values. This is known as a string enum.

```typescript
enum ColorStringValues {
  Red = "red",
  Green = "green",
  Blue = "blue",
}
```

In this string enum, each member is explicitly assigned a string value. For example, ColorStringValues.Red is assigned the string "red", ColorStringValues.Green is assigned "green", and ColorStringValues.Blue is assigned "blue".

When you use these enum members, their type will be string:

String enums are useful when you need to represent a set of related constants as strings, which can be more readable and meaningful than numeric values.