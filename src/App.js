import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import React, { Suspense, lazy } from "react";
const Display = lazy(() => import("./components/Display/Display"));

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
    }
    fetchData();
  }, [location]);

  return (
    <div className="App">
      {!locationData.location?.name ? (
        <div className="not-found">No Location Found</div>
      ) : (
        <Suspense fallback={<div className="loading">Loading....</div>}>
          <Display locationData={locationData} />
        </Suspense>
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
