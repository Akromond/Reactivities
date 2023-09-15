import "./App.css";
import LaptopItems from "./LaptopItems-typescriptlesson";
import { Laptops } from "./demo-typescript- lesson";

function App() {
  return (
    <div>
      <h1>Reactivities</h1>
      {Laptops.map((Laptop) => (
        <LaptopItems key={Laptop.model} Laptop={Laptop} />
      ))}
    </div>
  );
}

export default App;
