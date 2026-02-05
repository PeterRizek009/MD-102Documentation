import React from "react";

// ✅ Option A (Recommended): Put images in /public/images and use the paths below:
// const IMG_APP_GUARD_PROFILE = "/images/intune-windows-defender-application-guard-41431013.png";
// const IMG_HARDWARE_ISOLATION = "/images/application-guard-hardware-isolation-1684b878.png";
// const IMG_ALERT_DASHBOARD = "/images/alert-dashboard-92252985.png";
// const IMG_EXPLOIT_GUARD = "/images/intune-exploit-guard-ba345bd6.png";

// ✅ Option B: If you place images in src/assets, uncomment imports and use them:
// import IMG_APP_GUARD_PROFILE from "../assets/intune-windows-defender-application-guard-41431013.png";
// import IMG_HARDWARE_ISOLATION from "../assets/application-guard-hardware-isolation-1684b878.png";
// import IMG_ALERT_DASHBOARD from "../assets/alert-dashboard-92252985.png";
// import IMG_EXPLOIT_GUARD from "../assets/intune-exploit-guard-ba345bd6.png";

const IMG_APP_GUARD_PROFILE =
  "/images/intune-windows-defender-application-guard-41431013.png";
const IMG_HARDWARE_ISOLATION =
  "/images/application-guard-hardware-isolation-1684b878.png";
const IMG_ALERT_DASHBOARD = "/images/alert-dashboard-92252985.png";
const IMG_EXPLOIT_GUARD = "/images/intune-exploit-guard-ba345bd6.png";

function Section({ title, children }) {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
      <div className="mt-4 text-gray-800 leading-7">{children}</div>
    </section>
  );
}

function Callout({ children }) {
  return (
    <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50 p-5">
      <div className="text-gray-900">{children}</div>
    </div>
  );
}

