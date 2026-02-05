import React from "react";

export default function ConfigurationProfilesDocumentation() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-2">
          📘 Configuration Profiles (Microsoft Intune)
        </h1>
        <p className="text-gray-500 mb-10">
          Administrator Documentation + Monitoring + Troubleshooting
        </p>

        {/* Overview */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 Overview</h2>
          <p>
            Configuration Profiles هى وسيلة تُمكّن الـ IT Administrator من فرض
            إعدادات محددة على أجهزة المستخدمين بدون تدخل منهم.
          </p>
          <p>
            يمكن اعتبارها:
            <br />
            👉 Cloud-Based Group Policy
          </p>
          <p>
            تُستخدم لضمان توحيد الإعدادات، تعزيز الأمان، وتقليل الأخطاء الناتجة عن
            الإعدادات اليدوية.
          </p>
        </section>

        {/* Why Matter */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 Why Configuration Profiles Matter</h2>
          <p>بدون Configuration Profiles، كل جهاز قد يتم إعداده بطريقة مختلفة، مما يسبب:</p>
          <ul>
            <li>مشاكل أمنية</li>
            <li>زيادة فى طلبات الدعم</li>
            <li>بيئة غير موحدة</li>
          </ul>

          <p>باستخدامها تحقق:</p>
          <ul>
            <li>✔️ Standardization</li>
            <li>✔️ Enhanced Security</li>
            <li>✔️ Compliance Readiness</li>
            <li>✔️ Reduced Support Tickets</li>
            <li>✔️ Centralized Management</li>
          </ul>
        </section>

        {/* Types */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 Types of Configuration Profiles</h2>

          <h3>⭐ 1. Settings Catalog (Recommended)</h3>
          <p>الأداة الأحدث والأكثر مرونة داخل Intune.</p>
          <p>المميزات:</p>
          <ul>
            <li>يدعم آلاف الإعدادات</li>
            <li>Granular control</li>
            <li>يقلل الـ conflicts</li>
          </ul>

          <p>
            📍 Path:
            <br />
            Intune → Devices → Configuration Profiles → Create → Settings Catalog
          </p>
          <p>👉 يعتبر الاختيار الأفضل فى معظم البيئات الحديثة.</p>

          <h3>⭐ 2. Templates</h3>
          <p>Microsoft توفر Templates جاهزة لسيناريوهات شائعة مثل:</p>
          <ul>
            <li>Device Restrictions</li>
            <li>WiFi</li>
            <li>VPN</li>
            <li>Email</li>
            <li>Certificates</li>
          </ul>

          <p>مناسب لـ:</p>
          <ul>
            <li>✔️ Quick deployment</li>
            <li>✔️ Standard configurations</li>
          </ul>

          <h3>⭐ 3. Administrative Templates</h3>
          <p>
            نسخة Cloud من:
            <br />
            👉 Group Policy (GPO)
          </p>
          <p>مثالية عندما:</p>
          <ul>
            <li>تنتقل من On-Prem إلى Cloud</li>
            <li>تحتاج إعدادات Windows التقليدية</li>
          </ul>

          <h3>⭐ 4. Custom Profiles</h3>
          <p>تستخدم:</p>
          <ul>
            <li>OMA-URI</li>
            <li>JSON</li>
          </ul>
          <p>
            مستوى الاستخدام:
            <br />
            👉 Advanced / Enterprise scenarios
          </p>
          <p>نادراً ما تستخدم فى الشركات الصغيرة.</p>
        </section>

        {/* Assignment Strategy */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 Assignment Strategy (Interview Favorite)</h2>

          <h3>✅ Best Practice</h3>
          <p>
            يفضل Assign السياسات إلى:
            <br />
            👉 User Groups
          </p>
          <p>السبب: الإعدادات تتبع المستخدم حتى لو غيّر الجهاز.</p>

          <h3>✅ Assign to Devices عندما:</h3>
          <ul>
            <li>Kiosk machines</li>
            <li>Shared devices</li>
            <li>Lab environments</li>
          </ul>
        </section>

        {/* Filters */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 Using Filters (Senior-Level Practice)</h2>
          <p>
            بدلاً من إنشاء عدة Policies، يمكن استخدام Filters لاستهداف أجهزة معينة.
          </p>
          <p>مثال:</p>
          <p>
            تطبيق BitLocker فقط على:
            <br />
            Windows 11
            <br />
            Corporate-owned devices
          </p>
          <p>👉 يقلل التعقيد ويحسن الإدارة.</p>
        </section>

        {/* Baseline */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 Example Enterprise Baseline</h2>
          <p>شركة بها 200 موظف يجب أن تطبق فوراً:</p>
          <ul>
            <li>✔️ BitLocker Enforcement</li>
            <li>✔️ Password Complexity</li>
            <li>✔️ Firewall Enabled</li>
            <li>✔️ USB Storage Disabled</li>
            <li>✔️ WiFi Auto Configuration</li>
            <li>✔️ VPN Profile</li>
          </ul>
          <p>👉 هذا يمثل Security Baseline محترم.</p>
        </section>

        {/* Mistakes */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 Common Mistakes</h2>
          <ul>
            <li>❌ Assign policy للـ Device بدون سبب</li>
            <li>❌ إنشاء Policies كثيرة تسبب Conflicts</li>
            <li>❌ عدم اختبار السياسات قبل النشر</li>
            <li>❌ تجاهل Monitoring</li>
          </ul>
        </section>

        {/* Exam Tip */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 Exam Tip (MD-102)</h2>
          <p>📌 إذا طُلب:</p>
          <p>"Admin needs granular control over device settings"</p>
          <p>الإجابة:</p>
          <p>👉 Settings Catalog</p>
        </section>

        {/* Architecture Statement */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 Architecture Statement (Interview-Level)</h2>
          <blockquote>
            “Configuration Profiles enforce standardized device settings across the
            organization while improving security and reducing configuration drift.”
          </blockquote>
        </section>

        <hr className="my-14 border-gray-200" />

        {/* Monitoring */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔥 Monitoring Configuration Profiles</h2>
          <p className="text-gray-500">
            (Daily IT Admin Operations)
          </p>

          <h3>🎯 Monitoring Objective</h3>
          <p>إنشاء Policy لا يكفى — يجب التأكد من:</p>
          <ul>
            <li>وصولها للأجهزة</li>
            <li>نجاح تطبيقها</li>
            <li>عدم وجود Conflicts</li>
            <li>عدم تأثر المستخدمين</li>
          </ul>

          <h3>📍 Navigation Path</h3>
          <p>
            Devices → Configuration Profiles → Select Profile
          </p>

          <h3>⭐ أهم Tabs يجب متابعتها</h3>

          <h4>✅ Device Status</h4>
          <p>يعرض حالة تطبيق الـ Policy:</p>
          <ul>
            <li>Succeeded → تم التطبيق بنجاح</li>
            <li>Error → فشل التطبيق</li>
            <li>Pending → الجهاز لم يستلم بعد</li>
            <li>Conflict → تعارض مع Policy أخرى</li>
            <li>Not Applicable → غير مناسب للجهاز</li>
          </ul>

          <h4>✅ User Status</h4>
          <p>مهم عند Assign السياسات إلى المستخدمين.</p>

          <h4>✅ Per-Setting Status (Advanced Insight)</h4>
          <p>يعرض نجاح أو فشل كل Setting على حدة.</p>
          <p>
            مثال:
            <br />
            BitLocker → Success
            <br />
            Firewall → Error
          </p>
          <p>👉 يساعد فى تحديد المشكلة بسرعة.</p>

          <h3>🚨 Critical Alert — Conflict</h3>
          <p>ماذا يعنى؟</p>
          <p>
            الجهاز يستلم نفس الإعداد بقيم مختلفة من Policies متعددة.
          </p>
          <p>
            مثال:
            <br />
            Policy A → Firewall ON
            <br />
            Policy B → Firewall OFF
          </p>

          <p>الحل:</p>
          <ul>
            <li>✔️ مراجعة Assignments</li>
            <li>✔️ تقليل عدد السياسات</li>
            <li>✔️ استخدام Settings Catalog</li>
          </ul>
          <p>👉 Fewer Policies = Fewer Problems</p>

          <h3>🧠 Daily Admin Routine</h3>
          <p>ابدأ يومك بمراجعة:</p>
          <ul>
            <li>✔️ Policies بها Errors</li>
            <li>✔️ Devices لا تقوم بعمل Check-in</li>
            <li>✔️ Policies Pending</li>
          </ul>

          <p>📌 Best Practice:</p>
          <p>
            Success rate يجب أن يكون ≥ 95%
            <br />
            أقل من ذلك يستدعى التحقيق.
          </p>
        </section>

        <hr className="my-14 border-gray-200" />

        {/* Troubleshooting */}
        <section className="prose prose-lg max-w-none">
          <h2>📘 Configuration Profile Troubleshooting Guide</h2>
          <p className="text-gray-500">
            (Administrator Runbook)
          </p>

          <h3>🔥 Golden Rule</h3>
          <p>لا تكتفى برؤية Error — اسأل:</p>
          <p>
            1️⃣ هل وصلت الـ Policy للجهاز؟
            <br />
            2️⃣ هل الجهاز قام بـ Check-in؟
            <br />
            3️⃣ هل يوجد Conflict؟
          </p>
          <p>👉 هذه الأسباب تمثل حوالى 90% من المشاكل.</p>

          <h3>✅ Step 1 — Identify the Status</h3>
          <p>
            Devices → Configuration Profiles → Select Profile → Device Status
          </p>

          <h4>🔹 Case 1 — Pending</h4>
          <p>السبب: الجهاز لم يستلم الـ Policy بعد.</p>
          <p>الحل:</p>
          <ul>
            <li>إجبار الجهاز على Sync</li>
            <li>التأكد أنه Online</li>
            <li>التأكد من Enrollment</li>
          </ul>

          <h4>🔹 Case 2 — Error</h4>
          <p>📌 أهم خطوة:</p>
          <p>👉 اقرأ Error Code وليس الرسالة العامة.</p>

          <p>أشهر الأسباب:</p>

          <h5>⭐ Unsupported Setting</h5>
          <p>مثال: BitLocker على Windows Home.</p>
          <p>الحل: استخدم Filters لاستهداف Pro / Enterprise.</p>

          <h5>⭐ Outdated OS</h5>
          <p>Policy تتطلب إصدار أحدث.</p>
          <p>الحل: تحديث الجهاز أو فرض Minimum OS.</p>

          <h5>⭐ Wrong Scope</h5>
          <p>بعض الإعدادات تحتاج Device scope وليس User.</p>

          <h5>⭐ Missing Feature in Windows Edition</h5>
          <p>بعض المزايا غير متاحة فى كل الإصدارات.</p>

          <h4>🔹 Case 3 — Conflict</h4>
          <p>السبب: سياسات متعددة تضبط نفس الإعداد بقيم مختلفة.</p>
          <p>الحل:</p>
          <ul>
            <li>مراجعة Per-setting status</li>
            <li>تقليل السياسات</li>
            <li>توحيد الإعدادات</li>
          </ul>

          <h4>🔹 Case 4 — Not Applicable</h4>
          <p>غالباً ليست مشكلة.</p>
          <p>مثال: Policy خاصة بـ iOS تم تطبيقها على Android.</p>

          <h3>✅ Step 2 — Verify Device Check-in</h3>
          <p>
            Devices → Select Device → Last Check-in
          </p>
          <p>إذا كان قديماً: المشكلة اتصال الجهاز وليس Policy.</p>
          <p>الحل:</p>
          <ul>
            <li>Sync</li>
            <li>Restart</li>
            <li>تأكد من الإنترنت</li>
            <li>Re-enroll عند الحاجة</li>
          </ul>

          <h3>✅ Step 3 — Use Troubleshooting Tool</h3>
          <p>
            Intune → Troubleshooting + Support
          </p>
          <p>يعرض:</p>
          <ul>
            <li>✔️ Applied policies</li>
            <li>✔️ Errors</li>
            <li>✔️ Conflicts</li>
          </ul>
          <p>👉 اختصار ممتاز للوقت.</p>

          <h3>✅ Step 4 — Review Logs (Advanced)</h3>
          <p>على الجهاز:</p>
          <p>
            Event Viewer → Applications and Services Logs → Microsoft → Windows →
            DeviceManagement-Enterprise-Diagnostics-Provider
          </p>
          <p>يعرض التفاصيل الفعلية للتطبيق.</p>

          <h3>✅ Step 5 — Always Use a Pilot Group</h3>
          <p>قبل النشر الواسع:</p>
          <ul>
            <li>✔️ اختبر على 5–10 أجهزة</li>
            <li>✔️ ثم قم بالتوسيع</li>
          </ul>
          <p>👉 هذا سلوك Enterprise.</p>

          <h3>🔥 Quick Troubleshooting Flow (Interview Gold)</h3>
          <p>
            1️⃣ Check device status
            <br />
            2️⃣ Sync device
            <br />
            3️⃣ Verify OS & edition
            <br />
            4️⃣ Check conflicts
            <br />
            5️⃣ Validate assignment
            <br />
            6️⃣ Review logs
          </p>

          <h3>🚨 Top Causes of Profile Failures</h3>
          <p>احفظهم:</p>
          <p>
            ⭐ Conflicting policies
            <br />
            ⭐ Unsupported settings
            <br />
            ⭐ Device offline
            <br />
            ⭐ Wrong assignment
            <br />
            ⭐ OS mismatch
          </p>
          <p>يمثلون حوالى 95% من المشاكل.</p>

          <h3>🔹 Senior-Level Best Practices</h3>
          <ul>
            <li>✔️ تقليل عدد السياسات</li>
            <li>✔️ استخدام Filters</li>
            <li>✔️ اختبار قبل النشر</li>
            <li>✔️ مراقبة Success Rate باستمرار</li>
          </ul>

          <h3>🎯 Interview Answer (Ready to Use)</h3>
          <blockquote>
            “I troubleshoot configuration profile issues by reviewing device status,
            identifying error codes, verifying OS compatibility, checking for policy
            conflicts, forcing a sync, and analyzing logs when needed.”
          </blockquote>

          <h3>🔥 Career Insight</h3>
          <p>
            👉 Admin ينشئ Policy = Junior
            <br />
            👉 Admin يحل مشاكلها = Engineer
            <br />
            وأنت تتحرك بالفعل نحو المستوى الثانى 🚀
          </p>

          <p>
            لو عايز أكمل بنفس المستوى الاحترافى، الخطوة المنطقية بعد ده تكون:
            <br />
            📘 Compliance Policies Documentation (بنفس الشكل) ثم بعدها
            <br />
            📘 Conditional Access Documentation
          </p>
        </section>
      </div>
    </div>
  );
}
