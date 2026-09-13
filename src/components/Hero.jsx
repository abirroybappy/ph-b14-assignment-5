import bannerImage from "../assets/banner-stack.png";

export default function Hero() {
  
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white py-16 md:py-24"
    >
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />
      <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-purple-100/60 blur-3xl" />

      <div className="section-container relative grid items-center gap-12 lg:grid-cols-2">
        <div>
         

          <h1 className="max-w-2xl text-4xl font-black leading-[1.08] tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
            Build Your Ideal{" "}
            <span className="gradient-text">Development Stack</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-500 md:text-lg">
            Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#technologies"
              className="gradient-bg rounded-xl px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-pink-200 transition hover:-translate-y-0.5"
            >
              Explore Technolog
            </a>

            <a
              href="#about"
              className="rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-center text-sm font-bold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className=" mx-auto w-full max-w-130">
          <div className="inset-5 rounded-[40px] bg-linear-to-br from-orange-200 via-pink-200 to-purple-200 blur-3xl" />

          { (
                  <img
                   src={bannerImage}
                   alt="Dev Stack"
                  
                 />
               )}
        </div>
      </div>
    </section>
  );
}