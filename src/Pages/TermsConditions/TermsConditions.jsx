import React from "react";
import bg7 from "../../assets/images/bg7.png";
import bg2 from "../../assets/images/bg2.png";
import leaf7 from "../../assets/images/leaf7.png";
import privacy from "../../assets/images/terms.png";
import { useGetTermsQuery } from "../../Api/settingsApi";

export default function TermsConditions() {
  const { data: termsData, isLoading, error } = useGetTermsQuery();

  if (isLoading) {
    return (
      <div className="w-full bg-[#F8F8F8] min-h-screen py-20 pt-40 px-4 sm:px-6 lg:px-8 relative font-rubik">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="text-xl text-gray-600">
            Loading Terms & Conditions...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-[#F8F8F8] min-h-screen py-20 pt-40 px-4 sm:px-6 lg:px-8 relative font-rubik">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="text-xl text-red-600">
            Failed to load Terms & Conditions
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen relative font-rubik bg-[#F8F8F8]">
      <div className="w-full relative overflow-hidden h-[320px] sm:h-[380px] md:h-[480px] lg:h-[720px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${privacy})` }}
        />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Terms of Service
          </h1>
        </div>
      </div>

      <div className="relative z-20 mt-10 px-4 sm:px-6 lg:px-8">
        <img src={leaf7} className="absolute left-0 -top-20" alt="Leaf" />
        <img
          src={bg2}
          className="absolute right-0 top-1/2 -translate-y-1/2"
          alt="Leaf"
        />
        <div className="max-w-7xl mx-auto p-8 sm:p-10">
          <div
            className="text-sm text-gray-700 leading-loose ck-content"
            style={{ lineHeight: "2.0" }}
            dangerouslySetInnerHTML={{ __html: termsData?.content || "" }}
          />
        </div>
      </div>
    </div>
  );
}
