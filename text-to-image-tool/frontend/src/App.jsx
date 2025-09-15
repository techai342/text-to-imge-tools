import { useState } from 'react';
import { generateImage } from './api';
import './styles.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    setLoading(true);
    setError('');
    
    try {
      const result = await generateImage(prompt);
      console.log("Generated:", result);
      // Handle success here
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-center my-8">TECH.AI Image Generator</h1>
        
        {error && (
          <div className="bg-red-500 p-3 rounded mb-4">
            Error: {error}
          </div>
        )}

        <div className="max-w-md mx-auto">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt..."
            className="w-full p-3 rounded bg-gray-800 border border-gray-600"
          />
          
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-blue-600 p-3 rounded mt-4 hover:bg-blue-700 disabled:bg-gray-600"
          >
            {loading ? "Generating..." : "Generate Image"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
