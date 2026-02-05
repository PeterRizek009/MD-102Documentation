import React from "react";

export default function IntuneSuiteGuide() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold">
            Microsoft Intune Suite — الشرح الكامل بالمصري
          </h1>
          <p className="text-slate-600 mt-2">
            من أول الفكرة لحد الاستخدام الحقيقي + كلام ينفع للـ Interviews و الشغل الفعلي
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-8">

        {/* Introduction */}
        <section className="bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="text-xl font-semibold mb-3">🔥 الفكرة الأساسية</h2>

          <p className="text-slate-700 leading-7">
            مع كتر الشغل Remote و Hybrid بقى عند الشركات أجهزة كتير جدًا:
            لابتوبات، موبايلات، Tablets، Apps، وبيانات حساسة.
          </p>

          <div className="mt-4 space-y-2 text-slate-700">
            <p>⚠️ التحدي الكبير للـ IT:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>إزاي تأمن الأجهزة؟</li>
              <li>إزاي تتحكم في الصلاحيات؟</li>
              <li>إزاي تمنع تسريب الداتا؟</li>
              <li>وإزاي تساعد المستخدمين بسرعة لو حصلت مشكلة؟</li>
            </ul>
          </div>

          <div className="mt-4 bg-slate-50 p-4 rounded-xl">
            <p className="font-semibold">الحل؟</p>
            <p className="text-slate-700 mt-2">
              Microsoft عملت حاجة اسمها <strong>Intune Suite</strong> —
              منصة موحدة تجمع:
            </p>

            <ul className="list-disc ml-6 mt-2 space-y-1 text-slate-700">
              <li>Device Management</li>
              <li>Security</li>
              <li>App Protection</li>
              <li>User Support</li>
              <li>Analytics</li>
            </ul>
          </div>
        </section>

        {/* Core Features */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <h2 className="text-lg font-semibold mb-2">ليه Intune Suite مهم؟</h2>
            <ul className="list-disc ml-6 text-slate-700 space-y-1">
              <li>يوحد إدارة كل الأجهزة</li>
              <li>يزود مستوى الأمان</li>
              <li>يساعد في تطبيق Zero Trust</li>
              <li>يقلل الهجمات والاختراقات</li>
              <li>يحسن تجربة المستخدم</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <h2 className="text-lg font-semibold mb-2">📌 Add-ons يعني إيه؟</h2>
            <p className="text-slate-700">
              Intune ينفع تزوده Features إضافية حسب احتياج الشركة.
              تدخل Admin Center → Tenant Administration → Intune Add-ons
              وتشوف المتاح Trial أو Purchase.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">⭐ أهم Features في Intune Suite</h2>

          <div className="grid md:grid-cols-2 gap-4">

            {[
              {
                title: "Endpoint Privilege Management (EPM)",
                desc: "بتتحكم مين يبقى Admin وامتى. بدل ما تدّي المستخدم صلاحيات كاملة، تديله صلاحيات مؤقتة لمهمة معينة — وده يقلل خطر الـ Malware.",
              },
              {
                title: "Enterprise App Management",
                desc: "تنزل وتدير البرامج بطريقة Secure. تتحكم مين يفتح App ومين لا، وتمنع تسريب البيانات.",
              },
              {
                title: "Advanced Analytics",
                desc: "تقارير وInsights عن الأجهزة والـ Apps. تعرف المشاكل قبل ما المستخدم يشتكي.",
              },
              {
                title: "Remote Help",
                desc: "تخش على جهاز المستخدم وتحل المشكلة من غير ما تروحله — مهم جدًا مع الشغل Remote.",
              },
              {
                title: "Microsoft Tunnel",
                desc: "VPN ذكي يخلي الموبايلات تدخل على موارد الشركة بأمان حتى لو الجهاز Personal.",
              },
              {
                title: "Cloud PKI",
                desc: "شهادات Security من غير ما تحتاج تبني Infrastructure معقد.",
              },
            ].map((f, i) => (
              <div key={i} className="bg-slate-50 p-4 rounded-xl">
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-slate-700 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Zero Trust */}
        <section className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-3">🔐 Zero Trust — أهم Concept لازم تفهمه</h2>

          <p className="text-slate-700 leading-7">
            الفكرة ببساطة:
            <strong> متثقش في أي حد أو أي جهاز.</strong>
            لازم تحقق كل مرة قبل ما تسمح بالوصول.
          </p>

          <div className="mt-4 space-y-2">
            <p className="font-semibold">بيتحقق إزاي؟</p>
            <ul className="list-disc ml-6 text-slate-700 space-y-1">
              <li>MFA — تحقق متعدد</li>
              <li>Device Compliance</li>
              <li>Conditional Access</li>
              <li>Threat Detection via Defender</li>
            </ul>
          </div>

          <div className="mt-4 bg-emerald-50 border border-emerald-200 p-4 rounded-xl">
            💡 Interview Tip:
            <p className="mt-1">
              "Zero Trust means verify explicitly, enforce least privilege, and assume breach."
            </p>
          </div>
        </section>

        {/* Endpoint Privilege */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <h2 className="text-lg font-semibold">Endpoint Privilege Management</h2>
            <p className="text-slate-700 mt-2">
              بدل ما كل الموظفين يبقوا Admin (مصيبة 😄)،
              تدي صلاحيات مؤقتة لمهمة بس.
            </p>

            <ul className="list-disc ml-6 mt-2 text-slate-700">
              <li>يقلل الهجمات</li>
              <li>يحافظ على الأمن</li>
              <li>يساعد الـ IT يركز على المشاكل الكبيرة</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <h2 className="text-lg font-semibold">Audit Trail</h2>
            <p className="text-slate-700 mt-2">
              كل مرة حد ياخد صلاحيات Admin النظام بيسجل:
            </p>
            <ul className="list-disc ml-6 text-slate-700">
              <li>مين طلب</li>
              <li>ليه</li>
              <li>امتى</li>
              <li>لمدة قد إيه</li>
            </ul>
          </div>
        </section>

        {/* App Management */}
        <section className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-3">📱 Enterprise App Management</h2>

          <p className="text-slate-700">
            الشركات دلوقتي معتمدة على Apps زي Microsoft 365 و CRM.
            Intune بيساعدك تنزلهم وتتحكم فيهم بسهولة.
          </p>

          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl">
              🔐 Encryption
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              🚫 منع Copy/Paste
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              📂 فصل بيانات الشغل عن الشخصية
            </div>
          </div>
        </section>

        {/* Advanced Analytics */}
        <section className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold">📊 Advanced Analytics</h2>

          <p className="text-slate-700 mt-2">
            بدل ما تستنى المشكلة تحصل، تعرفها بدري.
          </p>

          <ul className="list-disc ml-6 mt-3 text-slate-700">
            <li>Dashboards مخصصة</li>
            <li>Integration مع Power BI</li>
            <li>Threat Detection</li>
            <li>Compliance Monitoring</li>
          </ul>
        </section>

        {/* Remote Help */}
        <section className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold">🧑‍💻 Remote Help</h2>

          <p className="text-slate-700 mt-2">
            تقدر تدخل على جهاز المستخدم وتحل المشكلة فورًا.
          </p>

          <ul className="list-disc ml-6 mt-3 text-slate-700">
            <li>محتاج Entra login للطرفين</li>
            <li>فيه RBAC للتحكم في الصلاحيات</li>
            <li>فيه Logs لكل Session</li>
            <li>ينفع للأجهزة enrolled وغير enrolled</li>
          </ul>
        </section>

        {/* Tunnel */}
        <section className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold">🌐 Microsoft Tunnel</h2>

          <p className="text-slate-700 mt-2">
            VPN ذكي للموبايلات يسمح بالوصول لموارد الشركة بدون ما تدير الجهاز بالكامل.
          </p>

          <div className="mt-3 space-y-2 text-slate-700">
            <p>⭐ أهم ميزة:</p>
            <p className="bg-slate-50 p-3 rounded-lg">
              Per-App VPN — يعني بس التطبيقات الخاصة بالشغل تعدي على الـ VPN
              مش كل الجهاز.
            </p>
          </div>
        </section>

        {/* Final */}
        <section className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
          <h2 className="text-xl font-semibold">🔥 الخلاصة (احفظ دي للانترفيو)</h2>

          <p className="mt-2">
            Intune Suite بيخلي الشركة تطبق:
          </p>

          <ul className="list-disc ml-6 mt-2">
            <li>Zero Trust Security</li>
            <li>Least Privilege</li>
            <li>Advanced Monitoring</li>
            <li>Secure App Access</li>
          </ul>

          <p className="mt-4 font-semibold">
            "Intune Suite provides unified endpoint management, strengthens security posture, and enables organizations to operate in a Zero Trust model." 
          </p>
        </section>

      </main>
    </div>
  );
}
