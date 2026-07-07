import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "./ui/Logo";
import Button from "./ui/Button";

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
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F4EE]/95 backdrop-blur-xl border-b border-[#015A1F]/10 shadow-sm">

                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    <Link to="/">
                        <Logo />
                    </Link>

                    <div className="hidden lg:flex items-center gap-8">

                        {links.map((link) => (

                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `relative font-medium transition-all duration-300

                                    ${isActive
                                        ? "text-[#015A1F]"
                                        : "text-[#0F0F0E]/70 hover:text-[#D71E0F]"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <div className="flex flex-col items-center">

                                        {link.name}

                                        <span
                                            className={`mt-1 h-[2px] rounded-full bg-[#D71E0F] transition-all duration-300 ${isActive
                                                    ? "w-full"
                                                    : "w-0"
                                                }`}
                                        />

                                    </div>
                                )}
                            </NavLink>

                        ))}

                        <Button to="/join-journey">
                            Join The Journey
                        </Button>

                    </div>

                    <button
                        onClick={() => setMenuOpen(true)}
                        className="lg:hidden text-3xl text-[#015A1F]"
                    >
                        ☰
                    </button>

                </div>

            </nav>

            {/* Mobile */}

            <div
                className={`fixed inset-0 bg-[#F8F4EE] z-[100] transition-transform duration-500 ${menuOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                    }`}
            >

                <div className="flex items-center justify-between p-6 border-b">

                    <Logo />

                    <button
                        onClick={() => setMenuOpen(false)}
                        className="text-4xl"
                    >
                        ×
                    </button>

                </div>

                <div className="flex flex-col p-8 gap-7">

                    {links.map((link) => (

                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#015A1F] text-2xl font-bold"
                                    : "text-2xl text-[#0F0F0E]/80"
                            }
                        >
                            {link.name}
                        </NavLink>

                    ))}

                    <div className="pt-6">

                        <Button to="/join-journey">
                            Join The Journey
                        </Button>

                    </div>

                </div>

            </div>

        </>
    );
}