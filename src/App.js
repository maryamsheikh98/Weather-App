import { useState } from 'react';
import './App.css';

const api = {
  key: '7c9193080393c1f2609b784f729401f9',
  base: 'http://api.openweathermap.org/data/2.5/',
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>

        <div className="input">
          <input
            className="box"
            type="text"
            placeholder="Search  Your City/Town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="box1" onClick={searchPressed}>Search</button>
        </div>

        {/* If weather is not undefined */}
        {typeof weather.main !== "undefined" ? (
          <div>
            <p>{weather.name}</p>
            <p>{weather.main.temp}°C</p>
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;
