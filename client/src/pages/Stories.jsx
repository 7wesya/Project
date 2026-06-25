import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Stories() {
    const stories = [
        {
            category: "Culture",
            title: "How Culture Shapes The Way We Live, Gather And Belong",
            image: null,
            description:
                "A reflection on how culture influences everyday life, relationships, traditions, celebrations and the spaces where people feel most at home.",
        },
        {
            category: "Identity",
            title: "What Does It Mean To Be Zambian Today?",
            image: null,
            description:
                "Exploring how tradition, modern life, migration, memory and global influences continue to shape identity in contemporary Zambia.",
        },
        {
            category: "Language",
            title: "Why Language Matters More Than We Think",
            image: null,
            description:
                "Looking at the role language plays in belonging, memory, intergenerational connection and the preservation of cultural knowledge.",
        },
        {
            category: "Heritage",
            title: "Preserving The Stories, Traditions And Knowledge We Inherit",
            image: null,
            description:
                "An exploration of how heritage lives through memory, ritual, place, oral tradition and the responsibility of passing it forward.",
        },
        {
            category: "Storytelling",
            title: "The Power Of Stories To Keep Culture Alive",
            image: null,
            description:
                "From oral traditions to modern platforms, storytelling remains one of the most powerful ways to remember, question and reimagine culture.",
        },
        {
            category: "Community",
            title: "Why Community Is At The Heart Of Cultural Connection",
            image: null,
            description:
                "Culture is rarely experienced alone. This piece explores how community creates belonging, keeps traditions alive and makes cultural learning possible.",
        },
    ];

    return (
        <div className="bg-[#F8F4EE] min-h-screen animate-fadeIn">
            <Navbar />

            {/* Hero */}
            <section className="pt-36 pb-20 px-6 text-center">
                <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4">
                    Stories That Help Us Experience,
                    Preserve And Reimagine Culture
                </p>

                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#2F4F3E]">
                    Stories & Insights
                </h1>

                <p className="max-w-3xl mx-auto text-xl text-black/70">
                    A growing collection of reflections, essays, conversations and
                    cultural stories exploring identity, language, heritage,
                    storytelling, community and the many ways culture shapes who we are.
                </p>
            </section>

            {/* Featured Story */}
            <section className="px-6 pb-16">
                <div className="max-w-7xl mx-auto bg-[#2F4F3E] rounded-[40px] overflow-hidden">
                    <div className="grid lg:grid-cols-2">
                        <div className="h-80 lg:h-full bg-[#E6DDD2] flex items-center justify-center">
                            <div className="text-center px-6">
                                <div className="text-5xl mb-4">📸</div>
                                <p className="text-[#7A4B2A] font-medium">
                                    Featured Story Image
                                </p>
                                <p className="text-sm text-[#7A4B2A]/70 mt-2">
                                    Replace with featured article image
                                </p>
                            </div>
                        </div>

                        <div className="p-10 md:p-16 text-white flex flex-col justify-center">
                            <p className="uppercase tracking-[0.3em] text-white/70 mb-4">
                                Featured Story
                            </p>

                            <h2 className="text-4xl font-bold mb-6">
                                Keeping Our Stories Alive In A Changing World
                            </h2>

                            <p className="text-white/80 text-lg leading-relaxed mb-8">
                                The stories we tell today become the heritage of tomorrow.
                                Through dialogue, creativity, memory and community,
                                storytelling helps us protect the past while imagining
                                the future.
                            </p>

                            <button className="bg-white text-[#2F4F3E] px-6 py-3 rounded-full font-semibold w-fit">
                                Read Story
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Categories / Article Grid */}
            <section className="px-6 pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-14 text-center">
                        <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4">
                            Explore Stories
                        </p>

                        <h2 className="text-5xl font-bold text-[#2F4F3E] mb-6">
                            Six Areas Of Conversation
                        </h2>

                        <p className="max-w-3xl mx-auto text-lg text-black/70">
                            These categories can hold articles, essays, interviews,
                            reflections and community stories as the Zed Speak archive grows.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {stories.map((story) => (
                            <article
                                key={story.title}
                                className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
                            >
                                {/* Story Image Placeholder */}
                                <div className="h-64 bg-[#E6DDD2] flex items-center justify-center">
                                    <div className="text-center px-6">
                                        <div className="text-5xl mb-4">📰</div>

                                        <p className="text-[#7A4B2A] font-medium">
                                            {story.category} Article Image
                                        </p>

                                        <p className="text-sm text-[#7A4B2A]/70 mt-2">
                                            Replace with article image
                                        </p>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <p className="uppercase text-sm tracking-widest text-[#7A4B2A] mb-3">
                                        {story.category}
                                    </p>

                                    <h3 className="text-2xl font-bold mb-4 text-[#2F4F3E] leading-snug">
                                        {story.title}
                                    </h3>

                                    <p className="text-black/70 leading-relaxed mb-6">
                                        {story.description}
                                    </p>

                                    <button className="text-[#7A4B2A] font-semibold hover:underline">
                                        Read More →
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Themes */}
            <section className="bg-white py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4">
                            What You’ll Find Here
                        </p>

                        <h2 className="text-5xl font-bold text-[#2F4F3E] mb-6">
                            A Home For Cultural Reflection
                        </h2>

                        <p className="max-w-3xl mx-auto text-lg text-black/70">
                            The Stories page is designed to hold a growing collection of writing
                            that reflects on where we come from, how we live and what culture
                            means in the present and future.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Personal reflections and essays",
                            "Interviews and conversations",
                            "Language and heritage stories",
                            "Community voices and lived experiences",
                            "Creative storytelling and cultural commentary",
                            "Ideas about the future of culture in Zambia",
                        ].map((item) => (
                            <div
                                key={item}
                                className="bg-[#F8F4EE] rounded-[28px] p-6 shadow-sm"
                            >
                                <p className="text-lg font-medium text-[#2F4F3E]">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto bg-[#7A4B2A] rounded-[40px] p-12 md:p-16 text-center text-white">
                    <p className="uppercase tracking-[0.3em] text-white/70 mb-4">
                        Join The Conversation
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Every Story Adds To The Bigger Picture
                    </h2>

                    <p className="max-w-3xl mx-auto text-lg text-white/80 leading-relaxed mb-10">
                        As Zed Speak grows, this space can become home to community stories,
                        reflections, interviews, essays and cultural writing that helps us
                        experience, preserve and reimagine culture together.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/contact"
                            className="inline-block bg-white text-[#7A4B2A] px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
                        >
                            Share A Story
                        </Link>

                        <Link
                            to="/join-journey"
                            className="inline-block border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#7A4B2A] transition"
                        >
                            Join The Journey
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}