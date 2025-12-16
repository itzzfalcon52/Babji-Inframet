import Home from "./pages/Home";
import About from "./pages/About";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import { Route, Routes } from "react-router-dom";
import GetQuotation from "./pages/GetQuotation";
import TermsAndConditions from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
function App() {
  return (
    <div className="min-h-full w-full m-0 p-0">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Quotation" element={<GetQuotation />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
