import React from "react";
import "./WindowsDefenderGuide.css";

// صور (حطّها في src/assets)
import imgVbsDiagram from "../assets/hypervisor-virtualization-based-security-dc72cf3c.png";
import imgCredentialGuardIntune from "../assets/intune-credential-guard-760949ed.png";
import imgVbsGpo from "../assets/virtualization-based-security-322010f5.png";
import imgWindowsSecurityCenter from "../assets/windows-security-center-7c72db80.png";
import imgDefenderAntivirus from "../assets/intune-defender-antivirus-1d2f7442.png";
import imgDefenderFirewall from "../assets/intune-defender-firewall-38526165.png";
import imgFirewallSecurityCenter from "../assets/windows-defender-settings-console-bf927211.png";
import imgFirewallAdvanced from "../assets/windows-defender-advanced-firewall-console-53912b2b.png";

export default function WindowsDefenderGuide() {
  return (
    <div className="wd-page">
      <div className="wd-container">
        {/* Header */}
        <header className="wd-header">
          <div className="wd-badge">Windows 10/11 + Intune</div>
          <h1 className="wd-title">إدارة Microsoft Defender على Windows Client</h1>
          <p className="wd-subtitle">
            شرح بالمصري + خطوات + مفاهيم أساسية: Windows Security • Credential Guard • Defender AV • Firewall • Advanced Security
          </p>
        </header>

        {/* Intro */}
        <section className="wd-card">
          <h2 className="wd-h2">مقدمة</h2>
          <p className="wd-p">
            أجهزة ويندوز بتبقى أكتر عُرضة لهجمات الشبكة لأن الهجمات اللي جاية من الويب ممكن تستهدف أجهزة كتير في نفس الوقت وبشكل
            Remote. إنما أنواع تانية من الهجمات بتحتاج وصول “فيزيائي” للجهاز.
          </p>
          <p className="wd-p">
            <b>Windows Security</b> (أمن ويندوز) هو منصة الحماية المدمجة في ويندوز، وبتوفر حماية شاملة ضد التهديدات الشائعة.
            ومع إن الوقاية مهمة، برضه ممكن Malware تدخل… ساعتها لازم Investigation وRemediation بسرعة.
          </p>
          <div className="wd-callout">
            <b>هدفنا هنا:</b> تفهم الأدوات في ويندوز اللي بتساعدك تكتشف وتتعامل مع البرمجيات الخبيثة، وكمان ازاي الـ Firewall
            بيحمي من اتصالات غير مصرح بيها (Inbound/Outbound).
          </div>

          <div className="wd-grid">
            <figure className="wd-figure">
              <img className="wd-img" src={imgWindowsSecurityCenter} alt="Windows Security Center" />
              <figcaption className="wd-caption">Windows Security Center – Security at a glance</figcaption>
            </figure>
          </div>
        </section>

        {/* Objectives */}
        <section className="wd-card">
          <h2 className="wd-h2">الأهداف</h2>
          <ul className="wd-list">
            <li>تفهم قدرات Windows Security.</li>
            <li>تفهم Windows Defender Credential Guard وإزاي بيحمي الـ Credentials.</li>
            <li>تدير Microsoft Defender Antivirus (Scan / Quarantine / Exclusions …).</li>
            <li>تدير Windows Defender Firewall من أكتر من مكان.</li>
            <li>تفهم Firewall with Advanced Security (Rules / IPsec / Monitoring).</li>
          </ul>
        </section>

        {/* Windows Security Center */}
        <section className="wd-card">
          <h2 className="wd-h2">1) Windows Security Center (مركز أمان ويندوز)</h2>
          <p className="wd-p">
            Windows Security Center موجود في Windows 11 (وكمان في 10 بشكل قريب) وبيجمع كل جوانب الأمان الخاصة بالنظام،
            الحسابات، والتطبيقات على الجهاز.
          </p>

          <div className="wd-cols">
            <div>
              <h3 className="wd-h3">بيغطي إيه؟</h3>
              <ul className="wd-list">
                <li><b>Virus & threat protection:</b> إدارة مضاد الفيروسات والمالوير.</li>
                <li><b>Account protection:</b> إعدادات تسجيل الدخول + Windows Hello + Dynamic Lock.</li>
                <li><b>Firewall & network protection:</b> إعدادات الـ Firewall وبروفايلات الشبكة (Domain/Private/Public).</li>
                <li><b>App & browser control:</b> SmartScreen للحماية من ملفات وتطبيقات مش موثوقة.</li>
                <li><b>Device security:</b> Core isolation / TPM / Secure Boot …</li>
                <li><b>Device performance & health:</b> صحة الجهاز + مشاكل تخزين/درايفرز/بطارية + Fresh Start.</li>
                <li><b>Family options:</b> إعدادات العيلة والرقابة الأبوية.</li>
                <li><b>Protection history:</b> سجل التهديدات والإجراءات المقترحة.</li>
              </ul>
            </div>

            <div className="wd-note">
              <h3 className="wd-h3">ملاحظة مهمة</h3>
              <p className="wd-p">
                Windows Security بيبقى شغال بشكل افتراضي من أول ما تنزل ويندوز وبيفضل شغال طول فترة دعم الجهاز.
              </p>
              <p className="wd-p">
                بس… مش كل إعدادات الـ Firewall هتلاقيها هنا. في حاجات بتفتح Control Panel أو Advanced Console.
              </p>
            </div>
          </div>
        </section>

        {/* Credential Guard */}
        <section className="wd-card">
          <h2 className="wd-h2">2) Windows Defender Credential Guard</h2>
          <p className="wd-p">
            Credential Guard اتقدم لأول مرة في Windows 10 Enterprise و Windows Server 2016. فكرته الأساسية:
            يستخدم <b>Virtualization-based security (VBS)</b> عشان يعزل أسرار تسجيل الدخول (Credentials) في بيئة محمية
            بعيد عن نظام التشغيل العادي.
          </p>

          <div className="wd-callout">
            <b>ليه ده مهم؟</b> عشان يمنع هجمات زي <b>Pass-the-Hash</b> و <b>Pass-the-Ticket</b> اللي بتحاول تسحب
            NTLM hashes أو Kerberos TGT من الذاكرة.
          </div>

          <h3 className="wd-h3">إيه اللي بيتحمى؟</h3>
          <ul className="wd-list">
            <li>NTLM password hashes</li>
            <li>Kerberos Ticket Granting Tickets (TGT)</li>
            <li>Domain credentials اللي تطبيقات بتخزنها</li>
          </ul>

          <h3 className="wd-h3">بيشتغل إزاي؟ (بالمصري البسيط)</h3>
          <p className="wd-p">
            زمان (قبل Windows 10) الأسرار كانت بتتخزن جوه Process اسمه <b>LSASS</b>.
            مع Credential Guard، ويندوز بيعمل جزء جديد اسمه <b>Isolated LSA</b> (زي LSASS معزول)
            جوه بيئة VBS — والنظام الأساسي بيتواصل معاه بـ RPC.
          </p>

          <div className="wd-grid">
            <figure className="wd-figure">
              <img className="wd-img" src={imgVbsDiagram} alt="Credential Guard / VBS diagram" />
              <figcaption className="wd-caption">فكرة العزل: LSASS في الـ OS بيتواصل مع LSAiso جوه VBS</figcaption>
            </figure>
          </div>

          <h3 className="wd-h3">قيود/تأثيرات لازم تبقى عارفها</h3>
          <ul className="wd-list">
            <li>
              مع تفعيل Credential Guard: بروتوكولات زي <b>NTLMv1</b> و <b>MS-CHAPv2</b> و <b>Digest</b> و <b>CredSSP</b>
              مش هتستخدم “Credentials بتاعة اليوزر اللي عامل Sign-in”.
              يعني <b>SSO</b> مش هيشتغل معاهم.
            </li>
            <li>
              Kerberos: مش بيسمح بـ <b>Unconstrained delegation</b> ومش بيسمح بـ <b>DES</b> encryption.
            </li>
            <li>
              الأفضل لو الشركة مضطرة لبروتوكولات قديمة: تعمل <b>Secondary credentials</b> مخصوص ليها بدل credentials الأساسية.
            </li>
          </ul>

          <h3 className="wd-h3">تفعيل Credential Guard عن طريق Group Policy</h3>
          <ol className="wd-steps">
            <li>افتح Group Policy Management Console.</li>
            <li>
              روح: <b>Computer Configuration → Administrative Templates → System → Device Guard</b>
            </li>
            <li>افتح: <b>Turn On Virtualization Based Security</b> وخليه <b>Enabled</b>.</li>
            <li>
              في <b>Select Platform Security Level</b> اختار:
              <b> Secure Boot</b> أو <b>Secure Boot and DMA Protection</b>.
            </li>
            <li>
              في <b>Credential Guard Configuration</b> اختار:
              <b> Enabled with UEFI lock</b> (أقوى)،
              أو <b>Enabled without lock</b> لو عايز تقدر تقفله Remote بعدين.
            </li>
          </ol>

          <div className="wd-grid">
            <figure className="wd-figure">
              <img className="wd-img" src={imgVbsGpo} alt="Turn On Virtualization Based Security GPO" />
              <figcaption className="wd-caption">GPO: Turn On Virtualization Based Security + خيارات Credential Guard</figcaption>
            </figure>

            <figure className="wd-figure">
              <img className="wd-img" src={imgCredentialGuardIntune} alt="Credential Guard options" />
              <figcaption className="wd-caption">مثال خيارات Credential Guard (UEFI lock / بدون lock)</figcaption>
            </figure>
          </div>

          <div className="wd-note">
            <h3 className="wd-h3">Intune كمان ينفع</h3>
            <p className="wd-p">
              تقدر Deploy Credential Guard من Intune للأجهزة Windows 10/11.
              بيكون ضمن Profile من نوع <b>Endpoint protection</b> (Device configuration profile).
            </p>
          </div>
        </section>

        {/* Defender Antivirus */}
        <section className="wd-card">
          <h2 className="wd-h2">3) Microsoft Defender Antivirus</h2>
          <p className="wd-p">
            Microsoft Defender Antivirus بيحمي من Spyware / Malware / Viruses، وكمان “Hyper-V aware”
            يعني فاهم لو ويندوز شغال كـ VM.
          </p>

          <h3 className="wd-h3">أنواع الـ Scan</h3>
          <div className="wd-tableWrap">
            <table className="wd-table">
              <thead>
                <tr>
                  <th>نوع الفحص</th>
                  <th>بيفحص إيه؟</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>Quick</b></td>
                  <td>أماكن الإصابة الأكثر شيوعًا (سريع).</td>
                </tr>
                <tr>
                  <td><b>Full</b></td>
                  <td>كل الملفات + كل البرامج اللي شغالة.</td>
                </tr>
                <tr>
                  <td><b>Custom</b></td>
                  <td>اختيار فولدرات/درايفات معينة.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="wd-callout">
            <b>Best practice:</b> اعمل Quick scan يوميًا، ولو شاكك في إصابة قوية اعمل Full scan.
          </div>

          <h3 className="wd-h3">Quarantine & Actions</h3>
          <p className="wd-p">
            لما Defender يلاقي ملف خطر، بينقله لمنطقة <b>Quarantine</b> وبيمنعه يشتغل.
            بعد الفحص تقدر من Scan history تشيل (Remove) أو ترجع (Restore).
            ويفضل ما ترجعش Threat تقييمه High/Severe.
          </p>

          <h3 className="wd-h3">Exclusions (استثناءات)</h3>
          <p className="wd-p">
            تقدر تعمل Exclusions لملفات/فولدرات/Extensions/Processes لتقليل Alerts أو تسريع الفحص،
            بس ده بيقلل الحماية.
          </p>

          <h3 className="wd-h3">Microsoft Defender Offline</h3>
          <p className="wd-p">
            ده Scan بيشتغل من بيئة موثوقة “خارج ويندوز” عشان يمسك مالوير بيحاول يستخبى جوه النظام،
            وممكن يفيد ضد حاجات بتضرب الـ MBR.
          </p>

          <h3 className="wd-h3">إزاي تدار Defender؟</h3>
          <ul className="wd-list">
            <li>Intune</li>
            <li>Configuration Manager</li>
            <li>Group Policy</li>
            <li>PowerShell</li>
            <li>WMI</li>
          </ul>

          <div className="wd-note">
            <h3 className="wd-h3">إدارة Defender من Intune (مذكور في النص)</h3>
            <ol className="wd-steps">
              <li>Intune admin center → <b>Devices</b> → <b>Windows</b> → <b>Configuration profiles</b></li>
              <li><b>Create profile</b></li>
              <li>Platform: Windows المناسب</li>
              <li>Profile type: <b>Device restrictions</b></li>
              <li>افتح <b>Microsoft Defender Antivirus</b> واضبط الإعدادات</li>
            </ol>
          </div>

          <div className="wd-grid">
            <figure className="wd-figure">
              <img className="wd-img" src={imgDefenderAntivirus} alt="Defender Antivirus settings in Intune" />
              <figcaption className="wd-caption">Intune – Microsoft Defender Antivirus Settings</figcaption>
            </figure>
          </div>

          <h3 className="wd-h3">Features إضافية</h3>
          <ul className="wd-list">
            <li>
              <b>Block at First Sight:</b> بيقفّل مالوير جديد بسرعة عبر Cloud. (بيحتاج Cloud protection + Sample submission)
            </li>
            <li>
              <b>PUA Protection:</b> منع تطبيقات غير مرغوب فيها زي bundlers / adware / “registry optimizers”.
              ومتاحة للمؤسسات عبر Intune أو ConfigMgr.
            </li>
          </ul>
        </section>

        {/* Defender Firewall */}
        <section className="wd-card">
          <h2 className="wd-h2">4) Windows Defender Firewall</h2>
          <p className="wd-p">
            الـ Firewall جزء أساسي من الدفاع. تقدر توصله من Windows Security أو Control Panel.
            لكن مش كل الإعدادات هتلاقيها في Security Center — بعض اللينكات بتوديك Control Panel.
          </p>

          <div className="wd-grid">
            <figure className="wd-figure">
              <img className="wd-img" src={imgDefenderFirewall} alt="Defender Firewall settings in Intune" />
              <figcaption className="wd-caption">Intune – Windows Defender Firewall (Endpoint protection profile)</figcaption>
            </figure>

            <figure className="wd-figure">
              <img className="wd-img" src={imgFirewallSecurityCenter} alt="Firewall & network protection screen" />
              <figcaption className="wd-caption">Windows Security – Firewall & network protection</figcaption>
            </figure>
          </div>

          <h3 className="wd-h3">Firewall Exceptions (استثناءات)</h3>
          <p className="wd-p">
            لما تسمح لبرنامج يعدي من الـ Firewall أو تفتح Port، أنت كده بتعمل “فتحة” في الحماية.
            غالبًا <b>السماح لبرنامج</b> أأمن من <b>فتح Port</b> لأن:
          </p>
          <ul className="wd-list">
            <li>فتح Port بيخليه مفتوح حتى لو مفيش برنامج بيستخدمه.</li>
            <li>Allow app بيخلّي الفتحة تشتغل وقت ما التطبيق محتاج بس.</li>
          </ul>

          <div className="wd-callout">
            <b>قواعد ذهبية:</b> افتح اللي محتاجه بس، اقفل اللي مش محتاجه، ومتسمحش لبرنامج “مش معروف”.
          </div>

          <h3 className="wd-h3">Network Location Profiles</h3>
          <p className="wd-p">
            ويندوز عنده 3 بروفايلات: <b>Domain</b> / <b>Private</b> / <b>Public</b>.
            أول مرة تتصل بشبكة هتختار “هل تثق فيها؟” وده بيحدد مستوى القيود.
          </p>
          <ul className="wd-list">
            <li><b>Domain:</b> شبكة الشركة (الجهاز قادر يكلم Domain Controller).</li>
            <li><b>Private:</b> بيت/شغل موثوق (Network discovery عادة On).</li>
            <li><b>Public:</b> أماكن عامة (Network discovery Off، قيود أشد).</li>
          </ul>

          <h3 className="wd-h3">Firewall Notifications</h3>
          <p className="wd-p">
            تقدر تفعل/تطفّي إشعارات الـ Firewall من Control Panel:
            Change notification settings لكل Profile.
          </p>
        </section>

        {/* Advanced Security */}
        <section className="wd-card">
          <h2 className="wd-h2">5) Windows Defender Firewall with Advanced Security</h2>
          <p className="wd-p">
            ده الـ Console المتقدم اللي بتدير منه Rules بشكل احترافي، محليًا أو Remote أو عبر Group Policy.
            وبيسمح تعمل سياسات مختلفة حسب الـ Profile (Domain/Private/Public).
          </p>

          <div className="wd-grid">
            <figure className="wd-figure">
              <img className="wd-img" src={imgFirewallAdvanced} alt="Windows Defender Firewall with Advanced Security console" />
              <figcaption className="wd-caption">Advanced Security Console – Inbound/Outbound/Connection Security Rules</figcaption>
            </figure>
          </div>

          <h3 className="wd-h3">Firewall Properties (لكل Profile)</h3>
          <ul className="wd-list">
            <li><b>Firewall state:</b> On/Off</li>
            <li><b>Inbound connections:</b> Block/Allow حسب القواعد</li>
            <li><b>Outbound connections:</b> Allow افتراضيًا إلا لو Rule تمنع</li>
            <li><b>Notifications / Local rules / Local security rules</b></li>
            <li><b>Logging:</b> Log dropped packets / Log successful connections + حجم اللوج</li>
          </ul>

          <h3 className="wd-h3">أنواع الـ Rules</h3>
          <div className="wd-cols">
            <div>
              <h4 className="wd-h4">Inbound / Outbound Rule Types</h4>
              <ul className="wd-list">
                <li><b>Program:</b> حسب مسار الـ .exe (مفيد لو البورت مش معروف).</li>
                <li><b>Port:</b> TCP/UDP Port محدد.</li>
                <li><b>Predefined:</b> مجموعة Rules جاهزة لخدمة/ميزة ويندوز.</li>
                <li><b>Custom:</b> شروط متقدمة حسب الحاجة.</li>
              </ul>
            </div>

            <div className="wd-note">
              <h4 className="wd-h4">مثال سريع</h4>
              <p className="wd-p">
                لو عايز تفتح Task Scheduler Remote لازم تفعّل Firewall exception بتاعة
                <b> Remote Scheduled Tasks Management</b> (عادة من Predefined inbound rules).
              </p>
              <p className="wd-p">
                ولو عايز تمنع Web traffic على TCP 80: تعمل <b>Outbound Port Rule</b> وتعمل Block للـ 80.
              </p>
            </div>
          </div>

          <h3 className="wd-h3">Connection Security Rules (IPsec)</h3>
          <p className="wd-p">
            دي مختلفة عن Firewall rules: دي بتحدد “إزاي الاتصال يتأمن” (Authentication/Encryption) وهو بيعدي في الشبكة،
            لكنها مش بتفتح الاتصال لوحدها — لازم Firewall rule تسمح.
          </p>

          <ul className="wd-list">
            <li><b>Isolation:</b> عزل أجهزة حسب Domain membership أو Health.</li>
            <li><b>Authentication exemption:</b> استثناء أجهزة معينة (زي DCs / CAs / DHCP).</li>
            <li><b>Server-to-server:</b> حماية اتصال بين جهازين محددين (مثلاً App server ↔ DB server).</li>
            <li><b>Tunnel:</b> IPsec tunnel بين نقطتين.</li>
            <li><b>Custom:</b> حسب السيناريو.</li>
          </ul>

          <h3 className="wd-h3">Monitoring (المتابعة)</h3>
          <ul className="wd-list">
            <li>بتشوف الـ Active profiles وإعداداتهم.</li>
            <li>بتشوف الـ Active rules و SAs.</li>
            <li>
              تقدر تراجع Events من <b>Event Viewer</b> خصوصًا:
              <b> ConnectionSecurity operational log</b> لِـ IPsec events.
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="wd-footer">
          <div className="wd-footerBox">
            <b>لو عايزها “A to Z عمليّة” زي ما كنت بتقول:</b>
            <span> قولّي: الشركة عندها (Domain/Entra only؟) + عدد الأجهزة + هل في BitLocker/TPM + هل Virtualization شغال؟
              وأنا أطلعلك Plan Deploy + Monitoring يومي + Reports من Intune/Defender.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
