
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Heading from './components/Heading';
import ServiceTasks from "./components/ServiceTasks";

function App() {

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-light bg-light justify-content-between">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li>
              <Link className="nav-link" to="/service-tasks">Service Tasks</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/service-tasks" />} />
          <Route path="/home" element={<Heading />} />
          <Route path="/service-tasks" element={<ServiceTasks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;