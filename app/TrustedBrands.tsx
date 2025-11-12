// components/TrustedBrands.tsx
export default function TrustedBrands() {
    const companies = [
        { name: 'Google', logo: '/logos/google.svg' },
        { name: 'Apple', logo: '/logos/apple.svg' },
        { name: 'Microsoft', logo: '/logos/microsoft.svg' },
        { name: 'Amazon', logo: '/logos/amazon.svg' },
        { name: 'Facebook', logo: '/logos/facebook.svg' },
        { name: 'Netflix', logo: '/logos/netflix.svg' },
        { name: 'Tesla', logo: '/logos/tesla.svg' },
        { name: 'Spotify', logo: '/logos/spotify.svg' },
        { name: 'Airbnb', logo: '/logos/airbnb.svg' },
        { name: 'Slack', logo: '/logos/slack.svg' }
    ];

    return (
        <section className="bg-black py-12 mt-96">
            <div className="max-w-screen-xl mx-auto">
                <h3 className="text-white text-center text-xl font-thin mb-8">
                    Trusted by 1000+ businesses across the world
                </h3>

                {/* Scrolling Container */}
                <div className="relative mx-auto max-w-[48rem] overflow-hidden">
                    {/* Left fading overlay */}
                    <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />

                    {/* Right fading overlay */}
                    <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-black via-black/70 to-transparent z-10" />



                    {/* Scrolling Row */}
                    <div className="flex animate-infinite-scroll whitespace-nowrap gap-2">
                        {companies.map(({ name, logo }) => (
                            <div key={name} className="flex items-center justify-center min-w-[150px]">
                                <img
                                    src={logo}
                                    alt={name}
                                    className="h-16 md:h-20 object-contain opacity-90 hover:opacity-100 transition"
                                />
                            </div>
                        ))}

                        {/* Duplicate for infinite scroll */}
                        {companies.map(({ name, logo }) => (
                            <div key={name + '-duplicate'} className="flex items-center justify-center min-w-[150px]">
                                <img
                                    src={logo}
                                    alt={name}
                                    className="h-16 md:h-20 object-contain opacity-90 hover:opacity-100 transition"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-white space-y-12">
                    <img src="/images/logo-image.png" alt="Appit Logo" className="mx-auto h-24 mt-96" />
                    <p className="mt-12 text-4xl font-bold italic text-center">Empowering authentic connections for a vibrant social experience.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 text-center max-w-2xl mx-auto sm:divide-x sm:divide-white/20">
                        <div className="px-6">
                            <p className="text-5xl font-extrabold">500K<span className="text-4xl">+</span></p>
                            <p className="mt-1 text-lg font-light">Shared moments and stories every month</p>
                        </div>

                        <div className="px-6">
                            <p className="text-5xl font-extrabold">200K<span className="text-4xl">+</span></p>
                            <p className="mt-1 text-lg font-light">Communities thriving across diverse interests</p>
                        </div>

                        <div className="px-6">
                            <p className="text-5xl font-extrabold">50<span className="text-4xl">+</span></p>
                            <p className="mt-1 text-lg font-light">Countries where Appit is growing strong</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}
