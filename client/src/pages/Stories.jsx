import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Stories() {
    const stories = [
        {
            category: "Identity",
            title: "What Does It Mean To Be Zambian Today?",
            description:
                "Exploring how tradition, modern life and global influences are shaping a new generation of cultural identity.",
        },
        {
            category: "Food & Heritage",
            title: "The Stories Hidden Around Our Tables",
            description:
                "From family recipes to shared meals, food carries memories, history and connections between generations.",
        },
        {
            category: "Creative Voices",
            title: "Artists Redefining African Storytelling",
            description:
                "A look at the creators, musicians and storytellers using new platforms to preserve and reinvent culture.",
        },
        {
            category: "Community",
            title: "Why Shared Experiences Matter",
            description:
                "The importance of gathering, listening and creating spaces where people feel seen and connected.",
        },
    ];

    return (
        <div className="bg-[#F8F4EE] min-h-screen animate-fadeIn">

            <Navbar />

            {/* Hero */}
            <section className="pt-36 pb-20 px-6 text-center">

                <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4">
                    Stories & Perspectives
                </p>

                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                    The Voices That Shape Our Culture
                </h1>

                <p className="max-w-3xl mx-auto text-xl text-black/70">
                    A collection of reflections, conversations and narratives
                    exploring identity, heritage, creativity and the evolving
                    story of who we are.
                </p>

            </section>


            {/* Featured Story */}
            <section className="px-6 pb-16">

                <div className="max-w-7xl mx-auto bg-[#2F4F3E] rounded-[40px] overflow-hidden">

                    <div className="grid lg:grid-cols-2">

                        <div className="h-80 lg:h-full bg-gradient-to-br from-[#7A4B2A] to-[#C98B4A]">
                        </div>


                        <div className="p-10 md:p-16 text-white flex flex-col justify-center">

                            <p className="uppercase tracking-[0.3em] text-white/70 mb-4">
                                Featured Conversation
                            </p>

                            <h2 className="text-4xl font-bold mb-6">
                                Keeping Our Stories Alive In A Changing World
                            </h2>

                            <p className="text-white/80 text-lg leading-relaxed mb-8">
                                The stories we tell today become the heritage of tomorrow.
                                Through dialogue, creativity and community,
                                we protect our past while imagining our future.
                            </p>

                            <button className="bg-white text-[#2F4F3E] px-6 py-3 rounded-full font-semibold w-fit">
                                Read Story
                            </button>

                        </div>

                    </div>

                </div>

            </section>


            {/* Story Grid */}
            <section className="px-6 pb-24">

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

                    {stories.map((story) => (
                        <div
                            key={story.title}
                            className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-xl transition duration-300"
                        >

                            <p className="uppercase text-sm tracking-widest text-[#7A4B2A] mb-3">
                                {story.category}
                            </p>

                            <h3 className="text-3xl font-bold mb-4">
                                {story.title}
                            </h3>

                            <p className="text-black/70 leading-relaxed mb-6">
                                {story.description}
                            </p>

                            <button className="text-[#7A4B2A] font-semibold hover:underline">
                                Continue Reading →
                            </button>

                        </div>
                    ))}

                </div>

            </section>


            {/* Community Voice CTA */}
            <section className="bg-white py-24 px-6">

                <div className="max-w-5xl mx-auto text-center">

                    <h2 className="text-5xl font-bold mb-6">
                        Every Voice Has A Story
                    </h2>

                    <p className="text-lg text-black/70 mb-10 max-w-3xl mx-auto">
                        We believe culture grows through shared experiences and
                        honest conversations. Zed Speak provides a platform for
                        voices that inspire, challenge and connect communities.
                    </p>

                    <button className="bg-[#7A4B2A] text-white px-8 py-4 rounded-full hover:opacity-90 transition">
                        Share Your Story
                    </button>

                </div>

            </section>


            <Footer />

        </div>
    );
}