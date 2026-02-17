export default function StatsBanner() {
  const stats = [
    { value: "50k+", label: "Gardens Designed" },
    { value: "1M+",  label: "Plants Suggested" },
    { value: "$5M+", label: "Saved by Users" },
    { value: "12",   label: "Countries Active" },
  ];

  return (
    <section className="w-full bg-gradient-to-l from-[#1F2D16] to-[#3A5A40] py-10 xl:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center px-8 py-4 gap-1"
          >
            <span className="text-3xl md:text-4xl xl:text-5xl font-bold text-white tracking-tight mb-4">
              {stat.value}
            </span>
            <span className="text-xs md:text-sm tracking-[0.15em] uppercase text-[#A3B18A] text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}