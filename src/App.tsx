
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import HomeLayout from "./components/HomeLayout";
import ServiceTasks from "./components/ServiceTasks";

function App() {

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-light bg-light justify-content-between">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link className="nav-link" to="/home">Domů</Link>
            </li>
            <li>
              <Link className="nav-link" to="/service-tasks">Servisní úkony</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/service-tasks" />} />
          <Route path="/home" element={<HomeLayout />} />
          <Route path="/service-tasks" element={<ServiceTasks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;