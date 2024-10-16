const SERVICES = [
  {
    title: "Vastu Consultation",
    description:
      "Get expert advice on how to harmonize your home or office with the principles of Vastu Shastra.",
    icon: "🏠", // You can replace this with an actual icon component or image
  },
  {
    title: "Interior Design",
    description:
      "We offer personalized interior design services to create spaces that are beautiful and functional.",
    icon: "🛋️",
  },
  {
    title: "Vastu Remedies",
    description:
      "We provide remedies for existing properties to correct any Vastu imbalances and improve well-being.",
    icon: "🔮",
  },
];

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto my-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-10 uppercase">
        Our Services
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-6xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
