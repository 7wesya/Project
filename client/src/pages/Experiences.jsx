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
            tagline: "Where culture comes to life.",
            image: null,
            description:
                "Culture inspired games, laughter, debate and friendly competition. Test your knowledge of Zambia's culture, history, food, music and heritage.",
            details: {
                info: "Our flagship experience platform bringing people together through conversation, storytelling, games, food, creativity and connection.",
                duration: "2-3 Hours",
                audience: "Families, Friends, Teams & Organisations",
                includes: [
                    "Interactive cultural games",
                    "Storytelling sessions",
                    "Food and heritage conversations",
                    "Team challenges",
                ],
            },
        },
        {
            id: "kids-cultural-explorers",
            title: "Kids Cultural Explorers",
            tagline: "Play • Discover • Belong",
            image: null,
            description:
                "Exploring culture through play, stories, language, creativity and discovery",
            details: {
                info: "An interactive cultural adventure designed for children to discover Zambia's languages, stories, traditions, heritage, games, music, food and create expressions through engaging hands-on activities.",
                duration: "2-3 Hours",
                audience: "Families, Friends, Teams & Organisations",
                includes: [
                    "Cultural games",
                    "Cultural tranditions and music",
                    "Storytelling sessions",
                    "Team challenges",
                ],
            },
        },
        {
            id: "beneath-the-chitenge",
            title: "Beneath the Chitenge Circle",
            tagline: "Listen • Share • Connect",
            image: null,
            description:
                "A space for honest conversations, shared experiences, meaningful connection.",
            details: {
                info: "A throughtfully curated gathering that creates space for women to explore identity, culture, expectations, personal experiences and the stories often hidden beneath the surface. Through guided conversations, storytelling, reflection and connection, participants and invited to share, listen, learn and grow together.",
                duration: "2-3 Hours",
                audience: "Families, Friends, Teams & Organisations",
                includes: [
                    "Interactive cultural games",
                    "Storytelling sessions",
                    "Food and heritage conversations",
                    "Team challenges",
                ],
            },
        },
        {
            id: "keep-our-languages-alive",
            title: "Keep Our Languages Alive",
            tagline: "Speak • Preserve • Celebrate",
            image: null,
            description:
                "Celebrate language as a living part of culture and identity.",
            details: {
                info: "Keep our languages alive encourages children and communities to celebrate, use and preserve Zambia's rich linguistic heritage through interactive learning, storytelling, games and cultural activities.",
                duration: "2-3 Hours",
                audience: "Families, Friends, Teams & Organisations",
                includes: [
                    "Interactive cultural games",
                    "Storytelling sessions",
                    "Food and heritage conversations",
                    "Team challenges",
                ],
            },
        },
        {
            id: "stories-around-zambia",
            title: "Stories Around Zambia",
            tagline: "Remember • Record • Retell",
            image: null,
            description:
                "Collecting and sharing the stories that shape who we are.",
            details: {
                info: "Stories around Zambia documents, celebrate and shares stories from across the country, preserving lived experiences, tranditions, memories and cultural knowledge for future generations.",
                duration: "2-3 Hours",
                audience: "Families, Friends, Teams & Organisations",
                includes: [
                    "Interactive cultural games",
                    "Storytelling sessions",
                    "Food and heritage conversations",
                    "Team challenges",
                ],
            },
        },
        {
            id: "culture-lab",
            title: "Culture Lab",
            tagline: "Create • Imagine • Reimagine",
            image: null,
            description:
                "Exploring culture through creativity, innovation, dialogue and experimentation.",
            details: {
                info: "Culture lab is a future-focused programme that explores how culture envolves, adapts and remains relevant in a changing world. Through conversation, creative challenges, innovation projects and collaborative learning, participants are encouraged to imagine new possibilities for culture while staying connected to its roots.",
                duration: "2-3 Hours",
                audience: "Families, Friends, Teams & Organisations",
                includes: [
                    "Interactive cultural games",
                    "Storytelling sessions",
                    "Food and heritage conversations",
                    "Team challenges",
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

                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                    Experience Culture Differently
                </h1>

                <p className="max-w-3xl mx-auto text-xl text-black/70">
                    Interactive experiences that bring people together through
                    conversation, storytelling, games, food, heritage and community.
                </p>

            </section>

            {/* Experience Cards */}
            <section className="px-6 pb-24">

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

                    {experiences.map((experience) => (
                        <div
                            key={experience.title}
                            className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition duration-300"
                        >

                            {/* Image Placeholder */}
                            <div className="h-64 bg-[#E6DDD2] flex items-center justify-center">

                                <div className="text-center">

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

                                <h2 className="text-3xl font-bold mb-4">
                                    {experience.title}
                                </h2>

                                <p className="text-black/70 leading-relaxed">
                                    {experience.description}
                                </p>

                                {expandedCard === experience.id && (
                                    <div className="mt-8 pt-6 border-t border-gray-200 transition-all duration-500">

                                        <div className="mb-6">
                                            <h4 className="font-bold text-lg mb-2 text-[#2F4F3E]">
                                                About This Experience
                                            </h4>

                                            <p className="text-black/70">
                                                {experience.details.info}
                                            </p>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="font-bold text-lg mb-2 text-[#2F4F3E]">
                                                Duration
                                            </h4>

                                            <p className="text-black/70">
                                                {experience.details.duration}
                                            </p>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="font-bold text-lg mb-2 text-[#2F4F3E]">
                                                Ideal For
                                            </h4>

                                            <p className="text-black/70">
                                                {experience.details.audience}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-lg mb-3 text-[#2F4F3E]">
                                                What To Expect
                                            </h4>

                                            <ul className="space-y-2 text-black/70">
                                                {experience.details.includes.map((item) => (
                                                    <li key={item}>
                                                        • {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
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

            {/* Why It Matters */}
            <section className="bg-[#2F4F3E] text-white py-20 px-6">

                <div className="max-w-5xl mx-auto text-center">

                    <h2 className="text-5xl font-bold mb-6">
                        Experience • Preserve • Reimagine
                    </h2>

                    <p className="text-xl text-white/80 leading-relaxed">
                        Our programmes use culture as a tool for learning, connection,
                        creativity and community development.
                    </p>

                </div>

            </section>

            {/* Experience Pillars */}
            <section className="py-24 px-6">

                <div className="max-w-7xl mx-auto">

                    <h2 className="text-5xl font-bold text-center mb-16">
                        Private and Custom Experiences
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-white rounded-[32px] p-8 shadow-sm">
                            <h3 className="text-2xl font-bold mb-4">
                                Private Events
                            </h3>

                            <p className="text-black/70">
                                Meet people, share stories and build meaningful
                                relationships through culture.
                            </p>
                        </div>

                        <div className="bg-white rounded-[32px] p-8 shadow-sm">
                            <h3 className="text-2xl font-bold mb-4">
                                Celebrations
                            </h3>

                            <p className="text-black/70">
                                Explore traditions, heritage and perspectives
                                that deepen cultural understanding.
                            </p>
                        </div>

                        <div className="bg-white rounded-[32px] p-8 shadow-sm">
                            <h3 className="text-2xl font-bold mb-4">
                                Team Experiences
                            </h3>

                            <p className="text-black/70">
                                Participate in immersive experiences that make
                                culture tangible and memorable.
                            </p>
                        </div>

                    </div>

                </div>

            </section>

            {/* More to come */}
            <section className="bg-[#2F4F3E] text-white py-20 px-6">

                <div className="max-w-5xl mx-auto text-center">

                    <h2 className="text-5xl font-bold mb-6">
                        More Programmes in Development
                    </h2>

                    <p className="text-xl text-white/80 leading-relaxed">
                        Zed Speak continues to explore new ways of helping people experience, preserve
                        and reimagine culture through innovation programmes, partnerships and community initiatives.
                    </p>

                </div>

            </section>

            {/* Call To Action */}
            <section className="py-20 px-6 text-center">

                <h2 className="text-5xl font-bold mb-6">
                    Looking for something unique?
                </h2>

                <p className="text-lg text-black/70 max-w-2xl mx-auto mb-8">
                    Zed Speak designs and facilitates private cultural experiences for birthdays,
                    organisations, community group, corporate teams, schools and specail occasions.

                    From culture-themed quiz and game nights and storytelling experiences to bespoke
                    cultural gatherings, we can create an experience tailored to your audience.
                </p>

                <button className="bg-[#7A4B2A] text-white px-8 py-4 rounded-full hover:opacity-90 transition">
                    Contact Us
                </button>

            </section>

            <Footer />

        </div>
    );
}