import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="bg-[#F8F4EE] min-h-screen animate-fadeIn">

            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-32 px-6">

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                    <div>

                        <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-5">
                            Experience • Preserve • Reimagine
                        </p>

                        <h1 className="text-6xl lg:text-7xl font-bold text-[#2F4F3E] leading-tight mb-6">
                            Culture,
                            <br />
                            But Different.
                        </h1>

                        <p className="text-xl text-gray-700 leading-relaxed mb-10">
                            Culture isn't something to watch from a distance. It's something
                            to experience, share, question, preserve and reimagine together.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/experiences"
                                className="inline-block bg-[#7A4B2A] text-white px-6 py-3 rounded-full hover:opacity-90 transition"
                            >
                                Explore Experiences
                            </Link>

                            <Link
                                to="/join-journey"
                                className="border border-[#7A4B2A] text-[#7A4B2A] px-8 py-4 rounded-full hover:bg-[#7A4B2A] hover:text-white transition"
                            >
                                Join The Journey
                            </Link>

                        </div>

                    </div>

                    <div>

                        <img
                            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
                            alt="community"
                            className="rounded-[40px] shadow-2xl"
                        />

                    </div>

                </div>

            </section>

            {/* What is Zed Speak */}

            <section className="py-24 px-6 bg-white">

                <div className="max-w-6xl mx-auto text-center">

                    <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4">
                        What is Zed Speak?
                    </p>

                    <h2 className="text-5xl font-bold text-[#2F4F3E] mb-6">
                        Culture, But Different
                    </h2>

                    <div className="max-w-3xl mx-auto text-lg text-gray-700">
                        <p className="mb-6">
                            Zed Speak is a cultural experience, heritage and storytelling
                            ecosystem dedicated to helping people experience, preserve
                            and reimagine Zambian culture in meaningful and contemporary
                            ways.
                        </p>

                        <p>
                            Through experiences, programmes, products and partnerships,
                            we create opportunities for people to connect with culture,
                            celebrate identity and explore new possibilities for the future.
                        </p>
                    </div>

                </div>

            </section>

            {/* The Three Pillars */}

            <section className="py-24 px-6">

                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4">
                            How We Engage With Culture </p>
                        <h2 className="text-5xl font-bold text-[#2F4F3E]">
                            The Three Pillars </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition">
                            <div className="h-64 bg-[#E6DDD2] flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-5xl mb-3">📸</div>
                                    <p className="text-[#7A4B2A]"> Experience Culture Image </p>
                                </div> </div> <div className="p-8">
                                <h3 className="text-3xl font-bold mb-4"> Experience Culture </h3>
                                <p className="text-gray-600"> Interactive experiences, games, conversations and cultural journeys. </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition">
                            <div className="h-64 bg-[#E6DDD2] flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-5xl mb-3">📸</div>
                                    <p className="text-[#7A4B2A]"> Preserve Culture Image </p>
                                </div> </div> <div className="p-8"> <h3 className="text-3xl font-bold mb-4"> Preserve Culture </h3>
                                <p className="text-gray-600"> Stories, languages, heritage and cultural knowledge. </p>
                            </div> </div>
                        <div className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition">
                            <div className="h-64 bg-[#E6DDD2] flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-5xl mb-3">📸</div>
                                    <p className="text-[#7A4B2A]"> Reimagine Culture Image </p>
                                </div> </div> <div className="p-8">
                                <h3 className="text-3xl font-bold mb-4"> Reimagine Culture </h3>
                                <p className="text-gray-600"> Creativity, innovation, technology and future culture. </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Through the Zed Speak Lens */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4">
                            Capturing moments that help people experience, preserve and reimagine culture. </p>
                        <h2 className="text-5xl font-bold text-[#2F4F3E] mb-6">
                            Through The Zed Speak Len </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Real moments. Real people. Real experiences. This space will showcase photography from our programmes, experiences and community events. </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((item) => (<div key={item} className="h-72 rounded-[24px] bg-[#E6DDD2] flex items-center justify-center" >
                            <div className="text-center">
                                <div className="text-5xl mb-3">📸</div>
                                <p className="text-[#7A4B2A]"> Event Photo Placeholder </p>
                            </div> </div>))}
                    </div>
                </div>
            </section>



            {/* Get Involved */}

            <section className="bg-[#2F4F3E] text-white py-24 px-6">

                <div className="max-w-5xl mx-auto text-center">
                    <p className="uppercase tracking-[0.3em] text-white/70 mb-4">
                        There Are Many Ways To Be Part Of The Journey </p>
                    <h2 className="text-5xl font-bold mb-6">
                        Get Involved</h2>
                    <p className="text-xl text-white/80 mb-12">
                        Experience culture, collaborate with us or support the movement to preserve and reimagine culture. </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link to="/experiences" className="bg-white text-[#2F4F3E] px-8 py-4 rounded-full font-semibold" >
                            Experiences </Link>
                        <Link to="/partnerships" className="bg-[#7A4B2A] text-white px-8 py-4 rounded-full font-semibold" >
                            Partner </Link>
                        <Link to="/contact" className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2F4F3E] transition" >
                            Support </Link>
                    </div>
                </div>

            </section>

            {/* CTA */}

            <section className="py-24 px-6">

                <div className="max-w-5xl mx-auto bg-[#7A4B2A] rounded-[40px] p-16 text-center text-white">

                    <h2 className="text-5xl font-bold mb-6">
                        Ready to Experience Culture Differently?
                    </h2>

                    <Link
                        to="/join-journey"
                        className="inline-block bg-white text-[#7A4B2A] px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
                    >
                        Join Comunity
                    </Link>

                </div>

            </section>

            <Footer />

        </div>
    );
}