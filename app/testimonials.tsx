'use client'
import { useRef, useState } from "react"

// Example testimonials
const testimonials = [
  {
    photo: "/people/user1.jpg",
    name: "David Wilson",
    company: "Founder at Boom",
    review: "Zappit’s features are fantastic for both meeting new people and staying connected with existing friends. It’s a must-have app."
  },
  {
    photo: "/people/user2.jpg",
    name: "John Doe",
    company: "Founder at Nova",
    review: "The intuitive design and smart features of Zappit made it easy to find meaningful connections. It's become my go-to app."
  },
  {
    photo: "/people/user3.jpg",
    name: "John Pitt",
    company: "Founder at Apex",
    review: "I love how Zappit helps me stay in touch with friends and meet new people. The app is user-friendly and effective."
  },
  {
    photo: "/people/user4.jpg",
    name: "Priya Kumar",
    company: "Community Lead",
    review: "Every update brings something new—I’ve found so many interesting communities and events thanks to Zappit."
  },
  {
    photo: "/people/user5.jpg",
    name: "Sara Lee",
    company: "Tech Writer",
    review: "The swipe navigation and smart notifications make Zappit far better than any other social app I’ve used."
  },
  {
    photo: "/people/user6.jpg",
    name: "Rohit Sen",
    company: "Entrepreneur",
    review: "I run several groups and the management tools in Zappit have saved me so much time. Excellent support too!"
  },
  {
    photo: "/people/user7.jpg",
    name: "Emily Carter",
    company: "Product Designer",
    review: "It’s beautiful, intuitive, and social. Zappit lets me make lasting connections and share my ideas with ease."
  },
  {
    photo: "/people/user8.jpg",
    name: "Michael Lee",
    company: "Startup Advisor",
    review: "The ability to customize my profile and manage privacy sets Zappit apart. I recommend it for both networking and fun."
  },
];

export default function Testimonials() {
  // Scroll control for pause/resume
  const marqueeRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  // Swiping
  const [dragStart, setDragStart] = useState<number|null>(null)

  // Handle drag/swipe
  function handlePointerDown(e: React.PointerEvent) {
    setPaused(true)
    setDragStart(e.clientX)
  }
  function handlePointerUpOrLeave(e: React.PointerEvent) {
    setPaused(false)
    setDragStart(null)
  }
  function handlePointerMove(e: React.PointerEvent) {
    if (dragStart && marqueeRef.current) {
      marqueeRef.current.scrollLeft -= (e.clientX - dragStart)
      setDragStart(e.clientX)
    }
  }

  return (
    <section className="py-20 bg-black">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-4">Our Testimonials</h2>
        <p className="text-center text-gray-400 mb-9 max-w-2xl mx-auto">
          See how <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-red-600 bg-clip-text text-transparent">
              Zapp
            </span>
            it has transformed users' social experiences through their own words.
        </p>

        {/*Marquee*/}
        <div
          className="relative w-full overflow-x-hidden select-none"
          ref={marqueeRef}
        >
          <div
            className={`flex gap-8 transition-transform ease-linear will-change-transform ${paused ? '' : 'animate-marquee'}`}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUpOrLeave}
            onPointerLeave={handlePointerUpOrLeave}
            onPointerMove={handlePointerMove}
            style={{cursor: paused ? 'grab' : 'pointer'}}
            tabIndex={0}
          >
            {/* Repeat testimonials twice for infinite loop effect */}
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="min-w-[350px] max-w-[350px] bg-gray-900 rounded-3xl border border-gray-800 shadow-xl flex-shrink-0 flex flex-col items-center p-7"
              >
                <img src={t.photo} alt={t.name} className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-indigo-400" />
                <p className="text-gray-100 text-base mb-3 text-center font-medium">"{t.review}"</p>
                <div className="text-white font-bold text-lg">{t.name}</div>
                <div className="text-indigo-400 text-sm">{t.company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
