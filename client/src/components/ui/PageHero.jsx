export default function PageHero({
    subtitle,
    title,
    description,
}) {
    return (
        <section className="pt-36 pb-20 px-6 text-center">

            <p className="uppercase tracking-[0.3em] text-[#015A1F] mb-4">
                {subtitle}
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-[#015A1F] mb-8">
                {title}
            </h1>

            <p className="max-w-3xl mx-auto text-xl text-[#0F0F0E]/80">
                {description}
            </p>

        </section>
    );
}