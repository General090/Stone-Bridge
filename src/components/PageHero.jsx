export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  buttonText = "Explore",
}) {
  return (
    <section className="bg-[#061b2d] pt-19 text-white">
      <div className="mx-auto grid min-h-105 max-w-375 lg:grid-cols-[1.05fr_.95fr]">
        <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <p className="mb-7 text-sm font-bold uppercase tracking-wide text-[#d29a2e]">
            {eyebrow}
          </p>

          <h1 className="max-w-3xl font-serif text-4xl font-bold uppercase leading-[0.98] tracking-wide text-[#f8f6f0] sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="mt-9 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
            {description}
          </p>

          <button className="mt-9 w-fit rounded-md bg-[#d29a2e] px-7 py-4 text-sm font-bold uppercase tracking-wide text-[#061b2d] transition hover:bg-[#e0ad4a]">
            {buttonText}
          </button>
        </div>

        <div className="min-h-75 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      </div>
    </section>
  );
}
