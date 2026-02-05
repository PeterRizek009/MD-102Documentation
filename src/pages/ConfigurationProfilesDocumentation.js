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
          <p>السبب: الإعدادات تتبع المس
