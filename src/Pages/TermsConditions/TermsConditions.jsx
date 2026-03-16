import React from "react";
import bg7 from "../../assets/images/bg7.png";
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
    <div className="w-full bg-[#F8F8F8] min-h-screen py-20 pt-40 px-4 sm:px-6 lg:px-8 relative font-rubik">
      <img src={bg7} alt="" className="absolute top-40 left-0" />
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-2xl lg:text-3xl font-semibold text-[#1F2D16] text-center mb-16 underline decoration-transparent">
          FLORLE LLC Terms of Use
        </h1>

        <div className="p-8">
          <div
            className="text-sm text-gray-700 leading-relaxed ck-content"
            dangerouslySetInnerHTML={{ __html: termsData?.content || "" }}
          />
        </div>
      </div>
    </div>
  );
}
