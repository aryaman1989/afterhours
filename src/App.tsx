
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Feed from "./pages/Feed";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
