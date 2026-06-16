import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="bg-[#F8F4EE] min-h-screen animate-fadeIn">

            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-32 px-6">

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                    <div>

                        <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-5">
                            Culture • Heritage • Storytelling
                        </p>

                        <h1 className="text-6xl lg:text-7xl font-bold text-[#2F4F3E] leading-tight mb-6">
                            Culture,
                            <br />
                            But Different.
                        </h1>

                        <p className="text-xl text-gray-700 leading-relaxed mb-10">
                            Zed Speak is a cultural experiences, storytelling and heritage ecosystem
                            dedicated to helping people experience, preserve and reimagine Zambian culture
                            in meaningful and contemporary ways.
                        </p>

                        <div className="flex flex-wrap gap-4">

                            <button className="bg-[#7A4B2A] text-white px-8 py-4 rounded-full">
                                Explore Experiences
                            </button>

                            <button className="border border-[#7A4B2A] text-[#7A4B2A] px-8 py-4 rounded-full">
                                Join Community
                            </button>

                        </div>

                    </div>

                    <div>

                        <img
                            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
                            alt="community"
                            className="rounded-[40px] shadow-2xl"
                        />

                    </div>

                </div>

            </section>

            {/* About Preview */}

            <section className="py-24 px-6 bg-white">

                <div className="max-w-6xl mx-auto text-center">

                    <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4">
                        About Zed Speak
                    </p>

                    <h2 className="text-5xl font-bold text-[#2F4F3E] mb-6">
                        Reimagining Culture For Today
                    </h2>

                    <p className="max-w-3xl mx-auto text-lg text-gray-700">
                        We believe culture is not something static.
                        It is lived, shared, questioned and continuously evolving.
                        Through experiences, storytelling and community engagement,
                        we help people connect more deeply with identity, belonging
                        and heritage.
                    </p>

                </div>

            </section>

            {/* Experiences */}

            <section className="py-24 px-6">

                <div className="max-w-7xl mx-auto">

                    <h2 className="text-5xl font-bold text-[#2F4F3E] mb-12">
                        Featured Experiences
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {[
                            "The Zed Table",
                            "Culture Nights",
                            "Cook & Connect",
                            "Echoes Of Home"
                        ].map((item) => (
                            <div
                                key={item}
                                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
                            >
                                <h3 className="text-2xl font-semibold mb-4">
                                    {item}
                                </h3>

                                <p className="text-gray-600">
                                    Bringing people together through culture,
                                    stories and meaningful experiences.
                                </p>
                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* Impact */}

            <section className="bg-[#2F4F3E] text-white py-24 px-6">

                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-5xl font-bold mb-8">
                        Cultural Impact & Programmes
                    </h2>

                    <p className="max-w-3xl mx-auto text-white/80 text-lg">
                        We create programmes focused on heritage, identity,
                        storytelling, belonging, language preservation and future culture.
                    </p>

                </div>

            </section>

            {/* CTA */}

            <section className="py-24 px-6">

                <div className="max-w-5xl mx-auto bg-[#7A4B2A] rounded-[40px] p-16 text-center text-white">

                    <h2 className="text-5xl font-bold mb-6">
                        Join The Conversation
                    </h2>

                    <p className="text-xl mb-10 text-white/80">
                        Become part of a growing community exploring culture,
                        identity and belonging.
                    </p>

                    <button className="bg-white text-[#7A4B2A] px-8 py-4 rounded-full font-semibold">
                        Join Community
                    </button>

                </div>

            </section>

            <Footer />

        </div>
    );
}