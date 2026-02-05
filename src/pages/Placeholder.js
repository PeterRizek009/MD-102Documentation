import { Link } from "react-router-dom";


export default function Placeholder({ title }) {
return (
<div className="min-h-screen flex flex-col items-center justify-center gap-4">
<h1 className="text-3xl font-bold">{title}</h1>
<p className="text-gray-500">Documentation coming soon...</p>
<Link to="/" className="text-blue-600 font-semibold">
← Back Home
</Link>
</div>
);
}