function ImgCard({ src, alt, caption }) {
  return (
    <figure className="mt-5 rounded-2xl border border-gray-200 overflow-hidden bg-gray-50">
      <img src={src} alt={alt} className="w-full h-auto" />
      {caption ? (
        <figcaption className="px-4 py-3 text-sm text-gray-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex gap-2">
      <span className="mt-[7px] h-2 w-2 rounded-full bg-gray-400 flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}

export default function ManageMicrosoftDefenderForEndpoint() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
            <span className="font-semibold">MD-102</span>
            <span className="text-gray-400">•</span>
            <span>Microsoft Defender for Endpoint</span>
            <span className="text-gray-400">•</span>
            <span>ترجمة للمصري (حرفي)</span>
          </div>

          <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">
            Manage Microsoft Defender for Endpoint (ترجمة مصري)
          </h1>

          <p className="mt-3 text-gray-600 leading-7">
            ده نفس محتوى الموديول مترجم للمصري بشكل حرفي، ومعاه الصور اللي
            عندك: Application Guard + Hardware Isolation + Dashboard + Exploit Guard.
          </p>
        </header>

        <div className="space-y-6">
          {/* Introduction */}
          <Section title="1) المقدّمة (Introduction)">
            <p>
              Microsoft Defender for Endpoint (اللي كان اسمه زمان Windows Defender Advanced Threat Protection)
              هو خدمة متقدمة شغّالة على الكلاود، ومصممة تساعد الشركات إنها تكتشف
              وتحقق وترد على التهديدات المتقدمة والمستمرة (APT).
            </p>

            <p className="mt-3">
              الحل ده بيقدم:
            </p>

            <ul className="mt-3 space-y-2">
              <Bullet>اكتشاف هجمات مبني على السلوك (behavior-driven detection).</Bullet>
              <Bullet>Timeline جنائي/تحقيقي شامل (forensic timeline).</Bullet>
              <Bullet>قاعدة معرفة Threat Intelligence قوية جدًا.</Bullet>
            </ul>

            <p className="mt-4">
              لما تستخدم القدرات دي، المؤسسة تقدر تواجه التهديدات اللي بتتطور
              باستمرار بشكل استباقي وتزود مستوى الأمان.
            </p>

            <Callout>
              <p className="font-semibold mb-2">بعد الموديول ده، هتكون قادر إنك:</p>
              <ul className="space-y-2">
                <Bullet>تشرح Microsoft Defender for Endpoint.</Bullet>
                <Bullet>تشرح أهم قدراته الأساسية.</Bullet>
                <Bullet>تشرح Microsoft Defender Application Guard.</Bullet>
                <Bullet>تشرح Microsoft Defender Exploit Guard.</Bullet>
                <Bullet>تشرح Windows Defender System Guard.</Bullet>
              </ul>
            </Callout>
          </Section>

          {/* Explore MDE */}
          <Section title="2) استكشاف Microsoft Defender for Endpoint (Explore)">
            <p>
              Microsoft Defender for Endpoint هو Platform هدفها تساعد شبكات الشركات إنها:
              تمنع، تكتشف، تحقق، وتستجيب للتهديدات المتقدمة.
            </p>

            <p className="mt-3">
              وده مختلف عن Microsoft Defender اللي موجود على كل جهاز ويندوز
              وبيتدار عادة بـ Group Policy أو Intune.
              Microsoft Defender for Endpoint منصة أكبر بتدي تحكم مركزي أمني
              على الموارد سواء على الكلاود أو on-prem.
            </p>

            <p className="mt-3">
              رغم إن الاسم قريب، بس دول مش نفس المنتج.  
              الـ Admins يقدروا يستخدموا Microsoft Defender for Endpoint عشان
              يراقبوا إعدادات Microsoft Defender على أجهزة الويندوز المحلية
              عشان يفضل فيه توحيد (consistent configuration) ومستوى أمان مقبول.
            </p>

            <p className="mt-3">
              وكمان غير كده، Microsoft Defender for Endpoint ممكن يتكامل مع:
              Microsoft 365 Threat Intelligence، Cloud App Security، Azure ATP، و Intune.
              وكمان يقدر يكتشف محتوى ممكن يكون ضار في Skype for Business communications.
            </p>

            <p className="mt-4 font-semibold text-gray-900">
              المنصة بتستخدم مزيج من التقنيات اللي جوّه ويندوز + خدمة كلاود من مايكروسوفت:
            </p>

            <ul className="mt-3 space-y-2">
              <Bullet>
                <span className="font-semibold">Endpoint behavioral sensors:</span>{" "}
                موجودة جوّه ويندوز، وبتجمع وتعالج إشارات سلوكية من نظام التشغيل
                وبتبعت الداتا دي لنسختك الخاصة والمعزولة على الكلاود من Microsoft Defender for Endpoint.
              </Bullet>

              <Bullet>
                <span className="font-semibold">Cloud security analytics:</span>{" "}
                باستخدام big-data و machine-learning و “Microsoft optics” عبر
                نظام ويندوز، ومنتجات Enterprise cloud (زي Microsoft 365)، والأصول الأونلاين —
                الإشارات السلوكية بتتحول لـ insights و detections و recommended responses ضد التهديدات المتقدمة.
              </Bullet>

              <Bullet>
                <span className="font-semibold">Threat intelligence:</span>{" "}
                بيتولد من Microsoft hunters و security teams وبيتعزز بمعلومات من شركاء،
                وده بيساعد المنصة إنها تحدد أدوات وتقنيات وإجراءات المهاجمين (TTPs)
                وتطلع alerts لما تلاحظ ده في داتا الحساسات.
              </Bullet>
            </ul>

            <p className="mt-4">
              التقنيات دي مع بعض بتدي monitoring استباقي للي بيحصل على أجهزة المستخدمين،
              والسيرفرات، والشبكة. وكمان بتعمل automated investigations لحوادث معروفة
              وبتعمل بعض الـ actions حتى قبل ما الـ admin يشوف alert.
            </p>

            <p className="mt-4">
              <span className="font-semibold">الكونسول الأساسي</span> لـ Microsoft Defender for Endpoint
              هو Microsoft 365 Security Center.
              فرق الأمن في الشركات بتستخدمه عشان تتابع وتساعد في الاستجابة للـ alerts
              اللي ممكن تكون APT activity أو data breaches.
            </p>

            <p className="mt-4 font-semibold text-gray-900">
              تقدر تستخدم Microsoft 365 Security Center عشان:
            </p>

            <ul className="mt-3 space-y-2">
              <Bullet>تشوف alerts من endpoints وتعمل sort و triage.</Bullet>
              <Bullet>تدور على معلومات أكتر عن indicators زي files و IP addresses.</Bullet>
              <Bullet>تغير إعدادات Microsoft Defender for Endpoint (زي time zone) وتشوف licensing.</Bullet>
            </ul>

            <ImgCard
              src={IMG_ALERT_DASHBOARD}
              alt="Microsoft 365 Security Center / Defender for Endpoint dashboard"
              caption="صورة: Dashboard للـ alerts + investigations + health (من Microsoft 365 Security Center)."
            />
          </Section>

          {/* Key capabilities */}
          <Section title="3) أهم القدرات (Key capabilities)">
            <p>
              القدرات دي متاحة عبر كذا منتج جوّه منصة Microsoft Defender for Endpoint.
            </p>

            <h3 className="mt-5 text-lg font-bold text-gray-900">A) Attack surface reduction</h3>
            <p className="mt-2">
              دي أول خط دفاع. لما تظبط configuration settings صح وتطبق exploit mitigations،
              بتقل مقاومة الهجمات والاستغلالات.
            </p>

            <p className="mt-3">
              Attack surface reduction بتساعد تحمي الأجهزة والتطبيقات من تهديدات جديدة ومتغيرة.
            </p>

            <ul className="mt-3 space-y-2">
              <Bullet>
                <span className="font-semibold">Hardware-based isolation:</span>{" "}
                بتحمي سلامة السيستم وهو بيبدأ وهو شغال، وبتعمل attestation محلي وريموت.
                وكمان container isolation لـ Microsoft Edge بيحمي الـ host OS من مواقع خبيثة.
              </Bullet>
              <Bullet>
                <span className="font-semibold">Application control:</span>{" "}
                بتنقل الثقة من “كل التطبيقات موثوقة افتراضياً” لأسلوب “التطبيق لازم يثبت إنه موثوق عشان يشتغل”.
              </Bullet>
              <Bullet>
                <span className="font-semibold">Exploit protection:</span>{" "}
                بتطبق mitigations على apps محددة أو على كل apps. وبتشتغل مع Microsoft Defender AV أو anti-virus طرف تالت.
              </Bullet>
              <Bullet>
                <span className="font-semibold">Network protection:</span>{" "}
                بتوسع حماية SmartScreen في Edge لتشمل network traffic. وبتحتاج Microsoft Defender AV.
              </Bullet>
              <Bullet>
                <span className="font-semibold">Controlled folder access:</span>{" "}
                بتحمي ملفات فولدرات مهمة من تغييرات برامج مشبوهة (زي ransomware). وبتحتاج Microsoft Defender AV.
              </Bullet>
              <Bullet>
                <span className="font-semibold">Attack surface reduction rules:</span>{" "}
                قواعد ذكية بتقفل vectors بتاعت malware اللي جاية من Office/scripts/mail. وبتحتاج Microsoft Defender AV.
              </Bullet>
              <Bullet>
                <span className="font-semibold">Network firewall:</span>{" "}
                جدار ناري على الجهاز نفسه two-way يفلتر الترافيك داخل/خارج الجهاز.
              </Bullet>
            </ul>

            <h3 className="mt-6 text-lg font-bold text-gray-900">B) Next generation protection</h3>
            <p className="mt-2">
              عشان تزود أمان المحيط، Microsoft Defender for Endpoint بيستخدم حماية next-gen
              تمسك تهديدات جديدة. Microsoft Defender Antivirus هو built-in anti-malware
              لأجهزة desktop/laptop/servers.
            </p>

            <p className="mt-3 font-semibold text-gray-900">Microsoft Defender Antivirus بيشمل:</p>
            <ul className="mt-3 space-y-2">
              <Bullet>
                Cloud-delivered protection لاكتشاف سريع جدًا وblock للتهديدات الجديدة،
                مع machine learning و Intelligent Security Graph.
              </Bullet>
              <Bullet>
                Always-on scanning بمراقبة سلوك الملفات والعمليات (real-time protection).
              </Bullet>
              <Bullet>
                Protection updates مبنية على machine learning وتحليل بشري/آلي وresearch مقاومة تهديدات.
              </Bullet>
            </ul>

            <h3 className="mt-6 text-lg font-bold text-gray-900">C) Endpoint detection and response (EDR)</h3>
            <p className="mt-2">
              قدرات EDR بتكشف وتحقق وتستجيب لهجمات متقدمة في near real time.
              ده بيساعد الـ analysts يحددوا أولويات alerts ويفهموا نطاق الاختراق
              ويتصرفوا بسرعة.
            </p>

            <p className="mt-3">
              لما threat يتكشف، بيطلع alerts. والـ alerts اللي ليها نفس أساليب الهجوم
              أو نفس المهاجم بتتجمع في “incident” عشان التحقيق يبقى أسهل.
            </p>

            <p className="mt-3">
              وبفلسفة “assume breach”، المنصة بتجمع telemetry سلوكي كتير:
              تفاصيل processes، network activities، kernel/memory insights،
              sign-in activities، تغييرات registry و file system.
              الداتا دي بتتخزن لمدة 6 شهور عشان تقدر ترجع لنقطة البداية وتعمل pivot في التحقيق.
            </p>

            <h3 className="mt-6 text-lg font-bold text-gray-900">D) Auto investigation and remediation</h3>
            <p className="mt-2">
              عشان ترد بسرعة على هجمات متقدمة، المنصة بتقدم تحقيق ومعالجة تلقائيين
              يقللوا حجم alerts في دقائق وعلى نطاق واسع.
            </p>

            <p className="mt-3">
              بسبب الرؤية الواسعة على أجهزة كتير، المنصة بتطلع alerts كتير،
              وده بيكون صعب على فريق SOC يتعامل مع كل alert لوحده.
              فـ Automated investigations بتطبق algorithms وعمليات زي playbooks
              للتحقيق واتخاذ remediation action فورًا.
            </p>

            <h3 className="mt-6 text-lg font-bold text-gray-900">E) Secure score</h3>
            <p className="mt-2">
              Secure score بيقيّم posture الأمني بشكل ديناميكي،
              ويحدد أنظمة غير محمية ويقترح خطوات تحسين.
            </p>

            <p className="mt-3">
              متاح لأجهزة Windows 10 version 1703 أو أحدث.
              الـ dashboard بيعرض snapshot لِـ: secure score، تغييره مع الوقت،
              top recommendations، وفرص التحسين.
            </p>

            <p className="mt-3">
              Microsoft secure score بيعكس مجموع controls اللي متظبطة على baseline الموصى بيه،
              وتقدر تحسن السكور بتطبيق الإعدادات المثالية.
            </p>

            <h3 className="mt-6 text-lg font-bold text-gray-900">F) Advanced hunting</h3>
            <p className="mt-2">
              Advanced hunting بيسمح لك تدور عن تهديدات محتملة باستخدام search/query tool،
              وكمان تعمل custom detection rules من queries وتطلع alerts في Microsoft 365 Security Center.
            </p>

            <p className="mt-3 font-semibold text-gray-900">تقدر تعمل:</p>
            <ul className="mt-3 space-y-2">
              <Bullet>تستخدم query language فيها IntelliSense.</Bullet>
              <Bullet>تعمل query على telemetry المتخزنة في tables.</Bullet>
              <Bullet>تستخدم links جوّه البوابة (زي أسماء الأجهزة والملفات).</Bullet>
              <Bullet>تستفيد من query examples كبداية.</Bullet>
            </ul>

            <h3 className="mt-6 text-lg font-bold text-gray-900">G) Management and APIs</h3>
            <p className="mt-2">
              تقدر تدمج المنصة في شغلّك الحالي. فيها خيارات كتير لتبنّيها بسهولة.
              Onboarding للأجهزة متكامل مع Configuration Manager و Intune
              لأجهزة العميل، و Azure Security Center للسيرفرات.
            </p>

            <p className="mt-3">
              وكمان بتدعم Group Policy وأدوات طرف تالت لإدارة الأجهزة.
              وفيها RBAC بتحكم مين يشوف إيه ويعمل إيه، وده مناسب لهياكل فرق أمن مختلفة:
              موزعة عالميًا، tiered model، أو تقسيمات منفصلة مع SOC مركزي.
            </p>
          </Section>

          {/* WDAC & Device Guard */}
          <Section title="4) Application Control & Device Guard">
            <p>
              مع آلاف الملفات الخبيثة اللي بتتولد يوميًا، الـ antivirus التقليدي (signature-based)
              لوحده مش كفاية ضد تهديدات جديدة.
              عشان كده Application Control و Device Guard بيدوا طبقة حماية إضافية ضد تهديدات “مجهولة”.
            </p>

            <h3 className="mt-5 text-lg font-bold text-gray-900">A) Windows Defender Application Control (WDAC)</h3>
            <p className="mt-2">
              غالبًا أي process المستخدم بيشغّله بيبقى ليه نفس صلاحيات المستخدم،
              وده ممكن يعرّض الداتا الحساسة للخطر لو المستخدم شغل برنامج خبيث
              بقصد أو من غير قصد.
            </p>

            <p className="mt-3">
              Application control بيغير فكرة “كل التطبيقات موثوقة” لفكرة “التطبيق لازم يثبت إنه موثوق عشان يشتغل”.
              وده بيتعمل بالتحقق من code signatures من الـ publishers.
            </p>

            <p className="mt-3">
              بعض executables في ويندوز ممكن مايبقاش ليها signatures مظبوطة.
              وقتها الـ admin يقدر يعمل list بكل الملفات الـ unsigned ويخلي المؤسسة توقّعها،
              وبعدين يdeploy الـ list دي على Windows Enterprise PCs.
            </p>

            <p className="mt-3">
              لما WDAC يتفعل، أي executable مش موجود في policy file هيتمنع من التشغيل.
              وكمان policies بتمنع تشغيل unsigned scripts و MSIs و PowerShell.
            </p>

            <Callout>
              <p className="font-semibold">WDAC مناسب جدًا لـ:</p>
              <ul className="mt-2 space-y-2">
                <Bullet>أجهزة Point of Service (POS) زي terminals و ATMs.</Bullet>
                <Bullet>VDI أو أجهزة ثابتة النسخة وتحديثاتها قليلة.</Bullet>
              </ul>
              <p className="mt-3">
                لأن Windows Update code متوقّع (signed)، فالويندوز يفضل شغّال بأمان حتى مع التحديثات.
                بس لازم تخطط كويس لإدخال apps طرف تالت اللي بتتحدّث كتير ومش عليها signatures.
              </p>
            </Callout>

            <p className="mt-4 text-sm text-gray-600">
              ملاحظة: WDAC كان اسمه زمان configurable code integrity policies في Windows Defender Device Guard.
            </p>

            <h3 className="mt-6 text-lg font-bold text-gray-900">B) Windows Defender Device Guard</h3>
            <p className="mt-2">
              Device Guard بيجمع Application Control مع استخدام Hyper-V hypervisor
              لحماية Windows kernel-mode processes من حقن/تشغيل كود خبيث أو غير متحقق منه.
            </p>

            <p className="mt-3">
              WDAC مش محتاج hardware/software معين، لكن تفعيل HVCI (Hypervisor protected code integrity)
              محتاج hardware و drivers متوافقين.
            </p>
          </Section>

          {/* Application Guard */}
          <Section title="5) Microsoft Defender Application Guard">
            <p>
              Microsoft Defender Application Guard (Application Guard) معمول عشان يمنع
              هجمات قديمة وجديدة ويخلي الموظفين شغالين بدون ما الشركة تتعرّض لخطر.
            </p>

            <p className="mt-3">
              باستخدام نهج hardware isolation بتاع مايكروسوفت،
              الهدف إننا “نكسّر طريقة لعب” المهاجمين عن طريق إننا نخلي طرق الهجوم الحالية غير فعّالة.
            </p>

            <p className="mt-3">
              Application Guard معمول لويندوز و Microsoft Edge،
              وبيعزل المواقع “غير الموثوقة” اللي الشركة بتحددها، ويحمي الشركة أثناء التصفح.
              كـ Admin أنت بتحدد المواقع الموثوقة والـ cloud resources والشبكات الداخلية.
              أي حاجة مش في الليست دي تعتبر untrusted.
            </p>

            <p className="mt-3">
              لو موظف راح لموقع untrusted في Edge أو Internet Explorer،
              Edge بيفتح الموقع جوّه container معزول شغال بـ Hyper-V،
              وده منفصل عن الـ host OS.
              فحتى لو الموقع خبيث، جهاز الموظف الأساسي يفضل محمي والمهاجم مايوصلش لبيانات الشركة.
            </p>

            <p className="mt-3">
              مثال: الـ container ده بيبقى anonymous،
              فالمهاجم مايعرفش يوصل لبيانات اعتماد الشركة بتاعت الموظف (enterprise credentials).
            </p>

            <ImgCard
              src={IMG_HARDWARE_ISOLATION}
              alt="Hardware isolation of Microsoft Edge & Office with Application Guard"
              caption="صورة: Hardware isolation لـ Microsoft Edge و Microsoft Office باستخدام Microsoft Defender Application Guard."
            />

            <h3 className="mt-6 text-lg font-bold text-gray-900">
              أنواع الأجهزة اللي المفروض تستخدم Application Guard
            </h3>

            <p className="mt-2">Application Guard معمول يستهدف أنواع أنظمة كتير، زي:</p>

            <ul className="mt-3 space-y-2">
              <Bullet>
                <span className="font-semibold">Enterprise desktops:</span>{" "}
                أجهزة منضمة للدومين ومدارة من الشركة، والإدارة غالبًا بـ ConfigMgr أو Intune،
                والمستخدمين صلاحياتهم Standard User، وشبكة الشركة wired عالية السرعة.
              </Bullet>
              <Bullet>
                <span className="font-semibold">Enterprise mobile laptops:</span>{" "}
                لابتوبات domain-joined ومدارة، إدارة بـ ConfigMgr/Intune،
                مستخدم Standard، وشبكات واي فاي عالية السرعة في الشركة.
              </Bullet>
              <Bullet>
                <span className="font-semibold">BYOD mobile laptops:</span>{" "}
                أجهزة شخصية مش domain-joined لكن الشركة بتديرها بـ Intune،
                والمستخدم غالبًا Admin على الجهاز، وشبكة كويسة في الشغل والبيت.
              </Bullet>
              <Bullet>
                <span className="font-semibold">Personal devices:</span>{" "}
                أجهزة شخصية مش domain-joined ومش managed،
                المستخدم Admin، والشبكة شخصية في البيت أو عامة بره.
              </Bullet>
            </ul>

            <h3 className="mt-6 text-lg font-bold text-gray-900">
              إعداد Application Guard (Configuring)
            </h3>

            <p className="mt-2">
              لتفعيل Application Guard في Microsoft Edge اتبع الخطوات دي:
            </p>

            <ol className="mt-3 space-y-2 list-decimal pl-6">
              <li>افتح Control Panel.</li>
              <li>اختار Programs.</li>
              <li>اختار Turn Windows features on or off.</li>
              <li>علّم على Microsoft Defender Application Guard.</li>
              <li>اضغط OK.</li>
              <li>اعمل Restart now.</li>
            </ol>

            <Callout>
              <p>
                لو الاختيار مش ظاهر أو مش قابل للتحديد، غالبًا الهاردوير بتاعك مش بيدعم الميزة دي.
              </p>
            </Callout>

            <p className="mt-4">
              بعد الريستارت، تقدر تفتح Session في Edge باستخدام Application Guard من:
              Menu (فوق يمين) → New Application Guard window.
            </p>

            <p className="mt-4">
              ولو عايز تظبطه من Intune:
              بتعمل device configuration profile (Windows 10 وما بعده)،
              وتختار Profile type = Endpoint protection،
              وبعدها تظبط Microsoft Defender Application Guard settings.
              الواجهة دي بتديك options أكتر من Group Policy،
              وكمان تقدر تظبطه لـ Edge ولـ Office apps (زي الصورة).
            </p>

            <ImgCard
              src={IMG_APP_GUARD_PROFILE}
              alt="Intune profile - Windows Defender Application Guard settings"
              caption="صورة: شاشة إعدادات Windows Defender Application Guard في Intune (Endpoint protection profile)."
            />
          </Section>

          {/* Exploit Guard */}
          <Section title="6) Windows Defender Exploit Guard">
            <p>
              Microsoft Defender Exploit Guard (وكان اسمه زمان Windows Defender Exploit Guard)
              هو مجموعة قدرات Host Intrusion Prevention لويندوز،
              بتساعد تقلل attack surface للتطبيقات اللي الموظفين بيستخدموها.
            </p>

            <h3 className="mt-5 text-lg font-bold text-gray-900">
              ميزات Exploit Guard (4 ميزات)
            </h3>

            <ul className="mt-3 space-y-3">
              <li>
                <div className="font-semibold">1) Exploit protection</div>
                <div className="text-gray-800 mt-1">
                  بتطبق mitigations على apps معينة أو على كل apps.
                  بتشتغل مع Microsoft Defender AV أو antivirus طرف تالت.
                  <div className="mt-2">
                    لتفعيلها من Windows Security:
                    App & Browser Control → Exploit Protection Settings.
                    <br />
                    ومن Group Policy:
                    Computer Configuration → Policies → Administrative Templates →
                    Windows components → Microsoft Defender Antivirus →
                    Microsoft Defender Exploit Guard → Exploit Protection →
                    Enable exploit protection = Enabled.
                  </div>
                </div>
              </li>

              <li>
                <div className="font-semibold">2) Attack surface reduction rules</div>
                <div className="text-gray-800 mt-1">
                  قواعد ذكية بتقلل سطح الهجوم وتمنع vectors بتاعة malware اللي جاية من Office/scripts/mail.
                  وبتحتاج Microsoft Defender AV.
                  <div className="mt-2">
                    من Group Policy:
                    Windows components → Microsoft Defender Antivirus →
                    Microsoft Defender Exploit Guard → Attack surface reduction →
                    Configure Attack surface reduction rules = Enabled.
                  </div>
                </div>
              </li>

              <li>
                <div className="font-semibold">3) Network protection</div>
                <div className="text-gray-800 mt-1">
                  بتوسع حماية SmartScreen في Edge لتشمل network traffic.
                  بتحتاج Microsoft Defender AV.
                  <div className="mt-2">
                    من Group Policy:
                    Windows components → Microsoft Defender Antivirus →
                    Microsoft Defender Exploit Guard → Network Protection →
                    Prevent Users and Apps from Accessing Dangerous Websites = Enabled.
                  </div>
                </div>
              </li>

              <li>
                <div className="font-semibold">4) Controlled folder access</div>
                <div className="text-gray-800 mt-1">
                  بتحمي ملفات فولدرات مهمة من تغييرات apps مشبوهة (زي ransomware)،
                  وممكن كمان تمنع disk sectors. بتحتاج Microsoft Defender AV.
                  <div className="mt-2">
                    من Group Policy:
                    Windows components → Microsoft Defender Antivirus →
                    Microsoft Defender Exploit Guard → Controlled folder access →
                    Configure Controlled Folder Access = Enabled.
                  </div>
                </div>
              </li>
            </ul>

            <p className="mt-5 font-semibold text-gray-900">
              افتراضيًا الفولدرات دي بتكون محمية:
            </p>
            <ul className="mt-3 space-y-2">
              <Bullet>C:\Users\&lt;user&gt;\Documents</Bullet>
              <Bullet>C:\Users\Public\Documents</Bullet>
              <Bullet>C:\Users\&lt;user&gt;\Pictures</Bullet>
              <Bullet>C:\Users\Public\Pictures</Bullet>
              <Bullet>C:\Users\&lt;user&gt;\Videos</Bullet>
              <Bullet>C:\Users\Public\Videos</Bullet>
              <Bullet>C:\Users\&lt;user&gt;\Music</Bullet>
              <Bullet>C:\Users\Public\Music</Bullet>
              <Bullet>C:\Users\&lt;user&gt;\Desktop</Bullet>
              <Bullet>C:\Users\Public\Desktop</Bullet>
              <Bullet>C:\Users\&lt;user&gt;\Favorites</Bullet>
            </ul>

            <p className="mt-4">
              وتقدر تزود فولدرات تانية يدويًا. ولو app اتمنعت بسبب Controlled Folder Access،
              تقدر تسمح بيها من Group Policy:
              Controlled folder access → Configure Allowed Applications = Enabled → Show → وتضيف كل app.
            </p>

            <p className="mt-4">
              زي باقي Defender features، تقدر كمان تديرها وتdeployها من Intune.
              وده بيكون في device configuration profile، وتقدر تعمل إعدادات منفصلة لكل functionality.
            </p>

            <ImgCard
              src={IMG_EXPLOIT_GUARD}
              alt="Windows Defender Exploit Guard screen"
              caption="صورة: شاشة Windows Defender Exploit Guard (ASR / Controlled folder access / Network filtering / Exploit protection)."
            />

            <h3 className="mt-6 text-lg font-bold text-gray-900">قدرات إضافية</h3>
            <ul className="mt-3 space-y-2">
              <Bullet>
                تقدر تفعل Audit mode، وده بيطلع event logs بتوضح “كان هيعمل إيه”
                لو كان enabled بالكامل — مفيد للتقييم قبل التفعيل.
              </Bullet>
              <Bullet>
                تقدر تزور Microsoft Defender Testground (demo.wd.microsoft.com)
                عشان تتأكد إن الميزات شغالة وتختبر كل ميزة.
              </Bullet>
              <Bullet>
                تقدر تدير وتعمل reporting لـ Exploit Guard من Windows Security app كجزء من Defender for Endpoint suite.
              </Bullet>
              <Bullet>
                تقدر تحصل على reporting تفصيلي للأحداث والblocks أثناء التحقيق في alerts.
              </Bullet>
            </ul>
          </Section>

          {/* System Guard */}
          <Section title="7) Windows Defender System Guard">
            <p>
              ويندوز بيستخدم containers لعزل خدمات النظام الحساسة والداتا،
              عشان تفضل آمنة حتى لو نظام التشغيل اتخترق.
            </p>

            <p className="mt-3">
              في نوع container اسمه Windows Defender System Guard،
              بيحمي موارد حرجة زي:
              Windows authentication stack، SSO tokens، Windows Hello biometric stack،
              و Virtual Trusted Platform Module (vTPM).
            </p>

            <p className="mt-3">
              System Guard بيرتب/يعيد تنظيم ميزات سلامة النظام الموجودة
              وبيبني عليها استثمارات أمان جديدة. وهو معمول عشان:
            </p>

            <ul className="mt-3 space-y-2">
              <Bullet>يحافظ على سلامة السيستم وهو بيبدأ (startup).</Bullet>
              <Bullet>يحافظ على سلامة السيستم وهو شغال (run time).</Bullet>
              <Bullet>يضمن إن السلامة اتأكدت بفعلاً عن طريق local و remote attestation.</Bullet>
            </ul>

            <h3 className="mt-6 text-lg font-bold text-gray-900">
              A) الحفاظ على سلامة النظام وقت الإقلاع (Boot time integrity)
            </h3>

            <p className="mt-2">
              زمان في أيام Windows 7، المهاجمين كانوا بيستخدموا bootkits/rootkits
              عشان يفضلوا موجودين ويتفادوا الاكتشاف. النوع ده بيشتغل قبل أو أثناء boot،
              وده بيدّيهم أعلى صلاحيات.
            </p>

            <p className="mt-3">
              مع هاردوير حديث معتمد لـ Windows 8 أو أعلى،
              فيه hardware-based root of trust يمنع firmware/software غير مصرح بيه (زي bootkits)
              إنه يشتغل قبل Windows bootloader.
              ده بيحصل بسبب Secure Boot (جزء من UEFI).
            </p>

            <p className="mt-3">
              بعد ما firmware و bootloader يتأكدوا ويتشغلوا،
              بييجي وقت حساس تاني أثناء تشغيل الويندوز ودفاعاته.
              System Guard بيتدخل هنا ويضمن إن ملفات ويندوز والدرايفرز
              الموقعة بشكل صحيح (بما فيها third-party) هي اللي تبدأ.
            </p>

            <p className="mt-3">
              وبعد ما boot يخلص، System Guard بيشغل antimalware
              عشان يعمل scan لكل third-party drivers.
              في الآخر، System Guard يضمن secure boot مع integrity
              ويمنع اختراق السيستم قبل ما باقي الدفاعات تبدأ.
            </p>

            <h3 className="mt-6 text-lg font-bold text-gray-900">
              B) الحفاظ على السلامة وقت التشغيل (Run time)
            </h3>

            <p className="mt-2">
              قبل Windows 10، لو مهاجم قدر يوصل لصلاحيات SYSTEM أو يسيطر على kernel،
              كان يقدر يعبث ويتخطى معظم دفاعات الجهاز.
              رغم إن فيه تقنيات تقلل ده (زي Exploit Guard)، لازم يبقى فيه طريقة
              تحمي الخدمات والداتا الحساسة حتى لو أعلى صلاحيات اتاخدت.
            </p>

            <p className="mt-3">
              مع Windows 10 ظهر مفهوم Virtualization-Based Security (VBS)،
              اللي بيعزل الخدمات والداتا الحساسة في container معزول hardware-based
              (System Guard container).
              البيئة دي بتعمل security boundary يحمي حاجات زي:
              Credential Guard، Device Guard، vTPM، وأجزاء من Exploit Guard.
            </p>

            <h3 className="mt-6 text-lg font-bold text-gray-900">
              C) التحقق من سلامة المنصة بعد التشغيل (Remote attestation)
            </h3>

            <p className="mt-2">
              حتى مع حماية قوية، لازم نفترض “احتمال اختراق”.
              المؤسسة لازم تتحقق إن التقنيات بتعمل شغلها،
              ومينفعش الجهاز “يؤكد لنفسه” إنه سليم لو هو ممكن يكون مخترق.
            </p>

            <p className="mt-3">
              System Guard بيعمل integrity measurements أثناء الإقلاع باستخدام TPM 2.0،
              وبيخزنها بطريقة معزولة عن ويندوز عشان ما تتلعبش.
              بعدها القياسات دي تقدر تحدد سلامة firmware، حالة hardware config،
              ومكونات boot في ويندوز.
            </p>

            <p className="mt-3">
              بعد الإقلاع، System Guard بيوقّع ويقفل (seals) القياسات باستخدام TPM.
              ولما management system زي Intune أو Configuration Manager يطلبها،
              يقدر ياخدها للتحليل عن بُعد.
              ولو System Guard قال إن الجهاز “مفيهوش integrity”،
              نظام الإدارة يقدر ياخد إجراءات زي منع الوصول للموارد.
            </p>
          </Section>

          {/* Footer */}
          <footer className="text-center text-sm text-gray-500 py-6">
            Built with React + Tailwind • ترجمة مصري حرفية + صور
          </footer>
        </div>
      </div>
    </div>
  );
}
