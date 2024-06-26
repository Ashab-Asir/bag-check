import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ totalNumberOfItem, totalNumberOfPacked }) {
  return (
    <header>
      <Logo></Logo>
      <Counter
        totalNumberOfPacked={totalNumberOfPacked}
        totalNumberOfItem={totalNumberOfItem}
      ></Counter>
    </header>
  );
}
