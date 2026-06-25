import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Programmes() {
    const [expandedCard, setExpandedCard] = useState(null);

    const programmes = [
        {
            id: "culture-lab",
            title: "Culture Lab",
            tagline: "Creativity • Innovation • Culture • Future Thinking",
            image: null,
            description:
                "A future-focused cultural innovation experience exploring how culture evolves, adapts and remains relevant in a changing world.",
            details: {
                about:
                    "Culture Lab is a future-focused cultural innovation experience that explores how culture evolves, adapts, and remains relevant in a changing world. Through collaborative challenges, creative experimentation, technology, design thinking, and interactive discussions, participants are invited to explore new ways of experiencing, preserving, and reimagining culture while remaining connected to its roots.",
                duration: "2–3 Hours",
                audience: "Youth, Students, Creatives",
                expect: [
                    "Creative cultural challenges and innovation activities",
                    "Interactive discussions and collaborative learning",
                    "Design thinking and problem-solving exercises",
                    "Exploration of culture, technology and creativity",
                    "Hands-on ideation and concept development",
                    "Collaborative projects that reimagine culture for the future",
                ],
            },
        },
        {
            id: "keep-our-languages-alive",
            title: "Keep Our Languages Alive",
            tagline: "Language • Heritage • Storytelling • Community",
            image: null,
            description:
                "An interactive cultural experience encouraging children, families and communities to celebrate, use and preserve Zambia’s rich linguistic heritage.",
            details: {
                about:
                    "Keep Our Languages Alive is an interactive cultural experience that encourages children, families, and communities to celebrate, use, and preserve Zambia's rich linguistic heritage. Through games, storytelling, music, conversation, and creative activities, participants discover the joy of speaking, learning, and sharing local languages in engaging and meaningful ways.",
                duration: "2–3 Hours",
                audience:
                    "Children, Families, Schools, Youth Groups & Community Organisations",
                expect: [
                    "Interactive language games and challenges",
                    "Storytelling and traditional folktales",
                    "Songs, proverbs, riddles and tongue twisters",
                    "Vocabulary and conversational activities",
                    "Cultural crafts and creative expression",
                    "Fun activities that celebrate Zambia's languages and traditions",
                ],
            },
        },
        {
            id: "beneath-the-chitenge-circle",
            title: "Beneath the Chitenge Circle",
            tagline: "Storytelling • Reflection • Identity • Creative Expression",
            image: null,
            description:
                "A thoughtfully curated cultural storytelling and creative expression experience inviting women to explore identity, culture, belonging and memory.",
            details: {
                about:
                    "Beneath the Chitenge Circle is a thoughtfully curated cultural storytelling and creative expression experience that invites women to explore identity, culture, belonging, memory, and the journeys that shape who they are. Inspired by the symbolism of the chitenge, each gathering creates a safe and welcoming space for honest conversations, shared experiences, reflection, and creative storytelling through words, art, photography, poetry, music, and other forms of expression.",
                duration:
                    "6 Weeks\nOne 90-minute guided storytelling circle each week",
                audience:
                    "Women, Community Groups, Organisations, Creative Networks & Wellness Communities",
                expect: [
                    "Guided storytelling and reflective conversations",
                    "Creative expression through poetry, writing, art, photography, music and other mediums",
                    "Thought-provoking prompts inspired by culture and lived experiences",
                    "A safe, supportive, and confidential storytelling circle",
                    "Opportunities to connect, listen, create, and preserve personal and collective stories",
                    "Optional contributions to collective storytelling projects and publications",
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
                    Programmes That Preserve,
                    Explore And Reimagine Culture
                </p>

                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#2F4F3E]">
                    Zed Speak Programmes
                </h1>

                <p className="max-w-3xl mx-auto text-xl text-black/70">
                    Our programmes use culture as a tool for learning,
                    connection, creativity and community development.
                </p>
            </section>

            {/* Programme Cards */}
            <section className="px-6 pb-24">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {programmes.map((programme) => (
                        <div
                            key={programme.id}
                            className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition duration-300"
                        >
                            {/* Image Placeholder */}
                            <div className="h-64 bg-[#E6DDD2] flex items-center justify-center">
                                <div className="text-center px-6">
                                    <div className="text-5xl mb-4">📸</div>

                                    <p className="text-[#7A4B2A] font-medium">
                                        {programme.title}
                                    </p>

                                    <p className="text-sm text-[#7A4B2A]/70 mt-2">
                                        Programme Image Placeholder
                                    </p>
                                </div>
                            </div>

                            <div className="p-8">
                                <p className="uppercase tracking-widest text-sm text-[#7A4B2A] mb-3">
                                    {programme.tagline}
                                </p>

                                <h2 className="text-3xl font-bold mb-4 text-[#2F4F3E]">
                                    {programme.title}
                                </h2>

                                <p className="text-black/70 leading-relaxed">
                                    {programme.description}
                                </p>

                                {/* Expanded content */}
                                {expandedCard === programme.id && (
                                    <div className="mt-8 pt-6 border-t border-gray-200 space-y-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#2F4F3E] mb-3">
                                                About This Programme
                                            </h3>
                                            <p className="text-black/70 leading-relaxed">
                                                {programme.details.about}
                                            </p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h3 className="text-xl font-bold text-[#2F4F3E] mb-3">
                                                    Duration
                                                </h3>
                                                <p className="text-black/70 whitespace-pre-line">
                                                    {programme.details.duration}
                                                </p>
                                            </div>

                                            <div>
                                                <h3 className="text-xl font-bold text-[#2F4F3E] mb-3">
                                                    Ideal For
                                                </h3>
                                                <p className="text-black/70">
                                                    {programme.details.audience}
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold text-[#2F4F3E] mb-3">
                                                What To Expect
                                            </h3>

                                            <ul className="space-y-2 text-black/70">
                                                {programme.details.expect.map((item) => (
                                                    <li key={item}>• {item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                <div className="flex gap-4 flex-wrap mt-8">
                                    <Link
                                        to={`/booking/${programme.id}`}
                                        className="inline-block bg-[#7A4B2A] text-white px-6 py-3 rounded-full hover:opacity-90 transition"
                                    >
                                        Enquire Now
                                    </Link>

                                    <button
                                        onClick={() =>
                                            setExpandedCard(
                                                expandedCard === programme.id
                                                    ? null
                                                    : programme.id
                                            )
                                        }
                                        className="border border-[#7A4B2A] text-[#7A4B2A] px-6 py-3 rounded-full hover:bg-[#7A4B2A] hover:text-white transition"
                                    >
                                        {expandedCard === programme.id
                                            ? "Show Less"
                                            : "Learn More"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why These Programmes Matter */}
            <section className="bg-[#2F4F3E] text-white py-20 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-6">
                        Programmes That Keep Culture Moving
                    </h2>

                    <p className="text-xl text-white/80 leading-relaxed">
                        Our programmes create space for language, memory, creativity,
                        storytelling, innovation and belonging, helping people connect
                        with culture in ways that feel relevant to both the present and the future.
                    </p>
                </div>
            </section>

            {/* Programme Enquiry CTA */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto bg-white rounded-[40px] p-10 md:p-14 shadow-sm text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2F4F3E] mb-6">
                        More Programmes in Development
                    </h2>

                    <p className="max-w-3xl mx-auto text-lg text-black/70 leading-relaxed mb-8">
                        Zed Speak continues to explore new ways of helping people experience,
                        preserve and reimagine culture through innovation programmes, partnerships
                        and community initiatives.
                    </p>

                    <Link
                        to="/contact"
                        className="inline-block bg-[#7A4B2A] text-white px-8 py-4 rounded-full hover:opacity-90 transition"
                    >
                        Partner With Us
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}