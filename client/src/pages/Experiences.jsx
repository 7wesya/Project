import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import experiences from "../data/experiences";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import PlaceholderImage from "../components/ui/PlaceholderImage";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Experiences() {
    const [expandedCard, setExpandedCard] = useState(null);


    return (
        <div className="bg-[#F8F4EE] min-h-screen animate-fadeIn">
            <Navbar />

            {/* Hero */}
            <Section className="pt-36">

                <Container>

                    <SectionTitle
                        subtitle="Experiences & Programmes"
                        title="Experience Culture Differently"
                        description="Discover interactive cultural experiences and immersive programmes designed to help people experience, preserve and reimagine Zambian culture."
                    />

                </Container>

            </Section>

            {/* Experience Cards */}
            <Section className="pt-0">
                <Container>

                    <div className="grid md:grid-cols-2 gap-8">
                        {experiences.map((experience) => (
                            <Card key={experience.id}>
                                {/* Image Placeholder */}
                                <PlaceholderImage

                                    image={experience.image}

                                    label={experience.title}

                                />

                                <div className="p-8">
                                    <span
                                        className={`inline-block mb-4 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${experience.type === "programme"
                                            ? "bg-[#D71E0F] text-white"
                                            : "bg-[#015A1F] text-white"
                                            }`}
                                    >
                                        {experience.type === "programme" ? "Programme" : "Experience"}
                                    </span>
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
                                        <div className="mt-8 pt-6 border-t border-[#015A1F]/15border-t border-gray-200 space-y-6">
                                            <div>
                                                <h3 className="text-xl font-bold text-[#2F4F3E] mb-3">
                                                    About This {experience.type === "programme" ? "Programme" : "Experience"}
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
                                                        {experience.type === "programme"
                                                            ? "Programme Structure"
                                                            : "Experience Formats"}
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

                                    <div className="flex flex-wrap gap-4 mt-10">
                                        <Link
                                            to={`/booking/${experience.id}`}
                                            className="bg-[#015A1F] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
                                        >
                                            {experience.type === "programme"
                                                ? "Join Programme"
                                                : "Book Experience"}
                                        </Link>

                                        <button
                                            onClick={() =>
                                                setExpandedCard(
                                                    expandedCard === experience.id
                                                        ? null
                                                        : experience.id
                                                )
                                            }
                                            className="border-2 border-[#015A1F] text-[#015A1F] px-6 py-3 rounded-full font-semibold hover:bg-[#015A1F] hover:text-white transition"
                                        >
                                            {expandedCard === experience.id
                                                ? "Show Less"
                                                : "Learn More"}
                                        </button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                </Container>

            </Section>

            {/* Why Experiences Matter */}
            <Section className="bg-[#015A1F] text-white">
                <Container className="text-center max-w-5xl">
                    <h2 className="text-5xl font-bold mb-6">
                        Experience . Preserve . Reimagine
                    </h2>

                    <p className="text-xl text-white/80 leading-relaxed">
                        Our experiences and programmes are designed to make culture active, social and
                        memorable, creating spaces where people can learn, connect,
                        celebrate identity and engage with Zambia in meaningful ways.
                    </p>
                </Container>
            </Section>

            {/* Private and Custom Experiences */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-16 text-[#2F4F3E]">
                        Private and Custom Experiences & Programmes
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-[32px] p-8 shadow-sm">
                            <h3 className="text-2xl font-bold mb-4 text-[#2F4F3E]">
                                Private Events
                            </h3>

                            <p className="text-black/70 leading-relaxed">
                                Book a Zed Speak experience and programme for birthdays, family gatherings,
                                intimate celebrations or private cultural moments designed
                                around your group.
                            </p>
                        </div>

                        <div className="bg-white rounded-[32px] p-8 shadow-sm">
                            <h3 className="text-2xl font-bold mb-4 text-[#2F4F3E]">
                                Team Experiences & Programmes
                            </h3>

                            <p className="text-black/70 leading-relaxed">
                                Create meaningful team-building moments through cultural
                                games, storytelling, food, reflection and shared experiences
                                and programmes
                                tailored for organisations and groups.
                            </p>
                        </div>

                        <div className="bg-white rounded-[32px] p-8 shadow-sm">
                            <h3 className="text-2xl font-bold mb-4 text-[#2F4F3E]">
                                Custom Experiences & Programmes
                            </h3>

                            <p className="text-black/70 leading-relaxed">
                                Looking for something unique? We can design a custom
                                experience and programme around your audience, occasion, theme or learning goals.
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
                    experiences and programmes for families, schools, organisations, community groups,
                    corporate teams and special occasions.
                </p>

                <Link
                    to="/contact"
                    className="inline-block bg-[#015A1F] text-white px-8 py-4 rounded-full hover:opacity-90 transition"
                >
                    Contact Us
                </Link>
            </section>

            <Footer />
        </div>
    );
}