import React from "react";

export default function IdentityIntegrationEngineerRunbook() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-10">

        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-4">
          Identity Integration — Engineer Runbook
        </h1>

        <p className="text-gray-500 mb-10">
          Deep Architecture • Zero Trust • Entra ID • Conditional Access • Identity Security
        </p>

        {/* MINDSET */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">🔥 Engineer Mindset</h2>

          <p className="mb-4">
            زمان كنا بنأمن الشبكة… دلوقتى بنأمن الـ Identity.
          </p>

          <div className="bg-blue-50 p-5 rounded-xl border">
            <p className="font-semibold">
              Identity is the new security perimeter.
            </p>
          </div>

          <p className="mt-4">
            الموظف ممكن يدخل من أى مكان — بيت، كافيه، موبايل شخصى —
            فالسؤال بقى:
          </p>

          <p className="font-semibold mt-2">
            مين يدخل؟ وعلى أساس إيه؟
          </p>
        </section>

        {/* ARCHITECTURE FLOW */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">🏗️ Identity Architecture Flow</h2>

          <div className="bg-gray-100 p-6 rounded-xl">
            <p>User → Entra ID → Conditional Access → Signals → Decision</p>
          </div>

          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Device compliant?</li>
            <li>Location safe?</li>
            <li>User risk?</li>
            <li>MFA passed?</li>
          </ul>
        </section>

        {/* JOIN TYPES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">🔐 Join Types</h2>

          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3 border">Join Type</th>
                  <th className="border">Use Case</th>
                  <th className="border">Engineer Verdict</th>
                </tr>
              </thead>

              <tbody>

                <tr className="text-center">
                  <td className="border p-3 font-semibold">Entra Joined</td>
                  <td className="border">Cloud-first companies</td>
                  <td className="border text-green-600 font-semibold">
                    ⭐ Future Standard
                  </td>
                </tr>

                <tr className="text-center">
                  <td className="border p-3 font-semibold">Hybrid</td>
                  <td className="border">Legacy infrastructure</td>
                  <td className="border text-yellow-600">
                    Transitional
                  </td>
                </tr>

                <tr className="text-center">
                  <td className="border p-3 font-semibold">Registered</td>
                  <td className="border">BYOD devices</td>
                  <td className="border text-blue-600">
                    Required for MAM
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

        {/* SECURITY CONTROLS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            🔥 Core Identity Security Controls
          </h2>

          <div className="space-y-4">

            <div className="bg-red-50 border p-4 rounded-xl">
              <h3 className="font-bold">MFA — Non Negotiable</h3>
              <p>يمنع أكتر من 99% من credential attacks.</p>
            </div>

            <div className="bg-purple-50 border p-4 rounded-xl">
              <h3 className="font-bold">Conditional Access</h3>
              <p>Policy engine بيتخذ قرار السماح أو المنع.</p>
            </div>

            <div className="bg-yellow-50 border p-4 rounded-xl">
              <h3 className="font-bold">PIM</h3>
              <p>Admin access يكون Just-in-time بدل دائم.</p>
            </div>

            <div className="bg-green-50 border p-4 rounded-xl">
              <h3 className="font-bold">Identity Protection</h3>
              <p>يكشف risky sign-ins باستخدام AI.</p>
            </div>

          </div>
        </section>

        {/* PASSWORDLESS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">🚀 Passwordless Future</h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Windows Hello</li>
            <li>FIDO2 Keys</li>
            <li>Authenticator</li>
          </ul>

          <p className="mt-3 font-semibold">
            Password = weakest link.
          </p>
        </section>

        {/* DESIGN */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            🧠 Enterprise Identity Design
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Require MFA for all users</li>
            <li>Block legacy authentication</li>
            <li>Require compliant devices</li>
            <li>Use risk-based policies</li>
            <li>Admins protected via PIM</li>
          </ul>
        </section>

        {/* MISTAKES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">
            ☠️ Critical Mistakes
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Multiple Global Admins</li>
            <li>No Break Glass account</li>
            <li>MFA optional</li>
            <li>Legacy auth enabled</li>
          </ul>
        </section>

        {/* TROUBLESHOOTING */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            🛠️ Troubleshooting Flow
          </h2>

          <div className="bg-gray-100 p-5 rounded-xl">
            Check Sign-in Logs → Identify Policy → Verify Compliance →
            Check Risk → Validate MFA
          </div>
        </section>

        {/* SCENARIO */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            🔥 Real Attack Scenario
          </h2>

          <p>
            Hacker حاول يدخل على CFO من دولة غريبة →
            النظام اكتشف Sign-in risk →
            Conditional Access فعل Policy →
            تم Block فوراً.
          </p>

          <div className="bg-green-50 border mt-4 p-5 rounded-xl font-semibold">
            Zero Trust prevented the breach automatically.
          </div>
        </section>

      </div>
    </div>
  );
}
