export default function SectionTitle({
    subtitle,
    title,
    description,
}) {
    return (
        <div className="text-center mb-16">

            {subtitle && (
                <p className="uppercase tracking-[0.3em] text-[#015A1F] mb-4">
                    {subtitle}
                </p>
            )}

            <h2 className="text-5xl font-bold text-[#015A1F] mb-6">
                {title}
            </h2>

            {description && (
                <p className="max-w-3xl mx-auto text-lg text-[#0F0F0E]/80">
                    {description}
                </p>
            )}

        </div>
    );
}