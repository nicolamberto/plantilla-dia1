'use client'

import Section from "@/components/ui/Section";
import { faqs, schema } from "@/lib/data";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { IoMdArrowDropup } from "react-icons/io";

export default function FAQs() {
  const faqLd = schema.faq(faqs);

  const [activeQuestion, setActiveQuestion] = useState(null);

  return (
    <Section id="faqs">
      <div className="space-y-6 ">
        <h2 className="text-3xl sm:text-5xl md:text-3xl xl:text-5xl font-section-title">{faqs.title}</h2>
        <div className="">
          {
            faqs.items.map((item) => (
              <div
                onClick={() => setActiveQuestion(activeQuestion === item.id ? null : item.id)}

                key={item.id}
                className=" flex flex-col my-2 justify-center items-start px-4 py-3 rounded-[14px] md:rounded-[10px] shadow-sm cursor-pointer ">
                <div className="w-full flex justify-between items-center">
                  <p className='text-[17px] md:text-[18px] lg:text-[20px] pb-4'>{item.q}</p>
                  <motion.div
                    animate={{ rotate: activeQuestion === item.id ? 0 : 180 }}
                    className="relative">
                    <IoMdArrowDropup className='text-[25px]' />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {
                    activeQuestion === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto', transition: { opacity: { duration: 0.1, delay: 0.1 }, height: { duration: 0.2, } } }}
                        exit={{ opacity: 0, height: 0, transition: { opacity: { duration: 0.1 }, height: { duration: 0.2, delay: 0 } } }} // opacidad rápida
                        className='text-[#112737]/60 w-full'>
                        <p className='text-[14px] md:text-[17px] lg:text-[20px]'>
                          {item.a}
                        </p>
                      </motion.div>
                    )
                  }
                </AnimatePresence>

              </div>
            ))
          }

        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </Section>
  );
}
