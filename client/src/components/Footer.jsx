import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#2F4F3E] text-[#F8F4EE]">

            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div>
                        <h2 className="text-3xl font-bold mb-5">
                            Zed Speak
                        </h2>

                        <p className="text-[#F8F4EE]/80 leading-relaxed">
                            A cultural movement celebrating identity,
                            heritage, creativity and meaningful human
                            connections through stories and experiences.
                        </p>
                    </div>


                    {/* Navigation */}
                    <div>
                        <h3 className="text-xl font-semibold mb-5">
                            Explore
                        </h3>

                        <ul className="space-y-3 text-[#F8F4EE]/80">

                            <li>
                                <Link
                                    to="/about"
                                    className="hover:text-white transition"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/experiences"
                                    className="hover:text-white transition"
                                >
                                    Experiences
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/stories"
                                    className="hover:text-white transition"
                                >
                                    Stories
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/impact"
                                    className="hover:text-white transition"
                                >
                                    Cultural Impact
                                </Link>
                            </li>

                        </ul>
                    </div>


                    {/* Community */}
                    <div>
                        <h3 className="text-xl font-semibold mb-5">
                            Get Involved
                        </h3>

                        <ul className="space-y-3 text-[#F8F4EE]/80">

                            <li>
                                <Link
                                    to="/community"
                                    className="hover:text-white transition"
                                >
                                    Join Community
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/partnerships"
                                    className="hover:text-white transition"
                                >
                                    Partnerships
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-white transition"
                                >
                                    Contact Us
                                </Link>
                            </li>

                        </ul>
                    </div>


                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-semibold mb-5">
                            Connect
                        </h3>

                        <div className="space-y-3 text-[#F8F4EE]/80">

                            <p>
                                📍 Lusaka, Zambia
                            </p>

                            <p>
                                📧 hello@zedspeak.com
                            </p>

                            <p>
                                📱 +260 xxx xxx xxx
                            </p>

                        </div>


                        {/* Socials */}
                        <div className="flex gap-4 mt-6">

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7A4B2A] transition"
                            >
                                📷
                            </a>


                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7A4B2A] transition"
                            >
                                📘
                            </a>


                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7A4B2A] transition"
                            >
                                🎥
                            </a>

                        </div>

                    </div>

                </div>


                {/* Bottom */}
                <div className="border-t border-white/20 mt-14 pt-8 text-center text-[#F8F4EE]/60">

                    © {new Date().getFullYear()} Zed Speak.
                    All rights reserved.

                </div>

            </div>

        </footer>
    );
}