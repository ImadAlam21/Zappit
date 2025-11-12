'use client'
import { useState } from 'react'

const plans = [
  {
    name: "Free Plan",
    monthly: "$0",
    yearly: "$0",
    desc: "Basic access with essential features.",
    link: "https://appit.framer.website/waitlist",
    features: [
      { text: "Create and customize profile", always: true },
      { text: "Connect with other users", always: true },
      { text: "Send and receive messages", always: false },
      { text: "Access to basic features", always: true },
      { text: "View and share content", always: false },
      { text: "Receive notifications and updates", always: true },
    ]
  },
  {
    name: "Premium Plan",
    monthly: "$10",
    yearly: "$96",
    desc: "Enhanced features for new experience.",
    link: "https://appit.framer.website/waitlist",
    features: [
      { text: "Create and customize profile", always: true },
      { text: "Connect with other users", always: true },
      { text: "Send and receive messages", always: true },
      { text: "Access to basic features", always: true },
      { text: "View and share content", always: true },
      { text: "Receive notifications and updates", always: true },
    ]
  }
]

function TickIcon() {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 mr-2 rounded-full bg-green-500 text-white text-sm font-bold">
      &#10003;
    </span>
  )
}

export default function PricingSimple() {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      {/* Switch */}
      <div className="flex justify-center mb-8">
        <div className="flex rounded-full border border-gray-700 bg-black p-1 space-x-1">
          <button
            onClick={() => setYearly(false)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              !yearly ? "bg-black text-white" : "text-gray-400"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              yearly ? "bg-black text-white" : "text-gray-400"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center">
        {plans.map((plan, idx) => (
          <div key={plan.name} className="flex-1 bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col relative">
            {idx === 1 && (
              <span className="absolute top-4 right-4 bg-gray-800 text-gray-200 text-xs px-3 py-1 rounded-full">
                Save 20% on Yearly
              </span>
            )}
            <h3 className="text-xl font-bold mb-1 text-white">{plan.name}</h3>
            <div className="text-5xl font-extrabold text-white mb-1">
              {yearly ? plan.yearly : plan.monthly}
              <span className="text-lg font-medium text-gray-400">
                /per {yearly ? "year" : "month"}
              </span>
            </div>
            <div className="text-gray-400 mb-5">{plan.desc}</div>
            <a
              href={plan.link}
              className="font-semibold bg-white text-black rounded-xl py-3 mb-6 mt-2 transition hover:bg-gray-100 text-center"
            >
              Get Started
            </a>
            <div className="bg-black rounded-xl p-6 mt-auto">
              <h4 className="text-lg font-bold text-white mb-3">What's Included</h4>
              <ul className="flex flex-col gap-3">
                {plan.features.map((f, i) =>
                  <li key={f.text} className="flex items-center text-base">
                    {f.always || (idx === 1 /* premium plan */)
                      ? <TickIcon />
                      : <span className="inline-flex items-center justify-center w-5 h-5 mr-2 rounded-full bg-gray-700 text-gray-400 text-sm font-bold">✗</span>
                    }
                    {f.always || (idx === 1)
                      ? <span>{f.text}</span>
                      : <span className="line-through text-gray-400">{f.text}</span>
                    }
                  </li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
