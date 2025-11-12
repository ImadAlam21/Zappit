import Pricing from './pricing-section'
import TrustedBrands from './TrustedBrands'
import FriendConnect from './staranimation'
import Testimonials from './testimonials'
import FAQ from './faqs'

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="section-spacing relative w-full bg-black px-4 pt-24 pb-[550px] overflow-visible z-10">
        <div className="max-w-screen-xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-8xl font-bold text-center leading-tight text-white">
            Connect, Share, and Grow with{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-red-600 bg-clip-text text-transparent">
              Zapp
            </span>
            it
          </h1>

          <p className="mt-6 text-gray-400 text-center font-serif text-xl md:text-2xl">
            Join Zappit to build authentic connections and share your passions effortlessly.
          </p>

          {/* CTA */}
          <div className="text-center mt-10 pb-6">
            <a
              href="/waitlist"
              className="px-6 py-4 rounded-2xl bg-white font-sans text-black text-lg font-extrabold hover:bg-gray-200 transition shadow-md inline-block"
            >
              Join Waitlist
            </a>
          </div>

          {/* Store Badges */}
          <div className="mt-4 text-center">
            <p className="text-white mb-5 font-medium">App Available For</p>
            <div className="flex gap-3 justify-center">
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12"
                />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-12"
                />
              </a>
            </div>
          </div>
        </div>

        {/* PHONE MOCKUPS */}
        <div className="absolute inset-0 flex justify-center items-stretch pointer-events-none">
          {/* LEFT PHONE */}
          <div className="absolute left-[-180px] md:left-[100px] top-[55%] md:top-[58%]">
            <div className="relative">
              <img
                src="/images/phone-left.PNG"
                alt="Zappit left"
                className="hidden md:block h-[480px] lg:h-[550px] object-contain opacity-90 rotate-[-8deg]"
              />
              {/* Gradient fade effect */}
              <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-t from-black via-black/90 to-transparent" />
            </div>
          </div>

          {/* CENTER PHONE */}
          <div className="absolute bottom-[-30px] md:bottom-[-40px] md:top-[90%] z-10">
            <div className="relative">
              <img
                src="/images/phone-center.PNG"
                alt="Zappit app mockup"
                className="h-[350px] md:h-[420px] lg:h-[460px] z-10 object-contain"
              />
              <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-t from-black via-black/90 to-transparent" />
            </div>
          </div>

          {/* RIGHT PHONE */}
          <div className="absolute right-[-180px] md:right-[100px] top-[55%] md:top-[58%]">
            <div className="relative">
              <img
                src="/images/phone-right.PNG"
                alt="Zappit right"
                className="hidden md:block h-[480px] lg:h-[550px] object-contain opacity-90 rotate-[8deg]"
              />
              <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-t from-black via-black/90 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <TrustedBrands />


      {/* BENEFITS */}
      <section id="benefits" className="section-spacing scroll-mt-4 w-full mx-auto max-w-screen-xl mt-12`">
        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gray-900 to-gray-700 text-white font-bold text-2xl select-none shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <span className="text-yellow-400 text-3xl">★</span>
            Our Benefits
          </div>
        </div>

        <h2 className="text-center text-white text-6xl lg:text-4xl font-extrabold mb-8 mt-8">
          Discover <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-red-600 bg-clip-text text-transparent">
            Zapp
          </span>
          it's Benefits
        </h2>
        <p className="text-center text-gray-300 text-lg lg:text-s mb-16 max-w-2xl mx-auto">
          Unlock a world of meaningful connections, tailored experiences, and seamless social interaction.
        </p>

        <div className="relative flex flex-col lg:flex-row justify-center items-center gap-10">

          {/* Left cards */}
          <div className="flex flex-col gap-8 z-10">
            {/* Card 1 */}
            <div className="rounded-2xl bg-gray-900/70 border border-gray-700 p-6 w-[320px] flex flex-col items-start shadow-2xl">
              <img src="/icons/benefit-connection.png" alt="Connections" className="h-10 w-10 mb-5" />
              <h3 className="text-white text-xl font-semibold mb-1">Authentic Connections</h3>
              <p className="text-gray-400">Build genuine relationships with like-minded individuals.</p>
            </div>
            {/* Card 2 */}
            <div className="rounded-2xl bg-gray-900/70 border border-gray-700 p-6 w-[320px] flex flex-col items-start shadow-2xl">
              <img src="/icons/benefit-global2.png" alt="Global" className="h-10 w-10 mb-5" />
              <h3 className="text-white text-xl font-semibold mb-1">Global Reach</h3>
              <p className="text-gray-400">Connect with people across 50+ countries effortlessly.</p>
            </div>
          </div>

          {/* Center phone overlapping cards */}
          <div className="flex-shrink-0 flex items-center justify-center z-10">
            <img
              src="/images/phone-benefit.png"
              alt="Zappit Phone"
              className="h-[450px] w-auto mx-auto shadow-2xl rounded-[40px] border border-black"
            />
          </div>

          {/* Right cards */}
          <div className="flex flex-col gap-8 z-10">
            {/* Card 3 */}
            <div className="rounded-2xl bg-gray-900/70 border border-gray-700 p-6 w-[320px] flex flex-col items-start shadow-2xl">
              <img src="/icons/benefit-global.png" alt="Personalized" className="h-10 w-10 mb-5" />
              <h3 className="text-white text-xl font-semibold mb-1">Personalized Experience</h3>
              <p className="text-gray-400">Tailored content and recommendations just for you.</p>
            </div>
            {/* Card 4 */}
            <div className="rounded-2xl bg-gray-900/70 border border-gray-700 p-6 w-[320px] flex flex-col items-start shadow-2xl">
              <img src="/icons/benefit-support.png" alt="Community" className="h-10 w-10 mb-5" />
              <h3 className="text-white text-xl font-semibold mb-1">Community Support</h3>
              <p className="text-gray-400">Join thriving communities around your interests.</p>
            </div>
          </div>
        </div>




        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left card */}
            <div className="flex flex-col gap-8 z-10 mt-48"> {/* Card 1 */}
              <div className="rounded-[40px] bg-gray-900/70 border border-gray-800 p-0 w-auto flex flex-col items-start shadow-2xl">
                <img src="/images/image-bene.png" alt="Zappit Phone" className="h-[450px] w-auto mx-auto shadow-2xl rounded-[40px] border border-black z-10" />
              </div>
            </div>

            {/* Right (text) card */}
            <div className="rounded-3xl bg-gray-900/70 border border-gray-800 p-10 flex flex-col justify-center shadow-2xl min-h-[440px] mt-48">
              <h2 className="text-4xl md:text-4.5xl font-extrabold text-white mb-10">
                <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-red-600 bg-clip-text text-transparent">
                  Zapp
                </span>
                it's Advanced Capabilities
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Instant Messaging</h3>
                  <p className="text-gray-300">
                    Chat seamlessly with friends and communities.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Story Sharing</h3>
                  <p className="text-gray-300">
                    Share life moments through photos and videos.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Customizable Profiles</h3>
                  <p className="text-gray-300">
                    Personalize your profile with themes and layouts.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Community Groups</h3>
                  <p className="text-gray-300">
                    Join or create groups around shared interests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* FEATURES */}
      <section id="features" className="section-spacing scroll-mt-4 w-full mx-auto max-w-screen-xl">
        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gray-900 to-gray-700 text-white font-bold text-2xl select-none shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <span className="text-yellow-400 text-3xl">★</span>
            Features
          </div>
        </div>
        <FriendConnect />


        <div className="grid grid-cols-3 md:grid-cols-3 gap-0 z-10 items-center justify-items-center mt-12 mb-12 mx-auto">
          <div className="rounded-3xl bg-gray-900/70 border border-gray-700 p-2 w-[320px] flex flex-col items-start shadow-2xl mb-12">
            <div className="w-100 h-100 overflow-hidden rounded-3xl mb-1">
              <img src="/images/1.png" alt="Connections" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-white text-xl font-semibold ml-2">Customizable Profiles</h3>
            <p className="text-gray-400 ml-2">Personalize your profile with themes, layouts, and settings.</p>
          </div>
          <div className="rounded-3xl bg-gray-900/70 border border-gray-700 p-2 w-[320px] flex flex-col items-start shadow-2xl mb-12">
            <div className="w-100 h-100 overflow-hidden rounded-3xl mb-1">
              <img src="/images/2.png" alt="Connections" className="w-full h-full object-cover" />
            </div>            <h3 className="text-white text-xl font-semibold ml-2">Verified Users</h3>
            <p className="text-gray-400 ml-2">Connect confidently with verified, authentic users on the platform.</p>
          </div>
          <div className="rounded-3xl bg-gray-900/70 border border-gray-700 p-2 w-[320px] flex flex-col items-start shadow-2xl mb-12">
            <div className="w-100 h-100 overflow-hidden rounded-3xl mb-1">
              <img src="/images/3.png" alt="Connections" className="w-full h-full object-cover" />
            </div>            <h3 className="text-white text-xl font-semibold ml-2">Smart Notifications</h3>
            <p className="text-gray-400 ml-2">Get real-time alerts for the updates that matter to you.</p>
          </div>
          <div className="rounded-3xl bg-gray-900/70 border border-gray-700 p-2 w-[320px] flex flex-col items-start shadow-2xl mb-12">
            <div className="w-100 h-100 overflow-hidden rounded-3xl mb-1">
              <img src="/images/4.png" alt="Connections" className="w-full h-full object-cover" />
            </div>            <h3 className="text-white text-xl font-semibold ml-2">Account Insights</h3>
            <p className="text-gray-400 ml-2">Track your engagement and performance with detailed analytics.</p>
          </div>
          <div className="rounded-3xl bg-gray-900/70 border border-gray-700 p-2 w-[320px] flex flex-col items-start shadow-2xl mb-12">
            <div className="w-100 h-100 overflow-hidden rounded-3xl mb-1">
              <img src="/images/5.png" alt="Connections" className="w-full h-full object-cover" />
            </div>            <h3 className="text-white text-xl font-semibold ml-2">Easy Messaging</h3>
            <p className="text-gray-400 ml-2">Chat seamlessly with friends and groups through an intuitive interface.</p>
          </div>
          <div className="rounded-3xl bg-gray-900/70 border border-gray-700 p-2 w-[320px] flex flex-col items-start shadow-2xl mb-12">
            <div className="w-100 h-100 overflow-hidden rounded-3xl mb-1">
              <img src="/images/6.png" alt="Connections" className="w-full h-full object-cover" />
            </div>            <h3 className="text-white text-xl font-semibold ml-2">Post Scheduling</h3>
            <p className="text-gray-400 ml-2">Plan and schedule posts to share content at the perfect time.</p>
          </div>

        </div>


      </section>

      {/* PRICING */}
      <section id="pricing" className="section-spacing scroll-mt-4 w-full mx-auto max-w-screen-xl ">
        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gray-900 to-gray-700 text-white font-bold text-2xl select-none shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <span className="text-yellow-400 text-3xl">🏷️</span>
            Our Pricing
          </div>
        </div>
        <Pricing />
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section-spacing scroll-mt-4 w-full mx-auto max-w-screen-xl">
        <Testimonials/>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-spacing scroll-mt-4 w-full mx-auto max-w-screen-xl">
        <FAQ/>
      </section>
    </>
  )
}
