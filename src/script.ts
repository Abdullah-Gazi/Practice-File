let myString: string = "Hello";
let myNumber: number = 23;

const addTotal = (a: number, b: number) => {
  return a + b;
};
console.log(addTotal(2, 3));

const arrayOfNumber: number[] = [2, 3, 5, 6, 8];
const arrayOfString: string[] = ["hello", "hi"];
const DhakaLatLong: readonly [number, number] = [234, 9797];
console.log(DhakaLatLong);

//function

const fullName = (fistName: string, lastName?: string) => {
  if (!lastName) {
    return console.log(fistName);
  }

  console.log(fistName + " " + lastName);
};

fullName("Abdullah");

const greeting = (greetingSub = "Welcome", name: string) => {
  console.log(greetingSub, name);
};
greeting(undefined, "Abdullah Gazi");

//* rest parameters

const summation = (...numbers: number[]): number => {
  return numbers.reduce((total, sum) => total + sum, 0);
};
console.log(summation(1, 3, 4, 5, 6, 7, 8, 9));

//* reste parameteres two

const user = (...attributes: [number, string, boolean]) => {
  const [age, name, isactive] = attributes;
  console.log(
    "Name is : " + name + " and age is : " + age + ". He is not active",
  );
};

user(26, "abdullah", true);

//object type, type alias and interface
//*object type
const user2: {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];
} = {
  name: "Abdullah Gazi",
  age: 26,
  isActive: true,
  action: () => console.log("Hello"),
  badges: ["Java", "Python", "Typescript"],
};
//*type alias
type userProperty = {
  name: string;
  age: number;
  badges: number[];
  action: () => void;
};

const user3: userProperty = {
  name: "Abdullah gazi",
  age: 26,
  badges: [1, 3, 5],
  action: () => console.log("typescript", "python"),  
};
