export default function Card({ children, className = "" }) {
    return (
        <div
            className={`bg-white rounded-[36px] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${className}`}
        >
            {children}
        </div>
    );
}