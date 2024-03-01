import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import SearchPage from "./layout/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
        <Route path="/results" element={<SearchPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
