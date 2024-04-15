import React, { useState } from "react";
import Image from "next/image";
// import { ImageUtils } from "@/utils/imageUtils";
// import { Faq_Data } from "@/utils/faqData";
import { ImageUtils } from "../../utils/imageUtils";
import { Faq_Data } from "../../utils/faqData";
// import { Faq_Data } from "@/pages/faq/faqData";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12" id="faq">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">
            Institude FAQ
          </p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>
        <div className="basis-1/2">
          {Faq_Data.length > 0 &&
            Faq_Data.map((data, index) => (
              <div key={index}>
                <button
                  className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="flex-1 text-base-content text-black-200">
                    {data.question}
                  </span>
                  {
                      activeIndex === index ? (
                        <svg
                        className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                          className="transform origin-center rotate-[45deg] transition duration-200 ease-out false"
                        ></rect>
                        <rect
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                          className="transform origin-center rotate-[135deg] transition duration-200 ease-out false"
                        ></rect>
                      </svg>
                      ) : (
                        <svg
                        className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        
                        <rect
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                          className="transform origin-center transition duration-200 ease-out false"
                        ></rect>
                        <rect
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                          className="transform origin-center rotate-90 transition duration-200 ease-out false"
                        ></rect>
                      </svg>
                      )
                    }
                 
                </button>
                {activeIndex === index && (
                  <div
                    className="transition-all duration-300 ease-in-out "
                    // style={{
                    //   transition: "max-height 0.3s ease-in-out 0s",
                    // }}
                  >
                    <div className="pb-5 leading-relaxed">
                      <div className="space-y-2 leading-relaxed text-black-500">
                        {data.answer}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

        </div>
      </div>
    </>
  );
}

export default Faq;
