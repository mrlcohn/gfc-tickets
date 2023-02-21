import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Login from "./Login";
import CreateTicket from "./CreateTicket";
import Confirmation from "./Confirmation";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  const handleLogin = user => setUser(user);

  return (
    <Router>
      <div className="app">
        <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Welcome user={user} />} />
              <Route path="/login" element={<Login user={user} onLogin={handleLogin} />} />
              <Route path="/create" element={<CreateTicket />} />
              <Route path="/success" element={<Confirmation user={user} />}></Route>
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
