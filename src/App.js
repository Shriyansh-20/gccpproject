import Members from "./components/members";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Technical from "./components/technical";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Members />} />
        <Route path="/technical" element={<Technical />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
