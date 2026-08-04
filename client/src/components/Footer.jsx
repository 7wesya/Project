import { Link } from "react-router-dom";
import Logo from "./ui/Logo";

export default function Footer() {
    const exploreLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Experiences", path: "/experiences" },
        { name: "Stories", path: "/stories" },
    ];

    const communityLinks = [
        { name: "Shop", path: "/shop" },
        { name: "Join The Journey", path: "/join-journey" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <footer className="bg-[#015A1F] text-white">

            <div className="max-w-7xl mx-auto px-6 py-20">

                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

                    {/* Brand */}

                    <div>

                        <Logo light />

                        <p className="mt-6 text-white/80 leading-relaxed">
                            Zed Speak is a cultural experiences,
                            storytelling and heritage ecosystem helping
                            people experience, preserve and reimagine
                            Zambian culture in meaningful ways.
                        </p>

                    </div>

                    {/* Explore */}

                    <div>

                        <h3 className="text-xl font-bold mb-6">
                            Explore
                        </h3>

                        <ul className="space-y-4">

                            {exploreLinks.map((item) => (

                                <li key={item.name}>

                                    <Link
                                        to={item.path}
                                        className="text-white/80 hover:text-white transition"
                                    >
                                        {item.name}
                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* Community */}

                    <div>

                        <h3 className="text-xl font-bold mb-6">
                            Community
                        </h3>

                        <ul className="space-y-4">

                            {communityLinks.map((item) => (

                                <li key={item.name}>

                                    <Link
                                        to={item.path}
                                        className="text-white/80 hover:text-white transition"
                                    >
                                        {item.name}
                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="text-xl font-bold mb-6">
                            Connect
                        </h3>

                        <div className="space-y-4 text-white/80">

                            <p>📍 Lusaka, Zambia</p>

                            <p>📧 hello@zedspeak.com</p>

                            <p>📱 +260 XXX XXX XXX</p>

                        </div>

                        <div className="flex gap-4 mt-8">

                            <a
                                href="#"
                                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#D71E0F] flex items-center justify-center transition-all duration-300"
                            >
                                📷
                            </a>

                            <a
                                href="#"
                                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#D71E0F] flex items-center justify-center transition-all duration-300"
                            >
                                📘
                            </a>

                            <a
                                href="#"
                                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#D71E0F] flex items-center justify-center transition-all duration-300"
                            >
                                ▶️
                            </a>

                            <a
                                href="#"
                                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#D71E0F] flex items-center justify-center transition-all duration-300"
                            >
                                💼
                            </a>

                        </div>

                    </div>

                </div>

                <div className="border-t border-white/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-white/60">
                        © {new Date().getFullYear()} Zed Speak. All Rights Reserved.
                    </p>

                    <p className="text-white/60">
                        Experience • Preserve • Reimagine
                    </p>

                </div>

            </div>

        </footer>
    );
}