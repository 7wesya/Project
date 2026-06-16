import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Impact() {
    const pillars = [
        {
            title: "Storytelling & Identity",
            description:
                "Creating spaces where personal and collective stories are shared, celebrated and passed on to future generations.",
        },
        {
            title: "Heritage & Language",
            description:
                "Preserving traditions, languages and cultural knowledge while making them accessible to modern audiences.",
        },
        {
            title: "Future Culture",
            description:
                "Exploring how young people, innovation and creativity continue to redefine what culture means today.",
        },
        {
            title: "Belonging & Connection",
            description:
                "Building communities where people can find connection, understanding and pride in their cultural roots.",
        },
        {
            title: "Culture, Technology & Creative Futures",
            description:
                "Using technology and creative industries as tools for cultural expression, preservation and innovation.",
        },
    ];

    return (
        <div className="bg-[#F8F4EE] min-h-screen animate-fadeIn">

            <Navbar />

            {/* Hero */}
            <section className="pt-36 pb-20 px-6 text-center">

                <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4">
                    Cultural Impact
                </p>

                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                    Preserving The Past.
                    <br />
                    Creating The Future.
                </h1>

                <p className="max-w-3xl mx-auto text-xl text-black/70">
                    We believe culture is a living force. Through intentional
                    programmes and conversations, we create a bridge between
                    heritage, identity, creativity and future generations.
                </p>

            </section>


            {/* Impact Pillars */}
            <section className="px-6 pb-24">

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {pillars.map((pillar) => (
                        <div
                            key={pillar.title}
                            className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-2xl transition duration-300"
                        >

                            <div className="w-16 h-16 rounded-full bg-[#7A4B2A]/10 mb-6 flex items-center justify-center">
                                🌿
                            </div>

                            <h2 className="text-2xl font-bold mb-4">
                                {pillar.title}
                            </h2>

                            <p className="text-black/70 leading-relaxed">
                                {pillar.description}
                            </p>

                        </div>
                    ))}

                </div>

            </section>


            {/* Vision Statement */}
            <section className="bg-[#7A4B2A] text-white py-24 px-6">

                <div className="max-w-5xl mx-auto text-center">

                    <h2 className="text-5xl font-bold mb-6">
                        A Culture That Continues To Evolve
                    </h2>

                    <p className="text-xl text-white/80 leading-relaxed">
                        Our goal is not only to preserve culture, but to create
                        new ways for people to engage with it through dialogue,
                        innovation, creativity and shared experiences.
                    </p>

                </div>

            </section>


            {/* Call To Action */}
            <section className="py-20 px-6 text-center">

                <h2 className="text-5xl font-bold mb-6">
                    Become Part Of The Impact
                </h2>

                <p className="text-lg text-black/70 max-w-2xl mx-auto mb-8">
                    Join a movement dedicated to protecting heritage, inspiring
                    creativity and strengthening cultural connections.
                </p>

                <button className="bg-[#2F4F3E] text-white px-8 py-4 rounded-full hover:opacity-90 transition">
                    Join The Community
                </button>

            </section>


            <Footer />

        </div>
    );
}