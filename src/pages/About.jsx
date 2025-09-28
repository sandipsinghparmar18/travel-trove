import React from "react";

const About = () => {
  return (
    <div className=" text-gray-100">
      <div className="container px-4 py-12 space-y-12">
        {/* Header */}
        <section className="text-center">
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">
            About TravelTrove
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            TravelTrove helps travelers discover blogs, explore hotels by
            country, and save their favorites — making travel planning easier,
            smarter, and more enjoyable.
          </p>
        </section>

        {/* Quote */}
        <section className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 rounded-lg p-8 shadow-xl">
          <p className="text-2xl md:text-3xl font-semibold italic text-center">
            “Travel is the only thing you buy that makes you richer.”
          </p>
        </section>

        {/* Vision & Mission */}
        <section>
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
            Our Vision & Mission
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-yellow-500/30 transition">
              <h4 className="font-bold text-xl mb-3">🌍 Vision</h4>
              <p className="text-gray-300">
                To become the go-to platform for travelers to explore,
                experience, and connect with destinations across the globe.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-yellow-500/30 transition">
              <h4 className="font-bold text-xl mb-3">🚀 Mission</h4>
              <p className="text-gray-300">
                Empower travelers with blogs, reviews, hotel listings, and tools
                that make trip planning seamless and inspiring.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section>
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
            Why Choose TravelTrove?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Curated Blogs",
                desc: "Read hand-picked travel stories, tips, and guides from experienced travelers.",
                icon: "📖",
              },
              {
                title: "Hotel Explorer",
                desc: "Find the best hotels by country, city, or budget with ease.",
                icon: "🏨",
              },
              {
                title: "Wishlist Feature",
                desc: "Save your favorite destinations and hotels for future adventures.",
                icon: "❤️",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-900 p-6 rounded-lg shadow hover:scale-105 hover:shadow-yellow-500/30 transition text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section>
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
            Meet Our Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sandip Singh Parmar",
                role: "Founder & Developer",
                img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Aditi Sharma",
                role: "Co-founder, Product Lead",
                img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Rahul Verma",
                role: "DevOps Engineer",
                img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=500&q=80",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-gray-900 rounded-lg shadow hover:shadow-yellow-500/30 overflow-hidden transform hover:scale-105 transition"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-lg">{member.name}</h4>
                  <p className="text-sm text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
