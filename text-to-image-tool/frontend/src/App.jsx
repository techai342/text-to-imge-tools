import { useState } from 'react';
import { generateImage } from './api';
import './styles.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError('');
    setResult(null);
    
    try {
      const data = await generateImage(prompt);
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">TECH.AI Image Generator</h1>
        <p className="text-gray-400">By Muhammad Saqib</p>
      </header>

      {/* Input Section */}
      <div className="max-w-md mx-auto">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt..."
          className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-500"
          disabled={loading}
        />
        
        <button
          onClick={handleGenerate}
          disabled={loading || !prompt.trim()}
          className="w-full bg-blue-600 p-3 rounded mt-4 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          {loading ? "Generating..." : "Generate Image"}
        </button>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500 p-3 rounded mt-4">
            Error: {error}
          </div>
        )}

        {/* Result Display */}
        {result && (
          <div className="mt-6 text-center">
            <img 
              src={result.imageUrl} 
              alt="Generated" 
              className="rounded-lg mx-auto shadow-lg max-w-full"
            />
            <p className="text-green-400 mt-2">{result.message}</p>
            <p className="text-gray-400">Prompt: {result.prompt}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
