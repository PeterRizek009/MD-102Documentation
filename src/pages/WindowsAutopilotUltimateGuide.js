import React from "react";

import autopilotDiagram from "../assets/windows-autopilot-service-white-4f335827.png";
import signInDefault from "../assets/microsoft-account-sign-d6997be5.png";
import signInAutopilot from "../assets/azure-active-directory-sign-9f107960.png";

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700">
    {children}
  </span>
);

const Callout = ({ title, children, tone = "info" }) => {
  const tones = {
    info: "border-blue-200 bg-blue-50 text-blue-900",
    warn: "border-amber-200 bg-amber-50 text-amber-900",
    ok: "border-emerald-200 bg-emerald-50 text-emerald-900",
    danger: "border-rose-200 bg-rose-50 text-rose-900",
  };
  return (
    <div className={`rounded-2xl border p-5 ${tones[tone]}`}>
      {title ? <div className="mb-2 text-base font-bold">{title}</div> : null}
      <div className="text-sm leading-6">{children}</div>
    </div>
  );
};

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-24">
    <div className="mb-4">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
      {subtitle ? <p className="mt-1 text-gray-600">{subtitle}</p> : null}
    </div>
    <div className="space-y-4">{children}</div>
  </section>
);

const Step = ({ n, title, children }) => (
  <div className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 font-bold text-gray-900">
      {n}
    </div>
    <div className="min-w-0">
      <div className="font-semibold text-gray-900">{title}</div>
      <div className="mt-1 text-sm leading-6 text-gray-700">{children}</div>
    </div>
  </div>
);

const Code = ({ children }) => (
  <pre className="overflow-x-auto rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-900">
    <code>{children}</code>
  </pre>
);

export default function WindowsAutopilotUltimateGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* TOP BAR */}
      <div className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50">
              🚀
            </div>
            <div className="leading-tight">
              <div className="font-bold text-gray-900">Windows Autopilot — شرح كامل بالمصري</div>
              <div className="text-xs text-gray-600">MD-102 | Deployment | Monitoring | Troubleshooting</div>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Badge>Zero Touch</Badge>
            <Badge>Entra ID</Badge>
            <Badge>Intune</Badge>
            <Badge>OOBE</Badge>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 py-8 lg:grid-cols-[280px_1fr]">
        {/* SIDEBAR */}
        <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-20">
          <div className="mb-3 text-sm font-bold text-gray-900">📌 محتويات الصفحة</div>
          <nav className="space-y-2 text-sm">
            {[
              ["overview", "1) الفكرة ببساطة"],
              ["benefits", "2) ليه Autopilot مهم؟"],
              ["requirements", "3) المتطلبات (Prerequisites)"],
              ["device-ids", "4) تجهيز ورفع Device IDs / Hardware Hash"],
              ["profile", "5) إنشاء Deployment Profile + OOBE"],
              ["scenarios", "6) سيناريوهات Autopilot (المودز)"],
              ["reset", "7) Autopilot Reset"],
              ["monitoring", "8) Monitoring يومي وتقارير"],
              ["troubleshooting", "9) Troubleshooting عملي (Logs + Scripts)"],
              ["traditional", "10) إمتى نستخدم الطرق التقليدية؟"],
              ["checklist", "✅ Checklist A→Z"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="block rounded-xl border border-transparent px-3 py-2 text-gray-700 hover:border-gray-200 hover:bg-gray-50"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="mt-4">
            <Callout tone="warn" title="مهم قبل ما تبدأ">
              Autopilot **مش بيحط ويندوز من الأول** (مش Image Deployment). هو بيشتغل على جهاز عليه Windows 10/11
              وبيتحكم في الـ OOBE ويخليه يدخل Entra ID + يتسجل في Intune ويتطبق عليه Policies و Apps.
            </Callout>
          </div>
        </aside>

        {/* MAIN */}
        <main className="space-y-10">
          {/* HERO */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                  Windows Autopilot (Modern Deployment) — من أول Upload IDs لحد Monitoring يومي
                </h1>
                <p className="mt-2 max-w-3xl text-gray-600">
                  الشرح ده بالمصري وبطريقة عملية: إزاي نجهز Autopilot، نرفع Hardware Hash، نعمل Deployment Profile،
                  نختار السيناريو الصح، وبعد كده نراقب يوميًا ونعالج أشهر المشاكل.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>Devices → Enroll</Badge>
                <Badge>Autopilot Profiles</Badge>
                <Badge>ESP</Badge>
                <Badge>TPM 2.0</Badge>
              </div>
            </div>
          </div>

          {/* IMAGES */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="mb-2 font-bold text-gray-900">📷 Diagram — رحلة الـ Device IDs</div>
              <img
                src={autopilotDiagram}
                alt="Autopilot device ID process diagram"
                className="w-full rounded-xl border border-gray-200"
              />
              <p className="mt-3 text-sm text-gray-700">
                الفكرة: الـ OEM أو الـ Admin بيرفع الـ Hardware Hash للـ Autopilot service، وبعدين الـ Profile يتطبق،
                والموظف يفتح الجهاز ويتعمل Self-deploy.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="mb-2 font-bold text-gray-900">📷 Default OOBE (مش Autopilot)</div>
                <img
                  src={signInDefault}
                  alt="Default OOBE sign-in screen"
                  className="w-full rounded-xl border border-gray-200"
                />
                <p className="mt-3 text-sm text-gray-700">
                  ده شكل تسجيل الدخول الطبيعي أثناء الـ OOBE. ساعات المستخدم يِتلخبط ويعمل Microsoft Account بدل حساب
                  الشركة.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="mb-2 font-bold text-gray-900">📷 Autopilot OOBE (Company Branding)</div>
                <img
                  src={signInAutopilot}
                  alt="Autopilot branded sign-in screen"
                  className="w-full rounded-xl border border-gray-200"
                />
                <p className="mt-3 text-sm text-gray-700">
                  هنا Autopilot مسيطر على الـ OOBE وبيطلب Email الشركة وبيظهر Branding (زي Welcome to …).
                </p>
              </div>
            </div>
          </div>

          <Section
            id="overview"
            title="1) الفكرة ببساطة (Autopilot بيعمل إيه؟)"
            subtitle="بدل ما تِعمل Image و WDS/MDT/SCCM… Autopilot بيخلّي الجهاز الجديد يتكوّن من نفسه Cloud."
          >
            <Callout tone="info" title="تعريف سريع بالمصري">
              زمان كنا بنشتري جهاز جديد ونمسحه ونحط Image الشركة (ويندوز + درايفرز + برامج) وده بياخد وقت وبنية تحتية.
              <br />
              Autopilot بيقولك: <b>سيب ويندوز الـ OEM زي ما هو</b>… وخلي الجهاز أول ما يفتح (OOBE) يِتعرّف على Tenant
              الشركة من خلال الـ Hardware Hash، وبعدها:
              <ul className="mt-2 list-inside list-disc">
                <li>يعمل Join لـ Microsoft Entra ID (Azure AD سابقًا)</li>
                <li>يتعمل Auto-enroll في Intune (MDM)</li>
                <li>يتطبق عليه Policies + Apps + Security Baselines</li>
                <li>المستخدم يوصل لجهاز جاهز للشغل بدون IT يلمسه (Zero Touch)</li>
              </ul>
            </Callout>

            <Callout tone="warn" title="Autopilot مش بديل لكل حاجة">
              Autopilot <b>مش</b> بيعمل Bare-metal (هارد فاضي) ومش بيصلّح Windows لو الـ OS بايظ/Corrupted.
              لازم الجهاز يكون عليه Windows 10/11 ويدخل OOBE.
            </Callout>
          </Section>

          <Section id="benefits" title="2) ليه Autopilot مهم؟ (Benefits)">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Callout tone="ok" title="مكاسب للإدارة (IT)">
                <ul className="list-inside list-disc">
                  <li>مفيش Images ولا Drivers Injection ولا MDT Infrastructure</li>
                  <li>تجهيز أسرع + أقل Bandwidth</li>
                  <li>إعدادات OOBE متتحكم فيها (تخفي شاشات وتمنع غلطات المستخدم)</li>
                  <li>يوصل لليوزر وهو جاهز (Apps/Policies) + يقلل Tickets</li>
                </ul>
              </Callout>
              <Callout tone="ok" title="مكاسب لليوزر">
                <ul className="list-inside list-disc">
                  <li>تجربة بسيطة: شغّل الجهاز → نت → سجّل بحساب الشركة → جاهز</li>
                  <li>أقل خطوات وأقل حاجات “مش مفهومة” في الـ OOBE</li>
                  <li>غالبًا المستخدم مش هيبقى Local Admin (حسب إعداداتك)</li>
                </ul>
              </Callout>
            </div>

            <Callout tone="info" title="New devices vs Refresh existing">
              <b>New:</b> جهاز جديد من OEM، Autopilot يعمله Config للشركة (حتى لو عليه برامج OEM). <br />
              <b>Refresh:</b> لو جهاز قديم تقيل/مليان مشاكل أو هيتسلم لموظف جديد… تعمل Reset / Wipe ويرجع OOBE ويتعمل
              Autopilot تاني.
            </Callout>
          </Section>

          <Section id="requirements" title="3) المتطلبات (Prerequisites) — لازم دول يبقوا موجودين">
            <Step n="1" title="Windows Edition + Version">
              لازم Windows <b>Pro / Enterprise / Education</b>. Windows Home مش شغال Autopilot. ويفضل Windows حديث
              (حسب السيناريو).
            </Step>

            <Step n="2" title="Internet + Ports">
              لازم الجهاز يشوف الإنترنت + DNS شغال. ويفضل تجهز السماحات للـ URLs الخاصة بخدمات Microsoft.
              <div className="mt-2">
                <Badge>80 HTTP</Badge> <Badge>443 HTTPS</Badge> <Badge>123 UDP/NTP</Badge>
              </div>
            </Step>

            <Step n="3" title="Microsoft Entra ID + (P1/P2 لو هتعمل Auto-enrollment Scopes)">
              Autopilot معتمد على Entra ID. ولو عايز Auto-enroll في Intune لازم تظبط <b>Mobility (MDM and MAM)</b> في
              Entra.
            </Step>

            <Step n="4" title="Intune (أو MDM تاني) + إعداد MDM User Scope">
              في Entra admin center:
              <ul className="mt-2 list-inside list-disc">
                <li>Entra ID → Mobility (MDM and MAM) → Microsoft Intune</li>
                <li>MDM user scope: All (أو Some وتختار جروبات)</li>
              </ul>
            </Step>

            <Callout tone="warn" title="ملحوظة مهمة">
              Autopilot لازم الجهاز يوصل لـ OOBE. لو الجهاز معمول عليه Login وداخل ويندوز… هتحتاج Wipe/Reset أو Sysprep
              عشان يرجع OOBE (حسب السيناريو).
            </Callout>
          </Section>

          <Section
            id="device-ids"
            title="4) تجهيز ورفع Device IDs / Hardware Hash"
            subtitle="دي أهم خطوة: الجهاز لازم يكون “Known device” في Autopilot."
          >
            <Callout tone="info" title="يعني إيه Hardware Hash؟">
              ده بصمة للجهاز (Hardware-based) بتخلي Autopilot يعرف إن الجهاز ده تابع لشركتك. وبتتحط في CSV وتترفع على
              Intune (أو زمان MS Store for Business).
            </Callout>

            <Step n="1" title="الطريقة الأسهل: الـ OEM يرفع IDs بدل منك">
              لو بتشتري أجهزة جديدة، كثير من الـ Vendors يقدروا يرفعوا الـ Hash أو يدّوك CSV جاهز.
            </Step>

            <Step n="2" title="لو جهاز موجود عندك: طلّع CSV بالـ PowerShell">
              على الجهاز (Admin PowerShell):
              <Code>{`Install-Script -Name Get-WindowsAutopilotInfo
Get-WindowsAutopilotInfo.ps1 -OutputFile "D:\\Devices\\Device1.csv"`}</Code>
              الـ CSV غالبًا فيه: Serial Number + Windows Product ID + Hardware Hash.
            </Step>

            <Step n="3" title="Upload الـ CSV في Intune">
              من Intune admin center:
              <ul className="mt-2 list-inside list-disc">
                <li>Devices → Enroll devices → Windows enrollment → Windows Autopilot devices</li>
                <li>Import → اختار CSV → Import</li>
                <li>بعدها اعمل Sync/Refresh عشان تشوف الأجهزة</li>
              </ul>
            </Step>

            <Step n="4" title="بديل سريع للتست: Import Online مباشرة">
              مفيد في Testing أو Tech بيجهز أجهزة:
              <Code>{`Install-Script -Name Get-WindowsAutopilotInfo
Get-WindowsAutopilotInfo.ps1 -Online -GroupTag "Autopilot-Devices" -Assign`}</Code>
              هنا بتبعت الـ Hash Online وبتحط Group Tag (يساعدك تعمل Dynamic Group).
            </Step>

            <Callout tone="danger" title="لو Import بيطلع 400 / Edm.Binary">
              ده معناه غالبًا الـ Device Hash في الـ CSV <b>corrupted</b> أو مش متظبط “padding/format”.
              الحل: راجع الملف (أحيانًا تعديل بسيط/إعادة استخراج) وخليه بصيغة صحيحة.
            </Callout>
          </Section>

          <Section
            id="profile"
            title="5) إنشاء Autopilot Deployment Profile + تخصيص OOBE"
            subtitle="بعد ما الأجهزة تبقى Known، بتحدد بقى التجربة اللي المستخدم هيشوفها."
          >
            <Step n="1" title="Create Profile">
              Intune:
              <ul className="mt-2 list-inside list-disc">
                <li>Devices → Enroll devices → Windows enrollment → Deployment profiles</li>
                <li>Create profile → اكتب Name/Description</li>
              </ul>
            </Step>

            <Step n="2" title="اختار Deployment Mode">
              عندك اختيارين أساسيين:
              <ul className="mt-2 list-inside list-disc">
                <li>
                  <b>User-driven:</b> المستخدم بيدخل Email/Password أثناء OOBE، والجهاز بيتسجل على اليوزر ده.
                </li>
                <li>
                  <b>Self-deploying:</b> مفيش Credentials في الأول (ZTI)، الجهاز يجهز نفسه وبعدين يطلع شاشة Login.
                </li>
              </ul>
            </Step>

            <Step n="3" title="ظبط OOBE Settings">
              أمثلة لإعدادات بتتحكم فيها:
              <ul className="mt-2 list-inside list-disc">
                <li>Language / Keyboard</li>
                <li>إخفاء/إظهار EULA و Privacy</li>
                <li>نوع الـ Join: Entra ID Join أو Hybrid (لو محتاج On-prem AD)</li>
                <li>منع المستخدم يبقى Local Admin (ميزة قوية جدًا)</li>
              </ul>
            </Step>

            <Step n="4" title="Assign Profile للأجهزة (أو Device Group)">
              لحد ما تعمل Assign، Autopilot مش هيمسك الـ OOBE.
              <ul className="mt-2 list-inside list-disc">
                <li>Deployment profile → Assignments → اختار Device Group</li>
              </ul>
            </Step>

            <Callout tone="info" title="الفرق اللي المستخدم بيحسه">
              Default OOBE بيطلع له اختيارات كتير وممكن يغلط. <br />
              Autopilot OOBE بيبقى مُبسّط ومُبراند ويطلب “حساب الشركة”، وبعدها يكمّل إعداداتك تلقائيًا.
            </Callout>
          </Section>

          <Section id="scenarios" title="6) سيناريوهات Autopilot (اختار الصح)">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Callout tone="ok" title="User-driven (الأشهر)">
                مناسب لمعظم الموظفين:
                <ul className="mt-2 list-inside list-disc">
                  <li>Unbox → Internet → يكتب حساب الشركة</li>
                  <li>الجهاز يعمل Entra Join + Intune Enrollment</li>
                  <li>Policies + Apps تتطبق (ESP غالبًا)</li>
                </ul>
              </Callout>

              <Callout tone="ok" title="Self-deploying (ZTI / Kiosk)">
                مناسب للـ Kiosk / Shared / Devices بدون User في الأول.
                <ul className="mt-2 list-inside list-disc">
                  <li>لازم TPM 2.0</li>
                  <li>Windows 10/11 حديث (1903+)</li>
                  <li>ممكن يحتاج Wi-Fi اختيار بس</li>
                </ul>
              </Callout>

              <Callout tone="info" title="Pre-provisioned (White Glove)">
                IT أو Vendor يجهّز “تقيل” قبل ما الجهاز يروح للمستخدم:
                <ul className="mt-2 list-inside list-disc">
                  <li>Machine-targeted apps تتثبت بدري</li>
                  <li>يسلّمه للمستخدم، يكمل User part بسرعة</li>
                  <li>غالبًا Ethernet مطلوب أثناء الـ pre-provision</li>
                </ul>
              </Callout>

              <Callout tone="warn" title="Autopilot for existing devices">
                ده جسر من عالم Imaging/SCCM لعالم Autopilot:
                <ul className="mt-2 list-inside list-disc">
                  <li>بتعمل Task Sequence مخصوص (Configuration Manager)</li>
                  <li>تطلع AutopilotConfigurationFile.json من بروفايل Intune</li>
                  <li>مهم: الجهاز مايبقاش متسجل Autopilot قبلها</li>
                </ul>
              </Callout>
            </div>
          </Section>

          <Section id="reset" title="7) Windows Autopilot Reset (إرجاع الجهاز لحالة الشركة بسرعة)">
            <Callout tone="info" title="Reset بيعمل إيه؟">
              بيرجع الجهاز لحالة جاهزة للاستخدام داخل الشركة بدون ما تعمل Image من جديد.
              بيشيل ملفات/إعدادات/Apps الشخصية، وبيحافظ غالبًا على:
              <ul className="mt-2 list-inside list-disc">
                <li>Device name</li>
                <li>Entra ID membership</li>
                <li>MDM enrollment</li>
              </ul>
            </Callout>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Callout tone="ok" title="Local Autopilot Reset">
                من شاشة القفل (Lock screen): <b>Ctrl + Win + R</b> (بعد تفعيل Policy اللازمة).
              </Callout>
              <Callout tone="ok" title="Remote Autopilot Reset">
                من Intune:
                <ul className="mt-2 list-inside list-disc">
                  <li>Devices → Windows → اختار الجهاز</li>
                  <li>… More → Autopilot Reset</li>
                </ul>
              </Callout>
            </div>
          </Section>

          <Section
            id="monitoring"
            title="8) Monitoring يومي وتقارير (Daily Ops)"
            subtitle="الجزء اللي ناس كتير بتسيبه… وده اللي بيخلي الشغل “Enterprise” فعلاً."
          >
            <Callout tone="info" title="إيه الحاجات اللي تتابعها يوميًا؟">
              تخيلك IT Admin عندك 50–300 جهاز… كل يوم بتسأل:
              <ul className="mt-2 list-inside list-disc">
                <li>مين أجهزة Autopilot اللي فشلت في الـ Enrollment؟</li>
                <li>مين واقف في ESP بسبب App فاشل؟</li>
                <li>هل في Users مش واخدين License أو تعدّوا Limit للأجهزة؟</li>
                <li>هل في مشاكل Network/DNS تمنع الوصول لـ Microsoft endpoints؟</li>
              </ul>
            </Callout>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Callout tone="ok" title="أهم Dashboards في Intune">
                دور عادةً على:
                <ul className="mt-2 list-inside list-disc">
                  <li>Windows enrollment / Autopilot deployment status</li>
                  <li>Enrollment Status Page (ESP) status</li>
                  <li>Device compliance + Configuration profile status</li>
                  <li>App install status (Required apps) + Failed apps</li>
                </ul>
              </Callout>

              <Callout tone="ok" title="أهم Logs خارج Intune (Entra)">
                في Entra ID:
                <ul className="mt-2 list-inside list-disc">
                  <li>Sign-in logs (لو في MFA/CA بتكسر الـ OOBE)</li>
                  <li>Audit logs (مين غيّر MDM scope / policies)</li>
                  <li>Device join restrictions / device limit per user</li>
                </ul>
              </Callout>
            </div>

            <Callout tone="warn" title="نصيحة تشغيلية (Best Practice)">
              خلي عندك <b>Autopilot-Device Group</b> + <b>Staging Group</b> للتست.
              <br />
              أي تغيير كبير (ESP / Apps / Compliance / Conditional Access) جرّبه على 2–3 أجهزة Staging الأول.
            </Callout>
          </Section>

          <Section
            id="troubleshooting"
            title="9) Troubleshooting عملي — من أول OOBE لحد Enrollment"
            subtitle="هنا بقى الشغل الحقيقي: تشخيص المشكلة بسرعة بدل التخمين."
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Callout tone="info" title="Checklist سريع قبل أي حاجة">
                <ul className="list-inside list-disc">
                  <li>هل الجهاز اتسجل فعلاً في Autopilot واتعمله Profile assignment؟</li>
                  <li>هل فيه Internet + DNS + الوقت مضبوط؟</li>
                  <li>هل اليوزر عليه Intune license؟</li>
                  <li>هل Conditional Access مانع Enrollment/OOBE؟</li>
                </ul>
              </Callout>

              <Callout tone="info" title="Symptoms شائعة">
                <ul className="list-inside list-disc">
                  <li>Autopilot policy not found (مؤقتًا وهو بيستنى البروفايل)</li>
                  <li>فشل TPM attestation في Self-deploying</li>
                  <li>Entra join error</li>
                  <li>MDM enrollment error</li>
                </ul>
              </Callout>
            </div>

            <Step n="1" title="تشوف Autopilot Profile نزل ولا لأ؟ (Registry + Event Viewer)">
              <div className="space-y-2">
                <div>
                  <b>Registry:</b> بعد ما الجهاز يستقبل بروفايل، هتلاقيه هنا:
                </div>
                <Code>{`HKLM\\SOFTWARE\\Microsoft\\Provisioning\\Diagnostics\\Autopilot`}</Code>
                <div>
                  <b>Event Viewer:</b> روح:
                  <Code>{`Application and Services Logs → Microsoft → Windows → Provisioning-Diagnostics-Provider → Autopilot`}</Code>
                  أمثلة Events:
                  <ul className="mt-2 list-inside list-disc">
                    <li>
                      <b>100</b> Warning: Autopilot policy not found (غالبًا مؤقت)
                    </li>
                    <li>
                      <b>171/172</b> Error: TPM attestation / profile availability issues (Self-deploying غالبًا)
                    </li>
                  </ul>
                </div>
              </div>
            </Step>

            <Step n="2" title="Autopilot Diagnostics Script (أفضل سلاح)">
              شغّل PowerShell على الجهاز:
              <Code>{`Set-ExecutionPolicy ByPass
Install-Script Get-AutoPilotDiagnostics -force
Get-AutoPilotDiagnostics -Online`}</Code>
              ده بيجمع حالة السياسات/الأبز/الستيتس ويعرضهم بشكل مفهوم.
            </Step>

            <Step n="3" title="أخطاء Entra Join و MDM Enrollment المشهورة">
              <div className="space-y-2">
                <Callout tone="warn" title="Entra Join error: 801C0003">
                  غالبًا Permissions/Restrictions:
                  <ul className="mt-2 list-inside list-disc">
                    <li>User مسموح له يعمل Join أجهزة؟</li>
                    <li>هل تعدّى Limit الأجهزة المسموح بيها؟</li>
                  </ul>
                </Callout>

                <Callout tone="warn" title="MDM Enrollment error: 80180018">
                  ده معناه فشل Enrollment في Intune:
                  <ul className="mt-2 list-inside list-disc">
                    <li>License مش متعيّن للـ User</li>
                    <li>MDM user scope مش مظبوط</li>
                    <li>CA Policy مانع Enrollment</li>
                  </ul>
                </Callout>
              </div>
            </Step>

            <Callout tone="ok" title="قاعدة ذهبية">
              أي مشكلة Autopilot تقريبًا هتلاقيها في واحدة من 4:
              <b> Network </b> / <b> Entra Join </b> / <b> MDM Enrollment </b> / <b> ESP (Apps/Policies)</b>.
            </Callout>
          </Section>

          <Section
            id="traditional"
            title="10) إمتى نستخدم الطرق التقليدية (MDT/SCCM) بدل Autopilot؟"
            subtitle="Autopilot قوي… بس مش لكل سيناريو."
          >
            <Callout tone="warn" title="حالات لازم Traditional فيها">
              <ul className="list-inside list-disc">
                <li>Bare-metal (هارد فاضي)</li>
                <li>تغيير Storage/Hard drive أو مشاكل هاردوير تمنع إقلاع ويندوز</li>
                <li>Windows installation فاسدة (Corrupted)</li>
                <li>محتاج شاشات/مدخلات Custom غير اللي OOBE بيوفرها</li>
              </ul>
            </Callout>

            <Callout tone="info" title="جدول مقارنة سريع">
              <div className="overflow-x-auto">
                <table className="w-full border-separate border-spacing-0 overflow-hidden rounded-2xl border border-gray-200 text-sm">
                  <thead className="bg-gray-50 text-left">
                    <tr>
                      <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900">النقطة</th>
                      <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900">Traditional</th>
                      <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900">Autopilot</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {[
                      ["Deploy Windows Image", "✅ Yes", "❌ No"],
                      ["Needs On-prem infra", "✅ Yes (WDS/MDT/SCCM)", "❌ No"],
                      ["Driver injection", "✅ Yes", "❌ غالبًا لا"],
                      ["Requires existing Windows 10/11", "❌ No", "✅ Yes"],
                      ["Bandwidth heavy", "✅ أعلى", "✅ أقل"],
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b last:border-b-0">
                        <td className="border-b border-gray-200 px-4 py-3 text-gray-900">{row[0]}</td>
                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{row[1]}</td>
                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Callout>
          </Section>

          <Section id="checklist" title="✅ Checklist A→Z (خريطة تنفيذ سريعة)">
            <div className="space-y-3">
              <Step n="A" title="جهّز Tenant">
                Entra ID جاهز + Intune + MDM user scope + Licenses + (لو عندك CA) راجع Policies.
              </Step>
              <Step n="B" title="جهّز Autopilot Devices">
                OEM Upload أو Get-WindowsAutopilotInfo → CSV → Import → Sync.
              </Step>
              <Step n="C" title="Groups & Tags">
                Dynamic Device Group (GroupTag/OrderID) + Staging Group للتست.
              </Step>
              <Step n="D" title="Deployment Profile">
                User-driven أو Self-deploying + OOBE settings + Assign.
              </Step>
              <Step n="E" title="ESP + Apps + Policies">
                Required apps (machine أولًا) + Compliance + Config + Security Baselines.
              </Step>
              <Step n="F" title="Run & Validate">
                شغّل جهاز → نت → شوف Branding + ESP → راقب App installs.
              </Step>
              <Step n="G" title="Daily Monitoring">
                Deployment status + ESP failures + App failures + Sign-in logs + License issues.
              </Step>
              <Step n="H" title="Troubleshoot Smart">
                Event Viewer + Registry + Get-AutoPilotDiagnostics + تحقق من error codes.
              </Step>
            </div>

            <Callout tone="ok" title="لو عايز أزوّدها أكتر">
              أقدر أعمل لك نسخة “Enterprise” فيها:
              <ul className="mt-2 list-inside list-disc">
                <li>تصميم Monitoring Dashboard sections (مين يراجع إيه يوميًا/أسبوعيًا)</li>
                <li>أمثلة سياسات ESP و Best practices للـ Required Apps</li>
                <li>سيناريو شركة (Departments + User Groups + Filters للأجهزة) كامل من Deploy لحد Retire</li>
              </ul>
            </Callout>
          </Section>

          {/* FOOTER */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm">
            <div className="font-bold text-gray-900">ملحوظة سريعة</div>
            <p className="mt-1 leading-6">
              لو عندك مشكلة معينة (زي جهاز بيقف في ESP أو Enrollment error)، ابعتلي Screenshot للـ error + المرحلة اللي
              واقف فيها (OOBE / Entra Join / MDM / ESP) وأنا أقولك تشخيص سريع وخطوات إصلاح دقيقة.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
