export default function Counter({ totalNumberOfItem, totalNumberOfPacked }) {
  return (
    <p>
      <b>{totalNumberOfPacked}</b>/{totalNumberOfItem} is packed
    </p>
  );
}
