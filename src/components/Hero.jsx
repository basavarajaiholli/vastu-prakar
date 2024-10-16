import vastu from "../assets/vastu-img.avif";

const HERO_CONTENT = {
  title: "VastuPrakara",
  subtitle: "Building your future with us.",
};

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2">
      <div className="flex flex-col items-center my-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[8rem] xl:text-[10rem] p-2 uppercase font-bold text-center">
          {HERO_CONTENT.title}
        </h1>
        <p className="lg:mt-6 text-sm mb-4 font-medium tracking-tighter">
          {HERO_CONTENT.subtitle}
        </p>
        {/* Image */}
        <img
          src={vastu}
          alt="VastuPrakara Hero"
          className="w-full h-auto rounded-md"
        />
      </div>
    </section>
  );
};

export default Hero;
