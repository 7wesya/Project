import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Booking() {
    const [experienceType, setExperienceType] = useState("Featured Experience");
    const { experienceId } = useParams();

    const experienceNames = {
        "zed-table": "The Zed Table",
        "kids-cultural-explorers": "Kids Cultural Explorers",
        "beneath-the-chitenge": "Beneath the Chitenge Circle",
        "keep-our-languages-alive": "Keep Our Languages Alive",
        "stories-around-zambia": "Stories Around Zambia",
        "culture-lab": "Culture Lab",
    };

    return (
        <div className="bg-[#F8F4EE] min-h-screen">

            <Navbar />

            <section className="pt-36 pb-20 px-6">

                <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-12">

                        <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4">
                            Experience Booking
                        </p>

                        <h1 className="text-5xl font-bold mb-6">
                            Book Your Experience
                        </h1>

                        <p className="text-xl text-black/70">
                            Tell us a little about what you're looking for and
                            we'll help create the right cultural experience.
                        </p>

                    </div>

                    <div className="bg-white rounded-[40px] p-10 shadow-sm">

                        <form className="space-y-6">

                            <div>
                                <label className="block mb-2 font-medium">
                                    Selected Experience
                                </label>

                                <input
                                    type="text"
                                    value={experienceNames[experienceId] || ""}
                                    readOnly
                                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 bg-gray-50"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">
                                    Experience Type
                                </label>

                                <select
                                    value={experienceType}
                                    onChange={(e) => setExperienceType(e.target.value)}
                                    className="w-full border border-gray-300 rounded-2xl px-5 py-4"
                                >
                                    <option>Featured Experience</option>
                                    <option>Private Experience</option>
                                    <option>Custom Experience</option>
                                </select>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full border border-gray-300 rounded-2xl px-5 py-4"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        required
                                        placeholder="name@example.com"
                                        className="w-full border border-gray-300 rounded-2xl px-5 py-4"
                                    />
                                </div>

                            </div>

                            <div className="grid md:grid-cols-2 gap-6">

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full border border-gray-300 rounded-2xl px-5 py-4"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Number of Participants
                                    </label>

                                    <input
                                        type="number"
                                        min="1"
                                        max="1000"
                                        required
                                        placeholder="How many people?"
                                        className="w-full border border-gray-300 rounded-2xl px-5 py-4"
                                    />
                                </div>

                            </div>

                            <div>
                                <label className="block mb-2 font-medium">
                                    Preferred Date
                                </label>

                                <input
                                    type="date"
                                    className="w-full border border-gray-300 rounded-2xl px-5 py-4"
                                />
                            </div>

                            {/* Custom Experience */}
                            {experienceType === "Custom Experience" && (

                                <div className="space-y-6 bg-[#F8F4EE] p-6 rounded-3xl">

                                    <h3 className="text-2xl font-bold text-[#2F4F3E]">
                                        Custom Experience Details
                                    </h3>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Event Type
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Birthday, Community Event, Workshop..."
                                            className="w-full border border-gray-300 rounded-2xl px-5 py-4"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Location
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Preferred location"
                                            className="w-full border border-gray-300 rounded-2xl px-5 py-4"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Audience
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Families, Students, Corporate Team..."
                                            className="w-full border border-gray-300 rounded-2xl px-5 py-4"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Budget Range
                                        </label>

                                        <select className="w-full border border-gray-300 rounded-2xl px-5 py-4">
                                            <option>Select Budget Range</option>
                                            <option>Under K1,000</option>
                                            <option>K1,000 - K5,000</option>
                                            <option>K5,000 - K10,000</option>
                                            <option>K10,000+</option>
                                        </select>
                                    </div>

                                </div>

                            )}

                            {/* Private Experience */}
                            {experienceType === "Private Experience" && (

                                <div className="space-y-6 bg-[#F8F4EE] p-6 rounded-3xl">

                                    <h3 className="text-2xl font-bold text-[#2F4F3E]">
                                        Private Experience Details
                                    </h3>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Occasion
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Birthday, Family Gathering, Celebration..."
                                            className="w-full border border-gray-300 rounded-2xl px-5 py-4"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Preferred Venue
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Where would you like it hosted?"
                                            className="w-full border border-gray-300 rounded-2xl px-5 py-4"
                                        />
                                    </div>

                                </div>

                            )}

                            <div>
                                <label className="block mb-2 font-medium">
                                    Tell Us More
                                </label>

                                <textarea
                                    rows="5"
                                    placeholder="Tell us more about your event, group or what you would like to experience..."
                                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#7A4B2A] text-white py-4 rounded-full font-semibold hover:opacity-90 transition"
                            >
                                Submit Booking Request
                            </button>

                        </form>

                    </div>

                </div>

            </section>

            <Footer />

        </div>
    );
}