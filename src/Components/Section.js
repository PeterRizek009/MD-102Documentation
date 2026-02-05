import TopicCard from "./TopicCard";


export default function Section({ category, topics }) {
return (
<div>
<h2 className="text-2xl font-semibold mb-4">{category}</h2>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{topics.map((topic, index) => (
<TopicCard key={index} {...topic} />
))}
</div>
</div>
);
}
