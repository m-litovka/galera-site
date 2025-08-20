import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How much time does the development take?",
    answer: "Development time varies depending on the complexity and scope of your project. Typically, MVP development takes 3-6 months, while full-featured applications can take 6-12 months."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, proven technologies including React, Node.js, Python, Swift, Kotlin, and cloud platforms like AWS and Google Cloud to ensure scalability and performance."
  },
  {
    question: "What is the cost of your services?",
    answer: "Our pricing is project-based and depends on complexity, features, and timeline. We provide detailed estimates after understanding your requirements during our consultation."
  },
  {
    question: "What about the payment process?",
    answer: "We typically work with milestone-based payments, with 30% upfront, 40% at key milestones, and 30% upon completion. We're flexible and can discuss payment terms that work for your business."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-500" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
          <br></br>
        <p className="text-lg text-gray-600">
            <center>Galera IT is a mobile and web software development team, based in Limassol, Cyprus and Kyiv, Ukraine.</center>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;