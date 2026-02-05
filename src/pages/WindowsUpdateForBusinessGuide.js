import React from "react";

export default function WindowsUpdateForBusinessGuide() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold mb-3">
          📘 Windows Update for Business
        </h1>

        <p className="text-gray-500 mb-12">
          Update Rings | Feature Updates | Deployment Strategy
        </p>

        <h2 className="text-2xl font-bold mb-4">
          🔥 Update Types
        </h2>

        <div className="overflow-x-auto mb-16">
          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-3">Update</th>
                <th className="border">Frequency</th>
                <th className="border">Risk</th>
              </tr>
            </thead>

            <tbody className="text-center">

              <tr>
                <td className="border p-2 font-semibold">Quality</td>
                <td className="border">Monthly</td>
                <td className="border">Low</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">Feature</td>
                <td className="border">Yearly</td>
                <td className="border">Medium</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">Driver</td>
                <td className="border">As needed</td>
                <td className="border">High</td>
              </tr>

            </tbody>
          </table>
        </div>

        <section className="prose prose-lg max-w-none">

          <h2>🔥 Deployment Rings Strategy</h2>

          <ul>
            <li>Pilot (IT devices)</li>
            <li>Broad deployment</li>
            <li>Critical devices last</li>
          </ul>

          <blockquote>
            ⭐ Never deploy updates to everyone at once.
          </blockquote>

        </section>

      </div>
    </div>
  );
}
