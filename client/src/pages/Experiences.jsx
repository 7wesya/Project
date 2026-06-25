import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Experiences() {
    const [expandedCard, setExpandedCard] = useState(null);

    const experiences = [
        {
            id: "zed-table",
            title: "The Zed Table",
            tagline: "Conversation • Games • Food • Connection",
            image: null,
            description:
                "Zed Speak’s flagship cultural experience series, bringing people together to experience culture in contemporary, engaging and meaningful ways.",
            details: {
                about:
                    "The Zed Table is Zed Speak's flagship cultural experience series, bringing people together to experience culture in contemporary, engaging, and meaningful ways. Each edition explores a different theme through conversation, storytelling, interactive games, food, creativity, and connection—creating memorable experiences that celebrate, preserve, and reimagine Zambian culture.",
                duration: "2–3 Hours",
                audience:
                    "Friends, Families, Community Groups, Teams & Organisations",
                expect: [
                    "Interactive cultural games and challenges",
                    "Guided conversations and storytelling",
                    "Food, music and shared cultural experiences",
                    "Creative activities and friendly competition",
                    "Meaningful connections and new perspectives",
                ],
                formats: [
                    "Conversations – Thought-provoking discussions exploring culture, identity and contemporary issues.",
                    "Game Night – Fast-paced cultural games, quizzes and friendly competition.",
                    "Food & Stories – Shared meals inspired by the stories, traditions and memories behind Zambian cuisine.",
                    "Special Editions – Themed gatherings, collaborations and unique cultural experiences.",
                ],
            },
        },
        {
            id: "kids-cultural-explorers",
            title: "Kids Cultural Explorers",
            tagline: "Play • Storytelling • Language • Discovery",
            image: null,
            description:
                "An interactive cultural experience inviting children to discover Zambia through play, storytelling, language, music, creativity and hands-on exploration.",
            details: {
                about:
                    "Kids Cultural Explorers is an interactive cultural experience that invites children to discover Zambia through play, storytelling, language, music, creativity, and hands-on exploration. Each adventure introduces young explorers to the richness of Zambia's cultures, traditions, heritage, and everyday life through engaging activities designed to spark curiosity, confidence, and connection.",
                duration:
                    "6 Weeks\nOne 90-minute guided storytelling circle each week",
                audience: "Children between the ages of 6–15",
                exploreThrough: [
                    "Play and cultural games",
                    "Stories and imagination",
                    "Music and movement",
                    "Arts and creativity",
                    "Language and discovery",
                    "Team adventures",
                ],
            },
        },
        {
            id: "roots-and-routes",
            title: "Roots & Routes",
            tagline: "Explore • Heritage • Storytelling • Place",
            image: null,
            description:
                "An interactive cultural exploration experience that invites participants to discover Zambia through its communities, traditions, heritage, landscapes and local stories.",
            details: {
                about:
                    "Roots & Routes is an interactive cultural exploration experience that invites participants to discover Zambia through its communities, traditions, heritage, landscapes, and local stories. Through guided explorations, storytelling, cultural encounters, and interactive activities, participants connect with the people and places that shape Zambia's identity while exploring the journeys that continue to define its future.",
                duration: "2–4 Hours",
                audience: "Culture curious individuals or groups",
                expect: [
                    "Guided explorations",
                    "Storytelling and local culture",
                    "Community and cultural encounters",
                    "Reflection, photography and creative documentation",
                    "Meaningful connections with Zambia's people and places",
                ],
            },
        },
        {
            id: "cook-and-connect",
            title: "Cook & Connect",
            tagline: "Food • Storytelling • Tradition • Community",
            image: null,
            description:
                "An interactive culinary and cultural experience where food becomes a gateway to conversation, storytelling and connection.",
            details: {
                about:
                    "Cook & Connect is an interactive culinary and cultural experience where food becomes a gateway to conversation, storytelling, and connection. Participants prepare, share, and enjoy traditional and contemporary Zambian dishes while exploring the memories, traditions, ingredients, and stories that make food an important part of culture and community.",
                duration: "2–3 Hours",
                audience: "Culturally curious individuals or groups",
                expect: [
                    "Hands-on cooking or food demonstrations",
                    "Stories behind traditional dishes and ingredients",
                    "Shared meals and cultural conversations",
                    "Interactive food challenges and storytelling activities",
                    "Exploration of regional cuisines and traditions",
                    "Meaningful connection through food and storytelling",
                ],
            },
        },
    ];

    return (
        <div className="bg-[#F8F4EE] min-h-screen animate-fadeIn">
            <Navbar />

            {/* Hero */}
            <section className="pt-36 pb-20 px-6 text-center">
                <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4">
                    Cultural Experiences
                </p>

                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#2F4F3E]">
                    Experience Culture Differently
                </h1>

                <p className="max-w-3xl mx-auto text-xl text-black/70">
                    Interactive cultural experiences designed to bring people together
                    through conversation, storytelling, food, play, exploration and
                    meaningful connection.
                </p>
            </section>

            {/* Experience Cards */}
            <section className="px-6 pb-24">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                    {experiences.map((experience) => (
                        <div
                            key={experience.id}
                            className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition duration-300"
                        >
                            {/* Image Placeholder */}
                            <div className="h-64 bg-[#E6DDD2] flex items-center justify-center">
                                <div className="text-center px-6">
                                    <div className="text-5xl mb-4">📸</div>

                                    <p className="text-[#7A4B2A] font-medium">
                                        {experience.title}
                                    </p>

                                    <p className="text-sm text-[#7A4B2A]/70 mt-2">
                                        Experience Image Placeholder
                                    </p>
                                </div>
                            </div>

                            <div className="p-8">
                                <p className="uppercase tracking-widest text-sm text-[#7A4B2A] mb-3">
                                    {experience.tagline}
                                </p>

                                <h2 className="text-3xl font-bold mb-4 text-[#2F4F3E]">
                                    {experience.title}
                                </h2>

                                <p className="text-black/70 leading-relaxed">
                                    {experience.description}
                                </p>

                                {/* Expanded content */}
                                {expandedCard === experience.id && (
                                    <div className="mt-8 pt-6 border-t border-gray-200 space-y-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#2F4F3E] mb-3">
                                                About This Experience
                                            </h3>
                                            <p className="text-black/70 leading-relaxed">
                                                {experience.details.about}
                                            </p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h3 className="text-xl font-bold text-[#2F4F3E] mb-3">
                                                    Duration
                                                </h3>
                                                <p className="text-black/70 whitespace-pre-line">
                                                    {experience.details.duration}
                                                </p>
                                            </div>

                                            <div>
                                                <h3 className="text-xl font-bold text-[#2F4F3E] mb-3">
                                                    Ideal For
                                                </h3>
                                                <p className="text-black/70">
                                                    {experience.details.audience}
                                                </p>
                                            </div>
                                        </div>

                                        {experience.details.expect && (
                                            <div>
                                                <h3 className="text-xl font-bold text-[#2F4F3E] mb-3">
                                                    What To Expect
                                                </h3>

                                                <ul className="space-y-2 text-black/70">
                                                    {experience.details.expect.map((item) => (
                                                        <li key={item}>• {item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {experience.details.exploreThrough && (
                                            <div>
                                                <h3 className="text-xl font-bold text-[#2F4F3E] mb-3">
                                                    Explore Through
                                                </h3>

                                                <ul className="space-y-2 text-black/70">
                                                    {experience.details.exploreThrough.map((item) => (
                                                        <li key={item}>• {item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {experience.details.formats && (
                                            <div>
                                                <h3 className="text-xl font-bold text-[#2F4F3E] mb-3">
                                                    Experience Formats
                                                </h3>

                                                <ul className="space-y-3 text-black/70">
                                                    {experience.details.formats.map((item) => (
                                                        <li key={item}>• {item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}

                                <div className="flex gap-4 flex-wrap mt-8">
                                    <Link
                                        to={`/booking/${experience.id}`}
                                        className="inline-block bg-[#7A4B2A] text-white px-6 py-3 rounded-full hover:opacity-90 transition"
                                    >
                                        Book Now
                                    </Link>

                                    <button
                                        onClick={() =>
                                            setExpandedCard(
                                                expandedCard === experience.id
                                                    ? null
                                                    : experience.id
                                            )
                                        }
                                        className="border border-[#7A4B2A] text-[#7A4B2A] px-6 py-3 rounded-full hover:bg-[#7A4B2A] hover:text-white transition"
                                    >
                                        {expandedCard === experience.id
                                            ? "Show Less"
                                            : "Learn More"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Experiences Matter */}
            <section className="bg-[#2F4F3E] text-white py-20 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-6">
                        Experience . Preserve . Reimagine
                    </h2>

                    <p className="text-xl text-white/80 leading-relaxed">
                        Our experiences are designed to make culture active, social and
                        memorable, creating spaces where people can learn, connect,
                        celebrate identity and engage with Zambia in meaningful ways.
                    </p>
                </div>
            </section>

            {/* Private and Custom Experiences */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-16 text-[#2F4F3E]">
                        Private and Custom Experiences
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-[32px] p-8 shadow-sm">
                            <h3 className="text-2xl font-bold mb-4 text-[#2F4F3E]">
                                Private Events
                            </h3>

                            <p className="text-black/70 leading-relaxed">
                                Book a Zed Speak experience for birthdays, family gatherings,
                                intimate celebrations or private cultural moments designed
                                around your group.
                            </p>
                        </div>

                        <div className="bg-white rounded-[32px] p-8 shadow-sm">
                            <h3 className="text-2xl font-bold mb-4 text-[#2F4F3E]">
                                Team Experiences
                            </h3>

                            <p className="text-black/70 leading-relaxed">
                                Create meaningful team-building moments through cultural
                                games, storytelling, food, reflection and shared experiences
                                tailored for organisations and groups.
                            </p>
                        </div>

                        <div className="bg-white rounded-[32px] p-8 shadow-sm">
                            <h3 className="text-2xl font-bold mb-4 text-[#2F4F3E]">
                                Custom Experiences
                            </h3>

                            <p className="text-black/70 leading-relaxed">
                                Looking for something unique? We can design a custom
                                experience around your audience, occasion, theme or learning goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 text-center">
                <h2 className="text-5xl font-bold mb-6 text-[#2F4F3E]">
                    Looking for something unique?
                </h2>

                <p className="text-lg text-black/70 max-w-3xl mx-auto mb-8 leading-relaxed">
                    Zed Speak designs and facilitates private and custom cultural
                    experiences for families, schools, organisations, community groups,
                    corporate teams and special occasions.
                </p>

                <Link
                    to="/contact"
                    className="inline-block bg-[#7A4B2A] text-white px-8 py-4 rounded-full hover:opacity-90 transition"
                >
                    Contact Us
                </Link>
            </section>

            <Footer />
        </div>
    );
}