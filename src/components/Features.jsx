import { Smartphone, Users, Target, Image, Sparkles, FileText } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, consectetur.",
  },
  {
    icon: Users,
    title: "Social Proof",
    description:
      "Lorem ipsum dolor sit amet consectetur. Natus consectetur, odio ea accusamus aperiam.",
  },
  {
    icon: Target,
    title: "Targeted Content",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ea accusamus aperiam.",
  },
  {
    icon: Image,
    title: "Strong Visuals",
    description:
      "Lorem elit. A odio velit cum aliquam. Natus consectetur dolores, odio ea accusamus aperiam.",
  },
  {
    icon: Sparkles,
    title: "Clear CTA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing. Odio ea accusamus consectetur.",
  },
  {
    icon: FileText,
    title: "Clear Headline",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur.",
  },
];

export default function Features() {
  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto text-center px-8">
        <p className="text-green-500 font-semibold uppercase text-lg drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]">
          Features
        </p>
        <h2 className="text-4xl font-extrabold mt-3">What Makes Us Different</h2>
        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat,
          odit similique quasi sint reiciendis quidem iure veritatis optio facere tenetur.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-20">
          {features.map(({ icon: Icon, title, description }, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 group"
            >
              <div className="bg-green-600/20 p-6 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Icon className="w-12 h-12 text-green-500 drop-shadow-[0_0_12px_rgba(34,197,94,0.8)]" />
              </div>
              <h3 className="text-2xl font-semibold mt-6">{title}</h3>
              <p className="text-gray-400 mt-3 text-lg">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
