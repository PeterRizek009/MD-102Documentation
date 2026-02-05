import React from "react";

/**
 * ✅ How to use the image:
 * Option A (recommended): put the image in /public/images/wcd.png
 * then keep src="/images/wcd.png"
 *
 * Option B: put it in /src/assets/wcd.png
 * then: import wcdImg from "../assets/wcd.png"; and replace src with {wcdImg}
 */

export default function WindowsConfigurationDesignerGuide() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top bar */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                Windows Configuration Designer (WCD) + Provisioning Packages (.ppkg)
              </h1>
              <p className="mt-1 text-sm text-slate-600">
                شرح بالمصري (عملي + فهم الصورة + خطوات من A to Z) — مناسب لـ MD-102 و الشغل الحقيقي
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                Dynamic Provisioning
              </span>
              <span className="rounded-full border bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                .ppkg
              </span>
              <span className="rounded-full border bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                Entra Join / MDM
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-6 py-8">
        {/* Quick summary */}
        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold">الفكرة في سطرين</h2>
            <p className="mt-2 text-sm text-slate-700 leading-6">
              بدل ما تعمل <span className="font-semibold">re-image</span> للجهاز، تقدر “تظبطه”
              بملف صغير اسمه <span className="font-semibold">Provisioning Package</span> (.ppkg)
              يضيف إعدادات/تطبيقات/Join… بسرعة.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold">WCD بيعمل إيه؟</h3>
            <p className="mt-2 text-sm text-slate-700 leading-6">
              WCD هو برنامج من ضمن Windows ADK بيخليك تختار إعدادات (Wizard أو All settings) وبعدين
              يطلعلك ملف .ppkg تقدر تطبّقه على Windows 10/11.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold">أستخدمه إمتى؟</h3>
            <p className="mt-2 text-sm text-slate-700 leading-6">
              لما النت ضعيف/مفيش Autopilot، أو محتاج تجهيز سريع “على الأرض” (USB)، أو BYOD/CYOD،
              أو عايز setup مبدئي قبل ما Intune يكمل الإدارة.
            </p>
          </div>
        </section>

        {/* The image + explanation */}
        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold">الصورة دي بتشرح إيه؟ (WCD Interface)</h2>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                Accounts → ComputerAccount
              </span>
            </div>

            <p className="mt-3 text-sm text-slate-700 leading-6">
              اللي قدامك ده برنامج <span className="font-semibold">Windows Configuration Designer</span>.
              على الشمال في Tree اسمه <span className="font-semibold">Available customizations</span> (الإعدادات اللي تقدر تغيرها).
              وإنت حالياً واقف على:
              <span className="font-semibold"> Runtime settings → Accounts → Azure → ComputerAccount</span>.
            </p>

            <div className="mt-4 rounded-xl border bg-slate-50 p-4">
              <h3 className="text-sm font-semibold">المعنى العملي للمكان ده</h3>
              <p className="mt-2 text-sm text-slate-700 leading-6">
                الجزء ده خاص بـ “انضمام الجهاز للدومين” (Traditional AD Domain Join) أو تجهيز بيانات حساب
                يقدر يعمل Join أثناء تطبيق الـ .ppkg. (مهم: ده غير Entra Join؛ Entra Join ليه إعدادات تانية).
              </p>
            </div>

            <div className="mt-4 grid gap-3">
              <div className="rounded-xl border p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Account</p>
                  <span className="text-xs text-slate-500">Domain\Username</span>
                </div>
                <p className="mt-1 text-sm text-slate-700 leading-6">
                  ده الحساب اللي مسموح له يعمل <span className="font-semibold">Join للكمبيوتر للدومين</span>.
                  بيتكتب بصيغة: <span className="font-semibold">CONTOSO\\JoinAccount</span>.
                </p>
              </div>

              <div className="rounded-xl border p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">AccountOU</p>
                  <span className="text-xs text-slate-500">OU Path</span>
                </div>
                <p className="mt-1 text-sm text-slate-700 leading-6">
                  ده الـ <span className="font-semibold">OU</span> اللي عايز تحط فيها الكمبيوتر في Active Directory.
                  مثال: <span className="font-semibold">OU=Workstations,OU=Dubai,DC=contoso,DC=local</span>
                </p>
              </div>

              <div className="rounded-xl border p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">ComputerName</p>
                  <span className="text-xs text-slate-500">Naming</span>
                </div>
                <p className="mt-1 text-sm text-slate-700 leading-6">
                  اسم الجهاز اللي هيتطبق عليه. تقدر تخليه ثابت (مثلاً <span className="font-semibold">DUB-CS-001</span>)
                  أو تمشي بنظام naming أنت حاطه في الشركة.
                </p>
              </div>

              <div className="rounded-xl border p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">DomainName</p>
                  <span className="text-xs text-slate-500">AD Domain</span>
                </div>
                <p className="mt-1 text-sm text-slate-700 leading-6">
                  اسم الدومين اللي هتعمله Join. مثال: <span className="font-semibold">contoso.local</span>
                </p>
              </div>

              <div className="rounded-xl border p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Password</p>
                  <span className="text-xs text-rose-600 font-medium">Sensitive</span>
                </div>
                <p className="mt-1 text-sm text-slate-700 leading-6">
                  باسورد حساب الـ Join. ودي نقطة خطيرة: لو هتستخدم بيانات حساسة،
                  لازم تعمل <span className="font-semibold">Encrypt + Sign</span> للـ .ppkg وتتحكم مين يقدر يطبّقه.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm text-amber-900 leading-6">
                ⚠️ نصيحة أمنية: حط بيانات Join Account/Password في .ppkg بس لو أنت فاهم المخاطر،
                ودايمًا اعمل <span className="font-semibold">تشفير وتوقيع</span> للباكدج
                وخليه يتطبق في سيناريوهات controlled (مثلاً IT hands-on).
              </p>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">الصورة</h2>
            <p className="mt-2 text-sm text-slate-600 leading-6">
              لقطة من Windows Configuration Designer — نفس اللي إنت باعتها.
            </p>

            <div className="mt-4 overflow-hidden rounded-xl border bg-slate-50">
              <img
                src="/images/wcd.png"
                alt="Windows Configuration Designer Interface"
                className="h-auto w-full"
              />
            </div>

            <div className="mt-4 rounded-xl border bg-slate-50 p-4">
              <h3 className="text-sm font-semibold">هتلاحظ كمان إيه في الصورة؟</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 leading-6">
                <li>
                  • فوق في التابات: <span className="font-semibold">Project1</span> يعني ده مشروع provisioning package.
                </li>
                <li>
                  • تحت: <span className="font-semibold">Edition: All Windows desktop editions</span> يعني الإعدادات دي
                  شغالة على Windows desktop (10/11) مش موبايل.
                </li>
                <li>
                  • في الشمال <span className="font-semibold">View: All settings</span> — ده advanced view.
                  لو اخترت Wizards هتشتغل step-by-step.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practical steps */}
        <section className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">خطوات عملية: أعمل .ppkg من البداية للنهاية</h2>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border bg-slate-50 p-5">
              <h3 className="text-sm font-semibold">1) جهّز الأدوات</h3>
              <ol className="mt-2 space-y-2 text-sm text-slate-700 leading-6 list-decimal pl-5">
                <li>نزّل Windows ADK (عشان WCD).</li>
                <li>افتح Windows Configuration Designer.</li>
                <li>اختار مشروع: Desktop device / Kiosk / … حسب السيناريو.</li>
              </ol>
            </div>

            <div className="rounded-xl border bg-slate-50 p-5">
              <h3 className="text-sm font-semibold">2) اختار طريقة الشغل</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 leading-6">
                <li>
                  • <span className="font-semibold">Wizards</span>: أسهل وأسرع، مناسب لناس لسه بتتعلم.
                </li>
                <li>
                  • <span className="font-semibold">All settings</span>: Advanced (زي الصورة) — تحكم كامل.
                </li>
              </ul>
            </div>

            <div className="rounded-xl border p-5">
              <h3 className="text-sm font-semibold">3) ضيف الإعدادات اللي محتاجها</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 leading-6">
                <li>• Wi-Fi / VPN / Certificates</li>
                <li>• Rename device + UI settings</li>
                <li>• Install apps / add files</li>
                <li>• Join (AD domain أو Entra Join حسب اختيارك)</li>
              </ul>
            </div>

            <div className="rounded-xl border p-5">
              <h3 className="text-sm font-semibold">4) Export الباكدج</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 leading-6">
                <li>
                  • Export → Provisioning package
                </li>
                <li>
                  • فعّل <span className="font-semibold">Encrypt</span> لو فيه بيانات حساسة
                </li>
                <li>
                  • فعّل <span className="font-semibold">Sign</span> لو عايز تمنع تطبيق باكدجات غير موثوقة
                </li>
                <li>
                  • الناتج هيبقى ملف <span className="font-semibold">.ppkg</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-sm font-semibold">تطبيق الـ .ppkg على الجهاز (3 طرق)</h3>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border bg-white p-4">
                <p className="text-sm font-semibold">1) Double-click</p>
                <p className="mt-1 text-sm text-slate-700 leading-6">
                  أبسط طريقة: افتح الملف على الجهاز واتبع خطوات التثبيت.
                </p>
              </div>
              <div className="rounded-xl border bg-white p-4">
                <p className="text-sm font-semibold">2) Settings App</p>
                <p className="mt-1 text-sm text-slate-700 leading-6">
                  Settings → Accounts/Access work… (حسب النسخة) → Add provisioning package.
                </p>
              </div>
              <div className="rounded-xl border bg-white p-4">
                <p className="text-sm font-semibold">3) PowerShell</p>
                <p className="mt-1 text-sm text-slate-700 leading-6">
                  Add-ProvisioningPackage cmdlet (أفضل في السيناريوهات المؤتمتة).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Where this fits with Intune/Entra */}
        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">الفرق بين .ppkg و Autopilot</h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700 leading-6">
              <p>
                <span className="font-semibold">Autopilot</span>: Cloud-first، قوي جدًا، centralized، monitoring ممتاز،
                بس محتاج إنترنت وسيناريواته ليها متطلبات (hash/registration…).
              </p>
              <p>
                <span className="font-semibold">Provisioning Package</span>: سريع ومرن، ينفع Offline (USB)، مناسب للمصانع/الفروع الضعيفة،
                بس الMonitoring بعده بيكون أحسن لو Intune كمل الإدارة.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">أحسن سيناريو واقعي (Hybrid ذكي)</h2>
            <ol className="mt-3 space-y-2 text-sm text-slate-700 leading-6 list-decimal pl-5">
              <li>تطبّق .ppkg سريعًا عشان Wi-Fi + اسم جهاز + Entra Join/Enroll (لو متاح)</li>
              <li>Intune يستلم: Compliance + Config + Apps + Security Baselines</li>
              <li>تعمل Monitoring يومي من Reports في Intune + Entra + Defender</li>
            </ol>
          </div>
        </section>

        {/* Monitoring / troubleshooting */}
        <section className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Monitoring & Troubleshooting (مختصر مفيد بس عملي)</h2>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border p-5">
              <h3 className="text-sm font-semibold">بعد التطبيق… أتأكد إزاي؟</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 leading-6">
                <li>• اتأكد من Edition (Pro → Enterprise لو Subscription Activation)</li>
                <li>• اتأكد Join (Entra/AD) حسب السيناريو</li>
                <li>• اتأكد Apps/Policies اتطبقت</li>
              </ul>
            </div>

            <div className="rounded-xl border p-5">
              <h3 className="text-sm font-semibold">لو الهدف Intune</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 leading-6">
                <li>• Devices → All devices (الجهاز ظهر؟)</li>
                <li>• Device compliance (Noncompliant ليه؟)</li>
                <li>• App install status</li>
              </ul>
            </div>

            <div className="rounded-xl border p-5">
              <h3 className="text-sm font-semibold">أخطاء شائعة</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 leading-6">
                <li>• Join Account مش له صلاحية join</li>
                <li>• OU path غلط</li>
                <li>• Package مش Signed/Encrypted + اتطبق غلط</li>
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-sm text-emerald-900 leading-6">
              ✅ Interview line جاهزة:  
              “I use provisioning packages for fast initial provisioning (even offline), then Intune takes over for
              centralized configuration, compliance, app deployment, and continuous monitoring.”
            </p>
          </div>
        </section>

        <footer className="mt-10 pb-6 text-center text-xs text-slate-500">
          Built with React + Tailwind CSS • MD-102 Notes
        </footer>
      </main>
    </div>
  );
}
