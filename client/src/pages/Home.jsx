import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import PlaceholderImage from "../components/ui/PlaceholderImage";

export default function Home() {
    const pillars = [
        {
            title: "Experience Culture",
            description:
                "Interactive experiences, games, conversations, food and cultural journeys that bring people together.",
            label: "Experience Culture Image",
        },
        {
            title: "Preserve Culture",
            description:
                "Stories, languages, traditions, heritage and cultural knowledge shared across generations.",
            label: "Preserve Culture Image",
        },
        {
            title: "Reimagine Culture",
            description:
                "Creativity, innovation, technology and new ideas shaping the future of Zambian culture.",
            label: "Reimagine Culture Image",
        },
    ];

    const gallery = [
        "Experience Photo",
        "Storytelling",
        "Community",
        "Culture",
        "Heritage",
        "Events",
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
                            image={null}
                            label="Hero Image"
                        />

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

                        </div>

                    </div>

                </Container>

            </Section>

            <div className="max-w-7xl mx-auto px-6">

                <div className="border-t border-[#015A1F]/10"></div>

            </div>

            {/* Platform At A Glance */}

            <Section>

                <Container>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

                        <Card className="text-center p-8">

                            <h2 className="text-5xl font-bold text-[#015A1F] mb-3">
                                4
                            </h2>

                            <p className="font-semibold text-lg">
                                Experiences
                            </p>

                            <p className="text-sm text-[#0F0F0E]/60 mt-2">
                                Interactive cultural experiences
                            </p>

                        </Card>

                        <Card className="text-center p-8">

                            <h2 className="text-5xl font-bold text-[#015A1F] mb-3">
                                3
                            </h2>

                            <p className="font-semibold text-lg">
                                Programmes
                            </p>

                            <p className="text-sm text-[#0F0F0E]/60 mt-2">
                                Learning and community initiatives
                            </p>

                        </Card>

                        <Card className="text-center p-8">

                            <h2 className="text-5xl font-bold text-[#015A1F] mb-3">
                                6
                            </h2>

                            <p className="font-semibold text-lg">
                                Story Themes
                            </p>

                            <p className="text-sm text-[#0F0F0E]/60 mt-2">
                                Culture, identity and heritage
                            </p>

                        </Card>

                        <Card className="text-center p-8">

                            <h2 className="text-5xl font-bold text-[#015A1F] mb-3">
                                ∞
                            </h2>

                            <p className="font-semibold text-lg">
                                Possibilities
                            </p>

                            <p className="text-sm text-[#0F0F0E]/60 mt-2">
                                We're just getting started
                            </p>

                        </Card>

                    </div>

                </Container>

            </Section>

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

                            Zed Speak is a cultural experiences,
                            storytelling and heritage ecosystem helping
                            people experience, preserve and reimagine
                            Zambian culture in meaningful and contemporary
                            ways.

                        </p>

                    </div>

                    <div className="max-w-5xl mx-auto">
                        <p className="text-center text-lg leading-relaxed text-black/70">

                            Through experiences, programmes,
                            storytelling, community and future products,
                            we create opportunities for people to connect
                            with culture, celebrate identity and imagine
                            what culture can become.

                        </p>
                    </div>

                </Container >

            </Section >

            <div className="max-w-7xl mx-auto px-6">

                <div className="border-t border-[#015A1F]/10"></div>

            </div>

            {/* The Three Pillars */}

            < Section >

                <Container>

                    <div className="text-center mb-16">

                        <p className="uppercase tracking-[0.35em] text-[#015A1F] font-semibold mb-4">

                            Our Approach

                        </p>

                        <h2 className="text-5xl font-bold text-[#015A1F]">

                            Experience • Preserve • Reimagine

                        </h2>

                    </div>

                    <div className="grid md:grid-cols-3 gap-8">

                        {pillars.map((pillar) => (

                            <Card key={pillar.title}>

                                <PlaceholderImage
                                    image={null}
                                    label={pillar.label}
                                />

                                <div className="p-8">

                                    <h3 className="text-3xl font-bold text-[#015A1F] mb-4">

                                        {pillar.title}

                                    </h3>

                                    <p className="text-[#0F0F0E]/70 leading-relaxed">

                                        {pillar.description}

                                    </p>

                                </div>

                            </Card>

                        ))}

                    </div>

                </Container>

            </Section >

            <div className="max-w-7xl mx-auto px-6">

                <div className="border-t border-[#015A1F]/10"></div>

            </div>

            {/* Through the Zed Speak Lens */}
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

                        {gallery.map((item, index) => (

                            <Card
                                key={item}
                                className={`${index % 2 !== 0 ? "md:mt-10" : ""}`}
                            >

                                <PlaceholderImage
                                    image={null}
                                    label={item}
                                />

                            </Card>

                        ))}

                    </div>

                </Container>


            </Section >
            <div className="max-w-7xl mx-auto px-6">

                <div className="border-t border-[#015A1F]/10"></div>

            </div>

            {/* Get Involved */}

            < Section className="bg-[#015A1F] text-white" >

                <Container>

                    <div className="text-center mb-16">

                        <p className="uppercase tracking-[0.35em] text-white/70 mb-4">
                            Join The Movement
                        </p>

                        <h2 className="text-5xl font-bold mb-6">
                            There Are Many Ways To Get Involved
                        </h2>

                        <p className="max-w-3xl mx-auto text-lg text-white/80">
                            Whether you're attending an experience, partnering with us,
                            sharing your story or helping preserve culture, there's a place
                            for you within the Zed Speak community.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-3 gap-8">

                        <Card className="p-8 text-center">

                            <div className="text-5xl mb-6">
                                🎭
                            </div>

                            <h3 className="text-2xl font-bold text-[#015A1F] mb-4">
                                Attend Experiences
                            </h3>

                            <p className="text-[#0F0F0E]/70 mb-8">
                                Discover conversations, storytelling,
                                food, games and cultural experiences.
                            </p>

                            <Button to="/experiences">
                                Explore
                            </Button>

                        </Card>

                        <Card className="p-8 text-center">

                            <div className="text-5xl mb-6">
                                🤝
                            </div>

                            <h3 className="text-2xl font-bold text-[#015A1F] mb-4">
                                Partner With Us
                            </h3>

                            <p className="text-[#0F0F0E]/70 mb-8">
                                Collaborate with us to create
                                meaningful cultural impact.
                            </p>

                            <Button
                                variant="secondary"
                                to="/partnerships"
                            >
                                Learn More
                            </Button>

                        </Card>

                        <Card className="p-8 text-center">

                            <div className="text-5xl mb-6">
                                ❤️
                            </div>

                            <h3 className="text-2xl font-bold text-[#015A1F] mb-4">
                                Join The Community
                            </h3>

                            <p className="text-[#0F0F0E]/70 mb-8">
                                Stay connected and help shape
                                the future of Zed Speak.
                            </p>

                            <Button
                                variant="accent"
                                to="/join-journey"
                            >
                                Join
                            </Button>

                        </Card>

                    </div>

                </Container>

            </Section >


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