import logo from './logo.svg';
import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setinputValue] = useState();
  const [responseData, setResponseData] = useState();

  const generateSegitiga = async (e) => {
    e.preventDefault();
    console.log(1);
    console.log(inputValue);
    if (isNaN(inputValue)) {
      throw new Error("Input must be number");
    }

    console.log(2);

    const res = await axios.post(
      "http://localhost:8080/api/generate/segitiga",
      { data: inputValue }
    );

    console.log(res, "res")

    setResponseData(res.data);
  };

  const generateBilanganGanjil = async (e) => {
    e.preventDefault();
    console.log(1);
    console.log(inputValue);
    if (isNaN(inputValue)) {
      throw new Error("Input must be number");
    }

    console.log(2);

    const res = await axios.post(
      "http://localhost:8080/api/generate/bilangan-ganjil",
      { data: inputValue }
    );

    setResponseData(res.data);
  };

  const generateBilanganPrima = async (e) => {
    e.preventDefault();
    console.log(1);
    console.log(inputValue);
    if (isNaN(inputValue)) {
      throw new Error("Input must be number");
    }

    console.log(2);

    const res = await axios.post(
      "http://localhost:8080/api/generate/bilangan-prima",
      { data: inputValue }
    );

    setResponseData(res.data);
  };

  return (
    <div className="App">
      <form className="form">
        {/* <label>FORM</label> */}
        <input
          type="number"
          placeholder="Input Angka"
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
        />
        <div className="list-button">
          <button onClick={(e) => generateSegitiga(e)}>Generate segitiga</button>
          <button onClick={(e) => generateBilanganGanjil(e)}>
            Generate Bilangan Ganjil
          </button>
          <button onClick={(e) => generateBilanganPrima(e)}>
            Generate Bilangan Prima
          </button>
        </div>
      </form>
      <div>{responseData}</div>
    </div>
  );
}

export default App;
