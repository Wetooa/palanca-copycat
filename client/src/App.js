import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SentMessagesPage from "./pages/SentMessagesPage/SentMessagesPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/messages" element={<SentMessagesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
