export default function App() {
return (
<Router>
<Routes>
<Route path="/" element={<Home />} />


{/* Deployment */}
<Route path="/deployment/on-premise" element={<OnPremiseDeployment />} />
<Route path="/deployment/autopilot" element={<Placeholder title="Autopilot" />} />


{/* Devices */}
<Route path="/devices/configuration" element={<ConfigurationProfile />} />
<Route path="/devices/enrollment" element={<Placeholder title="Enrollment" />} />
<Route path="/devices/autopilot" element={<Placeholder title="Autopilot" />} />
<Route path="/devices/zero-touch" element={<Placeholder title="Zero Touch Deployment" />} />


{/* Identity */}
<Route path="/identity/users" element={<Placeholder title="Users" />} />
<Route path="/identity/groups" element={<Placeholder title="Groups" />} />
<Route path="/identity/conditional-access" element={<Placeholder title="Conditional Access" />} />


{/* Security */}
<Route path="/security/compliance" element={<Placeholder title="Compliance Policies" />} />
<Route path="/security/defender" element={<Placeholder title="Defender for Endpoint" />} />


{/* Apps & Updates */}
<Route path="/apps/deployment" element={<Placeholder title="App Deployment" />} />
<Route path="/updates/windows" element={<Placeholder title="Windows Updates" />} />


{/* Fallback */}
<Route path="*" element={<Placeholder title="404 - Not Found" />} />
</Routes>
</Router>
);
}
