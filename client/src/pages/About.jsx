import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div className="bg-[#F8F4EE] min-h-screen animate-fadeIn">

            <Navbar />

            {/* Hero */}
            <section className="pt-36 pb-20 px-6 text-center">
                <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4">
                    Our Story
                </p>

                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                    A New Conversation About Culture
                </h1>

                <p className="max-w-3xl mx-auto text-xl text-black/70">
                    Zed Speak exists to celebrate, preserve, and reimagine
                    Zambian culture through meaningful experiences,
                    storytelling, and human connection.
                </p>
            </section>

            {/* Who We Are */}
            <section className="px-6 py-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                    <div>
                        <h2 className="text-4xl font-bold mb-6">
                            Who We Are
                        </h2>

                        <p className="text-lg text-black/70 leading-relaxed">
                            We are a modern cultural ecosystem bringing people
                            together through food, art, language, stories,
                            heritage and shared experiences.
                            Our goal is to create spaces where culture can
                            be experienced in fresh, contemporary and inclusive
                            ways.
                        </p>
                    </div>


                    <div className="bg-[#7A4B2A] rounded-[40px] p-10 text-white">
                        <h3 className="text-3xl font-bold mb-4">
                            Our Vision
                        </h3>

                        <p className="leading-relaxed mb-8">
                            To build a generation that feels deeply connected
                            to its identity, heritage and cultural future.
                        </p>

                        <h3 className="text-3xl font-bold mb-4">
                            Our Mission
                        </h3>

                        <p>
                            To create transformative cultural experiences
                            that inspire conversation, belonging and
                            creative expression.
                        </p>
                    </div>

                </div>
            </section>


            {/* Values */}
            <section className="py-20 px-6 bg-white">

                <div className="max-w-7xl mx-auto text-center">

                    <h2 className="text-5xl font-bold mb-12">
                        Our Core Values
                    </h2>

                    <div className="grid md:grid-cols-4 gap-6">

                        {[
                            "Authenticity",
                            "Community",
                            "Creativity",
                            "Cultural Innovation",
                        ].map((value) => (

                            <div
                                key={value}
                                className="rounded-3xl p-8 border border-[#7A4B2A]/20"
                            >
                                <h3 className="text-2xl font-semibold">
                                    {value}
                                </h3>
                            </div>

                        ))}

                    </div>

                </div>

            </section>


            <Footer />

        </div>
    );
}