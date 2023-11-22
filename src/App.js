import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

const getRandomAnimals = () => {
  const animals = ["dog", "cat", "cow", "bird", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
};

function App() {
  // const [count, setCount] = useState(0);
  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimals()]);
  };

  return (
    <div className="app">
      {/* <button onClick={handleClick}>Animal Show</button>
      <AnimalShow count={count} /> */}

      <button onClick={handleClick}>Animal Show</button>
      <div className="animal-list">
        {animals.map((animal, index) => {
          return <AnimalShow type={animal} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
