import React from "react";

export default function IntuneDeviceEnrollmentDocumentation() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-2">
          📘 Device Enrollment (Microsoft Intune)
        </h1>
        <p className="text-gray-500 mb-10">
          Full Administrator Documentation — From Zero to Enterprise (MD-102 + Interview Ready)
        </p>

        {/* 1) Core Concept */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 1) What is Device Enrollment?</h2>
          <p>
            Device Enrollment هو عملية تسجيل الجهاز داخل Microsoft Intune علشان يتحول من جهاز عادي
            إلى <strong>Managed Device</strong>.
          </p>

          <p>بعد Enrollment تقدر تطبق:</p>
          <ul>
            <li>✅ Configuration Profiles</li>
            <li>✅ Compliance Policies</li>
            <li>✅ App deployment</li>
            <li>✅ Endpoint Security</li>
            <li>✅ Conditional Access (Zero Trust)</li>
            <li>✅ Remote actions (Wipe / Retire / Reset)</li>
          </ul>

          <blockquote>
            بدون Enrollment = Intune يتحول من “Management Platform” إلى مجرد “Portal” بلا تأثير فعلي.
          </blockquote>
        </section>

        {/* 2) Enrollment Models */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 2) Enrollment Models (Big Picture)</h2>

          <h3>⭐ Model A — MDM Enrollment (Device is managed)</h3>
          <ul>
            <li>Full device control</li>
            <li>Compliance enforced</li>
            <li>Device-based policies</li>
            <li>Remote wipe / retire</li>
            <li>Corporate-owned scenarios</li>
          </ul>

          <h3>⭐ Model B — MAM (No Enrollment) / App Protection Only</h3>
          <ul>
            <li>No device enrollment required</li>
            <li>Protect corporate data inside apps (Outlook/Teams/OneDrive)</li>
            <li>Selective wipe for corporate data only</li>
            <li>Perfect for BYOD</li>
          </ul>

          <blockquote>
            Corporate devices → MDM  
            Personal devices (BYOD) → MAM (بدون Enrollment)  
          </blockquote>
        </section>

        {/* 3) Pre-Reqs */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 3) Prerequisites (Before Any Enrollment)</h2>

          <h3>✅ Identity & Licensing</h3>
          <ul>
            <li>Microsoft Entra ID (Azure AD) tenant</li>
            <li>Intune license assigned to users (Microsoft 365 E3/E5, EMS, Intune)</li>
          </ul>

          <h3>✅ MDM Authority</h3>
          <ul>
            <li>Microsoft Intune must be set as MDM authority</li>
          </ul>

          <h3>✅ Enrollment Restrictions</h3>
          <p>
            تمنع أخطاء ضخمة مثل: دخول أجهزة غير مرغوبة أو BYOD في بيئة ممنوعة.
          </p>
          <ul>
            <li>Platform restrictions (allow iOS/Android/Windows/macOS)</li>
            <li>Ownership restrictions (Allow/Block personal)</li>
            <li>Limit number of devices per user</li>
          </ul>

          <h3>✅ Terms & Privacy / User Communication</h3>
          <ul>
            <li>Company Portal instructions</li>
            <li>Privacy notice (especially for BYOD)</li>
          </ul>
        </section>

        {/* 4) Enrollment Methods by Platform */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 4) Enrollment Methods by Platform (Complete)</h2>

          <h3>🪟 Windows (10/11)</h3>

          <h4>1) Windows Autopilot (Best for Corporate / Zero-touch)</h4>
          <p>
            Autopilot هو أفضل سيناريو للشركات: الجهاز يطلع من الكرتونة → يدخل حساب العمل → يتسحب له كل شيء تلقائيًا.
          </p>
          <ul>
            <li>Zero-touch provisioning</li>
            <li>Entra Join + Intune enrollment automatically</li>
            <li>Deploy apps + policies + security baselines</li>
          </ul>

          <p><strong>Requirements:</strong></p>
          <ul>
            <li>Hardware hash / device registration in Autopilot</li>
            <li>Autopilot profile (User-driven / Self-deploying / Pre-provisioning)</li>
            <li>Enrollment Status Page (ESP)</li>
          </ul>

          <p><strong>When to use:</strong></p>
          <ul>
            <li>New devices</li>
            <li>Mass deployment</li>
            <li>Remote onboarding</li>
          </ul>

          <h4>2) Enroll from OOBE (User-driven)</h4>
          <ul>
            <li>User signs in with work account during setup</li>
            <li>Device becomes Entra Joined</li>
            <li>Auto-enrolled to Intune (if configured)</li>
          </ul>

          <h4>3) Windows Settings Enrollment (Manual)</h4>
          <ul>
            <li>Access work or school → Connect → Enroll</li>
            <li>Used when device already running</li>
          </ul>

          <h4>4) GPO Enrollment (Hybrid Join)</h4>
          <ul>
            <li>For organizations with Active Directory on-prem</li>
            <li>Devices hybrid-joined and then auto-enrolled via Group Policy</li>
          </ul>

          <h4>5) Co-management with ConfigMgr</h4>
          <ul>
            <li>SCCM + Intune together</li>
            <li>Move workloads gradually (compliance, apps, updates)</li>
          </ul>

          <hr />

          <h3>🍎 iOS / iPadOS</h3>

          <h4>1) Automated Device Enrollment (ADE) via Apple Business Manager (Supervised)</h4>
          <p>
            ده أفضل سيناريو Corporate iPhone/iPad: الجهاز يتسجل في ABM ويتنزل عليه MDM تلقائيًا.
          </p>
          <ul>
            <li>Supervised mode</li>
            <li>Stronger control</li>
            <li>Zero-touch setup</li>
          </ul>

          <p><strong>Requirements:</strong></p>
          <ul>
            <li>Apple Business Manager (ABM)</li>
            <li>MDM Push Certificate (APNs)</li>
            <li>Enrollment program token (ABM token)</li>
          </ul>

          <h4>2) Apple Configurator (Corporate but no ABM)</h4>
          <ul>
            <li>Used when devices not purchased via authorized reseller</li>
            <li>Can add device to ABM (iPhone with Apple Configurator)</li>
          </ul>

          <h4>3) BYOD iOS User Enrollment / Device Enrollment</h4>
          <ul>
            <li>User installs Company Portal</li>
            <li>Enrolls device manually</li>
          </ul>

          <h4>4) MAM (No Enrollment) for BYOD (Recommended)</h4>
          <ul>
            <li>No device management</li>
            <li>App Protection policy only</li>
            <li>Conditional Access requires app protection</li>
          </ul>

          <hr />

          <h3>🤖 Android</h3>

          <h4>0) Mandatory prerequisite: Managed Google Play</h4>
          <p>
            لازم تربط Managed Google Play عشان تقدر تنزل Managed apps.
          </p>

          <h4>1) Fully Managed (Corporate-owned) — Best for company phones</h4>
          <ul>
            <li>Full device management</li>
            <li>Work apps only / strong control</li>
          </ul>

          <h4>2) Corporate-owned Work Profile (COPE)</h4>
          <ul>
            <li>Device owned by company</li>
            <li>لكن فيه Work Profile منفصل (فصل بيانات العمل عن الشخصية)</li>
          </ul>

          <h4>3) BYOD Work Profile</h4>
          <ul>
            <li>Personal phone</li>
            <li>Work profile only managed</li>
            <li>IT controls work container only</li>
          </ul>

          <h4>4) Dedicated / Kiosk Enrollment</h4>
          <ul>
            <li>Single purpose devices (POS, kiosk)</li>
            <li>Locked down experience</li>
          </ul>

          <h4>5) MAM (No Enrollment) for Android BYOD</h4>
          <ul>
            <li>Use Outlook/Teams/OneDrive with App Protection policies</li>
            <li>Conditional Access requires approved app + app protection</li>
          </ul>

          <hr />

          <h3>🍏 macOS</h3>

          <h4>1) Automated Device Enrollment via ABM (Best)</h4>
          <ul>
            <li>Zero-touch</li>
            <li>Corporate ownership</li>
            <li>Best for scale</li>
          </ul>

          <h4>2) User-driven enrollment</h4>
          <ul>
            <li>Company Portal install</li>
            <li>User enrolls device manually</li>
          </ul>

          <h4>3) BYOD macOS (limited use)</h4>
          <ul>
            <li>Usually not recommended unless company policy allows</li>
          </ul>
        </section>

        {/* 5) Ownership and Join Types */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 5) Ownership + Join Types (Very Important)</h2>

          <h3>Device Ownership</h3>
          <ul>
            <li>Corporate-owned</li>
            <li>Personal-owned (BYOD)</li>
          </ul>

          <h3>Windows Join Types</h3>
          <ul>
            <li>Entra Joined</li>
            <li>Hybrid Entra Joined</li>
            <li>Workgroup + registered (Workplace join)</li>
          </ul>

          <blockquote>
            Join type affects what you can enforce (especially compliance + security).
          </blockquote>
        </section>

        {/* 6) Enrollment Profiles & Platform Setup Paths */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 6) Where to Configure Enrollment (Intune Paths)</h2>

          <h3>Windows</h3>
          <ul>
            <li>Devices → Windows → Windows enrollment</li>
            <li>Windows Autopilot deployment profiles</li>
          </ul>

          <h3>iOS/iPadOS</h3>
          <ul>
            <li>Devices → iOS/iPadOS → iOS/iPadOS enrollment</li>
            <li>Apple MDM Push certificate (APNs)</li>
            <li>Enrollment program tokens (ABM)</li>
          </ul>

          <h3>Android</h3>
          <ul>
            <li>Devices → Android → Android enrollment</li>
            <li>Managed Google Play</li>
            <li>Enrollment profiles (Fully managed / Work Profile / COPE / Dedicated)</li>
          </ul>

          <h3>macOS</h3>
          <ul>
            <li>Devices → macOS → macOS enrollment</li>
            <li>ABM token (if Automated Device Enrollment)</li>
          </ul>
        </section>

        {/* 7) Enrollment Troubleshooting */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔥 7) Enrollment Monitoring + Troubleshooting (Runbook)</h2>

          <h3>Monitoring</h3>
          <ul>
            <li>Devices → All devices → Check “Enrollment date”</li>
            <li>Devices → Monitor → Enrollment failures</li>
            <li>Per-device: Last check-in</li>
          </ul>

          <h3>Golden Questions (90% of issues)</h3>
          <ol>
            <li>هل اليوزر عنده Intune license؟</li>
            <li>هل الجهاز مدعوم (OS/Edition)؟</li>
            <li>هل Enrollment allowed في restrictions؟</li>
            <li>هل الجهاز Online وبيعمل check-in؟</li>
            <li>هل فيه Conditional Access بتمنع؟</li>
          </ol>

          <h3>Common Failures</h3>
          <ul>
            <li>❌ No license assigned</li>
            <li>❌ Enrollment blocked (platform/personal devices)</li>
            <li>❌ APNs/ABM token expired (iOS/macOS)</li>
            <li>❌ Managed Google Play not connected (Android)</li>
            <li>❌ Autopilot hash missing / profile not assigned (Windows)</li>
            <li>❌ Network / proxy blocks enrollment endpoints</li>
          </ul>

          <h3>Logs / Advanced</h3>
          <ul>
            <li>Windows: Event Viewer → DeviceManagement-Enterprise-Diagnostics-Provider</li>
            <li>Company Portal logs (mobile)</li>
            <li>Autopilot diagnostics (Windows OOBE)</li>
          </ul>

          <blockquote>
            Enrollment issue = usually Identity + Licensing + Restrictions + Connectivity.
          </blockquote>
        </section>

        {/* 8) Exam + Interview Notes */}
        <section className="prose prose-lg max-w-none">
          <h2>🎯 8) MD-102 Exam Traps + Interview Answer</h2>

          <h3>Common Exam Traps</h3>
          <ul>
            <li>✅ BYOD best practice → MAM (no enrollment) + Conditional Access</li>
            <li>✅ Corporate iOS best → ABM + Supervised (ADE)</li>
            <li>✅ Corporate Android best → Fully managed / COPE</li>
            <li>✅ Windows Zero-touch → Autopilot</li>
          </ul>

          <h3>Senior Interview Answer</h3>
          <blockquote>
            “I design enrollment based on ownership and risk: corporate devices are enrolled via
            zero-touch methods like Autopilot, ABM ADE, and Android Enterprise fully managed,
            while BYOD is secured primarily using MAM app protection with Conditional Access.
            I enforce enrollment restrictions, monitor enrollment failures, and troubleshoot using
            licensing validation, token health, and device check-in diagnostics.”
          </blockquote>
        </section>
      </div>
    </div>
  );
}
