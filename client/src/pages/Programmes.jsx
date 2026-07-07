import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import PlaceholderImage from "../components/ui/PlaceholderImage";
import programmes from "../data/programmes";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Programmes() {
    const [expandedCard, setExpandedCard] = useState(null);



    return (
        <div className="bg-[#F8F4EE] min-h-screen animate-fadeIn">
            <Navbar />

            {/* Hero */}
            <Section className="pt-36">

                <Container>

                    <SectionTitle
                        subtitle="Zed Speak Programmes"
                        title="Programmes That Preserve, Explore & Reimagine Culture"
                        description="Our programmes use culture as a tool for learning, creativity, storytelling, language preservation and community development."
                    />

                </Container>

            </Section>

            {/* Programme Cards */}
            <Section className="pt-0">
                <Container>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {programmes.map((programme) => (
                            <Card key={programme.id}>
                                {/* Image Placeholder */}
                                <PlaceholderImage
                                    image={programme.image}
                                    label={programme.title}
                                />

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
                                        <div className="mt-8 pt-6 border-t border-[#015A1F]/15 space-y-6">
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

                                    <div className="flex flex-wrap gap-4 mt-10">
                                        <Link
                                            to={`/booking/${programme.id}`}
                                            className="bg-[#015A1F] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
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
                                            className="border-2 border-[#015A1F] text-[#015A1F] px-6 py-3 rounded-full font-semibold hover:bg-[#015A1F] hover:text-white transition"
                                        >
                                            {expandedCard === programme.id
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

            {/* Why These Programmes Matter */}
            <Section className="bg-[#015A1F] text-white">
                <Container className="max-w-5xl text-center">
                    <h2 className="text-5xl font-bold mb-6">
                        Programmes That Keep Culture Moving
                    </h2>

                    <p className="text-xl text-white/80 leading-relaxed">
                        Our programmes create space for language, memory, creativity,
                        storytelling, innovation and belonging, helping people connect
                        with culture in ways that feel relevant to both the present and the future.
                    </p>
                </Container>
            </Section>

            {/* Programme Enquiry CTA */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto bg-white rounded-[40px] p-12 md:p-16 shadow-md text-center">
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
                        className="inline-block bg-[#015A1F] text-white px-8 py-4 rounded-full hover:opacity-90 transition"
                    >
                        Partner With Us
                    </Link>
                </div>
            </section >

            <Footer />
        </div >
    );
}