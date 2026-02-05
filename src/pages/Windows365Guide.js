import React from "react";

/**
 * Place images inside:
 * /public/images/
 *
 * connection.png
 * create-policy.png
 * cloudpc.png
 */

export default function Windows365Guide() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold">Windows 365 — الشرح الكامل بالمصري</h1>
          <p className="text-slate-600 mt-2">
            من الصفر لحد الإدارة + سيناريوهات حقيقية + كلام ينفع للـ Interviews
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-8">

        {/* INTRO */}
        <section className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-3">🔥 يعني ايه Windows 365 ؟</h2>

          <p className="text-slate-700 leading-7">
            تخيل كده إن كل موظف عنده <strong>كمبيوتر شغال في السحابة</strong> مش على المكتب.
            تقدر تفتحه من أي جهاز:
          </p>

          <ul className="list-disc ml-6 mt-3 text-slate-700">
            <li>Laptop</li>
            <li>Tablet</li>
            <li>Mobile</li>
            <li>Mac</li>
          </ul>

          <div className="mt-4 bg-slate-50 p-4 rounded-xl">
            👉 الكمبيوتر ده اسمه <strong>Cloud PC</strong>
            <br />
            👉 متخزن في Microsoft Cloud
            <br />
            👉 Secure + Always available
          </div>
        </section>

        {/* WHY */}
        <section className="grid md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <h2 className="text-lg font-semibold">ليه الشركات بتحبه؟</h2>

            <ul className="list-disc ml-6 mt-3 text-slate-700 space-y-1">
              <li>الموظف يشتغل من أي مكان</li>
              <li>Security أعلى</li>
              <li>إدارة أسهل</li>
              <li>مفيش أجهزة تتسرق فيها داتا</li>
              <li>Scalable بسهولة</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <h2 className="text-lg font-semibold">💡 فكرة عبقرية</h2>

            <p className="text-slate-700 mt-2">
              بدل ما تشتري Laptop بـ 1500$،
              ممكن تدفع Subscription شهري وتدي الموظف Cloud PC.
            </p>
          </div>
        </section>

        {/* TYPES */}
        <section className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">⚡ أنواع Windows 365</h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div className="bg-slate-50 p-5 rounded-xl">
              <h3 className="font-semibold">Windows 365 Business</h3>
              <ul className="list-disc ml-6 mt-2 text-slate-700">
                <li>للشركات الصغيرة (حد أقصى 300 user)</li>
                <li>Setup سهل جدًا</li>
                <li>مش محتاج Azure</li>
                <li>مش محتاج Domain</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl">
              <h3 className="font-semibold">Windows 365 Enterprise</h3>
              <ul className="list-disc ml-6 mt-2 text-slate-700">
                <li>للشركات الكبيرة</li>
                <li>Custom Images</li>
                <li>Intune Integration</li>
                <li>Supports Entra + AD</li>
                <li>Unlimited users</li>
              </ul>
            </div>

          </div>
        </section>

        {/* ACCESS */}
        <section className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold">🧑‍💻 المستخدم بيدخل ازاي؟</h2>

          <p className="text-slate-700 mt-2">
            يفتح:
            <strong> windows365.microsoft.com </strong>
            أو Remote Desktop.
          </p>

          <img
            src="/images/cloudpc.png"
            alt="Cloud PC"
            className="mt-6 rounded-xl border"
          />
        </section>

        {/* SETUP */}
        <section className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">🚀 خطوات Setup (احفظها للانترفيو)</h2>

          <div className="space-y-4 text-slate-700">

            <div>
              <h3 className="font-semibold">1️⃣ Assign License</h3>
              <p>
                لازم كل user ياخد Windows 365 license علشان يتعمله Cloud PC.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">2️⃣ Create Azure Network Connection</h3>
              <p>
                علشان Cloud PC يقدر يدخل الدومين ويوصل للـ on-prem resources.
              </p>

              <img
                src="/images/connection.png"
                alt="Create connection"
                className="mt-4 rounded-xl border"
              />
            </div>

            <div>
              <h3 className="font-semibold">3️⃣ Create Provisioning Policy</h3>
              <p>
                السياسة دي بتحدد:
              </p>

              <ul className="list-disc ml-6">
                <li>Image</li>
                <li>Network</li>
                <li>Permissions</li>
                <li>Users</li>
              </ul>

              <img
                src="/images/create-policy.png"
                alt="Create policy"
                className="mt-4 rounded-xl border"
              />
            </div>

            <div>
              <h3 className="font-semibold">4️⃣ Configure Apps & Policies</h3>
              <p>
                بعدها بتتعامل مع Cloud PC زي أي جهاز:
                تنزل Apps، تعمل Compliance، Security، Updates.
              </p>
            </div>

          </div>
        </section>

        {/* IMAGES */}
        <section className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold">🧠 Custom Images</h2>

          <p className="text-slate-700 mt-2">
            Microsoft بتوفر Images جاهزة محدثة.
            لكن لو شركتك محتاجة Apps معينة — تقدر ترفع Custom Image.
          </p>
        </section>

        {/* ADMIN */}
        <section className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-3">⚙️ إدارة Cloud PCs</h2>

          <p className="text-slate-700">
            الإدارة شبه الأجهزة العادية جدًا:
          </p>

          <ul className="list-disc ml-6 mt-3 text-slate-700">
            <li>Configuration profiles</li>
            <li>Security policies</li>
            <li>Update rings</li>
            <li>Apps deployment</li>
          </ul>
        </section>

        {/* REMOTE ACTIONS */}
        <section className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-3">🔥 Remote Actions مهمة جدًا</h2>

          <div className="grid md:grid-cols-3 gap-4">

            <div className="bg-slate-50 p-4 rounded-xl">
              <h3 className="font-semibold">Reprovision</h3>
              <p>
                بيرجع الجهاز كأنه جديد.
                مفيد لو الجهاز بايظ أو عايز تبدأ من الصفر.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl">
              <h3 className="font-semibold">Resize</h3>
              <p>
                تزود RAM أو CPU لو المستخدم احتاج Power أعلى.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl">
              <h3 className="font-semibold">Collect Diagnostics</h3>
              <p>
                تجيب Logs وتحلل المشاكل.
              </p>
            </div>

          </div>
        </section>

        {/* SECURITY */}
        <section className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold">🔐 Security Model</h2>

          <ul className="list-disc ml-6 mt-3 text-slate-700">
            <li>Conditional Access</li>
            <li>MFA</li>
            <li>Defender Integration</li>
            <li>Security Baselines</li>
          </ul>
        </section>

        {/* INTERVIEW */}
        <section className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
          <h2 className="text-xl font-semibold">🎯 احفظ دي للانترفيو</h2>

          <p className="mt-2">
            "Windows 365 is a cloud-based PC that provides secure, scalable,
            and anywhere access to a personalized Windows environment while
            simplifying device management through Microsoft Intune." 
          </p>
        </section>

      </main>
    </div>
  );
}
