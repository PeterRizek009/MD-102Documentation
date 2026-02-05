import React from "react";

export default function EndpointSecurityGuide() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold mb-3">
          📘 Endpoint Security in Intune
        </h1>

        <p className="text-gray-500 mb-12">
          Security Baselines | Antivirus | Firewall | Encryption | ASR
        </p>

        <h2 className="text-2xl font-bold mb-4">
          🔥 Endpoint Security Policies
        </h2>

        <div className="overflow-x-auto mb-16">
          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-3">Policy</th>
                <th className="border">Purpose</th>
                <th className="border">Risk if Missing</th>
              </tr>
            </thead>

            <tbody className="text-center">

              <tr>
                <td className="border p-2 font-semibold">Antivirus</td>
                <td className="border">Malware protection</td>
                <td className="border">🔥 High</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">Firewall</td>
                <td className="border">Block unauthorized traffic</td>
                <td className="border">High</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">Disk Encryption</td>
                <td className="border">Protect stolen devices</td>
                <td className="border">🔥 Critical</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">ASR</td>
                <td className="border">Block attack techniques</td>
                <td className="border">Critical</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">Device Control</td>
                <td className="border">USB restrictions</td>
                <td className="border">Medium</td>
              </tr>

            </tbody>
          </table>
        </div>

        <section className="prose prose-lg max-w-none">

          <h2>🔥 Security Baselines</h2>

          <blockquote>
            Preconfigured Microsoft-recommended settings.
          </blockquote>

          <h2>Best Practice</h2>

          <ul>
            <li>Combine Compliance + CA + MDE</li>
            <li>Use layered defense</li>
          </ul>

        </section>

      </div>
    </div>
  );
}
