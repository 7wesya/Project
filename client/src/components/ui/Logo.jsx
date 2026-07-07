export default function Logo({ light = false }) {
    return (
        <div className="flex items-center gap-3">

            {/* Replace this circle with your logo later */}
            <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${light ? "bg-[#D71E0F]" : "bg-[#015A1F]"
                    }`}
            >
                Z
            </div>

            <div>

                <h2
                    className={`font-bold text-2xl ${light ? "text-white" : "text-[#015A1F]"
                        }`}
                >
                    ZED SPEAK
                </h2>

                <p
                    className={`text-xs tracking-wider ${light ? "text-white/80" : "text-[#D71E0F]"
                        }`}
                >
                    Culture, But Different.
                </p>

            </div>

        </div>
    );
}