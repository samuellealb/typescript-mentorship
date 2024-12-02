# Access Modifiers: protected, private, and public keywords.

```typescript
protected employees: string[] = [];
private systemFailure: boolean = false;
```

# Readonly Modifier: readonly keyword.

```typescript
constructor(protected readonly id: number, public name: string) {}
```

# Static Properties and Methods: static keyword.

```typescript
static fiscalYear = 2021;
static createEmployee(name: string) {
  return { name: name };
}
```

# Abstract Classes and Methods: abstract keyword.

```typescript
abstract class Department {
  static fiscalYear = 2021;
  protected employees: string[] = [];

  constructor(protected readonly id: number, public name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;
}
```

# Type Annotations: Specifying types for variables, parameters, and return types.

```typescript
protected employees: string[] = [];
constructor(protected readonly id: number, public name: string) {}
static createEmployee(name: string) {
  return { name: name };
}
addEmployee(employee: string) {
  this.employees.push(employee);
}
```

# Getters and Setters: Using get and set keywords.

```typescript
get systemIsDown() {
  return this.systemFailure;
}
set systemIsDown(value) {
  if (!value) {
    throw new Error("Missing value");
  }
}
```
