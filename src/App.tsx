
import { Routes, Route, useEffect } from "react-router-dom";
import Index from "./pages/Index";
import Feed from "./pages/Feed";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    // Create film grain overlay
    const filmGrain = document.createElement("div");
    filmGrain.className = "film-grain";
    document.body.appendChild(filmGrain);
    
    // Create CRT overlay
    const crtOverlay = document.createElement("div");
    crtOverlay.className = "crt-overlay";
    document.body.appendChild(crtOverlay);
    
    // Create VHS tracking effect element
    const vhsTracking = document.createElement("div");
    vhsTracking.className = "vhs-tracking";
    document.body.appendChild(vhsTracking);
    
    return () => {
      document.body.removeChild(filmGrain);
      document.body.removeChild(crtOverlay);
      document.body.removeChild(vhsTracking);
    };
  }, []);

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
