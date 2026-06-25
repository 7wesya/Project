import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Products() {
    return (
        <div className="bg-[#F8F4EE] min-h-screen animate-fadeIn">
            <Navbar />

            {/* Hero */}
            <section className="pt-36 pb-20 px-6 text-center">
                <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4">
                    Zed Speak Products
                </p>

                <h1 className="text-5xl md:text-7xl font-bold text-[#2F4F3E] mb-8">
                    Zed Speak Products Coming Soon
                </h1>

                <p className="max-w-3xl mx-auto text-xl text-black/70 leading-relaxed">
                    This part of Zed Speak is still taking shape.
                    We do not have products available yet, but this page will grow
                    with the platform as new ideas, tools and cultural offerings are developed.
                </p>
            </section>

            {/* Main Coming Soon Block */}
            <section className="px-6 pb-24">
                <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-sm overflow-hidden">
                    <div className="grid lg:grid-cols-2">
                        <div className="bg-[#E6DDD2] min-h-[320px] flex items-center justify-center p-8">
                            <div className="text-center">
                                <div className="text-6xl mb-4">🛍️</div>
                                <p className="text-[#7A4B2A] font-semibold text-xl">
                                    Products Page Placeholder
                                </p>
                                <p className="text-[#7A4B2A]/70 mt-2">
                                    This space can be updated when the product direction is ready.
                                </p>
                            </div>
                        </div>

                        <div className="p-10 md:p-14 flex flex-col justify-center">
                            <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4">
                                Still In Development
                            </p>

                            <h2 className="text-4xl md:text-5xl font-bold text-[#2F4F3E] mb-6">
                                Nothing Here Yet,
                                But Not For Long
                            </h2>

                            <p className="text-lg text-black/70 leading-relaxed mb-6">
                                Zed Speak is currently focused on building its experiences,
                                programmes, storytelling and community offerings.
                            </p>

                            <p className="text-lg text-black/70 leading-relaxed">
                                The products section will be introduced when there is a clear
                                product direction that fits naturally into the Zed Speak ecosystem.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Short Note */}
            <section className="pb-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2F4F3E] mb-6">
                        For Now, We’re Building The Foundation
                    </h2>

                    <p className="text-lg text-black/70 leading-relaxed mb-10">
                        As Zed Speak grows, this page may eventually house products that support
                        cultural learning, storytelling, creativity or community engagement.
                        For now, it remains a placeholder while the wider platform continues to develop.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/join-journey"
                            className="inline-block bg-[#7A4B2A] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
                        >
                            Join The Journey
                        </Link>

                        <Link
                            to="/contact"
                            className="inline-block border border-[#7A4B2A] text-[#7A4B2A] px-8 py-4 rounded-full font-semibold hover:bg-[#7A4B2A] hover:text-white transition"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}