import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Community() {
    return (
        <div className="bg-[#F8F4EE] min-h-screen animate-fadeIn">

            <Navbar />

            {/* Hero Section */}
            <section className="pt-36 pb-20 px-6 text-center">

                <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4">
                    Join The Community
                </p>

                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                    Become Part Of The Conversation
                </h1>

                <p className="max-w-3xl mx-auto text-xl text-black/70">
                    Join a growing network of people passionate about culture,
                    heritage, creativity and meaningful human connections.
                </p>

            </section>


            {/* Membership Form */}
            <section className="px-6 pb-24">

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                    {/* Left Content */}
                    <div>

                        <h2 className="text-4xl font-bold mb-6">
                            Why Join Zed Speak?
                        </h2>

                        <div className="space-y-6">

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">
                                    🌍 Discover Experiences
                                </h3>

                                <p className="text-black/70 leading-relaxed">
                                    Receive updates on cultural dinners,
                                    storytelling events, workshops and
                                    community gatherings.
                                </p>
                            </div>


                            <div>
                                <h3 className="text-2xl font-semibold mb-2">
                                    🎨 Connect With Creatives
                                </h3>

                                <p className="text-black/70 leading-relaxed">
                                    Meet artists, storytellers, chefs,
                                    innovators and people who are passionate
                                    about preserving and reimagining culture.
                                </p>
                            </div>


                            <div>
                                <h3 className="text-2xl font-semibold mb-2">
                                    💡 Shape The Future
                                </h3>

                                <p className="text-black/70 leading-relaxed">
                                    Become part of a movement creating new
                                    ways to celebrate identity, belonging and
                                    cultural expression.
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* Form Card */}
                    <div className="bg-white rounded-[40px] p-10 shadow-sm">

                        <h2 className="text-3xl font-bold mb-3">
                            Join Today
                        </h2>

                        <p className="text-black/60 mb-8">
                            Fill in your details and become part of the
                            Zed Speak community.
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
                                    placeholder="Enter your email"
                                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#7A4B2A]"
                                />
                            </div>


                            <div>
                                <label className="block mb-2 font-medium">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#7A4B2A]"
                                />
                            </div>


                            <div>
                                <label className="block mb-2 font-medium">
                                    Area Of Interest
                                </label>

                                <select
                                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#7A4B2A]"
                                >
                                    <option>Select an interest</option>
                                    <option>Food & Heritage</option>
                                    <option>Storytelling</option>
                                    <option>Arts & Creativity</option>
                                    <option>Culture & Technology</option>
                                    <option>Community Events</option>
                                </select>
                            </div>


                            <button
                                type="submit"
                                className="w-full bg-[#7A4B2A] text-white py-4 rounded-full font-semibold hover:opacity-90 transition"
                            >
                                Become A Member
                            </button>

                        </form>

                    </div>

                </div>

            </section>


            {/* Closing Statement */}
            <section className="bg-[#2F4F3E] text-white py-20 px-6">

                <div className="max-w-5xl mx-auto text-center">

                    <h2 className="text-5xl font-bold mb-6">
                        Culture Lives Through People
                    </h2>

                    <p className="text-white/80 text-lg">
                        Every conversation, experience and shared story helps
                        keep our heritage alive while inspiring future
                        generations.
                    </p>

                </div>

            </section>


            <Footer />

        </div>
    );
}