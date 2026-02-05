import React from "react";

export default function AzureVirtualDesktopGuidePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
              <span className="text-xl">🖥️</span>
            </div>
            <div>
              <h1 className="text-base font-semibold leading-tight">
                Azure Virtual Desktop (AVD)
              </h1>
              <p className="text-xs text-slate-400">
                Admin + Architecture + Interview Notes
              </p>
            </div>
          </div>

          <a
            href="#deploy"
            className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-white/15"
          >
            Jump to Deployment
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              <span>VDI</span>
              <span className="opacity-60">•</span>
              <span>Windows 10/11 Multi-session</span>
              <span className="opacity-60">•</span>
              <span>Reverse Connect</span>
            </div>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              🔥 أولاً: يعني إيه Azure Virtual Desktop أصلاً؟
            </h2>

            <p className="mt-4 max-w-3xl text-slate-300">
              تخيل إن الشركة مش بتدي الموظفين أجهزة قوية… بدل كده:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <p className="text-sm text-slate-300">
                  👉 كل Desktop شغال في Azure
                  <br />
                  👉 والموظف بيفتحه من أي جهاز:
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Laptop", "Mac", "iPad", "Android", "Browser"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <p className="text-sm text-slate-300">
                  يعني الجهاز اللي مع المستخدم مجرد <span className="font-semibold">شاشة + كيبورد</span>،
                  لكن <span className="font-semibold">المعالجة والبيانات</span> كلها في الداتا سنتر.
                </p>
                <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200">
                  👉 VDI = Virtual Desktop Infrastructure
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section id="architecture" className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="text-2xl font-bold">🧠 الفكرة الأساسية (Architecture)</h3>
            <p className="text-sm text-slate-400">
              Azure Virtual Desktop بيتكون من 5 عناصر رئيسية
            </p>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {/* 1 Host Pool */}
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-xl font-semibold">1️⃣ Host Pool</h4>
                  <p className="mt-1 text-sm text-slate-300">
                    ده أهم Component. تخيله زي 👉 Farm من ال Virtual Machines (VMs)
                    — كل VM ممكن يدخل عليه Users.
                  </p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
                  Core
                </span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="text-sm font-semibold">✔ Personal Host Pool</div>
                  <ul className="mt-2 space-y-2 text-sm text-slate-300">
                    <li>• User واحد = VM واحد</li>
                    <li>• Persistent (يحتفظ بالملفات والبرامج)</li>
                  </ul>
                  <div className="mt-3 text-xs text-slate-400">
                    مناسب لـ: Developers / Designers / Engineers
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="text-sm font-semibold">✔ Pooled Host Pool</div>
                  <ul className="mt-2 space-y-2 text-sm text-slate-300">
                    <li>• عدة Users على نفس VM</li>
                    <li>• مثال: VM واحدة تستحمل 10 users</li>
                    <li>• 👉 Cost Saving رهيب</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* 2 Session Host */}
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-xl font-semibold">2️⃣ Session Host</h4>
              <p className="mt-2 text-sm text-slate-300">
                ده الـ VM نفسه. بيكون عليه:
              </p>
              <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <div className="text-sm font-semibold">
                  Windows 10 / 11 Multi-session
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  (ودي ميزة مش موجودة On-Prem بسهولة) — يعني 20 موظف ممكن يستخدموا نفس الويندوز.
                </p>
              </div>
            </article>

            {/* 3 Workspace */}
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-xl font-semibold">3️⃣ Workspace</h4>
              <p className="mt-2 text-sm text-slate-300">
                ده Portal المستخدم — زي Dashboard فيها:
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["✔ Desktop", "✔ Apps"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-3 text-sm text-slate-300">
                المستخدم لما يسجل دخول يشوفهم هنا.
              </p>
            </article>

            {/* 4 Application Group */}
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-xl font-semibold">4️⃣ Application Group</h4>
              <p className="mt-2 text-sm text-slate-300">
                بدل ما تدي Desktop كامل… ممكن تنشر App بس.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["SAP", "Finance App", "CRM"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-sm text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                الموظف يشغل البرنامج فقط — ده اسمه 👉 <span className="font-semibold">RemoteApp</span>
              </div>
            </article>

            {/* 5 FSLogix */}
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:col-span-2">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h4 className="text-xl font-semibold">5️⃣ FSLogix (مهم جداً)</h4>
                  <p className="mt-2 text-sm text-slate-300">
                    بيحل أكبر مشكلة في VDI: 👉 Profile Loading.
                  </p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
                  Profiles
                </span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="text-sm text-slate-300">
                    بدل ما كل مرة User يدخل بروفايله يتعمل من الأول…
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    FSLogix بيخزن البروفايل في <span className="font-semibold">Container</span>.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="text-sm text-slate-300">
                    النتيجة:
                  </p>
                  <p className="mt-2 text-lg font-semibold">🔥 Login في ثواني.</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Security */}
        <section id="security" className="mt-12">
          <h3 className="text-2xl font-bold">🔐 Security Model (Interview Favorite)</h3>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-xl font-semibold">✔ Reverse Connect</h4>
              <p className="mt-2 text-sm text-slate-300">
                بدل ما تفتح Ports من الإنترنت للـ VM… الـ VM هو اللي بيعمل outbound connection.
              </p>

              <div className="mt-4 space-y-2 text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <span className="text-lg">❌</span> <span>No inbound ports</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">❌</span> <span>No RDP exposed</span>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-200">
                وده يقلل 👉 <span className="font-semibold">Attack Surface</span>
              </div>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-xl font-semibold">Controls إضافية</h4>
              <p className="mt-2 text-sm text-slate-300">
                كمان عندك:
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {[
                  "MFA عبر Entra ID",
                  "RBAC",
                  "Conditional Access",
                  "Session Isolation",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/10">
                      ✓
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-300">
                يعني لو User اتصاب ب malware — مش هيعدي لباقي المستخدمين.
              </div>
            </article>
          </div>
        </section>

        {/* UX + Management */}
        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-bold">🚀 Optimal User Experience</h3>
            <p className="mt-3 text-sm text-slate-300">
              Microsoft ركزت جداً على الأداء.
            </p>

            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-sm text-slate-300">
                ليه الأداء سريع؟ 👉 لأن الـ VM قريب من Data & Apps.
              </p>
              <p className="mt-2 text-sm text-slate-300">
                مش بتشتغل من لابتوب ضعيف على Teams مثلاً… Teams شغال على VM قوية.
              </p>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-sm font-semibold">Containerized Profiles (FSLogix)</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {["✔ Login سريع", "✔ No profile corruption"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-bold">🧑‍💻 Simplified Management</h3>
            <p className="mt-3 text-sm text-slate-300">
              كـ Admin مش محتاج تدير (زي RDS القديم):
            </p>

            <div className="mt-4 space-y-2 text-sm text-slate-200">
              {["❌ Gateway Servers", "❌ Broker", "❌ Licensing server"].map((t) => (
                <div key={t} className="rounded-2xl border border-white/10 bg-slate-950/40 p-3">
                  {t}
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
              Microsoft بتدير الـ Infrastructure. <br />
              انت تدير فقط: 👉 <span className="font-semibold">VMs / Images / Policies</span>
            </div>
          </article>
        </section>

        {/* Performance + Licensing */}
        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-bold">📊 Performance Management</h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <h4 className="text-sm font-semibold">Breadth Mode</h4>
                <p className="mt-2 text-sm text-slate-300">
                  يوزع المستخدمين بالتساوي (أفضل للـ Performance).
                </p>
                <div className="mt-3 space-y-2 text-xs text-slate-200">
                  <div className="rounded-lg bg-white/10 p-2">VM1 → User</div>
                  <div className="rounded-lg bg-white/10 p-2">VM2 → User</div>
                  <div className="rounded-lg bg-white/10 p-2">VM3 → User</div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <h4 className="text-sm font-semibold">Depth Mode</h4>
                <p className="mt-2 text-sm text-slate-300">
                  يملى VM واحدة الأول. ممتاز لو:
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  <li>• 👉 عايز تقلل عدد الـ VMs الشغالة</li>
                  <li>• 👉 توفر فلوس</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-bold">💰 Licensing + Costs</h3>

            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-sm text-slate-300">
                Azure Virtual Desktop نفسه: 👉 غالباً بدون License إضافي لو عندك:
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Microsoft 365 E3 / E5", "Business Premium"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm text-slate-300">
                لكن بتدفع على: ✔ Compute ✔ Storage ✔ Network (Pay-as-you-go)
              </p>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold">💸 Cost Saving Trick</p>
              <p className="mt-2 text-sm text-slate-300">
                Reserved Instances: تحجز VM سنة أو 3 سنين — توفر حتى 🔥 72%
              </p>
            </div>
          </article>
        </section>

        {/* Multi-session */}
        <section className="mt-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-bold">🖥 Multi-session Windows</h3>
            <p className="mt-3 text-sm text-slate-300">
              ميزة قوية جداً: Windows client لكن multi-user.
            </p>

            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-200">
              ليه ده مهم؟ 👉 بدل 20 VM ممكن تستخدم 5 بس.
              <div className="mt-3 flex flex-wrap gap-2">
                {["CPU", "RAM", "Storage", "Licensing"].map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Options */}
        <section className="mt-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-bold">🚀 Deployment Options</h3>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <div className="text-sm font-semibold">✔ Azure Portal</div>
                <p className="mt-2 text-sm text-slate-300">أسهل حاجة.</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <div className="text-sm font-semibold">✔ Azure CLI</div>
                <p className="mt-2 text-sm text-slate-300">ممتاز للأتمتة.</p>
                <div className="mt-3 rounded-xl bg-black/40 p-3">
                  <code className="text-xs text-slate-200">
                    az desktopvirtualization hostpool show
                  </code>
                </div>
                <p className="mt-2 text-xs text-slate-400">
                  يجيب Host Pool Object ID
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <div className="text-sm font-semibold">✔ PowerShell</div>
                <p className="mt-2 text-sm text-slate-300">مفضل للـ Admins الكبار.</p>
                <div className="mt-3 rounded-xl bg-black/40 p-3">
                  <code className="text-xs text-slate-200">Az.DesktopVirtualization</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Steps */}
        <section id="deploy" className="mt-12">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
            <h3 className="text-2xl font-bold">🔥 الصورة اللي بعتهالي — شرح عملي (Deployment Flow)</h3>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {[
                {
                  title: "1️⃣ Create Host Pool",
                  items: ["Region", "Type (Personal / Pooled)", "Load balancing"],
                },
                {
                  title: "2️⃣ Create Session Host VM",
                  items: ["Size", "Image", "Network", "Disk"],
                },
                {
                  title: "3️⃣ Create Workspace",
                  items: ["عشان المستخدم يشوف الموارد"],
                },
                {
                  title: "4️⃣ Assign Application Group",
                  items: ["تربط Users بالـ Desktop أو Apps"],
                },
                {
                  title: "5️⃣ Enable Remote Desktop",
                  items: ["تفتح الوصول عبر client"],
                },
                {
                  title: "6️⃣ Connect",
                  items: ["المستخدم يسجل دخول"],
                },
              ].map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"
                >
                  <h4 className="text-sm font-semibold">{step.title}</h4>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {step.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white/40" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <p className="text-sm text-slate-200">
                خلصنا. بقى عندك <span className="font-semibold">Virtual Desktop Infrastructure</span> كامل 🔥
              </p>
            </div>
          </div>
        </section>

        {/* Key Point */}
        <section className="mt-12 pb-14">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-bold">⚠️ أهم نقطة لازم تفهمها</h3>
            <p className="mt-3 text-sm text-slate-300">
              Azure Virtual Desktop = مش مجرد Remote Desktop. ده 👉 <span className="font-semibold">Endpoint Strategy</span>.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["✔ Zero Trust", "✔ No Local Data", "✔ Work From Anywhere"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm text-slate-300">
              و AVD بيحقق ده بسهولة.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-8 text-xs text-slate-400">
          Built with React + TailwindCSS • AVD quick guide page
        </div>
      </footer>
    </div>
  );
}
