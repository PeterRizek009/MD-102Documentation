function OnPremiseDeployment() {
return (
   <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Header */}
        <h1 className="text-4xl font-bold mb-2">
          MDT / USMT / SCCM Documentation
        </h1>
        <p className="text-gray-500 mb-10">
          Reading documentation – Organized for deep understanding (MD-102 Level)
        </p>

        {/* MDT */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 MDT – Microsoft Deployment Toolkit</h2>

          <h3>📌 هو إيه؟</h3>
          <p>أداة مجانية من Microsoft بتستخدمها علشان:</p>
          <ul>
            <li>تنزّل Windows</li>
            <li>تعمل Image</li>
            <li>تثبّت Drivers</li>
            <li>تثبّت Programs</li>
            <li>تنفّذ Scripts</li>
          </ul>
          <p><strong>يعني:</strong> نشر نظام تشغيل (OS Deployment).</p>

          <h3>📌 بيشتغل إزاي؟</h3>
          <p><strong>Lite Touch Installation (LTI)</strong></p>
          <p>👉 لازم حد يضغط Next شوية</p>

          <p>بيشتغل غالبًا مع:</p>
          <ul>
            <li>ISO</li>
            <li>USB</li>
            <li>PXE (مع WDS)</li>
          </ul>

          <h3>📌 يستخدم في إيه؟</h3>
          <ul>
            <li>شركة On-premise</li>
            <li>مفيش Cloud</li>
            <li>مفيش Intune</li>
            <li>عايز Image موحد لكل الأجهزة</li>
          </ul>

          <h3>📌 مثال واقعي</h3>
          <p>شركة فيها 50 جهاز Desktop</p>
          <p>عايزين Windows + Office + Chrome</p>
          <p>ومفيش Intune</p>
          <p>✅ MDT هو الاختيار الصح</p>

          <h3>📌 مميزاته</h3>
          <ul>
            <li>✔ مجاني</li>
            <li>✔ بسيط</li>
            <li>✔ ممتاز للـ Imaging</li>
          </ul>

          <h3>📌 عيوبه</h3>
          <ul>
            <li>❌ مش Zero-Touch</li>
            <li>❌ مفيش Device Management</li>
            <li>❌ مفيش Compliance</li>
            <li>❌ مش Cloud Friendly</li>
          </ul>

          <h3>🔹 MDT = ويندوز جاهز بكل حاجة (Manual / Semi-Manual)</h3>
          <p>أيوه</p>
          <p>بتستخدم MDT لما:</p>
          <ul>
            <li>عايز تنزّل Windows Image موحّد</li>
            <li>فيه:</li>
            <ul>
              <li>Drivers</li>
              <li>Office</li>
              <li>Chrome</li>
              <li>Tools</li>
            </ul>
            <li>وعلى أجهزة On-Prem</li>
            <li>والـ Deployment يكون Manual (Next → Next)</li>
          </ul>
        </section>

        {/* USMT */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 USMT – User State Migration Tool</h2>

          <h3>📌 هو إيه؟</h3>
          <p>أداة لنقل بيانات المستخدم:</p>
          <ul>
            <li>Desktop</li>
            <li>Documents</li>
            <li>Favorites</li>
            <li>User Profile</li>
            <li>App settings (بشروط)</li>
          </ul>
          <p>⚠️ USMT لا ينزّل Windows</p>

          <h3>📌 بيشتغل إزاي؟</h3>
          <p><strong>ScanState</strong> 👉 ياخد بيانات اليوزر</p>
          <p><strong>LoadState</strong> 👉 يرجّع البيانات بعد التنزيل</p>

          <h3>📌 يستخدم في إيه؟</h3>
          <ul>
            <li>Upgrade من Windows 10 → 11</li>
            <li>تغيير جهاز بجهاز</li>
            <li>الحفاظ على ملفات المستخدم</li>
          </ul>

          <h3>📌 مثال واقعي</h3>
          <p>جهاز قديم هيتفرمت بس اليوزر عايز ملفاته</p>
          <p>✅ USMT</p>

          <h3>📌 مميزاته</h3>
          <ul>
            <li>✔ يحافظ على تجربة المستخدم</li>
            <li>✔ مهم جدًا في الشركات</li>
          </ul>

          <h3>📌 عيوبه</h3>
          <ul>
            <li>❌ معقد شوية</li>
            <li>❌ CLI</li>
            <li>❌ On-premise بس</li>
          </ul>
        </section>

        {/* SCCM */}
        <section className="prose prose-lg max-w-none mb-16">
          <h2>🔹 SCCM (ConfigMgr)</h2>

          <h3>📌 هو إيه؟</h3>
          <p>أقوى أداة Enterprise Management On-premise:</p>
          <ul>
            <li>OS Deployment</li>
            <li>Software Deployment</li>
            <li>Updates</li>
            <li>Inventory</li>
            <li>Reporting</li>
            <li>Compliance (جزئي)</li>
          </ul>

          <h3>📌 بيشتغل إزاي؟</h3>
          <ul>
            <li>Zero-Touch Installation (ZTI)</li>
            <li>PXE</li>
            <li>Collections</li>
            <li>Task Sequences</li>
          </ul>

          <h3>📌 يستخدم في إيه؟</h3>
          <ul>
            <li>شركات كبيرة</li>
            <li>آلاف الأجهزة</li>
            <li>تحكم كامل</li>
            <li>On-premise Infra</li>
          </ul>

          <h3>📌 مثال واقعي</h3>
          <p>شركة فيها 2000 جهاز عايزين Windows + Updates + Software + Reports</p>
          <p>✅ SCCM</p>

          <h3>📌 مميزاته</h3>
          <ul>
            <li>✔ قوي جدًا</li>
            <li>✔ Enterprise Grade</li>
            <li>✔ Automation كامل</li>
          </ul>

          <h3>📌 عيوبه</h3>
          <ul>
            <li>❌ معقد</li>
            <li>❌ محتاج Infra</li>
            <li>❌ Licensing</li>
            <li>❌ مش Cloud First</li>
          </ul>
        </section>

        {/* MDT Steps */}
        <section className="prose prose-lg max-w-none">
          <h2>🔧 خطوات MDT من A → Z (عملي)</h2>

          <h3>1️⃣ تجهيز السيرفر</h3>
          <p>Windows Server أو حتى Windows 10/11</p>
          <p>تثبّت:</p>
          <ul>
            <li>Windows ADK</li>
            <li>WinPE Add-on</li>
            <li>MDT</li>
          </ul>

          <h3>2️⃣ Create Deployment Share</h3>
          <p>من MDT Console: New Deployment Share</p>
          <p>مثال: D:\MDTShare</p>

          <p>ده المكان اللي هيبقى فيه:</p>
          <ul>
            <li>Windows images</li>
            <li>Drivers</li>
            <li>Applications</li>
            <li>Task Sequences</li>
          </ul>

          <h3>3️⃣ Import Windows Image</h3>
          <p>ISO بتاع Windows 10 أو 11</p>
          <p>تختار: install.wim</p>

          <p>📌 تقدر تضيف:</p>
          <ul>
            <li>Windows 10</li>
            <li>Windows 11</li>
            <li>أكتر من نسخة</li>
          </ul>

          <h3>4️⃣ Add Applications</h3>
          <p>مثال:</p>
          <ul>
            <li>Office 365</li>
            <li>Chrome</li>
            <li>Adobe Reader</li>
          </ul>

          <p>كل برنامج:</p>
          <p>Silent Install → setup.exe /quiet</p>

          <h3>5️⃣ Add Drivers</h3>
          <p>Drivers حسب Model و Manufacturer</p>
          <p>📌 خطوة مهمة عشان الويندوز يشتغل مظبوط</p>

          <h3>6️⃣ Create Task Sequence</h3>
          <p>دي أهم خطوة 👇</p>
          <p>Task Sequence = السيناريو</p>

          <p>مثال:</p>
          <ul>
            <li>Format Disk</li>
            <li>Install Windows</li>
            <li>Install Drivers</li>
            <li>Install Applications</li>
            <li>Join Domain</li>
            <li>Run Scripts</li>
          </ul>

          <h3>7️⃣ Update Deployment Share</h3>
          <p>Generates:</p>
          <ul>
            <li>LiteTouch ISO</li>
            <li>Boot Images</li>
          </ul>

          <h3>8️⃣ Deployment</h3>
          <p>عندك 3 طرق:</p>
          <ul>
            <li>USB</li>
            <li>ISO</li>
            <li>PXE (مع WDS)</li>
          </ul>

          <p>🧠 هنا بقى:</p>
          <ul>
            <li>الجهاز يقلع</li>
            <li>Wizard يطلع</li>
            <li>تختار Task Sequence</li>
            <li>Next → Next</li>
            <li>الويندوز يتنزّل</li>
          </ul>

          <h3>🟡 إمتى MDT يبقى اختيار صح؟</h3>
          <ul>
            <li>✔ شركة صغيرة</li>
            <li>✔ مفيش Cloud</li>
            <li>✔ مفيش Intune</li>
            <li>✔ أجهزة ثابتة</li>
            <li>✔ On-Prem فقط</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
