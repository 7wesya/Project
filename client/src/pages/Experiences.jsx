import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import foodImage from "../assets/images/Food heritage.jpg";
export default function Experiences() {
    const experiences = [
        {
            title: "The Zed Table",
            description:
                "An intimate cultural dining experience where food, stories, traditions and conversations bring people together around the table.",
            category: "Food & Storytelling",
        },
        {
            title: "Culture Nights",
            description:
                "An evening of music, performances, conversations and creative expression celebrating Zambia's diverse cultural identity.",
            category: "Music & Performance",
        },
        {
            title: "Cook & Connect",
            description:
                "A hands-on experience where participants learn traditional recipes while connecting through shared stories and heritage.",
            category: "Cuisine & Community",
        },
        {
            title: "Echoes of Home",
            description:
                "A reflective storytelling journey exploring memories, identity, family history and the meaning of belonging.",
            category: "Heritage & Identity",
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
                    Experience Culture Beyond Observation
                </h1>

                <p className="max-w-3xl mx-auto text-xl text-black/70">
                    Our experiences are designed to transform culture from
                    something you simply see into something you feel, share,
                    and remember.
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

                            {/* Placeholder image area */}
                            <div className="h-64 bg-gradient-to-br from-[#7A4B2A] to-[#2F4F3E]"></div>


                            <div className="p-8">

                                <p className="uppercase tracking-widest text-sm text-[#7A4B2A] mb-3">
                                    {experience.category}
                                </p>

                                <h2 className="text-3xl font-bold mb-4">
                                    {experience.title}
                                </h2>

                                <p className="text-black/70 leading-relaxed mb-6">
                                    {experience.description}
                                </p>

                                <button className="border border-[#7A4B2A] text-[#7A4B2A] px-6 py-3 rounded-full hover:bg-[#7A4B2A] hover:text-white transition">
                                    Learn More
                                </button>

                            </div>

                        </div>
                    ))}

                </div>

            </section>


            {/* Why It Matters */}
            <section className="bg-[#2F4F3E] text-white py-20 px-6">

                <div className="max-w-5xl mx-auto text-center">

                    <h2 className="text-5xl font-bold mb-6">
                        More Than Events
                    </h2>

                    <p className="text-xl text-white/80 leading-relaxed">
                        Every Zed Speak experience is intentionally designed to
                        spark dialogue, preserve heritage, inspire creativity,
                        and strengthen the connections between people and their
                        cultural identities.
                    </p>

                </div>

            </section>


            {/* Call To Action */}
            <section className="py-20 px-6 text-center">

                <h2 className="text-5xl font-bold mb-6">
                    Ready To Join An Experience?
                </h2>

                <p className="text-lg text-black/70 max-w-2xl mx-auto mb-8">
                    Be among the first to participate in our upcoming cultural
                    journeys, conversations and community gatherings.
                </p>

                <button className="bg-[#7A4B2A] text-white px-8 py-4 rounded-full hover:opacity-90 transition">
                    Join The Community
                </button>

            </section>


            <Footer />

        </div>
    );
}