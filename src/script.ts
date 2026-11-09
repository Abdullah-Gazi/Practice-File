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
