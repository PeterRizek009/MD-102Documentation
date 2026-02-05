

import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";


export default function TopicCard({ title, path }) {
return (
<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
<Link to={path}>
<Card className="rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition">
<CardContent className="p-8 flex items-center justify-center h-32">
<h3 className="text-lg font-semibold text-center">{title}</h3>
</CardContent>
</Card>
</Link>
</motion.div>
);
}
