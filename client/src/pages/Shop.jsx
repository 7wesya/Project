import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Products() {
    return (
        <div className="bg-[#F8F4EE] min-h-screen animate-fadeIn">
            <Navbar />

            {/* Hero */}
            <section className="pt-36">

            </section>

            {/* Short Note */}
            <section className="pb-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2F4F3E] mb-6">
                        We’re Creating New Ways To Experience Culture.
                    </h2>

                    <p className="text-lg text-black/70 leading-relaxed mb-10">
                        Our first collection of books, games and cultural resources is
                        currently in development. Be the first to know when they're available.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/join-journey"
                            className="inline-block bg-[#7A4B2A] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
                        >
                            Join The Mailing List
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}