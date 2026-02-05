import React from "react";

export default function RBACDocumentation() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold mb-3">
          📘 Users & RBAC in Intune
        </h1>

        <p className="text-gray-500 mb-12">
          Least Privilege | Access Control | Security Architecture
        </p>

        <h2 className="text-2xl font-bold mb-4">
          🔥 Built-in Roles Table
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-3">Role</th>
                <th className="border">Permissions</th>
                <th className="border">Use Case</th>
                <th className="border">Risk Level</th>
              </tr>
            </thead>

            <tbody className="text-center">

              <tr>
                <td className="border p-2 font-semibold">Global Admin</td>
                <td className="border">Everything</td>
                <td className="border">Emergency only</td>
                <td className="border">🔥 Extreme</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">Intune Admin</td>
                <td className="border">Full Intune control</td>
                <td className="border">Endpoint team</td>
                <td className="border">High</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">Help Desk Operator</td>
                <td className="border">Remote actions</td>
                <td className="border">Support teams</td>
                <td className="border">Low</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">Read Only</td>
                <td className="border">View data</td>
                <td className="border">Auditors</td>
                <td className="border">Minimal</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">Policy & Profile Manager</td>
                <td className="border">Manage policies</td>
                <td className="border">Security engineers</td>
                <td className="border">Medium</td>
              </tr>

            </tbody>
          </table>
        </div>

        <section className="prose prose-lg max-w-none mt-16">

          <h2>🔥 RBAC Core Principle</h2>

          <blockquote>
            Least Privilege → Give minimum access required.
          </blockquote>

          <h2>Scope Tags</h2>

          <p>
            تستخدم لتحديد من يرى ماذا.
          </p>

          <p>Example:</p>

          <ul>
            <li>Dubai IT → sees Dubai devices only</li>
            <li>Cairo IT → sees Cairo devices</li>
          </ul>

          <h2>Custom Roles</h2>

          <p>
            تُستخدم عندما تحتاج صلاحيات دقيقة.
          </p>

          <blockquote>
            ⭐ Mature companies always use Custom RBAC.
          </blockquote>

        </section>

      </div>
    </div>
  );
}
