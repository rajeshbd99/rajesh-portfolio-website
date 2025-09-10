// src/components/Research/ResearchDetails.jsx
import { useParams, Link } from "react-router-dom";
import researchData from "../../data/researchData";

const ResearchDetails = () => {
  const { id } = useParams();
  const research = researchData.find((item) => item.id === parseInt(id));

  if (!research) {
    return (
      <div className="text-center py-20 text-white">
        <h2 className="text-2xl font-bold">Research Not Found</h2>
        <Link to="/" className="text-blue-400 hover:underline">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10  max-w-4xl">
        <img
          src={research.image}
          alt={research.title}
          className="w-full h-72 object-fill rounded-lg mb-6"
        />
        <h2 className="text-3xl font-bold mb-4">{research.title}</h2>

        <p className="text-gray-300 mb-8 whitespace-pre-line">
          {research.abstract}
        </p>

        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-semibold mb-4">Publication Info</h3>
          <p><strong>Date:</strong> {research.publicationDate}</p>
          <p><strong>Authors:</strong> {research.authors}</p>
          <p><strong>Journal:</strong> {research.journal}</p>
          <p><strong>Publisher:</strong> {research.publisher}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">Keywords</h3>
          <div className="flex flex-wrap gap-2">
            {research.keywords.map((keyword, i) => (
              <span
                key={i}
                className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <a
            href={research.paperLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline block mb-2"
          >
            📄 View Paper
          </a>
          <a
            href={research.citation}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline"
          >
            🔗 Cite This Paper
          </a>
        </div>

        <Link to="/" className="text-blue-400 hover:underline">
          ← Back to Research
        </Link>
      </div>
    </section>
  );
};

export default ResearchDetails;
