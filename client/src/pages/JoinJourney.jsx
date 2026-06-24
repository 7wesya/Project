import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function JoinJourney() {

    return (
        <>
            <Navbar />

            <section className="pt-36 pb-24 px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <p className="uppercase tracking-[0.3em] text-[#7A4B2A] mb-4"> Join The Journey </p>
                    <h1 className="text-5xl md:text-6xl font-bold text-[#2F4F3E] mb-6"> Become Part Of The Community </h1>
                    <p className="text-lg text-black/70"> Join our growing community and be the first to hear about experiences, programmes, stories, events and opportunities to engage with culture differently. </p>
                </div>

                <div className="max-w-2xl mx-auto bg-white rounded-[40px] p-10 shadow-sm">

                    <form className="space-y-6">

                        <div>
                            <label className="block mb-2 font-medium">
                                Full Name
                            </label>

                            <input
                                type="text"
                                required
                                placeholder="Enter your full name"
                                className="w-full border border-gray-300 rounded-2xl px-5 py-4"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Email Address
                            </label>

                            <input
                                type="email"
                                required
                                placeholder="name@example.com"
                                className="w-full border border-gray-300 rounded-2xl px-5 py-4"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#7A4B2A] text-white py-4 rounded-full font-semibold hover:opacity-90 transition"
                        >
                            Join The Journey
                        </button>

                    </form>

                </div>

                <Footer />
            </section>
        </>
    );

}