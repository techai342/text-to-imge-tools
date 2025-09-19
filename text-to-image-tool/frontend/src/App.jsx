import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/generate", {
        prompt,
        userId: 1, // TODO: replace with logged-in user
      });
      setImageUrl(res.data.imageUrl);
    } catch (err) {
      alert(err.response?.data?.error || "Something went wrong");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4 neon-text">AI Text to Image</h1>

      <input
        type="text"
        className="w-full max-w-md p-2 rounded text-black"
        placeholder="Enter your prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="mt-4 px-4 py-2 bg-pink-600 rounded hover:bg-pink-700 neon-border"
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {imageUrl && (
        <div className="mt-6 relative inline-block">
          <img
            src={imageUrl}
            alt="Generated"
            className="rounded-lg shadow-lg border-2 border-pink-500"
          />
          {/* Watermark */}
          <span className="absolute bottom-2 right-2 text-xs text-white bg-black bg-opacity-60 px-2 py-1 rounded">
            TECH.AI
          </span>
        </div>
      )}
    </div>
  );
}