import React from "react";

export default function IntuneReportsDocumentation() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold mb-3">
          📘 Intune Reports – Administrator Guide
        </h1>

        <p className="text-gray-500 mb-12">
          Monitoring | Security Visibility | Operational Insights
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-3">Report</th>
                <th className="border">Purpose</th>
                <th className="border">Where to Find</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border p-2 font-semibold">Device Compliance</td>
                <td className="border">See compliant vs non-compliant devices</td>
                <td className="border">Devices → Monitor</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">App Install Status</td>
                <td className="border">Track app deployment failures</td>
                <td className="border">Apps → Monitor</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">Device Configuration</td>
                <td className="border">Policy success/errors</td>
                <td className="border">Devices → Configuration Profiles</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">Endpoint Analytics</td>
                <td className="border">Performance + user experience</td>
                <td className="border">Reports → Endpoint Analytics</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">Enrollment Failures</td>
                <td className="border">Troubleshoot onboarding</td>
                <td className="border">Devices → Monitor</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">Windows Update</td>
                <td className="border">Update readiness</td>
                <td className="border">Reports → Windows Updates</td>
              </tr>

            </tbody>
          </table>
        </div>

        <section className="prose prose-lg max-w-none mt-16">

          <h2>🔥 Daily Admin Monitoring Flow</h2>

          <ol>
            <li>Check compliance</li>
            <li>Check app failures</li>
            <li>Review config errors</li>
            <li>Review security posture</li>
          </ol>

          <blockquote>
            ⭐ Visibility = Security.
          </blockquote>

        </section>

      </div>
    </div>
  );
}
