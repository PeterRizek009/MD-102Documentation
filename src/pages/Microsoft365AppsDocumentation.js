import React from "react";

export default function Microsoft365AppsDocumentation() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Header */}
        <h1 className="text-4xl font-bold mb-2">
          Microsoft 365 Apps Management in Intune
        </h1>
        <p className="text-gray-500 mb-10">
          Full Administrator Documentation — Enterprise Guide
        </p>

        {/* Overview */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 Overview</h2>

          <p>
            Microsoft 365 Apps for Enterprise هى طريقة centralized لإدارة:
          </p>

          <ul>
            <li>Deployment</li>
            <li>Configuration</li>
            <li>Updates</li>
            <li>Security</li>
          </ul>

          <p>لتطبيقات Office على أجهزة الشركة.</p>

          <p>الهدف منها:</p>

          <ul>
            <li>👉 Standardization</li>
            <li>👉 Security</li>
            <li>👉 Zero-touch deployment</li>
            <li>👉 Reduce IT workload</li>
          </ul>
        </section>

        {/* When to Use */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 When to Use Microsoft 365 Apps</h2>

          <p>استخدمها عندما تحتاج:</p>

          <ul>
            <li>✔️ نشر Office تلقائياً عبر Intune</li>
            <li>✔️ ربط التفعيل بالـ User License</li>
            <li>✔️ تحديثات أوتوماتيك</li>
            <li>✔️ جاهزية مع Autopilot</li>
            <li>✔️ تقليل التدخل اليدوى من IT</li>
          </ul>

          <h3>❗ When NOT to Use It</h3>

          <p>استخدم Win32 App بدلاً منها إذا كنت تحتاج:</p>

          <ul>
            <li>Visio فقط</li>
            <li>Project فقط</li>
            <li>نسخة Volume License</li>
            <li>Customized Office deployment</li>
          </ul>

          <p>⚠️ نقطة امتحان مشهورة.</p>
        </section>

        {/* Deployment Architecture */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 Deployment Architecture</h2>

          <h3>Step 1 — Create the App</h3>

          <p>
            Intune Admin Center → Apps → Windows → Add → Microsoft 365 Apps for
            Windows 10 and later
          </p>

          <p>ينطبق على Windows 10 و 11.</p>

          <h3>Step 2 — Configure Core Settings</h3>

          <h4>✅ Architecture</h4>
          <p>يفضل 64-bit</p>
          <p>استخدم 32-bit فقط عند وجود legacy plugins.</p>

          <h4>✅ Update Channel (Critical Decision)</h4>

          <p>القنوات المتاحة:</p>

          <ul>
            <li>Current Channel → Features أسرع</li>
            <li>Monthly Enterprise → توازن بين الاستقرار والتحديث ⭐</li>
            <li>Semi-Annual → أعلى استقرار وأبطأ تحديث</li>
          </ul>

          <p>
            👉 Recommended for most organizations:
            <strong> ⭐ Monthly Enterprise Channel</strong>
          </p>

          <h4>✅ Remove Older Versions</h4>
          <p>يجب تفعيل:</p>
          <ul>
            <li>✔️ Remove other versions of Office</li>
          </ul>
          <p>لمنع conflicts.</p>

          <h4>✅ Apps Selection</h4>
          <p>قم بإزالة التطبيقات غير المطلوبة لتقليل:</p>

          <ul>
            <li>Storage usage</li>
            <li>Network bandwidth</li>
          </ul>

          <p>مثال: Publisher فى بيئة Call Center.</p>

          <h3>Step 3 — Suite Settings</h3>

          <h4>Automatically accept EULA</h4>
          <p>✔️ Enabled</p>

          <h4>Shared Computer Activation (SCA)</h4>
          <p>قم بتفعيلها إذا كان لديك:</p>

          <ul>
            <li>Shared PCs</li>
            <li>Call centers</li>
            <li>Hot desks</li>
          </ul>

          <p>
            حيث يتم تفعيل Office حسب المستخدم الذى يقوم بتسجيل الدخول.
          </p>

          <h4>Device-Based Licensing</h4>
          <p>نادراً ما يستخدم.</p>
          <p>👉 الأفضل دائماً User-based licensing.</p>

          <h3>Step 4 — Assignments (Very Important)</h3>

          <p>
            ⭐ Best Practice:
            <br />
            👉 Assign the app to User Groups
            <br />
            NOT devices.
          </p>

          <p>Why? الترخيص مرتبط بالمستخدم.</p>

          <h4>Required vs Available</h4>

          <ul>
            <li>Required → تثبيت تلقائى</li>
            <li>Available → عبر Company Portal</li>
          </ul>

          <p>👉 Recommended: Required</p>
        </section>

        {/* Updates */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 How Microsoft 365 Apps Update Works</h2>

          <p>
            ⚠️ معلومة مهمة:
            <br />
            👉 Microsoft 365 Apps لا تعتمد على Windows Update Rings
          </p>

          <p>بدلاً من ذلك تستخدم:</p>

          <p>
            ⭐ <strong>Click-to-Run Update Technology</strong>
          </p>

          <p>حيث يتم تحميل التحديثات مباشرة من Microsoft CDN.</p>

          <p>
            Control Updates باستخدام:
            <br />
            👉 Update Channel
            <br />
            وليس Windows Updates.
          </p>
        </section>

        {/* Monitoring */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 Monitoring Update Status</h2>

          <h4>✔️ From Intune</h4>

          <p>
            Devices → Windows → Select Device → Discovered Apps
          </p>

          <p>يمكنك رؤية:</p>

          <ul>
            <li>Installed version</li>
            <li>Update channel</li>
          </ul>

          <h4>⭐ Enterprise-Level Monitoring (Recommended)</h4>

          <p>
            استخدم:
            <br />
            👉 Microsoft 365 Apps Admin Center (config.office.com)
          </p>

          <p>ثم:</p>
          <p>Inventory → Devices</p>

          <p>يعرض:</p>

          <ul>
            <li>✔️ Office versions</li>
            <li>✔️ Update status</li>
            <li>✔️ Security posture</li>
            <li>✔️ Crashes</li>
            <li>✔️ Health metrics</li>
          </ul>

          <p>هذا هو dashboard المفضل فى البيئات الكبيرة.</p>
        </section>

        {/* Configuration Policies */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 Configuration Policies for Microsoft 365 Apps</h2>

          <p>
            ⚠️ لا توجد Policy واحدة تتحكم فى كل شيء.
            <br />
            الإدارة تتم عبر Layers.
          </p>

          <h3>⭐ Policy Layer 1 — Settings Catalog (Primary Configuration)</h3>

          <p>
            Intune → Devices → Configuration Profiles → Settings Catalog →
            Search: Microsoft Office
          </p>

          <h4>Examples of Critical Policies</h4>

          <h5>🔐 Macro Security</h5>
          <ul>
            <li>Block macros from the internet</li>
            <li>Allow only digitally signed macros</li>
          </ul>

          <p>أكبر مصدر لهجمات ransomware.</p>

          <h5>🔄 Update Controls</h5>
          <ul>
            <li>Hide update notifications</li>
            <li>Define update deadlines</li>
            <li>Prevent user-initiated updates</li>
          </ul>

          <h5>🔒 Privacy Controls</h5>
          <ul>
            <li>Disable telemetry</li>
            <li>Disable connected experiences</li>
          </ul>

          <p>مهم للشركات المالية.</p>

          <h5>📧 Outlook Security</h5>
          <ul>
            <li>Block auto-forwarding</li>
            <li>Disable PST files</li>
            <li>Control cached mode</li>
          </ul>

          <p>⭐ تعتبر الطريقة الأكثر شيوعاً فى المؤسسات.</p>

          <h3>⭐ Policy Layer 2 — Office Cloud Policy (User-Based)</h3>

          <p>
            ادخل:
            <br />
            config.office.com → Customization → Policy Management
          </p>

          <h4>Key Advantage</h4>

          <p>
            👉 Policies تطبق على User حتى على الأجهزة الشخصية أو غير المسجلة فى
            Intune.
          </p>

          <p>يدعم استراتيجية:</p>
          <p>⭐ Zero Trust</p>

          <p>يمكن التحكم فى:</p>

          <ul>
            <li>Macro behavior</li>
            <li>Privacy</li>
            <li>AI features</li>
            <li>OneDrive</li>
            <li>Outlook</li>
            <li>Teams integration</li>
          </ul>

          <h3>⭐ Policy Layer 3 — Security Protection</h3>

          <p>
            Attack Surface Reduction (ASR)
            <br />
            Intune → Endpoint Security → Attack Surface Reduction
          </p>

          <h4>Critical Rule:</h4>

          <p>
            👉 Block Office apps from creating child processes
          </p>

          <p>يمنع سيناريو:</p>
          <p>Macro → PowerShell → Malware.</p>

          <h4>Recommended Additional Rules:</h4>
          <ul>
            <li>Block Win32 API calls from macros</li>
            <li>Block executable content from email</li>
            <li>Prevent code injection</li>
          </ul>
        </section>

        {/* Security Architecture */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 Security Architecture (Defense in Depth)</h2>

          <p>أفضل الممارسات تعتمد على تعدد طبقات الحماية:</p>

          <ul>
            <li>✔️ ASR Rules</li>
            <li>✔️ Macro Blocking</li>
            <li>✔️ Conditional Access</li>
            <li>✔️ App Protection Policies (for mobile)</li>
          </ul>
        </section>

        {/* Best Practices */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 Best Practices (Enterprise Level)</h2>

          <ul>
            <li>✔️ Deploy Microsoft 365 Apps via Intune</li>
            <li>✔️ Assign to users</li>
            <li>✔️ Use Monthly Enterprise Channel</li>
            <li>✔️ Remove legacy Office</li>
            <li>✔️ Block macros</li>
            <li>✔️ Enable ASR rules</li>
            <li>✔️ Monitor via Office Admin Center</li>
            <li>✔️ Apply Conditional Access</li>
          </ul>
        </section>

        {/* Exam Traps */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 Common Exam Traps (MD-102)</h2>

          <ul>
            <li>✅ Office updates → Click-to-Run</li>
            <li>✅ Control update speed → Update Channel</li>
            <li>✅ Protect from macro malware → ASR</li>
            <li>✅ Assign Office → Users</li>
          </ul>
        </section>

        {/* Interview Answer */}
        <section className="prose prose-lg max-w-none">
          <h2>🔥 Architecture Summary (Senior-Level Answer)</h2>

          <p>لو سألك Interviewer:</p>
          <p><strong>"How do you manage Microsoft 365 Apps?"</strong></p>

          <p>رد بالشكل ده:</p>

          <blockquote>
            Deployment via Intune → Configuration using Settings Catalog → 
            User-based policies through Cloud Policy → Security with ASR & 
            Conditional Access → Monitoring through Microsoft 365 Apps Admin Center.
          </blockquote>

        </section>

      </div>
    </div>
  );
}
