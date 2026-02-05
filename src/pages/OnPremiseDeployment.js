function OnPremiseDeployment() {
return (
<div className="min-h-screen bg-white p-10">
<div className="max-w-4xl mx-auto">
<Link to="/" className="text-blue-600 font-semibold mb-6 inline-block">
← Back to Dashboard
</Link>


<h1 className="text-3xl font-bold mb-2">On-Premise Deployment</h1>
<p className="text-gray-600 mb-10">
شرح عملي (MDT / USMT / SCCM) — مكتوب كأنه مقال مرتب تقدر تراجعه بسرعة.
</p>


<div className="space-y-12 text-gray-700 leading-relaxed">
{/* ===================== MDT ===================== */}
<section className="space-y-6">
<h2 className="text-2xl font-bold">🔹 MDT – Microsoft Deployment Toolkit</h2>


<div className="space-y-3">
<h3 className="font-semibold text-lg">📌 هو إيه؟</h3>
<p>
MDT أداة مجانية من Microsoft بتستخدمها علشان تعمل OS Deployment
بشكل سريع ومنظّم. تقدر من خلالها:
</p>
<ul className="list-disc ml-6 space-y-1">
<li>تنزّل Windows</li>
<li>تعمل Image</li>
<li>تثبّت Drivers</li>
<li>تثبّت Programs</li>
<li>تنفّذ Scripts</li>
</ul>
<p className="mt-2">يعني: نشر نظام تشغيل (OS Deployment).</p>
</div>


<div className="space-y-3">
<h3 className="font-semibold text-lg">📌 بيشتغل إزاي؟</h3>
<p>
MDT عادةً بيعتمد على <strong>Lite Touch Installation (LTI)</strong>
— يعني لازم حد يعمل شوية خطوات بسيطة (Next → Next).
</p>
<p>وغالبًا بيشتغل مع:</p>
<ul className="list-disc ml-6 space-y-1">
<li>ISO</li>
<li>USB</li>
<li>PXE (مع WDS)</li>
</ul>
</div>


<div className="space-y-3">
<h3 className="font-semibold text-lg">📌 يستخدم في إيه؟</h3>
<ul className="list-disc ml-6 space-y-1">
<li>شركة On-premise</li>
<li>مفيش Cloud</li>
<li>مفيش Intune</li>
<li>عايز Image موحد لكل الأجهزة</li>
</ul>
</div>


<div className="space-y-3">
<h3 className="font-semibold text-lg">📌 مثال واقعي</h3>
<p>
شركة فيها 50 جهاز Desktop، عايزين Windows + Office + Chrome، ومفيش
Intune → <strong>MDT هو الاختيار الصح</strong> ✅
</p>
</div>


<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<h3 className="font-semibold text-lg">📌 مميزاته</h3>
<ul className="list-disc ml-6 space-y-1">
}
