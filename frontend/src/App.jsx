import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Pages/Index";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
