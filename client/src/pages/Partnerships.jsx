import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Partnerships() {
    const partners = [
        {
            title: "Corporate Partners",
            description:
                "Collaborate with us to create meaningful cultural programmes, support community engagement and align your brand with authentic cultural impact.",
            icon: "🏢",
        },
        {
            title: "Cultural Institutions",
            description:
                "Museums, heritage organisations and cultural centres can work with us to preserve stories, traditions and collective identity.",
            icon: "🏛️",
        },
        {
            title: "Artists & Creatives",
            description:
                "We welcome musicians, chefs, storytellers, writers and creatives who want to share their talents and shape cultural conversations.",
            icon: "🎨",
        },
        {
            title: "Community & NGOs",
            description:
                "Together we can develop programmes that strengthen belonging, celebrate diversity and create lasting social impact.",
            icon: "🌍",
        },
    ];

    return (
        <div className="bg-[#F8F4EE] min-h-screen animate-fadeIn">

            <Navbar />

            {/* Hero Section */}
            <section className="pt-36 pb-20 px-6 text-center">
                <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4">
                    Partnerships
                </p>

                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                    Building Culture Together
                </h1>

                <p className="max-w-3xl mx-auto text-xl text-black/70">
                    We believe meaningful cultural change happens through collaboration.
                    Join us as we create experiences, preserve heritage and shape the future of culture.
                </p>
            </section>


            {/* Partner Categories */}
            <section className="px-6 pb-24">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

                    {partners.map((partner) => (
                        <div
                            key={partner.title}
                            className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-2xl transition duration-300"
                        >
                            <div className="text-5xl mb-6">
                                {partner.icon}
                            </div>

                            <h2 className="text-3xl font-bold mb-4">
                                {partner.title}
                            </h2>

                            <p className="text-black/70 leading-relaxed">
                                {partner.description}
                            </p>
                        </div>
                    ))}

                </div>
            </section>


            {/* Partnership Benefits */}
            <section className="bg-[#2F4F3E] text-white py-24 px-6">

                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-5xl font-bold mb-10">
                        Why Partner With Zed Speak?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 text-left">

                        <div className="bg-white/10 rounded-3xl p-8">
                            <h3 className="text-2xl font-bold mb-4">
                                Cultural Impact
                            </h3>

                            <p className="text-white/80">
                                Support initiatives that preserve identity,
                                celebrate heritage and strengthen communities.
                            </p>
                        </div>


                        <div className="bg-white/10 rounded-3xl p-8">
                            <h3 className="text-2xl font-bold mb-4">
                                Meaningful Engagement
                            </h3>

                            <p className="text-white/80">
                                Connect your organisation with authentic
                                stories, people and cultural experiences.
                            </p>
                        </div>


                        <div className="bg-white/10 rounded-3xl p-8">
                            <h3 className="text-2xl font-bold mb-4">
                                Shared Growth
                            </h3>

                            <p className="text-white/80">
                                Create collaborative projects that produce
                                value for communities, creatives and partners.
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="py-24 px-6 text-center">

                <h2 className="text-5xl font-bold mb-6">
                    Let's Create Something Meaningful
                </h2>

                <p className="max-w-3xl mx-auto text-lg text-black/70 mb-10">
                    Whether you are a brand, institution, creative or community organisation,
                    we would love to explore opportunities to work together.
                </p>

                <Link
                    to="/contact"
                    className="inline-block bg-[#7A4B2A] text-white px-8 py-4 rounded-full hover:opacity-90 transition"
                >
                    Become a Partner
                </Link>

            </section>


            <Footer />

        </div>
    );
}