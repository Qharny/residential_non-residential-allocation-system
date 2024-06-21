// import logo from './logo.svg';
import "./App.css";
import HeroPage from "./components/hero/hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

function HomeRouter() {
  return (
    <div className="App">
      <HeroPage />
    </div>
  );
}

export default App;
