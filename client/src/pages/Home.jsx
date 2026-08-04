import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "../assets/images/home/Hero.jpg";
import experienceCulture from "../assets/images/home/Experience Culture.jpg";
import preserveCulture from "../assets/images/home/Preserve Culture.jpg";
import reimagineCulture from "../assets/images/home/Reimagine Culture.jpg";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import PlaceholderImage from "../components/ui/PlaceholderImage";

export default function Home() {
    const pillars = [
        {
            title: "Experience Culture",
            image: experienceCulture,
            label: "Experience Culture",
            description:
                "Interactive experiences, games, conversations and cultural journeys.",
        },
        {
            title: "Preserve Culture",
            image: preserveCulture,
            label: "Preserve Culture",
            description:
                "Stories, languages, heritage and cultural knowledge.",
        },
        {
            title: "Reimagine Culture",
            image: reimagineCulture,
            label: "Reimagine Culture",
            description:
                "Creativity, innovation, technology and future culture.",
        },
    ];

    return (
        <div className="bg-gradient-to-b from-[#F8F4EE] via-white to-[#F8F4EE] min-h-screen animate-fadeIn">

            <Navbar />

            {/* HERO */}

            <Section className="pt-40">

                <Container className="grid lg:grid-cols-2 gap-16 items-center">

                    <div>

                        <p className="uppercase tracking-[0.35em] text-[#015A1F] font-semibold mb-5">
                            Experience • Preserve • Reimagine
                        </p>

                        <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                            <span className="text-[#015A1F]">
                                Culture,
                            </span>

                            <br />

                            <span className="text-[#D71E0F]">
                                But
                            </span>{" "}

                            <span className="text-[#F59E0B]">
                                Different.
                            </span>
                        </h1>

                        <p className="text-xl text-[#0F0F0E]/75 leading-relaxed mb-10">

                            Culture isn't something to watch from a distance.

                            It's something to experience, share, preserve and
                            reimagine together.

                        </p>

                        <div className="flex flex-wrap gap-5">

                            <Button to="/experiences">
                                Explore Experiences
                            </Button>

                            <Button
                                variant="secondary"
                                to="/join-journey"
                            >
                                Join The Journey
                            </Button>

                        </div>

                    </div>

                    <div className="relative">

                        <PlaceholderImage
                            image={heroImage}
                            label="Hero Image"
                        />

                        {/* Just keep it. It is for the text found inside the picture on the home page. 
                        <div className="absolute bottom-8 left-8 bg-white rounded-3xl p-6 shadow-xl">

                            <p className="uppercase text-xs tracking-[0.3em] text-[#015A1F] mb-2">
                                Our Vision
                            </p>

                            <h3 className="text-2xl font-bold text-[#015A1F]">
                                Experience.
                                <br />
                                Preserve.
                                <br />
                                Reimagine.
                            </h3>

                        </div> */}

                    </div>

                </Container>

            </Section>

            <div className="max-w-7xl mx-auto px-6">

                <div className="border-t border-[#015A1F]/10"></div>

            </div>

            <div className="max-w-7xl mx-auto px-6">

                <div className="border-t border-[#015A1F]/10"></div>

            </div>

            {/* What is Zed Speak */}

            <Section className="bg-white">

                <Container className="text-center">

                    <p className="uppercase tracking-[0.35em] text-[#015A1F] font-semibold mb-4">

                        <span className="text-[#015A1F]">
                            Culture,
                        </span>

                        <br />

                        <span className="text-[#D71E0F]">
                            But
                        </span>{" "}

                        <span className="text-[#F59E0B]">
                            Different.
                        </span>

                    </p>

                    <h2 className="text-5xl font-bold text-[#015A1F] mb-8">

                        What is Zed Speak?

                    </h2>

                    <div className="max-w-5xl mx-auto">

                        <p className="text-center text-lg leading-relaxed text-black/70">

                            Zed Speak is a culture-focused organisation
                            creating interactive experiences that help people
                            experience, preserve and reimagine Zambain culture.

                        </p>

                    </div>

                </Container >

            </Section >


            <div className="max-w-7xl mx-auto px-6">

                <div className="border-t border-[#015A1F]/10"></div>

            </div>

            {/* Get Involved */}

            <Section className="bg-[#015A1F] text-white">

                <Container>

                    <div className="text-center mb-20">

                        <p className="uppercase tracking-[0.35em] text-white/70 mb-4">
                            Join The Movement
                        </p>

                        <h2 className="text-5xl font-bold mb-6">
                            There Are Many Ways To Get Involved
                        </h2>

                        <p className="max-w-3xl mx-auto text-lg text-white/80 leading-relaxed">
                            Whether you're attending an experience, partnering with us,
                            sharing your story or helping preserve culture, there's a place
                            for you within the Zed Speak community.
                        </p>

                    </div>


                    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

                        <Card className="p-10 text-center flex flex-col items-center justify-between min-h-[420px]">

                            <div>

                                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#F8F4EE] flex items-center justify-center text-5xl">
                                    🎭
                                </div>

                                <h3 className="text-3xl font-bold text-[#015A1F] mb-5">
                                    Attend Experiences
                                </h3>

                                <p className="text-[#0F0F0E]/70 leading-relaxed max-w-sm mx-auto">
                                    Discover conversations, storytelling,
                                    food, games and cultural experiences
                                    designed to help you connect with culture
                                    in meaningful ways.
                                </p>

                            </div>


                            <Button to="/experiences">
                                Explore
                            </Button>

                        </Card>



                        <Card className="p-10 text-center flex flex-col items-center justify-between min-h-[420px]">

                            <div>

                                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#F8F4EE] flex items-center justify-center text-5xl">
                                    ❤️
                                </div>

                                <h3 className="text-3xl font-bold text-[#015A1F] mb-5">
                                    Join The Community
                                </h3>

                                <p className="text-[#0F0F0E]/70 leading-relaxed max-w-sm mx-auto">
                                    Stay connected, share your voice and help
                                    shape the future of Zed Speak through
                                    culture, creativity and collaboration.
                                </p>

                            </div>


                            <Button
                                variant="accent"
                                to="/join-journey"
                            >
                                Join
                            </Button>

                        </Card>


                    </div>


                </Container>

            </Section>


            <div className="max-w-7xl mx-auto px-6">

                <div className="border-t border-[#015A1F]/10"></div>

            </div>

            {/* CTA */}

            < Section >

                <Container>

                    <div className="bg-gradient-to-r from-[#015A1F] to-[#02752A] rounded-[40px] px-10 py-20 text-center text-white">

                        <p className="uppercase tracking-[0.35em] text-white/70 mb-4">
                            Culture Starts With People
                        </p>

                        <h2 className="text-5xl md:text-6xl font-bold mb-8 !text-white">
                            Ready To Experience
                            <br />
                            Culture Differently?
                        </h2>

                        <p className="max-w-3xl mx-auto text-lg text-white/80 mb-12 leading-relaxed">

                            Join a growing movement that is redefining how
                            people experience, preserve and reimagine
                            Zambian culture through stories, conversations,
                            creativity and meaningful experiences.

                        </p>

                        <div className="flex flex-wrap justify-center gap-5">

                            <Button to="/join-journey">
                                Join The Journey
                            </Button>

                            <Button to="/contact">

                                Contact Us
                            </Button>

                        </div>

                    </div>

                </Container>

            </Section >

            <Footer />

        </div >

    );
}