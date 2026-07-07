import { Link } from "react-router-dom";

export default function Button({
    children,
    to,
    variant = "primary",
    type = "button",
    onClick,
}) {
    const base =
        "inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl";

    const variants = {
        primary:
            "bg-[#015A1F] text-white hover:bg-[#026625]",

        secondary:
            "border-2 border-[#015A1F] text-[#015A1F] hover:bg-[#015A1F] hover:text-white",

        accent:
            "bg-[#D71E0F] text-white hover:bg-[#b5170c]",
    };

    if (to) {
        return (
            <Link
                to={to}
                className={`${base} ${variants[variant]}`}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${base} ${variants[variant]}`}
        >
            {children}
        </button>
    );
}