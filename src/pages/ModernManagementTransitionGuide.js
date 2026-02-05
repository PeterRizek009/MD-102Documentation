import React from "react";

/**
 * ✅ Put images here:
 * /public/images/
 *
 * autopilot-ts.png   (Autopilot for existing devices task sequence)
 * kfm.jpg           (Known Folder Move user experience)
 */

export default function ModernManagementTransitionGuide() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HEADER */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold">
            Autopilot + Co-management — الانتقال للإدارة الحديثة بالمصري
          </h1>
          <p className="text-slate-600 mt-2">
            شرح شامل: ليه نسيب Imaging؟ إمتى نستخدم Co-management؟ إزاي ننقل Workloads؟ وإزاي ننقل Data (ESR/USMT/KFM)
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-8">
        {/* INTRO */}
        <section className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-3">🔥 الفكرة الأساسية</h2>
          <p className="text-slate-700 leading-7">
            زمان أغلب الشركات كانت ماشية على:
            <strong> AD + Group Policy + SCCM (Configuration Manager) + Imaging</strong>.
            ومع الـ Remote/Hybrid بقى صعب تعتمد على شبكة الشركة طول الوقت.
          </p>

          <div className="mt-4 bg-slate-50 p-4 rounded-xl text-slate-700 leading-7">
            <p className="font-semibold">الهدف من Modern Management:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>تقلل/تلغي الـ Imaging قدر الإمكان</li>
              <li>تخلي الجهاز يتجهز من أي مكان (Internet-based)</li>
              <li>تأمين الوصول بـ Conditional Access + Compliance</li>
              <li>إدارة أخف وأسهل من GPO الثقيلة</li>
            </ul>
          </div>
        </section>

        {/* CO-MANAGEMENT */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-2">يعني إيه Co-management؟</h2>
            <p className="text-slate-700 leading-7">
              ببساطة: نفس الجهاز يبقى مُدار من الاتنين مع بعض:
              <strong> SCCM + Intune</strong>.
              ده بيعملك "Bridge" محترم عشان تنقل شغلك تدريجي بدل ما تقطع مرة واحدة.
            </p>
            <div className="mt-4 bg-slate-50 p-4 rounded-xl">
              <p className="font-semibold">ليه Microsoft عملته؟</p>
              <ul className="list-disc ml-6 mt-2 text-slate-700 space-y-1">
                <li>عشان أغلب الشركات أصلاً عندها SCCM شغال سنين</li>
                <li>وفيه Legacy apps و Dependencies صعب تتحول بسرعة</li>
                <li>فبدل Big Bang migration — نمشي خطوة خطوة</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-2">الشرط الأساسي: Hybrid Join</h2>
            <p className="text-slate-700 leading-7">
              عشان تعمل Co-management للأجهزة اللي عندك On-prem AD:
              لازم الأجهزة تبقى <strong>Microsoft Entra Hybrid Joined</strong>.
              يعني:
              <strong>Joined لـ AD</strong> و في نفس الوقت <strong>Registered/Joined في Entra</strong>.
            </p>
            <div className="mt-4 bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-900">
              ✅ ميزة قوية: SSO للوصول للـ Cloud & On-prem + تقدر تطبق Conditional Access.
            </div>
          </div>
        </section>

        {/* PREREQS */}
        <section className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">✅ Prerequisites (قبل ما تبدأ)</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-5 rounded-xl">
              <h3 className="font-semibold">محتاج إيه في البيئة؟</h3>
              <ul className="list-disc ml-6 mt-2 text-slate-700 space-y-1">
                <li>Microsoft Entra Connect Updated + Sync لأجهزة الكمبيوتر (Computer objects)</li>
                <li>Intune MDM Auto-enrollment متفعل</li>
                <li>Configuration Manager / Endpoint Manager installed</li>
                <li>Windows 10/11 (يفضل أحدث نسخة)</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl">
              <h3 className="font-semibold">Pilot Strategy (مهم جدًا)</h3>
              <p className="text-slate-700 mt-2 leading-7">
                متبدأش بكل الشركة مرة واحدة.
                اعمل <strong>Pilot Groups</strong> (يفضل IT Department أولاً).
                وبعد ما تتأكد كل حاجة شغالة — توسّع تدريجي.
              </p>
            </div>
          </div>
        </section>

        {/* CONTROL REGISTRATION */}
        <section className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-3">🧠 التحكم في Entra Hybrid Join للأجهزة</h2>
          <p className="text-slate-700 leading-7">
            الأجهزة الحديثة ممكن تعمل Register في Entra تلقائي عند Start أو Sign-in.
            لو إنت عايز تتحكم (خصوصًا وقت الـ Pilot) تقدر تتحكم بـ:
          </p>
          <ul className="list-disc ml-6 mt-3 text-slate-700 space-y-1">
            <li>GPO: Register domain-joined computers as devices</li>
            <li>أو Configuration Manager</li>
          </ul>

          <div className="mt-4 bg-slate-50 p-4 rounded-xl">
            <p className="font-semibold">استراتيجية شائعة:</p>
            <ul className="list-disc ml-6 mt-2 text-slate-700 space-y-1">
              <li>GPO (Disabled) على كل الأجهزة عشان تمنع التسجيل تلقائي</li>
              <li>GPO (Enabled) على OU بتاعة Pilot بس</li>
            </ul>
          </div>
        </section>

        {/* MODERN VS TRADITIONAL */}
        <section className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">⚖️ Modern Methods vs Imaging (متى نحتاج Imaging؟)</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-5 rounded-xl">
              <h3 className="font-semibold">Modern Deployment (المفضل)</h3>
              <ul className="list-disc ml-6 mt-2 text-slate-700 space-y-1">
                <li>أسرع وأخف على الشبكة</li>
                <li>بيحول الجهاز بدون Image جديدة</li>
                <li>مناسب للأجهزة اللي عليها Windows 11 بالفعل</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl">
              <h3 className="font-semibold">إمتى Imaging تفضل ضرورية؟</h3>
              <ul className="list-disc ml-6 mt-2 text-slate-700 space-y-1">
                <li>الجهاز مش بيBoot (BSOD / Disk replacement)</li>
                <li>محتاج Bare-metal build</li>
                <li>أجهزة قديمة/OS غير مدعوم</li>
                <li>Dependencies معقدة جدًا أثناء البناء</li>
              </ul>
            </div>
          </div>
        </section>

        {/* UPGRADE vs MIGRATION */}
        <section className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">🔄 Upgrade ولا Migration؟</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-5 rounded-xl">
              <h3 className="font-semibold">In-place Upgrade</h3>
              <ul className="list-disc ml-6 mt-2 text-slate-700 space-y-1">
                <li>بيحافظ على البيئة والـ Apps غالبًا</li>
                <li>ممكن يتعمل Rollback لو حصل مشكلة</li>
                <li>مقيد بمسارات ترقية معينة</li>
                <li>لازم تستخدم Default Windows image</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl">
              <h3 className="font-semibold">Migration (Wipe & Load / Side-by-side)</h3>
              <ul className="list-disc ml-6 mt-2 text-slate-700 space-y-1">
                <li>بيطلعلك Environment standardized ونظيف</li>
                <li>تتحكم إيه اللي يتنقل وإيه لا</li>
                <li>لا يوجد Rollback حقيقي بعد الميجريشن</li>
                <li>غالبًا هتعيد تثبيت Apps</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-900">
            ⚠️ نقطة مهمة: Migration فيه Risk فقدان داتا لو المستخدم/IT محددوش الداتا الصح قبل التنفيذ.
          </div>
        </section>

        {/* AUTOPILOT EXISTING DEVICES */}
        <section className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-3">🚀 Autopilot for Existing Devices (ليه مهم؟)</h2>
          <p className="text-slate-700 leading-7">
            ده سيناريو قوي في الشركات اللي عندها أجهزة قديمة (Windows 7/8.1 مثلاً).
            تقدر تستخدم Automation (غالبًا مع SCCM Task Sequence) عشان:
          </p>
          <ul className="list-disc ml-6 mt-3 text-slate-700 space-y-1">
            <li>تعمل Upgrade / Rebuild وتوصل لWindows 11</li>
            <li>تحول الجهاز من Domain Joined ل Entra + Intune Managed</li>
            <li>كل ده في Workflow واحدة</li>
          </ul>

          <img
            src="/images/autopilot-ts.png"
            alt="Autopilot for existing devices task sequence"
            className="mt-6 rounded-xl border"
          />

          <div className="mt-4 bg-slate-50 p-4 rounded-xl">
            <p className="font-semibold">الفكرة في الامتحان:</p>
            <p className="text-slate-700 mt-1 leading-7">
              هيجيلك Scenario: أجهزة قديمة + عايز Modern management.
              الإجابة غالبًا: Autopilot + (مع SCCM لو محتاج In-place upgrade) + Co-management كمرحلة انتقال.
            </p>
          </div>
        </section>

        {/* DATA MIGRATION */}
        <section className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">📦 نقل الداتا والإعدادات (دي نقطة امتحان قوية)</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-5 rounded-xl">
              <h3 className="font-semibold">1) ESR</h3>
              <p className="text-slate-700 mt-2 leading-7">
                Enterprise State Roaming: يزامن Settings بتاعة Windows (Edge, language, personalization…) عبر أجهزة Entra joined.
                <br />
                ⚠️ مش بيزامن Desktop apps settings بشكل كامل.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl">
              <h3 className="font-semibold">2) USMT</h3>
              <p className="text-slate-700 mt-2 leading-7">
                Tool للهجرة الفعلية للـ User State (Files/Settings) أثناء Migration.
                مرحلتين: Capture (ScanState) ثم Restore (LoadState).
              </p>
              <p className="text-slate-700 mt-2">
                Templates: MigApp.xml / MigDocs.xml / MigUser.xml / ConfigMgr.xml
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl">
              <h3 className="font-semibold">3) OneDrive KFM</h3>
              <p className="text-slate-700 mt-2 leading-7">
                Known Folder Move: يحمي Desktop/Documents/Pictures ويحولهم OneDrive.
                ينفع Prompt أو Silent.
              </p>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold">Known Folder Move (User Experience)</h3>
              <p className="text-slate-700 mt-2 leading-7">
                لما IT يفعل KFM، المستخدم بيطلعله Prompt (لو مش Silent) يقول له يحمي الفولدرات المهمة.
                وده بيخلي نقل الملفات أسهل بدل ما نعتمد على نسخ يدوي.
              </p>
            </div>
            <div>
              <img
                src="/images/kfm.jpg"
                alt="Known Folder Move prompt"
                className="rounded-xl border"
              />
            </div>
          </div>

          <div className="mt-4 bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-900">
            ⚠️ مهم: KFM مش هينفع لو عندك Folder Redirection شغال على Desktop/Documents/Pictures.
            وكمان لازم تراعي Network impact وتعمل Pilot.
          </div>
        </section>

        {/* WORKLOADS */}
        <section className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">🔁 نقل الـ Workloads من SCCM لـ Intune (Co-management)</h2>
          <p className="text-slate-700 leading-7">
            الفكرة: متسيبش Workload "سايب" — لازم يبقى في إدارة واحدة واضحة.
            قبل ما تحوّل Workload لـ Intune، اتأكد إنك عامل نفس الـ Policy هناك.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-slate-50 p-5 rounded-xl">
              <h3 className="font-semibold">أمثلة Workloads ممكن تنتقل</h3>
              <ul className="list-disc ml-6 mt-2 text-slate-700 space-y-1">
                <li>Resource access (Wi-Fi/VPN/Cert/Email)</li>
                <li>Endpoint Protection (Defender/Firewall/Encryption…)</li>
                <li>Windows Update (WuFB)</li>
                <li>Device configuration (بديل GPO)</li>
                <li>Microsoft 365 Apps</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl">
              <h3 className="font-semibold">استراتيجية ذكية</h3>
              <ul className="list-disc ml-6 mt-2 text-slate-700 space-y-1">
                <li>ابدأ بالأجهزة الأبسط في الإعداد</li>
                <li>انقل Updates/Defender أولًا (قيمة عالية بسرعة)</li>
                <li>خلي الـ Legacy apps على SCCM مؤقتًا</li>
                <li>وسّع Pilot تدريجي</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SMALL vs ENTERPRISE */}
        <section className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-3">🏢 Small Org vs Enterprise — مين يسيب SCCM؟</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-5 rounded-xl">
              <h3 className="font-semibold">Small/Medium غالبًا ينفع Cloud-only</h3>
              <ul className="list-disc ml-6 mt-2 text-slate-700 space-y-1">
                <li>Apps بسيطة</li>
                <li>مفيش Legacy كتير</li>
                <li>Autopilot كفاية</li>
                <li>عايزين يقللوا Infra on-prem</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-5 rounded-xl">
              <h3 className="font-semibold">Enterprise غالبًا محتاج Co-management فترة</h3>
              <ul className="list-disc ml-6 mt-2 text-slate-700 space-y-1">
                <li>تعقيد عالي + Apps كتير جدًا</li>
                <li>استثمار سنين في SCCM packages</li>
                <li>Migration effort ضخم</li>
                <li>ينقلوا OS deployment أولًا (Autopilot) + تدريجيًا باقي الـ workloads</li>
              </ul>
            </div>
          </div>
        </section>

        {/* INTERVIEW */}
        <section className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
          <h2 className="text-xl font-semibold">🎯 خلاصة تحفظها للامتحان والـ Interview</h2>
          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>
              <strong>Co-management</strong> = Bridge بين SCCM و Intune عشان تنقل تدريجي.
            </li>
            <li>
              <strong>Prereq أساسي</strong>: Entra Hybrid Join + Auto-enrollment.
            </li>
            <li>
              <strong>Modern deployment</strong> يقلل Imaging — لكن Imaging لسه له حالات خاصة.
            </li>
            <li>
              <strong>Data migration</strong>: ESR (Settings) + OneDrive KFM (Files) + USMT (full user state).
            </li>
          </ul>

          <p className="mt-4 font-semibold">
            "Use co-management to transition workloads gradually to Intune while maintaining SCCM for complex legacy scenarios, and adopt modern provisioning like Autopilot to reduce imaging." 
          </p>
        </section>
      </main>
    </div>
  );
}
