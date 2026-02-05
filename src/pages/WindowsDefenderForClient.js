import React from "react";

// Images
import vbsDiagram from "../assets/hypervisor-virtualization-based-security-dc72cf3c.png";
import credentialGuard from "../assets/intune-credential-guard-760949ed.png";
import gpoImage from "../assets/virtualization-based-security-322010f5.png";
import securityCenter from "../assets/windows-security-center-7c72db80.png";
import defenderAV from "../assets/intune-defender-antivirus-1d2f7442.png";
import firewallImg from "../assets/intune-defender-firewall-38526165.png";
import firewallCenter from "../assets/windows-defender-settings-console-bf927211.png";
import firewallAdvanced from "../assets/windows-defender-advanced-firewall-console-53912b2b.png";

export default function WindowsDefenderGuide() {
  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-10">
          <span className="bg-black text-white px-3 py-1 rounded-full text-sm">
            Windows Security + Intune
          </span>

          <h1 className="text-4xl font-bold mt-4">
            Manage Microsoft Defender – شرح بالمصري
          </h1>

          <p className="text-gray-600 mt-2">
            Credential Guard • Defender Antivirus • Firewall • Advanced Security
          </p>
        </div>

        {/* INTRO */}
        <div className="bg-white rounded-2xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">📌 مقدمة</h2>

          <p className="text-gray-700 leading-relaxed mb-3">
            أجهزة Windows تعتبر هدف سهل لهجمات الشبكة لأن الهاكر ممكن يهاجم
            أجهزة كتير remotely. علشان كده Microsoft عملت Windows Security —
            منصة حماية متكاملة موجودة افتراضياً في النظام.
          </p>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl mt-4">
            💡 الهدف إنك تقدر تكتشف أي Malware بسرعة وتعمل Remediation قبل ما
            يتحول Incident.
          </div>

          <img
            src={securityCenter}
            alt=""
            className="rounded-xl mt-6 shadow"
          />
        </div>

        {/* Credential Guard */}
        <div className="bg-white rounded-2xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🔐 Windows Defender Credential Guard
          </h2>

          <p className="text-gray-700 mb-3">
            Credential Guard بيستخدم Virtualization Based Security (VBS)
            لعزل الـ credentials بعيد عن الـ OS.
          </p>

          <div className="bg-green-50 border border-green-200 p-4 rounded-xl mb-6">
            يمنع هجمات خطيرة زي:
            <ul className="list-disc ml-6 mt-2">
              <li>Pass-the-Hash</li>
              <li>Pass-the-Ticket</li>
            </ul>
          </div>

          <img src={vbsDiagram} className="rounded-xl shadow mb-6" />

          <h3 className="text-xl font-semibold mb-2">
            بيحمي إيه؟
          </h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>NTLM Hashes</li>
            <li>Kerberos TGT</li>
            <li>Domain Credentials</li>
          </ul>

          <img src={gpoImage} className="rounded-xl shadow my-6" />
          <img src={credentialGuard} className="rounded-xl shadow" />

          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl mt-6">
            ⚠️ فعل <b>UEFI Lock</b> لو عايز أعلى مستوى حماية.
          </div>
        </div>

        {/* Defender AV */}
        <div className="bg-white rounded-2xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🛡 Microsoft Defender Antivirus
          </h2>

          <p className="text-gray-700 mb-4">
            Defender بيحمي جهازك من Malware و Spyware و Viruses وبيشتغل حتى لو
            الجهاز VM.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-50 p-4 rounded-xl">
              <h4 className="font-bold">Quick Scan</h4>
              يفحص الأماكن المشهورة بالإصابة.
            </div>

            <div className="bg-slate-50 p-4 rounded-xl">
              <h4 className="font-bold">Full Scan</h4>
              يفحص كل ملفات الجهاز.
            </div>

            <div className="bg-slate-50 p-4 rounded-xl">
              <h4 className="font-bold">Custom</h4>
              تختار فولدر معين.
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl mb-6">
            ⭐ Best Practice: اعمل Quick scan يومياً.
          </div>

          <img src={defenderAV} className="rounded-xl shadow" />
        </div>

        {/* Firewall */}
        <div className="bg-white rounded-2xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🔥 Windows Defender Firewall
          </h2>

          <p className="text-gray-700 mb-4">
            الـ Firewall هو خط الدفاع الأول ضد أي اتصال مش مصرح بيه.
          </p>

          <img src={firewallImg} className="rounded-xl shadow mb-6"/>
          <img src={firewallCenter} className="rounded-xl shadow"/>

          <div className="bg-red-50 border border-red-200 p-4 rounded-xl mt-6">
            كل Port بتفتحه = ثغرة محتملة 😄  
            دايماً اسمح للتطبيق مش للـ Port.
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Network Profiles
          </h3>

          <ul className="list-disc ml-6 text-gray-700">
            <li>Domain — شبكة الشركة</li>
            <li>Private — شبكة موثوقة</li>
            <li>Public — أقوى حماية</li>
          </ul>
        </div>

        {/* Advanced Firewall */}
        <div className="bg-white rounded-2xl shadow p-8 mb-10">
          <h2 className="text-2xl font-bold mb-4">
            ⚙️ Firewall with Advanced Security
          </h2>

          <p className="text-gray-700 mb-4">
            هنا بقى مستوى أعلى من التحكم — تقدر تعمل Rules حسب:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-50 p-4 rounded-xl">
              ✅ Program Rules  
              <br/> حسب التطبيق
            </div>

            <div className="bg-slate-50 p-4 rounded-xl">
              ✅ Port Rules  
              <br/> TCP / UDP
            </div>

            <div className="bg-slate-50 p-4 rounded-xl">
              ✅ Predefined  
              <br/> Rules جاهزة
            </div>

            <div className="bg-slate-50 p-4 rounded-xl">
              ✅ Custom  
              <br/> تحكم كامل
            </div>
          </div>

          <img src={firewallAdvanced} className="rounded-xl shadow"/>

          <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl mt-6">
            💡 تقدر تستخدم IPsec عشان تعمل Encryption للترافيك بين السيرفرات.
          </div>
        </div>

        {/* FOOTER */}
        <div className="bg-black text-white p-6 rounded-2xl text-center">
          🔥 لو عملت Documentation بالشكل ده — انت كده بتفكر زي Enterprise Admin مش Helpdesk.
        </div>

      </div>
    </div>
  );
}
