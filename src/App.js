import { useEffect, useState } from "react";
import "./App.css";
import Display from "./components/Display/Display";
import Input from "./components/Input/Input";

function App() {
  const [getInput, setInput] = useState("");
  const [location, setLocation] = useState("Mumbai");
  const [locationData, setLocationData] = useState({});

  const onChangeHandler = (event) => {
    setInput(event.target.value);
  };
  const onClickHandler = () => {
    setLocation(getInput);
    setInput("");
  };

  useEffect(() => {
    const url = `http://api.weatherstack.com/current?access_key=cc911f57532814a688e498ebb7d5a9f3&query=${location}`;

    async function fetchData() {
      const fetchURl = await fetch(url);
      const data = await fetchURl.json();
      setLocationData(data);
      // console.log(data);
    }
    fetchData();
  }, [location]);

  return (
    <div className="App">
      {!locationData.location?.name ? (
        <div className="not-found">No Location Found</div>
      ) : (
        <Display locationData={locationData} />
      )}

      <Input
        getInput={getInput}
        onChangeHandler={onChangeHandler}
        onClickHandler={onClickHandler}
      />
    </div>
  );
}

export default App;
