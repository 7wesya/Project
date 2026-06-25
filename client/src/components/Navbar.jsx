import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: "Home", path: "/" },
        { name: "Experiences", path: "/experiences" },
        { name: "Stories", path: "/stories" },
        { name: "Programmes", path: "/programmes" },
        { name: "Community", path: "/community" },
        { name: "Products", path: "/products" },
        { name: "Partnerships", path: "/partnerships" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },

    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F4EE]/80 backdrop-blur-lg border-b border-black/10">

                <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-bold text-[#2F4F3E]"
                    >
                        Zed Speak
                    </Link>


                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">

                        {links.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `
                                    text-sm font-medium transition duration-300 
                                    ${isActive
                                        ? "text-[#7A4B2A]"
                                        : "text-black/70 hover:text-[#7A4B2A]"
                                    }
                                    `
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}


                        <Link
                            to="/community"
                            className="bg-[#7A4B2A] text-white px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition"
                        >
                            Join Movement
                        </Link>

                    </div>


                    {/* Mobile Button */}
                    <button
                        className="lg:hidden text-3xl text-[#2F4F3E]"
                        onClick={() => setMenuOpen(true)}
                    >
                        ☰
                    </button>

                </div>
            </nav>


            {/* Mobile Menu */}
            <div
                className={`
                fixed inset-0 bg-[#F8F4EE] z-[60]
                transition-transform duration-300
                ${menuOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >

                <div className="flex justify-between items-center p-6 border-b border-black/10">

                    <h2 className="text-2xl font-bold text-[#2F4F3E]">
                        Zed Speak
                    </h2>


                    <button
                        onClick={() => setMenuOpen(false)}
                        className="text-3xl"
                    >
                        ✕
                    </button>

                </div>


                <div className="flex flex-col px-8 py-10 gap-7">

                    {links.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                `
                                text-2xl font-medium transition
                                ${isActive
                                    ? "text-[#7A4B2A]"
                                    : "text-[#2F4F3E]"
                                }
                                `
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}


                    <Link
                        to="/community"
                        onClick={() => setMenuOpen(false)}
                        className="mt-4 bg-[#7A4B2A] text-white text-center py-4 rounded-full font-semibold"
                    >
                        Join The Movement
                    </Link>

                </div>

            </div>
        </>
    );
}