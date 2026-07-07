export default function PlaceholderImage({ image, label }) {
    if (image) {
        return (
            <img
                src={image}
                alt={label}
                className="w-full h-64 object-cover rounded-t-[32px]"
            />
        );
    }

    return (
        <div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center rounded-t-[32px]">
            <div className="text-center">
                <div className="text-5xl mb-4">🖼️</div>
                <p className="font-semibold">{label}</p>
                <p className="text-sm text-gray-500">
                    Replace with final image
                </p>
            </div>
        </div>
    );
}