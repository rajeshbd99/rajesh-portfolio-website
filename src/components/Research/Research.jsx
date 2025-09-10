// src/components/Research/Research.jsx
import { Link } from "react-router-dom";
import researchData from "../../data/researchData";

const Research = () => {
  return (
    <section id="research" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Research Work 🔬
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {researchData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-fill"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {item.description}
                </p>
                <Link
                  to={`/research/${item.id}`}
                  className="text-blue-400 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
