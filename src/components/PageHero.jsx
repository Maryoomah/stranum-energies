import Navbar from "./navbar";
export default function PageHero({
  title,
  subtitle,
  image,
  heightClass = "h-[55vh] min-h-[360px]",
  showNavbar = true,
}) {
  return (
    <section
      className={`relative w-full overflow-hidden bg-cover bg-top ${heightClass}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* navbar over hero */}
      {showNavbar && (
        <div className="absolute top-0 left-0 w-full z-20">
          <Navbar />
        </div>
      )}

      {/* content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="">

          <h1 className="mt-2 text-3xl sm:text-4xl md:text-6xl font-black text-white leading-[1.1] max-w-4xl uppercase drop-shadow-2xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-3 text-white/90 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
