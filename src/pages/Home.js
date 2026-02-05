import Section from "../components/Section";
import { sections } from "../data/sections";


export default function Home() {
return (
<div className="min-h-screen bg-gray-50 p-10">
<h1 className="text-4xl font-bold mb-10 text-center">
MD-102 Practical Knowledge Base
</h1>


<div className="space-y-12 max-w-6xl mx-auto">
{sections.map((section, i) => (
<Section key={i} {...section} />
))}
</div>
</div>
);
}
