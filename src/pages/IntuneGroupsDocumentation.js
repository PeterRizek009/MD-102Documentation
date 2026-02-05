import React from "react";

export default function IntuneGroupsDocumentation() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold mb-3">
          📘 Groups in Microsoft Intune & Entra ID
        </h1>

        <p className="text-gray-500 mb-12">
          Targeting | Assignment | Filters | Architecture | Best Practices
        </p>

        <section className="prose prose-lg max-w-none mb-16">

          <h2>🔹 What Are Groups?</h2>

          <p>
            Groups هى العمود الفقرى لكل Deployment فى Intune.
          </p>

          <blockquote>
            ❗ بدون Groups → لا يوجد Assignment → لا يوجد Management
          </blockquote>

          <p>تُستخدم لتطبيق:</p>

          <ul>
            <li>Apps</li>
            <li>Policies</li>
            <li>Compliance</li>
            <li>Conditional Access</li>
            <li>Scripts</li>
          </ul>

        </section>

        {/* TABLE */}
        <h2 className="text-2xl font-bold mb-4">
          🔥 Types of Groups
        </h2>

        <div className="overflow-x-auto mb-16">
          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-3">Group Type</th>
                <th className="border">Members</th>
                <th className="border">Best Use Case</th>
                <th className="border">Automation</th>
              </tr>
            </thead>

            <tbody className="text-center">

              <tr>
                <td className="border p-2 font-semibold">User Groups</td>
                <td className="border">Users only</td>
                <td className="border">Apps, CA, MAM</td>
                <td className="border">Dynamic supported</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">Device Groups</td>
                <td className="border">Devices</td>
                <td className="border">Kiosk / Shared</td>
                <td className="border">Dynamic supported</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">Microsoft 365 Groups</td>
                <td className="border">Users</td>
                <td className="border">Collaboration</td>
                <td className="border">Dynamic</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">Security Groups</td>
                <td className="border">Users / Devices</td>
                <td className="border">Intune targeting</td>
                <td className="border">Dynamic</td>
              </tr>

            </tbody>
          </table>
        </div>

        <section className="prose prose-lg max-w-none">

          <h2>🔥 Dynamic Groups (Engineer Level)</h2>

          <p>تُحدث تلقائياً حسب Attributes.</p>

          <h3>Example:</h3>

          <pre>
(user.department -eq "Finance")
          </pre>

          <blockquote>
            ⭐ Dynamic Groups تقلل الأخطاء البشرية.
          </blockquote>

          <h2>🔥 Assignment Strategy</h2>

          <ul>
            <li>User-based → Preferred</li>
            <li>Device-based → Special scenarios</li>
          </ul>

          <blockquote>
            User Group = WHO  
            Filter = WHAT device  
          </blockquote>

          <h2>Senior Best Practices</h2>

          <ul>
            <li>Avoid too many groups</li>
            <li>Use naming convention</li>
            <li>Prefer Dynamic</li>
            <li>Always test with pilot group</li>
          </ul>

        </section>

      </div>
    </div>
  );
}
