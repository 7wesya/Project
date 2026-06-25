import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function Booking() {
    const { experienceId } = useParams();
    const [bookingType, setBookingType] = useState("");

    const bookingItems = {
        "zed-table": {
            title: "The Zed Table",
            category: "Experience",
        },
        "kids-cultural-explorers": {
            title: "Kids Cultural Explorers",
            category: "Experience",
        },
        "roots-and-routes": {
            title: "Roots & Routes",
            category: "Experience",
        },
        "cook-and-connect": {
            title: "Cook & Connect",
            category: "Experience",
        },
        "beneath-the-chitenge-circle": {
            title: "Beneath the Chitenge Circle",
            category: "Programme",
        },
        "keep-our-languages-alive": {
            title: "Keep Our Languages Alive",
            category: "Programme",
        },
        "culture-lab": {
            title: "Culture Lab",
            category: "Programme",
        },
    };

    const selectedItem = bookingItems[experienceId];
    const bookingCategory = selectedItem?.category || "Experience";

    const bookingTypeOptions =
        bookingCategory === "Programme"
            ? ["Featured Programme", "Private Programme", "Custom Programme"]
            : ["Featured Experience", "Private Experience", "Custom Experience"];

    useEffect(() => {
        setBookingType(bookingTypeOptions[0]);
    }, [bookingCategory]);

    const isCustomBooking =
        bookingType === "Custom Experience" ||
        bookingType === "Custom Programme";

    const isPrivateBooking =
        bookingType === "Private Experience" ||
        bookingType === "Private Programme";

    return (
        <div className="bg-[#F8F4EE] min-h-screen animate-fadeIn">

            <Navbar />

            <section className="pt-36 pb-20 px-6">

                <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-12">

                        <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4">
                            Booking & Enquiries
                        </p>

                        <h1 className="text-5xl font-bold mb-6 text-[#2F4F3E]">
                            Book Your Experience
                        </h1>

                        <p className="text-xl text-black/70 max-w-3xl mx-auto">
                            Tell us a little about what you're looking for and
                            we’ll help create the right Zed Speak experience or programme.
                        </p>

                    </div>

                    <div className="bg-white rounded-[40px] p-10 shadow-sm">

                        <form className="space-y-6">

                            {/* Selected Item */}
                            <div>
                                <label className="block mb-2 font-medium">
                                    Selected Experience / Programme
                                </label>

                                <input
                                    type="text"
                                    value={selectedItem?.title || ""}
                                    readOnly
                                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 bg-gray-50"
                                />
                            </div>

                            {/* Booking Category */}
                            <div>
                                <label className="block mb-2 font-medium">
                                    Booking Category
                                </label>

                                <input
                                    type="text"
                                    value={selectedItem?.category || ""}
                                    readOnly
                                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 bg-gray-50"
                                />
                            </div>

                            {/* Booking Type */}
                            <div>
                                <label className="block mb-2 font-medium">
                                    Booking Type
                                </label>

                                <select
                                    value={bookingType}
                                    onChange={(e) => setBookingType(e.target.value)}
                                    className="w-full border border-gray-300 rounded-2xl px-5 py-4"
                                >
                                    {bookingTypeOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Contact Details */}
                            <div className="grid md:grid-cols-2 gap-6">

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter your full name"
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
                                        placeholder="Phone number"
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

                            {/* Custom Booking Fields */}
                            {isCustomBooking && (
                                <div className="space-y-6 bg-[#F8F4EE] p-6 rounded-3xl">

                                    <h3 className="text-2xl font-bold text-[#2F4F3E]">
                                        Custom Booking Details
                                    </h3>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Event Type
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Birthday, community event, workshop..."
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
                                            placeholder="Families, students, corporate team..."
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

                            {/* Private Booking Fields */}
                            {isPrivateBooking && (
                                <div className="space-y-6 bg-[#F8F4EE] p-6 rounded-3xl">

                                    <h3 className="text-2xl font-bold text-[#2F4F3E]">
                                        Private Booking Details
                                    </h3>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Occasion
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Birthday, family gathering, celebration..."
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

                            {/* Extra Details */}
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