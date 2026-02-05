import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Configuration Example */}
          <Route
            path="/devices/configuration"
            element={<ConfigurationProfile />}
          />

          {/* Identity */}
          <Route
            path="/identity/users"
            element={<Placeholder title="Users" />}
          />
          <Route
            path="/identity/groups"
            element={<Placeholder title="Groups" />}
          />
          <Route
            path="/identity/conditional-access"
            element={<Placeholder title="Conditional Access" />}
          />

          {/* Devices */}
          <Route
            path="/devices/enrollment"
            element={<Placeholder title="Enrollment" />}
          />
          <Route
            path="/devices/autopilot"
            element={<Placeholder title="Autopilot" />}
          />
          <Route
            path="/devices/zero-touch"
            element={<Placeholder title="Zero Touch Deployment" />}
          />

          {/* Security */}
          <Route
            path="/security/compliance"
            element={<Placeholder title="Compliance Policies" />}
          />
          <Route
            path="/security/defender"
            element={<Placeholder title="Defender for Endpoint" />}
          />

          {/* Apps & Updates */}
          <Route
            path="/apps/deployment"
            element={<Placeholder title="App Deployment" />}
          />
          <Route
            path="/updates/windows"
            element={<Placeholder title="Windows Updates" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
