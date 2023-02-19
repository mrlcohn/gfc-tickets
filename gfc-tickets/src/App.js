import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Login from "./Login";
import CreateTicket from "./CreateTicket";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create" element={<CreateTicket />} />
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
