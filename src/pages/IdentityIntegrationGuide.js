import React from "react";

export default function IdentityIntegrationGuide() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold mb-3">
          📘 Identity Integration – Microsoft Entra ID
        </h1>

        <p className="text-gray-500 mb-12">
          Authentication | MFA | SSO | Identity Protection
        </p>

        <section className="prose prose-lg max-w-none mb-16">

          <h2>🔹 Why Identity Matters</h2>

          <blockquote>
            Identity is the new security perimeter.
          </blockquote>

          <p>
            كل قرار Access يعتمد على Identity.
          </p>

        </section>

        <h2 className="text-2xl font-bold mb-4">
          🔥 Join Types
        </h2>

        <div className="overflow-x-auto mb-16">
          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-3">Join Type</th>
                <th className="border">Use Case</th>
                <th className="border">Modern?</th>
              </tr>
            </thead>

            <tbody className="text-center">

              <tr>
                <td className="border p-2 font-semibold">Entra Joined</td>
                <td className="border">Cloud-first</td>
                <td className="border">🔥 Yes</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">Hybrid</td>
                <td className="border">Legacy AD</td>
                <td className="border">Partial</td>
              </tr>

              <tr>
                <td className="border p-2 font-semibold">Registered</td>
                <td className="border">BYOD</td>
                <td className="border">Yes</td>
              </tr>

            </tbody>
          </table>
        </div>

        <section className="prose prose-lg max-w-none">

          <h2>🔥 Core Security Controls</h2>

          <ul>
            <li>MFA</li>
            <li>Passwordless</li>
            <li>Identity Protection</li>
            <li>PIM</li>
          </ul>

          <blockquote>
            ⭐ Strong identity = Strong security.
          </blockquote>

          <h2>🎯 Interview Answer</h2>

          <blockquote>
            “I integrate identity with endpoint security by enforcing MFA,
            leveraging Conditional Access, and ensuring devices are Entra joined
            for a Zero Trust architecture.”
          </blockquote>

        </section>

      </div>
    </div>
  );
}
