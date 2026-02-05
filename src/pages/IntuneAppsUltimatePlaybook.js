import React from "react";

export default function IntuneAppsUltimatePlaybook() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-12">

        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-3">
          📘 Microsoft Intune Apps – Enterprise Playbook
        </h1>

        <p className="text-gray-500 mb-12">
          Full Architecture | Deployment | Security | Monitoring | Offboarding
        </p>

        {/* ================= TABLE 1 ================= */}

        <h2 className="text-2xl font-bold mb-4">
          🔹 App Types Matrix
        </h2>

        <div className="overflow-x-auto mb-16">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border">App Type</th>
                <th className="border">Windows</th>
                <th className="border">iOS / iPadOS</th>
                <th className="border">Android</th>
                <th className="border">Notes</th>
              </tr>
            </thead>

            <tbody>

              <tr className="text-center">
                <td className="border p-2 font-semibold">Microsoft Store App</td>
                <td className="border">✅</td>
                <td className="border">❌</td>
                <td className="border">❌</td>
                <td className="border">New Windows Store only</td>
              </tr>

              <tr className="text-center">
                <td className="border p-2 font-semibold">Win32 (.intunewin)</td>
                <td className="border">✅</td>
                <td className="border">❌</td>
                <td className="border">❌</td>
                <td className="border">90% of enterprise apps</td>
              </tr>

              <tr className="text-center">
                <td className="border p-2 font-semibold">LOB Apps</td>
                <td className="border">MSI</td>
                <td className="border">IPA</td>
                <td className="border">APK</td>
                <td className="border">Used for internal apps</td>
              </tr>

              <tr className="text-center">
                <td className="border p-2 font-semibold">Microsoft 365 Apps</td>
                <td className="border">✅</td>
                <td className="border">❌</td>
                <td className="border">❌</td>
                <td className="border">Office Desktop</td>
              </tr>

              <tr className="text-center">
                <td className="border p-2 font-semibold">Web Apps</td>
                <td className="border">✅</td>
                <td className="border">✅</td>
                <td className="border">✅</td>
                <td className="border">Shortcut only</td>
              </tr>

              <tr className="text-center">
                <td className="border p-2 font-semibold">Managed Google Play</td>
                <td className="border">❌</td>
                <td className="border">❌</td>
                <td className="border">✅</td>
                <td className="border">Primary Android source</td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* ================= TABLE 2 ================= */}

        <h2 className="text-2xl font-bold mb-4">
          🔐 Protection Matrix
        </h2>

        <div className="overflow-x-auto mb-16">
          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-3">Protection Type</th>
                <th className="border">Windows</th>
                <th className="border">iOS</th>
                <th className="border">Android</th>
              </tr>
            </thead>

            <tbody className="text-center">

              <tr>
                <td className="border p-2 font-semibold">Compliance Policies</td>
                <td className="border">✅</td>
                <td className="border">✅</td>
                <td className="border">✅</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">Conditional Access</td>
                <td className="border">✅</td>
                <td className="border">✅</td>
                <td className="border">✅</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">App Protection (MAM)</td>
                <td className="border">❌</td>
                <td className="border">✅</td>
                <td className="border">✅</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">DLP</td>
                <td className="border">❌</td>
                <td className="border">✅</td>
                <td className="border">✅</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">Encryption</td>
                <td className="border">BitLocker</td>
                <td className="border">FileVault</td>
                <td className="border">Native</td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* ================= TABLE 3 ================= */}

        <h2 className="text-2xl font-bold mb-4">
          🧹 Wipe vs Retire
        </h2>

        <div className="overflow-x-auto mb-20">
          <table className="w-full border text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-3">Action</th>
                <th className="border">Windows</th>
                <th className="border">iOS / Android</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border p-2 font-semibold">Full Wipe</td>
                <td className="border">Erase device</td>
                <td className="border">Erase device</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">Selective Wipe</td>
                <td className="border">❌</td>
                <td className="border">Remove corporate data</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">Retire</td>
                <td className="border">Remove policies</td>
                <td className="border">Remove corporate data</td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* ================= SCENARIO ================= */}

        <h2 className="text-3xl font-bold mb-6">
          🔥 Enterprise Scenario – 4 Departments / 4 Platforms
        </h2>

        <div className="prose prose-lg max-w-none">

          <h3>Departments</h3>
          <ul>
            <li>Customer Service</li>
            <li>Sales</li>
            <li>Finance</li>
            <li>Management</li>
          </ul>

          <h3>Devices</h3>
          <ul>
            <li>Windows Corporate (Entra Joined)</li>
            <li>iOS Supervised</li>
            <li>Android Fully Managed</li>
            <li>BYOD with MAM</li>
            <li>macOS Corporate</li>
          </ul>

          <h3>Apps</h3>
          <ul>
            <li>Outlook</li>
            <li>Teams</li>
            <li>OneDrive</li>
            <li>3CX (Customer Service)</li>
            <li>Finance App</li>
          </ul>

          <hr />

          <h2>Step 1 — User Groups</h2>

          <p>Best Practice → Dynamic groups based on department.</p>

          <ul>
            <li>GRP-CS-Users</li>
            <li>GRP-Sales-Users</li>
            <li>GRP-Finance-Users</li>
            <li>GRP-Management-Users</li>
          </ul>

          <hr />

          <h2>Step 2 — Filters</h2>

          <blockquote>
            User Group = Department  
            Filter = Device Type + Management
          </blockquote>

          <p>Examples:</p>

          <ul>
            <li>FLT-Windows</li>
            <li>FLT-macOS</li>
            <li>FLT-iOS-Corp</li>
            <li>FLT-Android-Corp</li>
            <li>FLT-Mobile-BYOD-MAM</li>
          </ul>

          <hr />

          <h2>Step 3 — Infrastructure Preparation</h2>

          <ul>
            <li>Connect Managed Google Play</li>
            <li>Configure Apple MDM Push Certificate</li>
            <li>Setup ABM for supervised devices</li>
          </ul>

          <hr />

          <h2>Step 4 — Deploy Apps</h2>

          <h3>Outlook / Teams / OneDrive</h3>

          <ul>
            <li>Assign → Required</li>
            <li>Target → User Groups</li>
            <li>Use OS Filters</li>
          </ul>

          <h3>3CX</h3>

          <ul>
            <li>Win32</li>
            <li>Assigned to Customer Service only</li>
          </ul>

          <h3>Finance App</h3>

          <ul>
            <li>Finance users only</li>
            <li>Exclude BYOD</li>
          </ul>

          <hr />

          <h2>Step 5 — App Protection Strategy</h2>

          <h3>Windows</h3>

          <ul>
            <li>Compliance</li>
            <li>Defender</li>
            <li>Firewall</li>
            <li>Conditional Access</li>
          </ul>

          <h3>BYOD</h3>

          <ul>
            <li>Require PIN</li>
            <li>Encrypt app data</li>
            <li>Block copy/paste</li>
            <li>Save to OneDrive only</li>
          </ul>

          <p>
            🔥 This is called <strong>Defense in Depth</strong>
          </p>

          <hr />

          <h2>Step 6 — Monitoring</h2>

          <ul>
            <li>App install status</li>
            <li>Compliance reports</li>
            <li>App protection status</li>
            <li>Endpoint analytics</li>
          </ul>

          <p>Target success rate → 95%+</p>

          <hr />

          <h2>Step 7 — Offboarding</h2>

          <ul>
            <li>Corporate → Wipe</li>
            <li>BYOD → Selective wipe</li>
            <li>Windows → Retire or wipe</li>
          </ul>

        </div>

      </div>
    </div>
  );
}
