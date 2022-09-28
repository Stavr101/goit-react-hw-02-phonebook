export default function ContactsList({ items, removeContact }) {
  //   console.log(items);
  const elements = items.map(({ name, id, number }) => {
    return (
      <li key={id}>
        {name}: {number}{' '}
        <button onClick={() => removeContact(id)}>Delete</button>
      </li>
    );
  });
  return <ul>{elements}</ul>;
}
