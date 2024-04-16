import "./App.css";
import Group from "./components/Group.jsx";
function App() {
  const persons = [
    { name: "ram", age: 24 },
    { name: "laxman", age: 22 },
    { name: "seetha", age: 17 },
    { name: "bharat", age: 23 },
    { name: "shatragna", age: 22 },
  ];
  const persons1 = [
    { name: "shiva", age: 24 },
    { name: "vishnu", age: 22 },
    { name: "ram", age: 17 },
    { name: "bharat", age: 23 },
    { name: "laxman", age: 22 },
  ];
  return (
    <div className="container">
      <Group persons={persons} />;
      <Group persons={persons1} />;
    </div>
  );
}

export default App;
