## Tuple Types

```typescript
// Basic Tuple Definition
let basicTuple: [string, number] = ["Hello", 42];

// Tuples allow fixed-length arrays with specific types at known positions
let student: [string, number, boolean] = ["Alice Johnson", 25, true];

// Accessing Tuple Elements
console.log(student[0]); // "Alice Johnson"
console.log(student[1]); // 25
```

Let me break down tuple types in more depth:

### Tuple Characteristics
1. **Fixed Length**: Unlike arrays, tuples have a predefined number of elements
2. **Strict Type Checking**: Each position has a specific, predetermined type
3. **Immutable Length**: Cannot add or remove elements after initial creation

### Advanced Tuple Examples
```typescript
// Tuple with Optional Elements
type DatabaseRecord = [number, string, Date?];
let record1: DatabaseRecord = [1, "Active"];
let record2: DatabaseRecord = [2, "Archived", new Date()];

// Tuple with Rest Parameters
type MultiTypeRecord = [string, ...number[]];
let log: MultiTypeRecord = ["Error", 404, 500, 503];
```

### Common Use Cases
1. **Function Return Values**
```typescript
function getUserInfo(): [string, number, boolean] {
    return ["John Doe", 30, true];
}

const [name, age, isActive] = getUserInfo();
```

2. **Representing Structured Data**
```typescript
type Coordinate = [number, number];
const cities: [string, Coordinate][] = [
    ["New York", [40.7128, -74.0060]],
    ["London", [51.5074, -0.1278]]
];
```

3. **Destructuring**
```typescript
let httpResponse: [number, string, object] = [200, "OK", {}];
let [status, message, data] = httpResponse;
```

### Tuple Limitations and Considerations
- Tuples are less flexible than regular arrays
- They're primarily used for representing fixed collections with known structures
- TypeScript will enforce type and length constraints

### Practical Tips
- Use tuples when you know exact types and count of elements
- Prefer interfaces or classes for more complex data structures
- Be cautious with large tuples (they become hard to read)

Would you like me to elaborate on any specific aspect of tuple types or provide more advanced usage examples?