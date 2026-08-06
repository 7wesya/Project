import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import team from "../data/team";
import experienceCulture from "../assets/images/home/Experience Culture.jpg";
import preserveCulture from "../assets/images/home/Preserve Culture.jpg";
import reimagineCulture from "../assets/images/home/Reimagine Culture.jpg";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import PlaceholderImage from "../components/ui/PlaceholderImage";

export default function About() {
    const pillars = [
        {
            title: "Experience Culture",
            image: experienceCulture,
            label: "Experience Culture",
            description:
                "Participate in experiences that bring culture to life through conversation, storytelling, games, food, heritage and community.",
        },
        {
            title: "Preserve Culture",
            image: preserveCulture,
            label: "Preserve Culture",
            description:
                "Celebrate and pass on stories, languages, traditions, heritage and cultural knowledge for future generations.",
        },
        {
            title: "Reimagine Culture",
            image: reimagineCulture,
            label: "Reimagine Culture",
            description:
                "Explore how culture evolves through creativity, innovation, technology and new ways of thinking.",
        },
    ];

    const communityGroups = [
        "Cultural Practitioners",
        "Artists",
        "Storytellers",
        "Educators",
        "Researchers",
        "Community Leaders",
        "Creative Partners",
        "Participants",
    ];

    return (
        <div className="bg-[#F8F4EE] min-h-screen animate-fadeIn">
            <Navbar />

            {/* Hero */}
            <Section className="pt-12">
            </Section>

            {/* Our Story */}
            <section className="px-6 pb-24">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <PlaceholderImage
                        image={null}
                        label="Our Story Image"
                    />

                    <div>
                        <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4">
                            Our Story
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold text-[#2F4F3E] mb-8">
                            It Started With A Question
                        </h2>

                        <div className="space-y-6 text-lg text-black/75 leading-relaxed">
                            <p>
                                <span className="font-semibold">
                                    How do you connect to a culture you didn’t fully grow up in?
                                </span>
                            </p>

                            <p>
                                Growing up outside Zambia and returning at the age of 12,
                                I found myself navigating a culture that was mine, yet unfamiliar.
                                Language, traditions, social norms and everyday cultural experiences
                                felt like a world I was expected to understand, but had never fully experienced.
                            </p>

                            <p>
                                Like many others, I learned that culture is not something inherited automatically.
                                It is something experienced, shared and lived.
                            </p>

                            <p>
                                That experience sparked a question:
                            </p>

                            <p className="text-2xl font-semibold text-[#2F4F3E]">
                                How can we create spaces where people can connect with culture
                                in ways that feel relevant, engaging and meaningful?
                            </p>

                            <p>
                                Zed Speak was born from that question.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision + Mission */}
            <section className="bg-white py-24 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                    <Card className="p-10 bg-[#F8F4EE]">
                        <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4">
                            Where We’re Going
                        </p>

                        <h3 className="text-3xl font-bold text-[#2F4F3E] mb-4">
                            Our Vision
                        </h3>

                        <p className="text-black/75 text-lg leading-relaxed">
                            A Zambia where everyone is able to experience,
                            preserve and reimagine culture.
                        </p>
                    </Card>

                    <Card className="p-10 bg-[#F8F4EE]">
                        <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4">
                            What We’re Here To Do
                        </p>

                        <h3 className="text-3xl font-bold text-[#2F4F3E] mb-4">
                            Our Mission
                        </h3>

                        <p className="text-black/75 text-lg leading-relaxed">
                            To help people experience, preserve and reimagine
                            Zambian culture through interactive cultural experiences.
                        </p>
                    </Card>
                </div>
            </section >

            {/* Experience • Preserve • Reimagine */}
            < section className="py-24 px-6" >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4">
                            Experience • Preserve • Reimagine
                        </p>

                        <h2 className="text-5xl font-bold text-[#2F4F3E] mb-6">
                            Our Approach
                        </h2>

                        <p className="max-w-3xl mx-auto text-lg text-black/70">
                            Everything we do is designed to help people experience,
                            preserve and reimagine culture.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pillars.map((pillar) => (
                            <Card key={pillar.title}>
                                <PlaceholderImage
                                    image={pillar.image}
                                    label={pillar.label}
                                />

                                <div className="p-8">
                                    <h3 className="text-3xl font-bold text-[#2F4F3E] mb-4">
                                        {pillar.title}
                                    </h3>

                                    <p className="text-black/70 leading-relaxed">
                                        {pillar.description}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section >

            {/* What We Do */}
            < section className="bg-[#2F4F3E] text-white py-24 px-6" >
                <div className="max-w-6xl mx-auto text-center">
                    <p className="uppercase tracking-[0.3em] text-white/70 mb-4">
                        What We Do
                    </p>

                    <h2 className="text-5xl font-bold mb-8 !text-white">
                        Creating New Ways To Connect With Culture
                    </h2>

                    <p className="max-w-4xl mx-auto text-lg text-white/80 leading-relaxed mb-12">
                        From cultural experiences and storytelling programmes to games,
                        learning initiatives and creative projects, we create opportunities
                        for people to experience, preserve and reimagine culture.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/experiences"
                            className="inline-block border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2F4F3E] transition"
                        >
                            Explore Experiences
                        </Link>
                    </div>
                </div>
            </section >

            {/* Join the Journey */}
            < section className="py-24 px-6" >
                <div className="max-w-5xl mx-auto bg-[#7A4B2A] rounded-[40px] p-12 md:p-16 text-center text-white">

                    <p className="uppercase tracking-[0.3em] text-white/70 mb-4">
                        Join The Journey
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white!">
                        Be Part Of A New Cultural Conversation
                    </h2>

                    <p className="max-w-3xl mx-auto text-lg text-white/80 mb-10 leading-relaxed">
                        Whether you want to attend an experience, explore a programme,
                        collaborate with us, or simply stay connected to the journey,
                        there’s a place for you at Zed Speak.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/join-journey"
                            className="inline-block border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#7A4B2A] transition"
                        >
                            Join The Journey
                        </Link>

                        <Link
                            to="/contact"
                            className="inline-block border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#7A4B2A] transition"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </section >

            <Footer />
        </div >
    );
}