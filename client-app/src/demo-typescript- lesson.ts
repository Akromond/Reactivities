///TypeScript Demo
export interface Laptop {
  make: (makeOfPc: string) => void;
  brand: string;
  model: number;
  processor: string;
}

const ThinkpadX1: Laptop = {
  make: () => console.log("Lenovo"),
  brand: "Xtreme X1",
  model: 293945665,
  processor: "I5",
};
console.log(ThinkpadX1);

const Alein: Laptop = {
  make: () => console.log("HP"),
  brand: "AleinWare",
  model: 4792048482,
  processor: "I7",
};
console.log(Alein);

const Ideapad: Laptop = {
  make: () => console.log("Lenovo"),
  brand: "IdeaP4",
  model: 9884688483,
  processor: "I3",
};
console.log(Ideapad);

export const Laptops = [Alein, ThinkpadX1, Ideapad];
