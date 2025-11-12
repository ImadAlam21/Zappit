'use client'
import { useState } from "react"

const faqs = [
  {
    question: "How do I create an account?",
    answer: "Simply download Appit from your app store or access it via web, then follow the sign-up prompts to set up your profile in minutes."
  },
  {
    question: "Can I customize my profile?",
    answer: "Yes! You can choose profile pictures, themes, bio, and privacy settings to personalize your Appit experience."
  },
  {
    question: "Is Appit available on all devices?",
    answer: "Appit is available on iOS, Android, and through any modern web browser, so you can connect wherever you are."
  },
  {
    question: "What privacy controls are available?",
    answer: "You control your visibility, who can contact you, and what information is shared. You can also adjust notification preferences."
  },
  {
    question: "How does the smart matching work?",
    answer: "Appit uses preferences and shared interests to suggest new friends and communities tailored just for you."
  },
  {
    question: "Can I share multimedia content?",
    answer: "Yes! Share photos, videos, links, and more either privately or in your favorite communities."
  }
]

// FAQ Accordion
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="py-20 bg-black">
      <div className="max-w-2xl mx-auto px-2">
        <h2 className="text-white text-4xl md:text-5xl font-extrabold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={f.question}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between bg-gray-900 text-white rounded-2xl px-6 py-5 text-left font-semibold text-lg hover:bg-gray-800 transition"
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span>{f.question}</span>
                <span className="ml-3 inline-flex items-center justify-center w-7 h-7 rounded-full bg-black border border-gray-700 text-2xl">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div
                  id={`faq-answer-${i}`}
                  className="bg-gray-950 text-gray-300 rounded-xl px-6 py-4 mt-2 mx-2"
                >
                  {f.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
