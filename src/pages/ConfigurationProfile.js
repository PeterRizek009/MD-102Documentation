export default function ConfigurationProfile() {
return (
<div className="min-h-screen bg-white p-10">
<Link to="/" className="text-blue-600 font-semibold mb-6 inline-block">
← Back to Dashboard
</Link>


<h1 className="text-3xl font-bold mb-6">Configuration Profiles</h1>


<div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
<p>
Configuration Profiles allow IT administrators to predefine device
settings so that every enrolled device automatically follows company
standards without manual configuration.
</p>


<div>
<h2 className="text-2xl font-semibold mb-2">Why They Matter</h2>
<ul className="list-disc ml-6 space-y-2">
<li>Prevent misconfigured devices from accessing company resources.</li>
<li>Enforce encryption, firewall, and password policies.</li>
<li>Create a consistent user experience across all endpoints.</li>
<li>Reduce IT operational workload.</li>
</ul>
</div>


<div>
<h2 className="text-2xl font-semibold mb-2">Assignment Strategy</h2>
<p>
Always assign profiles to <strong>User Groups</strong> and use
<strong> Filters</strong> for device targeting.
</p>
</div>


<div>
<h2 className="text-2xl font-semibold mb-2">Real World Scenario</h2>
<p>
A company with 300 employees enforces BitLocker, firewall rules, and
password complexity automatically once devices enroll via Autopilot.
</p>
</div>
</div>
</div>
);
}
