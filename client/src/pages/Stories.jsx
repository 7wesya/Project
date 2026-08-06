import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import PlaceholderImage from "../components/ui/PlaceholderImage";
import stories from "../data/stories";
import gallery from "../data/gallery";
import { Link } from "react-router-dom";

export default function Stories() {

    return (
        <div className="bg-[#F8F4EE] min-h-screen animate-fadeIn">
            <Navbar />

            {/* Hero */}
            <Section className="pt-36">

                <Container>

                    <SectionTitle
                        subtitle="Stories & Insights"
                        title="Stories That Help Us Experience, Preserve & Reimagine Culture"
                    />

                </Container>

            </Section>

            {/* Featured Story */}
            <Section className="pt-0 pb-16">
                <Container>

                    <div className="bg-[#015A1F] rounded-[40px] overflow-hidden shadow-lg">
                        <div className="grid lg:grid-cols-2">
                            <PlaceholderImage
                                image={null}
                                label="Featured Story"
                            />
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
                </Container>
            </Section>

            {/* Story Categories / Article Grid */}
            <section className="px-6 pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-14 text-center">
                        <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4">

                        </p>

                        <h2 className="text-5xl font-bold text-[#2F4F3E] mb-6">
                            Explore Stories
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {stories.map((story) => (
                            <Card
                                key={story.title}
                                className="hover:-translate-y-1"
                            >
                                {/* Story Image Placeholder */}
                                <PlaceholderImage

                                    image={story.image}

                                    label={story.category}

                                />

                                <div className="p-8">
                                    <p className="uppercase text-sm tracking-widest text-[#7A4B2A] mb-3">
                                        {story.category}
                                    </p>

                                    <p className="text-sm text-gray-500 mb-4">
                                        {story.author} • {story.date} • {story.readTime}
                                    </p>

                                    <h3 className="text-2xl font-bold mb-4 text-[#2F4F3E] leading-snug">
                                        {story.title}
                                    </h3>

                                    <p className="text-black/70 leading-relaxed mb-6">
                                        {story.description}
                                    </p>

                                    <button className="font-semibold text-[#015A1F] hover:underline">
                                        Read More →
                                    </button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            < Section className="bg-white" >
                <Container>

                    <div className="text-center mb-16">

                        <p className="uppercase tracking-[0.35em] text-[#015A1F] font-semibold mb-4">
                            Moments That Tell Our Story
                        </p>

                        <h2 className="text-5xl font-bold text-[#015A1F] mb-6">
                            Through The Zed Speak Lens
                        </h2>

                        <p className="max-w-3xl mx-auto text-lg text-[#0F0F0E]/75 leading-relaxed">
                            Every experience, programme and conversation creates moments worth
                            remembering. This gallery will showcase the people, places and
                            stories that continue to shape the Zed Speak journey.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {gallery.map((item) => (

                            <Card key={item.id}>

                                <PlaceholderImage
                                    image={item.image}
                                    label={item.title}
                                />

                                <div className="p-6">

                                    <p className="uppercase text-sm tracking-widest text-[#D71E0F] mb-2">
                                        {item.category}
                                    </p>

                                    <h3 className="text-2xl font-bold text-[#015A1F]">
                                        {item.title}
                                    </h3>

                                </div>

                            </Card>

                        ))}

                    </div>

                </Container>

            </Section >

            {/* CTA */}
            < section className="py-24 px-6" >
                <div className="max-w-5xl mx-auto bg-[#015A1F] rounded-[40px] p-12 md:p-16 text-center text-white">
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
                            className="inline-block bg-white text-[#015A1F] px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
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
            </section >

            <Footer />
        </div >
    );
}