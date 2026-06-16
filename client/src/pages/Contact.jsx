import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <div className="bg-[#F8F4EE] min-h-screen animate-fadeIn">

            <Navbar />

            {/* Hero */}
            <section className="pt-36 pb-20 px-6 text-center">

                <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4">
                    Get In Touch
                </p>

                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                    Let's Start A Conversation
                </h1>

                <p className="max-w-3xl mx-auto text-xl text-black/70">
                    Whether you are interested in partnering, sharing a story,
                    attending an experience, or simply learning more about
                    Zed Speak, we would love to hear from you.
                </p>

            </section>


            {/* Contact Section */}
            <section className="px-6 pb-24">

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

                    {/* Information */}
                    <div>

                        <h2 className="text-4xl font-bold mb-8">
                            Reach Out To Us
                        </h2>

                        <div className="space-y-8">

                            <div className="bg-white p-6 rounded-3xl shadow-sm">

                                <h3 className="text-2xl font-semibold mb-3">
                                    📧 Email
                                </h3>

                                <p className="text-black/70">
                                    hello@zedspeak.com
                                </p>

                            </div>


                            <div className="bg-white p-6 rounded-3xl shadow-sm">

                                <h3 className="text-2xl font-semibold mb-3">
                                    📍 Location
                                </h3>

                                <p className="text-black/70">
                                    Lusaka, Zambia
                                </p>

                            </div>


                            <div className="bg-white p-6 rounded-3xl shadow-sm">

                                <h3 className="text-2xl font-semibold mb-3">
                                    🤝 Partnerships
                                </h3>

                                <p className="text-black/70">
                                    We welcome brands, organisations,
                                    institutions and creatives who want to
                                    collaborate with us.
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* Contact Form */}
                    <div className="bg-white rounded-[40px] p-10 shadow-sm">

                        <h2 className="text-3xl font-bold mb-3">
                            Send A Message
                        </h2>

                        <p className="text-black/60 mb-8">
                            We usually respond within 24–48 hours.
                        </p>


                        <form className="space-y-5">

                            <div>
                                <label className="block mb-2 font-medium">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#7A4B2A]"
                                />
                            </div>


                            <div>
                                <label className="block mb-2 font-medium">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#7A4B2A]"
                                />
                            </div>


                            <div>
                                <label className="block mb-2 font-medium">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    placeholder="What would you like to discuss?"
                                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#7A4B2A]"
                                />
                            </div>


                            <div>
                                <label className="block mb-2 font-medium">
                                    Message
                                </label>

                                <textarea
                                    rows="5"
                                    placeholder="Write your message here..."
                                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none resize-none focus:border-[#7A4B2A]"
                                ></textarea>
                            </div>


                            <button
                                type="submit"
                                className="w-full bg-[#7A4B2A] text-white py-4 rounded-full font-semibold hover:opacity-90 transition"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </section>


            {/* Closing CTA */}
            <section className="bg-[#7A4B2A] text-white py-20 px-6">

                <div className="max-w-5xl mx-auto text-center">

                    <h2 className="text-5xl font-bold mb-6">
                        Every Great Story Begins With A Conversation
                    </h2>

                    <p className="text-white/80 text-lg">
                        Let's explore how we can celebrate culture, create
                        meaningful experiences, and build stronger communities
                        together.
                    </p>

                </div>

            </section>


            <Footer />

        </div>
    );
}