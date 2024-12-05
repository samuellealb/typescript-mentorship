type Atributo = { [key: string]: number };

class Personagem {
  readonly id: number;
  public nome: string;
  public titulo: string | undefined;
  public classe: string;
  public atributos: Atributo[] = [];
  private isDead: boolean = false;

  get nomeCompleto() {
    return this.titulo ? `${this.nome}, ${this.titulo}` : this.nome;
  }

  set adicionarTitulo(titulo: string) {
    this.titulo = titulo;
  }

  get isAlive() { return  !this.isDead; }
  set isAlive(value: boolean) { this.isDead = !value; }


  protected constructor(nome: string, classe: string) {
    this.id = Math.floor(Math.random() * 1000) + 1;
    this.nome = nome;
    this.classe = classe;
  }

  protected gerarAtributo(atributo: string) {
    const attr: Atributo = {};
    attr[atributo] = Math.floor(Math.random() * 100) + 1;
    this.atributos.push(attr);
  }

  static gerarNPC(nome: string, classe: string) {
    const npc = new Personagem(nome, classe);
    npc.gerarAtributo("Força");
    npc.gerarAtributo("Agilidade");
    npc.gerarAtributo("Destreza");
    return npc;
  }
}

class Guerreiro extends Personagem {
  constructor(nome: string) {
    super(nome, "Guerreiro");
    this.gerarAtributo("Força");
    this.gerarAtributo("Agilidade");
    this.gerarAtributo("Destreza");
  }
}

const joao = new Guerreiro("João");
const fulano = Personagem.gerarNPC("Fulano", "Ladrão");

console.log(joao.isAlive);
joao.isAlive = false;
console.log(joao.isAlive);

joao.adicionarTitulo = "O Destemido";
console.log(joao.nomeCompleto);


// // // #### Classes

// abstract class Department {
//   // private readonly id: number; // This is a private property, accessible only within the class and is read-only
//   // public name: string; // This is a public property, accessible from outside the class. this is default behavior and can be omitted
//   protected employees: string[] = []; // This is a protected property, accessible within the class and in derived classes
//   static fiscalYear = 2021;

//   constructor(protected readonly id: number, public name: string) {
//     // This can be ommited if we use the public keyword in the constructor
//     // this.name = n;
//     // this.id = id;
//     // console.log(this.fiscalYear); // Static properties are accessed with the class name
//   }

//   // Static methods are called on the class itself, not on an instance of the class. They are not available for the constructor and methods of the class it belongs.
//   static createEmployee(name: string) {
//     return { name: name };
//   }

//   describe(this: Department) {
//     console.log(
//       "Department " +
//         this.id +
//         ": " +
//         this.name +
//         "; Employees: " +
//         this.employees.length +
//         ";"
//     );
//   }

//   // Abstract methods must be implemented in the derived classes
//   // abstract describe(this: Department): void;

//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// class ITDepartment extends Department {
//   admins: string[]; // could be initialized in the constructor
//   private systemFailure: boolean = false;

//   get systemIsDown() {
//     return this.systemFailure;
//   }
//   set systemIsDown(value) {
//     if (!value) {
//       throw new Error("Missing value");
//     }
//     this.systemFailure = value;
//   }

//   constructor(id: number, admins: string[]) {
//     super(id, "IT"); // The `super()` call invokes the constructor of the base class, passing the `id` and the string "IT Department" as arguments.
//     this.admins = admins; // This is a new property that is not in the base class. It nees to be initialized after the `super()` call.
//   }

//   describe(this: ITDepartment) {
//     console.log(
//       "Department " +
//         this.id +
//         ": " +
//         this.name +
//         "; Employees: " +
//         this.employees.length +
//         "; System Down: " +
//         this.systemIsDown +
//         ";"
//     );
//   }
// }

// class AccountingDepartment extends Department {

//   // Singleton pattern: A class that can have only one instance
//   private constructor(id: number, private reports: string[]) {
//     super(id, "Accounting");
//   }

//   private static instance: AccountingDepartment;

//   static getInstance () {
//     if (this.instance) {
//       return this.instance;
//     }
//     this.instance = new AccountingDepartment(1, []);
//     return this.instance;
//   }

//   addReport(text: string) {
//     this.reports.push(text);
//   }

//   printReports() {
//     console.log(this.reports);
//   }

//   describe(this: AccountingDepartment) {
//     console.log(
//       "Department " +
//         this.id +
//         ": " +
//         this.name +
//         "; Employees: " +
//         this.employees.length +
//         "; Reports: " +
//         this.reports.length +
//         ";"
//     );
//   }
// }

// // const newGuy = Department.createEmployee("New Guy");
// // console.log(newGuy, Department.fiscalYear);

// const it = new ITDepartment(2, ["João"]);
// // it.addEmployee("José");
// // it.addEmployee("Mariah");
// // it.employees[2] = "Anna"; // This is not a good practice
// it.describe();

// // it.printEmployeeInformation();
// // console.log(it);
// // const shadyIt = { name: 'Shady IT', describe: it.describe };
// // shadyIt.describe();

// // const accounting = new AccountingDepartment(1, []);
// const accounting = AccountingDepartment.getInstance(); // Singleton pattern: A class that can have only one instance

// // accounting.addEmployee("Ana");
// // accounting.addReport("Something went wrong...");
// // accounting.addReport("This is good");
// accounting.describe();
// // accounting.printEmployeeInformation();
// // console.log(accounting);
