import { useState } from "react";
import leaf from '../../assets/images/leaf3.png';
import { BadgeDollarSign, Brain, Clock3 } from "lucide-react";
import icon1 from "../../assets/images/icon1.png"
import icon2 from "../../assets/images/icon2.png"
import icon3 from "../../assets/images/icon3.png"
const challenges = [
  {
    id: 1,
    icon: icon1,
    iconBg: "bg-[#FEE2E2]",
    title: "Prohibitive Costs",
    description:
      "Professional landscape architects typically charge $2,000 to $10,000 just for a design plan, putting beautiful gardens out of reach for most.",
  },
  {
    id: 2,
    icon: icon2,
    iconBg: "bg-[#FFEDD5]",
    title: "Brain Power Overload",
    description:
      "Understanding soil types, sunlight zones, and plant pairings requires botany knowledge that most homeowners simply don't have time to learn.",
  },
  {
    id: 3,
    icon: icon3,
    iconBg: "bg-[#DBEAFE]",
    title: "Time Consuming",
    description:
      "Going back and forth with contractors, visiting nurseries, and trial-and-error planting can take months or years to get right.",
  },
];

export default function ChallengeSection() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="w-full bg-[#F8F8F8] py-20 px-4 sm:px-6 lg:px-8 relative">
        <img className="absolute left-0 top-0" src={leaf} alt="" />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-[#3A5A40] mb-3">
            The Challenge
          </p>
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
            Why is creating a beautiful garden so hard?
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`
                relative bg-white rounded-3xl p-8 cursor-default
                border border-gray-100
                transition-all duration-300 ease-out
                ${hoveredId === item.id
                  ? "shadow-2xl -translate-y-2 border-gray-200"
                  : "shadow-sm"
                }
                `}
            >
              {/* Icon */}
             
                <img className="mb-6" src={item.icon} alt="" />
             

              {/* Title */}
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#4B5563] font-semibold leading-relaxed text-sm">
                {item.description}
              </p>

              {/* Subtle bottom accent on hover */}
              <div
                className={`
                  absolute bottom-0 left-8 right-8 h-0.5 rounded-full bg-gradient-to-r from-green-300 to-emerald-400
                  transition-opacity duration-300
                  ${hoveredId === item.id ? "opacity-100" : "opacity-0"}
                  `}
              />
            </div>
          ))}
        </div>
                  <h2 className="text-4xl md:text-4xl font-bold text-center mt-12 text-gray-900 leading-tight">
                At Florle we believe that it doesn't have to be.
                  </h2>
      </div>
    </section>
  );
}