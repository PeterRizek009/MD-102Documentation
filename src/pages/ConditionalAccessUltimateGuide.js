import React from "react";

export default function ConditionalAccessUltimateGuide() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-2">
          📘 Conditional Access – Ultimate Zero Trust Guide
        </h1>

        <p className="text-gray-500 mb-12">
          Architecture | Policies | Signals | Design | Monitoring | Troubleshooting | Enterprise Scenarios
        </p>

        {/* OVERVIEW */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 1) What is Conditional Access?</h2>

          <p>
            Conditional Access (CA) هو محرك التحكم فى الوصول داخل Microsoft Entra ID.
            فكر فيه كأنه:
          </p>

          <blockquote>
            🔥 Intelligent Access Gate
          </blockquote>

          <p>
            بدلاً من السماح بالدخول بناءً على Username + Password فقط،
            يقوم Conditional Access باتخاذ قرار ذكى اعتماداً على:
          </p>

          <ul>
            <li>User identity</li>
            <li>Device trust</li>
            <li>Location</li>
            <li>Risk level</li>
            <li>Application sensitivity</li>
          </ul>

          <blockquote>
            ⭐ Conditional Access هو قلب Zero Trust.
          </blockquote>
        </section>

        {/* ZERO TRUST */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔥 2) Zero Trust Model</h2>

          <blockquote>
            Never Trust — Always Verify
          </blockquote>

          <p>يعنى:</p>

          <ul>
            <li>لا تثق فى أى User أو Device تلقائياً</li>
            <li>تحقق قبل منح الوصول</li>
            <li>راقب باستمرار</li>
          </ul>

          <h3>Zero Trust Pillars</h3>

          <ul>
            <li>Identity</li>
            <li>Device</li>
            <li>Application</li>
            <li>Data</li>
          </ul>
        </section>

        {/* HOW IT WORKS */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 3) How Conditional Access Works</h2>

          <ol>
            <li>User attempts sign-in</li>
            <li>Signals are evaluated</li>
            <li>Policy applied</li>
            <li>Access granted OR blocked</li>
          </ol>

          <blockquote>
            Signals → Decision → Enforcement
          </blockquote>
        </section>

        {/* SIGNAL TABLE */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">
            🔥 Signals Used in Conditional Access
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-3">Signal</th>
                  <th className="border">Example</th>
                  <th className="border">Risk Level</th>
                </tr>
              </thead>

              <tbody className="text-center">

                <tr>
                  <td className="border p-2 font-semibold">User Risk</td>
                  <td className="border">Leaked credentials</td>
                  <td className="border">🔥 High</td>
                </tr>

                <tr>
                  <td className="border p-2 font-semibold">Device Compliance</td>
                  <td className="border">BitLocker OFF</td>
                  <td className="border">High</td>
                </tr>

                <tr>
                  <td className="border p-2 font-semibold">Location</td>
                  <td className="border">Unknown country</td>
                  <td className="border">Medium</td>
                </tr>

                <tr>
                  <td className="border p-2 font-semibold">Device Platform</td>
                  <td className="border">Android vs Windows</td>
                  <td className="border">Low</td>
                </tr>

                <tr>
                  <td className="border p-2 font-semibold">Sign-in Risk</td>
                  <td className="border">Impossible travel</td>
                  <td className="border">🔥 Critical</td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

        {/* POLICY STRUCTURE */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 4) Conditional Access Policy Structure</h2>

          <p>كل Policy تتكون من 3 أجزاء:</p>

          <blockquote>
            Assignments → Conditions → Access Controls
          </blockquote>

          <h3>Assignments</h3>
          <ul>
            <li>Users / Groups</li>
            <li>Cloud apps</li>
            <li>Workload identities</li>
          </ul>

          <h3>Conditions</h3>
          <ul>
            <li>Location</li>
            <li>Device platform</li>
            <li>Risk</li>
            <li>Client apps</li>
            <li>Filters</li>
          </ul>

          <h3>Access Controls</h3>
          <ul>
            <li>Require MFA</li>
            <li>Require compliant device</li>
            <li>Require hybrid join</li>
            <li>Require approved app</li>
            <li>Block access</li>
          </ul>
        </section>

        {/* POLICY TABLE */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">
            🔥 Most Important Conditional Access Policies
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-3">Policy</th>
                  <th className="border">Purpose</th>
                  <th className="border">Priority</th>
                </tr>
              </thead>

              <tbody className="text-center">

                <tr>
                  <td className="border p-2 font-semibold">Require MFA</td>
                  <td className="border">Protect identities</td>
                  <td className="border">🔥 Critical</td>
                </tr>

                <tr>
                  <td className="border p-2 font-semibold">Require Compliant Device</td>
                  <td className="border">Device trust</td>
                  <td className="border">🔥 Critical</td>
                </tr>

                <tr>
                  <td className="border p-2 font-semibold">Block Legacy Auth</td>
                  <td className="border">Stop basic auth attacks</td>
                  <td className="border">🔥 Critical</td>
                </tr>

                <tr>
                  <td className="border p-2 font-semibold">Require Approved Apps</td>
                  <td className="border">Secure BYOD</td>
                  <td className="border">High</td>
                </tr>

                <tr>
                  <td className="border p-2 font-semibold">Location-based MFA</td>
                  <td className="border">Extra protection outside office</td>
                  <td className="border">Medium</td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

        {/* DESIGN STRATEGY */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔥 5) Conditional Access Design Strategy (Engineer Level)</h2>

          <h3>Golden Rules</h3>

          <ul>
            <li>Always exclude a Break-Glass account</li>
            <li>Start with Report-only mode</li>
            <li>Deploy gradually</li>
            <li>Use pilot groups</li>
          </ul>

          <blockquote>
            ❗ Policy خاطئة ممكن تمنع الشركة كلها من الدخول.
          </blockquote>
        </section>

        {/* MONITORING */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔥 6) Monitoring Conditional Access</h2>

          <h3>Main Tool:</h3>

          <blockquote>
            Entra ID → Sign-in Logs
          </blockquote>

          <h3>What to Look For</h3>

          <ul>
            <li>Blocked sign-ins</li>
            <li>MFA failures</li>
            <li>Risk detections</li>
            <li>Policy applied</li>
          </ul>

          <h3>Report-only Mode</h3>

          <p>
            يسمح لك برؤية تأثير Policy قبل تفعيلها.
          </p>
        </section>

        {/* TROUBLESHOOTING */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔥 Troubleshooting Runbook</h2>

          <ol>
            <li>Check Sign-in logs</li>
            <li>Identify blocked policy</li>
            <li>Review conditions</li>
            <li>Verify compliance</li>
          </ol>

          <h3>Top Issues</h3>
          <ul>
            <li>User blocked by CA</li>
            <li>Device not compliant</li>
            <li>MFA not registered</li>
          </ul>
        </section>

        {/* SCENARIO */}
        <section className="prose prose-lg max-w-none">

          <h2>🔥 Enterprise Scenario</h2>

          <p>
            شركة تريد تطبيق Zero Trust.
          </p>

          <h3>Policies Deployed:</h3>

          <ul>
            <li>Require MFA for all users</li>
            <li>Require compliant device for Office 365</li>
            <li>Block legacy authentication</li>
            <li>Require approved apps for BYOD</li>
          </ul>

          <h3>Attack Example</h3>

          <p>
            Attacker tries login from Russia →
            User risk detected →
            Policy triggers →
            Access blocked.
          </p>

          <blockquote>
            🔥 Breach prevented automatically.
          </blockquote>

          <h2>🎯 Senior Interview Answer</h2>

          <blockquote>
            “I design Conditional Access based on Zero Trust principles,
            enforce MFA, require compliant devices, block legacy authentication,
            monitor sign-in logs daily, and deploy policies using report-only mode
            before production rollout.”
          </blockquote>

        </section>

      </div>
    </div>
  );
}
