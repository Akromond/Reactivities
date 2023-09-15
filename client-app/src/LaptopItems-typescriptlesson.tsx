import { Laptop } from "./demo-typescript- lesson";

interface Props {
  Laptop: Laptop;
}
export default function LaptopItems({ Laptop }: Props) {
  return (
    <div key={Laptop.brand}>
      <span>{Laptop.brand}</span>
      <button onClick={() => Laptop.make(Laptop.model + Laptop.processor)}>
        Click
      </button>
    </div>
  );
}
