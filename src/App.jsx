import { useState } from "react";
import "./App.css";
import Group from "./components/Group.jsx";
import Greeting from "./components/Greeting.jsx";

import Counter from "./components/Counter.jsx";
function App() {
  const [count, SetCount] = useState(0);
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
      <Group persons={persons} />
      <Group persons={persons1} />
      <Counter count={count} setCount={SetCount} />
      <Greeting count={count} />
    </div>
  );
}

export default App;
