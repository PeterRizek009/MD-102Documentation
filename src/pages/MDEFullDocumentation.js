import React from "react";

export default function MDEFullDocumentation() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-2">
          📘 Microsoft Defender for Endpoint (MDE) – Ultimate Administrator Guide
        </h1>

        <p className="text-gray-500 mb-12">
          Full Architecture | Clients | Cloud Apps | Security | Monitoring | SOC Operations | Enterprise Scenario
        </p>

        {/* OVERVIEW */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 1) What is Microsoft Defender for Endpoint?</h2>

          <p>
            Microsoft Defender for Endpoint (MDE) هو منصة <strong>Endpoint Detection and Response (EDR)</strong>
            متقدمة مصممة لحماية أجهزة الشركة من:
          </p>

          <ul>
            <li>Malware</li>
            <li>Ransomware</li>
            <li>Zero-day attacks</li>
            <li>Fileless attacks</li>
            <li>Advanced persistent threats (APT)</li>
          </ul>

          <blockquote>
            🔥 MDE ليس Antivirus فقط — هو XDR Security Platform.
          </blockquote>

          <h3>Core Idea</h3>

          <blockquote>
            Assume breach → Detect fast → Investigate → Respond automatically
          </blockquote>
        </section>

        {/* COMPONENTS */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 2) MDE Core Components</h2>

          <ul>
            <li><strong>Next-Gen Antivirus (NGAV)</strong> → Prevent threats</li>
            <li><strong>EDR</strong> → Detect suspicious behavior</li>
            <li><strong>Threat & Vulnerability Management (TVM)</strong> → Find weaknesses</li>
            <li><strong>Attack Surface Reduction (ASR)</strong> → Block attack techniques</li>
            <li><strong>Automated Investigation & Response (AIR)</strong></li>
            <li><strong>Device Control</strong> → Control USB & peripherals</li>
            <li><strong>Web Protection</strong></li>
          </ul>
        </section>

        {/* PLAN TABLE */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">
            🔹 Defender Plans Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-3">Feature</th>
                  <th className="border">Defender P1</th>
                  <th className="border">Defender P2</th>
                </tr>
              </thead>

              <tbody className="text-center">
                <tr>
                  <td className="border p-2">Next-gen Antivirus</td>
                  <td className="border">✅</td>
                  <td className="border">✅</td>
                </tr>

                <tr>
                  <td className="border p-2">Attack Surface Reduction</td>
                  <td className="border">✅</td>
                  <td className="border">✅</td>
                </tr>

                <tr>
                  <td className="border p-2">EDR</td>
                  <td className="border">❌</td>
                  <td className="border">✅</td>
                </tr>

                <tr>
                  <td className="border p-2">Automated Investigation</td>
                  <td className="border">❌</td>
                  <td className="border">✅</td>
                </tr>

                <tr>
                  <td className="border p-2">Threat Hunting</td>
                  <td className="border">❌</td>
                  <td className="border">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* MDE FOR CLIENTS */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔥 3) MDE for Clients (Endpoints)</h2>

          <h3>Supported Devices</h3>
          <ul>
            <li>Windows 10/11</li>
            <li>Windows Server</li>
            <li>macOS</li>
            <li>Linux</li>
            <li>iOS / Android (limited EDR)</li>
          </ul>

          <h3>Onboarding Methods</h3>
          <ul>
            <li>Intune (Recommended)</li>
            <li>Group Policy</li>
            <li>ConfigMgr</li>
            <li>Manual script</li>
          </ul>

          <blockquote>
            ⭐ Best Practice → Onboard using Intune.
          </blockquote>

          <h3>Post-Onboarding Capabilities</h3>
          <ul>
            <li>Real-time protection</li>
            <li>Behavior monitoring</li>
            <li>Cloud-delivered protection</li>
            <li>EDR telemetry</li>
          </ul>
        </section>

        {/* ASR */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔥 Attack Surface Reduction (ASR)</h2>

          <p>ASR تمنع تقنيات الهجوم قبل التنفيذ.</p>

          <h3>Critical Rules</h3>
          <ul>
            <li>Block Office from creating child processes</li>
            <li>Block executable content from email</li>
            <li>Block credential stealing</li>
            <li>Block Win32 API calls from macros</li>
          </ul>

          <blockquote>
            🔥 ASR alone can stop most ransomware attacks.
          </blockquote>
        </section>

        {/* TVM */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 Threat & Vulnerability Management (TVM)</h2>

          <p>
            TVM يحلل الأجهزة ويعطيك:
          </p>

          <ul>
            <li>Security score</li>
            <li>Missing patches</li>
            <li>Weak configurations</li>
            <li>Exposure level</li>
          </ul>

          <p>
            الهدف:
            <strong> Reduce attack surface before breach.</strong>
          </p>
        </section>

        {/* CLOUD APPS */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>☁️ 5) MDE for Cloud Apps (Microsoft Defender for Cloud Apps)</h2>

          <p>
            Defender for Cloud Apps (MDCA) يوفر:
          </p>

          <ul>
            <li>Shadow IT discovery</li>
            <li>SaaS protection</li>
            <li>Session control</li>
            <li>Data protection</li>
            <li>OAuth app governance</li>
          </ul>

          <h3>Key Use Cases</h3>
          <ul>
            <li>Detect risky third-party apps</li>
            <li>Block downloads on unmanaged devices</li>
            <li>Protect sensitive files</li>
          </ul>

          <blockquote>
            🔥 MDE + Cloud Apps = Full XDR visibility.
          </blockquote>
        </section>

        {/* ZERO TRUST */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 Zero Trust Integration</h2>

          <ul>
            <li>MDE risk score feeds Conditional Access</li>
            <li>High-risk device → Access blocked</li>
            <li>Medium-risk → MFA enforced</li>
          </ul>
        </section>

        {/* MONITORING */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔥 7) Monitoring MDE (SOC-Level)</h2>

          <h3>Main Dashboard</h3>
          <p>
            Microsoft Defender Security Center → security.microsoft.com
          </p>

          <h3>What to Monitor Daily</h3>
          <ul>
            <li>Active incidents</li>
            <li>Device risk level</li>
            <li>Vulnerability score</li>
            <li>Exposure level</li>
            <li>Alerts</li>
          </ul>

          <h3>Device Risk Levels</h3>
          <ul>
            <li>Low</li>
            <li>Medium</li>
            <li>High</li>
          </ul>

          <blockquote>
            ⭐ Target → Keep devices at Low risk.
          </blockquote>
        </section>

        {/* RESPONSE */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 Response Actions</h2>

          <ul>
            <li>Isolate device</li>
            <li>Run antivirus scan</li>
            <li>Collect investigation package</li>
            <li>Restrict app execution</li>
          </ul>
        </section>

        {/* TROUBLESHOOTING */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔥 Troubleshooting Runbook</h2>

          <ol>
            <li>Check onboarding status</li>
            <li>Verify sensor is running</li>
            <li>Check Defender service</li>
            <li>Confirm device reporting</li>
          </ol>

          <h3>Common Issues</h3>
          <ul>
            <li>Device not onboarded</li>
            <li>Sensor stopped</li>
            <li>Network blocking telemetry</li>
          </ul>
        </section>

        {/* SCENARIO */}
        <section className="prose prose-lg max-w-none">
          <h2>🔥 Enterprise Scenario (Full)</h2>

          <p>
            شركة لديها:
          </p>

          <ul>
            <li>300 Windows devices</li>
            <li>150 mobile devices</li>
            <li>50 macOS</li>
          </ul>

          <h3>Architecture</h3>
          <ul>
            <li>Onboard all devices via Intune</li>
            <li>Enable ASR rules</li>
            <li>Configure TVM remediation</li>
            <li>Integrate with Conditional Access</li>
          </ul>

          <h3>Attack Example</h3>

          <p>
            User opens malicious Excel →
            Macro launches PowerShell →
            ASR blocks execution →
            Alert generated →
            AIR investigates →
            Device isolated.
          </p>

          <blockquote>
            🔥 Attack stopped automatically.
          </blockquote>

          <h3>Daily SOC Flow</h3>
          <ol>
            <li>Review incidents</li>
            <li>Prioritize high-risk devices</li>
            <li>Investigate alerts</li>
            <li>Remediate vulnerabilities</li>
          </ol>

          <h2>🎯 Senior Interview Answer</h2>

          <blockquote>
            “I deploy Microsoft Defender for Endpoint via Intune, enforce ASR rules,
            integrate device risk with Conditional Access, monitor incidents daily
            through the Defender portal, and use automated investigation to reduce
            response time while maintaining a strong security posture.”
          </blockquote>

        </section>

      </div>
    </div>
  );
}
