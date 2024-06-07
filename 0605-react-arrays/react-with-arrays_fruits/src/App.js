import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "🍏 Apple", color: "green" },
    { id: 1, name: "🍊 Apricot", color: "orange" },
    { id: 2, name: "🍓 Strawberry", color: "red" },
    { id: 3, name: "🥭 Mango", color: "yellow" },
    { id: 4, name: "🍉 Watermelon", color: "green" },
  ];

  return (
    <ul className="app">
      {fruits.map((fruit) => {
        return (
          <li key={fruit.id}>
            <Card name={fruit.name} color={fruit.color} />
          </li>
        );
      })}
    </ul>
  );
}
