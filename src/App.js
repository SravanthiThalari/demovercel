import { BrowserRouter, Routes, Route } from "react-router-dom";

function Reg() {
  return <h1>Registration Page</h1>;
}

function Home() {
  return <h1>Home Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reg" element={<Reg />} />
        <Route path="/h" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;