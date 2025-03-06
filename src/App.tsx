
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Feed from "./pages/Feed";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
