// src/app/blogs/artificial-intelligence/page.tsx

"use client"; // Mark this file as a client component

import { useRouter } from "next/navigation";
import Image from "next/image";

const ArtificialIntelligence = () => {
  const router = useRouter();
// eslint-disable-next-line react/no-unescaped-entities
  return (
    <div className="bg-white min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Artificial Intelligence: Transforming Our Future</h1>
        <p className="text-gray-600 mb-2">Published on March 25, 2025</p>
        
        <Image
          src="/ai-illustration.jpg" // Use an appropriate image source
          alt="Artificial Intelligence"
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
        />
        
        <p className="text-lg text-gray-800 mb-4">
          Artificial Intelligence (AI) is reshaping industries, enhancing human capabilities, and driving innovation. As AI technologies evolve, they hold the potential to solve complex problems and improve efficiencies across various sectors.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">What is Artificial Intelligence?</h2>
        <p className="text-gray-600 mb-4">
          AI refers to the simulation of human intelligence in machines that are designed to think and act like humans. These systems can learn from experience, adapt to new inputs, and perform tasks that typically require human intelligence, such as understanding natural language, recognizing patterns, and making decisions.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">Key Areas of AI</h2>
        <ul className="list-disc list-inside mb-4 text-gray-600">
          <li>**Machine Learning**: A subset of AI that allows systems to learn and improve from data without being explicitly programmed.</li>
          <li>**Natural Language Processing (NLP)**: Enables machines to understand and respond to human language, used in applications like chatbots and virtual assistants.</li>
          <li>**Computer Vision**: Allows machines to interpret and make decisions based on visual data from the world, crucial in fields like healthcare and autonomous vehicles.</li>
          <li>**Robotics**: Integrates AI into physical robots, enhancing their ability to perform tasks in dynamic environments.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">Impact of AI on Industries</h2>
        <p className="text-gray-600 mb-4">
          AI is revolutionizing various industries:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-600">
          <li>**Healthcare**: AI aids in diagnosing diseases, personalizing treatment plans, and managing patient data efficiently.</li>
          <li>**Finance**: From fraud detection to algorithmic trading, AI enhances decision-making and risk management.</li>
          <li>**Transportation**: AI powers self-driving cars and optimizes logistics, improving safety and efficiency.</li>
          <li>**Customer Service**: AI-driven chatbots provide 24/7 support, enhancing customer experience and reducing operational costs.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">Ethical Considerations</h2>
        <p className="text-gray-600 mb-4">
          While the benefits of AI are significant, ethical considerations must be addressed. Issues such as data privacy, bias in AI algorithms, and job displacement due to automation require careful deliberation and regulatory oversight to ensure AI is used responsibly.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">Conclusion</h2>
        <p className="text-gray-600 mb-4">
          As we move forward, the importance of AI in shaping our future cannot be overstated. Embracing these technologies while being mindful of ethical implications will pave the way for a more intelligent and equitable society.
        </p>

        <button onClick={() => router.back()} className="mt-8 px-4 py-2 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition duration-300">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ArtificialIntelligence;
