function OnPremiseDeployment() {
return (
<div className="min-h-screen bg-white p-10">
<div className="max-w-4xl mx-auto">
<Link to="/" className="text-blue-600 font-semibold mb-6 inline-block">
← Back to Dashboard
</Link>


<h1 className="text-3xl font-bold mb-10">On-Premise Deployment (MDT, USMT, SCCM)</h1>


<div className="space-y-12 text-gray-700 leading-relaxed">


{/* MDT */}
<section>
<h2 className="text-2xl font-bold">🔹 MDT – Microsoft Deployment Toolkit</h2>


<div className="mt-4 space-y-4">
<div>
<h3 className="font-semibold text-lg">📌 هو إيه؟</h3>
<p>
أداة مجانية من Microsoft بتستخدمها علشان تنزّل Windows، تعمل Image،
تثبّت Drivers، تثبّت Programs، وتنفّذ Scripts.
<br />
يعني ببساطة: نشر نظام تشغيل (OS Deployment).
</p>
</div>


<div>
<h3 className="font-semibold text-lg">📌 بيشتغل إزاي؟</h3>
<ul className="list-disc ml-6">
<li>Lite Touch Installation (LTI)</li>
<li>لازم حد يضغط Next شوية</li>
<li>بيشتغل غالبًا مع ISO / USB / PXE (مع WDS)</li>
</ul>
</div>


<div>
<h3 className="font-semibold text-lg">📌 يستخدم في إيه؟</h3>
<ul className="list-disc ml-6">
<li>شركة On-premise</li>
<li>مفيش Cloud</li>
<li>مفيش Intune</li>
<li>عايز Image موحد لكل الأجهزة</li>
</ul>
</div>


<div>
<h3 className="font-semibold text-lg">📌 مثال واقعي</h3>
<p>
شركة فيها 50 جهاز Desktop عايزين Windows + Office + Chrome
ومفيش Intune → MDT هو الاختيار الصح ✅
</p>
</div>


<div className="grid md:grid-cols-2 gap-6">
<div>
<h3 className="font-semibold text-lg">📌 مميزاته</h3>
<ul className="list-disc ml-6">
<li>✔ مجاني</li>
<li>✔ بسيط</li>
<li>✔ ممتاز للـ Imaging</li>
</ul>
</div>


}
