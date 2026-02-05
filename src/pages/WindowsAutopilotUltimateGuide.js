import React from "react";

export default function WindowsAutopilotEngineerRunbook() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-10">

        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-4">
          Windows Autopilot — Engineer Runbook
        </h1>

        <p className="text-gray-500 mb-10">
          Zero Touch Deployment • Modern Provisioning • Intune • Entra Join
        </p>

        {/* MINDSET */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">🔥 Engineer Mindset</h2>

          <p>
            Autopilot هدفه يموت حاجة اسمها Imaging.
          </p>

          <div className="bg-blue-50 border p-5 rounded-xl mt-4 font-semibold">
            Ship device → User logs in → Device configures automatically
          </div>

          <p className="mt-4">
            مفيش USB…  
            مفيش MDT…  
            مفيش IT يلمس الجهاز.
          </p>
        </section>

        {/* WHY AUTOPILOT */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">🚀 Why Companies Love Autopilot</h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Zero-touch provisioning</li>
            <li>Remote workforce ready</li>
            <li>Reduce IT workload</li>
            <li>No golden images</li>
            <li>Cloud-first deployment</li>
          </ul>
        </section>

        {/* ARCHITECTURE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">🏗️ Autopilot Architecture</h2>

          <div className="bg-gray-100 p-6 rounded-xl font-semibold">
            Device Hardware Hash → Autopilot Service → Entra ID → Intune →
            Policies + Apps
          </div>
        </section>

        {/* MODES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">🔥 Deployment Modes</h2>

          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3 border">Mode</th>
                  <th className="border">Best For</th>
                  <th className="border">Engineer Verdict</th>
                </tr>
              </thead>

              <tbody>

                <tr className="text-center">
                  <td className="border p-3 font-semibold">User-Driven</td>
                  <td className="border">Corporate laptops</td>
                  <td className="border text-green-600 font-semibold">
                    ⭐ Most Common
                  </td>
                </tr>

                <tr className="text-center">
                  <td className="border p-3 font-semibold">Self Deploying</td>
                  <td className="border">Kiosk / Shared devices</td>
                  <td className="border">Zero user interaction</td>
                </tr>

                <tr className="text-center">
                  <td className="border p-3 font-semibold">Pre-Provisioning</td>
                  <td className="border">Speed deployments</td>
                  <td className="border text-purple-600">
                    ⭐ Engineer Favorite
                  </td>
                </tr>

                <tr className="text-center">
                  <td className="border p-3 font-semibold">Hybrid</td>
                  <td className="border">Legacy AD companies</td>
                  <td className="border text-yellow-600">
                    Avoid if possible
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

        {/* ESP */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            🔐 Enrollment Status Page (ESP)
          </h2>

          <p>
            ESP بيمنع المستخدم من دخول الجهاز قبل ما:
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>Security policies apply</li>
            <li>Critical apps install</li>
          </ul>

          <div className="bg-red-50 border mt-4 p-4 rounded-xl font-semibold">
            بدون ESP → User ممكن يدخل جهاز غير مؤمن.
          </div>
        </section>

        {/* DESIGN DECISIONS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            🧠 Engineer Design Decisions
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Cloud-first؟ → Entra Join</li>
            <li>Deploy apps during ESP carefully</li>
            <li>Use pilot devices first</li>
            <li>Avoid installing heavy apps in ESP</li>
          </ul>
        </section>

        {/* NETWORK */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            🌐 Network Requirements
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Open Microsoft endpoints</li>
            <li>Avoid SSL inspection</li>
            <li>Stable internet required</li>
          </ul>
        </section>

        {/* MISTAKES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">
            ☠️ Critical Mistakes
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Deploying too many apps in ESP</li>
            <li>No pilot testing</li>
            <li>Bad network</li>
            <li>Forgetting device registration</li>
          </ul>
        </section>

        {/* TROUBLESHOOTING */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            🛠️ Troubleshooting Flow
          </h2>

          <div className="bg-gray-100 p-5 rounded-xl font-semibold">
            Device registered? → Profile assigned? → Internet OK? →
            ESP stuck? → Check logs
          </div>
        </section>

        {/* SCENARIO */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            🔥 Real Enterprise Scenario
          </h2>

          <p>
            شركة بتشحن لابتوبات للموظفين فى بيوتهم.
          </p>

          <p className="mt-2">
            الموظف يفتح الجهاز → يدخل credentials →
            الجهاز يعمل Entra Join →
            Intune ينزل policies →
            apps تتثبت →
            الجهاز يبقى compliant.
          </p>

          <div className="bg-green-50 border mt-4 p-5 rounded-xl font-semibold">
            IT never touched the device.
          </div>
        </section>

      </div>
    </div>
  );
}
