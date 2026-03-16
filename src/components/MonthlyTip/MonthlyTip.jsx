import tipImage from '../../assets/images/tip.png';

export default function MonthlyTip() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-8 md:p-12">
        <div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#0D542B] mb-8 lg:leading-snug">
            Monthly Plant <br /> Care Tip
          </h2>

          <ul className="space-y-4 text-[#1F3D2F] text-base sm:text-lg">
            <li className="flex gap-3">
              <span className="text-2xl">🌱</span>
              <span>Check the soil moisture before watering.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">🌱</span>
              <span>Water the plant if the top 1–2 inches of soil feels dry.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">🌱</span>
              <span>If the soil is still moist, wait before watering.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">🌱</span>
              <span>This helps prevent overwatering and keeps plants healthy.</span>
            </li>
          </ul>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-md rounded-3xl overflow-hidden">
            <img
              src={tipImage}
              alt="Monthly plant care tip"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
