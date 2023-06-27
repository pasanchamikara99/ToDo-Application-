import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Pages/Index";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
