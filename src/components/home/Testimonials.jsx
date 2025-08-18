"use client";

export default function Testimonials() {
  const testimonials = [
    { name: "Ahmed Khan", feedback: "They made my business setup journey smooth and stress-free. Highly recommended!", company: "Startup Founder" },
    { name: "Sarah Ali", feedback: "Great support from start to finish. Their expert connections saved me time and money.", company: "Entrepreneur" },
  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div key={index} className="p-6 bg-gray-50 rounded-2xl shadow-md">
            <p className="text-gray-700 italic">“{t.feedback}”</p>
            <h4 className="mt-4 font-semibold">{t.name}</h4>
            <p className="text-gray-500">{t.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
