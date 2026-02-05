import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import OnPremiseDeployment from "./pages/OnPremiseDeployment";
import WindowsAutopilotUltimateGuide from "./pages/WindowsAutopilotUltimateGuide";
import IdentityIntegrationGuide from "./pages/IdentityIntegrationGuide";
import IntuneGroupsDocumentation from "./pages/IntuneGroupsDocumentation";
import RBACDocumentation from "./pages/RBACDocumentation";
import ConditionalAccessUltimateGuide from "./pages/ConditionalAccessUltimateGuide";
import IntuneDeviceEnrollmentDocumentation from "./pages/IntuneDeviceEnrollmentDocumentation";
import ConfigurationProfilesDocumentation from "./pages/ConfigurationProfilesDocumentation";
import CompliancePoliciesDocumentation from "./pages/CompliancePoliciesDocumentation";
import EndpointSecurityGuide from "./pages/EndpointSecurityGuide";
import MDEFullDocumentation from "./pages/MDEFullDocumentation";
import Microsoft365AppsDocumentation from "./pages/Microsoft365AppsDocumentation";
import IntuneAppsUltimatePlaybook from "./pages/IntuneAppsUltimatePlaybook";
import WindowsUpdateForBusinessGuide from "./pages/WindowsUpdateForBusinessGuide";
import IntuneReportsDocumentation from "./pages/IntuneReportsDocumentation";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/on-premise-deployment" element={<OnPremiseDeployment />} />
      <Route path="/windows-autopilot" element={<WindowsAutopilotUltimateGuide />} />

      <Route path="/identity-integration" element={<IdentityIntegrationGuide />} />
      <Route path="/groups" element={<IntuneGroupsDocumentation />} />
      <Route path="/rbac" element={<RBACDocumentation />} />
      <Route path="/conditional-access" element={<ConditionalAccessUltimateGuide />} />

      <Route path="/device-enrollment" element={<IntuneDeviceEnrollmentDocumentation />} />
      <Route path="/configuration-profiles" element={<ConfigurationProfilesDocumentation />} />

      <Route path="/compliance-policies" element={<CompliancePoliciesDocumentation />} />
      <Route path="/endpoint-security" element={<EndpointSecurityGuide />} />
      <Route path="/mde" element={<MDEFullDocumentation />} />

      <Route path="/microsoft-365-apps" element={<Microsoft365AppsDocumentation />} />
      <Route path="/intune-apps" element={<IntuneAppsUltimatePlaybook />} />
      <Route path="/windows-update" element={<WindowsUpdateForBusinessGuide />} />

      <Route path="/reports" element={<IntuneReportsDocumentation />} />
    </Routes>
  );
}
