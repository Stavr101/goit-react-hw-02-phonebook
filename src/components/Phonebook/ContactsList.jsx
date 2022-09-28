export default function ContactsList({ items }) {
  console.log(items);
  const elements = items.map(({ name, id, number }) => {
    return (
      <li key={id}>
        {name}: {number}{' '}
      </li>
    );
  });
  return <ul>{elements}</ul>;
}
