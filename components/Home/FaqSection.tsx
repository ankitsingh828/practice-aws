"use client";
import { faqs } from "@/constants/Data";
import { motion } from "framer-motion";

export default function FaqSection() {
  return (
    <section 
      className="bg-gradient-to-b from-white to-[#D4F1F9] py-24 px-4 my-8 rounded-3xl" 
      aria-labelledby="faq-heading"
    >
      <div className="p-8 md:p-10 container mx-auto">
        <div className="pb-7 text-center">
          <h2 className="text-[#F4373D] text-xl md:text-2xl font-semibold mb-2" id="faq-heading">
            Frequently Asked Questions
          </h2>
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#4BC5CF]">
            Everything you need to know about our services
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-b border-gray-200 pb-2"
              aria-labelledby={`faq-${index}`}
            >
              <summary
                id={`faq-${index}`}
                className="text-lg font-medium cursor-pointer group-hover:text-[#F4373D]"
                aria-expanded="false"
                aria-controls={`faq-answer-${index}`}
              >
                {faq.question}
              </summary>
              <p
                id={`faq-answer-${index}`}
                className="text-gray-600 mt-2 ml-2"
              >
                {faq.answer}
              </p>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
